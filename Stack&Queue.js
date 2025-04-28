/**
 * 20 Valid Parentheses
 */

// var isValid = function(s) {
//     // if(s.length % 2 != 0) return false;

//     const map = new Map()
//     map.set('(',')')
//     map.set('{','}')
//     map.set("[","]")

//     console.log(map)

//     const stack = []

//    for(let ch of s){
//         //Opening check
//         if(map.has(ch)){
//             stack.push(ch)
//         }else{
//             const lastOpening = stack.pop()
//             if(!lastOpening || ch != map.get(lastOpening)) return false
//         }
//    }
//    return stack.length == 0
// };

// const s= "()[]{}"
// console.log(isValid(s))


/**
 * 155. Min Stack
 */

// var LinkedList = function (val, prev,next){

// }

// var MinStack = function() {
//     this.stack = []
//     this.minStack = []
// };


// MinStack.prototype.push = function(val) {
//    this.stack.push(val)

//    const min = this.minStack.length == 0 ? val : Math.min(val,this.minStack[this.minStack.length-1])
//    this.minStack.push(min)

// };

// MinStack.prototype.pop = function() {
//     this.stack.pop()
//     this.minStack.pop()
// };

// MinStack.prototype.top = function() {
//     if (this.stack.length === 0) return null;
//     return this.stack[this.stack.length-1]
// };

// MinStack.prototype.getMin = function() {
//     console.log(this.minStack)

//     if (this.minStack.length === 0) return null;
//     return this.minStack[this.minStack.length-1]
// };


/**
 * 84. Largest Rectangle in Histogram
 */


// var largestRectangleArea = function(heights) {
    
//     const stack  = [0]

//     let area = heights[0]

//     for(let i=1;i<heights.length;i++){

//         while(stack.length > 0 && heights[stack[stack.length-1]] > heights[i]){
//             const element =  stack.pop()
//             const width = i - (stack.length > 0 ? stack[stack.length-1]: -1) -1
//             const newArea = heights[element] * width
//             area = Math.max(area, newArea)
//         }
//         stack.push(i)
//     }

//      // Final pass for any remaining bars in the stack
//      while (stack.length > 0) {
//         const element = stack.pop();
//         const width = heights.length - (stack.length > 0 ? stack[stack.length - 1] : -1) - 1;
//         const newArea = heights[element] * width;
//         area = Math.max(area, newArea);
//     }

//     return area;
// };


// const heights = [2,1,5,6,2,3]
// console.log(largestRectangleArea(heights))


/**
 * 739. Daily Temperatures
 */

// var dailyTemperatures = function(temperatures) {
    
//     const stack = [0]
//     const result = new Array(temperatures.length).fill(0);

//     for(let i=1;i<temperatures.length;i++){

//         while(stack.length > 0 && temperatures[stack[stack.length-1]] < temperatures[i] ){
//             const prevDay = stack.pop()

//             result[prevDay] = i - prevDay
//         }

//         stack.push(i)
//     }

//     return result;

// };

// const temperatures = [73,74,75,71,69,72,76,73]
// console.log(dailyTemperatures(temperatures))



/**
 * 232. Implement Queue using Stacks
 */

// var MyQueue = function() {
//     this.inStack = []
//     this.outStack = []
// };

// /** 
//  * @param {number} x
//  * @return {void}
//  */
// MyQueue.prototype.push = function(x) {
//     this.inStack.push(x)
// };

// /**
//  * @return {number}
//  */
// MyQueue.prototype.pop = function() {
//     if(this.outStack.length == 0) {
//         while(this.inStack.length != 0){
//             this.outStack.push(this.inStack.pop())
//         }
//     }
//     return this.outStack.pop()
// };

// /**
//  * @return {number}
//  */
// MyQueue.prototype.peek = function() {
//     if(this.outStack.length == 0) {
//         while(this.inStack.length != 0){
//             this.outStack.push(this.inStack.pop())
//         }
//     }
//     return this.outStack[this.outStack.length -1]
// };

// /**
//  * @return {boolean}
//  */
// MyQueue.prototype.empty = function() {
//     return this.inStack.length == 0 && this.outStack.length == 0
// };


/**
 * 1047. Remove All Adjacent Duplicates In String
 */

// var removeDuplicates = function(s) {
//     const stack = []

//     for(let i=0;i<s.length;i++){

//         if(stack[stack.length-1] == s[i]){
            
//             stack.pop()
//         }else{
//             stack.push(s[i])
//         }

//         stack
//     }

//     return stack.join("")
// };

// const s = "abbaca"
// console.log(removeDuplicates(s))
