import { Metadata } from "next";

export const meta: Metadata = {
    // metadataBase: new URL('https://workora.sale.et/'),
    icons: {
        icon: 'logo.svg',
    },
    // themeColor: "#0F4C81",
    title: "Workora",
    description: "Workora - Flexible workspaces for freelancers, teams, and businesses designed for productivity, comfort, and community.",
    applicationName: 'Workora',
    keywords: [
        "Flexible Workspaces",
        'Coworking Spaces',
        'Remote Work',
        'Shared Offices',
        'Virtual Offices',
        'Meeting Rooms',
        'Business Lounges',
        'Productivity',
        'Collaboration',
        'Networking',
        'Freelancers',
        'Startups',
        'Entrepreneurs',
        'Workora'
    ],
    creator: 'Workora',
    authors: [
        {
            name: 'Workora',
            url: 'https://workora.com/'
        }
    ],
    publisher: 'Workora',
    openGraph: {
        title: 'Workora',
        description: "Workora - Flexible workspaces for freelancers, teams, and businesses designed for productivity, comfort, and community.",
        url: 'https://workora.com/',
        siteName: "Workora",
        images: [
            {
                url: "/open-graph.png",
                width: 1200,
                height: 630,
            }
        ],
        locale: "en_US",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        }
    },
    twitter: {
        card: "summary_large_image",
        title: "Workora",
        description: "Workora - Flexible workspaces for freelancers, teams, and businesses designed for productivity, comfort, and community.",
        site: "@Workora",
        images: ['/open-graph.png'],
        creator: "@Workora",
    },
    verification: {
        google: 'google',
        yandex: 'yandex',
        yahoo: 'yahoo',
        other: {
            me: ['nattynengeda@gmail.com', 'https://natnaelengeda.tech']
        }
    },
    appleWebApp: {
        title: "Workora",
        statusBarStyle: 'black-translucent',
        startupImage: [
            'logo.png'
        ]
    },
};