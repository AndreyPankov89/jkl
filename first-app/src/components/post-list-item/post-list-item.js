import React, {Component} from 'react';

import './post-list-item.css';

export default class PostListItem extends Component{

    constructor(props){
        super(props);
        this.state = {
            important: false,
            like: false
        }

        this.onImportant = this.onImportant.bind(this);
        this.onLike = this.onLike.bind(this);
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


    render(){
        const today = new Date(); 
        const tekDate =`${today.getDate()}/${today.getMonth()+1}/${today.getFullYear()}`;
        
        const {label} = this.props;
        const {important, like} = this.state;
        let classNames = "app-list-item d-flex justify-content-between";
    
        if (important){
            classNames += " important"
        }
        if (like){
            classNames += " like"
        }
    
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
                
                <div className="d-flex justify-content-center align-items-center">
                    <button type="button" className="btn-star btn-small" onClick={this.onImportant}>
                        <i className="fa fa-star"></i>
                    </button>
                    <button type="button" className="btn-trash btn-small">
                        <i className="fa fa-trash-o"></i>
                    </button>   
                        <i className="fa fa-heart"></i>
                </div>
    
            </div>
        )
    }
}
