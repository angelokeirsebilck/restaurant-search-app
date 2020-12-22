import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer hNsBrrXJfTGSQRwSj2mqnPy2i7KW3vS2y_s6l4bQu9HcY0XzbsLQFgDBlta9x6sdkBoFV5O1GLXglZ5cK_fCjufjfSDGPsDzpcKhAR4QphGpZGqg8c9F9s4VA9zgX3Yx',
  },
});
