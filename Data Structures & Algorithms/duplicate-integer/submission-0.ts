class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const newNums: number[] = []
        for (const num of nums){
            if(newNums.includes(num)){
                return true
            }else{
                newNums.push(num)
            }
        }
        return false
    }
}
