import { EXAMPLE_LOADING } from "redux/actions/example";

export default (
    state = {
      loading: false
    },
    action
  ) => {
    switch (action.type) {
      case EXAMPLE_LOADING:
        return {
          ...state,
          loading: true,
          data: action.data
        };
      default:
        return state;
    }
  };
  