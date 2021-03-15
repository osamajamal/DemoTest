const initailState = {
  name: 'ali',
  wish: ['eat', 'code', 'pain'],
  userdeatils: [],
  loading: false,
};
const Apireducer = (state = initailState, action) => {
  if (action.type === 'changename') {
    console.log(action.payload.wisharray);
    return {
      ...state,
      name: action.payload.name,
      wish: [...state.wish, action.payload.wisharray],
    };
  }
  if (action.type === 'getalluserdata') {
    // console.log(action.payload);
    return {
      ...state,
      userdeatils: [...state.userdeatils, action.payload],
    };
  }
  if (action.type === 'Loader') {
    return {
      ...state,
      loading: action.payload,
    };
  }
  return state;
};

export default Apireducer;
