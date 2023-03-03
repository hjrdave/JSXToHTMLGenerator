import { IUseTemplate } from "./interfaces";
import { default as compPreviewPage } from './templates/components/preview-page';

const useTemplate = (options: IUseTemplate.Options) => {
    const buildCompPreviewPage = () => compPreviewPage(options);

    return {
        buildCompPreviewPage
    }
}
export default useTemplate;