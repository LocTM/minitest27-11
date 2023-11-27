// let x = +prompt("Nhập vào đây số x: ")
// function cal(x) {
//     if (x === 0 || x === 1) {
//         return 1;
//     }
//     let count = 1;
//     for (let i = 2; i <= x; i++) {
//         count *= i;
//     }
//     return count;
// }
//
// result = cal(x);
// alert(`Giai thừa của ${x} là :` + result)

// function calC(n) {
//     let count = 0;
//     for (let i = n; count < 15; i++) {
//         if (i % 3 === 0) {
//             console.log(i);
//             count++;
//         }
//     }
// }
// let n = +prompt("Nhập vào đây số n: ")
// result = calC(n);
// console.log(result);

let arr = [1, 0 , 2, -1, 10, 12]
function soDuong(arr){
    let arrnew = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arrnew.push(arr[i]);
        }
    }

    return arrnew;
}
let arrnew = soDuong(arr);
console.log(arrnew);