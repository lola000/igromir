pr_otv_zadachi_1 = "плюс";
pr_otv_zadachi_2 = "минус";
pr_otv_zadachi_3 = "плюс";
pr_otv_zadachi_4 = "плюс";
pr_otv_zadachi_5 = "минус";
pr_otv_zadachi_6 = "плюс";
pr_otv_zadachi_7 = "минус";



function znakmin(){
	otv_na_vopr = "минус";

};

function znakpl(){
	otv_na_vopr = "плюс";

};

function sled_vopr(){
    if(document.getElementById('vopros6').style.display == "block"){
        document.getElementById('vopros6').style.display = "none";
        document.getElementById('vopros7').style.display = "block";
        otv_6 = otv_na_vopr;
        document.getElementById('kn_sl').style.display = "none";
        document.getElementById('kn_pr').style.display = "block";
    }
    if(document.getElementById('vopros5').style.display == "block"){
        document.getElementById('vopros5').style.display = "none";
        document.getElementById('vopros6').style.display = "block";
        otv_5 = otv_na_vopr;
    }
     if(document.getElementById('vopros4').style.display == "block"){
        document.getElementById('vopros4').style.display = "none";
        document.getElementById('vopros5').style.display = "block";
        otv_4 = otv_na_vopr;
    }
     if(document.getElementById('vopros3').style.display == "block"){
        document.getElementById('vopros3').style.display = "none";
        document.getElementById('vopros4').style.display = "block";
        otv_3 = otv_na_vopr;
    }
    if(document.getElementById('vopros2').style.display == "block"){
        document.getElementById('vopros2').style.display = "none";
        document.getElementById('vopros3').style.display = "block";
        otv_2 = otv_na_vopr;
    }
    if(document.getElementById('vopros1').style.display == "block"){
        document.getElementById('vopros1').style.display = "none";
        document.getElementById('vopros2').style.display = "block";
        otv_1 = otv_na_vopr;
    }





}
function proverit(){
    document.getElementById('kn_pr').style.display = "none";
    document.getElementById('var').style.display = "none";
    document.getElementById('plus').style.display = "none";
    document.getElementById('minus').style.display = "none";
	otv_7 = otv_na_vopr;
	ball = 0;
	if(otv_1 == pr_otv_zadachi_1){
    ball +=1;
    otveti = "Вопрос 1. Вы ответили верно. Ваш ответ:"+otv_1;
    } else {
    otveti = "Вопрос 1. Вы ответили не верно. Ваш ответ:"+otv_1;
    }
    if(otv_2 == pr_otv_zadachi_2){
    ball +=1;
    otveti += "<br>Вопрос 2. Вы ответили верно. Ваш ответ:"+otv_2;
    } else {
    otveti += "<br>Вопрос 2. Вы ответили не верно. Ваш ответ:"+otv_2;
    }
    if(otv_3 == pr_otv_zadachi_3){
    ball +=1;
    otveti += "<br>Вопрос 3. Вы ответили верно. Ваш ответ:"+otv_3;
    } else {
    otveti += "<br>Вопрос 3. Вы ответили не верно. Ваш ответ:"+otv_3;
    }
    if(otv_4 == pr_otv_zadachi_4){
    ball +=1;
    otveti += "<br>Вопрос 4. Вы ответили верно. Ваш ответ:"+otv_4;
    } else {
    otveti += "<br>Вопрос 4. Вы ответили не верно. Ваш ответ:"+otv_4;
    }
    if(otv_5 == pr_otv_zadachi_5){
    ball +=1;
    otveti += "<br>Вопрос 5. Вы ответили верно. Ваш ответ:"+otv_5;
    } else {
    otveti += "<br>Вопрос 5. Вы ответили не верно. Ваш ответ:"+otv_5;
    }
    if(otv_6 == pr_otv_zadachi_6){
    ball +=1;
    otveti += "<br>Вопрос 6. Вы ответили верно. Ваш ответ:"+otv_6;
    } else {
    otveti += "<br>Вопрос 6. Вы ответили не верно. Ваш ответ:"+otv_6;
    }
    if(otv_7 == pr_otv_zadachi_7){
    ball +=1;
    otveti += "<br>Вопрос 7. Вы ответили верно. Ваш ответ:"+otv_7;
    } else {
    otveti += "<br>Вопрос 7. Вы ответили не верно. Ваш ответ:"+otv_7;
    }
    vsego_zadach = 7;
    procent_vip = ball/vsego_zadach * 100;
    document.getElementById('rezultat').innerHTML = "Задания выполнены верно на "+procent_vip+"%.<br><br>"+otveti+"<br>";

}
