import { get } from 'axios';
import { foursquareAPI } from '../config/api';

export const fetchVenuesRequest = () => ({
  type: 'FETCH_VENUES_REQUEST',
});

export const fetchVenuesSuccess = (venues) => ({
  type: 'FETCH_VENUES_SUCCESS',
  venues,
});

export const fetchVenuesError = (error) => ({
  type: 'FETCH_VENUES_ERROR',
  error,
});

export const fetchVenues = (params) => dispatch => {
  dispatch(fetchVenuesRequest());
  // return get(foursquareAPI.url, {
  //   params: {
  //     ...foursquareAPI.params,
  //     ...params,
  //   }
  // })
  //   .then(res => dispatch(fetchVenuesSuccess(res.data.response)))
  //   .catch(error => dispatch(fetchVenuesError(error)));

  return setTimeout(() => dispatch(fetchVenuesSuccess({
    "warning": {
      "text": "There aren't a lot of results near you. Try something more general, reset your filters, or expand the search area."
    },
    "suggestedRadius": 600,
    "headerLocation": "Lower East Side",
    "headerFullLocation": "Lower East Side, New York",
    "headerLocationGranularity": "neighborhood",
    "totalResults": 230,
    "suggestedBounds": {
      "ne": {
        "lat": 40.724216906965616,
        "lng": -73.9896507407283
      },
      "sw": {
        "lat": 40.72151724718017,
        "lng": -73.98693222860872
      }
    },
    "groups": [
      {
        "type": "Recommended Places",
        "name": "recommended",
        "items": [
          {
            "reasons": {
              "count": 0,
              "items": [
                {
                  "summary": "This spot is popular",
                  "type": "general",
                  "reasonName": "globalInteractionReason"
                }
              ]
            },
            "venue": {
              "id": "49b6e8d2f964a52016531fe3",
              "name": "Russ & Daughters",
              "location": {
                "address": "179 E Houston St",
                "crossStreet": "btwn Allen & Orchard St",
                "lat": 40.72286707707289,
                "lng": -73.98829148466851,
                "labeledLatLngs": [
                  {
                    "label": "display",
                    "lat": 40.72286707707289,
                    "lng": -73.98829148466851
                  }
                ],
                "distance": 130,
                "postalCode": "10002",
                "cc": "US",
                "city": "New York",
                "state": "NY",
                "country": "United States",
                "formattedAddress": [
                  "179 E Houston St (btwn Allen & Orchard St)",
                  "New York, NY 10002",
                  "United States"
                ]
              },
              "categories": [
                {
                  "id": "4bf58dd8d48988d1f5941735",
                  "name": "Gourmet Shop",
                  "pluralName": "Gourmet Shops",
                  "shortName": "Gourmet",
                  "icon": {
                    "prefix": "https://ss3.4sqi.net/img/categories_v2/shops/food_gourmet_",
                    "suffix": ".png"
                  },
                  "primary": true
                }
              ],
              "venuePage": {
                "id": "77298563"
              }
            }
          }
        ]
      }
    ]
  })), 5);
};
