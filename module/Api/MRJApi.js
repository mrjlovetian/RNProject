
import MRJHttpAPI from './HttpApi.js';

function getBuildList(){ 
    console.log('这里都没进来？');
    //'buildingFilterType':'3','cityId':'112','latitude':'37.33589616502491', 'longitude':'-122.0158392985424', 'pageIndex':'1', 'pageSize':'14', 'propertyId':'0','regionId':'0', 'sellPointId':'0', 'sortId':'0'
    return MRJHttpAPI.GetRequest("/v1/building/nativeBuildingList?buildingFilterType=3&cityId=112&latitude=37.33589616502491&longitude=-122.0158392985424&pageIndex=1&pageSize=14&propertyId=0&regionId=0&sellPointId=0&sortId=0", {});
}

// export default {getBuildList};
module.exports={getBuildList};