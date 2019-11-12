/**
 * 先进先出，优先队列，就是增加权重
 */
export default class Queue {
    private dataStore: Array<any> = [];
    enqueue(element) {
        this.dataStore.push(element);
    }
    dequeue() {
        return this.dataStore.shift();
    }
    front() {
        return this.dataStore[0];
    }
    back() {
        return this.dataStore[this.dataStore.length - 1];
    }
    toString() {
        var retStr = "";
        for (var i = 0; i < this.dataStore.length; ++i) {
            retStr += this.dataStore[i] + "\n";
        }
        return retStr;
    }
    empty() {
        if (this.dataStore.length == 0) {
            return true;
        }
        else {
            return false;
        }
    }
}