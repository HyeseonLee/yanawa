// pms는 promise의 약자, pms_name -> 약속 이름, pms_date -> 약속 날짜(YYYY-MM-DD), pms_time -> 약속 시간(HH:MM)

//현재 시간
var current_time = new Date();
// HTML에서 input들 모여있는 div
var inputs_table_obj = document.getElementById('inputs_table')
//
var pms_name_obj = document.getElementById('pms_name');
var pms_name = pms_name_obj.value

var pms_date_obj = document.getElementById('pms_date')
var pms_date = pms_date_obj.value

var pms_time_obj = document.getElementById('pms_time')
var pms_time = pms_time_obj.value



// 확인 취소 버튼
// var buttons = document.querySelectorAll('button')
// var button_yes = buttons[0]
// var button_no = buttons[1]

var button_yes = document.getElementsByClassName('hidden-button')[0];

//---------------지도 관련 변수들 -----------------------

//위도와 경도, 초기값은 카카오 본사
var latitude = 33.450701;
var longitude = 126.570667;


//////////////////////////////////////////////////////////
//
// // MAP API
// var container = document.getElementById('map');
// var options = {
// 	// 위도와 경도를 입력하여 지도의 시작위치 표시
// 	center: new daum.maps.LatLng(33.450701, 126.570667),
// 	// 지도의 확대 정도, 자연수 값
// 	level: 3
// };
// // container와 options를 넘겨주어 지도 생성
// var map = new daum.maps.Map(container, options);
// // 맵 중앙의 좌표를 받아와서 마커 생성
// var marker = new daum.maps.Marker({
// 	position: map.getCenter()
// });
//
// // 지도에 마커 표시
// marker.setMap(map);
//
// var latitude;
// var longitude;
//
// // 지도에 클릭 이벤트 등록 및 마지막 파라미터로 넘어온 함수 호출
// daum.maps.event.addListener(map, 'click', function(mouseEvent) {
// 	// 클릭한 위도, 경도 정보 가져오기
// 	var latlng = mouseEvent.latLng;
// 	// 마커 위치를 클릭한 위치로 이동
// 	marker.setPosition(latlng);
//
// 	latitude = latlng.getLat(); // 위도, type 은 number
// 	longitude = latlng.getLng(); // 경도
// 	var check = '위도는' + latitude + ' 경도는' + longitude;
// 	// console.log(typeof(latitude));
// 	console.log(check); // console 에서 확인
// 	longitude
// })

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
		return;
	}
	// Check pms_name
	var pms_name = namecheck()
	if (pms_name == "") {
		alert("이름을 입력하세요")
		return;
	}

	var d = inputed_time;
	var inputed_time2 = d.getFullYear() +"년 " + (d.getMonth() + 1) + "월 " + d.getDate() + "일 " + d.getHours() + "시 " + d.getMinutes() + "분"
	// 현재 지도의 마킹 위치를 체크하고 있는지 확인
	
	var temp = "\n약속 이름 : " + pms_name + "\n약속 시간 : " + inputed_time2 + "\n경도 : " + latitude + "\n위도 : "+ longitude;
	console.log('@@@@@@@@@'+latitude, longitude);
	var retVal = confirm(temp + "\n위의 설정이 맞습니까?")
	if(retVal) {
		//파싱할 정보 있음
		window.location.href="";
		window.open()
	}
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
//----------------- 지    도 --------------------------------

    
    

	

    // ---------------------------------- 지도만들기  --------------------------------------------
		var container = document.getElementsByClassName('map');
		var options = {
            // 위도와 경도를 입력하여 지도의 시작위치 표시, 카카오 본사
            center: new daum.maps.LatLng(33.450701, 126.570667),
            // 지도의 확대 정도, 자연수 값
			level: 3
		};
        // container와 options를 넘겨주어 지도 생성
        var map = new daum.maps.Map(container[0], options);
    // ------------------------------------------------------------------------------------------


    
   
   
   // ---------------------------------- 목적지 마커 생성  --------------------------------------------
        // 맵 중앙의 좌표를 받아와서 마커 생성
        var marker = new daum.maps.Marker({
            position: map.getCenter()
        });
    
        // 지도에 마커 표시
        marker.setMap(map);
    // ------------------------------------------------------------------------------------------


        
        
        // 실시간으로 주소를 띄우기 위한 변수
        var address_interval;

        // 지도에 클릭 이벤트 등록 및 마지막 파라미터로 넘어온 함수 호출
        daum.maps.event.addListener(map, 'click', function(mouseEvent){
            // 클릭한 위도, 경도 정보 가져오기
            var latlng = mouseEvent.latLng;
            
            // 마커 위치를 클릭한 위치로 이동
            marker.setPosition(latlng);
            

            latitude = latlng.getLat(); //type 은 number
            longitude = latlng.getLng(); 
            
            
            var check = '위도는' + latitude + ' 경도는' + longitude;
            
            console.log(check); // console 에서 확인
            
            address_interval = setInterval(function(){
                
                // position의 type 은 latlng
                // 마크로 찍는 위치의 위치정보를 가지고 와서 이를 주소로 띄워준다.
                var position = new daum.maps.LatLng(latitude, longitude);
               //  마크 위치가 바뀔 때마다 최신화 해서 주소로 띄워주는 함수
               
                searchAddrFromCoords(position,displayCenterInfo); 
            },500 );
        })       
        
        
// ----------------------------------  주소 표시하기  --------------------------------------------
        // 주소-좌표 변환 객체를 생성
        var geocoder = new daum.maps.services.Geocoder();
        
        // 클릭한 위치에 대한 주소를 표시할 인포윈도우
        var infowindow = new daum.maps.InfoWindow({zindex:1});
        
        // 지도 좌측 상단에 주소 표시
        // 첫번째 주소
        searchAddrFromCoords(map.getCenter(),displayCenterInfo); 
    
        
        // 좌표로 행정동 주소 정보를 요청합니다
        function searchAddrFromCoords(coords, callback) {
            geocoder.coord2RegionCode(coords.getLng(), coords.getLat(), callback);       
        }       


        // 지도 좌측상단에 지도 중심좌표에 대한 주소정보를 표출하는 함수입니다
        function displayCenterInfo(result, status) {
            if (status === daum.maps.services.Status.OK) {
            var infoDiv = document.getElementById('address');

            for(var i = 0; i < result.length; i++) {
            // 행정동의 region_type 값은 'H' 이므로
            if (result[i].region_type === 'H') {
                infoDiv.innerHTML = result[i].address_name;
                
                break;
            }
            }
            }  
        }  
// ---------------------------------------------------------------------------------------------
        
	