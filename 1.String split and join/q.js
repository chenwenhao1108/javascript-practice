/* Panic function 
Write a PANIC! function. The function should take in a sentence and return the same
sentence in all caps with an exclamation point (!) at the end. Use JavaScript's
built in string methods. 

If the string is a phrase or sentence, add a 😱 emoji in between each word. 

Example input: "Hello"
Example output: "HELLO!"

Example input: "I'm almost out of coffee"
Example output: "I'M 😱 ALMOST 😱 OUT 😱 OF 😱 COFFEE!"

.split() .join()
*/

// function panic(str) {
//     return (str.toUpperCase().split(' ').join(' 😱 ') + "!")
// }

// Test your function
console.log(panic("I'm almost out of coffee"))
console.log(panic('winter is coming'))

// .split不接收参数时会将这个string放入一个数组，接收空字符串时会将每个字符拆开再放入数组
