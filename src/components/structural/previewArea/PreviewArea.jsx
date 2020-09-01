import React from 'react';
// import styles from 'components/structural/previewArea/PreviewArea.module.scss';
import marked from 'marked';
import { PropTypes } from 'prop-types';

function PreviewArea(props) {
    return (
      <div className="preview_area_container">
        <div id="preview"
          dangerouslySetInnerHTML={{
            __html: marked(props.markdown)
          }}>
        </div>
      </div>
    );
}

PreviewArea.propTypes = { 
  markdown: PropTypes.string
}

export default PreviewArea;