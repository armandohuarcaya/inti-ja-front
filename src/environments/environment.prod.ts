export const environment = {
  production: true,
  module_id: 1272,
  authStrategy: {
      name: 'oauth2',
      clientId: 'tp6DXQQjwFHlEPrkilrDDB3rknQqsVctAbjaYQiM',
      baseEndpoint: 'https://oauth.upeu.edu.pe',
      redirectUri: 'https://lamb-talent.upeu.edu.pe/personal-performance/oauth2/callback',
      success: '/personal-performance/pages/dashboard'
  },
  apiUrls: {
    good: 'https://good-orders-back.herokuapp.com',
  },
  shellApp: 'https://lamb-talent.upeu.edu.pe/shell',
};
