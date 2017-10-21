export default class  {
    constructor(owner, target) {
        owner[target] = new Proxy(this, {
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
        })
    }
}