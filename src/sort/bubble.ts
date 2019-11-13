/**
 * @Description: index
 * @author SuperNever
 * @date 2019/11/12
 */

const BubbleSort = (nums) => {
    let len = nums.length;
    for (let outer =len; outer >= 2 ;--outer) {
        for (let inner = 0; inner <= outer; inner++) {
            if (nums[inner] > nums[inner+1]) {
                [nums[inner],nums[inner+1] ] = [nums[inner+1], nums[inner]]
            }
        }
    }
    return nums;
};
export default BubbleSort;