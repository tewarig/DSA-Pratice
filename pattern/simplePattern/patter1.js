/*
*
**
***
****
***** 
*/
var pattenLen = 5;
for(let index= 1; index<=pattenLen ; index++){
    let astricToPrint = index;
    let stringToPrint = "";
    while(astricToPrint>0){
        stringToPrint += "*";
        astricToPrint--;
    }
    
    console.log(stringToPrint);
}