import React, { useState } from 'react';
import styles from "./Game.module.css";
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';

function Game() {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [userAnswer, setUserAnswer] = useState('');
  const [message, setMessage] = useState('');

  const { selectedGame } = location.state || {};
  console.log(selectedGame, "jai ganesh!!");

  const handleGoBackHome = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/');
    }, 2000); // Simulate a loading delay of 2 seconds
  };

  const handleGoBackCategory = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/category');
    }, 2000); // Simulate a loading delay of 2 seconds
  };

  const handleInputChange = (e) => {
    setUserAnswer(e.target.value);
  };
const investor = "conrad gessner"
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userAnswer.toLowerCase() === investor.toLowerCase()) {
      setMessage('Correct!');
    } else {
      setMessage('Aw,Its okay, Let me tell you!');
    }
  };

  return (
    <div>
      {loading ? (
        <div className={styles.loader}>Loading...</div>
      ) : (
        <div>
          <Navbar/>
          {selectedGame ? (
            <div className={styles.main_content}>
              <div className={styles.question_box}>
                <div className={styles.answer_box}>
                  <h1>{selectedGame.title}</h1>
                  <h2>Who invented the Pencil?</h2>
                  <form onSubmit={handleSubmit}>
                    <input 
                      type="text" 
                      placeholder="Type your answer here" 
                      value={userAnswer} 
                      required
                      onChange={handleInputChange} 
                    />
                    <br/>
                    <br/>
                    <button type="submit">Check</button>
                  </form>
                  {message && <p>{message}</p>}
                </div>
              </div>
              {/* <button onClick={handleGoBackHome}>Back to Home</button>
              <button onClick={handleGoBackCategory}>Play again</button> */}
            </div>
          ) : (
            <p>No game selected</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Game;
