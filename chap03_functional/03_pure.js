//pure function (순수함수) :
//파라미터에 의해서만 반환값이 결정되는 함수 
//순수함수는 최소 1개 이상의 인자를 받고, 인자가 같으면 항상 같은 값이나 함수를 반환한다
//순수함수에는 부수효과 - 전역변수를 설정, 핫무 내부나 애플리케이션에 있는 다른 상태를 변경 하는 것 - 가 없다
//인자를 변경 불가능한 데이터로 취급한다. 



//순수하지 않은 함수 예제
var frederick = {
	name : ' frederick Douglas'
	canRead : false,
	canWrite: false
}

const selfEducate = (person) => {
	person.canRead = true
	person.canWrite = true
	return person
}

console.log(selfEducate(frederick)) //원본의 데이터도 변경된다.
console.log(frederick)

const selfEducate = (person) => ({
	...person,
	canRead = true,
	canWrite = true
})

console.log(selfEducate(frederick)) //인자를 변경하지 않고, 새로 만든 개ㄱ체를 반환한다.
console.log(frederick)


// 순수함수의 규칙
// - 순수함수는 파라미터가 최소 1개 이상
// - 순수 함수는 값이나 다른 함수를 반환한다
// - 순수 함수는 인자나 함수 밖에 있는 다른 변수를 변경하거나 입출력을 수행해서는 안된다.