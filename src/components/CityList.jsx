import { useCity } from '../contexts/CityContext';
import CityItem from './CityItem';
import styles from './CityList.module.css';
import Message from './Message';
import Spinner from './Spinner';

function CityList() {
  const { cities, isLoading } = useCity();

  if (isLoading) return <Spinner />;
  if (!cities.length)
    return <Message message={'Click on the map to add first city '} />;

  return (
    <div className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </div>
  );
}

export default CityList;
