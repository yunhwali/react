//es6 module & commonjs
//module 은 재사용 가능한 코드 조각 
//es6 부터는 별도 라이브러리 없이 export & import 가 가능하다

//1.
//함수를 외부에 노출시키는 방법
export const print(message) => log(message, new Date())


//2.
//모듈에서 단 하나의 이름만 외부에 익스포트 할 경우
const freel = new Expedition("MT freel",2,['water','snack'])
//export default 사용
//오직 하나의 이름만 노출하는 모듈에서 사용할 수 있다. 
//구조분해 없이 한 이름으로 부를 수 있다. 
export default 


//commonjs 는 모든 버전의 노드에서 지원하는 일반적인 모듈 패턴이다. 
//자바 객체를 module.export를 사용해 export 할 수 있다. 
const print(message) => log(message, new Date())

const log(message, timestamp) => console.log('${timestamp.toString()}: ${message}')

module.exports = {print, log}