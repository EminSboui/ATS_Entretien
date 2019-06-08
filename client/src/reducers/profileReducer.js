import { GET_PROFILES,ADD_PROFILE, PROFILES_LOADING} from '../actions/types';
const initialState ={
  profiles: [],
  loading: false

}

export default function(state= initialState, action){
  switch(action.type){
    case GET_PROFILES:
    return{
      ...state,
      profiles: action.payload,
      loading: false
    };
    case ADD_PROFILE:
    return {
      ...state,
      profiles: [action.payload,...state.profiles]
    };
    case PROFILES_LOADING:
    return {
      ...state,
      loading: true
    };
    default:
    return state;
  }
}