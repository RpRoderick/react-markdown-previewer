import React from 'react';
import styles from 'components/structural/home/Home.module.scss';
import MarkdownEditor from 'components/structural/markdownEditor/MarkdownEditor';

function Home() {
  return (
    <div className={styles.home}>
      <MarkdownEditor />
    </div>
  );
}

export default Home;
