a simple event dispatcher lib

## usage


```
yarn add opai
```

```js

import opai from "opai"

class Test {
    constructor(){
        new opai(this, "E")
    }
}

let test = new Test()

test.E.a && test.E.a.push(v => console.log(v))

test.E.a = 100




```