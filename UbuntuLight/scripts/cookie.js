// Common variabiles
COOKIE_DOMAIN = "ubuntu-nl.org";
COOKIE_PREFIX = "ubuntu-nl_custom_";
COOKIE_ACCESIBILITY_NAME = "accessibility";


// Start Cookie in browser functions
function set_cookie ( name, value, expires, path, domain, secure )
{
  name = COOKIE_PREFIX + name;
  var cookie_string = name + "=" + escape ( value );

  if ( expires ) {
    cookie_string += "; expires=" + expires.toGMTString();
  }
  else {
    var expires = new Date ( 2100, 1, 1); // never expires
    cookie_string += "; expires=" + expires.toGMTString();
  }

  if ( path )
        cookie_string += "; path=" + escape ( path );
  else
        cookie_string += "; path=" + escape ("/")

  if ( domain )
        cookie_string += "; domain=" + escape ( domain );
  else
//        cookie_string += "; domain=" + escape (location.host)
        cookie_string += "; domain=" + escape (COOKIE_DOMAIN);
  
  if ( secure )
        cookie_string += "; secure";
  document.cookie = cookie_string;
}

function delete_cookie ( cookie_name ) {
  cookie_name = COOKIE_PREFIX + cookie_name;
  var cookie_date = new Date ( );  // current date & time
  cookie_date.setTime ( cookie_date.getTime() - 1 );
  document.cookie = cookie_name += "=; expires=" + cookie_date.toGMTString();
}

function get_cookie ( cookie_name ) {
  cookie_name = COOKIE_PREFIX + cookie_name;
  var results = document.cookie.match ( '(^|;) ?' + cookie_name + '=([^;]*)(;|$)' );
  if ( results )
    return ( unescape ( results[2] ) );
  else
    return null;
}
// End Cookie in browser functions
