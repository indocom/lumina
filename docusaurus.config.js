module.exports = {
  title: 'NUS-Guide',
  tagline: 'Bring me to NUS',
  url: 'https://nus-guide.now.sh',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'indocom', // Usually your GitHub org/user name.
  projectName: 'study-in-nus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'NUSGuide',
      logo: {
        alt: 'NUSGuide Logo',
        src: 'img/logo.svg',
      },
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
          href: 'https://github.com/benclmnt/study-in-nus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'After Acceptance',
          items: [
            {
              label: 'Introduction',
              to: 'docs/introduction',
            },
            {
              label: 'Style Guide',
              to: 'docs/doc1',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Study in NUS. Built with Docusaurus.`,
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
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
