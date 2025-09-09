## 🎲 Dice Management

Control and manage individual 3D dice, from creating and styling them to inserting or clearing them from the display area.

---

### 🔢 `addCubeId()`

Increments and returns the current internal cube ID used for z-index stacking.

```js
const id = dice.addCubeId();
```

Returns: `number` – The current cube ID before incrementing.

🧠 Each new die receives a unique ID so it appears above older ones.

---

### ➕ `addElement(item)`

Adds a new dice element to the internal list.

```js
const success = dice.addElement({
  faces: [face1, face2, face3, face4, face5, face6],
  container: outerDiv,
  wrapper: innerCube
});
```

| Param | Type | Description |
|-------|------|-------------|
| `item` | `{ faces: HTMLElement[], container: HTMLElement, wrapper: HTMLElement }` | The die element with 6 faces and container elements. |

Returns: `boolean` – `true` if added successfully; otherwise `false`.

✅ This ensures each die has the correct structure.

---

### 🎨 `updateDiceFaceSkin(face)`

Applies current visual styles (color, image, etc.) to a single face of a die.

```js
dice.updateDiceFaceSkin(faceElement);
```

| Param | Type | Description |
|-------|------|-------------|
| `face` | `HTMLElement` | A single die face element. |

Returns: `void`

---

### 🎲 `updateDiceSkin(index)`

Updates the skin of a specific die by index (color, border, text, and image).

```js
const updated = dice.updateDiceSkin(0);
```

| Param | Type | Description |
|-------|------|-------------|
| `index` | `number \| string` | Index of the die to update. |

Returns: `boolean` – `true` if the die was found and updated; otherwise `false`.

---

### 🧮 `updateDicesSkin()`

Updates the skin of **all** dice currently on screen.

```js
dice.updateDicesSkin();
```

Returns: `void`

🚀 Uses the current active skin settings and reapplies them to every die.

---

### 🎁 `insertDiceElement(result, max, canZero, rollInfinity)`

Creates and inserts a 3D dice into the display area.

```js
const sequence = dice.insertDiceElement(4, 6, false, true);
```

| Param | Type      | Description |
|--------|-----------|-------------|
| `result` | `number` | Value shown on the front face of the die. |
| `max` | `number` | Maximum value (i.e. the "sides" of the die). |
| `canZero` | `boolean` | Whether face value can be 0. |
| `rollInfinity` | `boolean` | Whether the die rolls forever. |

Returns: `PreDiceResult` – The randomized sequence of values assigned to the six faces.
```ts
{
  sequence: number[]                     // array of 6 values for each face
  reRollDice: () => number[],        // Function that re-rolls the dice and returns the new sequence
  stop: () => void,                  // Function that stops the dice rolling
  stopTimeout: NodeJS.Timeout|null       // Reference to the timeout controlling the dice stop, or null if not set.
}
```

🎲 Each die gets animated, rendered, and z-stacked dynamically.

---

### 🧼 `clearDiceArea()`

Removes **all** dice from the display and resets internal IDs.

```js
dice.clearDiceArea();
```

Returns: `void`

🧹 Great for resetting the board or starting fresh.
