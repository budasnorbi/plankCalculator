const getPlankCombination = (arr) => {
    arr = arr.sort( (a,b) => b - a);

    const finalResult = []; 
    for(let i = 0; i < arr.length; i++){
        finalResult.push({ restWidth:6000, planks:[] });
    }
   
    for(let i = 0; i < arr.length; i++){
        
        for(let k = 0; k < finalResult.length; k++){
           
            if( finalResult[k].restWidth != 0){
               
                if( finalResult[k].restWidth - arr[i] === 0){

                    finalResult[k].planks.push(arr[i]);
                    finalResult[k].restWidth = 0;
                    break;
                } else if( finalResult[k].restWidth - arr[i] > 0){

                    finalResult[k].planks.push(arr[i]);
                    finalResult[k].restWidth = finalResult[k].restWidth - arr[i];
                    break ;    
                } 
                
            }

        }
        
    }
    console.log(finalResult)
    return finalResult.filter( el => el.planks.length != 0);
}

export default getPlankCombination;


