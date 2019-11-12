export default class Set {
    private dataStore: Array<any> = [];
    add(data) {
        if(this.dataStore.indexOf(data) < 0) {
            this.dataStore.push(data)
            return true;
        }
        return false;
    }
    delete(data) {
        let index = this.dataStore.indexOf(data);
        if (index > -1) {
            this.dataStore.splice(index, 1);
            return true;
        }
        return false;
    }
    size() {
        return this.dataStore.length;
    }
    clear() {}
    has(data) {
        let index = this.dataStore.indexOf(data);
        if (index > -1) return true;
        return false;
    }
    /**
     * 并集
     * @param  {} set
     */
    union(set) {
        let tempSet = new Set();
        for (let i = 0; i < this.dataStore.length; ++i) {
            tempSet.add(this.dataStore[i]);
        }
        for (let i = 0; i < set.dataStore.length; ++i) {
            if (!tempSet.has(set.dataStore[i])) {
                tempSet.dataStore.push(set.dataStore[i]);
            }
        }
        return tempSet;
    }
    /**
     * 交集
     * @param  {} set
     */
    intersect(set) {
        let tempSet = new Set();
        for (let i = 0; i < this.dataStore.length; ++i) {
            if (set.has(this.dataStore[i])) {
                tempSet.add(this.dataStore[i]);
            }
        }
        return tempSet;
    }
    /**
     * 子集
     * @param  {} set
     */
    subset(set) {
        if (this.size() > set.size()) {
            return false;
        }
        for(let i of this.dataStore) {
            if (!set.has(i)) {
                return false;
            }
        }
        return true;
    }
    /**
     * 补集
     * @param  {} set
     */
    difference(set) {
        let tempSet = new Set();
        for (let i = 0; i < this.dataStore.length; i++) {
            if (!set.has(this.dataStore[i])) {
                tempSet.add(this.dataStore[i])
            }
        }
        return tempSet;
    }
    keys() {}
    values() {}
}