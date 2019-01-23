import React from 'react';

import PostListItem from '../post-list-item';

import './post-list.css'

const PostList = ({posts, OnEdit}) => {

    const elements = posts.filter(item => {return typeof(item)==="object" && !!item}).map((item) => {
            const {...itemProps} = item;
            const {id} = itemProps
            return (
                <li key={id} className="list-group-item">
                    <PostListItem {...itemProps}
                    OnEdit = {OnEdit}
                    />
                </li>
            )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default PostList;