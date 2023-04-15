// 기존 방식
var array1 = ['nodejs', {}, 10, true];
var node = array1[0];
var obj = array1[1];
var bool = array[array.length-1];

// 비구조화 할당
const array2 = ['nodejs', {}, 10, true];
const[node, obj, , bool] = array2;