const dirTree = require('./utils/dirTree');
const defaultPath = './docs';

module.exports = {
  base: '/devlog/', // base url을 설정합니다.
  title: '.DevLog',
  head: [['link', { rel: 'icon', href: '/assets/images/mylogo.jpeg' }]], // html head에 넣을 값들을 설정
  themeConfig: {
    // VuePress 기본 테마에 필요한 설정
    logo: '/assets/images/mylogo.jpeg', // title옆에 나타날 로고 이미지
    searchPlaceholder: 'Search...',
    nav: [
      // 페이지 우측 상단에 보여질 nav들
      { text: 'Home', link: '/' },
      { text: 'GitHub', link: 'https://github.com/seungsang00' },
    ],
    sidebar: dirTree(defaultPath),
  },
};
