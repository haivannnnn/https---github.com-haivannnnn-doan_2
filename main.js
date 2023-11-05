$(document).ready(function(){
    $(".btn-addToCart").click(function(){
        var cartAmount = Number(sessionStorage.getItem("cartAmount"));
        //alert(cartAmount);
        if(cartAmount != null)
            cartAmount += 1;
        else
            cartAmount = 1;						
        $("#cart").text("Giỏ ("+cartAmount+")");					
        sessionStorage.setItem("cartAmount",cartAmount);
        
        
        var pImg = $(this).parent().find(".item-photo").attr("src");
        var pName = $(this).parent().find(".product-name").text();
        var pPrice = $(this).parent().find(".new-price").text();
        var product = {
            "img":pImg,
            "name":pName,
            "price":pPrice
        };
        
        //alert(pImg +" "+pName+" "+pPrice);
        var cart = sessionStorage.getItem("cart");
        var cartProducts = "";
        if(cart!=null){
            cartProducts = cart +"," + JSON.stringify(product);						
        } else
            cartProducts = JSON.stringify(product);
        sessionStorage.setItem("cart",cartProducts);	
        // alert(cartProducts);					
    });
    var item = $(".item-image");
        var x = item.siblings().text();
        // alert(x);
        // $("#menu li:first").addClass("actived")
        $(".item a").hover(function(){
            
            $(this).addClass("actived");
        }, function(){
            $(this).removeClass("actived");
        });
        var count=0;
        $(".item-image input").click(function(){
            count += 1;
            $("#cart").text("Giỏ ("+count+")");
        });
        
        $(".item-image input").hide();
        
        $(".item-image").hover(function(){
            $(this).children().last().fadeToggle();
        });
        
        $(".cate").click(function(){
            $(this).next().slideToggle();
    });
});