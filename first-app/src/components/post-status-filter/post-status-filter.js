import React from 'react'

import './post-status-filter.css';

const PostStatusFilter = () => {
    return(
        <div className="btn-group">
            <button type="Button" className="btn btn-info">Все</button>
            <button  type="Button" className="btn btn-outline-secondary">Понравилось</button>
        </div>
    )
    
}

export default PostStatusFilter;