let curIndex = 0,
    lastIndex = 0,
    $ul = $('.a-type-list'),
    len = $ul.length,
    wrapHeight = $('#content-wrap').offset().height,
    oDiv = $('.dish-list-box').eq(0),
    $div = $('.list-item');
$div.eq(0).css({background:'white'});
$div.tap(function(e){
    curIndex = $(this).index();
    if(curIndex != lastIndex){
        getChange(curIndex,'divTap');
        // getChange  执行
    }
})

// console.log($ul.eq(0).position(),$ul.get(0).offsetTop);
//jquery offset方法相对于浏览器定位，js源码相对于有定位的父级，
//jquery有position（）方法来相对于有定位的父级定位
function getChange(index,type){
    if(type == 'divTap'){
        let oTop = $ul.eq(index).position().top,
            oHeight = $ul.eq(index).offset().height;
        if(index == len - 1){
            if(oHeight >= wrapHeight){
                oDiv.css({top:-oTop});
            }else{
                oDiv.css({top:-(oTop + oHeight - wrapHeight)}); 
                //当最后一个ul list比wrap小的时候需要将它放在最底部；          
            }
        }else{
            oDiv.css({top:-oTop});
        }        
    }
    $div.eq(lastIndex).css({background:'#efefef'});
    $div.eq(index).css({background:'white'});
    lastIndex = index;
}

function getNowIndex(top){
    for(let i = 0 ;i< len;i++){
       if($ul.position().top <= top && $ul.eq(i+1).position().top > top){
           return i;
           break;
       }
    }
}

oDiv.get(0).addEventListener('touchstart',function(e){
    //它的clientX等数据存在 于e.touches[0].clientX
    let eve = e||window.event,
        oTop = $(this).position().top,
        lastTop = $ul.eq(len - 1).position().top + $ul.eq(len - 1).offset().height - wrapHeight,
        moveLen = 0;
    let initialY = eve.touches[0].pageY||e.touches[0].clientY||eve.touches[0].screenY;
    this.addEventListener('touchmove',move,false)
    this.addEventListener('touchend',function(){
        this.removeEventListener('touchmove',move,false)
    },false)
    function move(e){
        let eve = e||window.event,
            curTop =  $(this).position().top,
            //需要用到当前的top值去判断还能否移动
            curY =  eve.touches[0].pageY||e.touches[0].clientY||eve.touches[0].screenY;
            moveLen  = initialY -curY;
        if(-curTop > lastTop -5 && moveLen > 0){
            $(this).css({top: -lastTop })   
        }else if(-curTop < 5 && moveLen < 0){
            $(this).css({top:0})
        }else{
            $(this).css({top:-moveLen + oTop})
            curIndex = getNowIndex(-curTop);
            if(curIndex != lastIndex){
                getChange(curIndex)
            }
        }
    }
},false)