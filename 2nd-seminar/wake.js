console.log('start');
setTimeout(function () {
    console.log('3 seconds later');
}, 0);
// 0초라서 안기다릴 것 같지만 call stack 에는 이미 밑에 함수들이 차있다.
// 따라서 마지막에 동작한다.

function wakeup() {
    wash();
    console.log('wake up!');
}

function wash() {
    breakfast();
    console.log('wash !');
}

function breakfast() {
    console.log('breakfast !');
}

wakeup();