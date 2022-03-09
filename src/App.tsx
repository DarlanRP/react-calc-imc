import styles from './App.module.css';
import powered from '../src/assets/images/powered.png';
import leftArrow from '../src/assets/images/leftarrow.png';
import {useState} from 'react';
import {levels, calculateImc, PropsLevel} from './helpers/imc';
import {GridItem} from './components/GridItem';

function App() {

  const[heightField, setHeightField] = useState<number>(0);
  const[weightField, setWeightField] = useState<number>(0);
  const[toShow, setToShow] = useState<PropsLevel | null >(null);

  const handleCalculateButton = () => {
      if(heightField && weightField){
        setToShow(calculateImc(heightField, weightField));
      }
      else if(heightField && !weightField){
        alert('Digite o seu peso!');
      }
      else if(weightField && !heightField){
        alert('Digite a sua altura!');
      }
      else{
        alert('Digite a sua altura e o seu peso!');
      }
  }

  const handleBackButton = () => {
    setToShow(null);
    setHeightField(0);
    setWeightField(0);
  }

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={powered} alt="Logo" width={100}/>  
        </div>
      </header>

      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule o seu IMC.</h1>
          <p>IMC é a sigla para Índice de massa corpórea, parâmetro adotado pela organização mundial de saúde para calcular o peso ideal de cada pessoa.</p>
          
          <input type="number" placeholder="Digite a sua altura. Ex: 1.5 (em metros)"
                 value={heightField > 0 ? heightField : ''}
                 onChange={(e) => setHeightField(parseFloat(e.target.value))}
                 disabled={toShow ? true : false}
          />

          <input type="number" placeholder="Digite seu peso. Ex: 80.5 (em Kg)"
                 value={weightField > 0 ? weightField : ''}
                 onChange={(e) => setWeightField(parseFloat(e.target.value))}
                 disabled={toShow ? true : false}
          />

          <button onClick={handleCalculateButton} disabled={toShow ? true : false}>Calcular</button>
        </div>  
        <div className={styles.rightSide}>
          {!toShow &&
          <div className={styles.grid}>
            {levels.map((item, key) => (
              <div key={key}>
                <GridItem key={key} item={item}/>
              </div>
            ))}  
          </div>
          }
          {toShow &&
            <div className={styles.rightBig}>
              <div className={styles.rightArrow} onClick={handleBackButton}>
                <img src={leftArrow} alt="voltar" width="25" />  
              </div>
              <GridItem item={toShow}/> 
              
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
