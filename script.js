let num = document.querySelector(".num")
let btn = document.querySelector(".btn")

btn.addEventListener("click", function() {
    generateOTP();
});

function generateOTP() {
    let otp = Math.floor(Math.random() * 9000) + 1000;
    num.innerHTML = otp;
}