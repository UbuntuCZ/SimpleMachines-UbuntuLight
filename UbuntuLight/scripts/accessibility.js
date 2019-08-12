/*
** This file contains function to enable and
** disable Accessibility stylesheet in ubuntu-nl forum
**
** Props to the ubuntu-it community http://ubuntu-it.org/
*/

// This function adds the accessibility css into the Head section
// and set the cookie value ON
function accessibility_set_on() {
    head = document.getElementsByTagName('head')[0];

    link = document.createElement('link');
    link.setAttribute('type','text/css');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('media', 'screen');
    link.setAttribute('href', ACCESSIBILITY_CSS_ABSPATH);

    head.appendChild(link);
    set_cookie('accessibility', 'on');
}

// This function removes the accessibility css from the Head section
// and set the cookie value OFF
function accessibility_set_off() {
    head = document.getElementsByTagName('head')[0];
    links = head.getElementsByTagName('link');
    for (i = 0 ; i < links.length ; i++) {
        link = links[i];
        if (link.getAttribute('type') == 'text/css' &&
            link.getAttribute('href').indexOf(ACCESSIBILITY_CSS_ABSPATH) >= 0 ) {
            head.removeChild(link);
            break;
        }
    }
    set_cookie('accessibility', 'off');
}


function accessibility_toggle() {
    value = get_cookie('accessibility');

    // If accessibility is ON, remove the css stylesheet
    if (value == 'on') {
        accessibility_set_off();
    } else {
        accessibility_set_on();
    }
}

// The main function
function accessibility() {
    value = get_cookie('accessibility');

    // If accessibility is ON, add the css stylesheet
    if (value == 'on') {
        accessibility_set_on();
    }
}

