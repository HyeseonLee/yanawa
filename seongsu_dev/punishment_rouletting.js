// 벌칙 리스트 변수
var punishment_list = []
// 기본 벌칙들
var default = ['벌칙1','벌칙2','벌칙3','벌칙4','벌칙5'] //FIXME

punishment_list = copy.default

// 랜덤한 숫자 인덱스를 생성해서 벌칙리스트에서 벌칙을 반환
function rouletting_punishment() {
    var ran_num = Math.floor((Math.random() * 100) + 1)%(punishment_list.length);
    // https://www.w3schools.com/jsref/jsref_random.asp
    return punishment_list[ran_num]
}

// 룰렛버튼 작동 구문
var roullet_Button = null //FIXME
var roullet_text_HTML = null //FIXME
var transition_time = 10s //FIXME
var clicked = false

roullet_Button.addEventListener('click', function() {
    if(!clicked){
        clicked = true;
        //클릭되자 말자 HTML 구문의 텍스트 삭제
        roullet_text_HTML = null //FIXME
        document.body.classList.toggle('roullet_Button_clicked');
        delay(transition_time)
        roullet_text_HTML = roulleting_punishment()
    }
})
