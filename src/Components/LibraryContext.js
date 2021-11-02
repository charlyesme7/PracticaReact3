import React, {createContext, useState} from 'react'
import img1 from '../img/img1.png';
import img2 from '../img/img2.png';
import img3 from '../img/img3.png';
import img4 from '../img/img4.png';

export const LibraryContext = createContext();

const LibraryProvider = (props)=>{

  const [wishlist,setwishlist]= useState([]);

  const [catalogue,setcatalogue]= useState([
    {
      code:1,
      title:"Programación",
      img:img1,
      lenguage:'ESP', 
      disabled:false},
    {
      code:2,
      title:"Aprende Python", 
      img:img2,
      lenguage:'ESP',
      disabled:false},     
    {
      code:3,
      title:"Precálculo", 
      img:img3,
      lenguage:'ESP',
      disabled:false},
    {
      code:4,
      title:"Ingenieria De Software", 
      img:img4,
      lenguage:'ESP',
      disabled:false}
  ]); 

  const  add=(book)=>{
      let temp= catalogue;
      let index= temp.findIndex((element)=>element.code===book.code);
      temp[index].disabled=true;
      let temp2 =[...wishlist,book];
      temp2= temp2.sort((a,b)=>a.code>b.code)
      setwishlist(temp2);
      setcatalogue(temp);

    }
   
    
  const  erase=(book)=>{
      let temp= catalogue;    
      let index= temp.findIndex((element)=>element.code===book.code);
      temp[index].disabled=false;
      let tempW= wishlist.filter(c=>c.code!==book.code)
      setwishlist(tempW);
      setcatalogue(temp);
    }  
    return(
        <LibraryContext.Provider
            value={{
                catalogue,
                wishlist,
                erase,
                add
            }}>
                {props.children}

        </LibraryContext.Provider>
    );
}

export default LibraryProvider;