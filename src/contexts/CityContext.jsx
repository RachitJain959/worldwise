import { createContext, useState, useEffect } from 'react';

const cityContext = createContext();

function CityProvider() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);

        const res = await fetch('http://localhost:9000/cities');
        const data = await res.json();
        setCities(data);
      } catch (err) {
        throw new Error('Something went wrong...');
      } finally {
        setIsLoading(false);
      }
    }

    fetchCities();
  }, []);
}
