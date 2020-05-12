import React from 'react';

const Word = ({thing}) =>{
    
    if(isNaN(thing)===true){
        return(
            <p>The word is: {thing}</p>
            )
        }
        else{
            return(
            <p>The number is: {thing}</p>
        )
    }
}

export default Word;