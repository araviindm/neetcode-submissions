class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let encodedStr: string = ""
        for (let i=0; i<strs.length;i++){
            let str = strs[i]
            let len = str.length
            encodedStr = encodedStr + len + "#" + str
        }
        return encodedStr
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let strs: string[] = []
        let i:number = 0
        while (i<str.length){
            let j: number = i
            while (str[j] !== "#") {
                j++;
            }
            const len = Number(str.slice(i, j));
            // 5#Hello5#World
            const start = j + 1;
            const curStr = str.slice(start, start + len);
            strs.push(curStr)
            i = start + len;
        }
        return strs
    }
}
