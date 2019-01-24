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
                    {label: "Going To learn React", important: true, like:false, id: "qwer"},
                    {label: "That is so good", important: false, like:false, id: "rtyu"},
                    {label: "I need a break...", important: false, like:false, id: "poiu"},
                ],
            term:"",
            filter:"all"
        }
        this.editItem = this.editItem.bind(this);

        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLiked = this.onToggleLiked.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);
        this.toggleProp = this.toggleProp.bind(this);
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

    toggleProp(id,prop){
        this.setState(({date}) => {
            const index = date.findIndex(item => item.id === id);
            console.log(index,id);
            const old = date[index];
            let newItem
            switch(prop){
                case "important":{
                    newItem = {...old, important: !old.important};
                    break;
                }
                case "like":{
                    newItem = {...old, like: !old.like};
                    break
                }
                default:{
                    newItem = null;
                }
            }
            
            const newArr = [...date.slice(0,index),newItem, ...date.slice(index+1)];
            return {date : newArr};

        });
    }

    onToggleImportant(id){
        this.toggleProp(id,"important");
    }

    onToggleLiked(id){
        this.toggleProp(id,"like");
    }

    searchPost(items,term){
        console.log(term);
        if(term.length === 0)
        return items;

        return items.filter((item) => {
            return item.label.indexOf(term) > -1;
        })
    }
    filterPost(items,filter){
        if(filter==='like'){
            return items.filter(item => item.like);
        }
        else{
            return items
        }

    }

    onUpdateSearch(term){
        this.setState({term});

    }

    onFilterSelect(filter){
        this.setState({filter});

    }

    render(){
        const {date, term, filter}=this.state 
        const liked = date.filter(item => item.like).length;
        const allPosts = date.length;

        const visiblePosts = this.filterPost(this.searchPost(date,term),filter);

        return ( 
            <div className='app'>
                <AppHeader
                    liked={liked}
                    allPosts={allPosts}
                />
                <div className="search-panel d-flex">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch}/>
                    <PostStatusFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}
                    />
                </div>

                <PostList posts={visiblePosts} 
                    OnEdit={this.editItem}
                    OnDelete={this.deleteItem}
                    OnToggleImportant={this.onToggleImportant}
                    OnToggleLiked={this.onToggleLiked}
                    
                    />
                <PostAddForm
                    onAdd = {this.addItem}
                />
            </div>

        )
    }


}
