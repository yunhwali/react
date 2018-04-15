//spread operator (스프레드 연산자) :
//세개의 점으로 이루어진 연산자 (...)
//- 배열의 내용을 조합 가능 
//- 배열의 나머지 원소를 얻을 수 있음
//- 함수의 인자를 배열로 모을 수도 있다.


//1.
//배열의 내용을 조합할 수 있다.
var peaks = ["대청봉", "중청봉", "소청봉"]
var canyons = ["계곡 1" , "계곡 2"]
var seoraksan = [...peaks, ...canyons]

console.log(seoraksan.join(','))


//2. 
//Array.reverse 사용 - 마지막 원소 변수에 담기
//reverse 는 원본 배열을 변경하기 때문에 문제가 생길 수 있다.
var peaks = ["대청봉", "중청봉", "소청봉"]
var [last] = peaks.reverse()

console.log(last)
console.log(peaks.join(','))


//3. 
//spread 연산자를 사용 
var peaks = ["대청봉", "중청봉", "소청봉"]
var [last] = [...peaks].reverse()

console.log(last)
console.log(peaks.join(','))


//4.
//n개의 인자를 스프레드 연산자를 사용해 배열로 모은 다음 
//배열을 사용해 여러가지 내용을 콘솔 메세지로 찍는다.

//direction함수는 스프레드 연산자를 사용해 인자를 받음.
//첫번째 인자는 start함수에 대입.
//마지막 인자는 finish변수에 reverse를 이용해 대입
//그 후 args 배열의 length를 사용해 얼마나 많은 도시를 지나는지 보여준다.
//들러야 하는 도시의 수는 인자의 처음과 끝을 뺀 수.
function directions (...args) {
	var [start, ...remaining] = args
	var [finish, ...stops] = remaining.reverse()

	console.log('1. ${args.length}')
	console.log('2. ${start}')
	console.log('3. ${finish}')
	console.log('4. ${stops.length}')

	console.log('1. '+args.length)
	console.log('2. '+start)
	console.log('3. '+finish)
	console.log('4. '+stops.length)
}

directions(
	"seoul",
	"suwon",
	"cheonan",
	"dajeon",
	"daegu",
	"busan"
)
















