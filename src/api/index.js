import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

const options = {
  params: {
    bl_latitude: '11.847676',
    bl_longitude: '108.473209',
    tr_longitude: '109.149359',
    tr_latitude: '12.838442',
  },
  headers: {
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
    'X-RapidAPI-Key': 'd7f2c69156mshc4704750476b45ap11db6djsn8968aa734900',
  },
};

export const getPlacesData = async () => {
    try {
        // request
        const {data: {data}} = await axios.get(URL, options);
        return data;
    }
    catch (error) {
        // flow transfers to this block if
        // request fails
        console.log(error);
    }
}