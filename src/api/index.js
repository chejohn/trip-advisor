import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

export const getPlacesData = async (sw, ne) => {
    try {
      // request
      const {data: {data}} = await axios.get(URL, {
        params: {
          bl_latitude: sw.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
          tr_latitude: ne.lat,
        },
        headers: {
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
          'X-RapidAPI-Key': 'd7f2c69156mshc4704750476b45ap11db6djsn8968aa734900',
        }
      });
      return data;
    }
    catch (error) {
        // flow transfers to this block if
        // request fails
        console.log(error);
    }
}