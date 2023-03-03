/**
 * props used to generate html content
 */
import { IExport } from "./interfaces";

const props: IExport.Props = {
    logoPath: '/',
    logoAlt: 'Seven Corners',
    megaMenu: {
        text: 'Products',
        tripInsItems: [
            {
                text: 'RoundTrip Travel Protection',
                desc: 'Our most popular coverage for U.S. residents’ trips within the U.S. and abroad. Offers optional Cancel for Any Reason to expand your coverage.',
                path: 'https://www.sevencorners.com/plans/trip-protection'
            },
            {
                text: 'Get Away USA',
                desc: 'Customizable coverage for U.S. residents’ trips within the U.S.',
                path: 'https://www.sevencorners.com/plans/trip-protection/get-away-usa'
            }
        ],
        travelMedInsItems: [
            {
                text: 'Seven Corners Travel Medical',
                desc: 'High limits of comprehensive medical protection for travel outside your home country with optional COVID-19 coverage on our Plus plan.',
                path: ''
            },

            {
                text: 'Wander Frequent Traveler Plus',
                desc: 'Cover multiple international trips with our annual plan. Includes COVID-19 coverage.',
                path: ''
            },
            {
                text: 'Inbound USA',
                desc: 'Scheduled benefit medical coverage for non-U.S. citizens and non-U.S. residents traveling to the U.S.',
                path: ''
            },
            {
                text: 'Medical Evacuation and Repatriation',
                desc: 'Evacuation and repatriation coverage designed for J Visa and other visa holders.',
                path: ''
            },
        ]
    },
    navItems: [
        {
            text: 'Customer Service',
            path: '',
            subItems: [
                {
                    text: 'Self Service Center',
                    path: 'https://www.sevencorners.com/about/self-service'
                },
                {
                    text: 'Medical Assistance',
                    path: 'https://www.sevencorners.com/about/assist'
                },
                {
                    text: 'Find a Doctor',
                    path: 'https://www.sevencorners.com/about/assist/find-providers'
                },
                {
                    text: 'Cancel or Change Plan',
                    path: 'https://www.sevencorners.com/about/contact'
                },
                {
                    text: 'Extend Coverage',
                    path: 'https://renewal.sevencorners.com/'
                },
                {
                    text: 'Plan Documents',
                    path: 'https://www.sevencorners.com/about/documents'
                },
                {
                    text: 'File a Claim',
                    path: 'https://www.sevencorners.com/about/self-service/claims'
                },
            ]
        },
        {
            text: 'Travel Center',
            path: '',
            subItems: [
                {
                    text: 'Travel Alerts and Safety Tips',
                    path: 'https://www.sevencorners.com/about/travel-alerts',
                },
                {
                    text: 'What Is Travel Insurance',
                    path: 'https://www.sevencorners.com/faq/what-is-travel-insurance',
                }
            ]
        },
        {
            text: 'Blog',
            path: 'https://www.sevencorners.com/blog'
        }
    ]
}

export default props;