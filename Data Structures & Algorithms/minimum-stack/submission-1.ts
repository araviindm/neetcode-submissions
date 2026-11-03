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

        let minIndex = this.minStack.length;
        if (minIndex === 0) {
            this.minStack[minIndex] = val;
        } else {
            let previousMin = this.minStack[minIndex - 1];
            this.minStack[minIndex] = val < previousMin ? val : previousMin;
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
