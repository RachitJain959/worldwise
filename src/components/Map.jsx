import { useNavigate, useSearchParams } from 'react-router-dom';
import styles from './Map.module.css';

function Map() {
  const [searchParams, setSearchParams] = useSearchParams();

  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');

  const navigate = useNavigate();

  return (
    <div className={styles.mapContainer} onClick={() => navigate('form')}>
      <h1>Map</h1>
      <p>lat={lat}</p>
      <p>lng={lng}</p>
      <button onClick={() => setSearchParams({ lat: 50, lng: 302 })}>
        Change pos
      </button>
    </div>
  );
}

export default Map;
