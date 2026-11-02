class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        let countRecord: Record<number, number> ={}
        for (let i=0; i < nums.length; i++){
            let num = nums[i]
           if(!countRecord[num]){
            countRecord[num] = 1
           }else{
            countRecord[num]++
           }
        }

        const buckets: number[][] = Array.from(
            {length: nums.length+1},
            () =>[]
        )
        for(const [num, count] of Object.entries(countRecord)) {
            buckets[count].push(Number(num))
        }

        const result: number[] =[]
       
        for (let i = buckets.length - 1; i>=0;i--){
            for (const num of buckets[i]){
                result.push(num)
                if(result.length === k){
                    return result
                }
            }
            
        }
    }
}
