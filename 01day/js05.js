/* let i = 8;
while (i<=10){
    console.log(`문장 반복 출력`);
    i++;
}

 */

//1~50사이의 2의 배수인 동시에 7의 배수 출력
let i = 1;
while (i<=50){
    if(i%2 == 0 && i%7 == 0)
        console.log(i);
    
        i++;

}