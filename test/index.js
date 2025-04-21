import TinyDice from '../dist';

const dice = new TinyDice();
console.log(dice);

console.log(dice.roll('6'));
console.log(dice.roll([6, 10]));

console.log(dice.rollDices([6, 10]));
console.log(dice.rollDice(6));

dice.destroy();
