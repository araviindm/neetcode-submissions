class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        let result: number[] = []
        let stack: number[] = []

        for(let i=0;i < temperatures.length; i++){
            let previousIndex: number = 0
            while (
                stack.length > 0 &&
                temperatures[stack[stack.length - 1]] < temperatures[i]
            ) {
              previousIndex = stack.pop()!
              result[previousIndex] = i - previousIndex
            }
            result[i] = 0
            stack.push(i)
        }

        return result
    }
}
