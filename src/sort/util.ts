/**
 * @Description: util
 * @author SuperNever
 * @date 2019/11/12
 */
const randomData = nums => {
    if(nums<0)throw new Error('nums must > 0');
    let num = Math.floor(nums);
    let arr = new Array(num);
    for (let i =0; i< num; i++) {
        arr.push(Math.floor(Math.random()*(num + 1)));
    }
    return arr;
};
export const createRandomCount = (nums:number) => {
    return randomData(nums);
};
