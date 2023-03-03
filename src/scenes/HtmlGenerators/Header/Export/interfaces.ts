/**
 * Export Comp namespace and types
 */
export declare namespace IExport {

    interface MegaMenu {
        text: string;
        tripInsItems: {
            text: string;
            desc: string;
            path: string;
        }[];
        travelMedInsItems: {
            text: string;
            desc: string;
            path: string;
        }[]
    }
    interface Props {
        logoPath: string;
        logoAlt: string;
        megaMenu: MegaMenu;
        navItems: {
            text: string;
            path?: string;
            subItems?: {
                text: string;
                path: string;
            }[]
        }[];
    }
}