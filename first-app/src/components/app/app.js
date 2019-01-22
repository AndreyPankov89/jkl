import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-app-form';

import './app.css'

const App = () => {

    const data = [
        1,
        {label: "Going To learn React", important: true, id: "qwer"},
        {label: "that is so good", important: false, id: "rtyu"},
        {label: "I need a break...", important: false, id: "poiu"},
    ];

    return ( 
        <div className='app'>
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
            </div>

            <PostList posts={data}/>
            <PostAddForm/>
        </div>

    )
}

export default App