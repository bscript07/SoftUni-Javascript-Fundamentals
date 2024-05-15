function condenseArrayToNum(nums) {
    while (nums.length > 1) {
        let condense = Array(nums.length -1);
        for (let i = 0; i < nums.length - 1; i++) {
            condense[i] = Number(nums[i]) + Number(nums[i + 1]);
        }
        nums = condense;
    }
    console.log(nums[0]);
}