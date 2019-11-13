/**
 * @Description: 希尔排序：在插入排序的基础上增加一定的间隔机制
 * @author SuperNever
 * @date 2019/11/12
 */

const shellSort = nums => {
    let N = nums.length;
    let h = 1;
    while(h < N/3) {
        h = 3 * h + 1;
    }
    while (h >= 1) {
        for ( let i = h; i < N ; i ++) {
            for (let j = i ; j >= h && nums[j] < nums[j-h]; j -= h) {
                [nums[j], nums[j-h]] = [nums[j-h], nums[j]]
            }
        }
        h = (h-1)/3;
    }
};
export default shellSort;