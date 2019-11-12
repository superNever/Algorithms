export default class Dictionary {
    private datastore: Array<any> = [];
    add(key, value) {
        this.datastore[key] = value;
    }
    find(key) {
        return this.datastore[key];
    }
    remove(key) {
        delete this.datastore[key];
    }
    showAll() {
        for (let key in Object.keys(this.datastore)) {
            console.log(key + " -> " + this.datastore[key]);
        }
    }
    count() {
        let n = 0;
        for (let key in Object.keys(this.datastore)) {
            ++n;
        }
        return n;
    }
    clear() {
        for(let key in Object.keys(this.datastore)) {
            delete this.datastore[key];
        }
    }
}
