//module wrapper function
// (funtion(exports,module,require,__dirname,__filename){

// })  
// this is main wrapper function that works in background arround person class
//and we can use parameters as we already used to export person class

//creating class
class  Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    get_data(){
        return `Name: ${this.name} and Age:${this.age}`;
    }
}

//export this class(object) so that it can be used in other js file
module.exports=Person;
