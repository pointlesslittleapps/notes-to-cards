const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  getSettings: () => ipcRenderer.invoke("settings:get"),
  saveSettings: (settings) => ipcRenderer.invoke("settings:save", settings),
  clearSettings: () => ipcRenderer.invoke("settings:clear"),

  openExternal: (url) => ipcRenderer.invoke("shell:openExternal", url),

  saveTextFile: (content, defaultName) =>
    ipcRenderer.invoke("dialog:saveText", { content, defaultName }),
  saveDeck: (content, defaultName) =>
    ipcRenderer.invoke("dialog:saveDeck", { content, defaultName }),
  openDeck: () => ipcRenderer.invoke("dialog:openDeck"),

  printPage: () => ipcRenderer.invoke("print:page"),

  onMenuAction: (callback) => {
    ipcRenderer.on("menu-action", (event, action) => callback(action));
  },
});
