/**
 * props used to generate html content
 */
import { IExport } from "./interfaces";

const props: IExport.Props = {
    copyrightPath: 'https://www.sevencorners.com/about/corporate/about-us',
    address: {
        street: '303 Congressional Blvd.',
        city: 'Carmel',
        state: 'Indiana',
        zip: '46032',
        country: 'USA'
    },
    connect: {
        twitter: 'https://twitter.com/sevencornersinc',
        facebook: 'https://www.facebook.com/sevencornersinc',
        linkedin: 'https://www.linkedin.com/company/251002',
        pinterest: 'https://www.pinterest.com/SevenCorners/pins/',
        youtube: 'https://www.youtube.com/channel/UCK0sBHm6pAiRQbpP1CmDohA',
        instagram: 'https://www.instagram.com/seven.corners.inc/'
    },
    markets: [
        {
            text: 'Consumer Insurance',
            path: 'https://www.sevencorners.com/'
        },
        {
            text: 'Government Solutions',
            path: 'https://www.sevencorners.com/about/gov'
        },
        {
            text: 'Agents',
            path: 'https://www.sevencorners.com/about/agent'
        }
    ],
    products: [
        {
            text: 'Roundtrip® for U.S. Residents',
            path: 'https://www.sevencorners.com/plans/trip-protection'
        },
        {
            text: 'Seven Corners® Travel Medical Plans',
            path: 'https://www.sevencorners.com/plans/travel-medical-insurance'
        },
        {
            text: 'Seven Corners® Student Plans Get Away USA',
            path: 'https://www.sevencorners.com/plans/student-travel-insurance'
        },
        {
            text: 'Wander® Frequent Travelers Plus',
            path: 'https://www.sevencorners.com/coronavirus/annual-travel-insurance'
        },
        {
            text: 'Inbound® USA Plans',
            path: 'https://www.sevencorners.com/plans/visitors-insurance'
        },
        {
            text: 'Medical Evacuation and Repatriation',
            path: 'https://www.sevencorners.com/plans/medevac-repatriation-insurance'
        }
    ],
    resources: [
        {
            text: 'About Us',
            path: 'https://www.sevencorners.com/about/corporate'
        },
        {
            text: '24 Hour Travel Assistance',
            path: 'https://www.sevencorners.com/about/assist'
        },
        {
            text: 'Services & Discounts',
            path: 'https://www.sevencorners.com/about/other-services/discounts'
        },
        {
            text: 'Claims',
            path: 'https://www.sevencorners.com/about/self-service/claims'
        },
        {
            text: 'F.A.Q',
            path: 'https://www.sevencorners.com/faq'
        },
        {
            text: 'Glossary',
            path: 'https://www.sevencorners.com/faq/glossary'
        },
        {
            text: 'Developer Portal',
            path: 'https://www.sevencorners.com/developer'
        },
        {
            text: 'System Status',
            path: 'https://status.sevencorners.com/'
        },
        {
            text: 'Careers',
            path: 'https://www.sevencorners.com/about/corporate/careers'
        },
        {
            text: 'Contact Us',
            path: 'https://www.sevencorners.com/about/contact'
        }
    ],
    legal: [
        {
            text: 'Privacy',
            path: 'https://www.sevencorners.com/about/legal/privacy-policy'
        },
        {
            text: 'Cookies',
            path: 'https://www.sevencorners.com/about/legal/cookies'
        },
        {
            text: 'Terms of Use',
            path: 'https://www.sevencorners.com/about/legal/terms-of-use'
        },
        {
            text: 'Security',
            path: 'https://www.sevencorners.com/about/legal/information-security'
        }
    ]
}

export default props;