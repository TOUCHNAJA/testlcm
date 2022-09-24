const body = document.querySelector("body");
const lcmBtn = document.querySelector("#lcmBtn");
const box = document.querySelector(".box");
const resultboxLcm = document.querySelector(".resultboxLcm");
const numLcm1 = document.querySelector("#numLcm1");
const numLcm2 = document.querySelector("#numLcm2")
const lcm = document.querySelector("#lcm");
const evenLcm = document.querySelector(".evenLcm");
const oddLcm = document.querySelector(".oddLcm");
const resultLcm = document.querySelector(".resultLcm");

lcmBtn.textContent = "Click here to find LCM of two numbers.";

$(document).ready(function() {
    $(".box").hide();
    body.style.display = "flex";
    $(".resultBtn").mouseover(function() {
        $(".resultBtn").css("color", "white")
    })
    $(".resultBtn").mouseout(function() {
        $(".resultBtn").css("color", "black")
    })
})

const findLcm = () => {
    $(".resultboxLcm").slideToggle("slow");
    $(".resultboxHcf").slideUp();
    
    lcm.addEventListener("click", (e) => {
        e.preventDefault();
        const num1 = numLcm1.value ;
        const num2 = numLcm2.value;

        let min = (num1 < num2) ? num1 : num2;
        while(true){
            if(min % num1 == 0 && min % num2 == 0){
                resultLcm.innerHTML = `LCM of ${num1} and ${num2} is ${min}`;
                if(min % 2 == 0){
                    evenLcm.style.opacity = 1;
                    oddLcm.style.opacity = 0.5;
                }else{
                    oddLcm.style.opacity = 1;
                    evenLcm.style.opacity = 0.5;
                };
                break;
            }
            min++;

        };
    });
};

lcmBtn.addEventListener("click", findLcm)