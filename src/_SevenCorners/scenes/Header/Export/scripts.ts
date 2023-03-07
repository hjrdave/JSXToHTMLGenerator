/**
 * Scripts that Export Comp is dependent on
 */
const runSearch = () => {

    //selectors
    const searchContainer = document.querySelector('#header-search-container');
    const searchControl = document.querySelector('#header-search-control');
    const searchControlBtn = document.querySelector('#header-search-btn');
    const utilNavContainer = document.querySelector('#header-util-navitem-container');
    const searchUtilItemBtn = document.querySelector('#header-util-search-btn');
    const searchModal = document.querySelector('#headerSearchModal');

    //actions
    const detectOutside = (e: Event) => {
        const inside = searchContainer?.contains((e as any)?.target);
        if (!inside) {
            hideSearch(e);
        }
    }
    const hideSearch = (e: Event) => {
        document.removeEventListener("click", detectOutside, false);
        utilNavContainer?.classList.remove('d-none');
        searchContainer?.classList.add('d-none');
        e.stopPropagation();
    }
    const goToSearch = (e: Event) => {
        const path = 'https://www.sevencorners.com/resources/general-search-results?indexCatalogue=general&wordsMode=AllWords&searchQuery=';
        const query = (searchControl as any)?.value;
        window.location.href = `${path}${query}`;
    }
    const gotToSearchOnEnter = (e: Event) => {
        if ((e as any).key === 'Enter') {
            goToSearch(e);
        }
    }

    const focusSearchInput = (e: Event) => {

        if (searchControl !== null) {
            (searchControl as any)?.focus();
        }
    }

    //event listeners
    searchControlBtn?.addEventListener('click', goToSearch);
    searchControl?.addEventListener('keypress', gotToSearchOnEnter);
    searchModal?.addEventListener('shown.bs.modal', focusSearchInput);

};

export const initScripts = () => {
    runSearch();
};