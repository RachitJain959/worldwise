import { createContext, useState, useEffect, useContext } from 'react';

const CityContext = createContext();

function CityProvider({ children }) {
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

  return (
    <CityContext.Provider
      value={{
        cities,
        isLoading,
      }}
    >
      {children}
    </CityContext.Provider>
  );
}

function useCity() {
  const context = useContext(CityContext);
  if (context === undefined)
    throw new Error('CityContext used outside CityProvider scope');
  return context;
}

export { CityProvider, useCity };
