import {useEffect, useState} from 'react';
import {CssBaseline, Grid} from '@material-ui/core';

import { getPlacesData } from './api';
import Header from './components/Header';
import List from './components/List';
import Map from './components/Map';


const App = () => {
  const [places, setPlaces] = useState([]);
  const [childClicked, setChildClicked] = useState(null);
  const [coords, setCoords] = useState({});
  const [bounds, setBounds] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
      setCoords({lat: latitude, lng: longitude});
    });
  }, []);

  useEffect(() => {
    if (!bounds) return;
    getPlacesData(bounds.sw, bounds.ne)
      .then((data) => {
        setPlaces(data);
      })
  }, [coords, bounds]
  );

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
            <List 
            places={places}
            childClicked={childClicked}
            />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
          setCoords={setCoords}
          setBounds={setBounds}
          coords={coords}
          places={places}
          setChildClicked={setChildClicked}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default App;