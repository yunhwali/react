//functional Programming ;

//1.
//불변성
//함수형 프로그래밍에서는 데이터가 변할 수 없다. 
//원본 데이터 구조를 변경하는 대신 그 데이터 구조의 복사본을 만들고 
//그 중 일부를 변경하여 필요한 작업을 진행한다.

let color_lawn = {
	title : '잔디',
	color : '#00FF00',
	rating : 0
}

function rateColor(color, rating) {
	color.rating = rating
	return color
}

console.log(rateColor(color_lawn,5).rating) //5
console.log(color_lawn.rating) //5


//Object.assign은 복사기와 가다.
//빈 객체를 받고 color객체를 그 빈객체에 복사하고 
//rating 프로퍼티 값을 rating() 파라미터의 값으로 변경한다
var rateColor = function(color, rating) {
	return Object.assign({}, color, {rating:rating})
}

console.log(rateColor(color_lawn,5).rating) //5
console.log(color_lawn.rating) //0




//1-2
let colorArray = [
	{title : "red"}
	{title : "lawn"}
	{title : "pink"}
]


//Array.push는 불변성 함수가 아니다 
//원본 배열에 새로운 원소를 추가하게 된다.
var addColor = function(title,colors){
	colors.push({title: title})
	return colors
}
console.log(addColor("green", colorArray).length) //4
console.log(colorArray.length) // 4


//함수형 프로그래밍으로 변경
const addColor = (title, array) => array.concat({title})
console.log(addColor("green", colorArray).length) //4
console.log(colorArray.length) // 3 - 원본은 불변한다

//스프레드 연산자의 추가
//이 함수는 원본 리스트의 원소를 새로운 배열에 복사하고 
//title 파라미터로 받은 값을 title 프로퍼티로 하는 객체를 새 배열 뒤에 추가한다
const addColor = (title, list) => [...list, {title}]