import React, { Component } from 'react';
import {
  ListGroup,
  ListGroupItem,
  Button,
  Container
} from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {connect} from 'react-redux';
import {getProfiles} from '../actions/profileActions';
import PropTypes from 'prop-types';


class ProfileList extends Component {
  componentDidMount(){
    this.props.getProfiles();
  }

  render() {
    const { profiles } = this.props.profile;
    return (
      <Container>
        <ListGroup>
          <TransitionGroup className='Shopping-list'>
            {profiles.map(({ _id, nom }) => (
              <CSSTransition key={_id}
                timeout={500}
                classNames='fade'>
                <ListGroupItem>
                  {nom}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}
ProfileList.propTypes={
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
}
const mapStateToProps = (state) =>({
  profile: state.profile
});

export default connect(mapStateToProps, {getProfiles})(ProfileList);