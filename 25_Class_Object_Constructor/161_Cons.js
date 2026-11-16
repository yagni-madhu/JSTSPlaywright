class Credentials{
    #apiKey;

    constructor(user,key){
        this.user = user;
        this.#apiKey = key;
    }
    getAPI(){
        return this.#apiKey;
    }
}

let cred = new Credentials("admin", "demo-key-not-a-secret");
console.log(cred.user);
// console.log(cred.#apiKey);