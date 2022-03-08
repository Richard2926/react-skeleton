import ExampleService from "services/example.service";

export const EXAMPLE_LOADING = "EXAMPLE_LOADING";

export const example_load = data => async dispatch => {
  try {
    const result = await ExampleService.do_stuff(data.email, data.password);
    return dispatch({
      type: EXAMPLE_LOADING,
      data: result.data
    });
  } catch (error) {
    console.log(error);
  }
};