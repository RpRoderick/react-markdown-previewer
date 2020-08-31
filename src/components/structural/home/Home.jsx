import React from 'react';
import styles from './Home.module.scss';

class Home extends React.Component {
    render() {
        return (
            <div className={styles.home}>
                You are seeing the Home Component
            </div>
        );
    }
}

export default Home