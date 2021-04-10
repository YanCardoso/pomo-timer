import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';
export function Profile() {
    const {level} = useContext(ChallengesContext);


    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/YanCardoso.png" alt="Yan Cardoso"/>
            <div>
                <strong>Yan Cardoso</strong>
                <p>
                    <img src="icons/level.svg" alt="Level 5"/>
                    Level {level}
                </p>
            </div>
        </div>
    )
}