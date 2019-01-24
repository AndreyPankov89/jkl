import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css'

export default class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            date: [
                    [],
                    2,
                    'kkk',
                    {label: "Going To learn React", important: true, id: "qwer"},
                    {label: "That is so good", important: false, id: "rtyu"},
                    {label: "I need a break...", important: false, id: "poiu"},
                ]
        }
        this.editItem = this.editItem.bind(this);

        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
    }


    generateId = ( length=15, prefix='') =>{
        return `prefix-${Math.random().toString(36).substr(5,length)}`;
    }

    deleteItem =  (id) => {
        this.setState(({date}) => {
            const index = date.findIndex(item => item.id === id);
            console.log(index,id);
            const newArr = [...date.slice(0,index), ...date.slice(index+1)];
            return {date : newArr};
        });
    }

    editItem = (id,label) => {
        this.setState(({date}) => {
            const index = date.findIndex(item => item.id === id);
            console.log(index,id);
            const newArr = [...date.slice(0,index), {id, label}, ...date.slice(index+1)];
            return {date : newArr};
        });
    }

    addItem = (label) => {
        const id = this.generateId(5);
        console.log(id);
        this.setState(({date}) => {
            const newArr = [...date, {id, label, important:false},];
            return {date : newArr};
        });
    }

    render(){
        const {date}=this.state 

        return ( 
            <div className='app'>
                <AppHeader/>
                <div className="search-panel d-flex">
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>

                <PostList posts={date} 
                    OnEdit={this.editItem}
                    OnDelete={this.deleteItem}
                    />
                <PostAddForm
                    onAdd = {this.addItem}
                />
            </div>

        )
    }


}
