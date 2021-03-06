// pms는 promise의 약자, pms_name -> 약속 이름, pms_date -> 약속 날짜(YYYY-MM-DD), pms_time -> 약속 시간(HH:MM)

//현재 시간
var current_time = new Date();
// HTML에서 input들 모여있는 div
var inputs_table_obj = document.getElementById('inputs_table')
// 디폴트 문자 (사용 X)
var pms_name_default = "입력하세요"
//
var pms_name_obj = document.getElementById('pms_name');
var pms_name = pms_name_obj.value

var pms_date_obj = document.getElementById('pms_date')
var pms_date = pms_date_obj.value

var pms_time_obj = document.getElementById('pms_time')
var pms_time = pms_time_obj.value

// 확인 취소 버튼
var buttons = document.querySelectorAll('button')
var button_yes = buttons[0]
var button_no = buttons[1]
//////////////////////////////////////////////////////////

// MAP API
var container = document.getElementById('map');
var options = {
	// 위도와 경도를 입력하여 지도의 시작위치 표시
	center: new daum.maps.LatLng(33.450701, 126.570667),
	// 지도의 확대 정도, 자연수 값
	level: 3
};
// container와 options를 넘겨주어 지도 생성
var map = new daum.maps.Map(container, options);
// 맵 중앙의 좌표를 받아와서 마커 생성
var marker = new daum.maps.Marker({
	position: map.getCenter()
});
// 지도에 마커 표시
marker.setMap(map);

var latitude;
var longitude;

// 지도에 클릭 이벤트 등록 및 마지막 파라미터로 넘어온 함수 호출
daum.maps.event.addListener(map, 'click', function(mouseEvent) {
	// 클릭한 위도, 경도 정보 가져오기
	var latlng = mouseEvent.latLng;
	// 마커 위치를 클릭한 위치로 이동
	marker.setPosition(latlng);

	latitude = latlng.getLat(); // 위도, type 은 number
	longitude = latlng.getLng(); // 경도
	var check = '위도는' + latitude + ' 경도는' + longitude;
	// console.log(typeof(latitude));
	console.log(check); // console 에서 확인
	longitude
})

///////////////////////////////////////////////////////////////////////////////////

//function
function namecheck() {
	var pms_name_obj = document.getElementById('pms_name');
	var pms_name = pms_name_obj.value

	return pms_name
}

function timecheck() {
	var pms_date_obj = document.getElementById('pms_date')
	var pms_date = pms_date_obj.value

	var pms_time_obj = document.getElementById('pms_time')
	var pms_time = pms_time_obj.value

	return new Date(pms_time + " " + pms_date);
}

// Yes 버튼 눌렀을 때 확인
button_yes.addEventListener('click', function() {
	var inputed_time = timecheck()
	//Check time time diff
	if (inputed_time < current_time) {
		alert("올바른 시간을 입력해주세요")
	}
	// Check pms_name
	var pms_name = namecheck()
	if (pms_name == "") {
		alert("이름을 입력하세요")
	}
	// 현재 지도의 마킹 위치를 체크하고 있는지 확인
	console.log(latitude + "\n" + longtitude)
})


/*
button_yes.addEventListener('click', function () {
    console.log(current_time)
    console.log(pms_time)
    console.log(pms_date)
    console.log(a)
    console.log(a>current_time)
})
*/
