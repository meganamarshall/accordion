import React from 'react';
import PropTypes from 'prop-types';
import Question from './Question';
import styles from './Questions.css';

function Questions({ questions, visibleId, onClick }) {
  const questionList = questions.map(question => (
    <li style={styles} className="questions-list" key={question.id} >
      <Question question={question} visibleId={visibleId} onClick={onClick} />
    </li>
  ))

  return (
    questionList
  )
}

Questions.propTypes = {
  questions: PropTypes.array.isRequired,
  visibleId: PropTypes.string
}

export default Questions;
