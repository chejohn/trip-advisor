import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab';

import useStyles from './styles';

const Map = ({ setCoords, setBounds, coords }) => {
  const classes = useStyles();
  /*
  isMobile will be set to false if width
  of device is more than 600px
  */
  const isMobile = useMediaQuery('(min-width: 600px)');
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAYxNuTTqFhhyGVU_aUBh5fMTwxNXnDzf4' }}
        defaultCenter={coords}
        center={coords}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={(e) => {
          setCoords({ lat: e.center.lat, lng: e.center.lng });
        }}
        onChildClick={''}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
