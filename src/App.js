import {useEffect, useState} from 'react';
import {CssBaseline, Grid} from '@material-ui/core';

import { getPlacesData } from './api';
import Header from './components/Header';
import List from './components/List';
import Map from './components/Map';


const App = () => {
  const [places, setPlaces] = useState([]);

  const [coords, setCoords] = useState({});
  const [bounds, setBounds] = useState(null);

  useEffect(() => {
    getPlacesData()
      .then((data) => {
        console.log(data)
        setPlaces(data)
      })
  }, []);
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
            <List/>
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
          setCoords={setCoords}
          setBounds={setBounds}
          coords={coords}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default App;