function discountCalculator(purchasedAmount){

    let total=purchasedAmount;
    let discount=0;

    if(total<50){
        discount=0;
    }else if(total>=50 && total<100){
        discount=total*(5/100);
    }else if(total>=100 && total<200){
        discount=total*(10/100);
    }else if(total>=200 ){
        discount=total*(15/100);
    }else{
        discount=0;
    }

    console.log("Total Purchased Amount= "+total);
    console.log("Discount Amount= "+discount);

    let result=(total-discount)

    console.log("Discounted total Amount= "+result);
}

discountCalculator(125);
