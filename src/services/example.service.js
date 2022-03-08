import api from 'services/api';

const get_stuff = map_of_data => {
  return api.get('/stuff', { params: map_of_data });
};

const do_stuff = (email, password) => {
  return api.post('/do_stuff', {
    email,
    password,
  });
};

const ExampleService = {
  get_stuff,
  do_stuff
};

export default ExampleService;
