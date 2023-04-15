setImmediate(() => {
    console.log('immediate');
});

process.nextTick(() => { 
    console.log('nextTick');
});

setTimeout(() => {
    console.log('timeout');
}, 0);

Promise.resolve().then(() => console.log('promise')); // 최우선 순위로 올라가서 immediate이후 바로 출력된 후 이후 코드 출력
