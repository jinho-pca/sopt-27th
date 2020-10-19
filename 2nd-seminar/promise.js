const getNumber = new Promise((resolve, reject) => {
    console.log('getNumber Pending');
    setTimeout(() => {
        resolve(100);
    }, 1000);
})
// promise 는 실행하자마자 .then 여부와 관계없이 실행.(이미 만들고 1초 대기)
// 그다음 만든 값으로 .then 으로 간다.

getNumber //
    .then(value => {
        console.log(value);
        return value * 2;
    })
    .then(value => {
        console.log(value);
        return value * 3;
    })
    .then(value => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(value + 1000);
            }, 1000);
        })
    })
    .then(value => console.log(value));