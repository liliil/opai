a simple event dispatcher lib

#usage


```
yarn add opi
```

```js

import opai from "opai"


class Test {
    constructor(){
        this.opai = new opai(this)
    }
}

let test = new Test()

test.E.a && test.E.a.push(v => console.log(v))

test.E.a = 100




```