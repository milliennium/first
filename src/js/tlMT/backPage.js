function backPage(){
    $('.backPage-box').tap(function(){
       window.location.href = "../../first/first.html";
       sessionStorage.shopInfo = "";
    })
}
backPage()