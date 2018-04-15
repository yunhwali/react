//1.
var gangwon = {
	resorts:["용평", "평창", "강촌", "강릉","홍천"],
	print : function (delay=1000){
		setTimeout(function(){
			console.log(this.resorts.join(","))
		}, delay)
	}
}
gangwon.print();

//error 발생
//Cannot read property 'join' of undefined --> this.resort.join()메서드를 호출 시도 했기 때문
//this 가 window 객체이기 때문에 resorts가 undefined이다. 


//2.
var gangwon = {
	resorts:["용평", "평창", "강촌", "강릉","홍천"],
	print : function (delay=1000){
		setTimeout(() => {  //function대신 ()=> 사용
			console.log(this.resorts.join(","))
		}, delay)
	}
}
gangwon.print();

//용평,평창,강촌,강릉,홍천
//[Finished in 1.1s]


//3.
var gangwon = {
	resorts:["용평", "평창", "강촌", "강릉","홍천"],
	print:(delay=1000) => { //funcion 대신 화살표 사용
		setTimeout(() => {
			console.log(this.resorts.join(","))
		},delay)
	}
}
gangwon.print()

//error 발생
//Cannot read property 'join' of undefined 
//pring 프로퍼티를 화살표 함수로 바꾼다는 건 this가 window객체가 된다는 뜻


//4.this가 window인지 여부를 콘솔에 출력해보자
var gangwon = {
    resorts: ["용평","평창","강촌","강릉","홍천"],
    print: (delay=1000) => {
	    setTimeout(() => {
	    	console.log(this === window)
	    }, delay)

    }
}
gangwon.print(); // true


//5. function을 사용하자
var gangwon = {
    resorts: ["용평","평창","강촌","강릉","홍천"],
    print: function(delay=1000){
	    setTimeout(() => {
	    	console.log(this === window)
	    }, delay)

    }
}
gangwon.print(); // false









