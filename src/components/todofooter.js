import React from 'react';
import FooterLink from './filterlink.js';

export default function Todofooter({activeFilter,filterTodo}){

    return(
     <div className="footer">
            <FooterLink activefilter={activeFilter} onClickFilter={filterTodo} actiontype="ALL">ALL</FooterLink>
            {' '}
            <FooterLink activefilter={activeFilter} onClickFilter={filterTodo} actiontype="TODO">TO DO</FooterLink>
             {' '}
            <FooterLink activefilter={activeFilter} onClickFilter={filterTodo} actiontype="COMPLETED">COMPLETED</FooterLink>
          </div>
          )
}