/**
 * 链表是由一组节点组成的集合。每个节点都使用一个对象的引用指向它的后继。指向另一个节点的引用叫做链。
 */
type IElement<T> = T;
class Node {
  public element: IElement<any> = null;
  public next: any = null;
  constructor(element: IElement<any>) {
    this.element = element;
  }
}
export default class LList {
  private headName: IElement<string> = "head";
  private head: Node = new Node(this.headName);
//   constructor() {
//       // 循环列表
//     this.head.next = this.head;
//   }
  // 循环链表
  /**
   * @param  {IElement<any>} item
   */
  find(item: IElement<any>) {
    let currNode = this.head;
    while (currNode.element != item) {
      currNode = currNode.next;
    }
    return currNode;
  }
  /**
   * @param  {IElement<any>} newElement
   * @param  {IElement<any>} item
   */
  insert(newElement: IElement<any>, item: IElement<any>) {
    let newNode = new Node(newElement);
    let current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
  }
  /**
   * @param  {IElement<any>} item
   */
  findPrevious(item: IElement<any>) {
    let currNode = this.head;
    while (!(currNode.next == null) && currNode.next.element != item) {
      currNode = currNode.next;
    }
    return currNode;
  }
  /**
   * @param  {IElement<any>} item
   */
  remove(item: IElement<any>) {
    let prevNode = this.findPrevious(item);
    if (!(prevNode.next == null)) {
      prevNode.next = prevNode.next.next;
    }
  }
  /**
   * @returns void
   */
  display():void {
    let currNode = this.head;
    while (!(currNode.next == null)) {
      console.log(currNode.next.element);
      currNode = currNode.next;
    }
  }
}
