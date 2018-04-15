//object literal enchancement (객체 리터럴 개선) : 
//구조 분해의 반대이다. 
//구조를 다시 만들어 내는 과정 또는 내용을 한데 묶는 과정이라 볼 수 있다. 
//객체 리터럴 개선을 사용하면 현재 영역에 있는 변수를 객체의 필드로 묶을 수 있다. 

//1.
var name ="탈락"
var elevation = 9738

//funHike객체로 두객체를 묶는다. 
var funHike = {name, elevation}

//{ name: '탈락', elevation: 9738 }
console.log(funHike)


//2. 
//객체 리터럴 개선으로 객체 메서드도 가능
var name = "Tallac"
var elevation = 9738

var print = function() {
	//***객체의 키에 접근하기 위해 this 를 사용함.
	console.log('${this.name} elevation of mountain is ${this.elevation} ft.')
}

var funHike = {name, elevation, print}

funHike.print()

