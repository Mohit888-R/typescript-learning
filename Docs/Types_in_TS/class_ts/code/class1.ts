class Person {
    // define all types 
    // name : string;
    // isCool : boolean;
    // pets : number;

    // constructor(s:string, b : boolean, n : number){
    //     this.name = s ;
    //     this.isCool = b;
    //     this.pets =n;
    // }

    

    // more consise way to define 
    constructor(
        readonly name : string,
        private isCool : boolean,
        public pets : number
    ){}



    cool(isCool: true | false){
        if(isCool === true){
           return "Cool"
        }else{
            return "Boring"
        }
    }

    // set function
    sayHelo(){
        return `hi, my name is ${this.name} and i have ${this.cool(this.isCool)} ${this.pets} pets.`
    }
}

const person1 = new Person('mohit',true, 2);
console.log(person1.sayHelo());