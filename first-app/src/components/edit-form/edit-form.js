import React, {Component} from 'react';

import './edit-form.css';


export default class EditForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            change: false
        }
    }


    render(){
        return (
                <form>
                    <input 
                        type="text"
                        value={this.props.label}
                        className="form-control new-post-label"
                    />

                    <button
                        type='submit'
                        className="btn btn-outline-secondary">
                        Изменить
                    </button>
                </form>
        )
    }
}

