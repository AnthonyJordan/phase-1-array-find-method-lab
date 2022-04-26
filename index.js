// code your solution here


function superbowlWin(array){
    let item = array.find(item => item.result === "W" )
    if (item === undefined){
        return item;
    } else
        return item.year;
    
}