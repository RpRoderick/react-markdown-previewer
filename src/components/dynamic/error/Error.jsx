import React from 'react';
import styles from 'components/dynamic/error/Error.module.scss';

function Error() {
  return (
    <div className={styles.error}>
      Error! Really though.... You are seeing the error component!
    </div>
  );
}

export default Error;
