
//Lenght max permited for the password
var minLength = 9;
var maxLength = 9;
$(document).ready(function(){
    $('.input2').on('keydown keyup change', function(){
        var char = $(this).val();
        var charLength = $(this).val().length;
        if(charLength < minLength){
            $('.pswd_info').text('Length is short, minimum '+minLength+' required.');
        }else if(charLength > maxLength){
            $('.pswd_info').text('Length is not valid, maximum '+maxLength+' allowed.');
            $(this).val(char.substring(0, maxLength));
        }else{
            $('.pswd_info').text('Length is valid');
        }
    });
});




//Order price calculator

function calculateTotal(){
    
    //define variables
    var total = 0
    var food = document.order.food.value;
    var quantity = document.order.quantity.value;
    var discount = document.order.discount.value;
    
    if(document.getElementsByClassName("food")[0].value == "Unselected"){
        alert("Please select a food size");
    }else if(document.getElementsByClassName("food")[0].value == "Large"){
        total = total + 7.00;
    }else if(document.getElementsByClassName("food")[0].value == "Extralarge"){
        total = total + 9.00;
    }else if(document.getElementsByClassName("food")[0].value == "Supersize"){
        total = total + 17.50;
    }

    if(quantity <= 0){
        alert("Amount of food must to be 1 or more!");  
        return;

    }else if(isNaN(quantity) == true){
        alert("Amount of food must be a number");
        return;
        
    }else if(quantity > 0){
        total = (total * quantity);

        //discount calculation
    }if(discount == 'MexTexGood'){
            alert('Congrats!!! You got 10% off');
        total = total - (10/100 * total);
        
    }
    
    var finalTotal = document.getElementById('total');
    finalTotal.value = total;
    
}
