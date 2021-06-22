function calc() {
    var type_site = document.getElementById("type_site");
    var design = document.getElementById("design");
    var adaptability = document.getElementById("adaptability");
    var result = document.getElementById("result");
    var resultdeadline = document.getElementById("resultdeadline");
    
    var type_site_price = 0;
    var design_price = 0;
    var adaptability_price = 0
    var price = 0;
    var deadline = 0;
    
    type_site_price += parseInt(type_site.options[type_site.selectedIndex].value);
    design_price += parseInt(design.options[design.selectedIndex].value);
    adaptability_price += parseInt(adaptability.options[adaptability.selectedIndex].value);
    
    if(type_site_price == "25000") {
        deadline += 5;
    } else if(type_site_price == "175000") {
        deadline += 10;
    } else {
        deadline += 18;
    }
    
    if(design_price == "5000") {
        deadline += 5;
    } else if(design_price == "15000") {
        deadline += 8;
    } else {
        deadline += 0;
    }
    
    if(adaptability_price == "10000") {
        deadline += 1;
    } else {
        deadline += 3;
    }
    
    price = type_site_price + design_price + adaptability_price;
        
    result.innerHTML = price;
    resultdeadline.innerHTML = deadline;
}