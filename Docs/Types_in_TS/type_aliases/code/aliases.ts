type StringOrNumber = string | number;

type personObject = {
    name: string,
    id : StringOrNumber
}

const perons1 : personObject = {
    name : 'Bhanu',
    id : '2010011'
}


const perons2 : personObject = {
    name : 'Pran Pratap ',
    id : '2010086'
}
const sayHello = (person:personObject)=>{
    return 'Hi ' + person.name;
}

console.log(sayHello({name:"mohit", id: 2010073}))
