import { get } from 'axios';
import { locationAPI } from '../config/api';

export const updateParams = (params) => ({
  type: 'UPDATE_PARAMS',
  params,
});

export const locate = (ll) => ({
  type: 'LOCATE',
  ll,
});

export const getLocationParams = () => dispatch => (
  navigator.geolocation.getCurrentPosition(
    // User accept to be located and browser can get location
    ({ coords }) => (
      dispatch(locate(`${coords.latitude},${coords.longitude}`))
    ),
    // User doesn't accept to be located or location fails
    // Then call an external API to get an aproximate "ll" based on the IP
    () => (
      get(locationAPI.url).then(({ data }) => (
        dispatch(locate(`${data.latitude},${data.longitude}`))
      ))
    ),
  )
);
