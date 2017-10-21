export default class EventDispatcher {
    constructor(owner) {
        owner.E = new Proxy(this, ProxyHandle)
    }
}


let ProxyHandle = {
    get(target, key) {
        if(key in target ){
            return target[key]
        } else {
            target[key] = []
            return []
        }
    },
    set(target, key, val) {
        if(Array.isArray(target[key])){
            target[key].forEach(callback => callback(val))
        } else{
            target[key] = []
        }
        return true
    }
}
