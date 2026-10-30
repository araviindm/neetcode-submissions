class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const lookup = new Map<number, number>()
        for(let i=0; i <nums.length; i++){
           let diff = target - nums[i]
            if(lookup.has(diff)){
                return [lookup.get(diff), i]
            }
             lookup.set(nums[i],i)
           }
           console.log(lookup)
    }
}
