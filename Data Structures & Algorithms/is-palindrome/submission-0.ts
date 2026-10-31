class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let strArr = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "").split("");
        console.log(strArr)

        let fw = 0
        let bw = strArr.length -1
        while (fw <= strArr.length -1  && bw >= 0){

            if( strArr[fw] !== strArr[bw]){
                return false
            }
            fw++
            bw--
        }
        return true
    }
}
