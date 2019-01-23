import React from 'react';
import './post-add-form.css';
import styled from 'styled-components';

const AddBtn = styled.button`
    border-radius: 5px;
    background-color: #138496
    color:white;
    padding: 6px 12px;
    transition: all .2s ease;
    cursor: pointer;
    :hover{
        tramsform:translateY(3px);
    }
`

const PostAddForm = ({onAdd}) => {
    return (
        <div className="bottom-panel d-flex">
            <input 
                type="text"
                placeholder="О чём вы думаете сейчас?"
                className="form-control new-post-label"
            />

            <AddBtn
                type='submit'
                //className="btn btn-outline-secondary"
                onClick={()=>onAdd('test')}
                >
                Добавить
            </AddBtn>
        </div>
    )
}

export default PostAddForm;