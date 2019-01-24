// 기준 점의 위도와 경도를 받아서 입력한 range(단위 meter)안의 값으로 랜덤한 좌표를 생성한다.
//우리나라 부근에서
// 1도 차이가 날 경우 직선거리 : 약 110km
// 1분 차이가 날 경우 직선거리 : 약 1.8km
// 1초 차이가 날 경우 직선거리 : 약 30m

//위도 경도 범위
function make_random_position(latitude, altitude, range) {
    // range(미터) 가 들어오면 이것은 110km 나눈다, 이것은 원의 지름이다.
    var delta = range/110000
    // 0~360사이의 랜덤한 각도를 생성한다.
    var theta = (Math.random() * 360)
    // 극좌표계로 바꾼다
    var d_l = Math.cos(theta)*delta
    var d_a = Math.sin(theta)*delta
    // 값을 더허여 리스트로 반환
    return = [latitude + d_l, latitude + d_a]
}

function make_random_destination(latitude,altitude) {
    // 1000m 이내의 랜덤한 숫자를 생성한다.
    var ran_num = Math.floor((Math.random() * 1000) + 1)
    // 생성된 숫자를 도착지까지의 거리로 하여 랜덤한 도착지를 리스트형태로 반환한다.
    return = function make_random_position(latitude,altitude,ran_num)
}

function make_random(num,lat,alt) {
    var result = []
    for(int i = 0; i < num; i++) {
        var range = Math.floor((Math.random() * 10000) + 1)
        result.append(make_random_position(lat,alt,range))
        result.append(make_random_destination(lat,alt))
    }
    return result
}
