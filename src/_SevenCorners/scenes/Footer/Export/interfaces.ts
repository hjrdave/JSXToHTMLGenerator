/**
 * Export Comp namespace and types
 */
export declare namespace IExport {

    interface Props {
        copyrightPath?: string,
        logoPath?: string;
        address?: {
            street?: string;
            city?: string;
            state?: string;
            zip?: string;
            country?: string;
        }
        connect?: {
            twitter?: string;
            facebook?: string;
            linkedin?: string;
            pinterest?: string;
            youtube?: string;
            instagram?: string;
        }
        markets?: {
            text?: string;
            path?: string;
        }[];
        products?: {
            text?: string;
            path?: string;
        }[];
        resources?: {
            text?: string;
            path?: string;
        }[];
        legal?: {
            text?: string;
            path?: string;
        }[]
    }
}