const LINE_ACTION = document.querySelectorAll(".line-action")
const CIRCLE = document.querySelectorAll(".circle")
let i = 0;
let ilerle = () => {
    if(i==0){
        CIRCLE[i].style.borderColor = "red"
        i++
        console.log(i)
    }else if(i < 4){
        LINE_ACTION[i-1].style.width = "65px"
        CIRCLE[i].style.borderColor = "red"
        i++
        console.log(i)
    }
}
let gerile = () => {
    if(i == 0){
        CIRCLE[i].style.borderColor = "rgb(153, 153, 153)"
        LINE_ACTION[i-1].style.width = "0px"
    }else if(i == 1){
        CIRCLE[i-1].style.borderColor = "rgb(153, 153, 153)"
        i--
    }else if(i < 5){
        CIRCLE[i-1].style.borderColor = "rgb(153, 153, 153)"
        LINE_ACTION[i-2].style.width = "0px"
        i--
        console.log(i)
    }
}

