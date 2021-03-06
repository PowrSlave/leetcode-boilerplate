/**
 * @params
 */

var leetFunc = function(nums, target) {

    let hash = {}

    for (let i = 0; i < nums.length; i++) {
        let n = nums[i]
        if (hash[target - n] !== undefined) {
            return [hash[target - n], i]
        }
        hash[n] = i
    }
    return []
};

module.exports = leetFunc