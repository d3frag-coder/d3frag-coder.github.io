function calc() {
    var type_site = document.getElementById("type_site");
    var design = document.getElementById("design");
    var adaptability = document.getElementById("adaptability");
    var result = document.getElementById("result");
    var resultdeadline = document.getElementById("resultdeadline");
    
    let type_site_price = 0;
    let design_price = 0;
    let adaptability_price = 0;
    let price = 0;
    let deadline = 0;
    
    type_site_price += Number.parseInt(type_site.options[type_site.selectedIndex].value);
    design_price += Number.parseInt(design.options[design.selectedIndex].value);
    adaptability_price += Number.parseInt(adaptability.options[adaptability.selectedIndex].value);
    
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