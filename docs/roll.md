## 🎲 Dice Rolling

Create, roll, and retrieve random dice values dynamically with optional zero-face logic and animation.

---

### 🚀 `roll(perDieInput, canZero, rollInfinity)`

This is the **primary method** to trigger a dice roll.  
It clears all previously rendered dice from the DOM and inserts new ones based on the input configuration.

```js
const results = dice.roll("6, 10, 12", false, true);
```

| Param | Type | Description |
|--------|----------------------|----------------------------|
| `perDieInput` | `string \| number[]` | A comma-separated string or an array of max values per die. |
| `canZero` | `boolean` | If true, 0 can be a possible result. *(default: false)* |
| `rollInfinity` | `boolean` | If true, dice spin endlessly. *(default: false)* |

Returns:  
```ts
Array<{
  result: number,                        // front-facing die result
  sequence: number[]                     // array of 6 values for each face
  reRollDice: function: number[],        // Function that re-rolls the dice and returns the new sequence
  stop: function: void,                  // Function that stops the dice rolling
  stopTimeout: NodeJS.Timeout|null       // Reference to the timeout controlling the dice stop, or null if not set.
}>
```

🧹 Automatically resets the current dice area before inserting new cubes.  
📦 Internally uses `parseRollConfig`, `clearDiceArea`, and `rollDices`.

> ⚠️ **Note:** The `sequence` field will only be available if the HTML output is active.  
> When rendering is disabled (e.g., during logic-only use), the `sequence` key may be omitted.

---

### 🎯 `rollDice(max, canZero, rollInfinity)`

Rolls a **single die**, inserts it into the DOM, and returns the result and its six-face configuration.

```js
const { result, sequence } = dice.rollDice(20, false, true);
```

| Param | Type | Description |
|-------|------|-------------|
| `max` | `number` | Maximum value of the die. |
| `canZero` | `boolean` | Whether 0 can be rolled. *(default: false)* |
| `rollInfinity` | `boolean` | If true, the die spins forever. *(default: false)* |

Returns:  
```ts
{
  result: number,                        // the front-facing result
  sequence: number[],                    // all 6 face values in die order
  reRollDice: () => number[],            // Function that re-rolls the dice and returns the new sequence
  stop: () => void,                      // Function that stops the dice rolling
  stopTimeout: NodeJS.Timeout|null       // Reference to the timeout controlling the dice stop, or null if not set.
}
```

> ⚠️ **Note:** The `sequence` field will only be available if the HTML output is active.  
> When rendering is disabled (e.g., during logic-only use), the `sequence` key may be omitted.

---

### 🎲 `rollDices(perDieData, canZero, rollInfinity)`

Rolls **multiple dice** in one go and inserts them into the DOM.

```js
const results = dice.rollDices([6, 8, 10], true);
```

| Param | Type | Description |
|--------|--------|-------------|
| `perDieData` | `number[]` | Array of individual max values for each die. |
| `canZero` | `boolean` | Whether dice can show 0. *(default: false)* |
| `rollInfinity` | `boolean` | Whether dice spin infinitely. *(default: false)* |

Returns:  
```ts
Array<{
  result: number,                    // front-facing value of each die
  sequence: number[],                // the full sequence of six values per die
  reRollDice: function: number[],        // Function that re-rolls the dice and returns the new sequence
  stop: function: void,                  // Function that stops the dice rolling
  stopTimeout: NodeJS.Timeout|null   // Reference to the timeout controlling the dice stop, or null if not set.
}>
```

> ⚠️ **Note:** The `sequence` field will only be available if the HTML output is active.  
> When rendering is disabled (e.g., during logic-only use), the `sequence` key may be omitted.

---

### 🎲 `rollNumber(max, canZero)`

Generates a pseudo-random number simulating a dice roll.

```js
const num = dice.rollNumber(20, true);
```

| Param | Type | Description |
|--------|--------|-------------|
| `max` | `number` | Maximum roll value. |
| `canZero` | `boolean` | Whether the result may include 0. |

Returns: `number`  
→ A random number:
- from **1 to `max`** if `canZero` is `false`,
- from **0 to `max`** if `canZero` is `true`,
- always `0` if `max <= 0`.

---

### 🧩 `parseRollConfig(perDieValues)`

Parses user input into a list of per-die configurations.

```js
const config = dice.parseRollConfig("6, 8, 20");
```

| Param | Type | Description |
|--------|--------|-------------|
| `perDieValues` | `string \| number[]` | A comma-separated string or array of max values. |

Returns: `number[]` – A clean list of dice sizes (or empty array if invalid).

🧠 This is useful for user forms or game commands where dice are described as strings.