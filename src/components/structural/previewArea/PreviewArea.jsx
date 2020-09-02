import React from 'react';
import styles from 'components/structural/previewArea/PreviewArea.module.scss';
import marked from 'marked';
import { PropTypes } from 'prop-types';

function PreviewArea(props) {
    return (
      <div className={styles.preview_area_container}>
        <div className={styles.preview}
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
