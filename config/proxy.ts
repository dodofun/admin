const serveUrlMap = {
  dev: 'https://dev.pro.ant.design/',
  pre: 'https://pre.pro.ant.design/',
  test: 'https://test.pro.ant.design/',
  idc: 'https://idc.pro.ant.design/',
};

const { REACT_APP_ENV = 'dev' } = process.env;

export default {
  dev: {
    '/api/': {
      target: serveUrlMap[REACT_APP_ENV],
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },
  test: {
    '/api/': {
      target: serveUrlMap[REACT_APP_ENV],
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },
  pre: {
    '/api/': {
      target: serveUrlMap[REACT_APP_ENV],
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },
};
