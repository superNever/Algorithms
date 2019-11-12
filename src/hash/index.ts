export default class HashTable {
    private table: Array<any> = new Array(137);
    simpleHash(data) {
        let total = 0;
        for (let i = 0; i < data.length; ++i) {
            total += data.charCodeAt(i);
        }
        console.log("Hash value: " + data + " -> " + total);
        return total % this.table.length;
    }
    showDistro() {
        let n = 0;
        for (let i = 0; i < this.table.length; ++i) {
            if (this.table[i] != undefined) {
                console.log(i + ": " + this.table[i]);
            }
        }
    }
    put(data:string) {
        let pos = this.betterHash(data);
        this.table[pos] = data;
    }
    betterHash(str: string):number {
        const H = 37;
        let total:number = 0;
        for (let i = 0; i < str.length; ++i) {
            total += H * total + str.charCodeAt(i);
        }
        total = total % this.table.length;
        if (total < 0) {
            total += this.table.length - 1;
        }
        return parseInt(total+'');
    }
}