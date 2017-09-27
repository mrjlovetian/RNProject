
import MRJHttpAPI from './HttpApi.js';

function getBuildList(){ 
    //'buildingFilterType':'3','cityId':'112','latitude':'37.33589616502491', 'longitude':'-122.0158392985424', 'pageIndex':'1', 'pageSize':'14', 'propertyId':'0','regionId':'0', 'sellPointId':'0', 'sortId':'0'
    return MRJHttpAPI.GetRequest("http://gateway.dev.apitops.com/broker-service-api/v1/building/nativeBuildingList?buildingFilterType=3&cityId=112&latitude=37.33589616502491&longitude=122.0158392985424&pageIndex=1&pageSize=14&propertyId=0&regionId=0&sellPointId=0&sortId=0", {});
}

function getName(){
    console.log('哈哈哈');
}

// export default {getBuildList};///外部应用需要使用getBuildList.getBuildList(),外部引用不需要加{}
// export default getBuildList;///外部应用需要使用getBuildList(),外部引用不需要加{}
module.exports={getBuildList, getName};///外部应用需要使用getBuildList(),外部引用需要加{}