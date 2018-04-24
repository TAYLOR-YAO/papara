
var t_shirt = $(".t-shirt");
var long_sleeves = $(".long-sleeves")
var long_sleevesValue = long_sleeves.val();
var t_shirtValue = t_shirt.val();
var prices; 
var addToCart = [];
var order = [];
var itemName;
var sum = addToCart.reduce((acc, val) => acc + val, 0);






$(document).ready(function(){
    $(".quantity").text(addToCart.length +" Items")
    $(".price").text(sum + " $");
    
    
    
    t_shirt.on("click", function(){
        console.log(this.value)
        addToCart.push(this.value);
        console.log(addToCart);
        $(".quantity").text(addToCart.length +" Items")
        
        sum = addToCart.reduce((acc, val) => acc + val, 0);
        $(".price").text(sum + " $");
        console.log("Sum: " + sum);
        

        if(this.value = 25){
            itemName = "T-shirt";
            order.push(itemName)
            console.log("Order Items: " + order)            
            console.log(itemName)
        }
        
    });

    long_sleeves.on("click", function(){
        console.log(this.value)
        addToCart.push(this.value);
        console.log(addToCart);
        $(".quantity").text(addToCart.length +" Items")
        
        sum = addToCart.reduce((acc, val) => acc + val, 0);
        $(".price").text(sum + " $");
        console.log("Sum: " + sum);
        

        if(this.value = 45){
            itemName = "Long sleeve";
            order.push(itemName)
            console.log("Order Items: " + order)
            console.log(itemName)
            
        }
    
    });
    
    
    $("#payement").on("click", function(){
        console.log("Hide!")
        $(".shoppingItems").hide();
        $(".main-page").append(
            "<div id= 'pay'> <p> Select Your Payement method</p> </div>"
        );


    });








});
    
