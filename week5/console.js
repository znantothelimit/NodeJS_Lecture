// 터미널로 실행 권장!!!
const string = 'abc';
const number = 1;
const boolean = true;
const obj = { // 객체 생성
  outside: { // 속성 안에 객제 (2단 객체)
    inside: { 
      key: 'value',
    },
  },
};
console.time('전체시간'); // 레이블을 집어넣음, time과 timeEnd는 짝 흘러간 시간을 볼 수 있음
console.log('평범한 로그입니다 쉼표로 구분해 여러 값을 찍을 수 있습니다');
console.log(string, number, boolean);
console.error('에러 메시지는 console.error에 담아주세요');

console.table([{ name: '제로', birth: 1994 }, { name: 'hero', birth: 1988}]);

console.dir(obj, { colors: false, depth: 2 }); // 객체를 콘솔에 출력하는 함수로, colors:false => 흑백출력 / depth:2 => 2단 객체까지 모두 출력(outside, inside 모두 속성명과 값 다 출력)
console.dir(obj, { colors: true, depth: 1 }); // colors:true => 컬러출력 / depth:2 => outside 객체만 출력 그 속에 있는 객체는 이름만 출력됨
console.time('시간측정');
for (let i = 0; i < 100000; i++) {}
console.timeEnd('시간측정');

function b() {
  console.trace('에러 위치 추적'); // 에러추적에 사용하는 함수 or 실행할 때 그 과정들을 볼 수 있음
}
function a() {
  b();
}
a();

console.timeEnd('전체시간');