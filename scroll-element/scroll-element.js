function scrollElement() {
    const l = document.querySelector('.left');
    const r = document.querySelector('.right');
    const lc = l.querySelector('.child');
    const rc = r.querySelector('.child');

    let s1 = '';
    let s2 = '';
    for (let i = 0; i < 500; i++) {
        s1 += 'weiqiujuan';
        s2 += 'liuxiaotian';
    }
    lc.innerHTML = s1;
    rc.innerHTML = s2;

    let scale = (rc.offsetHeight - r.offsetHeight) / (lc.offsetHeight - l.offsetHeight);

    l.addEventListener('mouseover', () => {
        currentTab = 1;
    });

    r.addEventListener('mouseover', () => {
        currentTab = 2;
    });

    l.addEventListener('scroll', () => {
        if (currentTab !== 1) return;
        r.scrollTop = l.scrollTop * scale;
    });

    r.addEventListener('scroll', () => {
        if (currentTab !== 2) return;
        l.scrollTop = r.scrollTop / scale;
    });


}

scrollElement();