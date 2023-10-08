const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock(); //getClock함수를 한번 호출시키고 setInterval에 의해서 1초마다 계속 호출하고 실행
setInterval(getClock, 1000); //안그럼 00:00:00보이고 1초마다 시간보임