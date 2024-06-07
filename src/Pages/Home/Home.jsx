import React,{useState} from 'react'
import styles from "./Home.module.css"; // Import the module CSS
import { useNavigate } from 'react-router-dom';


import Navbar from '../../Components/Navbar/Navbar';
function Home() {
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate()
    const handlePlayGame =()=>{
        setLoading(true);
    setTimeout(() => {
      navigate('/category');
    }, 2000); // Simulate a loading delay of 2 seconds
    }
    const handleMentoonsClick = () => {
        // Navigate to another website when "Mentoons" button is clicked
        window.open('https://mentoons.com','_blank'); // Replace 'https://example.com' with the URL you want to navigate to
    };
  return (
    
    <div>
      {loading ? (
        <div className={styles.loader}>Loading...</div> // Add your loader component or animation here
      ) : (
        <div >
          <Navbar/>
          <div className={styles.margin_out}>
          <div >
            <div className={styles.heading}>
              {/* <button onClick={handlePlayGame} className={styles.butt1}>Play</button> */}
              <button onClick={handleMentoonsClick} className={styles.butt2}>Mentoons</button>
            </div>
          </div>
          <div>
            {/* <div className={styles.section2}>
              <img src={game1} alt="Game 1" />
            </div> */}
            <button className={styles.lastButt} onClick={handlePlayGame}>Take Me To The Quiz Already</button>
          </div>
          </div>
        </div>
      )}
    </div>
  )

}

export default Home
