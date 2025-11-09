let vals: Array<() => number> = [];
for (var x :number= 0; x < 8; x++) {
  vals.push(() => x);
}
console.log("Using vars: " + vals.map(fn => fn())); // [8,8,8,8]

vals = [];
for (let x:number = 0; x < 8; x++) {
  vals.push(() => x);
}
console.log("Using lets: " + vals.map(fn => fn())); // [0,1,2,3,4,5,6,7]
const obj: Record<string, any> = { par: 3 };
console.log(obj);

try {
  // You cannot reassign const, so we cast to any to simulate runtime error
  (obj as any) = 4;
} catch {
  console.log("Error when trying setting obj to value");
}

obj.par = 12;
console.log("Even though obj is constant, we can change value", obj);

Object.freeze(obj);
(obj as any).par = 15;
console.log("Even though obj is now frozen, we can try to change value, but it won't ", obj);

Object.seal(obj);
(obj as any).par2 = 15;
console.log("Now obj is frozen & sealed, we can try to change value or add properties, but it won't ", obj);

function demoFreezeSeal(o: Record<string, any>) {
  "use strict";
  Object.freeze(o);
  (o as any).par = 15;
  console.log("Even though obj is now frozen, we can try to change value, but it won't ", o);
  Object.seal(o);
  (o as any).par2 = 15;
  console.log("Now obj is frozen & sealed, we can try to change value or add properties, but it won't ", o);
}

try {
  demoFreezeSeal(obj);
} catch (err) {
  console.log("Error will be thrown in strict mode: ", err);
}


const myname = "akash";
console.log(`Using String Templates: ${myname}`);

let equations: Array<{ x: number; y: number }> = [];
for (let x = 1; x <= 20; x++) {
  equations.push({ x, y: 2 * x * x - 5 * x + 3 });
}

let foo = {
  f(x: number) {
    return x + 1;
  },
};
console.log("foo.f(8) - inside fn of object literal -> ", foo.f(8));
console.log(equations);

console.log("***************************************************");
console.log("My Fav Subject --> overriding and overloading");

class A {
  toString(): string {
    return "In Class A";
  }
}

class B extends A {
  toString(): string {
    return "In class B with call to super: " + super.toString();
  }
}

const BObj = new B();
console.log(BObj.toString());
console.log("B prototype --> ", Object.getPrototypeOf(B.prototype));
console.log("A prototype --> ", Object.getPrototypeOf(A.prototype));

function myFunc(): void {}
const originalToString = Function.prototype.toString;
(myFunc as any).toString = function () {
  return "Custom: " + originalToString.call(this);
};
console.log("function myFunc toString() - not class :" + myFunc.toString());

const js_obj = {
  name: "akash",
  age: 23,
  salary: 10000,
  [Symbol.toPrimitive](hint: string) {
    if (hint === "number") return this.age;
    if (hint === "default" || hint === "string") return JSON.stringify(this);
    return null;
  },
};

console.log("STRING: " + `${js_obj}`);
console.log("DEFAULT  : ", js_obj + "");
console.log("NUMBER :" + +js_obj);
console.log("Since you gave up: ", js_obj);


class Jedi {
  forceIsDark = false;
  private jediname: string;

  constructor(str: string) {
    this.jediname = str;
  }

  get name(): string {
    return this.jediname;
  }

  set name(str: string) {
    this.jediname = str;
  }

  toString(): string {
    return this.forceIsDark
      ? `${this.jediname}: Join the dark side`
      : `${this.jediname}: Fear is the path to the dark side`;
  }
}
//inheritance
class Sith extends Jedi {
  constructor(str: string) {
    super(str);
    this.forceIsDark = true;
  }
}
//obj creation
const yoda = new Jedi("Yoda");
const darth = new Sith("Darth Vader");

console.log(yoda.toString());
console.log(darth.toString());
console.log(darth.name, "is a Sith?", darth instanceof Sith);
console.log(darth.name, "is a Jedi?", darth instanceof Jedi);
console.log(yoda.name, "is a Sith?", yoda instanceof Sith);
console.log(yoda.name, "is a Jedi?", yoda instanceof Jedi);

const arr = ["a", "b", "c"];
console.log("*** ---> The bad in loop ");
// for...in iterates over keys (indes), not values
for (const i in arr) {
  if (Object.prototype.hasOwnProperty.call(arr, i)) console.log(i);
}

console.log("*** ---> The good of loop ");
//  for...of iterates over values
for (const i of arr) console.log(i);

console.log("*** ---> The better foreach loop ");
arr.forEach(x => console.log(x));


const ratings = [5, 4, 5];
let sum = 0;

const async = async (a: number, b: number): Promise<number> => a + b;
const sync = (a: number, b: number): number => a + b;

// async forEach does not await inside loop
ratings.forEach(async rating => {
  sum = await async(sum, rating);
});
console.log("BAD async bummer : " + sum);

//  synchronous version
sum = 0;
ratings.forEach(rating => (sum = sync(sum, rating)));
console.log("Nice sync clean sum : " + sum);


const ar2 = (ele: number | undefined, ind: number): void => {
  console.log(`a[${ind}] = ${ele}`);
};
[2, 5, undefined, 9].forEach(ar2);

console.log("Using Spreads/Rests: " + [..."abcd"]);
const ar = [..."abcd"];
console.log("isArray A? : " + Array.isArray(ar));

const [a, b] = "xy";
console.log(`Destructuring: ${a}, ${b}`);
console.log(`Arrays from : Array.from("12345"): ${Array.from("12345")}`);


let it = [1, 2, 3][Symbol.iterator]();
let result = it.next();
while (!result.done) {
  console.log(`iterator value: ${result.value}, Done status: ${result.done}`);
  result = it.next();
}



function somecode1(n: number) {
  return {
    [Symbol.iterator](): Iterator<number> {
      let i = 0;
      return {
        next(): IteratorResult<number> {
          if (i > n) {
            return { done: true, value: undefined as unknown as number };
          }
          return { done: false, value: i++ };
        },
      };
    },
  };
}

for (const i of somecode1(10)) {
  console.log("Some code obfuscated : " + i);
}

// "array-like" object
const arrayLike: { [key: number]: string; length: number } = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  length: 4,
};
console.log(Array.from(arrayLike));

// Assuming `somecode` was declared earlier — re-declare here for completeness
function somecode(n: number) {
  return {
    [Symbol.iterator](): Iterator<number> {
      let i = 0;
      return {
        next(): IteratorResult<number> {
          if (i > n) return { done: true, value: undefined as unknown as number };
          return { done: false, value: i++ };
        },
      };
    },
  };
}

console.log(Array.from(somecode(20), x => x * x));
console.log("And creating an array using of: " + Array.of(1, 3, 4, 6));


let objarrit = ["a", "b", "c"].keys();
console.log("Iterators or arrays: ", objarrit);

let res = objarrit.next();
while (!res.done) {
  console.log(res.value);
  res = objarrit.next();
}

const objarr = [...["a", "b", "c"].keys()];
console.log(objarr);

const objentries = Array.from(["a", "b", "c"].entries());
console.log(objentries);


const objAssign = { a: 1 };
Object.assign(objAssign, { b: 2 });
console.log(objAssign);

const m = new Map<any, string>([
  [1, "first"],
  [{}, "second"],
]);
m.set((x: number) => x + 1, "third").set({}, "fourth");

const key = {};
console.log(" get Key: " + m.get(key));

m.forEach((val, k) => console.log("Key: ", k, "Val:", val));

console.log("AS JSON Full: " + JSON.stringify([...m]));
console.log("AS JSON Keys: " + JSON.stringify([...m.keys()]));
console.log("AS JSON Values: " + JSON.stringify([...m.values()]));
console.log("AS JSON Entries: " + JSON.stringify([...m.entries()]));



function* genFour(): Generator<number, number, void> {
  yield 1;
  yield 2;
  yield 3;
  return 4;
}

let four = genFour();
let r = four.next();
while (!r.done) {
  console.log("From 4Gen Iterator: " + r.value);
  r = four.next();
}
console.log("Final return value: " + r.value);

function* flatten(arr: any[]): Generator<any, void, unknown> {
  for (const x of arr) {
    if (Array.isArray(x)) yield* flatten(x);
    else yield x;
  }
}

let t = flatten([1, 2, [3, 4]]);
for (const v of t) console.log("From Yield or delegation operator: " + v);

function* inner(): Generator<string> {
  yield "a";
  yield "b";
}

function* outer(): Generator<string | number> {
  yield 1;
  yield* inner();
  yield 2;
}

for (const val of outer()) console.log("Delegating Yield => " + val);



class TimerV1 {
  constructor() {
    const self = this;
    setInterval(function () {
      console.log(self);
    }, 1000);
  }
}

class TimerV2 {
  constructor() {
    setInterval(
      function (this: TimerV2) {
        console.log(this);
      }.bind(this),
      1000
    );
  }
}

class TimerV3 {
  constructor() {
    setInterval(() => {
      console.log(this);
    }, 1000);
  }
}

console.log("***** See Application --> clock.html");

const inc = (): number => 7;
console.log("Arrow fn==>" + inc());



function reverse<T>(arr: T[]): T[] {
  return [...arr].reverse();
}

console.log(reverse([1, 2, 3, 4, 5, 6]));

const [, , ...y2] = [1, 2, 3, 4, 5];
console.log(y2);

function* squares(n: number): Generator<number> {
  for (let i = 1; i < n; i++) yield i ** 2;
}

console.log([...squares(6)]);
console.log("Int array reverse...:", reverse([1, 2, 3, 4]));
console.log("String reverse...:", reverse(Array.from("akash")));
console.log("fn result reverse...:", reverse([...squares(10)]));
console.log("Reverse of a number: " + reverse((57 + "").split("")).join(""));


abstract class Animal {
  // A normal property
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  //  method 
  move(): void {
    console.log(`${this.name} is moving...`);
  }

  // An abstract method — no body, must be implemented by subclasses
  abstract makeSound(): void;
}

class Dog extends Animal {
  makeSound(): void {
    console.log("Woof! Woof!");
  }
}

class Cat extends Animal {
  makeSound(): void {
    console.log("Meow!");
  }
}

//  create instances of subclasses
const dog = new Dog("Buddy");
dog.move();
dog.makeSound();

const cat = new Cat("Misty");
cat.move();
cat.makeSound();

