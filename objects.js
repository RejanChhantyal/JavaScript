 var details = ["rejan",20,90.4,false];


 let x = {
    name: "rejan",
    age: 20,
    percentage:90.4,
    isMarried: false
 };

 console.log(x);

 let car = {
    name: "rocket",
    mileage: 20
 };
 console.log(car);
 car.name="bob";
 console.log(car);
 car['name']="lob";
 console.log(car);
 
 for (const key in x) {
    if (Object.prototype.hasOwnProperty.call(x, key)) {
        console.log(key,x[key]);
        
        
    }
 }
 for (const key in x) {
    console.log(key,x[key]);
    
 }