//JS:
//Value(primitive): Are value types. Are copied by their calue. *Types: number, string, boolean, symbol, undefined, null

//Reference(objects): are objects. Are copied by their reference  *Types: object, function, array

let obj = { value: 10 };

function increase(obj) {
  obj.value++;
}

increase(obj);
console.log(obj);
