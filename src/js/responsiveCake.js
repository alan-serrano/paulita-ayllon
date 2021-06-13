document.addEventListener('DOMContentLoaded', function responsiveCake() {

    const cake = document.getElementsByClassName('cake')[0];
    const wrapperCake = document.querySelector('.cake-wrapper');

    // media queries
    const xs = window.matchMedia("(max-width: 575px)");
    const sm = window.matchMedia("(min-width: 576px)");
    const md = window.matchMedia("(min-width: 768px)");
    const lg = window.matchMedia("(min-width: 992px)");
    const xl = window.matchMedia("(min-width: 1200px)");
    
    onMatchQuery(xs);
    onMatchQuery(sm);
    onMatchQuery(md);
    onMatchQuery(lg);
    onMatchQuery(xl);

    xs.addListener(onMatchQuery);
    sm.addListener(onMatchQuery);
    md.addListener(onMatchQuery);
    lg.addListener(onMatchQuery);
    xl.addListener(onMatchQuery);

    function onResize() {
        // let desiredWidth = widthScreen*0.3;
        // wrapperCake.style.transform = `scale(${desiredWidth/cake.offsetWidth})`
    }
    
    window.addEventListener('resize', onResize);
    
    function onMatchQuery(mediaQuery) {
        const widthScreen = getWidth();
        let scale;
        if (mediaQuery.matches && mediaQuery.media === '(max-width: 575px)') { // If media query matches
            console.log('(max-width: 575px)')
            scale = 0.6
        }
        
        if (mediaQuery.matches && mediaQuery.media === '(min-width: 576px)') { // If media query matches
            console.log('(min-width: 576px)')
            scale = 0.6
        }
        
        if (mediaQuery.matches && mediaQuery.media === '(min-width: 768px)') { // If media query matches
            console.log('(min-width: 768px)')
            scale = 0.5
        }
        
        if (mediaQuery.matches && mediaQuery.media === '(min-width: 992px)') { // If media query matches
            console.log('(min-width: 992px)')
            scale = 0.4
        }
        
        if (mediaQuery.matches && mediaQuery.media === '(min-width: 1200px)') { // If media query matches
            console.log('(min-width: 1200px)')
            scale = 0.3
        }

        if(scale) {
            let desiredWidth = widthScreen*scale;
            wrapperCake.style.transform = `scale(${desiredWidth/cake.offsetWidth})`
        }
    }
    
    function getWidth () {
        var w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0];
    
        return w.innerWidth || e.clientWidth || g.clientWidth;
    }
});
