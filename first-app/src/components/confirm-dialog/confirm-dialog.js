import React, {Component} from 'react'

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import styled from 'styled-components';

const MyBtn = styled.button`
    color: red;
`

export default class PostListItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            modal: false
    };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
        modal: !this.state.modal
        });
    }

    render() {
        const {id, label, OnDelete} = this.props;

        return (
        <div>
            <MyBtn onClick={this.toggle}> <i className="fa fa-trash-o"></i></MyBtn>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
            <ModalBody>
                {label}
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={() => {OnDelete(id); this.toggle()}}>Да, удаляем все!</Button>{' '}
                <Button color="secondary" onClick={this.toggle}>Стоп! Это важная инфа!</Button>
            </ModalFooter>
            </Modal>
        </div>
        );
    }
}
