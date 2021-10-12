module.exports = {
    title: 'Journey Mapping for Jira',
    tagline: 'Bring User Experience Design to Jira',
    url: 'https://journeymapping.app',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/jmIcon.svg',
    organizationName: 'Realigned Technologies Ltd', // Usually your GitHub org/user name.
    projectName: 'journeymapping', // Usually your repo name.
    themeConfig: {
        colorMode: {
            defaultMode: 'light',
            disableSwitch: true
        },
        navbar: {
            style: 'dark',
            title: 'Journey Mapping for Jira',
            logo: {
                alt: 'Journey Mapping for Jira Logo',
                src: 'img/jmIcon.svg',
            },
            items: [
                {
                    to: 'docs/',
                    activeBasePath: 'docs',
                    label: 'Documentation',
                    position: 'left',
                },
                {
                    to: 'https://marketplace.atlassian.com/1223654',
                    label: 'Try Cloud',
                    position: 'left',
                    target: '_blank'
                },
                {
                    to: 'https://marketplace.atlassian.com/1226653',
                    label: 'Try OnPrem',
                    position: 'left',
                    target: '_blank'
                }
                /*{to: 'blog', label: 'Blog', position: 'left'},*/
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Other Apps',
                    items: [
                        {
                            label: 'Story Mapping for Jira',
                            to: 'https://storymapping.app',
                        },
                        {
                            label: 'Denkplan Portfolio Map for Jira',
                            to: 'https://portfoliomapping.app',
                        },
                        {
                            label: 'Personal Dashboards for Confluence',
                            to: 'https://realigned.io/personaldashboards',
                        },
                        {
                            label: 'Personas for Jira',
                            to: 'https://betterpersonas.app',
                        },
                    ],
                },
                {
                    title: 'Important Links',
                    items: [
                        {
                            label: 'Marketplace',
                            href: 'https://marketplace.atlassian.com/vendors/1213963/realigned-technologies-ltd',
                            target: '_blank'
                        },
                        {
                            label: 'Support',
                            href: 'https://realignedtechnologies.atlassian.net/servicedesk/customer/portals',
                            target: '_blank'
                        },
                        {
                            label: 'EULA',
                            href: 'https://docz.realignedtechnologies.com/eula',
                        },
                        {
                            label: 'Privacy',
                            href: 'https://docz.realignedtechnologies.com/privacypolicy',
                        },
                    ],
                },
                {
                    title: 'About us',
                    items: [
                        {
                            label: "Realigned Services",
                            to: 'https://realigned.ch',
                            target: '_blank'
                        },
                        {
                            label: 'Realigned Homepage',
                            href: 'https://realigned.io',
                            target: '_blank'
                        },
                    ],
                },
            ],
            logo: {
                alt: 'Realigned Logo',
                src: '/img/RealignedLogo.svg',
            },
            copyright: `Copyright © ${new Date().getFullYear()} Realigned Technologies Ltd. `,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.

                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.

                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
    scripts: [
        {
            /** <script async defer data-domain="storymapping.app" src="https://plausible.io/js/plausible.js"></script> **/
            src: "https://plausible.io/js/plausible.js",
            "data-domain": "journeymapping.app",
            async: true,
            defer: true
        }
    ],
};
