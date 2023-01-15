//Exercise related to classes;

class Students {

    constructor(name, age, classes) {
        this.myName = name;
        this.myAge = age;
        this.myClass = classes;
    }
    //this below bioData() is an instance method
    // whenever we are inheritng or extending parent Class then we can also excess instance method alongwith parent Class
    // here parent Class is Students
    bioData() {
        return `In this portion of code we have created class ${this.myName}.Bolendra Moran age is ${this.myAge}.Bolendra Moran  ${this.myClass}`;
    }
}

//here parent class is Students
//Now in-order to inherit the parent class then we have to use 'extends' keyword . see below for example

class player extends Students {
    constructor(name, age, classes,game){
        super(name, age, classes);
        this.myGame=game
    }
    student_game() {
      return `${super.bioData()} Bolendra Moran likes playing ${this.myGame}`;
    }

}

//In Below portion of code we will be creating object which is an instance of class.

//let object1= new Students('Bolendra Moran',26,"Class is Mechanical");

let object1 = new player('Bolendra Moran', 26, "Class is Mechanical","Football");

console.log(object1.student_game()); //in this line of code we have used the properties present in Class with the help of object i.e., object1;

//Note--> The moment when we create Object with the help of Class then Contructor is called.This constructor method
// is present inside Class
//If we dont called by ourself then class will call the constructor by itself.

//It is good to define properties inside constructor only.