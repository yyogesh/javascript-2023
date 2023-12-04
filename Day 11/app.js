class Util {
 static chunk(arr, size = 1) {
    // ['a', 'b', 'c', 'd'], 2
    let newArray = [];
    for(let i = 0; i < arr.length; i+=size) {
        let chunk = arr.slice(i, i + size);
        newArray.push(chunk);
    }

    return newArray;
 }

 static find(arr, predicate, fromIndex = 0) {
//     [
//         {name: 'Rice', qty: 20},
//         {name: 'Egg', qty: 24},
//         {name: 'Milk', qty: 19},
//         {name: 'Wheat', qty: 20}
//    ]
   let ans = arr.slice(fromIndex, arr.length);
   return ans.find(predicate);
 }
}



Util.find();

function calculateDiscount(price, percentageOfDiscount) {
    
}

// let image = document.querySelector('img');

// image.addEventListener('click', function(e) {
//    image.requestFullscreen();
// })
let button = document.querySelector('button'); 
let iframe = document.querySelector('iframe'); 

button.addEventListener('click', function (){  
   iframe.requestFullscreen();
}) 
