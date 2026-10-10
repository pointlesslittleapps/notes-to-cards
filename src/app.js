/* ============================================================
   Notes to Cards — desktop app logic (no build step, vanilla JS)
   ============================================================ */

/* ---------- tiny icon set (inline SVG, offline-safe) ---------- */
function icon(name, size = 14) {
  const p = {
    mic: '<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/>',
    square: '<rect x="5" y="5" width="14" height="14" rx="1"/>',
    upload: '<path d="M12 16V4"/><path d="M6 10l6-6 6 6"/><path d="M4 20h16"/>',
    file: '<path d="M6 2h9l5 5v15H6z"/><path d="M15 2v5h5"/>',
    image: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/>',
    trash: '<path d="M4 7h16"/><path d="M9 7V4h6v3"/><path d="M6 7l1 13h10l1-13"/>',
    pencil: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',
    check: '<path d="M20 6L9 17l-5-5"/>',
    x: '<path d="M18 6L6 18"/><path d="M6 6l12 12"/>',
    shuffle: '<path d="M17 3h4v4"/><path d="M4 20l17-17"/><path d="M4 4l4 0"/><path d="M4 4l13 13"/><path d="M21 21h-4v-4"/>',
    chevronLeft: '<path d="M15 18l-6-6 6-6"/>',
    chevronRight: '<path d="M9 18l6-6-6-6"/>',
    printer: '<path d="M6 9V3h12v6"/><rect x="4" y="9" width="16" height="8" rx="1"/><path d="M6 17h12v5H6z"/>',
    sparkles: '<path d="M12 3v4"/><path d="M12 17v4"/><path d="M3 12h4"/><path d="M17 12h4"/><path d="M6 6l2 2"/><path d="M16 16l2 2"/><path d="M18 6l-2 2"/><path d="M8 16l-2 2"/>',
    plus: '<path d="M12 5v14"/><path d="M5 12h14"/>',
    loader: '<path d="M12 2v4"/><path d="M12 18v4"/><path d="M4.9 4.9l2.8 2.8"/><path d="M16.3 16.3l2.8 2.8"/><path d="M2 12h4"/><path d="M18 12h4"/><path d="M4.9 19.1l2.8-2.8"/><path d="M16.3 7.7l2.8-2.8"/>',
    alert: '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>',
    rotate: '<path d="M21 12a9 9 0 1 1-3-6.7"/><path d="M21 3v6h-6"/>',
    cap: '<path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5"/>',
    clipboard: '<rect x="6" y="4" width="12" height="17" rx="1"/><path d="M9 4V2h6v2"/>',
    layers: '<path d="M12 2l9 5-9 5-9-5 9-5z"/><path d="M3 12l9 5 9-5"/>',
    palette: '<path d="M12 2a10 10 0 1 0 0 20c1.1 0 2-.9 2-2 0-.5-.2-1-.5-1.4-.3-.4-.5-.9-.5-1.4 0-1.1.9-2 2-2h2.3A4.7 4.7 0 0 0 22 10.7C22 5.9 17.5 2 12 2z"/><circle cx="7" cy="10" r="1.3"/><circle cx="11" cy="7" r="1.3"/><circle cx="15.5" cy="8" r="1.3"/>',
    gear: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
  };
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${p[name] || ""}</svg>`;
}

/* ---------- constants ---------- */
const CATEGORIES = ["Pharmacology", "Med-Surg", "Pediatrics", "OB/Maternity", "Mental Health", "Fundamentals", "Other"];
const CATEGORY_COLORS = {
  "Pharmacology": { bg: "#F7EDD9", ink: "#8A5A00", bar: "#B9791A" },
  "Med-Surg": { bg: "#E1EEEC", ink: "#1F5C5B", bar: "#2A7F7E" },
  "Pediatrics": { bg: "#F3E5EA", ink: "#8A3A56", bar: "#B85C7E" },
  "OB/Maternity": { bg: "#E9EDDC", ink: "#57692C", bar: "#8CA24A" },
  "Mental Health": { bg: "#E6E3F1", ink: "#4B3E85", bar: "#7566B8" },
  "Fundamentals": { bg: "#E4EBF1", ink: "#2E4B63", bar: "#4C7EA0" },
  "Other": { bg: "#EBE8E1", ink: "#5A554C", bar: "#8C8375" },
};
function colorFor(cat) { return CATEGORY_COLORS[cat] || CATEGORY_COLORS.Other; }

const NEON_COLORS = [
  { name: "Neon yellow", value: "#F5FF00" },
  { name: "Neon pink", value: "#FF3EC9" },
  { name: "Neon green", value: "#39FF7A" },
  { name: "Neon blue", value: "#28D8FF" },
];
function uid() { return Math.random().toString(36).slice(2) + Date.now().toString(36); }
function esc(s) {
  return String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

/* ---------- rich text: sanitizing + formatting helpers ---------- */
const RICH_ALLOWED_TAGS = new Set(["B", "STRONG", "I", "EM", "U", "SPAN", "BR"]);
function sanitizeHtml(html) {
  const tpl = document.createElement("template");
  tpl.innerHTML = html || "";
  (function clean(node) {
    Array.from(node.childNodes).forEach((child) => {
      if (child.nodeType === Node.TEXT_NODE) return;
      if (child.nodeType !== Node.ELEMENT_NODE) { node.removeChild(child); return; }
      if (!RICH_ALLOWED_TAGS.has(child.tagName)) {
        if (child.tagName === "DIV" || child.tagName === "P") {
          node.insertBefore(document.createElement("br"), child);
        }
        while (child.firstChild) node.insertBefore(child.firstChild, child);
        node.removeChild(child);
        return;
      }
      if (child.tagName === "SPAN") {
        const bg = child.style.backgroundColor;
        Array.from(child.attributes).forEach((a) => child.removeAttribute(a.name));
        if (bg) child.style.backgroundColor = bg;
      } else {
        Array.from(child.attributes).forEach((a) => child.removeAttribute(a.name));
      }
      clean(child);
    });
  })(tpl.content);
  return tpl.innerHTML;
}
function stripTags(html) {
  const d = document.createElement("div");
  d.innerHTML = html || "";
  return (d.textContent || "").replace(/\u200B/g, "");
}
function fmtToCss(fmt) {
  const parts = [];
  if (fmt.bold) parts.push("font-weight:700");
  if (fmt.italic) parts.push("font-style:italic");
  if (fmt.underline) parts.push("text-decoration:underline");
  if (fmt.highlight && fmt.highlight !== "none") parts.push(`background-color:${fmt.highlight}`);
  return parts.join(";");
}
function applyTemplateStyleToEditable(el, fmt) {
  if (!el) return;
  el.innerHTML = `<span style="${fmtToCss(fmt)}">\u200B</span>`;
  try {
    const range = document.createRange();
    const sel = window.getSelection();
    range.selectNodeContents(el.firstChild);
    range.collapse(false);
    sel.removeAllRanges();
    sel.addRange(range);
  } catch (e) { /* focus without caret placement is fine as a fallback */ }
}
function formatToolbarHtml(targetId) {
  return `<div class="fmt-toolbar" data-for="${targetId}">
    <button type="button" class="fmt-btn" data-cmd="bold" title="Bold"><b>B</b></button>
    <button type="button" class="fmt-btn" data-cmd="italic" title="Italic"><i>I</i></button>
    <button type="button" class="fmt-btn" data-cmd="underline" title="Underline"><u>U</u></button>
    <span class="fmt-sep"></span>
    ${NEON_COLORS.map((c) => `<button type="button" class="fmt-swatch" data-highlight="${c.value}" style="background:${c.value}" title="${c.name}"></button>`).join("")}
    <button type="button" class="fmt-swatch fmt-swatch-none" data-highlight="none" title="No highlight">${icon("x", 11)}</button>
  </div>`;
}
function wireFormatToolbars(scopeEl) {
  scopeEl.querySelectorAll(".fmt-toolbar[data-for]").forEach((tb) => {
    const targetId = tb.getAttribute("data-for");
    tb.querySelectorAll(".fmt-btn").forEach((btn) => {
      btn.addEventListener("mousedown", (e) => e.preventDefault());
      btn.addEventListener("click", () => {
        const field = document.getElementById(targetId);
        field.focus();
        document.execCommand(btn.getAttribute("data-cmd"));
      });
    });
    tb.querySelectorAll(".fmt-swatch").forEach((sw) => {
      sw.addEventListener("mousedown", (e) => e.preventDefault());
      sw.addEventListener("click", () => {
        const field = document.getElementById(targetId);
        field.focus();
        const val = sw.getAttribute("data-highlight");
        document.execCommand("hiliteColor", false, val === "none" ? "transparent" : val);
      });
    });
  });
}

/* ---------- global state ---------- */
const state = {
  tab: "collect",
  sources: [],
  flashcards: [],
  templates: [
    {
      id: "blank",
      name: "Blank",
      front: { bold: false, italic: false, underline: false, highlight: "none" },
      back: { bold: false, italic: false, underline: false, highlight: "none" },
    },
  ],
  settings: { aiMode: false, apiKey: "" },
  generating: false,
  genError: null,
  collectSelected: new Set(),
  buildFilter: "All",
  buildSelected: new Set(),
  studyFilter: "All",
  studyOrder: [],
  studyIndex: 0,
  studyFlipped: false,
  printFilter: "All",
};

const root = document.getElementById("root");

/* ============================================================
   AI helpers (used only when Settings > AI mode is enabled)
   ============================================================ */
async function callClaude(content) {
  const resp = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-api-key": state.settings.apiKey,
      "anthropic-version": "2023-06-01",
      "anthropic-dangerous-direct-browser-access": "true",
    },
    body: JSON.stringify({ model: "claude-sonnet-4-6", max_tokens: 4096, messages: [{ role: "user", content }] }),
  });
  if (!resp.ok) {
    if (resp.status === 401) throw new Error("That API key was rejected. Check it in Settings.");
    throw new Error("API request failed (" + resp.status + ")");
  }
  const data = await resp.json();
  return (data.content || []).filter((b) => b.type === "text").map((b) => b.text).join("\n");
}

async function extractTextFromImageAI(base64, mediaType) {
  const text = await callClaude([
    { type: "image", source: { type: "base64", media_type: mediaType, data: base64 } },
    { type: "text", text: "Transcribe every bit of readable study-relevant text in this image exactly as written (notes, labels, lab values, drug names, doses). Plain text only, no commentary." },
  ]);
  return text.trim();
}

const FLASHCARD_PROMPT = (rawText) => `You are helping a BSN (nursing) student convert raw study notes into flashcards for exam and NCLEX-style review.

Return ONLY a JSON array (no markdown fences, no preamble, no trailing text). Each element must be an object:
{"front": "short prompt, term, or question", "back": "concise nursing-relevant answer: definition, normal range, mechanism, nursing implication, or priority action", "category": "one of Pharmacology, Med-Surg, Pediatrics, OB/Maternity, Mental Health, Fundamentals, Other"}

Guidelines:
- Break dense content into several focused cards rather than one dense card.
- Favor the way nursing exam questions are asked (e.g. "Priority nursing action for...", "Normal range for...", "Contraindication for...").
- Keep fronts short. Keep backs tight and scannable, not paragraphs.
- Pick the single best-fit category per card.
- If the notes contain no usable study content, return [].

Notes:
"""
${rawText}
"""`;

async function generateCardsFromTextAI(rawText) {
  const raw = await callClaude(FLASHCARD_PROMPT(rawText));
  const cleaned = raw.replace(/```json|```/g, "").trim();
  const parsed = JSON.parse(cleaned);
  if (!Array.isArray(parsed)) throw new Error("Unexpected response shape");
  return parsed.filter((c) => c && c.front && c.back).map((c) => ({
    id: uid(),
    front: esc(String(c.front).trim()),
    back: esc(String(c.back).trim()),
    category: CATEGORIES.includes(c.category) ? c.category : "Other",
  }));
}

/* ============================================================
   No-AI rule-based organizer (default path)
   ============================================================ */
function guessCategory(text) {
  const t = text.toLowerCase();
  const rules = [
    { cat: "Pharmacology", kws: [" mg", " mcg", "dose", "drug", "medication", "contraindicat", "side effect", "iv push", "diuretic", "antibiotic"] },
    { cat: "OB/Maternity", kws: ["fetal", "pregnan", "labor", "postpartum", "newborn", "contraction", "gravida", "para "] },
    { cat: "Pediatrics", kws: ["infant", "toddler", "pediatric", "growth chart", "immunization schedule"] },
    { cat: "Mental Health", kws: ["anxiety", "depress", "psychosis", "schizophreni", "bipolar", "therapy", "risk assessment"] },
    { cat: "Fundamentals", kws: ["vital signs", "hygiene", "adl", "range of motion", "body mechanics", "informed consent"] },
    { cat: "Med-Surg", kws: ["post-op", "surgical", "wound", "cardiac", "respiratory", "renal", "hepatic", "diabetes", "copd", "chf"] },
  ];
  for (const r of rules) if (r.kws.some((k) => t.includes(k))) return r.cat;
  return "Other";
}
function makeCard(front, back) {
  const category = guessCategory(front + " " + back);
  return { id: uid(), front: esc(front.trim()), back: esc(back.trim()), category };
}
function extractQAPairs(lines) {
  const pairs = [];
  let pendingQ = null;
  for (const line of lines) {
    const q = line.match(/^q[:.)]\s*(.+)/i);
    const a = line.match(/^a[:.)]\s*(.+)/i);
    if (q) pendingQ = q[1];
    else if (a && pendingQ) { pairs.push({ q: pendingQ, a: a[1] }); pendingQ = null; }
  }
  return pairs;
}
function splitOnDelimiter(line) {
  const clean = line.replace(/^[-*•]\s*/, "");
  for (const d of [" :: ", " | ", " — ", " -- ", ": "]) {
    const idx = clean.indexOf(d);
    if (idx > 0) return { front: clean.slice(0, idx).trim(), back: clean.slice(idx + d.length).trim() };
  }
  return null;
}
function basicOrganize(rawText) {
  const blocks = rawText.split(/\n\s*\n/).map((b) => b.trim()).filter(Boolean);
  const cards = [];
  let skipped = 0;
  for (const block of blocks) {
    const lines = block.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
    if (!lines.length) continue;
    const qa = extractQAPairs(lines);
    if (qa.length) { qa.forEach((p) => cards.push(makeCard(p.q, p.a))); continue; }
    if (lines.length === 1) {
      const split = splitOnDelimiter(lines[0]);
      if (split) cards.push(makeCard(split.front, split.back));
      else skipped++;
      continue;
    }
    const front = lines[0].replace(/^[-*•]\s*/, "");
    const back = lines.slice(1).join(" ");
    cards.push(makeCard(front, back));
  }
  return { cards, skipped };
}

/* ============================================================
   render helpers
   ============================================================ */
function render() {
  root.innerHTML = `
    <div class="app-header no-print">
      <div class="container app-header-top">
        <div class="app-title">${icon("cap", 22)} Notes to Cards</div>
        <div class="app-stats">${state.flashcards.length} card${state.flashcards.length === 1 ? "" : "s"} · ${new Set(state.flashcards.map((c) => c.category)).size} categories</div>
      </div>
      <div class="container tabs">
        ${tabBtn("collect", "clipboard", "Collect", state.sources.length)}
        ${tabBtn("build", "layers", "Build", state.flashcards.length)}
        ${tabBtn("study", "cap", "Study")}
        ${tabBtn("print", "printer", "Print")}
        ${tabBtn("templates", "palette", "Templates", state.templates.length)}
        ${tabBtn("settings", "gear", "Settings")}
      </div>
    </div>
    ${state.generating ? `<div class="container status-row status-generating no-print">${icon("loader", 14)} Reading your notes and drafting cards…</div>` : ""}
    ${state.genError ? `<div class="container status-row status-error no-print">${icon("alert", 14)} ${esc(state.genError)}</div>` : ""}
    <div class="container" style="padding-top:20px;padding-bottom:20px" id="tab-body"></div>
    <div class="container no-print-note no-print">
      Decks stay on this computer. Use File &gt; Save Deck to keep your work, or File &gt; Open Deck to load one back in.
    </div>
  `;
  const body = document.getElementById("tab-body");
  if (state.tab === "collect") renderCollect(body);
  else if (state.tab === "build") renderBuild(body);
  else if (state.tab === "study") renderStudy(body);
  else if (state.tab === "print") renderPrint(body);
  else if (state.tab === "templates") renderTemplates(body);
  else if (state.tab === "settings") renderSettings(body);

  document.querySelectorAll("[data-tab]").forEach((el) => {
    el.addEventListener("click", () => { state.tab = el.getAttribute("data-tab"); render(); });
  });
}
function tabBtn(id, iconName, label, count) {
  const active = state.tab === id;
  return `<button class="tab-btn ${active ? "active" : ""}" data-tab="${id}">
    ${icon(iconName, 15)} ${label} ${typeof count === "number" ? `<span class="tab-count">${count}</span>` : ""}
  </button>`;
}

/* ============================================================
   Collect tab
   ============================================================ */
let recognition = null;
let finalTranscript = "";

function renderCollect(el) {
  if (state.collectSelected.size === 0 && state.sources.length) {
    state.sources.forEach((s) => state.collectSelected.add(s.id));
  }
  el.innerHTML = `
    <div class="collect-grid">
      <div class="collect-left">
        <div class="card-panel">
          <div class="section-label">Record</div>
          <div class="record-row">
            <button class="btn" id="rec-btn" style="background:${recogActive ? "#B14B41" : "#2A7F7E"}">
              ${icon(recogActive ? "square" : "mic", 14)} ${recogActive ? "Stop &amp; save" : "Start recording"}
            </button>
            ${recogActive ? `<span style="font-family:var(--font-mono);font-size:12px;color:var(--coral)"><span class="rec-dot"></span> listening…</span>` : ""}
          </div>
          <p class="muted" id="rec-live" style="margin-top:10px">${recogActive ? esc(finalTranscript) || "Start talking — say the term, then the definition." : ""}</p>
        </div>

        <div class="card-panel">
          <div class="section-label">Upload</div>
          <div class="dropzone" id="dropzone">
            ${icon("upload", 18)}
            <span class="muted">Drop lecture notes (.txt, .md)${state.settings.aiMode ? " or photos of your notes/slides" : ""}</span>
            <input type="file" id="file-input" multiple accept="${state.settings.aiMode ? ".txt,.md,image/*" : ".txt,.md"}" style="display:none" />
          </div>
          ${!state.settings.aiMode ? `<p class="muted" style="margin-top:8px">Reading text out of photos needs AI mode (Settings tab).</p>` : ""}
        </div>

        <div class="card-panel">
          <div class="section-label">Type a note</div>
          <textarea id="manual-text" rows="5" placeholder="Paste or type notes here — e.g. drug classes, lab values, s/sx of a condition…"></textarea>
          <button class="btn" id="add-manual" style="margin-top:8px">${icon("plus", 14)} Add note</button>
        </div>
      </div>

      <div class="card-panel">
        <div class="section-label" style="display:flex;justify-content:space-between">
          <span>Collected (${state.sources.length})</span>
          ${state.sources.length ? `<span>${state.collectSelected.size} selected</span>` : ""}
        </div>
        ${state.sources.length === 0
          ? `<p class="muted">Nothing yet. Record, upload, or type a note — it'll land here, ready to turn into flashcards.</p>`
          : `<div class="sources-list">${state.sources.map(sourceItemHtml).join("")}</div>`}

        <div style="display:flex;gap:8px;margin-top:16px;flex-wrap:wrap">
          <button class="btn" id="organize-btn" ${state.collectSelected.size === 0 ? "disabled" : ""} style="flex:1">
            ${icon("sparkles", 15)} Turn into flashcards${state.settings.aiMode ? " (AI)" : ""}
          </button>
        </div>
        <div style="display:flex;gap:8px;margin-top:8px;flex-wrap:wrap">
          <button class="btn btn-outline" id="export-ai-btn" ${state.collectSelected.size === 0 ? "disabled" : ""}>Export notes for AI</button>
          <button class="btn btn-outline" id="import-ai-btn">Import AI flashcards</button>
        </div>
        ${!state.settings.aiMode ? `<p class="muted" style="margin-top:8px">Basic mode looks for patterns like "Term: definition" or "Q: … A: …" per note. Messier notes? Try "Export notes for AI" and paste the result into any AI chatbot.</p>` : ""}
      </div>
    </div>
  `;

  document.getElementById("rec-btn").addEventListener("click", toggleRecording);
  document.getElementById("add-manual").addEventListener("click", () => {
    const ta = document.getElementById("manual-text");
    if (!ta.value.trim()) return;
    addSource({ id: uid(), type: "manual", title: "Typed note", text: ta.value.trim() });
    ta.value = "";
    render();
  });
  const dz = document.getElementById("dropzone");
  dz.addEventListener("click", () => document.getElementById("file-input").click());
  dz.addEventListener("dragover", (e) => { e.preventDefault(); dz.classList.add("dragover"); });
  dz.addEventListener("dragleave", () => dz.classList.remove("dragover"));
  dz.addEventListener("drop", (e) => { e.preventDefault(); dz.classList.remove("dragover"); handleFiles(e.dataTransfer.files); });
  document.getElementById("file-input").addEventListener("change", (e) => handleFiles(e.target.files));

  document.querySelectorAll(".source-checkbox").forEach((cb) => {
    cb.addEventListener("change", () => {
      const id = cb.getAttribute("data-id");
      cb.checked ? state.collectSelected.add(id) : state.collectSelected.delete(id);
      render();
    });
  });
  document.querySelectorAll(".source-remove").forEach((b) => {
    b.addEventListener("click", () => { removeSource(b.getAttribute("data-id")); render(); });
  });
  document.querySelectorAll(".source-text").forEach((ta) => {
    ta.addEventListener("input", () => updateSource(ta.getAttribute("data-id"), { text: ta.value }));
  });

  document.getElementById("organize-btn").addEventListener("click", handleOrganize);
  document.getElementById("export-ai-btn").addEventListener("click", handleExportForAI);
  document.getElementById("import-ai-btn").addEventListener("click", openImportModal);
}

function sourceItemHtml(s) {
  const iconName = s.type === "voice" ? "mic" : s.type === "upload-image" ? "image" : "file";
  return `<div class="source-item">
    <input type="checkbox" class="source-checkbox" data-id="${s.id}" ${state.collectSelected.has(s.id) ? "checked" : ""} style="margin-top:4px" />
    <div style="color:var(--ink-soft);margin-top:2px">${icon(iconName, 14)}</div>
    <div style="flex:1;min-width:0">
      <div class="source-title-row">
        <span class="source-title">${esc(s.title)}</span>
        <button class="icon-btn source-remove" data-id="${s.id}">${icon("trash", 13)}</button>
      </div>
      ${s.pending
        ? `<span class="muted" style="display:flex;align-items:center;gap:6px"><span class="spin">${icon("loader", 12)}</span> reading image…</span>`
        : s.error
        ? `<span style="color:var(--coral);font-size:12.5px">${esc(s.error)}</span>`
        : `<textarea class="source-text" data-id="${s.id}" rows="2">${esc(s.text)}</textarea>`}
    </div>
  </div>`;
}

let recogActive = false;
function toggleRecording() {
  if (recogActive) { recognition && recognition.stop(); return; }
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR) { alert("Voice recording isn't supported here. Try uploading or typing a note instead."); return; }
  recognition = new SR();
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.lang = "en-US";
  finalTranscript = "";
  recognition.onresult = (e) => {
    let interim = "";
    for (let i = e.resultIndex; i < e.results.length; i++) {
      const t = e.results[i][0].transcript;
      if (e.results[i].isFinal) finalTranscript += t + " ";
      else interim += t;
    }
    const live = document.getElementById("rec-live");
    if (live) live.textContent = (finalTranscript + interim).trim();
  };
  recognition.onerror = () => { recogActive = false; render(); };
  recognition.onend = () => {
    recogActive = false;
    const text = finalTranscript.trim();
    if (text) addSource({ id: uid(), type: "voice", title: "Voice note", text });
    render();
  };
  recognition.start();
  recogActive = true;
  render();
}

async function handleFiles(fileList) {
  for (const file of Array.from(fileList)) {
    if (file.type.startsWith("text/") || /\.(txt|md)$/i.test(file.name)) {
      const text = await file.text();
      addSource({ id: uid(), type: "upload-text", title: file.name, text });
    } else if (file.type.startsWith("image/")) {
      if (!state.settings.aiMode) {
        alert("Reading text out of images needs AI mode. Turn it on in Settings, or upload a .txt/.md file instead.");
        continue;
      }
      const id = uid();
      addSource({ id, type: "upload-image", title: file.name, text: "", pending: true });
      render();
      try {
        const base64 = await fileToBase64(file);
        const extracted = await extractTextFromImageAI(base64, file.type);
        updateSource(id, { text: extracted, pending: false });
      } catch (err) {
        updateSource(id, { pending: false, error: "Couldn't read this image — try manual entry instead." });
      }
      render();
    } else {
      alert(`${file.name}: unsupported file type. Try .txt, .md${state.settings.aiMode ? ", or an image" : ""}.`);
    }
  }
  render();
}
function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const r = new FileReader();
    r.onload = () => resolve(r.result.split(",")[1]);
    r.onerror = () => reject(new Error("read failed"));
    r.readAsDataURL(file);
  });
}

function addSource(s) { state.sources.unshift(s); state.collectSelected.add(s.id); }
function updateSource(id, patch) {
  const s = state.sources.find((x) => x.id === id);
  if (s) Object.assign(s, patch);
}
function removeSource(id) {
  state.sources = state.sources.filter((s) => s.id !== id);
  state.collectSelected.delete(id);
}

async function handleOrganize() {
  const text = state.sources.filter((s) => state.collectSelected.has(s.id) && s.text && s.text.trim()).map((s) => s.text).join("\n\n---\n\n");
  if (!text.trim()) return;
  state.genError = null;

  if (state.settings.aiMode && state.settings.apiKey) {
    state.generating = true;
    render();
    try {
      const cards = await generateCardsFromTextAI(text);
      if (!cards.length) state.genError = "Couldn't find enough study content in those notes to build cards from.";
      else { state.flashcards.push(...cards); state.tab = "build"; }
    } catch (err) {
      state.genError = err.message || "Something went wrong generating flashcards.";
    } finally {
      state.generating = false;
      render();
    }
    return;
  }

  const { cards, skipped } = basicOrganize(text);
  if (!cards.length) {
    state.genError = "Couldn't find recognizable patterns (like \"Term: definition\" or \"Q: … A: …\"). Try reformatting, or use \"Export notes for AI\".";
  } else {
    state.flashcards.push(...cards);
    state.tab = "build";
    if (skipped) state.genError = `Added ${cards.length} card${cards.length === 1 ? "" : "s"} — skipped ${skipped} line${skipped === 1 ? "" : "s"} that didn't match a recognizable pattern.`;
  }
  render();
}

function handleExportForAI() {
  const text = state.sources.filter((s) => state.collectSelected.has(s.id) && s.text && s.text.trim()).map((s) => s.text).join("\n\n---\n\n");
  if (!text.trim()) return;
  const content = FLASHCARD_PROMPT(text);
  window.electronAPI.saveTextFile(content, "notes-to-cards-notes-for-ai.txt").then((res) => {
    if (res && res.ok) alert("Saved. Paste the file's contents into ChatGPT, Claude, Gemini, or any AI chat — then use \"Import AI flashcards\" with what it gives back.");
  });
}

function openImportModal() {
  const backdrop = document.createElement("div");
  backdrop.className = "modal-backdrop";
  backdrop.innerHTML = `
    <div class="modal-box">
      <div class="section-label" style="margin-bottom:0">Import AI flashcards</div>
      <p class="muted">Paste the JSON array an AI gave you back (the format from the exported prompt).</p>
      <textarea id="import-text" rows="10" placeholder='[{"front": "...", "back": "...", "category": "..."}]'></textarea>
      <div class="row-actions">
        <button class="btn btn-secondary" id="import-cancel">Cancel</button>
        <button class="btn" id="import-confirm">${icon("check", 13)} Add cards</button>
      </div>
    </div>
  `;
  document.body.appendChild(backdrop);
  document.getElementById("import-cancel").addEventListener("click", () => backdrop.remove());
  document.getElementById("import-confirm").addEventListener("click", () => {
    const raw = document.getElementById("import-text").value;
    try {
      const cleaned = raw.replace(/```json|```/g, "").trim();
      const parsed = JSON.parse(cleaned);
      if (!Array.isArray(parsed) || !parsed.length) throw new Error("empty");
      const cards = parsed.filter((c) => c && c.front && c.back).map((c) => ({
        id: uid(), front: esc(String(c.front).trim()), back: esc(String(c.back).trim()),
        category: CATEGORIES.includes(c.category) ? c.category : "Other",
      }));
      state.flashcards.push(...cards);
      backdrop.remove();
      state.tab = "build";
      render();
    } catch (e) {
      alert("Couldn't read that as flashcards — make sure it's the JSON array format from the exported file.");
    }
  });
}

/* ============================================================
   Build tab
   ============================================================ */
function renderBuild(el) {
  const counts = {};
  state.flashcards.forEach((c) => (counts[c.category] = (counts[c.category] || 0) + 1));
  const visible = state.buildFilter === "All" ? state.flashcards : state.flashcards.filter((c) => c.category === state.buildFilter);
  const visibleIds = visible.map((c) => c.id);
  const selectedVisibleCount = visibleIds.filter((id) => state.buildSelected.has(id)).length;
  const allVisibleSelected = visibleIds.length > 0 && selectedVisibleCount === visibleIds.length;

  el.innerHTML = `
    <div style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:10px;margin-bottom:16px">
      <div class="chip-row">
        <button class="chip ${state.buildFilter === "All" ? "active" : ""}" data-filter="All">All (${state.flashcards.length})</button>
        ${CATEGORIES.filter((c) => counts[c]).map((c) => {
          const col = colorFor(c);
          const active = state.buildFilter === c;
          return `<button class="chip" data-filter="${c}" style="background:${active ? col.bar : col.bg};color:${active ? "#fff" : col.ink}">${c} (${counts[c]})</button>`;
        }).join("")}
      </div>
      <button class="btn" id="add-card-btn">${icon("plus", 14)} Add card</button>
    </div>
    <div id="new-card-slot"></div>
    ${visible.length === 0 ? "" : `
    <div class="card-panel" style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-bottom:14px">
      <label style="display:flex;align-items:center;gap:6px;font-size:13px">
        <input type="checkbox" id="select-all-visible" ${allVisibleSelected ? "checked" : ""} /> Select all ${state.buildFilter === "All" ? "" : `in ${esc(state.buildFilter)}`}
      </label>
      <span class="muted">${selectedVisibleCount} selected</span>
      <span style="flex:1"></span>
      <select id="apply-template-select">${templateOptionsHtml()}</select>
      <button class="btn btn-secondary" id="apply-template-btn" ${selectedVisibleCount === 0 ? "disabled" : ""}>${icon("palette", 13)} Apply to ${selectedVisibleCount || ""} selected</button>
    </div>`}
    ${visible.length === 0
      ? `<p class="muted">No cards here yet. Generate some from the Collect tab, or add one by hand.</p>`
      : `<div class="cards-grid">${visible.map(cardRowHtml).join("")}</div>`}
  `;

  document.querySelectorAll("[data-filter]").forEach((b) => b.addEventListener("click", () => { state.buildFilter = b.getAttribute("data-filter"); render(); }));
  document.getElementById("add-card-btn").addEventListener("click", () => {
    document.getElementById("new-card-slot").innerHTML = editRowHtml({ id: "__new__", front: "", back: "", category: "Other" });
    wireEditRow("__new__", true);
  });
  document.querySelectorAll(".card-edit-btn").forEach((b) => {
    b.addEventListener("click", () => {
      const id = b.getAttribute("data-id");
      const cardEl = document.querySelector(`[data-row="${id}"]`);
      cardEl.outerHTML = editRowHtml(state.flashcards.find((c) => c.id === id));
      wireEditRow(id, false);
    });
  });
  document.querySelectorAll(".card-delete-btn").forEach((b) => {
    b.addEventListener("click", () => {
      state.flashcards = state.flashcards.filter((c) => c.id !== b.getAttribute("data-id"));
      state.buildSelected.delete(b.getAttribute("data-id"));
      render();
    });
  });
  document.querySelectorAll(".card-select").forEach((cb) => {
    cb.addEventListener("change", () => {
      const id = cb.getAttribute("data-id");
      cb.checked ? state.buildSelected.add(id) : state.buildSelected.delete(id);
      render();
    });
  });
  const selectAll = document.getElementById("select-all-visible");
  if (selectAll) selectAll.addEventListener("change", () => {
    if (selectAll.checked) visibleIds.forEach((id) => state.buildSelected.add(id));
    else visibleIds.forEach((id) => state.buildSelected.delete(id));
    render();
  });
  const applyBtn = document.getElementById("apply-template-btn");
  if (applyBtn) applyBtn.addEventListener("click", () => {
    const tpl = state.templates.find((t) => t.id === document.getElementById("apply-template-select").value) || state.templates[0];
    state.flashcards.forEach((c) => { if (state.buildSelected.has(c.id)) applyTemplateToCard(c, tpl); });
    render();
  });
}
function applyTemplateToCard(card, tpl) {
  const frontText = stripTags(card.front);
  const backText = stripTags(card.back);
  card.front = `<span style="${fmtToCss(tpl.front)}">${esc(frontText)}</span>`;
  card.back = `<span style="${fmtToCss(tpl.back)}">${esc(backText)}</span>`;
}
function cardRowHtml(c) {
  const col = colorFor(c.category);
  return `<div class="flash-row" data-row="${c.id}">
    <div class="bar" style="background:${col.bar}"></div>
    <input type="checkbox" class="card-select" data-id="${c.id}" ${state.buildSelected.has(c.id) ? "checked" : ""} style="margin-top:2px" />
    <div style="flex:1;min-width:0">
      <div style="display:flex;justify-content:space-between;align-items:center">
        <span class="pill" style="background:${col.bg};color:${col.ink}">${esc(c.category)}</span>
        <div style="display:flex;gap:8px">
          <button class="icon-btn card-edit-btn" data-id="${c.id}">${icon("pencil", 14)}</button>
          <button class="icon-btn card-delete-btn" data-id="${c.id}">${icon("trash", 14)}</button>
        </div>
      </div>
      <p class="flash-front">${c.front}</p>
      <p class="flash-back">${c.back}</p>
    </div>
  </div>`;
}
function editRowHtml(c) {
  const isNew = c.id === "__new__";
  return `<div class="flash-edit" data-row="${c.id}" data-editing="${c.id}">
    <div style="display:flex;gap:8px;flex-wrap:wrap">
      <select id="edit-cat-${c.id}">${CATEGORIES.map((cat) => `<option ${cat === c.category ? "selected" : ""}>${cat}</option>`).join("")}</select>
      ${isNew ? `<select id="edit-template-${c.id}">${templateOptionsHtml()}</select>` : ""}
    </div>
    <div class="field-label">Front</div>
    ${formatToolbarHtml(`edit-front-${c.id}`)}
    <div id="edit-front-${c.id}" class="rich-field" contenteditable="true">${c.front}</div>
    <div class="field-label">Back</div>
    ${formatToolbarHtml(`edit-back-${c.id}`)}
    <div id="edit-back-${c.id}" class="rich-field" contenteditable="true">${c.back}</div>
    <div class="row-actions">
      <button class="btn btn-secondary" id="edit-cancel-${c.id}">${icon("x", 13)} Cancel</button>
      <button class="btn" id="edit-save-${c.id}">${icon("check", 13)} Save</button>
    </div>
  </div>`;
}
function templateOptionsHtml() {
  return state.templates.map((t) => `<option value="${t.id}">${esc(t.name)}</option>`).join("");
}
function wireEditRow(id, isNew) {
  const scope = document.querySelector(`[data-editing="${id}"]`);
  wireFormatToolbars(scope);

  if (isNew) {
    const tplSelect = document.getElementById(`edit-template-${id}`);
    const applyTpl = () => {
      const tpl = state.templates.find((t) => t.id === tplSelect.value) || state.templates[0];
      applyTemplateStyleToEditable(document.getElementById(`edit-front-${id}`), tpl.front);
      applyTemplateStyleToEditable(document.getElementById(`edit-back-${id}`), tpl.back);
    };
    tplSelect.addEventListener("change", applyTpl);
    applyTpl();
  }

  document.getElementById(`edit-cancel-${id}`).addEventListener("click", () => render());
  document.getElementById(`edit-save-${id}`).addEventListener("click", () => {
    const frontHtml = sanitizeHtml(document.getElementById(`edit-front-${id}`).innerHTML).replace(/\u200B/g, "");
    const backHtml = sanitizeHtml(document.getElementById(`edit-back-${id}`).innerHTML).replace(/\u200B/g, "");
    const category = document.getElementById(`edit-cat-${id}`).value;
    if (!stripTags(frontHtml).trim() || !stripTags(backHtml).trim()) return;
    if (isNew) state.flashcards.push({ id: uid(), front: frontHtml, back: backHtml, category });
    else { const c = state.flashcards.find((x) => x.id === id); Object.assign(c, { front: frontHtml, back: backHtml, category }); }
    render();
  });
}

/* ============================================================
   Study tab
   ============================================================ */
function renderStudy(el) {
  const pool = state.studyFilter === "All" ? state.flashcards : state.flashcards.filter((c) => c.category === state.studyFilter);
  if (!state.studyOrder.length || state.studyOrder.length !== pool.length) {
    state.studyOrder = pool.map((_, i) => i);
    state.studyIndex = 0;
    state.studyFlipped = false;
  }
  if (!pool.length) {
    el.innerHTML = `<p class="muted">No cards to study yet — build some first.</p>`;
    return;
  }
  const card = pool[state.studyOrder[state.studyIndex]];
  const col = colorFor(card.category);

  el.innerHTML = `
    <div class="study-wrap">
      <div class="study-controls">
        <select id="study-filter">
          <option ${state.studyFilter === "All" ? "selected" : ""}>All</option>
          ${CATEGORIES.filter((c) => state.flashcards.some((f) => f.category === c)).map((c) => `<option ${state.studyFilter === c ? "selected" : ""}>${c}</option>`).join("")}
        </select>
        <button class="btn btn-secondary" id="shuffle-btn">${icon("shuffle", 13)} Shuffle</button>
        <span style="font-family:var(--font-mono);font-size:12px;color:var(--ink-soft)">${state.studyIndex + 1} / ${pool.length}</span>
      </div>
      <div class="flip-card" id="flip-card" style="background:${state.studyFlipped ? col.bg : "#fff"}">
        <div>
          <span class="pill" style="background:${state.studyFlipped ? "#fff" : col.bg};color:${col.ink};margin-bottom:14px;display:inline-block">${esc(card.category)}</span>
          <p class="${state.studyFlipped ? "back-text" : "front-text"}">${state.studyFlipped ? card.back : card.front}</p>
          <p class="flip-hint">${state.studyFlipped ? "click to see front" : "click to reveal answer"}</p>
        </div>
      </div>
      <div class="nav-row">
        <button class="icon-btn" id="study-prev" ${state.studyIndex === 0 ? "disabled" : ""}>${icon("chevronLeft", 20)}</button>
        <button class="btn btn-secondary" id="study-flip">${icon("rotate", 13)} Flip</button>
        <button class="icon-btn" id="study-next" ${state.studyIndex === pool.length - 1 ? "disabled" : ""}>${icon("chevronRight", 20)}</button>
      </div>
    </div>
  `;
  document.getElementById("study-filter").addEventListener("change", (e) => { state.studyFilter = e.target.value; state.studyOrder = []; render(); });
  document.getElementById("shuffle-btn").addEventListener("click", () => {
    const arr = [...state.studyOrder];
    for (let i = arr.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [arr[i], arr[j]] = [arr[j], arr[i]]; }
    state.studyOrder = arr; state.studyIndex = 0; state.studyFlipped = false; render();
  });
  document.getElementById("flip-card").addEventListener("click", () => { state.studyFlipped = !state.studyFlipped; render(); });
  document.getElementById("study-flip").addEventListener("click", () => { state.studyFlipped = !state.studyFlipped; render(); });
  document.getElementById("study-prev").addEventListener("click", () => { state.studyIndex = Math.max(0, state.studyIndex - 1); state.studyFlipped = false; render(); });
  document.getElementById("study-next").addEventListener("click", () => { state.studyIndex = Math.min(pool.length - 1, state.studyIndex + 1); state.studyFlipped = false; render(); });
}

/* ============================================================
   Print tab
   ============================================================ */
function chunk(arr, size) { const out = []; for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size)); return out; }
function mirroredRow(row) {
  const out = [];
  for (let i = 0; i < row.length; i += 2) out.push(...row.slice(i, i + 2).reverse());
  return out;
}
function renderPrint(el) {
  const cards = state.printFilter === "All" ? state.flashcards : state.flashcards.filter((c) => c.category === state.printFilter);
  const pages = chunk(cards, 8);
  el.innerHTML = `
    <div class="print-controls no-print">
      <select id="print-filter">
        <option ${state.printFilter === "All" ? "selected" : ""}>All</option>
        ${CATEGORIES.filter((c) => state.flashcards.some((f) => f.category === c)).map((c) => `<option ${state.printFilter === c ? "selected" : ""}>${c}</option>`).join("")}
      </select>
      <button class="btn" id="print-btn" ${cards.length === 0 ? "disabled" : ""}>${icon("printer", 14)} Print ${cards.length} card${cards.length === 1 ? "" : "s"}</button>
      <span class="muted">For double-sided cards: print, flip the stack on its long edge, reload the tray, print again.</span>
    </div>
    ${cards.length === 0 ? `<p class="muted">Nothing to print yet.</p>` : pages.map((pageCards, pi) => `
      <p class="print-sheet-label no-print">SHEET ${pi + 1} — FRONTS</p>
      <div class="print-page">${pageCards.map((c) => {
        const col = colorFor(c.category);
        return `<div class="print-cell"><span class="pill" style="background:${col.bg};color:${col.ink}">${esc(c.category)}</span><span class="pfront">${c.front}</span></div>`;
      }).join("")}</div>
      <p class="print-sheet-label no-print">SHEET ${pi + 1} — BACKS (mirrored for duplex)</p>
      <div class="print-page">${chunk(pageCards, 2).flatMap(mirroredRow).map((c) => `<div class="print-cell"><span class="pback">${c.back}</span></div>`).join("")}</div>
    `).join("")}
  `;
  const sel = document.getElementById("print-filter");
  if (sel) sel.addEventListener("change", (e) => { state.printFilter = e.target.value; render(); });
  const btn = document.getElementById("print-btn");
  if (btn) btn.addEventListener("click", () => window.electronAPI.printPage());
}

/* ============================================================
   Templates tab
   ============================================================ */
function renderTemplates(el) {
  el.innerHTML = `
    <p class="muted" style="margin-bottom:16px">Templates set the starting style for new cards — e.g. always bold the front, always highlight the back in green. Pick one from the "New card" dropdown in Build.</p>
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">
      <div class="section-label" style="margin-bottom:0">Your templates</div>
      <button class="btn" id="new-template-btn">${icon("plus", 14)} New template</button>
    </div>
    <div id="template-editor-slot"></div>
    <div class="cards-grid">${state.templates.map(templateCardHtml).join("")}</div>
  `;
  document.getElementById("new-template-btn").addEventListener("click", () => openTemplateEditor(null));
  document.querySelectorAll(".template-edit-btn").forEach((b) =>
    b.addEventListener("click", () => openTemplateEditor(b.getAttribute("data-id")))
  );
  document.querySelectorAll(".template-delete-btn").forEach((b) =>
    b.addEventListener("click", () => {
      state.templates = state.templates.filter((t) => t.id !== b.getAttribute("data-id"));
      render();
    })
  );
}
function templateCardHtml(t) {
  return `<div class="flash-row">
    <div class="bar" style="background:var(--teal)"></div>
    <div style="flex:1;min-width:0">
      <div style="display:flex;justify-content:space-between;align-items:center">
        <strong style="font-size:14.5px">${esc(t.name)}</strong>
        ${t.id === "blank"
          ? `<span class="muted">built-in</span>`
          : `<div style="display:flex;gap:8px">
               <button class="icon-btn template-edit-btn" data-id="${t.id}">${icon("pencil", 14)}</button>
               <button class="icon-btn template-delete-btn" data-id="${t.id}">${icon("trash", 14)}</button>
             </div>`}
      </div>
      <p style="${fmtToCss(t.front)};margin:8px 0 2px;font-size:14px">Sample title</p>
      <p style="${fmtToCss(t.back)};margin:0;font-size:13px">Sample detail text</p>
    </div>
  </div>`;
}
function openTemplateEditor(id) {
  const existing = id
    ? state.templates.find((t) => t.id === id)
    : { id: uid(), name: "", front: { bold: false, italic: false, underline: false, highlight: "none" }, back: { bold: false, italic: false, underline: false, highlight: "none" } };
  const slot = document.getElementById("template-editor-slot");
  slot.innerHTML = `
    <div class="card-panel" style="margin-bottom:16px">
      <span class="field-label">Template name</span>
      <input type="text" id="tpl-name" placeholder="e.g. Drug card" value="${esc(existing.name)}" style="margin-bottom:14px" />
      ${templateFieldEditor("front", "Front", existing.front)}
      ${templateFieldEditor("back", "Back", existing.back)}
      <div class="row-actions" style="margin-top:6px">
        <button class="btn btn-secondary" id="tpl-cancel">${icon("x", 13)} Cancel</button>
        <button class="btn" id="tpl-save">${icon("check", 13)} Save template</button>
      </div>
    </div>`;
  wireTemplateFieldEditor("front", existing.front);
  wireTemplateFieldEditor("back", existing.back);
  document.getElementById("tpl-cancel").addEventListener("click", () => { slot.innerHTML = ""; });
  document.getElementById("tpl-save").addEventListener("click", () => {
    existing.name = document.getElementById("tpl-name").value.trim() || "Untitled template";
    if (!id) state.templates.push(existing);
    slot.innerHTML = "";
    render();
  });
}
function templateFieldEditor(key, label, fmt) {
  return `<div style="margin-bottom:16px">
    <div class="field-label">${label} default style</div>
    <div class="fmt-toolbar" data-tplfield="${key}">
      <button type="button" class="fmt-toggle" data-prop="bold" title="Bold"><b>B</b></button>
      <button type="button" class="fmt-toggle" data-prop="italic" title="Italic"><i>I</i></button>
      <button type="button" class="fmt-toggle" data-prop="underline" title="Underline"><u>U</u></button>
      <span class="fmt-sep"></span>
      ${NEON_COLORS.map((c) => `<button type="button" class="fmt-swatch" data-value="${c.value}" style="background:${c.value}" title="${c.name}"></button>`).join("")}
      <button type="button" class="fmt-swatch fmt-swatch-none" data-value="none" title="No highlight">${icon("x", 11)}</button>
    </div>
    <p id="tpl-preview-${key}" style="margin-top:8px;padding:8px;border:1px solid var(--line);border-radius:4px;font-size:13.5px">${label} preview text</p>
  </div>`;
}
function wireTemplateFieldEditor(key, fmt) {
  const container = document.querySelector(`.fmt-toolbar[data-tplfield="${key}"]`);
  function refresh() {
    document.getElementById(`tpl-preview-${key}`).setAttribute(
      "style",
      `margin-top:8px;padding:8px;border:1px solid var(--line);border-radius:4px;font-size:13.5px;${fmtToCss(fmt)}`
    );
    container.querySelectorAll(".fmt-toggle").forEach((b) => b.classList.toggle("active", !!fmt[b.getAttribute("data-prop")]));
    container.querySelectorAll(".fmt-swatch").forEach((b) => b.classList.toggle("active", (b.getAttribute("data-value") || "none") === (fmt.highlight || "none")));
  }
  container.querySelectorAll(".fmt-toggle").forEach((b) =>
    b.addEventListener("click", () => { fmt[b.getAttribute("data-prop")] = !fmt[b.getAttribute("data-prop")]; refresh(); })
  );
  container.querySelectorAll(".fmt-swatch").forEach((b) =>
    b.addEventListener("click", () => { fmt.highlight = b.getAttribute("data-value"); refresh(); })
  );
  refresh();
}

/* ============================================================
   Settings tab
   ============================================================ */
function renderSettings(el) {
  el.innerHTML = `
    <div class="settings-wrap">
      <div class="card-panel">
        <div class="toggle-row">
          <div>
            <span class="field-label" style="margin-bottom:2px">AI mode</span>
            <p class="muted" style="margin:0">Off by default. Turn this on to auto-organize messy notes and read text from photos, using your own Anthropic API key.</p>
          </div>
          <button class="switch ${state.settings.aiMode ? "on" : ""}" id="ai-toggle"><span class="knob"></span></button>
        </div>
      </div>

      ${state.settings.aiMode ? `
      <div class="card-panel">
        <span class="field-label">Anthropic API key</span>
        <input type="password" id="api-key-input" value="${esc(state.settings.apiKey)}" placeholder="sk-ant-…" />
        <div style="display:flex;gap:8px;margin-top:10px">
          <button class="btn" id="save-key-btn">${icon("check", 13)} Save key</button>
          <button class="btn btn-secondary" id="clear-key-btn">Clear</button>
          <button class="btn btn-outline" id="get-key-btn">Get an API key</button>
        </div>
        <p class="muted" style="margin-top:10px">Your key is stored encrypted on this device only. Enabling AI mode sends the notes you choose to Anthropic's API using your key — nothing is sent anywhere else.</p>
      </div>
      ` : `
      <div class="card-panel">
        <p class="muted">In basic mode, "Turn into flashcards" looks for simple patterns in your notes (like "Term: definition" or "Q: … A: …") — no internet, no key, no cost. For messier notes, use "Export notes for AI" from the Collect tab and paste into any AI chat of your choice.</p>
      </div>
      `}
    </div>
  `;
  document.getElementById("ai-toggle").addEventListener("click", () => {
    state.settings.aiMode = !state.settings.aiMode;
    window.electronAPI.saveSettings(state.settings);
    render();
  });
  const saveBtn = document.getElementById("save-key-btn");
  if (saveBtn) saveBtn.addEventListener("click", () => {
    state.settings.apiKey = document.getElementById("api-key-input").value.trim();
    window.electronAPI.saveSettings(state.settings);
    alert("Saved.");
  });
  const clearBtn = document.getElementById("clear-key-btn");
  if (clearBtn) clearBtn.addEventListener("click", () => {
    state.settings.apiKey = "";
    window.electronAPI.saveSettings(state.settings);
    render();
  });
  const getKeyBtn = document.getElementById("get-key-btn");
  if (getKeyBtn) getKeyBtn.addEventListener("click", () => window.electronAPI.openExternal("https://console.anthropic.com/settings/keys"));
}

/* ============================================================
   deck save/open (File menu)
   ============================================================ */
function normalizeFormat(f) {
  return {
    bold: !!(f && f.bold),
    italic: !!(f && f.italic),
    underline: !!(f && f.underline),
    highlight: f && (f.highlight === "none" || NEON_COLORS.some((c) => c.value === f.highlight)) ? f.highlight : "none",
  };
}
function normalizeTemplate(t) {
  return {
    id: (t && t.id) || uid(),
    name: (t && t.name) || "Untitled template",
    front: normalizeFormat(t && t.front),
    back: normalizeFormat(t && t.back),
  };
}
async function saveDeck() {
  const payload = JSON.stringify({ sources: state.sources, flashcards: state.flashcards, templates: state.templates }, null, 2);
  const res = await window.electronAPI.saveDeck(payload, "notes-to-cards-deck.json");
  if (res && res.ok) alert("Deck saved.");
}
async function openDeck() {
  const res = await window.electronAPI.openDeck();
  if (res && res.ok) {
    try {
      const data = JSON.parse(res.content);
      state.sources = data.sources || [];
      state.flashcards = (data.flashcards || []).map((c) => ({
        ...c,
        front: sanitizeHtml(c.front || ""),
        back: sanitizeHtml(c.back || ""),
      }));
      const loadedTemplates = (Array.isArray(data.templates) ? data.templates : []).map(normalizeTemplate);
      state.templates = loadedTemplates.some((t) => t.id === "blank")
        ? loadedTemplates
        : [{ id: "blank", name: "Blank", front: normalizeFormat(), back: normalizeFormat() }, ...loadedTemplates];
      state.buildSelected = new Set();
      state.collectSelected = new Set(state.sources.map((s) => s.id));
      state.tab = "build";
      render();
    } catch (e) {
      alert("Couldn't read that file — is it a Notes to Cards deck?");
    }
  }
}
function newDeck() {
  if (state.flashcards.length && !confirm("Start a new deck? Unsaved cards will be lost.")) return;
  state.sources = [];
  state.flashcards = [];
  state.collectSelected = new Set();
  state.buildSelected = new Set();
  state.tab = "collect";
  render();
}

/* ============================================================
   boot
   ============================================================ */
async function boot() {
  try {
    state.settings = await window.electronAPI.getSettings();
  } catch (e) {
    /* keep defaults */
  }
  window.electronAPI.onMenuAction((action) => {
    if (action === "new-deck") newDeck();
    else if (action === "open-deck") openDeck();
    else if (action === "save-deck") saveDeck();
    else if (action === "print") window.electronAPI.printPage();
  });
  render();
}
boot();
