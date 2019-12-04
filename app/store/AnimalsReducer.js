import axios from 'axios';
import { combineReducers } from 'redux';

const GET_ANIMAL = 'GET_ANIMAL';

const INITIAL_STATE = {
  current: {
    uri: 'https://source.unsplash.com/900x900/?animals',
  },
  animals: [
    {
      name: 'KITTEN',
    },
    {
      name: 'PUPPY',
    },
    {
      name: 'BUNNY',
    },
    {
      name: 'LION',
    },
    {
      name: 'GIRAFFE',
    },
    {
      name: 'ZEBRA',
    }
  ],
};

export const getAnimalThunk = animal => async dispatch => {
  try {
    const res = await axios.get('https://api.unsplash.com/photos/random', {
      params: {
        client_id:
          '1533a0b7c83edd4a19545ff0de118aba7d7712d11963364105e04a1ab37bd820',
        query: "animal," + animal,
      },
    });
    dispatch(getAnimal(res.data.urls.regular));
  } catch (err) {
    console.error(err);
  }
};

export const getAnimal = animal => ({ type: GET_ANIMAL, animal });

export const animalsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ANIMAL:
      return {
        ...state,
        current: {
          uri: action.animal,
        },
      };
    default:
      return state;
  }
};

export default combineReducers({
  animals: animalsReducer,
});
