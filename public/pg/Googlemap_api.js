
var Gps_data = {};

//Ajax_Get
function aaa(){
  $.ajax({
    type:"GET",
    url:"http://localhost:4567",
    //data: Gps_data,
    success: function(json){
      console.log("success!!!");
      console.log(json);
      Gps_data = JSON.parse(json);
      Marker_g();
    },
    error: function(){
      console.log("error....");
    }
  });
}

//GoogleMap作成
var myMap = new google.maps.Map(document.getElementById("map"), {
    // ズームレベル
    zoom: 17,
    // 中心点緯度経度
    center: new google.maps.LatLng(34.6637055,135.517913),
    // 距離目盛りの表示
    scaleControl: false,
    // 地図の種類
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  function Marker_g(){
    var myMarker = new google.maps.Marker({
      // マーカーを置く緯度経度
      position: new google.maps.LatLng(Gps_data['lat'],Gps_data['lon']),
      map: myMap,
    });
    var infowindow = new google.maps.InfoWindow({
      content: Gps_data['name']
    });
    infowindow.open(myMap,myMarker);
  }

setInterval("aaa()",5000);
