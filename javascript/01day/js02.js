//조건문

/* let userId = window.prompt('아이디를 입력하세요');
if (userId == 'ojh001'){
    console.log(`${userId}님 방문해주셔서 감사합니다.`);
} else if(userId == 'ojh002'){
    console.log(`나가`);
} else {
    console.log(`잘못된 아이디 입니다`);
} */

//아이디를 입력받아서 user123 관리자라고 콘솔에 출력
//user456 부관리자
//나머지 일반회원

/* let userId = window.prompt(`아이디를 입력하세요`);
if (userId == 'user123'){
    console.log(`${userId}은 관리자입니다.`);
} else if(userId == 'user456'){
    console.log(`부관리자입니다`);
} else{
    console.log('일반회원입니다.')
} */

/* 프롬프트 창으로 점수를 입력받아서 학점을 콘솔에 출력하세요 */

/* let score = window.prompt(`점수를 입력하세용`);
if (score>=90 && score<=100){
    console.log(`A`);
} else if (score>=80 && score<90){
    console.log(`B`);
} else if (score>=70 && score<80){
    console.log(`C`);
} else if (score>=60 && score<70){
    console.log(`D`);
} else if(score>=0 &&score<60){
    console.log(`F`);
} else{
    console.log(`error`)
} */

userId = window.prompt(`아이디를 입력하세요`);
if(userId =='dhrwogh'){
    let userPw = window.prompt(`비밀번호를 입력하세요`)
    if(userId == userPw){
        console.log(`로그인되었습니다`)
    }
} else{
    console.log(`아이디가 잘못되었습니다.`)
}