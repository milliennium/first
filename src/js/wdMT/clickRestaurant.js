function clickRestaurant(data){
    $('.shop-box').tap(function(){
       var index =  $(this).index();
       var oData = JSON.stringify(data[index]);
       sessionStorage.shopInfo = oData;
       console.log(window.location.href)
       window.location.href = '../../meituan/second.html';
       //实现不用a标签就能跳转页面
    })
}
module.exports = clickRestaurant;