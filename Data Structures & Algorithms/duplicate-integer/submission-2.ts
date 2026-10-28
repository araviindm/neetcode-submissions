class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        for (const [i,num] of nums.sort().entries()){
          if(nums[i]===nums[i+1]){
            return true
          }
        }
        return false
    }
}
