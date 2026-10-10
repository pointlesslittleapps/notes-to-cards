const { app, BrowserWindow, ipcMain, dialog, shell, safeStorage, Menu } = require("electron");
const path = require("path");
const fs = require("fs");

let mainWindow;

/* ---------- settings storage (API key + AI-mode flag) ---------- */
function settingsPath() {
  return path.join(app.getPath("userData"), "settings.bin");
}

function loadSettings() {
  try {
    const raw = fs.readFileSync(settingsPath());
    const json = safeStorage.isEncryptionAvailable()
      ? safeStorage.decryptString(raw)
      : raw.toString("utf8");
    return JSON.parse(json);
  } catch (e) {
    return { aiMode: false, apiKey: "" };
  }
}

function saveSettings(settings) {
  const json = JSON.stringify(settings);
  const data = safeStorage.isEncryptionAvailable()
    ? safeStorage.encryptString(json)
    : Buffer.from(json, "utf8");
  fs.writeFileSync(settingsPath(), data);
}

/* ---------- window + menu ---------- */
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 820,
    minWidth: 860,
    minHeight: 600,
    backgroundColor: "#FAFAF8",
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
    },
  });
  mainWindow.loadFile(path.join(__dirname, "..", "src", "index.html"));

  const isMac = process.platform === "darwin";
  const template = [
    ...(isMac ? [{ role: "appMenu" }] : []),
    {
      label: "File",
      submenu: [
        { label: "New Deck", click: () => mainWindow.webContents.send("menu-action", "new-deck") },
        { label: "Open Deck…", click: () => mainWindow.webContents.send("menu-action", "open-deck") },
        { label: "Save Deck…", click: () => mainWindow.webContents.send("menu-action", "save-deck") },
        { type: "separator" },
        { label: "Print…", click: () => mainWindow.webContents.send("menu-action", "print") },
        { type: "separator" },
        isMac ? { role: "close" } : { role: "quit" },
      ],
    },
    {
      label: "Edit",
      submenu: [
        { role: "undo" }, { role: "redo" }, { type: "separator" },
        { role: "cut" }, { role: "copy" }, { role: "paste" }, { role: "selectAll" },
      ],
    },
    {
      label: "View",
      submenu: [
        { role: "reload" }, { role: "toggleDevTools" }, { type: "separator" },
        { role: "resetZoom" }, { role: "zoomIn" }, { role: "zoomOut" }, { type: "separator" },
        { role: "togglefullscreen" },
      ],
    },
    {
      label: "Help",
      submenu: [
        {
          label: "Get an Anthropic API key",
          click: () => shell.openExternal("https://console.anthropic.com/settings/keys"),
        },
      ],
    },
  ];
  Menu.setApplicationMenu(Menu.buildFromTemplate(template));
}

app.whenReady().then(() => {
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

/* ---------- IPC: settings ---------- */
ipcMain.handle("settings:get", () => loadSettings());
ipcMain.handle("settings:save", (e, settings) => {
  saveSettings(settings);
  return true;
});
ipcMain.handle("settings:clear", () => {
  try {
    fs.unlinkSync(settingsPath());
  } catch (e) {
    /* nothing to clear */
  }
  return true;
});

/* ---------- IPC: external links ---------- */
ipcMain.handle("shell:openExternal", (e, url) => shell.openExternal(url));

/* ---------- IPC: file dialogs ---------- */
ipcMain.handle("dialog:saveText", async (e, { content, defaultName }) => {
  const { canceled, filePath } = await dialog.showSaveDialog(mainWindow, {
    defaultPath: defaultName,
    filters: [{ name: "Text file", extensions: ["txt"] }],
  });
  if (canceled || !filePath) return { ok: false };
  fs.writeFileSync(filePath, content, "utf8");
  return { ok: true, filePath };
});

ipcMain.handle("dialog:saveDeck", async (e, { content, defaultName }) => {
  const { canceled, filePath } = await dialog.showSaveDialog(mainWindow, {
    defaultPath: defaultName,
    filters: [{ name: "Notes to Cards Deck", extensions: ["json"] }],
  });
  if (canceled || !filePath) return { ok: false };
  fs.writeFileSync(filePath, content, "utf8");
  return { ok: true, filePath };
});

ipcMain.handle("dialog:openDeck", async () => {
  const { canceled, filePaths } = await dialog.showOpenDialog(mainWindow, {
    properties: ["openFile"],
    filters: [{ name: "Notes to Cards Deck", extensions: ["json"] }],
  });
  if (canceled || !filePaths[0]) return { ok: false };
  const content = fs.readFileSync(filePaths[0], "utf8");
  return { ok: true, content };
});

/* ---------- IPC: print ---------- */
ipcMain.handle("print:page", () => {
  mainWindow.webContents.print({ printBackground: true });
});
