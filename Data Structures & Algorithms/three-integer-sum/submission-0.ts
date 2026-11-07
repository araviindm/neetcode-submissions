class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        let result: number[][] = []

        nums.sort((a, b) => a - b)
        for(let i=0; i<nums.length; i++){
            if (i > 0 && nums[i] === nums[i - 1]) {
                continue
            }
            
            let fwd: number = i+1
            let bwd: number = nums.length - 1
            let cur: number = nums[i]
            
            while(fwd < bwd){
                let val: number = nums[fwd]+nums[bwd]+cur
                if(val === 0){
                    result.push([nums[fwd],nums[bwd],cur])
                        fwd++
                        bwd--
                }else if (val > 0) {
                    bwd--
                }else{
                    fwd++
                }
            }
        }
        return result
        
    }
}
