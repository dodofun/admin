import { defineConfig } from 'umi';

export default defineConfig({
  define: {
    API_HOST: 'http://dev.test.com',
  },
  nodeModulesTransform: {
    type: 'none',
    exclude: [],
  },
});
