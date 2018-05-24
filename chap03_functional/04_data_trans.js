//data trans
// 함수형 프로그래밍은 한 데이터를 다른 데이터로 변환, 원본을 변경한 복사본을 만들어 낸 후,
// 함수를 사용해 데이터를 변경하면 코드가 덜 명령형이 되고, 그에 따라 복잡도도 감소한다.
//자바스크립트 안에는 이미 그런 작업에 사용할 수 있는 도구가 들어있다

//1
//Array.map
const schools = [
 "York Town",
 "Washington & Lee",
 "Wakefield"
]

//array.filter는 원본 배열로 부터 새로운 배열을 만들어 내는 자바슼립트 배열 내장 함수다
//이 함수는 true/false 를 반환하는 함수를 인자로 받는다. 
//배열에서 원소를 제거해야 한다면 array.filter를 사용하라 
const wSchools = schools.filter(school => school[0] === "W")

console.log(wSchools) //['Washington & Lee', 'Wakefield']

//array.map은 변환 함수를 인자로 받는다 
//그 함수를 배열의 모든 원소에 적용해서 반환받은 값으로 이루어진 새 배열을 반환한다.=
const highSchools = schools.map(school => '${school} High School')

console.log(highSchools.join('\n'))
// "York Town High School"
// "Washington & Lee High School"
// "Wakefield High School"

