import React, { useState } from 'react';

export default function Say({name, btnName}){
    const [message, setMessage] = useState('');
    const onClickHi = () =>{
        setMessage('안녕?'+name)
    }
    const onClickDontGo = () =>{
        setMessage('가지마!'+name)
    }

    const [color, setColor] = useState('black');

    return(
        <div>
            <button onClick={onClickHi}>안녕{btnName}</button>
            <button onClick={onClickDontGo}>가지마{btnName}</button>
            <h1 style={{color}}>{message}</h1>
            <button style={{color:'red'}} onClick = {()=>setColor('red')}>Red</button>
            <button style={{color:'blue'}} onClick = {()=>setColor('blue')}>Green</button>
            <button style={{color:'green'}} onClick = {()=>setColor('green')}>Blue</button>
        </div>
    );
}