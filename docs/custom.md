## 🎨 Appearance Configuration

Customize how your dice look using solid colors, gradients, or even images! Below are all the methods available to personalize background, border, and text styles.

---

### 🖼️ `setBgImg(value, forceUnsafe = false)`

Sets a background image using a `data:` URI or optionally a normal URL.

```js
dice.setBgImg('data:image/png;base64,...'); // Safe usage
dice.setBgImg('https://example.com/image.png', true); // Unsafe (not recommended)
```

| Param         | Type     | Description |
|---------------|----------|-------------|
| `value`       | `string \| null` | Image URL (must be `data:` URL by default). |
| `forceUnsafe` | `boolean` | If `true`, allows normal URLs (use with caution). |

🔒 By default, this only accepts `data:` URLs to prevent injection of untrusted external resources.

---

### 📷 `getBgImg()`

Gets the currently set background image.

```js
const img = dice.getBgImg();
```

Returns: `string \| null`

---

### 🎨 `setBgSkin(skin)`

Sets the background color or gradient for the dice.

```js
dice.setBgSkin('#ffcc00');
dice.setBgSkin('linear-gradient(135deg, #222, #000)');
```

| Param | Type   | Description |
|-------|--------|-------------|
| `skin` | `string` | A valid CSS color or gradient. |

Only valid CSS values will be applied.

---

### 🌈 `getBgSkin()`

Gets the current background color or gradient in use.

```js
const bg = dice.getBgSkin();
```

Returns: `string`

---

### ✍️ `setTextSkin(skin)`

Sets the dice number (text) color.

```js
dice.setTextSkin('white');
```

| Param | Type             | Description                      |
|-------|------------------|----------------------------------|
| `skin` | `string \| null` | CSS color for text. Invalid or null resets it. |

---

### 🧾 `getTextSkin()`

Gets the current text skin (color) applied.

```js
const text = dice.getTextSkin();
```

Returns: `string`

---

### 🔲 `setBorderSkin(skin)`

Sets the border style for dice edges.

```js
dice.setBorderSkin('2px solid #444');
```

| Param | Type             | Description                      |
|-------|------------------|----------------------------------|
| `skin` | `string \| null` | A valid CSS border style. |

Only properly formatted border strings are accepted.

---

### 🔳 `getBorderSkin()`

Gets the current border style.

```js
const border = dice.getBorderSkin();
```

Returns: `string`

---

### 🔷 `setSelectionBgSkin(skin)`

Sets the background color or gradient for selected dice.

```js
dice.setSelectionBgSkin('#0088ff');
```

| Param | Type   | Description |
|-------|--------|-------------|
| `skin` | `string` | CSS color or linear gradient for selected dice. |

Invalid values are ignored and reset to default.

---

### 💎 `getSelectionBgSkin()`

Gets the selected-dice background color or gradient.

```js
const selectionBg = dice.getSelectionBgSkin();
```

Returns: `string`

---

### ✨ `setSelectionTextSkin(skin)`

Sets the text color for selected dice.

```js
dice.setSelectionTextSkin('#ffffff');
```

| Param | Type   | Description |
|-------|--------|-------------|
| `skin` | `string` | A valid CSS color. |

---

### 📘 `getSelectionTextSkin()`

Gets the text color used in selected dice.

```js
const selectedText = dice.getSelectionTextSkin();
```

Returns: `string`