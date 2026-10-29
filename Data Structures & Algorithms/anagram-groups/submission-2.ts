class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        let result: Record<string,string[]> = {}
        for (let i=0;i < strs.length; i++){
            let curStr = strs[i].toLowerCase()
            const count = new Array(26).fill(0);
                for(let i=0;i<curStr.length;i++){
                    const val = curStr.charCodeAt(i) - 97
                    count[val]++
                }
            let key = count.join('&')

            if (!result[key]) {
                result[key] = [];
            }
            result[key].push(curStr);
            
        }
        return Object.values(result)
    }
}
