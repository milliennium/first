function slide(){
    var len = $j('.stage li').length,
        oWidth = $j('#top-pic').width(),
        oTag = true, 
        flag = 0,
        oUl = $j('.stage'),
        timer = setInterval(function(){
                move('left')
//这里需要再多一个函数包裹move函数，因为你传递参数后，会被当成函数执行，而不是函数引用
        },3500);
    function move(type){
        if(type == 'left'){
            flag ++;
            if(flag != 6){
                oUl.animate({left:-(oWidth * flag)},1000)
            }else{
                flag = 0;
                oUl.css({left:0})
                    .animate({left:-(++flag)*oWidth},1000)
            }
        }else if(type == 'right'){
            if(flag != 0){
                flag --;
                oUl.animate({left:-(oWidth * flag)},1000)
            }else{
                flag = 5;
                oUl.css({left:- (flag * oWidth)})
                    .animate({left:-(--flag)*oWidth},1000);
            }
        }
    }
    //swipeLeft 会执行两次  。。。
    //需要一个开关让它形成逻辑。。。。
    $('.stage').swipeLeft(function(){
        if(oTag){
            clearInterval(timer);
            move('left');
            oTag = false;            
        }else{
            timer = setInterval(function(){
                move('left')
            },3500);
            oTag = true;            
        }
    }).swipeRight(function(){
        if(oTag){
            clearInterval(timer)
            move('right')
            oTag = false;
        }else{
            timer = setInterval(function(){
                move('left')
            },3500)
            oTag = true;
        }
    })
}

//函数执行 
slide()


