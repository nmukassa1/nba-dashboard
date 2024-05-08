function useScrollToTop() {

    function scrollToTop(){
        const main = document.querySelector('main');
        main.scrollTo(0,0)
    }

    return { scrollToTop };
}

export default useScrollToTop;