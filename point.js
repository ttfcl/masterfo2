let logout = document.querySelector('#logout')
let finderButton = document.querySelector('#finderButton')
let email =  document.querySelector('#email')
let name2 =  document.querySelector('#name')
let point =  document.querySelector('#point')
let point2 =  document.querySelector('#point2')
let finder2 =  document.querySelector('#finder2')
let changeButton =  document.querySelector('#changeButton')
let a1, a2 , a3, a4, a5, a6 ,a7 ,a8
let masterkey = 0

var firebaseConfig = {
    apiKey: "AIzaSyArYfc5A61zRTmKHurBuQ50YccyQjpSFbI",
    authDomain: "link-f7ff3.firebaseapp.com",
    projectId: "link-f7ff3",
    storageBucket: "link-f7ff3.appspot.com",
    messagingSenderId: "324139020031",
    appId: "1:324139020031:web:c06cd9ebc043514658e6ca"
    };
    firebase.initializeApp(firebaseConfig);
  
  const db = firebase.firestore();
  finderButton.onclick = () => {
    db.collection('user').doc(document.querySelector("#finder").value).get().then((결과)=>{
        masterkey = 1
        name2.textContent = 결과.data().displayName
        email.textContent = 결과.data().email
        point.textContent = 결과.data().grade
        point2.textContent = 결과.data().grade
      }).catch((err) => {
        alert('존재하지 않는 이메일입니다.')
        })
  }
  changeButton.onclick = () => {
    db.collection('user').doc(email.textContent).update({ 'grade' : finder2.value}).then(() => {
        alert('변경이 완료되었습니다.')
        location.reload()
    })
  }


  logout.onclick = () => {
    localStorage.clear()
    alert('로그아웃되었습니다.')
    location.href = 'index.html'
  }
