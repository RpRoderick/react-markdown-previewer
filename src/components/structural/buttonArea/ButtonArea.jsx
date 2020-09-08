import React from 'react';
import styles from 'components/structural/buttonArea/ButtonArea.module.scss';
import { PropTypes } from 'prop-types';

function ButtonArea(props) {
  return (
    <div className={styles.button_container}>
      <div className={styles.clear_and_reset_button_container}>
        <div className={styles.clear_button_container}>
          <button type="button" className={styles.button} onClick={() => props.clearMarkdown()}>
            Clear
          </button>
        </div>
        <div className={styles.reset_button_container}>
          <button type="button" className={styles.button} onClick={() => props.resetMarkdown()}>
            Reset
          </button>
        </div>
      </div>
      <div className={styles.message_container}>
        <div className={styles.message}>
          {props.message}
        </div>
      </div>
      <div className={styles.copy_button_container}>
        <button type="button" onClick={() => props.copyButton()} className={styles.button}>
          Copy
        </button>
      </div>
    </div>
  );
}

ButtonArea.propTypes = {
  copyButton: PropTypes.func,
  message: PropTypes.string,
  clearMarkdown: PropTypes.func,
  resetMarkdown: PropTypes.func
}

export default ButtonArea;