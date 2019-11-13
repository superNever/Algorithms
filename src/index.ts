/*********List*********** */
// import List from './list'
// let hh = new List()
// hh.append('d')
// debugger
// console.log(hh.dataStore)
// console.log(hh)
/*********Stack*********** */
const printLog = console.log;
// import Stack from './stack'
// interface IbaseData {
//     num: number;
//     base: number;
// }
// type T = number;
// type K = number;
// const mulBase= (num: T, base: K)=>{
//     var s = new Stack();
//     do {
//         s.push(num % base);
//         num = Math.floor(num /= base);
//     } while (num > 0);
//     var converted = "";
//     while (s.length() > 0) {
//         converted += s.pop();
//     }
//     return converted;
// }
// var num = 32;
// var base = 2;
// var newNum = mulBase(num, base);
// print(num + " converted to base " + base + " is " + newNum);

// // 判断给定字符串是否是回文
// const isPalindrome = (word) => {
//     var s = new Stack();
//     for (var i = 0; i < word.length; ++i) {
//         s.push(word[i]);
//     }
//     var rword = "";
//     while (s.length() > 0) {
//         rword += s.pop();
//     }
//     if (word == rword) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// var word = "101";
// if (isPalindrome(word)) {
//     print(word + " is a palindrome.");
// }
// else {
//     print(word + " is not a palindrome.");
// }
/*********Queue*********** */
// import Queue from './queue'

// // 基数排列
// function distribute(nums, queues, n, digit) {
//     for (var i = 0; i < n; ++i) {
//         if (digit == 1) {
//             queues[nums[i] % 10].enqueue(nums[i]);
//         }
//         else {
//             queues[Math.floor(nums[i] / 10)].enqueue(nums[i]);
//         }
//     }
// }
// function collect(queues, nums) {
//     var i = 0;
//     for (var digit = 0; digit < 10; ++digit) {
//         while (!queues[digit].empty()) {
//             nums[i++] = queues[digit].dequeue();
//         }
//     }
// }
// function dispArray(arr) {
//     let str = ""
//     for (var i = 0; i < arr.length; ++i) {
//         str += (arr[i] + " ");
//     }
//     printLog(str)
// }
// var queues = [];
// for (var i = 0; i < 10; ++i) {
//     queues[i] = new Queue();
// }
// var nums = [];
// for (var i = 0; i < 10; ++i) {
//     nums[i] = Math.floor(Math.floor(Math.random() * 101));
// }
// printLog("Before radix sort: ");
// dispArray(nums);
// distribute(nums, queues, 10, 1);
// collect(queues, nums);
// printLog("1:\n ");
// dispArray(nums);
// distribute(nums, queues, 10, 10);
// collect(queues, nums);
// printLog("\n\nAfter radix sort: ");
// dispArray(nums);

/*********LList*********** */
// import LList from "./llist";
// var cities = new LList();
// cities.insert("Conway", "head");
// cities.insert("Russellville", "Conway");
// cities.insert("Carlisle", "Russellville");
// cities.insert("Alma", "Carlisle");
// // cities.display();
// // cities.remove("Carlisle");
// // cities.display();

// // 反转单链表
// const revertLList = head => {
//   if (head === undefined || head === null) return null;
//   let originHead = head;
//   let reverseHead;
//   const reverse = head => {
//     if (head.next === null) {
//       reverseHead = head;
//       return head;
//     } else {
//       let node = reverse(head.next);
//       node.next = head;
//       if (head === originHead) {
//         head.next = null;
//         return reverseHead;
//       } else {
//         return head;
//       }
//     }
//   };
//   return reverse(head);
// };
// console.log("*****************");
// console.log(
//   revertLList({
//     val: "1",
//     next: {
//       val: "2",
//       next: { val: "3", next: { val: "4", next: { val: "5", next: null } } }
//     }
//   })
// );

// // 判断是否为子树
// interface ITree {
//   val: string;
//   left: ITree;
//   right: ITree;
// }
// const isSameTree = (s: ITree, t: ITree) => {
//   if (s == null && t == null) return true;
//   if (s == null || t == null) return false;
//   return (
//     s.val == t.val && isSameTree(s.left, t.left) && isSameTree(s.right, t.right)
//   );
// };
// const isSubtree = (s: ITree, t: ITree) => {
//   if (s == null) return false;
//   if (isSameTree(s, t)) return true;
//   return isSubtree(s.left, t) || isSubtree(s.right, t);
// };

// // 石头

// const getLastStoreWeight = stores => {
//   stores.sort((a,b)=>a-b);
//   while (stores.length > 1) {
//     let currentWeight = stores.pop() - stores.pop();
//     if (currentWeight) {
//       stores.push(currentWeight);
//         stores.sort((a, b) => a - b);
//     }
//   }
//   if(stores.length) {
//       return stores[0]
//   }
//   return 0;
// };


// 重新写一份
// 反转字符串
// let data = [" ", "t", "h", "e", " ", "s", "k", "y", " ", "i", "s", " ", " ","b", "l", "u", "e"," "]
// const reverseWord = words => {
//     let data = words.join("").split(" ").reverse();
//     let result = [];
//     for (let i of data) {
//         if (i !== "") {
//             result.push(i)
//         }
//     }
//     return result.join(" ").split("")
// }
// console.log("反转字符串: ", reverseWord(data));

// // 反转一个单链表 
// // class LList {
// //     val = null;
// //     next = null;
// // }
// let llist = { "val": "1", "next": { "val": "2", "next": { "val": "3", "next": { "val": "4", "next": { "val": "5", "next": null } } } } }
// const revertLList = head => {
//     if (head === undefined || head === null) return null;
//     let originHead = head;
//     let reverseHead;
//     const reverse = head => {
//         if (head.next === null) {
//             reverseHead = head;
//             return head;
//         } else {
//             let node = reverse(head.next);
//             node.next = head;
//             if (originHead === head) {
//                 head.next = null;
//                 return reverseHead;
//             } else {
//                 return head;
//             }
//         }
//     };
//     return reverse(head);
// };
// console.log("反转单链表: ", revertLList(llist))

// // 判断是相同树

// const isSameTree = (t1, t2) => {
//     if (t1 == null && t2 == null) return true;
//     if (t1 == null || t2 == null) return false;
//     return t1.val==t2.val && isSameTree(t1.left, t2.left) &&  isSameTree(t1.right, t2.right);
// }

// // 判断是否为子树，t1为父t2为子
// const isSubTree = (t1, t2) => {
//     if (t1 == null) return false;
//     if (isSameTree(t1, t2)) return true;
//     return isSubTree(t1.left, t2) || isSubTree(t1.right, t2)
// }

// // 剩余石头质量

// const getLastStoreWeight = stores => {
//     stores.sort((a, b) => a - b);
//     while(stores.length > 1) {
//         let currentWeight = stores.pop() - stores.pop();
//         if (currentWeight) {
//             stores.push(currentWeight);
//             stores.sort((a, b) => a - b);
//         }
//     }
//     if (stores.length) {
//         return stores[0];
//     }
//     return 0;
// }

/*******************BST***************************/
// import BST from './BST'
//
// let bst = new BST();
// bst.insert(3);
// bst.insert(4);
// bst.insert(2);
// bst.insert(12);
// bst.insert(22);
// bst.insert(32);
// bst.postOrder();
// console.log('后序: ', bst.putstr());
//
// console.log('min: ', bst.getMin());
// console.log('max: ', bst.getMax());
//
// console.log(bst.find(22));
//
// bst.remove(22);
//
// console.log(bst);

/*******************Graph***********************/
// import {Graph} from "./graph";
// let graph = new Graph(5);
// graph.addEdge(3,4);
// graph.addEdge(1,2);
// graph.addEdge(2,4);
// graph.addEdge(1,4);
// graph.addEdge(3,1);
// graph.showGraph();
// graph.dfs(3)
/***********************************************/
import {createRandomCount} from './sort/util'
import BubbleSort from "./sort/bubble";
import selectionSort from "./sort/selection"
import insertionSort from "./sort/insertion"
let arr = createRandomCount(10);
console.log(arr.join(' '));
let arr1 = insertionSort(arr);
console.log(arr1.join(' '));