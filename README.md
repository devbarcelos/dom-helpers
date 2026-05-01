# dom-helpers

Lightweight DOM helper functions for browser environments.

## Features
- Query selectors
- Element creation
- Class manipulation
- Cross-browser support

## Installation
```bash
npm install dom-helpers
```

## Usage
```javascript
const { $, $$, createElement } = require('dom-helpers');

const el = $('#myElement');
const items = $$('.list-item');
const div = createElement('div', { class: 'container' });
```

## Testing
```bash
npm test
```
