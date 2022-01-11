/*
*****
 ****
  ***
   **
    *
*/
let linesToPrint = 5;
for(let index=0;index<linesToPrint;index++){
    let stringToDisplay = "";
    let spaceLength =  index;
    while(spaceLength>0){
        stringToDisplay+= ' ';
        spaceLength--;
    }
    while(stringToDisplay.length <5){
        stringToDisplay+='*';
    }
    console.log(stringToDisplay);
}
