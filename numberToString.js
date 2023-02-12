function numberToString(number){
    switch(number){
        case 1:
            return "un";
        case 2:
            return "deux";
        case 3:
            return "trois";
        case 4: 
            return "quatre";
        case 5:
            return "cinq";
        case 6:
            return "six";
        case 7:
            return "sept";
        case 8:
            return "huit";
        case 9:
            return "neuf";
        case 10:
            return "dix";
        default:
            return number.toString();
         
        
    }
}
function arrayToString(array){
    console.log(array.map(numberToString));
}
arrayToString([1,2,3,4,5,6,7,8,9,10]);
