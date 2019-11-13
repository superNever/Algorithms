/**
 * @Description: insertion
 * @author SuperNever
 * @date 2019/11/12
 */

const insertionSort = nums => {
    let temp, inner;
    for (let outer = 1; outer <= nums.length - 1; ++outer) {
        temp = nums[outer];
        inner = outer;
        while(inner >0 && (nums[inner -1] >= temp)) {
            nums[inner] = nums[inner -1];
            --inner;
        }
        nums[inner] = temp;
    }
    return nums;
};
export default insertionSort;