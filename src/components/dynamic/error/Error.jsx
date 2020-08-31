import React from 'react';
import styles from './Error.module.scss';

class Error extends React.Component {
    render() {
        return (
            <div className={styles.error}>
                Error! Really though.... You are seeing the error component!
            </div>
        );
    }
}

export default Error
