//desctructing (구조분해) :
//구조분해를 사용하면 객체 안에 있는 필드 값을 원하는 변수에 대입할 수 있다.

//1.
//sandwich 를 분해해서 bread와 meat 필드를 같은 이름의 변수에 넣어준다. 
//두 변수의 값은 sandwich에 있는 같은 이름의 필드 값으로 초기화되지만, 두 변수를 변경해도 원래의 필드 값은 바뀌지 않는다. 
var sandwich = {
	bread : "더치 크런치",
	meat : "참치",
	cheese : "스위스",
	toppings : ["상추", "토마토", "머스타드"]
}

var {bread, meat} = sandwich
console.log(bread , meat)


//2.
//sandwich를 분해해서 bread와 meat 필드를 같은 이름의 변수에 넣어준다
//두 변수의 값은 sandwich에 있는 같은 이름의 필드 값으로 초기화 되지만, 
//원래의 필드 값은 바뀌지는 않는다. 
var {bread, meat} = sandwich

bread = "마늘"
meat = "칠면조"

console.log(bread)
console.log(meat)

console.log(sandwich.bread , sandwich.meat) 


//3. 
//객체를 분해해서 함수의 인자로 넘길 수도 있다.
var lordify = regularPerson => {
	console.log('켄터베리의 ${regularPerson.firstname}')
}

var regularPerson = {
	firstname: "윤화",
	lastname : "이"
}

lordify(regularPerson)

//객체의 필드에 접근하기 위해 점고 필드이름을 사용하는 대신 regularPerson 에서 
//필요한 값을 구조분해로 가져올 수도 있다.
//구조분해는 더 선언적이라 코드를 작셩한 사람의 의도를 더 잘 설명해준다.
//구조분해로 firstname을 가져옴으로서 객체의 필드 중에서 firstname만 사용한다는 사실을 선언한다. 
var lordify = ({firstname}) => {
	console.log('켄터베리의 ${firstname}')
}

lordify(regularPerson) //켄터베리의 윤화

//4.
//배열을 구조 분해해서 원소의 값을 변수에 대입할 수도 있다. 
//배열의 첫번째 원소를 변수에 대입
var [firstResort] = ["용평", "평창", "강촌"]

console.log(firstResort)


//5.
//불필요한 값을 콤마를 사용해 생략하는 리스트 매칭을 사용할 수 도 있다. 
var [,,thirdResirt] = ["용평", "평창", "강촌"]

console.log(thirdResirt)



















