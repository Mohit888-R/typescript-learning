let person : {
    name : string;
    location : string;
    isProgrammer ?: boolean
}

person = {
    name : 'Mohit',
    location: "Bangalore",
    isProgrammer : true
}

// person.isProgrammer = "Yes"    // given error : string is not assignable in type

person = {
    name : 'Sourabh',
    location: "Alwar",
}