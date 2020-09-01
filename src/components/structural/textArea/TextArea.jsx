import React from 'react';
// import styles from 'components/structural/textArea/TextArea.module.scss';
import { PropTypes } from 'prop-types';

function TextArea(props) {
  return (
    <div className="text_area_container">
      <textarea 
        id="editor"
        placeholder="Type Markdown Here!"
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