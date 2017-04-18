function loadImg(src,tar){
    var oWidth = document.innerWidth||document.body.clientWidth||document.documentElement.clientWidth;
    var imgSrc = src,
        imgObj = new Image();
    imgObj.width = oWidth;
    imgObj.height = 100;
    imgObj.onload = function (){
      $(tar).append(this);
    }
    imgObj.src = imgSrc;
}

function createLi(){
    var arr = [];
    var str = "./src/img/0";
    for(let i = 1;i < 7;i++){
        let $li = $('<li></li>')[0];
        arr.push($li)
        if( i== 6){
            loadImg(str + 1 + '.jpg',$li)
        }else{
            loadImg(str + i + '.jpg',$li)
        }
    }
    return arr;
}
function appendLi(){
    $('.stage').append(createLi());
    $('.mid-content1').append("<li></li>\
                            <li></li>\
                            <li></li>\
                            <li></li>\
                            <li></li>\
                            <li></li>\
                            <li></li>\
                            <li></li>")
    $('.mid-content2').append("<li></li>\
                            <li></li>\
                            <li></li>\
                            <li></li>\
                            <li></li>\
                            <li></li>\
                            <li></li>\
                            <li></li>")
}

//动态创建dom不会产生刷新页面出现li 小点的bug

appendLi()