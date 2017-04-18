window.onload = function () {    
    var foodBuy = $(".food-buy"); // +
    var countDish = $(".count-dish"); // 显示单个商品购买数量
    var foodReturn = $(".food-return"); // -
    var buyMoney = $(".buy-money");
    var buyLength = foodBuy.length;
    var num = 0; //商品购买总量
    var totalMoney = 0; //商品购买总金额
    var flag = true; //重复点击购物车购物袋显示与不显示
    for (var i = 0; i < buyLength; i++) {
        (function(j) {
            //利用闭包形成封闭作用域，每个+号元素对应独立点击作用域
            var oClick = 0; //每个商品购买数量
            var lock = 1; //解决点击+号商品在购物车重复出现
            var html = '';
            // var count = 1; //记录点击次数
            var singleMoney = 0; //单个商品价格
            foodBuy.eq(j).on("tap", myFlag(function() {
                oClick++;
                num++;
                // - 数量 + 
                singleMoney = parseInt(buyMoney.eq(j).html().substr(1));
                totalMoney += singleMoney;
                countDish.eq(j).css("display", "block").html(oClick);
                foodReturn.eq(j).css("display", "block");

                //购物车图标背景色
                $(".icon-wrap").css("backgroundColor", "#1ad2c0");
                $(".icon-num").css("display", "block").html(num);

                //总金额
                $(".footer-money p").css("display", "block").html("￥" + totalMoney);
                $(".footer-money span").addClass("initial-span").html("免配送费");

                //商品结算
                if (totalMoney >= 10) {
                    $(".footer-gap").css("background-color", "#FFC107");
                    $(".footer-gap span").html("去结算");
                } else if (totalMoney < 10 && totalMoney > 0) {
                    $(".footer-gap span").html("还差" + (10 - totalMoney) + "元");
                }

                //点击商品之后在购物袋中添加对应商品信息
                if (lock) {
                    html = '<div class="gap-content ectype' + j + '">' +
                        '<div class="food-name">' + $(".food-name").eq(j).html() + '</div>' +
                        '<div class="food-num">' +
                        '<span class="buy-money single' + j + '">' + $(".buy-money").eq(j).html() + '</span>' +
                        '<div class="buy-return">' +
                        '<i class="food-buy add' + j + '"></i>' +
                        '<span class="count-dish const' + j + '">1</span>' +
                        '<i class="food-return minus' + j + '"></i>' +
                        '</div>' +
                        '</div>' +
                        '</div>';
                    $(".gap-head").after(html);
                    lock = 0;
                    //元素在onload事件之后添加，需手动添加事件
                    $(".add" + j + "").on("tap", myFlag(function() {
                        num++;
                        oClick++;
                        totalMoney += singleMoney;
                        $(".single" + j + "").html('￥' + singleMoney * oClick);
                        $(".count-dish").eq(j).html(oClick);
                        $(".const" + j + "").html(oClick);
                        $(".footer-money p").css("display", "block").html("￥" + totalMoney);
                        $(".icon-num").html(num);
                        if (totalMoney >= 10) {
                            $(".footer-gap").css("background-color", "#FFC107");
                            $(".footer-gap span").html("去结算");
                        } else if (totalMoney < 10 && totalMoney > 0) {
                            $(".footer-gap span").html("还差" + (10 - totalMoney) + "元");
                        }

                    }))
                    $(".minus" + j + "").on("tap", myFlag(function() {
                        num--;
                        oClick--;
                        totalMoney -= singleMoney;
                        $(".single" + j + "").html('￥' + singleMoney * oClick);
                        $(".count-dish").eq(j).html(oClick);
                        $(".const" + j + "").html(oClick);
                        $(".footer-money p").css("display", "block").html("￥" + totalMoney);
                        $(".icon-num").html(num);
                        if (!oClick) {
                            $(".ectype" + j + "").remove();
                            show([countDish.eq(j), foodReturn.eq(j)], false)
                        }
                        if (totalMoney < 10 && totalMoney > 0) {
                            $(".footer-gap span").html("还差" + (10 - totalMoney) + "元");
                            $(".footer-gap").css("background-color", "#928686");
                        } else if (totalMoney === 0) {
                            show([$(".shop-gap"), $(".icon-num"), $(".footer-money p")], false);
                            $(".icon-wrap").css("backgroundColor", "#aaa");
                            $(".footer-gap").css("background-color", "#928686");
                            $(".footer-gap span").html("10元起送");
                            $(".footer-money span").removeClass("initial-span").html("购物车空空入也~");
                        }
                    }))

                }
                $(".single" + j + "").html('￥' + singleMoney * oClick);
                $(".const" + j + "").html(oClick);

                //alert只有点击确认 ， 点击清空购物车区域，直接清空一切
                $(".gap-right").on("tap", myFlag(function() {
                        // alert("是否清空购物车内所有商品？");
                        num = 0;
                        totalMoney = 0;
                        flag = true;
                        oClick = 0;
                        lock = 1;
                        $(".ectype" + j + "").remove();
                        show([$(".food-return").eq(j), countDish.eq(j), $(".shop-gap"), $(".icon-num"), $(".footer-money p")], false);
                        $(".icon-wrap").css("backgroundColor", "#aaa");
                        $(".footer-gap").css("background-color", "#928686");
                        $(".footer-gap span").html("10元起送");
                        $(".footer-money span").removeClass("initial-span").html("购物车空空入也~");
                    }))
                    // 函数  参数 =》[]  chaunyuansu   shuzu  houjia  flag  判断是否显示

            }));
            foodReturn.eq(j).on("tap", myFlag(function() {
                oClick--;
                num--;
                totalMoney -= parseInt(buyMoney.eq(j).html().substr(1));
                countDish.eq(j).html(oClick);
                $(".icon-num").html(num);
                $(".footer-money p").html("￥" + totalMoney);
                if (oClick === 0) {
                    show([$(this), countDish.eq(j)], false)
                    $(".icon-wrap").css("backgroundColor", "#aaa");
                }

                if (totalMoney < 10 && totalMoney > 0) {
                    $(".footer-gap span").html("还差" + (10 - totalMoney) + "元");
                    $(".footer-gap").css("background-color", "#928686");
                } else if (totalMoney === 0) {
                    show([$(".shop-gap"), $(".icon-num"), $(".footer-money p")], false)
                    $(".footer-gap").css("background-color", "#928686");
                    $(".footer-gap span").html("10元起送");
                    $(".footer-money span").removeClass("initial-span").html("购物车空空入也~");
                }
            }))
        }(i))
    }
    //购物车点击购物袋显示与否
    $(".footer-goods").on("tap",myFlag(function() {
        console.log("00")
        if (flag === true) {
            if (totalMoney > 0) {
                $(".shop-gap").css("display", "block");
            }
        } else if (flag === false) {
            $(".shop-gap").css("display", "none");
        }
        flag = !flag;
    }))

    //阴影部分点击事件
    $(".gap-shadow").on("tap", myFlag(function() {
        $(".shop-gap").css("display", "none");
    }))


}

//数组中保存需要操作的元素，_flag == true 显示
function show(arr, _flag) {
    var myArr = arr || [];
    if (_flag) {
        myArr.forEach(function(ele, index) {
            ele.css("display", "block");
        })
    } else {
        myArr.forEach(function(ele, index) {
            ele.css("display", "none");
        })
    }
}

function myFlag (handle) {
    var oflag = true;
    return function () {
        if (oflag) {
            handle()
        }
        oflag = !oflag;
    }
}