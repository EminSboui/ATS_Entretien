import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addProfile } from '../actions/profileActions';

class profileModal extends Component {
  state = {
    modal: false,
    nom: '',
    prenom: '',
    email: '',
    num_tel: '',
    poste: '',
    cv: '',
    message: ''
  }
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit = e => {
    e.preventDefault();
    const newProfile = {
      nom: this.state.nom,
      prenom: this.state.prenom,
      email: this.state.email,
      num_tel: this.state.num_tel,
      poste: this.state.poste,
      cv: this.state.cv,
      message: this.state.message
    };
    // add item via add item action
    this.props.addProfile(newProfile);
    // close the modal
    this.toggle();
  }
  render() {
    return (<div>
      <Button color='dark'
        style={
          { marginBottom: '2rem' }
        }
        onClick={
          this.toggle
        }>Add Profile</Button>
      <Modal isOpen={
        this.state.modal
      }
        toggle={
          this.toggle
        }>
        <ModalHeader toggle={
          this.toggle
        }>Add To Profile List</ModalHeader>
        <ModalBody>
          <Form onSubmit={
            this.onSubmit
          }>
            <FormGroup>
              <Label for='nom'>Nom</Label>
              <Input type='text' name='nom' id='nom' placeholder='nom'
                onChange={
                  this.onChange
                }></Input>

              <Label for='prenom'>Prenom</Label>
              <Input type='text' name='prenom' id='nom' placeholder='Prenom'
                onChange={
                  this.onChange
                }></Input>

              <Label for='email'>Email</Label>
              <Input type='text' name='email' id='email' placeholder='email'
                onChange={
                  this.onChange
                }></Input>

              <Label for='poste'>Poste</Label>
              <Input type='text' name='poste' id='poste' placeholder='poste'
                onChange={
                  this.onChange
                }></Input>

              <Label for='num_tel'>Num Tel</Label>
              <Input type='text' name='num_tel' id='num_tel' placeholder='num_tel'
                onChange={
                  this.onChange
                }></Input>

              <Label for='cv'>CV</Label>
              <Input type='text' name='cv' id='cv' placeholder='cv'
                onChange={
                  this.onChange
                }></Input>

              <Label for='message'>Message</Label>
              <Input type='text' name='message' id='message' placeholder='message'
                onChange={
                  this.onChange
                }></Input>

              <Button color='dark'
                style={
                  { marginTop: '2rem' }
                }
                block>Add Profile</Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>)
  }
}
const mapStateToProps = state => ({ profile: state.profile });

export default connect(mapStateToProps, { addProfile })(profileModal);
