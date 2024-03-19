//Coding TO Build Nested Object

let employee: any = {
    id: 'SDev14',
    name: "Maria",
    age: 25,
    address: {
        city: "khi.",
        state: "sind",
    },
    status:{
        isEmployed: true,
        isMarried: false
    },
    Description: {
        work_As: 'Softwae Developer',
        skills:['Html','CSS','Javascript','Typescript','DataBase'],
        Tools: ['VS Code','Typescript playground','SQL'],
        majorOfDev: ['Control source code','Problem solving','debugging: program code and runtime error']
    }
   }
console.log("\n\tName: " , employee.name, "\n\tEmp.status:" ,  employee.status,  "\n\tEmployee Detail:" , employee.Description);
