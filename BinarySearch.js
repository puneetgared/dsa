/**
 * 704. Binary Search
 */

var search = function(nums, target) {
    let left = 0;
    let right = nums.length-1

    while(left < right ){
        let mid = left + Math.floor((right - left) / 2)
        
        if(nums[mid]== target) return mid;

        if(nums[mid] > target) right = mid-1
        else left = mid+1
    }

    return -1
};


const nums = [-1,0,3,5,9,12], target = 9
console.log(search(nums, target))