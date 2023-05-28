class Human {
    name: string = ""
    lastname: string = ""
    age: number = 0

    sayHello(){
        return "Hello ! I'm " + this.name + " and " + this.age + " year old."
    }
}

const user1: any = new Human()
user1.name = "Thitinan"
user1.age = 65
console.log(user1.sayHello())