/**
 * Minified by jsDelivr using Terser v5.17.1.
 * Original file: /gh/niihen/niihen.github.io@master/niihen-com/safelink/v9_autogenjot.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var 

a,n,t,r,o,u,l,d="",s=0;for(e=Base64._utf8_encode(e);s<e.length;)r=(a=e.charCodeAt(s++))>>2,o=(3&a)<<4|(n=e.charCodeAt(s++))>>4,u=

(15&n)<<2|(t=e.charCodeAt(s++))>>6,l=63&t,isNaN(n)?u=l=64:isNaN(t)&&(l=64),d=d+this._keyStr.charAt(r)+this._keyStr.charAt

(o)+this._keyStr.charAt(u)+this._keyStr.charAt(l);return d},decode:function(e){var a,n,t,r,o,u,l="",d=0;for(e=e.replace(/[^A-Za-

z0-9\+\/\=]/g,"");d<e.length;)a=this._keyStr.indexOf(e.charAt(d++))<<2|(r=this._keyStr.indexOf(e.charAt(d++)))>>4,n=(15&r)<<4|

(o=this._keyStr.indexOf(e.charAt(d++)))>>2,t=(3&o)<<6|(u=this._keyStr.indexOf(e.charAt(d++))),l+=String.fromCharCode(a),64!=o&&(l

+=String.fromCharCode(n)),64!=u&&(l+=String.fromCharCode(t));return l=Base64._utf8_decode(l)},_utf8_encode:function(e)

{e=e.replace(/\r\n/g,"\n");for(var a="",n=0;n<e.length;n++){var t=e.charCodeAt(n);t<128?a+=String.fromCharCode(t):t>127&&t<2048?

(a+=String.fromCharCode(t>>6|192),a+=String.fromCharCode(63&t|128)):(a+=String.fromCharCode(t>>12|224),a+=String.fromCharCode

(t>>6&63|128),a+=String.fromCharCode(63&t|128))}return a},_utf8_decode:function(e){for(var a="",n=0,t=c1=c2=0;n<e.length;)

(t=e.charCodeAt(n))<128?(a+=String.fromCharCode(t),n++):t>191&&t<224?(c2=e.charCodeAt(n+1),a+=String.fromCharCode((31&t)<<6|

63&c2),n+=2):(c2=e.charCodeAt(n+1),c3=e.charCodeAt(n+2),a+=String.fromCharCode((15&t)<<12|(63&c2)<<6|63&c3),n+=3);return 

a}},buatmakan="https://"+sldm+"/p/"+slpg+".html",harta=window.location.href,karun1=buatmakan+"?m=1&download=",karun2=buatmakan+"?

m=1&d0wnload=",karun3=buatmakan+"?m=1&downl0ad=",karun4=buatmakan+"?m=1&downlo4d=",karun5=buatmakan+"?

m=1&downl04d=",karun6=buatmakan+"?m=1&d0wnl04d=",karung1=harta.replace(karun1,""),karung2=harta.replace

(karun2,""),karung3=harta.replace(karun3,""),karung4=harta.replace(karun4,""),karung5=harta.replace

(karun5,""),karung6=harta.replace

(karun6,""),sak1=karun1+karung1,sak2=karun2+karung2,sak3=karun3+karung3,sak4=karun4+karung4,sak5=karun5+karung5,sak6=karun6+karung

6;function getUrlVars(){var e={};window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,(function(a,n,t){e[n]=t}));return e}

function getUrlParam(e,a){var n=a;return window.location.href.indexOf(e)>-1&&(n=getUrlVars()[e]),n}var beras1=getUrlParam

("download",null),beras2=getUrlParam("d0wnload",null),beras3=getUrlParam("downl0ad",null),beras4=getUrlParam

("downlo4d",null),beras5=getUrlParam("downl04d",null);if(harta==buatmakan)window.location="/";else if(harta==sak1){var 

seconds=tunggudetik;function countdown(){(seconds-=1)<0?(document.querySelector

(".pesanlink1hidden").style.display="unset",document.querySelector(".pesanlink1").style.display="none",document.querySelector

(".ngebut").style.display="none",document.querySelector(".pembukalink1").style.display="unset"):(document.getElementById

("countdown").innerHTML=seconds,window.setTimeout("countdown()",1e3),document.querySelector

(".macemanapula").style.display="unset")}function bukase(){document.querySelector

(".link1").style.display="unset",document.querySelector(".pembukalink1").style.display="none"}function bukases()

{document.querySelector(".link2").style.display="unset",document.querySelector(".pembukalink2").style.display="none"}function 

gakbetah(){window.open(karun2+karung1)}countdown()}else if(harta==sak2){function bukases(){document.querySelector

(".link2").style.display="unset",document.querySelector(".pembukalink2").style.display="none"}function gakbetah(){window.open

(karun3+karung2)}$("#ad").each((function(){$(this).attr("href",tautklan2)})),document.querySelector

(".macemanapula").style.display="unset",document.querySelector(".atas").style.display="none",document.querySelector

(".ke2").style.display="unset",document.querySelector(".lampuijo").style.display="none"}else if(harta==sak3){function bukases()

{document.querySelector(".link2").style.display="unset",document.querySelector(".pembukalink2").style.display="none"}function 

gakbetah(){window.open(karun4+karung3)}$("#ad").each((function(){$(this).attr("href",tautklan3)})),document.querySelector

(".macemanapula").style.display="unset",document.querySelector(".atas").style.display="none",document.querySelector

(".ke3").style.display="unset",document.querySelector(".lampuijo").style.display="none"}else if(harta==sak4){function bukases()

{document.querySelector(".link2").style.display="unset",document.querySelector(".pembukalink2").style.display="none"}function 

gakbetah(){window.open(karun5+karung4)}$("#ad").each((function(){$(this).attr("href",tautklan4)})),document.querySelector

(".macemanapula").style.display="unset",document.querySelector(".atas").style.display="none",document.querySelector

(".ke4").style.display="unset",document.querySelector(".lampuijo").style.display="none"}else if(harta==sak5){function bukases()

{document.querySelector(".link2").style.display="unset",document.querySelector

(".pembukalink2").style.display="none"}$("#ad").each((function(){$(this).attr("href",tautklan5)})),document.querySelector

(".macemanapula").style.display="unset",document.querySelector(".atas").style.display="none",document.querySelector

(".ke5").style.display="unset",document.querySelector(".lampuijo").style.display="none";var nasi=Base64.decode

(beras5),tautan=Base64.decode(nasi);function gakbetah(){window.open(tautan)}}var kontlink=Base64.decode

(beras1),kontlinked=Base64.decode(kontlink).replace("http://","").replace("https://",""),kontlinkedfix=encodeURIComponent

(kontlinked);function betah(){window.open(""+kontlinked)}
//# sourceMappingURL=/sm/a2068577572c68bc18a31a0af5fbb0d5bafb0778477afac94c6133d9eccdfe4e.map
