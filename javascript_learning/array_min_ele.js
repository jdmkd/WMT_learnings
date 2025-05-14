let arr = [2,3,6,4,7,1]

// console.log("Array  => ", arr.length);
let min_arr=arr[0];

for(let i=0; i<arr.length; i++){
    if(arr[i] < min_arr){
        min_arr = arr[i];
    }
}
console.log("min_arr ==> ",min_arr);