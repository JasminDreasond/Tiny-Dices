# 🎲 Tiny Dice

**Tiny Dice** is a lightweight and fully customizable dice roller built for the web.  
It brings fun, magic, and a touch of flair to any dice-based experience—whether you're building a tabletop RPG interface, adding flair to a browser game, or just rolling dice for the joy of it! ✨

### 🧩 What makes Tiny Dice special?

- 🔧 **Customizable** – Every visual aspect of the dice can be themed using CSS or controlled via JavaScript.
- 🎨 **Animated** – Dice come to life with smooth, animated rolls and optional infinite spin.
- 🧠 **Smart API** – Designed for flexibility: roll a single die or create complex multi-die configurations easily.
- ⚡ **Lightweight** – No dependencies, pure JavaScript. Perfect for embedding into any project.

---

## 🚀 Quick Start

You can use Tiny Dice in the browser or with Node.js. Choose your favorite style!

---

### 🌐 Browser Version

Include the script in your HTML and start rolling:

```html
<!-- Include Tiny Dice script -->
<script src="/node_modules/tiny-dice/dist/TinyDice.min.js"></script>

<!-- Create a div element to hold the dice -->
<div id="dice-area"></div>

<script>
  // Set the container element where the dice will appear
  const dice = new TinyDice(document.getElementById('dice-area'));

  // Roll two six-sided dice
  dice.roll('6,6');

  // Set a skin for the dice background
  dice.setBgSkin('black');
</script>
```

> Make sure `TinyDice.min.js` is accessible from your project path.

---

### 📦 Node.js / Bundler (ESM)

Install via npm:

```bash
npm install tiny-dice
```

Then use it in your JavaScript:

```js
import TinyDice from 'tiny-dice';

const dice = new TinyDice();

// Roll a mix of dice: d4, d8, d20
dice.roll([4, 8, 20]);
```

> This version assumes you're using a bundler like Vite, Webpack, or directly with Node.js ESM.