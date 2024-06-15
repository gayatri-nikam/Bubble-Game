let val = 0;
let time = 60;
var run = 0;
function myHit() {
    val = Math.floor(Math.random() * 10)
    document.querySelector("#hitNum").textContent = val;
}
function makeBubble() {
    var store = "";
    for (var i = 1; i <= 150; i++) {
        val = Math.floor(Math.random() * 10)
        store += `<div id="bubble">${val}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = store;
}
function runTimer() {
    let interval = setInterval(() => {
        if (time > 0) {
            time--;
            document.querySelector("#timer").textContent = time;
        }
        else {
            clearInterval(interval);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`
        }
    }, 1000);
}
function IncreaseS() {
    run += 10;
    document.querySelector("#scoreval").textContent = run;
}
function matcher() {
    document.querySelector("#pbtm").addEventListener("click", function (dets) {
        let imfo = Number(dets.target.textContent)
        if (imfo === val) {
            IncreaseS();
            makeBubble();
            myHit();
        }
    })

}
makeBubble()
runTimer()
myHit()
matcher()
