var mid = $('.middle');
var oWidth = mid.width();
var oHeight = oWidth / 2 ;
$('.middle').css('height',oHeight + 'px'); 
$('.middle-wrapper').css('height',oHeight + 'px'); 
$('.middle div ul').css('width',oWidth);

function midSlide(){
     var slider = $j('#middle-wrapper'),
         $i = $j('.index-wrapper>i'),
         flag = true;
    $('#middle-wrapper').swipeLeft(function(){
        if(flag){
            slider.animate({left:-oWidth},1000);
            setTimeout(function() {
                $i.eq(0).removeClass('isOnPage');  
            }, 400);
            flag = false;
        }else{
            setTimeout(function(){
                $i.eq(1).addClass('isOnPage');   
            },800)
            flag = true;
        }
    }).swipeRight(function(){
        if(flag){
            slider.animate({left:0},1000);
            setTimeout(function() {
                $i.eq(1).removeClass('isOnPage');    
            }, 400);
            flag = false;
        }else{
            setTimeout(function() {
                $i.eq(0).addClass('isOnPage');    
            }, 800);
            flag = true;
        }
    })
}
//这里用settimeout来完成延时操作，让画面感觉更好点
//因为不能用delay，这里i标签使用的是变换class，delay没效果。
//delay只能用于动画
midSlide();