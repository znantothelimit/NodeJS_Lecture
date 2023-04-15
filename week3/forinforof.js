let array = ["사과", "배", "포도", "딸기", "바나나"];

for(let i in array) {
    console.log(`${i}번째 요소 : ${array[i]}`); // 물결표쪽 `를 써야함
}

console.log("----구분선----")

for(let item of array) {
    console.log(item);
}
