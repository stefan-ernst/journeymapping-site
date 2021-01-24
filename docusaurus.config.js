module.exports = {
    title: 'Journey Mapping for Jira',
    tagline: 'Bring User Experience Design to Jira',
    url: 'https://journeymapping.app',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/JM.svg',
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
                src: 'img/JM.svg',
            },
            items: [
                {
                    to: 'docs/',
                    activeBasePath: 'docs',
                    label: 'Docs',
                    position: 'left',
                },
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
                            label: 'Read Confirmations for Confluence',
                            to: 'https://realigned.io/readconfirmations',
                        },
                        {
                            label: 'Personal Dashboards for Confluence',
                            to: 'https://realigned.io/personaldashboards',
                        },
                        {
                            label: 'Enhanced Sharing for Confluence',
                            to: 'https://realigned.io/enhancedsharing',
                        },
                    ],
                },
                {
                    title: 'Important Links',
                    items: [
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
                    title: 'Consultancy',
                    items: [
                        {
                            label: "Realigned Services",
                            to: 'https://realigned.ch',
                            target: '_blank'
                        },
                        {
                            label: 'Realigned Learning',
                            href: 'https://realigned.work',
                            target: '_blank'
                        },
                    ],
                },
            ],
            logo: {
                alt: 'Realigned Logo',
                src: '/img/realigned.svg',
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
