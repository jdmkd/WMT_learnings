let arr = [2,3,6,4,7,1]

// console.log("Array  => ", arr.length);
let max_arr=arr[0];

for(let i=0; i<=arr.length -1;i++){
    if(arr[i] > max_arr){
        max_arr = arr[i];
        // i++;
    }
}
console.log("max_arr =>", max_arr);