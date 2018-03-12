// const p1 = new Promise((resolve, reject) => {
//     setTimeout(resolve(1), 1000) ;
// })
// .then(function(x){
//     console.log(x);
// });

for(var i = 0; i < 99; i++){
    
    var p = new Promise((resolve, reject) => {
        setTimeout(function(){
            resolve(i)}, 500*Math.random());
    })
}
        p.then(function(id){
            console.log(id);
        })