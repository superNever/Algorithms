/**
 * @Description: selection
 * @author SuperNever
 * @date 2019/11/12
 */

const selectionSort = nums => {
    let min;
    for (let outer = 0; outer < nums.length -2; outer++) {
        min = outer;
        for (let inner = outer + 1; inner <= nums.length-1; inner++) {
            if (nums[inner] < nums[min]) {
                min = inner
            }
            [nums[outer], nums[min]] = [nums[min], nums[outer]]
        }
    }
    return nums;
};

export default selectionSort;