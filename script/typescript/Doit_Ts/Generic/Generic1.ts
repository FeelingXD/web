

const getText=<T>(input:T):T=>input

const logText=<T>(input:T):string=>{;return `returning ${input}`};
const anytype=(input:any)=>input.length

console.log(anytype(1));

console.log(logText(true));
