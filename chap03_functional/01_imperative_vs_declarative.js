//자바스크립트에서는 함수를 변수에 넣을 수 있다. 
//함수를 배열에 넣을 수도 있다.
//함수를 다른 함수의 인자로 넘기는 것도 가능하다.
//함수가 함수를 반환할 수도 있다.
//2개 이상의 화살표가 있다면 고차함수를 사용하고 있다는 뜻.


//declarative programming (선언적 프로그래밍) ;
//명령형 프로그래밍은 코드로 원하는 결과를 달성해 나가는 과정에만 관심을 두는 프로그래밍 스타일이다. 
//선언적 프로그래밍의 코드 구문은 어떤 일이 발생해야 하는지 기술하고,
//실제로 그 작업을 처리하는 방법은 추상화로 처리한다.

//1. dom (객체모델) 구축

var target = document.getElementById('target')
var wrapper = document.createElement('div')
var headline = document.createElement('h1')

wrapper.id = 'welcome'
headline.innerText = 'Hello World'

wrapper.appendChild(headline)
target.appendChild(wrapper)


//2. react Dom
//리액트는 선언적이다 
// Welcome 컴포넌트는 렌더링할 DOM 을 기술한다 
const { render } = reactDom

const Welcome = () => (
	<div id="welcome">
		<h1>Hello World</h1>
	</div>
)

render(
	<Welcome />,
	document.getElementById('target')
)