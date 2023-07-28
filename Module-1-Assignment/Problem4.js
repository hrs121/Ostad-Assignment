function calculateGrade(input){
    
    let result;

    switch(true){
        case (input<60 && input>=0):
            result='F'
            break;

        case (input>=60 && input<=69):
            result='D'
            break; 
        
        case (input>=70 && input<=79):
            result='C'
            break;
        case (input>=80 && input<=89):
            result='B'
            break;
        
        case (input>=90 && input<=100):
        result='A'
        break;

        default:
            result='Invalid input'
        
    }

    return result;
}


console.log(calculateGrade(67))