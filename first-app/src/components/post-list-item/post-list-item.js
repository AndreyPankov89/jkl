import React, {Component} from 'react';

import './post-list-item.css';

export default class PostListItem extends Component{

    constructor(props){
        super(props);
        this.state = {
            important: false,
            like: false,
            label: props.label,
            edit: false
        }

        this.onImportant = this.onImportant.bind(this);
        this.onLike = this.onLike.bind(this);
        this.onEdit = this.onEdit.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onImportant(){
        this.setState(({important}) => ({
            important : !important
        }))
    }

    onLike(){
        this.setState(({like}) => ({
            like : !like
        }))
    }

    onEdit(){
        this.setState(() => ({
            edit: true
        }))
    }

    onSubmit(){
        this.setState(()=>({
            edit: false
        }))
    }

    onChange(event){
        console.log(event.target)
        
        this.setState({
            label: event.target.value
        })
    }


    render(){
        const today = new Date(); 
        const tekDate =`${today.getDate()}/${today.getMonth()+1}/${today.getFullYear()}`;
        
        //const {label} = this.props;
        const {important, like, label, edit} = this.state;
        const {OnEdit,OnDelete,id} = this.props;
        let classNames = "app-list-item d-flex justify-content-between";
        let hide = "hide";
        let editForm = "edit-form"
    
        if (important){
            classNames += " important"
        }
        if (like){
            classNames += " like"
        }
    
        if (edit){
            hide = ""
        }
        editForm = `${hide} `+editForm;

        return (
            <div className={classNames}>
                <span className="label-wrapper">
                    <span className="app-list-item-label" onClick={this.onLike}>
                        {label}
                    </span>
                    <span className="app-list-item-data">
                        {tekDate}
                    </span>
                </span>
                
                <div className={editForm}>
                    <form className="d-flex">
                        <input 
                            type="text"
                            value={label}
                            className="form-control new-post-label"
                            onChange={this.onChange}
                        />

                        <button
                            type='button'
                            className="btn edit-btn"
                            onClick={()=> {OnEdit(id,label);this.onSubmit()}}>
                            Изменить
                        </button>
                    </form>
                </div>
                
                <div className="d-flex justify-content-center align-items-center">
                    <button type="button" className="btn-small btn-edit" onClick={this.onEdit}>
                        <i className="fa fa-pencil"></i>
                    </button>
                    <button 
                        type="button" 
                        className="btn-star btn-small" 
                        onClick={this.onImportant}>
                        <i className="fa fa-star"></i>
                    </button>
                    <button 
                        type="button" 
                        className="btn-trash btn-small"
                        onClick={()=>OnDelete(id)}>
                        <i className="fa fa-trash-o"></i>
                    </button>   
                        <i className="fa fa-heart"></i>
                </div>
                
            </div>
        )
    }
}
