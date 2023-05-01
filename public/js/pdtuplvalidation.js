const Validate = (event) => {


    //input variables
    let productName = document.getElementById("productname");
    let wardName = document.getElementById("wardname");
    let uniqueID = document.getElementById("uniqueid");
    let date = document.getElementById("date");
    let unitPrice = document.getElementById("unit-price");
    let quantity = document.getElementById("quantity");
    let paymentMethod = document.getElementById("payment-method");
    let directions = document.getElementById("directions");
    let deliveryMethod = document.getElementById("delivery-method");
    let productType = document.getElementById("product-type");
    let productImage = document.getElementById("productImage");


    //input error variables
    let pdnameError = document.getElementById("pdnameErr");
    let wardNameError = document.getElementById("wdnameErr");
    let uniqueIDError = document.getElementById("uniqueidErr");
    let dateError = document.getElementById("dateErr");
    let unitPriceError = document.getElementById("unitpxErr");
    let QtyError = document.getElementById("QtyErr");
    let paymethodError = document.getElementById("paymethodErr");
    let directionsError = document.getElementById("directionsErr");
    let delmethodError = document.getElementById("delmethodErr");
    let productTypeError = document.getElementById("producttypeErr");
    let productImageError = document.getElementById("productimageErr");


    //validating product name
    if (productName.value == "") {
        productName.style.border = "1px solid red";
        pdnameError.innerHTML = "This field is required";
        pdnameError.style = "color: red; font-size:11px;";
        return false
    }
    else {
        productName.style.border = "1px solid green";
        pdnameError.innerHTML = "";
    }

    //validating ward name
    if (wardName.value == "") {
        wardName.style.border = "1px solid red";
        wardNameError.innerHTML = "This field is required";;
        wardNameError.style = "color: red; font-size:11px;";
        return false
    }
    else {
        wardName.style.border = "1px solid green";
        wardNameError.innerHTML = "";

    }

    //validating unique ID   
    const ufpregex = /^UGUF-[0-9]{3}$/;

    if (uniqueID.value === "") {
        uniqueID.style.border = "1px solid red";
        uniqueIDError.textContent = "Please fill in the unique ID";
        uniqueIDError.style = "color: red; font-size:11px;";
        return false
    }
    else if (!uniqueID.value.match(ufpregex)) {
        uniqueID.style.border = "1px solid red";
        uniqueIDError.textContent = "Please fill in correct uf unique ID";
        uniqueIDError.style = "color: red; font-size:11px;";
        return false
    }
    else {
        uniqueID.style.border = "1px solid green";
        uniqueIDError.textContent = "";

    }

    //validating date 
    if (date.value == "") {
        date.style.border = "1px solid red";
        dateError.innerHTML = "Please fill in the date.";
        dateError.style = "color: red; font-size:11px;";
        return false
    }
    else {
        date.style.border = "1px solid green";
        dateError.innerHTML = " ";

    }

    //validating unit price

    if (unitPrice.value == "") {
        unitPrice.style.border = "1px solid red";
        unitPriceError.innerHTML = "Please fill in your unit price";
        unitPriceError.style = "color: red; font-size:11px;";
        return false
    }
    else {
        unitPrice.style.border = "1px solid green";
        unitPriceError.innerHTML = "";

    }

    //validating quantity
    if (quantity.value == "") {
        quantity.style.border = "1px solid red";
        QtyError.innerHTML = "Please fill in the quantity";
        QtyError.style = "color: red; font-size:11px;";
        return false
    }
    else {
        quantity.style.border = "1px solid green";
        QtyError.innerHTML = "";

    }


    //validating mode of payment
    if (paymentMethod.value == "") {
        paymentMethod.style.border = "1px solid red";
        paymethodError.innerHTML = "Please fill in the mode of payment";
        paymethodError.style = "color: red; font-size:11px;";
        return false
    }
    else {
        paymentMethod.style.border = "1px solid green";
        paymethodError.innerHTML = "";

    }//validating directions
    if (directions.value == "") {
        directions.style.border = "1px solid red";
        directionsError.innerHTML = "Please fill in the directions";
        directionsError.style = "color: red; font-size:11px;";
        return false
    }
    else {
        directions.style.border = "1px solid green";
        directionsError.innerHTML = "";

    }

    //validating mode of payment
    if (deliveryMethod.value == "") {
        deliveryMethod.style.border = "1px solid red";
        delmethodError.innerHTML = "Please fill in the mode of payment";
        delmethodError.style = "color: red; font-size:11px;";
        return false
    }
    else {
        deliveryMethod.style.border = "1px solid green";
        delmethodError.innerHTML = "";
    }


    //validating product Type
    if (productType.value == "") {
        productType.style.border = "1px solid red";
        productTypeError.innerHTML = "Please fill in the product type";
        productTypeError.style = "color: red; font-size:11px;";
        return false
    }
    else {
        productType.style.border = "1px solid green";
        productTypeError.innerHTML = "";

    }


    //validating product image
    if (productImage.value == "") {
        productImage.style.border = "1px solid red";
        productImageError.innerHTML = "Please upload the product Image";
        productImageError.style = "color: red; font-size:11px;";
        return false
    }
    else {
        productImage.style.border = "1px solid green";
        productImageError.innerHTML = "";
    }
}