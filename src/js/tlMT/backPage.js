function backPage(){
    $('.backPage-box').tap(function(){
       window.location.href = "../../meituan/first.html";
       sessionStorage.shopInfo = "";
    })
}
backPage()