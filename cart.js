$(document).ready(function(){
    var cart = sessionStorage.getItem("cart");
    cartProducts = "["+cart+"]";
    products = JSON.parse(cartProducts);
    var amount = products.length;
    //alert(amount);
    //$("#cart-amount").text("Giỏ hàng ("+amount+")");
    
    var table = `
    <table cellpadding="0" cellspacing="0" border="1">
            <tr>
                <th>STT</th>
                <th>Ảnh</th>
                <th>Tên sản phẩm</th>
                <th>Đơn giá</th>
                <th>Số lượng</th>
                <th>Thành tiền</th>
                <th>Xóa</th>
            </tr>
    `;
    // alert(table);
    for(var i=0; i<amount; i++){
        var row = `
            <tr>
                <td>${i+1}</td>
                <td><img style="width: 60px" src="${products[i].img}" ></td>
                <td>${products[i].name}</td>
                <td>${products[i].price}</td>
                <td>
                    <input class="btn-minus" type="button" value="-" />
                    <input class="txt-amount" type="text" value="1" />
                    <input class="btn-plus" type="button" value="+" />
                </td>
                <td>${products[i].price}</td>
                <td>
                    <img src="delete.jpg" >
                </td>
            </tr>
        `;
        
        table += row;
    }
    
    table += `</table>`;
    
    $("#content").html(table); 		

});