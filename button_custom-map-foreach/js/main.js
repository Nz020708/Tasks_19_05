// let button=document.getElementById("btn");
// let p=document.querySelector("p");
// button.onclick=function(){
//     let step=document.querySelector("input").value;
//     p.innerText=Number(step)+Number(p.innerText)
// }

// function CustomForeach(arr,callback) {
//     for (let i = 0; i < arr.length; i++) {
//          callback(arr[i],i,arr);
//     }
// }

// function callback(n) {
//     console.log(n);
// }
// CustomForeach([1,2,3],callback);
let arr=[1,2,3];
Array.prototype.CustomMap=function (CallBack) {
    let arr2=[];

    for (let i = 0; i < this.length; i++) {
        var a=CallBack(this[i],i,this);
        arr2.push(a);
 
    }
    return arr2;
}
function CallBack(n) {
    n=n*2;
    return n;
}
console.log(arr.CustomMap(CallBack)); 