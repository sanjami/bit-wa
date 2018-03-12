const arr = [];

for(let i = 0; i < 99; i++){
    
    arr.push(new Promise((resolve, reject) => {
        setTimeout(() => resolve(i), 1000 * Math.random());
    }));
}
    
    // arr.map(promise => {
    //     promise.then((id) => {
    //         console.log(id)
    //     })
    // })

    // Promise.race(arr).then((id) => {
    //     console.log(id);
    // });

    Promise.all(arr).then((id) => {
        console.log(id);
    });