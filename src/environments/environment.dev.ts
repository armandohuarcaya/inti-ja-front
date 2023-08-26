export const environment = {
    production: false,
    module_id: 1260,
    authStrategy: {
        name: 'oauth2',
        clientId: 'tp6DXQQjwFHlEPrkilrDDB3rknQqsVctAbjaYQiM',
        baseEndpoint: 'https://oauth.upeu.edu.pe',
        redirectUri: `https://www.upeu.dev/lamb-talent/fronts/personal-performance/oauth2/callback`,
        success: '/lamb-talent/fronts/personal-performance/pages/dashboard',
    },
    apiUrls: {
        good: 'https://www.upeu.dev/lamb-talent/backs/api-talent',
    },
    shellApp: 'https://www.upeu.dev/lamb-talent/fronts/shell',
};


