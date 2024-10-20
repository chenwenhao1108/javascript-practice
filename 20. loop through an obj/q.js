import mediaData from './data.js'

/* Find All Unique Tags 

As a software dev at ScrimFlix, you're working on a feature 
to let users browse TV shows by tag. The first step is to collect all 
the tags from our data into a new array. Then we'll need 
to filter out the duplicate tags. 

Write a function that takes in the media data and returns
a flat array of unique tags.

Expected output: 
["supernatural", "horror", "drama",
"fantasy", "reality", "home improvement", "comedy", "sci-fi", "adventure"]

*/

function getUniqueTags(data) {}

console.log(getUniqueTags(mediaData))

// function getUniqueTags(data){
//     // use map to loop through the data and get a new array of tags
//     // flatten the tags array with .flat()
//     const tags = data.map(podcast => podcast.tags).flat();
//     // create a new array uniqueTags to hold the unique values
//     const uniqueTags = [];
//     // loop through the tags array

//     tags.forEach(tag => {
//          // is the element already in the uniqueTags arr?
//          // 注意.includes()方法会loop through整个数组，这就导致了双重循环，可能产生性能问题
//          if(!uniqueTags.includes(tag)){
//              uniqueTags.push(tag)
//          }
//     })

//     return uniqueTags;
// }

// // better solution：
// function getUniqueTags(data){
//     const tags = data.map(podcast => podcast.tags).flat();
//     const uniqueTags = {};

//     // filter tags arr
//     return tags.filter(tag => {
//          // look up the tag in the uniqueTags obj
//          if(!uniqueTags[tag]){
//              uniqueTags[tag] = true;
//             // if it's not the, we have a unique item
//             // put the item in our object with a value of true
//             return true;
//          }
//          return false;
//     });
// }

//也可以先将所有tag都push进一个数组arr中，然后return [...new Set(arr)]

// for (let item of data) {}与for (let index in data) {}有什么区别
// 前者遍历数组，字符串，Set， Map，后者遍历的是对象的key或数组的index