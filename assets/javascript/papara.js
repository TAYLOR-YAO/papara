
var t_shirt = $(".t-shirt");
var long_sleeves = $(".long-sleeves");
var tanTops = $(".tankTop");
var hoobies = $(".hoobie")
var long_sleevesValue = long_sleeves.val();
var t_shirtValue = t_shirt.val();
var prices; 
const addToCart = [];
var order = [];
var itemName;

// function cartValue(a){
//     var sum = a.reduce((acc, val) => acc + val, 0);
//     console.log(sum);
//     $(".price").append(sum + " $");    

// }


$(document).ready(function(){
    $(".quantity").text(addToCart.length +" Items")
   
    
    t_shirt.on("click", function(){
        console.log(this.value)
        addToCart.push(this.value);
        console.log(addToCart);
        $(".quantity").text(addToCart.length +" Items")

        // cartValue(addToCart);

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
        $(".quantity").text(addToCart.length +" Items");
        // cartValue(addToCart);
        
       
        if(this.value = 30){
            itemName = "Long sleeve";
            order.push(itemName)
            console.log("Order Items: " + order)
            console.log(itemName)
            
        }
    
    });


    hoobies.on("click", function(){
        console.log(this.value)
        addToCart.push(this.value);
        console.log(addToCart);
        $(".quantity").text(addToCart.length +" Items");
        

        if(this.value = 40){
            itemName = "Hoobie";
            order.push(itemName)
            console.log("Order Items: " + order)            
            console.log(itemName)
        }
        
    });

    tanTops.on("click", function(){
        console.log(this.value)
        addToCart.push(this.value);
        console.log(addToCart);
        $(".quantity").text(addToCart.length +" Items");
        if(this.value = 20){
            itemName = "Tank Top";
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
    
