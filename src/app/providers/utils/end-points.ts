import { environment } from 'src/environments/environment';

const inti:any = environment.apiUrls.inti;
export const END_POINTS = {
  elinti: inti + '/api',
  comun: {
    base: 'comun',
  },
  el_inti: { // Proyecto
    filterComun: 'filters-comun',
    settings: {
      intipaz: 'settings/intipaz',
    },
  },
  // contract: { // Proyecto
  //   comun: 'comun/contract',
  // },
  // portal: {
  //   evaluations: 'workerportal/my-evaluations'
  // }
};
