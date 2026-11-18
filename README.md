# Dungeonslayers character sheet

A static browser character sheet based on the 2012 English Dungeonslayers manual.

- Editable front and back sheets using the original printed layout
- Searchable presets for talents, spells, weapons, armor, equipment, potions, and artefacts
- Combat checks, HP tracking, and XP-based leveling
- Browser-local saving and character JSON import/export

Open `index.html` directly, or run `python3 -m http.server 8765` and visit `http://localhost:8765/`.

## GitHub Pages

Publish the `main` branch from the repository root. All application assets use relative paths. The `.nojekyll` file enables static serving.

Character data stays in the visitor's browser storage. JSON exports transfer characters between devices, browser profiles, and site addresses.

## Credits

Dungeonslayers is by Christian Kennig. The supplied 2012 English edition was published by Chronicle City. Rules data is adapted from that manual under [CC BY-NC-SA 3.0 Germany](https://creativecommons.org/licenses/by-nc-sa/3.0/de/). The manual separately reserves rights to its logos and illustrations. The sheet backgrounds reproduce the supplied manual's character-sheet pages.
