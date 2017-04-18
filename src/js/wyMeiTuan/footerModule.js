var React = require("react"),
    ReactDom = require("react-dom");

var ShoppingIcon = React.createClass({
    render: function () {
        return(
            <div className="footer-icon">
                <div className="icon-wrap">
                    <span className="icon-num"></span> 
                    <i className="fa fa-cart-plus"></i>
                </div>
            </div>
        )
    }
})

var TospendMoney = React.createClass({
    render: function () {
        return(
            <div className="footer-money">
                <p></p>
                <span className="empty">购物车空空如也~</span>
            </div>
        )
    }
})

var AccordShopCart =React.createClass({
    render: function () {
        return(
            <div className="footer-goods">
                <ShoppingIcon></ShoppingIcon>
                <TospendMoney></TospendMoney>
            </div>
        )
    }
})

var SettleAccounts = React.createClass({
    render: function () {
        return(
            <div className="footer-gap">
                <span>10元起送</span>
            </div>
        )
    }
})

var Footer = React.createClass({
    render: function () {
        return (
            <footer>
                <AccordShopCart></AccordShopCart>
                <SettleAccounts></SettleAccounts>
            </footer>
        )
    }
})
var GapShadow = React.createClass({
    render: function () {
        return(
            <div className="gap-shadow">
                <div className="perch"></div>
            </div>   
        )
    }
})
var GapLeft = React.createClass({
    render: function () {
        return(
            <div className="gap-left">
                <i className="fa fa-circle"></i>
                <span className="gap-num">1号口袋</span>
            </div>
        )
    }
})
var GapRight = React.createClass({
    render: function () {
        return(
            <div className="gap-right">
                <i className="fa fa-trash"></i>
                <span className="gap-clear">清空购物车</span>
            </div>
        )
    }
})
var GapHead = React.createClass({
    render: function () {
        return(
            <div className="gap">
                <div className="gap-head">
                    <GapLeft></GapLeft>
                    <GapRight></GapRight>
                </div>
            </div>
        )
    }
})    
var ShopGap = React.createClass({
    render: function () {
        return(
            <div className="shop-gap">
                <GapShadow></GapShadow>
                <GapHead></GapHead>
            </div>
        )
    }
})

var ShoppingCart = React.createClass({
    render: function () {
        return(
            <div>
                <ShopGap></ShopGap> 
                <Footer></Footer>  
            </div>
        )
    }
})

ReactDom.render(
    <ShoppingCart></ShoppingCart>,
    document.getElementById('footer-wrap')
)
  