# Notes to Cards (desktop)

A flashcard builder for nursing students — record, upload, or type notes; organize them into
flashcards; study them on screen or print them as cutout cards. This is the desktop (Electron)
version, meant to be packaged into a Windows installer (.exe) and a Mac installer (.dmg) that you
can host on your own website for people to download.

No account, no server, and no AI required by default. AI is an **opt-in** feature people turn on
themselves with their own API key.

## How the two modes work

- **Basic mode (default):** "Turn into flashcards" uses simple pattern-matching (e.g. lines
  written as `Term: definition`, or `Q: … / A: …`) — fully offline, no key, no cost.
- **AI mode (opt-in, in Settings):** the user enters their own Anthropic API key. This unlocks
  AI-organized flashcards from messy notes and reading text out of uploaded photos. The key is
  stored encrypted on their machine (via Electron's OS-backed `safeStorage`) and is only ever sent
  to Anthropic's API directly from their computer — this app has no server and never sees anyone's
  key or notes.
- **Export notes for AI (always available):** bundles the selected notes into a ready-to-paste
  prompt file (`notes-to-cards-notes-for-ai.txt`) that works with any AI chatbot the person already
  uses — ChatGPT, Claude, Gemini, etc. "Import AI flashcards" then reads whatever JSON that AI
  hands back and adds it as cards.

## Templates

The Templates tab lets someone define a reusable default style per field (e.g. "Front is always
bold", "Back is always highlighted neon green"). Templates apply in two places:

- **New cards:** picking a template in Build's "Add card" form starts the Front/Back fields
  already in that style.
- **Existing cards:** select any cards in Build (checkboxes + "select all"), pick a template from
  the toolbar that appears, and apply it — this replaces those cards' formatting with the
  template's style while keeping their text.

Templates are saved and loaded along with **File → Save Deck / Open Deck** (see below), so a
deck carries its own templates with it.

## Running it locally (for you, to test)

You'll need [Node.js](https://nodejs.org) installed.

```bash
npm install
npm start
```

## Building installers

Electron apps generally need to be **built on the OS you're targeting** — build the `.exe` on
Windows, the `.dmg` on a Mac. If you only have one machine, use the GitHub Actions workflow below
instead, which builds both for you for free.

```bash
npm run dist:win     # run on Windows -> installer lands in /release
npm run dist:mac     # run on a Mac    -> installer lands in /release
```

## Building both installers for free with GitHub Actions (recommended)

This project already includes `.github/workflows/build.yml`, which builds the Windows and Mac
installers on GitHub's own servers — you don't need a Windows PC or a Mac.

1. Push this project to a GitHub repository (a free account is enough).
2. Tag a release and push the tag:
   ```bash
   git tag v1.0.0
   git push origin v1.0.0
   ```
3. GitHub Actions will build both installers and attach them to a new GitHub Release under your
   repo's "Releases" tab, a couple of minutes later.
4. Link directly to those files from your website (each Release has a stable download URL for its
   attached files).

You can also trigger a build any time without tagging, from the repo's Actions tab → "Build
Installers" → "Run workflow" — it'll upload the installers as workflow artifacts instead of a
Release.

## Important: unsigned installers and OS warnings

These installers are **unsigned** (no paid code-signing certificate), which is normal for a
small/independent app but means:

- **Windows** will show a blue "Windows protected your PC" SmartScreen screen. Users click
  "More info" → "Run anyway" to continue.
- **macOS** will refuse to open it the first time with "cannot be opened because it is from an
  unidentified developer." Users right-click (or Control-click) the app → "Open" → "Open" to
  confirm, once.

This is expected and doesn't mean anything is wrong with the build. If you want to remove these
warnings entirely, that requires paid code-signing: an Apple Developer account (~$99/year) for
macOS notarization, and a code-signing certificate (~$100–400/year) for Windows. Worth it if this
gets wide distribution; not required to ship it.

## Project layout

```
electron/
  main.js       — app window, menu, settings storage, native save/open dialogs, printing
  preload.js    — safe bridge exposed to the page as window.electronAPI
src/
  index.html
  styles.css
  app.js        — all app logic and rendering (no build step, no framework)
```

## Data & privacy

- Notes, flashcards, and templates live only in memory while the app is open. Use
  **File → Save Deck** to write them to a `.json` file, and **File → Open Deck** to load one
  back in later.
- The Anthropic API key (if the user sets one) is stored encrypted in the OS-provided keychain via
  Electron's `safeStorage`, in the app's own user-data folder — never anywhere else.

## Status

**Alpha.** It works and the builds are real, but it's early — expect rough edges, and the
unsigned-installer warnings above are expected, not a sign something's broken.

## Links

- [live site](https://pointlesslittleapps.com/apps/notes-to-cards.html)
- [all apps](https://github.com/pointlesslittleapps)
