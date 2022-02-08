export const environment = {
  production: true,
  apiBaseUrl: (process.env.NODE_ENV ? 'https://ovasweb.herokuapp.com' : 'http://localhost:80')
};
