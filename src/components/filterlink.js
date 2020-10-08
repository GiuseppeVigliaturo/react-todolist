import React from 'react';
import PropTypes from 'prop-types';

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
filterlink.propTypes = {
    props: PropTypes.shape({
        activeFilter: PropTypes.string.isRequired,
        onClickFilter: PropTypes.func.isRequired,
        actionType: PropTypes.string.isRequired,
        children: PropTypes.element.isRequired
    })
}

export default filterlink;