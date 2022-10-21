const initialValue =   document.querySelector("#initial-value");
const quantityValue =   document.querySelector("#quantity-value");
const currentValue =   document.querySelector("#current-value");
const  btnResponse= document.querySelector("#btn-response");
const  outputEl= document.querySelector("#output-box");




function multiOfInitialAndQuantity(initial,quantity,current){
    
     if(initial > current){
        var loss = (initial-current) * quantity;
        var lossPercentage = (loss /initial) * 100; 
        showOutput(`sad to know that your loss is ${loss} and percentage is ${Math.abs(lossPercentage)} %` );
     }
     else if(current > initial){
         var profit = (current - initial) * quantity;
         var profitPercentage = (profit / initial) * 100;
         showOutput(`Good to know that your profit is ${profit} and percentage is ${Math.abs(profitPercentage)} %`)
         
     }else{
         showOutput(`😑 😑 😑 Enter the value in boxes or your grandma will serve all your cookies 😑 😑 😑`);
     }
    
}



function showOutput(message){
    
    outputEl.innerHTML = message;

}



// function multiOfCurrentAndQuantity(quantityValue,currentValue){
//     const Current =   currentValue.value ;
//     const Quantity =  quantityValue.value;
//      multiOfCq = Current * Quantity;
    
   
// }


// function subOriginatedValueAftermulti(){
//     let subtractvalues = multiOfInitialAndQuantity.value - multiOfCurrentAndQuantity.value
//     console.log(subtractvalues)

// }



 function submitAllValues(){
    
var ip = Number(initialValue.value);
var qp =Number(quantityValue.value);
var cp =Number( currentValue.value);
multiOfInitialAndQuantity(ip,qp,cp)
 }


btnResponse.addEventListener("click", submitAllValues );


