export const initSearch = () => {

    //selectors
    const searchContainer = document.querySelector('#header-search-container');
    const searchControl = document.querySelector('#header-search-control');
    const searchControlBtn = document.querySelector('#header-search-btn');
    const utilNavContainer = document.querySelector('#header-util-navitem-container');
    const searchUtilItemBtn = document.querySelector('#header-util-search-btn');

    //actions
    const detectOutside = (e: Event) => {
        const inside = searchContainer?.contains((e as any)?.target);
        if (!inside) {
            hideSearch(e);
        }
    }
    const showSearch = (e: Event) => {
        utilNavContainer?.classList.add('d-none');
        searchContainer?.classList.remove('d-none');
        (searchControl as any)?.focus();
        document.addEventListener("click", detectOutside);
        e.stopPropagation();
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

    //event listeners
    searchUtilItemBtn?.addEventListener('click', showSearch);
    searchControlBtn?.addEventListener('click', goToSearch);
    searchControl?.addEventListener('keypress', gotToSearchOnEnter);

}