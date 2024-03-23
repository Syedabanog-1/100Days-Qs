

function shapeShifter( entity: string, area: string,... properties: [string,any][]): any {
     let r: number=5;
    let pi: number=1.314159269;
    
     const shape:any = {
        entity: 'circle',
        area: pi*(r**2) ,
        filledColor:'',
        
    };
    for (const [key, value] of properties) {
        shape[key] = value
}
return shape;
}
 

const shapeShift: string =shapeShifter('circle','pi*(r**2)',['filledColor','blue'],['shape','rectangal'],['RecFcolor','red'],['recArea',14*12]);
console.log(shapeShift);
 