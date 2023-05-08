function bubbleSort(nums) {
    let swapped = false

    for (let i=0; i<nums.length-1; i++) {
        for (let j=0; j<nums.length-i; j++) {
            if (nums[j] > nums[j+1]) {
                let temp = nums[j];
                nums[j] = nums[j+1];
                nums[j+1] = temp;
                swapped = true;
            }
        }
        if (!swapped) return nums;
    }
    return nums;
}

module.exports = bubbleSort;