/**
 * @Description: quickSort 1)选择一个基准元素，将列表分割成两个子序列 2）对列表重新排序，将所有小于基准值的放在基准值前面，反之放在后面. 3)重复1，2
 * @author SuperNever
 * @date 2019/11/13
 */

const quickSort= arr => {
    if (arr.length === 0) return [];
    let left = [];
    let right = [];
    let pivot = arr[0];
    for (let i = 1; i < arr.length; i ++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return quickSort(left).concat(pivot, quickSort(right));
};

export default quickSort;