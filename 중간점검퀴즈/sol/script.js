const student = {
   name: '김라라',
   age: 17,
   subject: {
      kor: 87,
      math: 70,
      eng: 63,
      science: 89,
   },
   addr: '서울시 종로구 계동길 777',
   phone: '010-7777-7777',
   reg_date: '2024/01/14',
}

/*
    1. student 객체에서 김라라 학생의 점수만 출력하여 socres 변수에 배열로 저장하고, 
    아래 콘솔에서 scores를 출력하세요.
*/

const subject = student.subject
const scores = [subject.kor, subject.math, subject.eng, subject.science]

console.log(`1번 문제 정답: ${scores}`)

/*
    2. scores 변수에 저장되 있는 배열의 맨끝에 85점을 추가하고, 
    아래 콘솔에서 scores를 출력하세요.
*/

scores.push(85)
console.log(`2번 문제 정답: ${scores}`)

/*
    3. 1번에서 구한 scores를 매개변수로 받아 소수점을 모두 없앤 평균 점수 구하는 함수를 작성하고, 
    함수를 실행해 아래 콘솔에 출력하세요.(비익명, 익명, 화살표 함수 상관 없음)
*/

const avg = (scores) => {
   let sum = 0
   for (let score of scores) {
      sum += score
   }

   let avg = (sum / scores.length).toFixed(0)

   return avg
}

console.log(`3번 문제 정답: ${avg(scores)}점`)

/*
    4. 3번에서 구한 평균점수를 student 객체에 'key는 avg, 값은 3번에서 구한 평균점수'로 저장하고,
       student 객체를 아래 콘솔에 출력하세요.
        *콘솔에 출력하기 위해선 객체를 string형으로 출력하는 함수를 이용하셔야 합니다. 
*/

student.avg = avg(scores)

console.log(`4번 문제 정답: ${JSON.stringify(student, null, 2)}`)

/*
    5. student 객체안의 subject 객체에 'key는 kor_history, 값은 85'로 저장하고,
       student 객체를 아래 콘솔에 출력하세요.
        *콘솔에 출력하기 위해선 객체를 string형으로 출력하는 함수를 이용하셔야 합니다. 
*/

student.subject.kor_history = 85

console.log(`5번 문제 정답: ${JSON.stringify(student, null, 2)}`)

/*
    6. 먼저 3번에서 구한 평균점수를 이용해 학점을 구하는 함수를 작성하세요.

         <학점 산출법>
         0미만 100초과: '점수 에러입니다.' 에러메세지 출력 후 함수 종료
         90이상: A
         80이상: B
         70이상: C
         60이상: D
         60미만: F

       구한 학점을 student 객체에 'key는 grade, 값은 구한 학점'로 저장하고
       student 객체를 아래 콘솔에 출력하세요.
        *콘솔에 출력하기 위해선 객체를 string형으로 출력하는 함수를 이용하셔야 합니다. 
*/

const getGradge = (avg) => {
   let grade = ''

   if (avg < 0 || avg > 100) {
      alert('점수 에러입니다.')
      return
   } else if (avg >= 90) {
      grade = 'A'
   } else if (avg >= 80) {
      grade = 'B'
   } else if (avg >= 70) {
      grade = 'C'
   } else if (avg >= 60) {
      grade = 'D'
   } else {
      grade = 'F'
   }

   return grade
}

student.grade = getGradge(avg(scores))

console.log(`6번 문제 정답: ${JSON.stringify(student, null, 2)}`)

/*  7. student객체의 김라라 학생의 정보를 이용해 학생관리 시스템의 리스트에
    김라라 학생의 정보를 출력하세요.      
    id는 6, 출석횟수는 0으로 주세요.
*/

const tbody = document.querySelector('.board_list tbody')
const temp = document.createElement('tr')

temp.innerHTML = `
                  <td>6</td>
                  <td class="title"><a href="./#">${student.name}</a></td>
                  <td>${student.grade}</td>
                  <td>${student.reg_date}</td>
                  <td>0</td>
                  `

tbody.appendChild(temp)

/*
    8. student 객체에서 전화번호를 출력하여 '-'(대시)를 제거하고 번호만 출력하는 형태로 만들고,
    아래 콘솔에 출력하세요.
*/

const phone = student.phone
const phone_arrs = phone.split('-')

let phone_result = ''
for (let phone_arr of phone_arrs) {
   phone_result += phone_arr
}

console.log(`8번 문제 정답: ${phone_result}`)

/*
    9. student 객체에서 날짜(reg_date)를 출력하여 Date함수 형태로 만들고, 
    20일 뒤 날짜를 구하세요.(2024년 2월 3일) 
    구한 후 결과를 아래 콘솔에 출력하세요.
*/

const reg_date = student.reg_date
const date_arrs = reg_date.split('/') // '2024/01/14'

const date = new Date(date_arrs[0], date_arrs[1] - 1, date_arrs[2])
date.setDate(date.getDate() + 20)

console.log(`9번 문제 정답: ${date}`)

const employees = [
   {
      name: '이자',
      addr: '서울시 종로구 계동길 555',
   },
   {
      name: '이축',
      addr: '인천시 서구 검단로 111',
   },
   {
      name: '이인',
      addr: '서울시 강서구 공항로 222',
   },
   {
      name: '이묘',
      addr: '용인시 수지구 수지로 333',
   },
   {
      name: '이진',
      addr: '서울시 용산구 한강대로 555',
   },
   {
      name: '이사',
      addr: '수원시 장안구 장안로 222',
   },
   {
      name: '이오',
      addr: '서울시 강남구 선릉로 111',
   },
   {
      name: '이미',
      addr: '군포시 산본동 산본로 999',
   },
   {
      name: '이신',
      addr: '인천시 남동구 남동로 111',
   },
]

/*
    10. employees 배열은 직원들의 정보를 객체로 가지고 있습니다.
       특정 직원의 객체(어떤 학생이 올지는 모릅니다)에서 addr값이 매개변수로 왔을때 
       서울에 사는 직원은 '서울에 삽니다'를 콘솔에 출력하고  
       다른 지역에 사는 학생은 모두 '서울에 살지 않습니다' 라고 출력한 후
       서울에 사는 직원만 배열 형태로 만들어서 아래 콘솔에 출력하세요.(filter 사용)
*/

console.log('========== 10번 문제 출력 결과물 ==========')

const result = employees.filter((employee) => {
   if (employee.addr.indexOf('서울') === -1) {
      console.log('서울에 살지 않습니다.')
      return false
   } else {
      console.log('서울에 삽니다.')
      return true
   }
})

/*
   // 혹은
   // 여기서의 includes 함수는 String 객체의 함수
   // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/includes
   
   const result = employees.filter((employee) => {
      const livesInSeoul = employee.addr.includes('서울');
      console.log(livesInSeoul ? '서울에 삽니다.' : '서울에 살지 않습니다.');

      return livesInSeoul;
   });

*/

console.log(`10번 문제 정답: ${JSON.stringify(result, null, 2)}`)

/*
    11. employees 배열은 직원들의 정보를 객체로 가지고 있습니다.
       모든 각 직원의 객체에 dept: '개발부' 데이터를 저장하고
       employees 배열을 아래 콘솔에 출력하세요.(map 사용)
*/

const result2 = employees.map((employee) => {
   employee.dept = '개발부'
   return employee
})

console.log(`11번 문제 정답: ${JSON.stringify(result2, null, 2)}`)
