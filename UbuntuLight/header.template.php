<?php
	echo'
    <div id="header">
        <ul class="menu">
            <li class="first"><a href="http://www.ubuntu.cz" title="Ubuntu.cz">Ubuntu.cz</a></li>
            <li><a href="http://wiki.ubuntu.cz/" title="Wiki návody">Wiki návody</a></li>
            <li><a href="http://forum.ubuntu.cz/" title="Fórum">Fórum</a></li>
            <li><a href="http://blog.ubuntu.cz" title="">Blog</a></li>
            <li class="last"><a href="http://komunita.ubuntu.cz" title="">Komunita</a></li>
        
        <div class="search">
                    <form id="search_form" action="', $scripturl, '?action=search2" method="post" accept-charset="', $context['character_set'], '">
                        <input type="text" name="search" value="" class="input_text" />&nbsp;
                        <input type="submit" name="submit" value="', $txt['search'], '" class="button_submit" />
                        <input type="hidden" name="advanced" value="0" />';

        // Search within current topic?
        if (!empty($context['current_topic']))
            echo '
                        <input type="hidden" name="topic" value="', $context['current_topic'], '" />';
        // If we're on a certain board, limit it to this board ;).
        elseif (!empty($context['current_board']))
            echo '
                        <input type="hidden" name="brd[', $context['current_board'], ']" value="', $context['current_board'], '" />';

         echo '</form>
                </div>
        <div class="logo"> <a href="http://forum.ubuntu.cz" title=""> <img src="', $settings['theme_url'], '/images/logo.png" alt="Ubuntu logo" /></a></div>
        </ul>
    </div>
    
    <div id="menu-header">
        <div id="menu">';
        
        template_menu();
    
    echo '</div></div>'
    ;
?>