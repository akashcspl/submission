var vals = [];
for (var x = 0; x < 4; ++x){
    vals.push(() => x);
}

console.log(vals.map(x => x()));

console.log("-----------------------------------------------------------------------")

let o = {
    [Symbol('hello')] : 7,
    'str': 6
};

console.log(Object.getOwnPropertyNames(o));
JSON.stringify(o);

console.log(Object.getOwnPropertySymbols(o));

console.log("-----------------------------------------------------------------------")

function x(){
    return x;
}
let valss = [];
for (var x = 0; x < 4; ++x){
    valss.push(() => x);
}

console.log(valss);
console.log(valss.map(x => x()));

console.log("-----------------------------------------------------------------------")

const obj = 3;
obj.par = 4;
console.log(obj);
console.log(obj.par);

let s1 = Symbol('test');
let s2 = Symbol('test');

console.log(s1==s2);
console.log(s1===s2);

/*var rvar;
console.log(rvar==null);
console.log(rvar===null);

let a1 = 3;
let a2 = "3";
console.log(a1==a2);
console.log(a1===a2);
*/

