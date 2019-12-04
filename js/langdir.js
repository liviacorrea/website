/*
Browser Language Redirect script- By JavaScript Kit
For this and over 400+ free scripts, visit http://www.javascriptkit.com
This notice must stay intact
*/

//Enter ISO 639-2 letter Language codes to detect (see: http://www.w3.org/WAI/ER/IG/ert/iso639.htm):
var langcodes=new Array("pt", "default")

//Enter corresponding redirect URLs (last one is for default URL):
var langredirects=new Array("index.html", "index-en.html")

var languageinfo=navigator.language? navigator.language : navigator.userLanguage
var gotodefault=1

function redirectpage(dest){
if (window.location.replace)
window.location.replace(dest)
else
window.location=dest
}

for (i=0;i<langcodes.length-1;i++){
if (languageinfo.substr(0,2)==langcodes[i]){
redirectpage(langredirects[i])
gotodefault=0
break
}
}

if (gotodefault)
redirectpage(langredirects[langcodes.length-1])



document.getElementById("pteste").innerHTML =  navigator.language.substr(0,2);