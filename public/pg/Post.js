
//ユーザー名取得
var user_name = window.prompt("ユーザー名を入力 >>", "");
var GPS_data = [];
var JsonpGps_data = [];

var G_options = {                                                               //GPSデータオプション
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
  frequency: 500
};

function G_success(pos) {                                                       //GPSデータ成功時
  var crd = pos.coords;

  //console.log('Your current position is:');
  //console.log('Latitude : ' + crd);
  //console.log('Longitude: ' + crd.longitude);
  //console.log('More or less ' + crd.accuracy + ' meters.');
  //console.log(pos);

  console.log(crd.latitude);                                                     //取得したGPSデータの確認
  console.log(crd.longitude);

  //monitor_GPS(crd.latitude,crd.longitude);
  inner_GPS(crd.latitude,crd.longitude);
};
function G_error(err) {                                                         //GPSデータ失敗時
  console.log("error");
};

//GPSデータを表示
//function monitor_GPS(lat,lon){
//  $('.GPS_data1').html("<p>lat:"+ lat +" lon:"+ lon +"</p> ");
//};
function inner_GPS(lat,lon){                                                    //GPSデータをJSON形式に変換し、POSTする
  GPS_data = { "lat":lat,"lon":lon ,"name":user_name};                          //GPSデータを連想配列化
  post(GPS_data);                                                               //GPSデータをAjaxで送信
  JsonpGps_data = JSON.stringify(GPS_data);                                     //JSONへ変換
  //post(JsonpGps_data);
  console.log("Post_js  (GPS_data) :" + GPS_data);                              //それぞれのデータ確認
  console.log("Post_json(GPS_data) :" + JsonpGps_data);
}

//成功：success　失敗：error　設定：options
navigator.geolocation.watchPosition(G_success, G_error, G_options);             //動的GPSデータ取得

//AJAX_POST
  function post(data){
      $.ajax({
    type: "POST",
    url: "http://localhost:4567",
    data: data,
    success:function(j_data){
      console.log("Post_Ajax : success!! data::" + j_data);
    },
    error:function(){
      console.log("Post_Ajax : error...");
    }
  });}
