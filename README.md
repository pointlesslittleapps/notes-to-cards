# notes-to-cards

Record, upload, or type notes. Organize them into flashcards. Study virtually or print them.

## what it does

built for nursing students (but works for anything). import notes via voice recording, file upload, or manual text entry. the app organizes them into flashcards automatically (or manually). study mode lets you flip through them. print them out for analog studying. templates let you define default formatting for specific card types, then apply to batches of cards.

ai-assisted organizing is optional — provide your own Anthropic API key (stored locally, encrypted), or use the rule-based organizer offline.

## features

- **input methods:** voice recording, file upload (text/images), manual entry
- **organization:** rule-based auto-organizing (`Term: definition`, `Q:/A:` formats) or ai-assisted
- **rich text:** bold, italic, underline, four neon highlight colors (yellow, pink, green, blue)
- **templates:** define reusable field styles, apply to new or existing cards
- **study mode:** flip through cards, track progress
- **print-ready:** export for printing
- **offline:** no internet required (unless using ai mode)

## download

- **Windows:** [Notes to Cards 1.0.0.exe](LINK_TBD)
- **Mac:** [Notes to Cards 1.0.0.dmg](LINK_TBD)

windows/mac will warn about unsigned installers on first run (click "more info" → "run anyway"). code-signing certs are expensive; this is a hobby project.

## build from source

```bash
git clone https://github.com/pointlesslittleapps/notes-to-cards.git
cd notes-to-cards
npm install
npm start
```

## tech stack

- Electron (desktop)
- Vanilla JavaScript
- SQLite (local storage)
- Anthropic API (optional, for ai assist)

## links

- [live site](https://pointlesslittleapps.com/apps/notes-to-cards.html)
- [all apps](https://github.com/pointlesslittleapps)
