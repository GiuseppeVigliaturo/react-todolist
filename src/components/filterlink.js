import React from 'react';

const filterlink = ({activefilter, onClickFilter, actiontype, children})=>{

    if (activefilter === actiontype) {
        return children;
    }
    return(
        
            <a href='#'
            onClick = {(evt)=> {
                evt.preventDefault(); 
                onClickFilter(actiontype);
           }}>
            
            {children}
        </a>
       
        
    );
};

export default filterlink;