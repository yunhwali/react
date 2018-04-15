//pomise(프라미스) :
//비동기적인 동작을 잘 다루기 위한 방법.
//프라미스를 사용하면 성공이나 실패를 단순하게 환원 가능.

//1.
//getFakeMembers -> 프라미스를 반환
const getFakeMembers = count => new Promise((resolves, rejects) => {
      const api = `https://api.randomuser.me/?nat=US&results=${count}`
      const request = new XMLHttpRequest()
      request.open('GET', api)
      request.onload = () =>
           (request.status === 200) ?
            resolves(JSON.parse(request.response).results) :
            reject(Error(request.statusText))
      request.onerror = (err) => rejects(err)
      request.send()
    })

    


//2.
//프라미스 사용
//가져오고 싶은 멤버 수를 함수에 전달해 호출
//프라미스가 성공 --> then
//오류를 처리하기 위한 콜백도 함께 제공 
getFakeMembers(5).then(
    members => console.log(members),
    err => console.error(
          new Error("randomuser.me에서 멤버를 가져올 수 없습니다.")
    ) 
)