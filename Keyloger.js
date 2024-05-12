console.log("jnnR");
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const logDiv = document.getElementById("log");
const stateDiv = document.getElementById("state");


startBtn.addEventListener("click",()=>{
    document.addEventListener("keyup",handleUp)
    document.addEventListener("keydown",handleDown)
})

stopBtn.addEventListener("click",()=>{
    document.addEventListener("keyup",handleUp)
    document.addEventListener("keydown",handleDown)
    logDiv.textContent ="";
    stateDiv.textContent ="";
})
function handleDown(e) {
    logDiv.textContent = `Key ${e.key} was down`;
    stateDiv.textContent = `KEY is down.`;
}
function handleUp(e) {
    logDiv.textContent = `Key ${e.key} was UP`;
    stateDiv.textContent = `KEY is UP.`;
}
