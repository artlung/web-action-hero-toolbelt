/*! URI.js v1.7.2 http://medialize.github.com/URI.js/ */
/* build contains: IPv6.js, punycode.js, SecondLevelDomains.js, URI.js, URITemplate.js */
(function(){("undefined"!==typeof module&&module.exports?module.exports:window).IPv6={best:function(d){var d=d.toLowerCase().split(":"),j=d.length,h=8;""===d[0]&&""===d[1]&&""===d[2]?(d.shift(),d.shift()):""===d[0]&&""===d[1]?d.shift():""===d[j-1]&&""===d[j-2]&&d.pop();j=d.length;-1!==d[j-1].indexOf(".")&&(h=7);var i;for(i=0;i<j&&""!==d[i];i++);if(i<h)for(d.splice(i,1,"0000");d.length<h;)d.splice(i,0,"0000");for(i=0;i<h;i++){for(var j=d[i].split(""),f=0;3>f;f++)if("0"===j[0]&&1<j.length)j.splice(0,
1);else break;d[i]=j.join("")}var j=-1,r=f=0,t=-1,g=!1;for(i=0;i<h;i++)g?"0"===d[i]?r+=1:(g=!1,r>f&&(j=t,f=r)):"0"==d[i]&&(g=!0,t=i,r=1);r>f&&(j=t,f=r);1<f&&d.splice(j,f,"");j=d.length;h="";""===d[0]&&(beststr=":");for(i=0;i<j;i++){h+=d[i];if(i===j-1)break;h+=":"}""===d[j-1]&&(h+=":");return h}}})();
(function(d){function j(a){throw RangeError(B[a]);}function h(a,b){for(var e=a.length;e--;)a[e]=b(a[e]);return a}function i(a){for(var b=[],e=0,c=a.length,k,d;e<c;)k=a.charCodeAt(e++),55296==(k&63488)&&(d=a.charCodeAt(e++),(55296!=(k&64512)||56320!=(d&64512))&&j("ucs2decode"),k=((k&1023)<<10)+(d&1023)+65536),b.push(k);return b}function f(a){return h(a,function(a){var b="";55296==(a&63488)&&j("ucs2encode");65535<a&&(a-=65536,b+=y(a>>>10&1023|55296),a=56320|a&1023);return b+=y(a)}).join("")}function r(e,
c,k){for(var d=0,e=k?v(e/b):e>>1,e=e+v(e/c);e>w*q>>1;d+=n)e=v(e/w);return v(d+(w+1)*e/(e+a))}function t(a){var b=[],c=a.length,d,g=0,s=k,i=e,m,h,l,p,u;m=a.lastIndexOf(A);0>m&&(m=0);for(h=0;h<m;++h)128<=a.charCodeAt(h)&&j("not-basic"),b.push(a.charCodeAt(h));for(m=0<m?m+1:0;m<c;){h=g;d=1;for(l=n;;l+=n){m>=c&&j("invalid-input");p=a.charCodeAt(m++);p=10>p-48?p-22:26>p-65?p-65:26>p-97?p-97:n;(p>=n||p>v((x-g)/d))&&j("overflow");g+=p*d;u=l<=i?o:l>=i+q?q:l-i;if(p<u)break;p=n-u;d>v(x/p)&&j("overflow");d*=
p}d=b.length+1;i=r(g-h,d,0==h);v(g/d)>x-s&&j("overflow");s+=v(g/d);g%=d;b.splice(g++,0,s)}return f(b)}function g(a){var b,c,d,g,f,s,m,h,l,p=[],u,t,w,a=i(a);u=a.length;b=k;c=0;f=e;for(s=0;s<u;++s)l=a[s],128>l&&p.push(y(l));for((d=g=p.length)&&p.push(A);d<u;){m=x;for(s=0;s<u;++s)l=a[s],l>=b&&l<m&&(m=l);t=d+1;m-b>v((x-c)/t)&&j("overflow");c+=(m-b)*t;b=m;for(s=0;s<u;++s)if(l=a[s],l<b&&++c>x&&j("overflow"),l==b){h=c;for(m=n;;m+=n){l=m<=f?o:m>=f+q?q:m-f;if(h<l)break;w=h-l;h=n-l;p.push(y(l+w%h+22+75*(26>
l+w%h)-0));h=v(w/h)}p.push(y(h+22+75*(26>h)-0));f=r(c,t,d==g);c=0;++d}++c;++b}return p.join("")}var c,m="function"==typeof define&&"object"==typeof define.amd&&define.amd&&define,l="object"==typeof exports&&exports,p="object"==typeof module&&module,x=2147483647,n=36,o=1,q=26,a=38,b=700,e=72,k=128,A="-",s=/[^ -~]/,u=/^xn--/,B={overflow:"Overflow: input needs wider integers to process.",ucs2decode:"UCS-2(decode): illegal sequence",ucs2encode:"UCS-2(encode): illegal value","not-basic":"Illegal input >= 0x80 (not a basic code point)",
"invalid-input":"Invalid input"},w=n-o,v=Math.floor,y=String.fromCharCode,z;c={version:"0.3.0",ucs2:{decode:i,encode:f},decode:t,encode:g,toASCII:function(a){return h(a.split("."),function(a){return s.test(a)?"xn--"+g(a):a}).join(".")},toUnicode:function(a){return h(a.split("."),function(a){return u.test(a)?t(a.slice(4).toLowerCase()):a}).join(".")}};if(l)if(p&&p.exports==l)p.exports=c;else for(z in c)c.hasOwnProperty(z)&&(l[z]=c[z]);else m?define("punycode",c):d.punycode=c})(this);
(function(){var d={list:{ac:"com|gov|mil|net|org",ae:"ac|co|gov|mil|name|net|org|pro|sch",af:"com|edu|gov|net|org",al:"com|edu|gov|mil|net|org",ao:"co|ed|gv|it|og|pb",ar:"com|edu|gob|gov|int|mil|net|org|tur",at:"ac|co|gv|or",au:"asn|com|csiro|edu|gov|id|net|org",ba:"co|com|edu|gov|mil|net|org|rs|unbi|unmo|unsa|untz|unze",bb:"biz|co|com|edu|gov|info|net|org|store|tv",bh:"biz|cc|com|edu|gov|info|net|org",bn:"com|edu|gov|net|org",bo:"com|edu|gob|gov|int|mil|net|org|tv",br:"adm|adv|agr|am|arq|art|ato|b|bio|blog|bmd|cim|cng|cnt|com|coop|ecn|edu|eng|esp|etc|eti|far|flog|fm|fnd|fot|fst|g12|ggf|gov|imb|ind|inf|jor|jus|lel|mat|med|mil|mus|net|nom|not|ntr|odo|org|ppg|pro|psc|psi|qsl|rec|slg|srv|tmp|trd|tur|tv|vet|vlog|wiki|zlg",
bs:"com|edu|gov|net|org",bz:"du|et|om|ov|rg",ca:"ab|bc|mb|nb|nf|nl|ns|nt|nu|on|pe|qc|sk|yk",ck:"biz|co|edu|gen|gov|info|net|org",cn:"ac|ah|bj|com|cq|edu|fj|gd|gov|gs|gx|gz|ha|hb|he|hi|hl|hn|jl|js|jx|ln|mil|net|nm|nx|org|qh|sc|sd|sh|sn|sx|tj|tw|xj|xz|yn|zj",co:"com|edu|gov|mil|net|nom|org",cr:"ac|c|co|ed|fi|go|or|sa",cy:"ac|biz|com|ekloges|gov|ltd|name|net|org|parliament|press|pro|tm","do":"art|com|edu|gob|gov|mil|net|org|sld|web",dz:"art|asso|com|edu|gov|net|org|pol",ec:"com|edu|fin|gov|info|med|mil|net|org|pro",
eg:"com|edu|eun|gov|mil|name|net|org|sci",er:"com|edu|gov|ind|mil|net|org|rochest|w",es:"com|edu|gob|nom|org",et:"biz|com|edu|gov|info|name|net|org",fj:"ac|biz|com|info|mil|name|net|org|pro",fk:"ac|co|gov|net|nom|org",fr:"asso|com|f|gouv|nom|prd|presse|tm",gg:"co|net|org",gh:"com|edu|gov|mil|org",gn:"ac|com|gov|net|org",gr:"com|edu|gov|mil|net|org",gt:"com|edu|gob|ind|mil|net|org",gu:"com|edu|gov|net|org",hk:"com|edu|gov|idv|net|org",id:"ac|co|go|mil|net|or|sch|web",il:"ac|co|gov|idf|k12|muni|net|org",
"in":"ac|co|edu|ernet|firm|gen|gov|i|ind|mil|net|nic|org|res",iq:"com|edu|gov|i|mil|net|org",ir:"ac|co|dnssec|gov|i|id|net|org|sch",it:"edu|gov",je:"co|net|org",jo:"com|edu|gov|mil|name|net|org|sch",jp:"ac|ad|co|ed|go|gr|lg|ne|or",ke:"ac|co|go|info|me|mobi|ne|or|sc",kh:"com|edu|gov|mil|net|org|per",ki:"biz|com|de|edu|gov|info|mob|net|org|tel",km:"asso|com|coop|edu|gouv|k|medecin|mil|nom|notaires|pharmaciens|presse|tm|veterinaire",kn:"edu|gov|net|org",kr:"ac|busan|chungbuk|chungnam|co|daegu|daejeon|es|gangwon|go|gwangju|gyeongbuk|gyeonggi|gyeongnam|hs|incheon|jeju|jeonbuk|jeonnam|k|kg|mil|ms|ne|or|pe|re|sc|seoul|ulsan",
kw:"com|edu|gov|net|org",ky:"com|edu|gov|net|org",kz:"com|edu|gov|mil|net|org",lb:"com|edu|gov|net|org",lk:"assn|com|edu|gov|grp|hotel|int|ltd|net|ngo|org|sch|soc|web",lr:"com|edu|gov|net|org",lv:"asn|com|conf|edu|gov|id|mil|net|org",ly:"com|edu|gov|id|med|net|org|plc|sch",ma:"ac|co|gov|m|net|org|press",mc:"asso|tm",me:"ac|co|edu|gov|its|net|org|priv",mg:"com|edu|gov|mil|nom|org|prd|tm",mk:"com|edu|gov|inf|name|net|org|pro",ml:"com|edu|gov|net|org|presse",mn:"edu|gov|org",mo:"com|edu|gov|net|org",
mt:"com|edu|gov|net|org",mv:"aero|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro",mw:"ac|co|com|coop|edu|gov|int|museum|net|org",mx:"com|edu|gob|net|org",my:"com|edu|gov|mil|name|net|org|sch",nf:"arts|com|firm|info|net|other|per|rec|store|web",ng:"biz|com|edu|gov|mil|mobi|name|net|org|sch",ni:"ac|co|com|edu|gob|mil|net|nom|org",np:"com|edu|gov|mil|net|org",nr:"biz|com|edu|gov|info|net|org",om:"ac|biz|co|com|edu|gov|med|mil|museum|net|org|pro|sch",pe:"com|edu|gob|mil|net|nom|org|sld",ph:"com|edu|gov|i|mil|net|ngo|org",
pk:"biz|com|edu|fam|gob|gok|gon|gop|gos|gov|net|org|web",pl:"art|bialystok|biz|com|edu|gda|gdansk|gorzow|gov|info|katowice|krakow|lodz|lublin|mil|net|ngo|olsztyn|org|poznan|pwr|radom|slupsk|szczecin|torun|warszawa|waw|wroc|wroclaw|zgora",pr:"ac|biz|com|edu|est|gov|info|isla|name|net|org|pro|prof",ps:"com|edu|gov|net|org|plo|sec",pw:"belau|co|ed|go|ne|or",ro:"arts|com|firm|info|nom|nt|org|rec|store|tm|www",rs:"ac|co|edu|gov|in|org",sb:"com|edu|gov|net|org",sc:"com|edu|gov|net|org",sh:"co|com|edu|gov|net|nom|org",
sl:"com|edu|gov|net|org",st:"co|com|consulado|edu|embaixada|gov|mil|net|org|principe|saotome|store",sv:"com|edu|gob|org|red",sz:"ac|co|org",tr:"av|bbs|bel|biz|com|dr|edu|gen|gov|info|k12|name|net|org|pol|tel|tsk|tv|web",tt:"aero|biz|cat|co|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel",tw:"club|com|ebiz|edu|game|gov|idv|mil|net|org",mu:"ac|co|com|gov|net|or|org",mz:"ac|co|edu|gov|org",na:"co|com",nz:"ac|co|cri|geek|gen|govt|health|iwi|maori|mil|net|org|parliament|school",
pa:"abo|ac|com|edu|gob|ing|med|net|nom|org|sld",pt:"com|edu|gov|int|net|nome|org|publ",py:"com|edu|gov|mil|net|org",qa:"com|edu|gov|mil|net|org",re:"asso|com|nom",ru:"ac|adygeya|altai|amur|arkhangelsk|astrakhan|bashkiria|belgorod|bir|bryansk|buryatia|cbg|chel|chelyabinsk|chita|chukotka|chuvashia|com|dagestan|e-burg|edu|gov|grozny|int|irkutsk|ivanovo|izhevsk|jar|joshkar-ola|kalmykia|kaluga|kamchatka|karelia|kazan|kchr|kemerovo|khabarovsk|khakassia|khv|kirov|koenig|komi|kostroma|kranoyarsk|kuban|kurgan|kursk|lipetsk|magadan|mari|mari-el|marine|mil|mordovia|mosreg|msk|murmansk|nalchik|net|nnov|nov|novosibirsk|nsk|omsk|orenburg|org|oryol|penza|perm|pp|pskov|ptz|rnd|ryazan|sakhalin|samara|saratov|simbirsk|smolensk|spb|stavropol|stv|surgut|tambov|tatarstan|tom|tomsk|tsaritsyn|tsk|tula|tuva|tver|tyumen|udm|udmurtia|ulan-ude|vladikavkaz|vladimir|vladivostok|volgograd|vologda|voronezh|vrn|vyatka|yakutia|yamal|yekaterinburg|yuzhno-sakhalinsk",
rw:"ac|co|com|edu|gouv|gov|int|mil|net",sa:"com|edu|gov|med|net|org|pub|sch",sd:"com|edu|gov|info|med|net|org|tv",se:"a|ac|b|bd|c|d|e|f|g|h|i|k|l|m|n|o|org|p|parti|pp|press|r|s|t|tm|u|w|x|y|z",sg:"com|edu|gov|idn|net|org|per",sn:"art|com|edu|gouv|org|perso|univ",sy:"com|edu|gov|mil|net|news|org",th:"ac|co|go|in|mi|net|or",tj:"ac|biz|co|com|edu|go|gov|info|int|mil|name|net|nic|org|test|web",tn:"agrinet|com|defense|edunet|ens|fin|gov|ind|info|intl|mincom|nat|net|org|perso|rnrt|rns|rnu|tourism",tz:"ac|co|go|ne|or",
ua:"biz|cherkassy|chernigov|chernovtsy|ck|cn|co|com|crimea|cv|dn|dnepropetrovsk|donetsk|dp|edu|gov|if|in|ivano-frankivsk|kh|kharkov|kherson|khmelnitskiy|kiev|kirovograd|km|kr|ks|kv|lg|lugansk|lutsk|lviv|me|mk|net|nikolaev|od|odessa|org|pl|poltava|pp|rovno|rv|sebastopol|sumy|te|ternopil|uzhgorod|vinnica|vn|zaporizhzhe|zhitomir|zp|zt",ug:"ac|co|go|ne|or|org|sc",uk:"ac|bl|british-library|co|cym|gov|govt|icnet|jet|lea|ltd|me|mil|mod|national-library-scotland|nel|net|nhs|nic|nls|org|orgn|parliament|plc|police|sch|scot|soc",
us:"dni|fed|isa|kids|nsn",uy:"com|edu|gub|mil|net|org",ve:"co|com|edu|gob|info|mil|net|org|web",vi:"co|com|k12|net|org",vn:"ac|biz|com|edu|gov|health|info|int|name|net|org|pro",ye:"co|com|gov|ltd|me|net|org|plc",yu:"ac|co|edu|gov|org",za:"ac|agric|alt|bourse|city|co|cybernet|db|edu|gov|grondar|iaccess|imt|inca|landesign|law|mil|net|ngo|nis|nom|olivetti|org|pix|school|tm|web",zm:"ac|co|com|edu|gov|net|org|sch"},has_expression:null,is_expression:null,has:function(j){return!!j.match(d.has_expression)},
is:function(j){return!!j.match(d.is_expression)},get:function(j){return(j=j.match(d.has_expression))&&j[1]||null},init:function(){var j="",h;for(h in d.list)Object.prototype.hasOwnProperty.call(d.list,h)&&(j+="|("+("("+d.list[h]+")."+h)+")");d.has_expression=RegExp("\\.("+j.substr(1)+")$","i");d.is_expression=RegExp("^("+j.substr(1)+")$","i")}};d.init();"undefined"!==typeof module&&module.exports?module.exports=d:window.SecondLevelDomains=d})();
(function(d){function j(a){return a.replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$1")}function h(a){return"[object Array]"===String(Object.prototype.toString.call(a))}function i(a){return encodeURIComponent(a).replace(/[!'()*]/g,escape)}var f="undefined"!==typeof module&&module.exports,r=f?require("./punycode"):window.punycode,t=f?require("./IPv6"):window.IPv6,g=f?require("./SecondLevelDomains"):window.SecondLevelDomains,c=function(a,b){if(!(this instanceof c))return new c(a,b);a===d&&(a="undefined"!==
typeof location?location.href+"":"");this.href(a);return b!==d?this.absoluteTo(b):this},f=c.prototype;c.idn_expression=/[^a-z0-9\.-]/i;c.punycode_expression=/(xn--)/i;c.ip4_expression=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;c.ip6_expression=/^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;
c.find_uri_expression=/\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?\u00ab\u00bb\u201c\u201d\u2018\u2019]))/ig;c.defaultPorts={http:"80",https:"443",ftp:"21"};c.invalid_hostname_characters=/[^a-zA-Z0-9\.-]/;c.encode=i;c.decode=decodeURIComponent;c.iso8859=function(){c.encode=escape;c.decode=unescape};c.unicode=function(){c.encode=i;c.decode=decodeURIComponent};
c.characters={pathname:{encode:{expression:/%(24|26|2B|2C|3B|3D|3A|40)/ig,map:{"%24":"$","%26":"&","%2B":"+","%2C":",","%3B":";","%3D":"=","%3A":":","%40":"@"}},decode:{expression:/[\/\?#]/g,map:{"/":"%2F","?":"%3F","#":"%23"}}},reserved:{encode:{expression:/%(21|23|24|26|27|28|29|2A|2B|2C|2F|3A|3B|3D|3F|40|5B|5D)/ig,map:{"%3A":":","%2F":"/","%3F":"?","%23":"#","%5B":"[","%5D":"]","%40":"@","%21":"!","%24":"$","%26":"&","%27":"'","%28":"(","%29":")","%2A":"*","%2B":"+","%2C":",","%3B":";","%3D":"="}}}};
c.encodeQuery=function(a){return c.encode(a+"").replace(/%20/g,"+")};c.decodeQuery=function(a){return c.decode((a+"").replace(/\+/g,"%20"))};c.recodePath=function(a){for(var a=(a+"").split("/"),b=0,e=a.length;b<e;b++)a[b]=c.encodePathSegment(c.decode(a[b]));return a.join("/")};c.decodePath=function(a){for(var a=(a+"").split("/"),b=0,e=a.length;b<e;b++)a[b]=c.decodePathSegment(a[b]);return a.join("/")};var m={encode:"encode",decode:"decode"},l,p=function(a,b){return function(e){return c[b](e+"").replace(c.characters[a][b].expression,
function(e){return c.characters[a][b].map[e]})}};for(l in m)c[l+"PathSegment"]=p("pathname",m[l]);c.encodeReserved=p("reserved","encode");c.parse=function(a){var b,e={};b=a.indexOf("#");-1<b&&(e.fragment=a.substring(b+1)||null,a=a.substring(0,b));b=a.indexOf("?");-1<b&&(e.query=a.substring(b+1)||null,a=a.substring(0,b));"//"===a.substring(0,2)?(e.protocol="",a=a.substring(2),a=c.parseAuthority(a,e)):(b=a.indexOf(":"),-1<b&&(e.protocol=a.substring(0,b),"//"===a.substring(b+1,b+3)?(a=a.substring(b+
3),a=c.parseAuthority(a,e)):(a=a.substring(b+1),e.urn=!0)));e.path=a;return e};c.parseHost=function(a,b){var e=a.indexOf("/"),c;-1===e&&(e=a.length);"["===a[0]?(c=a.indexOf("]"),b.hostname=a.substring(1,c)||null,b.port=a.substring(c+2,e)||null):a.indexOf(":")!==a.lastIndexOf(":")?(b.hostname=a.substring(0,e)||null,b.port=null):(c=a.substring(0,e).split(":"),b.hostname=c[0]||null,b.port=c[1]||null);b.hostname&&"/"!==a.substring(e)[0]&&(e++,a="/"+a);return a.substring(e)||"/"};c.parseAuthority=function(a,
b){a=c.parseUserinfo(a,b);return c.parseHost(a,b)};c.parseUserinfo=function(a,b){var e=a.indexOf("@"),k=a.indexOf("/");-1<e&&(-1===k||e<k)?(k=a.substring(0,e).split(":"),b.username=k[0]?c.decode(k[0]):null,b.password=k[1]?c.decode(k[1]):null,a=a.substring(e+1)):(b.username=null,b.password=null);return a};c.parseQuery=function(a){if(!a)return{};a=a.replace(/&+/g,"&").replace(/^\?*&*|&+$/g,"");if(!a)return{};for(var b={},a=a.split("&"),e=a.length,k=0;k<e;k++){var d=a[k].split("="),g=c.decodeQuery(d.shift()),
d=d.length?c.decodeQuery(d.join("=")):null;b[g]?("string"===typeof b[g]&&(b[g]=[b[g]]),b[g].push(d)):b[g]=d}return b};c.build=function(a){var b="";a.protocol&&(b+=a.protocol+":");if(!a.urn&&(b||a.hostname))b+="//";b+=c.buildAuthority(a)||"";"string"===typeof a.path&&("/"!==a.path[0]&&"string"===typeof a.hostname&&(b+="/"),b+=a.path);"string"===typeof a.query&&(b+="?"+a.query);"string"===typeof a.fragment&&(b+="#"+a.fragment);return b};c.buildHost=function(a){var b="";if(a.hostname)c.ip6_expression.test(a.hostname)?
b=a.port?b+("["+a.hostname+"]:"+a.port):b+a.hostname:(b+=a.hostname,a.port&&(b+=":"+a.port));else return"";return b};c.buildAuthority=function(a){return c.buildUserinfo(a)+c.buildHost(a)};c.buildUserinfo=function(a){var b="";a.username&&(b+=c.encode(a.username),a.password&&(b+=":"+c.encode(a.password)),b+="@");return b};c.buildQuery=function(a,b){var e="",k;for(k in a)if(Object.hasOwnProperty.call(a,k)&&k)if(h(a[k]))for(var g={},f=0,m=a[k].length;f<m;f++)a[k][f]!==d&&g[a[k][f]+""]===d&&(e+="&"+c.buildQueryParameter(k,
a[k][f]),!0!==b&&(g[a[k][f]+""]=!0));else a[k]!==d&&(e+="&"+c.buildQueryParameter(k,a[k]));return e.substring(1)};c.buildQueryParameter=function(a,b){return c.encodeQuery(a)+(null!==b?"="+c.encodeQuery(b):"")};c.addQuery=function(a,b,e){if("object"===typeof b)for(var k in b)Object.prototype.hasOwnProperty.call(b,k)&&c.addQuery(a,k,b[k]);else if("string"===typeof b)a[b]===d?a[b]=e:("string"===typeof a[b]&&(a[b]=[a[b]]),h(e)||(e=[e]),a[b]=a[b].concat(e));else throw new TypeError("URI.addQuery() accepts an object, string as the name parameter");
};c.removeQuery=function(a,b,e){if(h(b))for(var e=0,k=b.length;e<k;e++)a[b[e]]=d;else if("object"===typeof b)for(k in b)Object.prototype.hasOwnProperty.call(b,k)&&c.removeQuery(a,k,b[k]);else if("string"===typeof b)if(e!==d)if(a[b]===e)a[b]=d;else{if(h(a[b])){var k=a[b],g={},f,m;if(h(e)){f=0;for(m=e.length;f<m;f++)g[e[f]]=!0}else g[e]=!0;f=0;for(m=k.length;f<m;f++)g[k[f]]!==d&&(k.splice(f,1),m--,f--);a[b]=k}}else a[b]=d;else throw new TypeError("URI.addQuery() accepts an object, string as the first parameter");
};c.commonPath=function(a,b){var e=Math.min(a.length,b.length),c;for(c=0;c<e;c++)if(a[c]!==b[c]){c--;break}if(1>c)return a[0]===b[0]&&"/"===a[0]?"/":"";"/"!==a[c]&&(c=a.substring(0,c).lastIndexOf("/"));return a.substring(0,c+1)};c.withinString=function(a,b){return a.replace(c.find_uri_expression,b)};c.ensureValidHostname=function(a){if(a.match(c.invalid_hostname_characters)){if(!r)throw new TypeError("Hostname '"+a+"' contains characters other than [A-Z0-9.-] and Punycode.js is not available");if(r.toASCII(a).match(c.invalid_hostname_characters))throw new TypeError("Hostname '"+
a+"' contains characters other than [A-Z0-9.-]");}};f.build=function(a){if(!0===a)this._deferred_build=!0;else if(a===d||this._deferred_build)this._string=c.build(this._parts),this._deferred_build=!1;return this};f.clone=function(){return new c(this)};f.toString=function(){return this.build(!1)._string};f.valueOf=function(){return this.toString()};m={protocol:"protocol",username:"username",password:"password",hostname:"hostname",port:"port"};p=function(a){return function(b,e){if(b===d)return this._parts[a]||
"";this._parts[a]=b;this.build(!e);return this}};for(l in m)f[l]=p(m[l]);m={query:"?",fragment:"#"};p=function(a,b){return function(e,c){if(e===d)return this._parts[a]||"";null!==e&&(e+="",e[0]===b&&(e=e.substring(1)));this._parts[a]=e;this.build(!c);return this}};for(l in m)f[l]=p(l,m[l]);m={search:["?","query"],hash:["#","fragment"]};p=function(a,b){return function(c,k){var d=this[a](c,k);return"string"===typeof d&&d.length?b+d:d}};for(l in m)f[l]=p(m[l][1],m[l][0]);f.pathname=function(a,b){if(a===
d||!0===a){var e=this._parts.path||(this._parts.urn?"":"/");return a?c.decodePath(e):e}this._parts.path=a?c.recodePath(a):"/";this.build(!b);return this};f.path=f.pathname;f.href=function(a,b){if(a===d)return this.toString();this._string="";this._parts={protocol:null,username:null,password:null,hostname:null,urn:null,port:null,path:null,query:null,fragment:null};var e=a instanceof c,k="object"===typeof a&&(a.hostname||a.path),g;if("string"===typeof a)this._parts=c.parse(a);else if(e||k)for(g in e=
e?a._parts:a,e)Object.hasOwnProperty.call(this._parts,g)&&(this._parts[g]=e[g]);else throw new TypeError("invalid input");this.build(!b);return this};f.is=function(a){var b=!1,e=!1,d=!1,f=!1,m=!1,l=!1,h=!1,i=!this._parts.urn;this._parts.hostname&&(i=!1,e=c.ip4_expression.test(this._parts.hostname),d=c.ip6_expression.test(this._parts.hostname),b=e||d,m=(f=!b)&&g&&g.has(this._parts.hostname),l=f&&c.idn_expression.test(this._parts.hostname),h=f&&c.punycode_expression.test(this._parts.hostname));switch(a.toLowerCase()){case "relative":return i;
case "absolute":return!i;case "domain":case "name":return f;case "sld":return m;case "ip":return b;case "ip4":case "ipv4":case "inet4":return e;case "ip6":case "ipv6":case "inet6":return d;case "idn":return l;case "url":return!this._parts.urn;case "urn":return!!this._parts.urn;case "punycode":return h}return null};var x=f.protocol,n=f.port,o=f.hostname;f.protocol=function(a,b){if(a!==d&&a&&(a=a.replace(/:(\/\/)?$/,""),a.match(/[^a-zA-z0-9\.+-]/)))throw new TypeError("Protocol '"+a+"' contains characters other than [A-Z0-9.+-]");
return x.call(this,a,b)};f.scheme=f.protocol;f.port=function(a,b){if(this._parts.urn)return a===d?"":this;if(a!==d&&(0===a&&(a=null),a&&(a+="",":"===a[0]&&(a=a.substring(1)),a.match(/[^0-9]/))))throw new TypeError("Port '"+a+"' contains characters other than [0-9]");return n.call(this,a,b)};f.hostname=function(a,b){if(this._parts.urn)return a===d?"":this;if(a!==d){var e={};c.parseHost(a,e);a=e.hostname}return o.call(this,a,b)};f.host=function(a,b){if(this._parts.urn)return a===d?"":this;if(a===d)return this._parts.hostname?
c.buildHost(this._parts):"";c.parseHost(a,this._parts);this.build(!b);return this};f.authority=function(a,b){if(this._parts.urn)return a===d?"":this;if(a===d)return this._parts.hostname?c.buildAuthority(this._parts):"";c.parseAuthority(a,this._parts);this.build(!b);return this};f.userinfo=function(a,b){if(this._parts.urn)return a===d?"":this;if(a===d){if(!this._parts.username)return"";var e=c.buildUserinfo(this._parts);return e.substring(0,e.length-1)}"@"!==a[a.length-1]&&(a+="@");c.parseUserinfo(a,
this._parts);this.build(!b);return this};f.subdomain=function(a,b){if(this._parts.urn)return a===d?"":this;if(a===d){if(!this._parts.hostname||this.is("IP"))return"";var e=this._parts.hostname.length-this.domain().length-1;return this._parts.hostname.substring(0,e)||""}e=this._parts.hostname.length-this.domain().length;e=this._parts.hostname.substring(0,e);e=RegExp("^"+j(e));a&&"."!==a[a.length-1]&&(a+=".");a&&c.ensureValidHostname(a);this._parts.hostname=this._parts.hostname.replace(e,a);this.build(!b);
return this};f.domain=function(a,b){if(this._parts.urn)return a===d?"":this;"boolean"===typeof a&&(b=a,a=d);if(a===d){if(!this._parts.hostname||this.is("IP"))return"";var e=this._parts.hostname.match(/\./g);if(e&&2>e.length)return this._parts.hostname;e=this._parts.hostname.length-this.tld(b).length-1;e=this._parts.hostname.lastIndexOf(".",e-1)+1;return this._parts.hostname.substring(e)||""}if(!a)throw new TypeError("cannot set domain empty");c.ensureValidHostname(a);!this._parts.hostname||this.is("IP")?
this._parts.hostname=a:(e=RegExp(j(this.domain())+"$"),this._parts.hostname=this._parts.hostname.replace(e,a));this.build(!b);return this};f.tld=function(a,b){if(this._parts.urn)return a===d?"":this;"boolean"===typeof a&&(b=a,a=d);if(a===d){if(!this._parts.hostname||this.is("IP"))return"";var c=this._parts.hostname.lastIndexOf("."),c=this._parts.hostname.substring(c+1);return!0!==b&&g&&g.list[c.toLowerCase()]?g.get(this._parts.hostname)||c:c}if(a)if(a.match(/[^a-zA-Z0-9-]/))if(g&&g.is(a))c=RegExp(j(this.tld())+
"$"),this._parts.hostname=this._parts.hostname.replace(c,a);else throw new TypeError("TLD '"+a+"' contains characters other than [A-Z0-9]");else{if(!this._parts.hostname||this.is("IP"))throw new ReferenceError("cannot set TLD on non-domain host");c=RegExp(j(this.tld())+"$");this._parts.hostname=this._parts.hostname.replace(c,a)}else throw new TypeError("cannot set TLD empty");this.build(!b);return this};f.directory=function(a,b){if(this._parts.urn)return a===d?"":this;if(a===d||!0===a){if(!this._parts.path&&
!this._parts.hostname)return"";if("/"===this._parts.path)return"/";var e=this._parts.path.length-this.filename().length-1,e=this._parts.path.substring(0,e)||(this._parts.hostname?"/":"");return a?c.decodePath(e):e}e=this._parts.path.length-this.filename().length;e=this._parts.path.substring(0,e);e=RegExp("^"+j(e));this.is("relative")||(a||(a="/"),"/"!==a[0]&&(a="/"+a));a&&"/"!==a[a.length-1]&&(a+="/");a=c.recodePath(a);this._parts.path=this._parts.path.replace(e,a);this.build(!b);return this};f.filename=
function(a,b){if(this._parts.urn)return a===d?"":this;if(a===d||!0===a){if(!this._parts.path||"/"===this._parts.path)return"";var e=this._parts.path.lastIndexOf("/"),e=this._parts.path.substring(e+1);return a?c.decodePathSegment(e):e}e=!1;"/"===a[0]&&(a=a.substring(1));a.match(/\.?\//)&&(e=!0);var k=RegExp(j(this.filename())+"$"),a=c.recodePath(a);this._parts.path=this._parts.path.replace(k,a);e?this.normalizePath(b):this.build(!b);return this};f.suffix=function(a,b){if(this._parts.urn)return a===
d?"":this;if(a===d||!0===a){if(!this._parts.path||"/"===this._parts.path)return"";var e=this.filename(),k=e.lastIndexOf(".");if(-1===k)return"";e=e.substring(k+1);e=/^[a-z0-9%]+$/i.test(e)?e:"";return a?c.decodePathSegment(e):e}"."===a[0]&&(a=a.substring(1));if(e=this.suffix())k=a?RegExp(j(e)+"$"):RegExp(j("."+e)+"$");else{if(!a)return this;this._parts.path+="."+c.recodePath(a)}k&&(a=c.recodePath(a),this._parts.path=this._parts.path.replace(k,a));this.build(!b);return this};f.segment=function(a,b,
c){var k=this._parts.urn?":":"/",g=this.path(),f="/"===g.substring(0,1),g=g.split(k);"number"!==typeof a&&(c=b,b=a,a=d);if(a!==d&&"number"!==typeof a)throw Error("Bad segment '"+a+"', must be 0-based integer");f&&g.shift();0>a&&(a=Math.max(g.length+a,0));if(b===d)return a===d?g:g[a];if(null===a||g[a]===d)if(h(b))g=b;else{if(b||"string"===typeof b&&b.length)""===g[g.length-1]?g[g.length-1]=b:g.push(b)}else b||"string"===typeof b&&b.length?g[a]=b:g.splice(a,1);f&&g.unshift("");return this.path(g.join(k),
c)};var q=f.query;f.query=function(a,b){return!0===a?c.parseQuery(this._parts.query):a!==d&&"string"!==typeof a?(this._parts.query=c.buildQuery(a),this.build(!b),this):q.call(this,a,b)};f.addQuery=function(a,b,e){var d=c.parseQuery(this._parts.query);c.addQuery(d,a,b);this._parts.query=c.buildQuery(d);"string"!==typeof a&&(e=b);this.build(!e);return this};f.removeQuery=function(a,b,e){var d=c.parseQuery(this._parts.query);c.removeQuery(d,a,b);this._parts.query=c.buildQuery(d);"string"!==typeof a&&
(e=b);this.build(!e);return this};f.addSearch=f.addQuery;f.removeSearch=f.removeQuery;f.normalize=function(){return this._parts.urn?this.normalizeProtocol(!1).normalizeQuery(!1).normalizeFragment(!1).build():this.normalizeProtocol(!1).normalizeHostname(!1).normalizePort(!1).normalizePath(!1).normalizeQuery(!1).normalizeFragment(!1).build()};f.normalizeProtocol=function(a){"string"===typeof this._parts.protocol&&(this._parts.protocol=this._parts.protocol.toLowerCase(),this.build(!a));return this};
f.normalizeHostname=function(a){this._parts.hostname&&(this.is("IDN")&&r?this._parts.hostname=r.toASCII(this._parts.hostname):this.is("IPv6")&&t&&(this._parts.hostname=t.best(this._parts.hostname)),this._parts.hostname=this._parts.hostname.toLowerCase(),this.build(!a));return this};f.normalizePort=function(a){"string"===typeof this._parts.protocol&&this._parts.port===c.defaultPorts[this._parts.protocol]&&(this._parts.port=null,this.build(!a));return this};f.normalizePath=function(a){if(this._parts.urn||
!this._parts.path||"/"===this._parts.path)return this;var b,e,d=this._parts.path,g,f;"/"!==d[0]&&("."===d[0]&&(e=d.substring(0,d.indexOf("/"))),b=!0,d="/"+d);for(d=d.replace(/(\/(\.\/)+)|\/{2,}/g,"/");;){g=d.indexOf("/../");if(-1===g)break;else if(0===g){d=d.substring(3);break}f=d.substring(0,g).lastIndexOf("/");-1===f&&(f=g);d=d.substring(0,f)+d.substring(g+3)}b&&this.is("relative")&&(d=e?e+d:d.substring(1));d=c.recodePath(d);this._parts.path=d;this.build(!a);return this};f.normalizePathname=f.normalizePath;
f.normalizeQuery=function(a){"string"===typeof this._parts.query&&(this._parts.query.length?this.query(c.parseQuery(this._parts.query)):this._parts.query=null,this.build(!a));return this};f.normalizeFragment=function(a){this._parts.fragment||(this._parts.fragment=null,this.build(!a));return this};f.normalizeSearch=f.normalizeQuery;f.normalizeHash=f.normalizeFragment;f.iso8859=function(){var a=c.encode,b=c.decode;c.encode=escape;c.decode=decodeURIComponent;this.normalize();c.encode=a;c.decode=b;return this};
f.unicode=function(){var a=c.encode,b=c.decode;c.encode=i;c.decode=unescape;this.normalize();c.encode=a;c.decode=b;return this};f.readable=function(){var a=this.clone();a.username("").password("").normalize();var b="";a._parts.protocol&&(b+=a._parts.protocol+"://");a._parts.hostname&&(a.is("punycode")&&r?(b+=r.toUnicode(a._parts.hostname),a._parts.port&&(b+=":"+a._parts.port)):b+=a.host());a._parts.hostname&&(a._parts.path&&"/"!==a._parts.path[0])&&(b+="/");b+=a.path(!0);if(a._parts.query){for(var e=
"",g=0,f=a._parts.query.split("&"),m=f.length;g<m;g++){var l=(f[g]||"").split("="),e=e+("&"+c.decodeQuery(l[0]).replace(/&/g,"%26"));l[1]!==d&&(e+="="+c.decodeQuery(l[1]).replace(/&/g,"%26"))}b+="?"+e.substring(1)}return b+=a.hash()};f.absoluteTo=function(a){var b=this.clone(),e=["protocol","username","password","hostname","port"],d,g;if(this._parts.urn)throw Error("URNs do not have any generally defined hierachical components");if(this._parts.hostname)return b;a instanceof c||(a=new c(a));d=0;for(g;g=
e[d];d++)b._parts[g]=a._parts[g];e=["query","path"];d=0;for(g;g=e[d];d++)!b._parts[g]&&a._parts[g]&&(b._parts[g]=a._parts[g]);"/"!==b.path()[0]&&(a=a.directory(),b._parts.path=(a?a+"/":"")+b._parts.path,b.normalizePath());b.build();return b};f.relativeTo=function(a){var b=this.clone(),e=["protocol","username","password","hostname","port"],d;if(this._parts.urn)throw Error("URNs do not have any generally defined hierachical components");a instanceof c||(a=new c(a));if("/"!==this.path()[0]||"/"!==a.path()[0])throw Error("Cannot calculate common path from non-relative URLs");
d=c.commonPath(b.path(),a.path());for(var a=a.directory(),g=0,f;f=e[g];g++)b._parts[f]=null;if(!d||"/"===d)return b;if(a+"/"===d)b._parts.path="./"+b.filename();else{e="../";d=RegExp("^"+j(d));for(a=a.replace(d,"/").match(/\//g).length-1;a--;)e+="../";b._parts.path=b._parts.path.replace(d,e)}b.build();return b};f.equals=function(a){var b=this.clone(),e=new c(a),d={},g={},a={},f;b.normalize();e.normalize();if(b.toString()===e.toString())return!0;d=b.query();g=e.query();b.query("");e.query("");if(b.toString()!==
e.toString()||d.length!==g.length)return!1;d=c.parseQuery(d);g=c.parseQuery(g);for(f in d)if(Object.prototype.hasOwnProperty.call(d,f)){if(h(d[f])){if(!h(g[f])||d[f].length!==g[f].length)return!1;d[f].sort();g[f].sort();b=0;for(e=d[f].length;b<e;b++)if(d[f][b]!==g[f][b])return!1}else if(d[f]!==g[f])return!1;a[f]=!0}for(f in g)if(Object.prototype.hasOwnProperty.call(g,f)&&!a[f])return!1;return!0};"undefined"!==typeof module&&module.exports?module.exports=c:window.URI=c})();
(function(d){var j=Object.prototype.hasOwnProperty,h="undefined"!==typeof module&&module.exports?require("./URI"):window.URI,i=function(d){if(i._cache[d])return i._cache[d];if(!(this instanceof i))return new i(d);this.expression=d;i._cache[d]=this;return this},f=function(d){this.data=d;this.cache={}},r=i.prototype,t={"":{prefix:"",separator:",",named:!1,empty_name_separator:!1,encode:"encode"},"+":{prefix:"",separator:",",named:!1,empty_name_separator:!1,encode:"encodeReserved"},"#":{prefix:"#",separator:",",
named:!1,empty_name_separator:!1,encode:"encodeReserved"},".":{prefix:".",separator:".",named:!1,empty_name_separator:!1,encode:"encode"},"/":{prefix:"/",separator:"/",named:!1,empty_name_separator:!1,encode:"encode"},";":{prefix:";",separator:";",named:!0,empty_name_separator:!1,encode:"encode"},"?":{prefix:"?",separator:"&",named:!0,empty_name_separator:!0,encode:"encode"},"&":{prefix:"&",separator:"&",named:!0,empty_name_separator:!0,encode:"encode"}};i._cache={};i.EXPRESSION_PATTERN=/\{([^a-zA-Z0-9%_]?)([^\}]+)(\}|$)/g;
i.VARIABLE_PATTERN=/^([^*:]+)((\*)|:(\d+))?$/;i.VARIABLE_NAME_PATTERN=/[^a-zA-Z0-9%_]/;i.expand=function(d,c){var f=t[d.operator],l=f.named?"Named":"Unnamed",h=d.variables,j=[],n,o,q;for(q=0;o=h[q];q++)n=c.get(o.name),n.val.length?j.push(i["expand"+l](n,f,o.explode,o.explode&&f.separator||",",o.maxlength,o.name)):n.type&&j.push("");return j.length?f.prefix+j.join(f.separator):""};i.expandNamed=function(g,c,f,l,i,j){var n="",o=c.encode,c=c.empty_name_separator,q=!g[o].length,a=2===g.type?"":h[o](j),
b,e,k;e=0;for(k=g.val.length;e<k;e++)(i?(b=h[o](g.val[e][1].substring(0,i)),2===g.type&&(a=h[o](g.val[e][0].substring(0,i)))):q?(b=h[o](g.val[e][1]),2===g.type?(a=h[o](g.val[e][0]),g[o].push([a,b])):g[o].push([d,b])):(b=g[o][e][1],2===g.type&&(a=g[o][e][0])),n&&(n+=l),f)?n+=a+(c||b?"=":"")+b:(e||(n+=h[o](j)+(c||b?"=":"")),2===g.type&&(n+=a+","),n+=b);return n};i.expandUnnamed=function(g,c,f,l,i){var j="",n=c.encode,c=c.empty_name_separator,o=!g[n].length,q,a,b,e;b=0;for(e=g.val.length;b<e;b++)i?a=
h[n](g.val[b][1].substring(0,i)):o?(a=h[n](g.val[b][1]),g[n].push([2===g.type?h[n](g.val[b][0]):d,a])):a=g[n][b][1],j&&(j+=l),2===g.type&&(q=i?h[n](g.val[b][0].substring(0,i)):g[n][b][0],j+=q,j=f?j+(c||a?"=":""):j+","),j+=a;return j};r.expand=function(d){var c="";(!this.parts||!this.parts.length)&&this.parse();d instanceof f||(d=new f(d));for(var j=0,l=this.parts.length;j<l;j++)c+="string"===typeof this.parts[j]?this.parts[j]:i.expand(this.parts[j],d);return c};r.parse=function(){var d=this.expression,
c=i.EXPRESSION_PATTERN,f=i.VARIABLE_PATTERN,j=i.VARIABLE_NAME_PATTERN,h=[],r=0,n,o,q;for(c.lastIndex=0;;){o=c.exec(d);if(null===o){h.push(d.substring(r));break}else h.push(d.substring(r,o.index)),r=o.index+o[0].length;if(t[o[1]]){if(!o[3])throw Error('Unclosed Expression "'+o[0]+'"');}else throw Error('Unknown Operator "'+o[1]+'" in "'+o[0]+'"');n=o[2].split(",");for(var a=0,b=n.length;a<b;a++){q=n[a].match(f);if(null===q)throw Error('Invalid Variable "'+n[a]+'" in "'+o[0]+'"');if(q[1].match(j))throw Error('Invalid Variable Name "'+
q[1]+'" in "'+o[0]+'"');n[a]={name:q[1],explode:!!q[3],maxlength:q[4]&&parseInt(q[4],10)}}if(!n.length)throw Error('Expression Missing Variable(s) "'+o[0]+'"');h.push({expression:o[0],operator:o[1],variables:n})}h.length||h.push(d);this.parts=h;return this};f.prototype.get=function(f){var c=this.data,h={type:0,val:[],encode:[],encodeReserved:[]},i;if(this.cache[f]!==d)return this.cache[f];this.cache[f]=h;c="[object Function]"===String(Object.prototype.toString.call(c))?c(f):"[object Function]"===
String(Object.prototype.toString.call(c[f]))?c[f](f):c[f];if(c===d||null===c)return h;if("[object Array]"===String(Object.prototype.toString.call(c))){i=0;for(f=c.length;i<f;i++)c[i]!==d&&null!==c[i]&&h.val.push([d,String(c[i])]);h.val.length&&(h.type=3)}else if("[object Object]"===String(Object.prototype.toString.call(c))){for(i in c)j.call(c,i)&&(c[i]!==d&&null!==c[i])&&h.val.push([i,String(c[i])]);h.val.length&&(h.type=2)}else h.type=1,h.val.push([d,String(c)]);return h};h.expand=function(d,c){var f=
(new i(d)).expand(c);return new h(f)};"undefined"!==typeof module&&module.exports?module.exports=i:window.URITemplate=i})();