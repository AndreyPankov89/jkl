import React , {Component} from 'react';
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

export default class PostAddForm extends Component{

    constructor(props){
        super(props);

        this.state={
            inputValue:""
        }

        this.onValueChange = this.onValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this)
    }


    onValueChange(e){
        this.setState({inputValue: e.target.value})
    }

    onSubmit(e){
        e.preventDefault();
        if (this.state.inputValue !==""){
            this.props.onAdd(this.state.inputValue);
        }
        this.setState({inputValue: ""})
    }

    render(){
        return (
            <form
             className="bottom-panel d-flex"
             onSubmit={this.onSubmit}>
                <input 
                    type="text"
                    placeholder="О чём вы думаете сейчас?"
                    className="form-control new-post-label"
                    onChange = {this.onValueChange}
                    value={this.state.inputValue}
                />

                <AddBtn
                    type='submit'
                    //className="btn btn-outline-secondary"
                    >
                    Добавить
                </AddBtn>
            </form>
        )
    }
}