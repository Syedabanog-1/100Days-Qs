

interface  person_Info  {
    Name: string,
    Age: number,
    class:string,
    sayHi: ()=>string
}

 const stud1:person_Info = {
    Name:'Naeem',
    Age: 20,
    class: 'BBA',

    sayHi:() :string =>{return "Hi there!"}
}

console.log(stud1.Name,'',stud1.Age,'',stud1.class,'',stud1.sayHi());

const stud2:person_Info = {
    Name:'Salman',
    Age: 21,
    class: 'BBA',

    sayHi:() :string =>{return "Hi there!"}
}

console.log(stud2.Name,'',stud2.Age,'',stud2.class,'',stud2.sayHi());