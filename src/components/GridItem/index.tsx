import { PropsLevel } from "../../helpers/imc";
import styles from './GridItem.module.css';
import upImage from '../../assets/images/up.png';
import downImage from '../../assets/images/down.png';

type Props = {
    item: PropsLevel
};

export const GridItem = ({item}: Props) => {
    return(
        <div className={styles.main} style={{background: item.color}}>
            <div className={styles.gridIcon}>
                <img src={item.icon === 'up' ? upImage : downImage} alt=""  width="30"/>
            </div>
            <div className={styles.gridTitle}>{item.title}</div>

            {item.yourImc &&
                <div className={styles.yourImc}>Seu IMC é de {item.yourImc} kg/m²</div>
            }

            <div className={styles.gridInfo}>
                <>
                   O IMC {item.title} está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>    
                </>
            </div>
        </div>
    )
}