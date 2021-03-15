import axios from 'axios';

export const namewish = (data) => {
  return {
    type: 'changename',
    payload: data,
  };
};

export const apiresquestdispatch = () => {
  return (dispatch) => {
    dispatch(Loader(true));
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => {
        // console.log(res);
        if (res.data) {
          dispatch({type: 'getalluserdata', payload: res.data});
          dispatch(Loader(false));
        } else {
          console.log('eroorr');
        }
      })
      .catch((err) => {
        console.log(error);
        dispatch(Loader(false));
      });
  };
};

export const Loader = (loader) => {
  return {
    type: 'Loader',
    payload: loader,
  };
};
