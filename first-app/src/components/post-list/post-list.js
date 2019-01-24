import React from 'react';

import PostListItem from '../post-list-item';
import { ListGroup, ListGroupItem } from 'reactstrap';
import './post-list.css'

const PostList = ({posts, OnEdit, OnDelete, OnToggleImportant, OnToggleLiked}) => {

    const elements = posts.filter(item => {return item instanceof Object && "label" in item && !!item}).map((item) => {
            const {...itemProps} = item;
            const {id} = itemProps
            return (
                <ListGroupItem key={id} className="list-group-item">
                    <PostListItem {...itemProps}
                    OnEdit = {OnEdit}
                    OnDelete = {OnDelete}
                    OnToggleImportant={OnToggleImportant}
                    OnToggleLiked={OnToggleLiked}
                    />
                </ListGroupItem>
            )
    })

    return (
        <ListGroup className="app-list list-group">
            {elements}
        </ListGroup>
    )
}

export default PostList;