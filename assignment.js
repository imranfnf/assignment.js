


function kilometerToMeter(kilometer) {

    var meter = kilometer / 1000;
    var meter = Math.abs(meter);
    return meter;
}

var meter = kilometerToMeter(150);
console.log("Meter =", meter);



// /////////////////////////////




function hotelCost(cost) {


    var spent = 0;

    if (cost <= 10) {
        var spent = cost * 100;
    }
    else if (cost <= 20) {
        var firstPart = 10 * 100;
        var remaining = cost - 10;
        var secontPart = remaining * 80;
        total = firstPart + secontPart;

    } else {

        var firstPart = 10 * 100;
        var secontPart = 20 * 80;
        var remaining = cost - 20;
        var thirdPart = remaining * 50;
        total = firstPart + secontPart + thirdPart;
    }
    return total;
}

var result = hotelCost(71);
console.log(result);


// /////////////////////



function budgetCalculator(watch, phone, laptop) {

    var watch = 50;
    var phone = 100;
    var laptop = 500;
    var total = watch + phone + laptop;
    var result = total;

    return result;
}

var output = budgetCalculator()
console.log(output);




//////////////////


var names = ["kalam", "salam", "Jamal", "Abdul", "Mohammad"];


var largestName = names[0];
function megaFriend() {

    for (var i = 0; i < names.length; i++) {
        var element = names[i];
        if (element.length > largestName.length)
            largestName = element;
    }
    return largestName;

}

var result = megaFriend(names);
console.log(result);