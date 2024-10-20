import podcasts from './data.js'

/* Find Free Podcasts 

We have a list of podcasts and need the ability to filter by only
podcasts which are free.

Write a function that takes in the podcast data and returns an new
array of only those podcasts which are free.

Additionally, your new array should return only 
objects containing only the podcast title, rating, and whether or 
not it is paid. 

Expected output: 
[
    {title: "Scrimba Podcast", rating: 10, paid: false}, 
    {title: "Something about Witches", rating: 8, paid: false}, 
    {title: "Coding Corner", rating: 9, paid: false}
]
*/

function getFreePodcasts(data) {}

console.log(getFreePodcasts(podcasts))

// function getFreePodcasts(data){
//     // filter list by paid prop
//     // use map to create a new array of objects with only the specified properties
//     return data
//         .filter(item => item.paid === false)
//         .map(podcast => {
//             return {
//                 title: podcast.title,
//                 rating: podcast.rating,
//                 paid: podcast.paid
//             }
//         });
// }
// // 注意下面函数有个错误，因为push方法并不会创建新的变量，所以你只是将同一个obj的引用push了三遍
// // 因此最后会输出含有相同的三个obj的数组。
// function getFreePodcasts(data){
//    const arr = []
//    const podcast = {
//     title: '',
//     rating: 0,
//     paid:false
//    }
//    data.forEach(item => {
//     if(!item.paid){
//         podcast.title = item.title
//         podcast.rating = item.rating
//         podcast.paid = false
//         arr.push(podcast)
//         console.log(podcast)
//     }
//    })
//    return arr
// }
