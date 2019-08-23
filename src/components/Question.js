import React from 'react';
import PropTypes from 'prop-types';
import styles from './Questions.css';

function Question({ question, visibleId, onClick }) {
  return (
    <section style={styles}>
      <p onClick={() => onClick(question.id)}>{question.title}</p>
      {visibleId === question.id && <p className="content">{question.content}</p>}
    </section>
  )
}

Question.propTypes = {
  question: PropTypes.object.isRequired
}

export default Question;
