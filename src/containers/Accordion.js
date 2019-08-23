import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Questions from '../components/Questions';

const questions = [
  {
    id: 1,
    title: 'First Question',
    content: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes'
  },
  {
    id: 2,
    title: 'Second Question',
    content: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes'
  },
  {
    id: 3,
    title: 'Third Question',
    content: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes'
  }

];

class Accordion extends Component {
  static propTypes = {
    questions: PropTypes.array.isRequired
  }

  state = {
    visibleId: undefined
  }

  handleClick = (id) => {
    if(id === this.state.visibleId) {
      this.setState({ visibleId: undefined })
    } else {
      this.setState({ visibleId: id });
    }
  }

  render() {
    return (
      <Questions questions={questions} visibleId={this.state.visibleId} onClick={this.handleClick} />
    );
  }
}

export default Accordion;
