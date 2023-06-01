let nkb = document.querySelector('#nkb')
let nka = document.querySelector('#nka')
let nkcb = document.querySelector('#nkcb')
let ntb = document.querySelector('#ntb')
let nta = document.querySelector('#nta')
let ntcb = document.querySelector('#ntcb')
let nbb = document.querySelector('#nbb')
let nba = document.querySelector('#nba')
let nbcb = document.querySelector('#nbcb')
let nab = document.querySelector('#nab')
let naa = document.querySelector('#naa')
let nacb = document.querySelector('#nacb')
let skb = document.querySelector('#skb')
let ska = document.querySelector('#ska')
let skcb = document.querySelector('#skcb')
let stb = document.querySelector('#stb')
let sta = document.querySelector('#sta')
let stcb = document.querySelector('#stcb')
let sbb = document.querySelector('#sbb')
let sba = document.querySelector('#sba')
let sbcb = document.querySelector('#sbcb')
let sab = document.querySelector('#sab')
let saa = document.querySelector('#saa')
let sacb = document.querySelector('#sacb')
let logout = document.querySelector('#logout')

let a1, a2 , a3, a4, a5, a6 ,a7 ,a8

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
  db.collection('product').doc('firstclass').get().then((결과)=>{
    a1 = 결과.data().kt
    console.log(a1)
    nkb.textContent = a1
  })
  db.collection('product').doc('firstclass').get().then((결과)=>{
    a2 = 결과.data().te
    console.log()
    ntb.textContent = a2
  })
  db.collection('product').doc('firstclassbank').get().then((결과)=>{
    a5 = 결과.data().bank
    console.log()
    nbb.textContent = a5
  })
  db.collection('product').doc('firstclassbank').get().then((결과)=>{
    a6 = 결과.data().account
    console.log()
    nab.textContent = a6
  })
  db.collection('product').doc('ojowa2').get().then((결과)=>{
    a3 = 결과.data().kt
    console.log()
    skb.textContent = a3
  })
  db.collection('product').doc('ojowa2').get().then((결과)=>{
    a4 = 결과.data().te
    console.log()
    stb.textContent = a4
  })
  db.collection('product').doc('ojowa2bank').get().then((결과)=>{
    a7 = 결과.data().bank
    console.log()
    sbb.textContent = a7
  })
  db.collection('product').doc('ojowa2bank').get().then((결과)=>{
    a8 = 결과.data().account
    console.log()
    sab.textContent = a8
  })

  nkcb.onclick = () => {
    db.collection('product').doc('firstclass').update({ 'kt' : nka.value}).then(() => {
        location.reload()
    })
  }
  ntcb.onclick = () => {
    db.collection('product').doc('firstclass').update({ 'te' : nta.value}).then(() => {
        location.reload()
    })
  }
  nbcb.onclick = () => {
    db.collection('product').doc('firstclassbank').update({ 'bank' : nba.value}).then(() => {
        location.reload()
    })
  }
  nacb.onclick = () => {
    db.collection('product').doc('firstclassbank').update({ 'account' : naa.value}).then(() => {
        location.reload()
    })
  }
  skcb.onclick = () => {
    db.collection('product').doc('ojowa2').update({ 'kt' : ska.value}).then(() => {
        location.reload()
    })
  }
  stcb.onclick = () => {
    db.collection('product').doc('ojowa2').update({ 'te' : sta.value}).then(() => {
        location.reload()
    })
  }
  sbcb.onclick = () => {
    db.collection('product').doc('ojowa2bank').update({ 'bank' : sba.value}).then(() => {
        location.reload()
    })
  }
  sacb.onclick = () => {
    db.collection('product').doc('ojowa2bank').update({ 'account' : saa.value}).then(() => {
        location.reload()
    })
  }
  logout.onclick = () => {
    localStorage.clear()
    alert('로그아웃되었습니다.')
    location.href = 'index.html'
  }
