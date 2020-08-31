import React from 'react';
import styles from './Home.module.scss';
import MarkdownEditor from '../markdownEditor/MarkdownEditor';

function Home() {
  return (
    <div className={styles.home}>
      <MarkdownEditor />
    </div>
  );
}

export default Home;
