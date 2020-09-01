import React from 'react';
// import styles from 'components/structural/buttonArea/ButtonArea.module.scss';
import { PropTypes } from 'prop-types';

function ButtonArea(props) {
  return (
    <div className="button_container">
      <button className="button" onClick={() => props.clearMarkdown()}>
        Clear State
      </button>
      <button className="button" onClick={() => props.resetMarkdown()}>
        Reset State
      </button>
    </div>
  );
}

ButtonArea.propTypes = { 
  clearMarkdown: PropTypes.func,
  resetMarkdown: PropTypes.func
}

export default ButtonArea;