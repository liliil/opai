import opai from "./lib"


class Test {
    constructor(){
        new opai(this, "E")
    }
}

let test = new Test()

test.E.a && test.E.a.push(v => console.log(v))

test.E.a = 100

