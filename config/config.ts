// https://umijs.org/config/
import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';
import proxy from './proxy';
import routes from './routes';
import lodash from 'lodash';

import dev from './config.dev';
import pre from './config.pre';
import test from './config.test';
import prod from './config.prod';

const { REACT_APP_ENV } = process.env;

const config = defineConfig({
  define: {
    API_HOST: 'http://api.test.com',
  },
  hash: true,
  antd: {},
  dva: {
    hmr: true,
  },
  layout: {
    name: 'Ant Design Pro',
    locale: true,
    siderWidth: 208,
    ...defaultSettings,
  },
  locale: {
    // default zh-CN
    default: 'zh-CN',
    antd: true,
    // default true, when it is true, will use `navigator.language` overwrite default
    baseNavigator: true,
  },
  dynamicImport: {
    loading: '@ant-design/pro-layout/es/components/PageLoading',
  },
  fastRefresh: {},
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes,
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    'primary-color': defaultSettings.primaryColor,
  },
  esbuild: {},
  title: false,
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
  // https://github.com/zthxxx/react-dev-inspector
  plugins: ['react-dev-inspector/plugins/umi/react-inspector'],
  inspectorConfig: {
    // loader options type and docs see below
    exclude: [],
    babelPlugins: [],
    babelOptions: {},
  },
  resolve: {
    includes: ['src/components'],
  },
  alias: {},
  cssLoader: {
    localsConvention: 'camelCase',
  },
  cssModulesTypescriptLoader: { mode: 'emit' },
  devServer: {
    port: 8888,
    host: '0.0.0.0',
  },
  exportStatic: {},
  inlineLimit: 10000,
  polyfill: {
    imports: ['core-js/stable'],
  },
  metas: [
    {
      name: 'keywords',
      content: 'umi, antd,antd-pro,admin',
    },
    {
      name: 'description',
      content: '🍙 后台管理',
    },
  ],
  externals: {
    // react: 'window.React',
    // 'react-dom': 'window.ReactDOM',
  },
  scripts: [
    // 'https://unpkg.com/browse/react@16.12.0/umd/react.production.min.js',
  ],
  chainWebpack(memo, { env, webpack, createCSSRule }) {
    memo.merge({
      optimization: {
        splitChunks: {
          chunks: 'all',
          minSize: 30000,
          minChunks: 3,
          automaticNameDelimiter: '.',
          cacheGroups: {
            vendor: {
              name: 'vendors',
              test({ resource }: { resource: any }) {
                return /[\\/]node_modules[\\/]/.test(resource);
              },
              priority: 10,
            },
          },
        },
      },
    });
  },
});

export default merge();

function merge() {
  let res: any;
  if (process.env.NODE_ENV === 'development') {
    switch (process.env.REACT_APP_ENV) {
      case 'dev':
        res = lodash.merge({}, config, dev);
        break;
      case 'test':
        res = lodash.merge({}, config, test);
        break;
      case 'pre':
        res = lodash.merge({}, config, pre);
        break;
      default:
        res = lodash.merge({}, config, dev);
    }
  } else {
    switch (process.env.REACT_APP_ENV) {
      case 'test':
        res = lodash.merge({}, config, test);
        break;
      case 'pre':
        res = lodash.merge({}, config, pre);
        break;
      default:
        res = lodash.merge({}, config, prod);
    }
  }
  return res;
}
