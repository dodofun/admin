export { getInitialState, initialStateConfig, layout } from '@/init';
export { request } from '@/init/request';
export { render } from '@/init/render';
export { onRouteChange } from '@/init/route';
// export { qiankun } from '@/init/qiankun';

// export const qiankun = fetch('/app/getApps').then((apps) => ({
//   // 注册子应用信息
//   apps,
//   // 完整生命周期钩子请看 https://qiankun.umijs.org/zh/api/#registermicroapps-apps-lifecycles
//   lifeCycles: {
//     afterMount: (props: any) => {
//       console.log('afterMount', props);
//     },
//   },
//   // 支持更多的其他配置，详细看这里 https://qiankun.umijs.org/zh/api/#start-opts
// }));
