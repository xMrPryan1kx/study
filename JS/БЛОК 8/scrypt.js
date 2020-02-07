function filterByType(firstArgs,...arr) {
    return type = arr.filter( function(item){
        return typeof item == firstArgs
    });
    
}