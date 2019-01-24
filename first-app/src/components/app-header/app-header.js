import React from 'react';
import './app-header.css';

const num2str= (num)=>{
    const text_forms = ["запись", "записи", "записей"];
    const n = Math.abs(num) % 100; 
    const n1 = n % 10;
    if (n > 10 && n < 20) { 
        return text_forms[2]; 
    }
    if (n1 > 1 && n1 < 5) { 
        return text_forms[1]; 
    }
    if (n1 === 1) { 
        return text_forms[0]; 
    }
    return text_forms[2];
}

const AppHeader = ({liked, allPosts}) =>{

    console.log(liked, allPosts);

    return (
        <div className='app-header d-flex'>
            <h1>Andrey Pankov</h1>
            <h2>
                {allPosts} {num2str(allPosts)}, из них понравилось {liked}
            </h2>
        </div>
    )
}

export default AppHeader