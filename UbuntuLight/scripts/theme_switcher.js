function theme_init() {
    value = get_cookie('theme');
    if (value === 'kubuntu') {
        switch_kubuntu();
    }
}

function theme_switch(to) {
    if (to === undefined) {
        to = 'ubuntu';
    }
    value = get_cookie('theme');
    if (value !== to) {
        if (to === 'ubuntu') {
            switch_ubuntu();
        } else if (to === 'kubuntu') {
            switch_kubuntu();
        }
        set_cookie('theme', to);
    }
}

function switch_kubuntu() {
    head = document.getElementsByTagName('head')[0];

    link = document.createElement('link');
    link.setAttribute('type','text/css');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('media', 'screen');
    link.setAttribute('href', KUBUNTU_CSS_ABSPATH);

    head.appendChild(link);
    
}

function switch_ubuntu() {
    head = document.getElementsByTagName('head')[0];
    links = head.getElementsByTagName('link');
    for (i = 0; i < links.length; i++) {
        link = links[i];
        if (link.getAttribute('type') === 'text/css' &&
            link.getAttribute('href').indexOf(KUBUNTU_CSS_ABSPATH) >= 0 ) {
            head.removeChild(link);
            break;
        }
    }
}

