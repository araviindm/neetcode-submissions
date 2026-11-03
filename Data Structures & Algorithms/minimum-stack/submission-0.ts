class MinStack {
    private stack: number[];
    private minStack: number[];
    constructor() {
        this.stack = []
        this.minStack = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        let index = this.stack.length
        this.stack[index] = val
        if(this.minStack.length === 0){
            this.minStack[0] = val
        }else{
             let minLastIndex = this.minStack.length -1
        if(val < this.minStack[minLastIndex] && minLastIndex >= 0){
            this.minStack[minLastIndex+1] =  val
        }else if(val >= this.minStack[minLastIndex] && minLastIndex >= 0){
            this.minStack[minLastIndex+1] = this.minStack[minLastIndex]
        }
        }
    }

    /**
     * @return {void}
     */
    pop(): void {
        this.minStack.length--
        this.stack.length--
    }

    /**
     * @return {number}
     */
    top(): number | null {
        let length = this.stack.length -1
        if (length >=0){
             return this.stack[length]
        }else{
            return null
        }
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.minStack[this.minStack.length -1]
    }
}
