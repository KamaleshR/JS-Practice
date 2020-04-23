/*I havent added conditional to check for empty fields of shipping details,
because already in html required and pattern attributes are being used,So no need to Double check since not asked for.*/
function billingFunction(){
    if(document.getElementById("same").checked){
        document.getElementById("billingName").value = document.getElementById("shippingName").value;
        document.getElementById("billingZip").value = document.getElementById("shippingZip").value;
    }
    else{
        document.getElementById("billingName").value = "";
        document.getElementById("billingZip").value = "";
    }    
}