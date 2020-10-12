const member = [
    {
        "name": "최정재",
        "part": "Server",
        "status": "OB",
        "gender": "남"
    },
    {
        "name": "박남선",
        "part": "Server",
        "status": "OB",
        "gender": "여"
    },
    {
        "name": "신민상",
        "part": "Server",
        "status": "OB",
        "gender": "남"
    },
    {
        "name": "강효원",
        "part": "Server",
        "status": "OB",
        "gender": "여"
    },
    {
        "name": "류세훈",
        "part": "Server",
        "status": "OB",
        "gender": "여"
    },
    {
        "name": "이가영",
        "part": "Server",
        "status": "OB",
        "gender": "여"
    },
    {
        "name": "이영현",
        "part": "Server",
        "status": "OB",
        "gender": "여"
    },
    {
        "name": "남궁찬",
        "part": "Server",
        "status": "OB",
        "gender": "남"
    },
    {
        "name": "김민주",
        "part": "Server",
        "status": "OB",
        "gender": "여"
    },
    {
        "name": "최정훈",
        "part": "Server",
        "status": "OB",
        "gender": "여"
    },
    {
        "name": "박주은",
        "part": "Server",
        "status": "OB",
        "gender": "여"
    },
    {
        "name": "이현준",
        "part": "Server",
        "status": "OB",
        "gender": "여"
    },
    {
        "name": "김수민",
        "part": "Server",
        "status": "OB",
        "gender": "여"
    },
    {
        "name": "김현상",
        "part": "Server",
        "status": "OB",
        "gender": "여"
    },
    {
        "name": "김채림",
        "part": "Server",
        "status": "OB",
        "gender": "여"
    },
    {
        "name": "이현상",
        "part": "Server",
        "status": "YB",
        "gender": "남"
    },
    {
        "name": "홍혜진",
        "part": "Server",
        "status": "YB",
        "gender": "여"
    },
    {
        "name": "오승준",
        "part": "Server",
        "status": "YB",
        "gender": "남"
    },
    {
        "name": "양재욱",
        "part": "Server",
        "status": "YB",
        "gender": "남"
    },
    {
        "name": "최선준",
        "part": "Server",
        "status": "YB",
        "gender": "남"
    },
    {
        "name": "박상수",
        "part": "Server",
        "status": "YB",
        "gender": "남"
    },
    {
        "name": "임찬기",
        "part": "Server",
        "status": "YB",
        "gender": "남"
    },
    {
        "name": "박진호",
        "part": "Server",
        "status": "YB",
        "gender": "남"
    },
    {
        "name": "신지한",
        "part": "Server",
        "status": "YB",
        "gender": "여"
    },
    {
        "name": "김영은",
        "part": "Server",
        "status": "YB",
        "gender": "여"
    },
    {
        "name": "송정훈",
        "part": "Server",
        "status": "YB",
        "gender": "남"
    },
    {
        "name": "강준수",
        "part": "Server",
        "status": "YB",
        "gender": "남"
    },
    {
        "name": "김중현",
        "part": "Server",
        "status": "YB",
        "gender": "여"
    },
    {
        "name": "김기찬",
        "part": "Server",
        "status": "YB",
        "gender": "남"
    },
    {
        "name": "김우영",
        "part": "Server",
        "status": "YB",
        "gender": "남"
    },
    {
        "name": "윤가인",
        "part": "Server",
        "status": "YB",
        "gender": "여"
    },
    {
        "name": "이예진",
        "part": "Server",
        "status": "YB",
        "gender": "여"
    },
    {
        "name": "박수진",
        "part": "Server",
        "status": "YB",
        "gender": "여"
    },
    {
        "name": "최다슬",
        "part": "Server",
        "status": "YB",
        "gender": "여"
    },
    {
        "name": "한승아",
        "part": "Server",
        "status": "YB",
        "gender": "여"
    },
    {
        "name": "김재은",
        "part": "Server",
        "status": "YB",
        "gender": "여"
    }
];

let YB = [member.filter(item => item.status === 'YB')];
let OB = [member.filter(item => item.status === 'OB')];

let tmp = [];
let n = getRandomInt(22,100) % 21;
for(let i = 0; i < 7; i++){
    tmp[i] = n;
    n = getRandomInt(22,100) % 21;
    for(let j = 0; j < i; j++){
        if(tmp[j] === tmp[i]){
            i = i - 1;
            break;
        }
    }
}
console.log(tmp);



//   // OB : 15, YB : 21
// console.log(member.length);
// console.log(member.filter(item => item.status === 'OB').length);

// function makeTeam(member){

// }

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}

// let YBnumber = getRandomInt();