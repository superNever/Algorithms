export default class List {
    listSize: number = 0;
    pos: number = 0;
    dataStore: Array<any> = [];
    /**
     * @param  {any} element
     * @returns number
     */
    find(element: any): number {
        for (let i = 0, j = this.dataStore.length; i < j; i++) {
            if (this.dataStore[i] == element) {
                return i;
            }
        }
        return -1;
    }
    /**
     * @returns Array
     */
    toString(): Array<any> {
        return this.dataStore;
    }
    /**
     * @param  {any} element
     * @param  {any} after
     * @returns boolean
     */
    insert(element: any, after: any): boolean {
        let insertPos = this.find(after);
        if (insertPos > -1) {
            this.dataStore.splice(insertPos + 1, 0, element);
            ++this.listSize;
            return true;
        }
        return false;
    }
    /**
     * @param  {any} element
     * @returns void
     */
    append(element: any): void {
        let size = this.listSize++
        this.dataStore[size] = element;
    }
    /**
     * @param  {any} element
     * @returns boolean
     */
    remove(element: any): boolean {
        let foundAt = this.find(element);
        if (foundAt > -1) {
            this.dataStore.splice(foundAt, 1);
            --this.listSize;
            return true;
        }
        return false;
    }
    clear(): void {
        delete this.dataStore;
        this.dataStore = [];
        this.listSize = this.pos = 0;
    }
    /**
     * @param  {any} element
     * @returns boolean
     */
    contains(element: any): boolean {
        for (var i = 0; i < this.dataStore.length; ++i) {
            if (this.dataStore[i] == element) {
                return true;
            }
        }
        return false;
    }
    /**
     * @returns void
     */
    front(): void {
        this.pos = 0;
    }
    /**
     * @returns void
     */
    end(): void {
        this.pos = this.listSize - 1;
    }
    /**
     * @returns void
     */
    prev(): void {
        if (this.pos > 0) {
            --this.pos;
        }
    }
    /**
     * @returns void
     */
    next(): void {
        if (this.pos < this.listSize - 1) {
            ++this.pos;
        }
    }
    /**
     * @returns number
     */
    length(): number {
        return this.listSize;
    }
    /**
     * @returns number
     */
    currPos(): number {
        return this.pos;
    }
    /**
     * @param  {number} position
     * @returns void
     */
    moveTo(position: number): void {
        this.pos = position;
    }
    /**
     * @returns any
     */
    getElement(): any {
        return this.dataStore[this.pos];
    }
}
