import { environment } from 'src/environments/environment';

const good:any = environment.apiUrls.good;
export const END_POINTS = {
  good: good + '/api',
  comun: {
    base: 'comun',
  },
  personal_performance: { // Proyecto
    comun: 'comun/personal-performance',
  },
  contract: { // Proyecto
    comun: 'comun/contract',
  },
  portal: {
    evaluations: 'workerportal/my-evaluations'
  }
};
