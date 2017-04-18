var  clickRestaurant =  require("./clickRestaurant.js");
function shopAjax(src){
    var dataUrl = src;
    function success(data) {
        var alldata = JSON.parse(data);
        var length = alldata.length;
        rendershop(length,alldata);
    }
    function getData(url, cb) {
        $j.ajax({
            url: url,
            type: 'GET',
            success: cb, 
            async: true,
            error: function () {

                console.log('deal wrong');
            }
        });
    }

    getData(dataUrl, success);
    function rendershop(len,alldata) {
        var arr = [];
        for(var i = 0;i < len; i++) {
            arr.push('<div class=' + 'shop-box' + '>\
                                        <img src=' + alldata[i]["shopimg"] + '>\
                                        <div>\
                                            <h1 class=' + 'shop-na'  +  '>' + alldata[i]["shopname"] + '</h1>\
                                            <p class=' + 'shop-sold' + '>' + alldata[i]["shopsold"] + '</p>\
                                            <p class=' + 'shop-line-item' + '>' + alldata[i]["shopitem"] + '</p>\
                                        </div>\
                                        <div class=' + 'shop-time' + '>\
                                            <p>' + alldata[i]["shoptime"] + '</p>\
                                        </div>\
                                    </div>');
        }
        if(i == len){
            $j('.content').append(arr);//jquery 可以添加一个数组
            clickRestaurant(alldata);
            //要在这里判断能否使用这个函数，必须要所有div组件都加在内容区；
        }
    }
}



shopAjax("./src/data/data.txt");
