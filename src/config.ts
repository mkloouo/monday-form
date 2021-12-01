export const config = {
  apis: {
    monday: {
      url: 'https://api.monday.com/v2',
      token: process.env.REACT_APP_MONDAY_API_KEY || '',
    },
  },
};
