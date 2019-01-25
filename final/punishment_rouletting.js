// 벌칙 리스트 변수
var punishment_list = [];
// 기본 벌칙들
var def = ['벌칙1','벌칙2','벌칙3'];

// punishment_list = copy.def

// 랜덤한 숫자 인덱스를 생성해서 벌칙리스트에서 벌칙을 반환
function rouletting_punishment() {
    var ran_num = Math.floor((Math.random() * 100) + 1)
    ran_num %= def.length;
    // https://www.w3schools.com/jsref/jsref_random.asp
    return def[ran_num]
}

// HTML 구문에서 벌칙 text 변경
function change_punishment_text() {

}

// 룰렛버튼 작동 구문
var roulette_Button = document.getElementsByClassName("roulette")[0]
var roulette_text_HTML = roulette_Button.getElementsByTagName('p')[0] //FIXME
var textValue = roulette_text_HTML.querySelector('.text-value');
var transition_time = '3s' //FIXME
var clicked = false

roulette_Button.addEventListener('click', function() {
    if(!clicked){
        console.log("클릭");
        clicked = true;
        //클릭되자 말자 HTML 구문의 텍스트 삭제
        console.log(roulette_text_HTML);
        textValue.innerHTML = '' //FIXME
        console.log(roulette_text_HTML.innerHTML);
        document.body.classList.toggle('roulette_Button_clicked');
        console.log(rouletting_punishment());
        textValue.style.color = 'red';
        textValue.style.fontWeight = 'bold';
        
        // setTimeout(function() {
            textValue.innerHTML = rouletting_punishment();
        // }, 1000);

    }
})
//텍스트
