document.addEventListener('click', function(e) {
  // If the target is not a link, then we don't want to do anything.
  var match_string = e.target.href
  if (!match_string) {return}

  // If the link is in the "tabmenu" then we don't want to rewrite it.
  // This only really matters for the default "popular" link, because
  // all the other ones would get caught by the next regex step, anyway.
  var tab_menu = e.target.parentNode.parentNode.className
  if (tab_menu.match('tabmenu')) {return}

  match_string = match_string.split('https://www.reddit.com/')[1]

  // This regex matches subreddit strings like "r/something/",
  // but not "r/something/somethingelse/".
  var pattern = /^r\/[^\/]+\/$/
  var result = match_string.match(pattern)
  
  // If the string does look like a link to a subreddit, append "new" to it.
  if (result) {
    e.target.href += 'new'
  }
})

/*
It was suggested that injecting the entire content_script as a <script> tag
would be important in order for it to load properly. But I accidentally
omitted this, and there does not seem to be any adverse effect from this.
*/

/*
var actualCode = 'console.log("Hello.")';
var script = document.createElement('script');
script.appendChild(document.createTextNode(actualCode));
(document.head || document.documentElement).appendChild(script);
script.parentNode.removeChild(script);
*/
