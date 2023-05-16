let obj = [
    {
        id: 1,
        question: "Ո՞ր կրոնական փիլիսոփայության ուղղություններից է Դզեն ուսմունքը.",
        a: "Ա:  Դաոսիզմ",
        b: "Բ։  Հինդուիզմ",
        c: "Գ։  Բուդիզմ",
        d: "Դ։  Հուդաիզմ",
        correct_sentence: "c"
    }, {
        id: 2,
        question: "1932թ. ո՞ր քաղաքում է առաջին անգամ անցկացվել առաջին միջազգային կինոփառատոնը.",
        a: "Ա:  Բելին",
        b: "Բ։  Մոսկվա",
        c: "Գ։  Վենետիկ",
        d: "Դ։  Կանն",
        correct_sentence: "c"
    }, {
        id: 3,
        question: "Ո՞վ է առաջինը Նոբելյան մրցանակ ստացել գրականության ասպարեզում.",
        a: " Ա:  Պոետ",
        b: " Բ։  Էսսեիստ",
        c: " Գ։  Վիպասան",
        d: " Դ։  Դրամատուրգ",
        correct_sentence: "a"
    }, {
        id: 4,
        question: "Ո՞ր քիմիական տարրն է անվանվել ի պատիվ ստորգետնյա չար թզուկի.",
        a: " Ա:  Հաֆնիում",
        b: " Բ։  Կոբալտ",
        c: " Գ։  Տելուր",
        d: " Դ։  բերիլիում",
        correct_sentence: "b"
    }, {
        id: 5,
        question: "Ո՞վ է Հովհաննես Թումանյանը",
        a: "Ա:  խադավիկ",
        b: "Բ։  բանաստեղծ",
        c: "Գ։  լրագրող",
        d: "Դ։  պատմաբան",
        correct_sentence: "b"
    },
]

let hashiv={
    chisht:0,
    sxal:0
}
let good_answer
let answeerr= document.querySelectorAll(".answeerr")
let question1 = document.querySelector(".question1")
let continer1 = document.querySelector(".continer1")
let continer2 = document.querySelector(".continer2")
let continer3 = document.querySelector(".continer3")
let continer4 = document.querySelector(".continer4")
let question = document.querySelector(".question")
let answer = document.querySelector(".answer")
let continer = document.querySelector(".continer")
let count_answer=document.querySelector(".count_answer")
let count_number=document.querySelector(".count_number")
count_answer.innerHTML=obj.length

let id = 1

  function A(){
      obj.filter(res=>{
          if(res.id === id){
              good_answer=res.correct_sentence
              question1.innerHTML=res.question
              continer1.innerHTML=res.a
              continer2.innerHTML=res.b
              continer3.innerHTML=res.c
              continer4.innerHTML=res.d

          }

      })
  }
A()


function next_question(){
    document.querySelector(".answer").style.pointerEvents="auto"
    count_number.innerHTML++
    continer1.style.background="royalblue"
    continer2.style.background="royalblue"
    continer3.style.background="royalblue"
    continer4.style.background="royalblue"
    id++
 A()


    if(id===obj.length+1){
        answer.style.display="none"
        question.style.display="none"

        continer.innerHTML=`
        <h6 style="font-size: 50px">chisht:${hashiv.chisht}</h6>
        <h6 style="font-size: 50px">sxal:${hashiv.sxal}</h6>
        `
    }


}



answeerr.forEach(res=>{
    res.addEventListener("click", function (e){

        if(e.target.dataset.id===good_answer){
        hashiv.chisht++


            e.target.style.background="blue"
    }else {

        hashiv.sxal++
            e.target.style.background="red"
    }

        document.querySelector(".answer").style.pointerEvents="none"

    })

})




