import React from 'react';
import './app-header.css';

const AppHeader = ({liked, allPosts}) =>{

    console.log(liked, allPosts);

    return (
        <div className='app-header d-flex'>
            <h1>Andrey Pankov</h1>
            <h2>
                {allPosts} записей, из них понравилось {liked}
            </h2>
        </div>
    )
}

export default AppHeader