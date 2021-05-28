pr_otv_zadachi_1 = "yes";
pr_otv_zadachi_2 = "no";
pr_otv_zadachi_3 = "no";
pr_otv_zadachi_4 = "yes";
pr_otv_zadachi_5 = "no";

function znakmin(){
    otv_na_vopr = "no";

};

function znakpl(){
    otv_na_vopr = "yes";

};

function sled_vopr(){
    if(document.getElementById('vopros4').style.display == "block"){
        document.getElementById('vopros4').style.display = "none";
        document.getElementById('vopros5').style.display = "block";
        document.getElementById('1').src='/images/timer9.png';
        document.getElementById('2').src='/images/timer1.png';
        otv_4 = otv_na_vopr;
        document.getElementById('kn_sl').style.display = "none";
        document.getElementById('kn_pr').style.display = "block";
    }
    if(document.getElementById('vopros3').style.display == "block"){
        document.getElementById('vopros3').style.display = "none";
        document.getElementById('vopros4').style.display = "block";
        document.getElementById('1').src='/images/timer7.png';
        document.getElementById('2').src='/images/timer8.png';
        otv_3 = otv_na_vopr;
    }

        if(document.getElementById('vopros2').style.display == "block"){
        document.getElementById('vopros2').style.display = "none";
        document.getElementById('vopros3').style.display = "block";
        document.getElementById('1').src='/images/timer5.png';
        document.getElementById('2').src='/images/timer6.png';
        otv_2 = otv_na_vopr;
    }
        if(document.getElementById('vopros1').style.display == "block"){
        document.getElementById('vopros1').style.display = "none";
        document.getElementById('vopros2').style.display = "block";
        document.getElementById('1').src='/images/timer3.png';
        document.getElementById('2').src='/images/timer4.png';
        otv_1 = otv_na_vopr;
    }
}
function proverit(){
    otv_5 = otv_na_vopr;

    ball = 0;
    if(otv_1 == pr_otv_zadachi_1){
    ball +=1;
    otveti = "Вопрос 1. Вы ответили верно.";
    } else {
    otveti = "Вопрос 1. Вы ответили не верно.";
    }
    if(otv_2 == pr_otv_zadachi_2){
    ball +=1;
    otveti += "<br>Вопрос 2. Вы ответили верно.";
    } else {
    otveti += "<br>Вопрос 2. Вы ответили не верно.";
    }
    if(otv_3 == pr_otv_zadachi_3){
    ball +=1;
    otveti += "<br>Вопрос 3. Вы ответили верно.";
    } else {
    otveti += "<br>Вопрос 3. Вы ответили не верно.";
    }
    if(otv_4 == pr_otv_zadachi_4){
    ball +=1;
    otveti += "<br>Вопрос 4. Вы ответили верно.";
    } else {
    otveti += "<br>Вопрос 4. Вы ответили не верно.";
    }
    if(otv_5 == pr_otv_zadachi_5){
    ball +=1;
    otveti += "<br>Вопрос 5. Вы ответили верно.";
    } else {
    otveti += "<br>Вопрос 5. Вы ответили не верно.";
    }


    vsego_zadach = 5;
    procent_vip = ball/vsego_zadach * 100;
    document.getElementById('kn_pr').style.display = "none";
    document.getElementById('rezultat').innerHTML = "<br>Задания выполнены верно на "+procent_vip+"%.<br><br>"+otveti+"<br>";

}
