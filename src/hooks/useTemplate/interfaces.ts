export declare namespace IUseTemplate {
    interface Options {
        name: string,
        scripts?: string,
        html?: string,
        css?: string,
        props?: {
            key: string;
            value: string
        }[],
        updateProps?: {
            key: string;
            value: string
        }[];
    }
}