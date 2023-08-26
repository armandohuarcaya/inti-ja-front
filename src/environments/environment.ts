import {API} from './vhost';

export const environment = {
    production: false,
    module_id: 1260,
    authStrategy: {
        name: 'oauth',
        clientId: '2',
        baseEndpoint: API.good.local + '/oauth/token',
        redirectUri: `${window.location.origin}/oauth/callback`,
        success: '/pages/dashboard'
    },
    apiUrls: {
        good: API.good.local,
    },
    shellApp: `${window.location.origin}`,
};