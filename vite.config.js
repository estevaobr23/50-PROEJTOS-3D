// 'three' e o OrbitControls (CDN) são resolvidos em runtime pelo importmap
// no <head> do index.html — nunca pelo bundler. Sem os dois em `external`,
// o Rollup tenta resolvê-los como dependência de build e falha (o pacote
// nem está instalado localmente: o visualizador 3D é 100% carregado sob
// demanda via CDN, de propósito, pra não pesar a página).
export default {
  base: './',
  build: {
    assetsInlineLimit: 0,
    rollupOptions: {
      external: [
        'three',
        'https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/controls/OrbitControls.js',
        'https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/loaders/GLTFLoader.js',
        'https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/loaders/DRACOLoader.js',
      ],
    },
  },
};
