class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        let stack: string[] = [];
        const brackets: Record<string, string> = {
            ")": "(",
            "]": "[",
            "}": "{"
        };
        for (let i=0; i<s.length; i++){
            const char = s[i]
            if(char === '(' || char === '[' || char === '{'){
                stack.push(char)
            }else if (char === ')' || char === ']' || char === '}'){
                const top = stack[stack.length - 1]
                console.log("Current char:",char)
                console.log("Top element now:",top)
                if (stack.length === 0 || top !== brackets[char] ){
                    console.log("Condition met for false")
                    return false
                }
                stack.pop()
            }
            console.log("stack condition:",stack)
        }
        console.log("Loop complete")
        return stack.length === 0 || stack.length === 0
    }
}
