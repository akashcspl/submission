class Jedi{
    constructor(){
        this.forceIsDark = false;
    }

    toString(){
        return (this.forceIsDark? 'Join' : 'Fear is the path to') + ' the dark side.';
    }
}

var luke = new Jedi();
console.log(luke.toString());
console.log(luke.forceIsDark);

class Sith extends Jedi{
    constructor(){
        super();
        this.forceIsDark = true;
    }
}

var akash = new Sith();
console.log("akash");
console.log(akash.forceIsDark);
console.log(akash.toString());

console.log("-----------------------------------------------------------------------")

var arr = ['a', 'b', 'c'];
for (let i of arr){
    //console.log(i);
    if(arr.hasOwnProperty(i))
        console.log(i);
}

var strarr = [["akash"]];
console.log([...(strarr[0])]);

let it = [1, 2, 3] [Symbol.iterator] ();

console.log(it);
//console.log(it.next());

console.log("-----------------------------------------------------------------------")

for(let n of it)
    console.log(n);

function gen(n){
    return {
        [Symbol.iterator] () {
            let i = 0;
            return {
                next() { return {
                    done: (i>n) ? true: false,
                    value: ++i};
                }
            };
        }
    };
}

console.log("gen v");
console.log(gen(5));
console.log(gen(20));
for (let n of gen(10)){
    console.log(n);
}

console.log("-----------------------------------------------------------------------")

const ratings = [5, 4, 5];
let sum = 0;
const asyncSumFunction = async(a, b) => a + b;
const syncSumFunction = (a, b) => a + b;
ratings.forEach(async(rating) => {
    sum = await asyncSumFunction(sum, rating);
});

console.log(sum);

console.log("-----------------------------------------------------------------------")

const logArrayElements = (element, index) => {
    console.log(`a[${index}] = ${element}`);
}

[2, 5, , 9].forEach(logArrayElements); // no need to pass the array when using forEach()

console.log("-----------------------------------------------------------------------")

let arrayLike = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    'length' : 4,
    3: 'four',
    6: 'six'
};

console.log(Array.from(arrayLike));

console.log("-----------------------------------------------------------------------")

console.log(['a', 'b', 'c'].keys());
console.log([...['a', 'b', 'c'].keys()]);
console.log(Array.from(['a', 'b', 'c'].entries()));
console.log([...['a', 'b', 'c'].entries()]);

console.log("-----------------------------------------------------------------------")

let obj1 = {a:1};
Object.assign(obj1, {b : 2}); // overwrites exsting property
console.log(obj1);

console.log("-----------------------------------------------------------------------")

let m = new Map ([...'abcd'].map (x => [x, x + x]));
console.log(JSON.stringify([...m]));
console.log(JSON.stringify([...m.keys()]));
console.log(JSON.stringify([...m.values()]));
console.log(JSON.stringify([...m.entries()]));

console.log("-----------------------------------------------------------------------")

let s = new Set(['red', 'blue']);
s.add('yellow');
s.add('red');
console.log(s.size);
console.log(s.has('blue'));
// bunch of other functions

console.log("-----------------------------------------------------------------------")

function* genFour() { // * means generator function
    yield 1;
    yield 2;
    yield 3;
    return 4;
}

let four = genFour(); //generators are both an iterator and an iterable

// the function suspends on every yield and allows other code to run until the next time it resumes

// as an iterator:
//console.log(four.next());
//console.log(four.next());

//as an iterable:

console.log("-----------------------------------------------------------------------")

// yield* yields every yield inside a called generator
function* flatten(arr){
    for (let x of arr) {
        if (x instanceof Array) {
            yield* flatten(x);
        }
        else {
            yield x;
        }
    }
}

let t = flatten ([1, 2, [3, 4]])
console.log(t);

let a = {x : 1, y : 2};
let {x : x} = a; // shorthand for saying let x = a.x;
console.log(x);

console.log("-----------------------------------------------------------------------")

let b = {x1:1, y1:2};
let {x1:x1, y1:z} = b;
console.log('x = ' + x1);
console.log('z = ' + z);
let {y1} = b;
console.log(y1);

console.log("-----------------------------------------------------------------------")
console.log("new");
let [a1 = 2, b1 = 2, c = 5] = [1, undefined];
console.log(a1);

console.log("-----------------------------------------------------------------------")

let reverse = ([x, ...y]) => {
    return (y.length > 0) ? [...reverse(y), x] : [x]}; //lmao not bad

console.log(reverse([1, 2, 3, 4, 5]));
