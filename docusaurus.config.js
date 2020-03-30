module.exports = {
  title: 'NUS Guide',
  tagline: 'Bring me to NUS',
  url: 'https://nus-guide.now.sh',
  baseUrl: '/',
  favicon: 'img/logo.png',
  organizationName: 'indocom', // Usually your GitHub org/user name.
  projectName: 'study-in-nus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'NUSGuide',
      logo: {
        alt: 'NUSGuide Logo',
        src: 'img/logo.png',
      },
      hideOnScroll: true,
      links: [
        {
          to: 'docs/before/introduction',
          activeBasePath: 'docs/before',
          label: 'Before Acceptance',
          position: 'left',
        },
        {
          to: 'docs/after/introduction',
          activeBasePath: 'docs/after',
          label: 'After Acceptance',
          position: 'left',
        },
        {
          to: 'docs/contributors',
          label: 'Contributors',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Before Acceptance',
          items: [
            {
              label: 'Introduction',
              to: 'docs/before/introduction',
            },
          ],
        },
        {
          title: 'After Acceptance',
          items: [
            {
              label: 'Introduction',
              to: 'docs/after/introduction',
            },
            {
              label: 'Dormitory',
              to: 'docs/after/housing'
            },
            {
              label: 'Financial Aid',
              to: 'docs/after/financial-aid',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Facebook',
              to: 'https://www.facebook.com/PerhimpunanIndonesiaNUS/',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/pinusonline/',
            },
            {
              label: 'Github',
              href: 'https://www.github.com/indocom/study-in-nus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Perhimpunan Indonesia NUS. Built with 💚 and Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/benclmnt/study-in-nus/edit/master',
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: ['@docusaurus/plugin-ideal-image'],
};
