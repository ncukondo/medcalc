export function round(number, precision) {
    var shift = function (number, precision, reverseShift) {
        if (reverseShift) {
        precision = -precision;
        }  
        var numArray = ("" + number).split("e");
        return +(numArray[0] + "e" + (numArray[1] ? (+numArray[1] + precision) : precision));
    };
    return shift(Math.round(shift(number, precision, false)), precision, true);
}

export function oddsToPersent(odds){
    return odds / (odds+1)*100;
}

export function percentToOdds(percent){
    return percent / (100-percent);
}