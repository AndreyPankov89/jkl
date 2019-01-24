import React, {Component} from 'react';
import ConfirmDialog from '../confirm-dialog';

import './post-list-item.css';

export default class PostListItem extends Component{

    constructor(props){
        super(props);
        this.state = {
            edit: false
        }

        this.onEdit = this.onEdit.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
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
        const {edit} = this.state;
        const {label,important,like,OnEdit,OnDelete,OnToggleImportant,OnToggleLiked,id} = this.props;
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
                    <span className="app-list-item-label" onClick={() =>{ OnToggleLiked(id)}}>
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
                        onClick={() =>{OnToggleImportant(id)}}>
                        <i className="fa fa-star"></i>
                    </button>
                    <ConfirmDialog id = {id} label={label} OnDelete={OnDelete}/>
                    {/* <button 
                        type="button" 
                        className="btn-trash btn-small"
                        onClick={()=>OnDelete(id)}>
                        <i className="fa fa-trash-o"></i>
                    </button>    */}
                        <i className="fa fa-heart"></i>
                </div>
                
            </div>
        )
    }
}
