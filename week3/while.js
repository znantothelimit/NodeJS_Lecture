let i = 0;
let array = [52, 273, 32, 65, 103];

while(i<array.length) {
    console.log(i + /*"번째 출력 : "*/ + array[i]); // "번째 출력 : "을 지우면 array[1] 인덱스부터 i씩 더해짐
    i++;
}
