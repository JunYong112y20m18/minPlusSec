var checkBtn = document.getElementById("checkBtn");
var num = document.getElementById("num");
var numR = document.getElementById("numR");
var show = document.getElementById("show");
var sumTime = 0;

checkBtn.addEventListener("click", function(){
    num = document.getElementById("num").value;
    
    show.innerHTML = `
    <p>選手:${num}人</p>`;
    for(var i = 0 ; i < num ; i++){
        getInput(i);
    }
    show.innerHTML += `<button id="add" onclick="addClick()">確認</button>`
})

function getInput(who){
    show.innerHTML += `<p>請輸入選手-${who+1}時間:<input type="number" inputmode="numeric" id="time${who}m"class="short-input">分<input type="number" inputmode="numeric" id="time${who}s"class="short-input">秒
    </p>`
    
    
}

function addClick(){
    for(var i = 0 ; i < num ; i++){
        var timeM = document.getElementById("time"+i+"m").value * 60;
        
        var timeS = document.getElementById("time"+i+"s").value;
       
        sumTime += parseInt(timeM, 10) + parseInt(timeS, 10);
    }
    var min = sumTime / 60 | 0;
    var sec = sumTime % 60;
    show.innerHTML += `<p>總成績為:${min}分 ${sec}秒</p>
    <button id="reast" onclick="reastClick()">重設</button>`

}

function reastClick(){
    show.innerHTML = "";
    numR.innerHTML = `選手人數:<input  id="num" list="numList">
    <datalist id="numList">
        <option value="1"></option>
        <option value="2"></option>
        <option value="3"></option>
        <option value="4"></option>
    </datalist>`;
    sumTime = 0;
}