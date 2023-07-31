// let x = "hello " as const;
// let y = <const>"next Hello";
// console.log(x,y);


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
export const colors = {
    red : "RED",
    blue : "BLUE",
    green : "GREEN",
}

export default {
    red : "RED",
    blue : "BLUE",
    green : "GREEN"
} as const;

