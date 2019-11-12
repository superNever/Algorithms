/**
 * 栈后进先出
 */
export default class Stack {
  private dataStore: Array<any> = [];
  private top: number = 0;
  push(ele: any): any {
    return (this.dataStore[this.top++] = ele);
  }
  pop(): any {
    return this.dataStore[--this.top];
  }
  peek(): any {
    return this.dataStore[this.top - 1];
  }
  length(): number {
    return this.top;
  }
  clear(): void {
    this.top = 0;
  }
}
