//Değişken Tanımlama Yeri Başlangıç
const newInput = document.querySelector('#task')
const liste = document.querySelector('#list')
const alertBasarili = document.querySelector(".basarili")
const alertBasarisiz = document.querySelector(".basarisiz")
//Değişken Tanımlama Yeri Bitiş

//Yeni Element Ekleme Fonksiyonu Başlangıç
function newElement(){
    if((newInput.value ==! '') || (newInput.value ==! '&nbsp')){
        //Class yoksa ekleyecek varsa kaldıracak
        alertBasarisiz.classList.toggle('invis')
        //Function
        function a(){
          alertBasarisiz.classList.toggle('invis')
        }
        setTimeout(() => a(),1000) //Burada toggle ile eklediğimiz class'ı 1sn sonra kaldırması için function'ı çalıştırıyoruz
        
    }else{

        liste.innerHTML += `<li>${newInput.value} <button class="button"> Sil </button> </li>`
        //Liste'deki yazıya line çektiğimizde button'daki Sil yazısınıda etkiliyor. Şuan için çözüm bulamadım, HTML Entities den &Xopf; bulup X yapmayı denedim ama yine çizdi. Gelecekte düzelteceğim(unutmazsam)

        //Class yoksa ekleyecek varsa kaldıracak
        alertBasarili.classList.toggle('invis')
        //Function
        function a(){
          alertBasarili.classList.toggle('invis')
        }
        setTimeout(() => a(),1000) //Burada toggle ile eklediğimiz class'ı 1sn sonra kaldırması için function'ı çalıştırıyoruz
    }
}
//Yeni Element Ekleme Fonksiyonu Bitiş

//Liste Çizme ve Silme Başlangıç
    liste.addEventListener('click', function (e) {
        if (e.target.className == '' || e.target.className == 'checked') {
          e.target.classList.toggle('checked');
        } else {
          e.target.parentElement.remove();
        }
      });
//Liste Çizme ve Silme Başlangıç
