import React from 'react';
import styles from 'components/structural/textArea/TextArea.module.scss';
import { PropTypes } from 'prop-types';

function TextArea(props) {
  return (
    <div className={styles.text_area_container}>
      <label className={styles.textarea} htmlFor="textarea">Enter Markdown here:</label>
      <textarea
        id="textarea"
        className={styles.editor}
        value={props.markdown}
        onChange={(e) => {
          props.updateMarkdown(e.target.value);}}>
        {props.markdown}
      </textarea>
    </div>
  );
}

TextArea.propTypes = { 
  markdown: PropTypes.string,
  updateMarkdown: PropTypes.func
}

export default TextArea;