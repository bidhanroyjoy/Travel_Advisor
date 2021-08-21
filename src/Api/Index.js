import axios from 'axios';

export const getPlacesData = async (type,sw, ne) => {
  try {
    const {data:{data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        'x-rapidapi-key': 'b8b1a864c5msh054ecca674a9e45p1ffa4ejsn0b6aa585d454',
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
      }
    });

    return data;

  } catch(error) {
    console.log(error)
  }
}

