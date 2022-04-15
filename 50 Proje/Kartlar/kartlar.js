//Tanımlamalar
//İlerde dinamik giriş olursa diye basit şeyleri bile değişkenler ile yapmaya çalıştım
const CONTAINER = document.querySelector(".container")
const wantsCard = 5

//İşlemler
for(i=0;i<wantsCard;i++){
    let divText = 
    `
        <div class="dv" id="sira${i}">
        <img src="https://picsum.photos/id/${Math.floor(Math.random() * 1000)}/1200/800" />
        </div>    
    `
    CONTAINER.innerHTML += divText
}

const deneme = document.getElementsByClassName("dv")
Array.from(deneme)[0].classList.add("focus")
Array.from(deneme).forEach( div => {
    div.addEventListener("click", () => {
        removeFocus()
        div.classList.add("focus")
    })
})
let removeFocus = () => {
    Array.from(deneme).forEach(div => {
        div.classList.remove("focus")
    })
}