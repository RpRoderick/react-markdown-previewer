import React from 'react';
import styles from 'components/structural/buttonArea/ButtonArea.module.scss';
import { PropTypes } from 'prop-types';

function ButtonArea(props) {
  return (
    <div className={styles.button_container}>
      <button className={styles.button} onClick={() => props.clearMarkdown()}>
        Clear State
      </button>
      <button className={styles.button} onClick={() => props.resetMarkdown()}>
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