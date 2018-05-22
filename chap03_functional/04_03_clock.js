//시계 만들기
//1. 데이터를 변경 불가능하게 유지한다
//2. 함수를 순수함수로 만든다.(인자를 적어도 하나 이상받게 만들고 데이터나 함수를 반환해야 한다.)
//3. 가능하면 루프보다는 재귀를 사용한다.

//1초 돌려주는함수
const oneSecond = () => 1000

//현재 시각을 돌려주는 함수
const getCurrentTime = () => new Date()

//콘솔을 지우는 함수
const clear = () => console.clear()

//메세지를 콘솔에 남기는 함수
const log = message => console.log(message)

//Date 객체를 받아서 시,분,초가 들어있는 24시간제 시각을 반환
const serializeClockTime = date => ({
	hours : date.getHours(),
	minutes : date.getMinutes(),
	seconds : date.getSeconds()
}) 

//24시간제 시각을 받아서 상용시 시각으로 변환
const civilianHours = clockTime => ({
	...clockTime,
	hours : (clockTime.hours > 12) ? clockTime.hours-12 : clockTime.hours
})

//24시간제 시각을 받아서 시각에 맞는 AM/PM을 구한다
const appendAMPM = clockTime => ({
	...clockTime,
	ampm : (clockTime.hours > 12) ? 'PM' : 'AM'
})

//대상함수를 인자로 받아서 그 함수에 시각을 전달하는 함수를 반환한다.
//대상함수로 console.log를 사용한다
const display = target => time => target(time) 

//템플릿 문자열을 받아서 그 문자열이 지정하는 형식대로 시각을 표현하는 문자를 반환
//'hh:mm:ss tt'
const formatClock = format => 
	time =>
		format.replace('hh', time.hours)
		.replace('mm', time.minutes)
		.replace('ss', time.seconds)
		.replace('tt', time.ampm)


//키와 객체를 인자로 받아서 객체에서 그 키에 해당하는 프로퍼티 값이 9이하인 경우 앞에 0을 붙여서반환
//두자리로 만든다.
const prependZero = key => clockTime => ({
	...clockTime,
	[key] : (clockTime[key] < 10) ? '0' + clockTime[key] : clockTime[key]
})


//모든 함수 합성 
//compose 함수 사용
const compose = (...fns) =>
	(arg) =>
    	fns.reduce(
        	(composed, f) => f(composed),
        	arg
      	)

//24시간제 시각을 받아서 상용시로 변환
const convertToCivilianTime = clockTime =>
	compose (
		appendAMPM,
		civilianHours
	)(clockTime)


//상용시 객체를 받아서 시분초가 두자리인지 확인 0 붙임
const doubleDigits = civilianTime =>
	compose(
		prependZero('hours'),
		prependZero('minutes'),
		prependZero('seconds')	
	)(civilianTime)

//매초 호출되는 인터벌타이머를 설정해서 시계를 시작한다. 
//타이머의 콜백은 우리가 만든 여러 함수를 합성한 함수다.
const startTicking = () =>
	setInterval(
		compose(
			clear,
			getCurrentTime,
			serializeClockTime,
			convertToCivilianTime,
			doubleDigits,
			formatClock('hh:mm:ss tt'),
			display(log)
		),
		oneSecond()
	)


startTicking()


















