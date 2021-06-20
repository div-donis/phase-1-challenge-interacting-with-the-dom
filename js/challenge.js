let myTime = document.getElementById("#counter");
let total = 0;
setInterval(timer, 1000);

function timer(){
    ++total;
    myTime.textContent = counter(total);
    function counter(num){
        let numString = num + "";
        if(numString.length < 2){
            return "0" + numString;
        }
        else{
            return numString;
        }
    }
}
