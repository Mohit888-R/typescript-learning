"use strict";
// let x = "hello " as const;
// let y = <const>"next Hello";
// console.log(x,y);
Object.defineProperty(exports, "__esModule", { value: true });
exports.colors = void 0;
// using function and for loop 
/**
 * function getShapes(){
    let result = [
        {kind:"square", sidelength:5},
        {kind:"circle", radius: 2.5},
    ] as const;

    return result;
}

for (const shape of getShapes()){
    if(shape.kind === "circle"){
        console.log("Shape is : "+shape.kind)
    }else{
        console.log("Shape is : "+shape.kind)
    }
}
*/
// enum construct 
exports.colors = {
    red: "RED",
    blue: "BLUE",
    green: "GREEN",
};
exports.default = {
    red: "RED",
    blue: "BLUE",
    green: "GREEN"
};
