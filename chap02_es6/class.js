//Class
//과거에는 함수를 정의하고 그 함수 객체에 있는 프로토 타입을 사용해
//메서드를 정의 했다. 
//es6에는 클래서 선언이 추가되었다


//1.
Class Vacation {

	constructor(dsstination,length){
		this.dsstination = dsstination
		this.length = length
	}

	print () {
		console.log(dsstination)
		console.log(length)
	}
}

const trip = new Vacation("chile", 7)
console.log(trip.print())


//2.
//상속도 가능 + vacation을 추상클래스로 이용할 수도 있다. 
Class Expedition extends Vacation {

	constructor(dsstination,length,gear){
		super(dsstination,length)
		this.gear = gear
	}

	print () {
		super.print()
		console.log(this.gear.join)
	}
}

const trip = new Vacation("chile", 7)
console.log(trip.print())