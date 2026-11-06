class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        let result: number[] = []
        for(let i=0; i < temperatures.length; i++){
            let counter = ()=>{
                for (let j=i+1;j < temperatures.length; j++ ){
                    if(temperatures[i] < temperatures[j]){
                        return j - i
                    }
                }
                return 0
            }
          
            result[i] = counter()
        }
        return result
    }
}
