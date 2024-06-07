import { useState } from "react";
import styles from "./Category.module.css"; // Import the module CSS
import CategoryCard from "../../Components/CategoryCard/CategoryCard";
import Lottie from 'react-lottie';
import StartButton from '../../Animations/StartButton.json';
import { useNavigate } from "react-router-dom";
import Navbar from '../../Components/Navbar/Navbar';

function Category() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: StartButton,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const [easy, setEasy] = useState(null);
  const [medium, setMedium] = useState(null);
  const [hard, setHard] = useState(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);

  const Styless = [
    { transform: 'rotate(5deg)' },
    { transform: 'rotate(-10deg)' },
    { transform: 'rotate(8deg)' },
    { transform: 'rotate(-5deg)' },
    { transform: 'rotate(12deg)' },
    { transform: 'rotate(-15deg)' },
    { transform: 'rotate(3deg)' },
    { transform: 'rotate(-8deg)' },
  ];

  const handleEasy = () => {
    setMedium(null);
    setHard(null);
    setSelectedDifficulty('easy');

    const data = [
      { title: "easygame", id: "01", level: "easy" },
      { title: "stationary", id: "02", level: "easy" },
      { title: "music", id: "03", level: "easy" },
      { title: "clothing", id: "04", level: "easy" },
      { title: "kitchen", id: "05", level: "easy" }
    ];
    setEasy(data);
  };

  const handleMedium = () => {
    setEasy(null);
    setHard(null);
    setSelectedDifficulty('medium');
    const data = [
      { title: "medium", id: "01", level: "medium" },
      { title: "stationary", id: "02", level: "medium" },
      { title: "music", id: "03", level: "medium" },
      { title: "clothing", id: "04", level: "medium" },
      { title: "kitchen", id: "05", level: "medium" }
    ];
    setMedium(data);
  };

  const handleHard = () => {
    setEasy(null);
    setMedium(null);
    setSelectedDifficulty('hard');
    const data = [
      { title: "hard", id: "01", level: "hard" },
      { title: "stationary", id: "02", level: "hard" },
      { title: "music", id: "03", level: "hard" },
      { title: "clothing", id: "04", level: "hard" },
      { title: "kitchen", id: "05", level: "hard" }
    ];
    setHard(data);
  };

  const [start, setStart] = useState(null);
  const [selectedGame, setSelectedGame] = useState(null);

  const handleGame = (item) => {
    console.log("clicked button", item);
    setStart(item.title);
    setSelectedGame(item);
  };

  const handleStart = () => {
    setLoading(true);
    setTimeout(() => {
      navigate('/game', { state: { selectedGame } });
    }, 2000); // Simulate a loading delay of 2 seconds
  };

  return (
    <div>
      {loading ? (
        <div className={styles.loader}>Loading...</div> // Add your loader component or animation here
      ) : (
        <div>
            <Navbar/>
          <div className={styles.head}>
            <h1>Choose Difficulty</h1>
            <h1>How old is our genius?</h1>
          </div>
          <div>
            <div>
              <button onClick={handleEasy} className={`${styles.round_button} ${selectedDifficulty === 'easy' ? styles.selected : ''}`}>
                EASY{" "}
              </button>
              <button onClick={handleMedium} className={`${styles.round_button2} ${selectedDifficulty === 'medium' ? styles.selected : ''}`}>
                MEDIUM{" "}
              </button>
              <button onClick={handleHard} className={`${styles.round_button3} ${selectedDifficulty === 'hard' ? styles.selected : ''}`}>
                HARD{" "}
              </button>
            </div>
          </div>
          <br />
          <br />
          {easy && (
            <div>
              {easy.map((item, index) => (
                <CategoryCard
                  key={item.id}
                  title={item.title}
                  style={Styless[index % Styless.length]}
                  onClick={() => handleGame(item)}
                />
              ))}
            </div>
          )}
          {medium && (
            <div>
              {medium.map((item, index) => (
                <CategoryCard
                  key={item.id}
                  title={item.title}
                  style={Styless[index % Styless.length]}
                  onClick={() => handleGame(item)}
                />
              ))}
            </div>
          )}
          {hard && (
            <div>
              {hard.map((item, index) => (
                <CategoryCard
                  key={item.id}
                  title={item.title}
                  style={Styless[index % Styless.length]}
                  onClick={() => handleGame(item)}
                />
              ))}
            </div>
          )}
          {start && (
            <div>
              <p>selected: {start}</p>
              <div onClick={handleStart} style={{ cursor: 'pointer', display: 'inline-block' }}>
                <Lottie options={defaultOptions} height={50} width={300} />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Category;
