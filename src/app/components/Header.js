import React from 'react'
import Link from 'next/link'
import { useState, useEffect,} from 'react'

const Header = () => {
     const [nav, setNav]=useState(false);
     const [color, setColor]= useState('transparent');
     const [textColor, setTextcolor]= useState('white');
     const handleNav=() =>{
        setNav(!nav);
     };
     useEffect(() =>{
        const changeColor =()=>{
            if(window.scrollY>=90){
                setColor('#ffffff');
                setTextcolor('#000000');
            }else{
                setColor('transpatent');
                setTextcolor('#ffffff');
            }
        };
        window.addEventListener('scroll',changeColor);
    },[]);
     return (
    <div>
    <ul>
        <li className='p-4'>
            <Link href='/'>Home</Link>
        </li>
        <li className='p-4'>
            <Link href='/about'>About Us</Link>
        </li>
        <li className='p-4'>
            <Link href='/'>Home</Link>
        </li>
        <li className='p-4'>
            <Link href='/about'>About Us</Link>
        </li>
    </ul>
    </div>
  )
}

export default Header