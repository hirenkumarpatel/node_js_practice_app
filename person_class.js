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
