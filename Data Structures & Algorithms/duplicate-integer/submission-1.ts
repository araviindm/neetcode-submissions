class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const newNums = new Set<number>()
        for (const num of nums){
            if(newNums.has(num)){
                return true
            }else{
                newNums.add(num)
            }
        }
        return false
    }
}
