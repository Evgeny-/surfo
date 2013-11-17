// moment.js
// version : 2.1.0
// author : Tim Wood
// license : MIT
// momentjs.com
!function(t){function e(t,e){return function(n){return u(t.call(this,n),e)}}function n(t,e){return function(n){return this.lang().ordinal(t.call(this,n),e)}}function s(){}function i(t){a(this,t)}function r(t){var e=t.years||t.year||t.y||0,n=t.months||t.month||t.M||0,s=t.weeks||t.week||t.w||0,i=t.days||t.day||t.d||0,r=t.hours||t.hour||t.h||0,a=t.minutes||t.minute||t.m||0,o=t.seconds||t.second||t.s||0,u=t.milliseconds||t.millisecond||t.ms||0;this._input=t,this._milliseconds=u+1e3*o+6e4*a+36e5*r,this._days=i+7*s,this._months=n+12*e,this._data={},this._bubble()}function a(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}function o(t){return 0>t?Math.ceil(t):Math.floor(t)}function u(t,e){for(var n=t+"";n.length<e;)n="0"+n;return n}function h(t,e,n,s){var i,r,a=e._milliseconds,o=e._days,u=e._months;a&&t._d.setTime(+t._d+a*n),(o||u)&&(i=t.minute(),r=t.hour()),o&&t.date(t.date()+o*n),u&&t.month(t.month()+u*n),a&&!s&&H.updateOffset(t),(o||u)&&(t.minute(i),t.hour(r))}function d(t){return"[object Array]"===Object.prototype.toString.call(t)}function c(t,e){var n,s=Math.min(t.length,e.length),i=Math.abs(t.length-e.length),r=0;for(n=0;s>n;n++)~~t[n]!==~~e[n]&&r++;return r+i}function f(t){return t?ie[t]||t.toLowerCase().replace(/(.)s$/,"$1"):t}function l(t,e){return e.abbr=t,x[t]||(x[t]=new s),x[t].set(e),x[t]}function _(t){if(!t)return H.fn._lang;if(!x[t]&&A)try{require("./lang/"+t)}catch(e){return H.fn._lang}return x[t]}function m(t){return t.match(/\[.*\]/)?t.replace(/^\[|\]$/g,""):t.replace(/\\/g,"")}function y(t){var e,n,s=t.match(E);for(e=0,n=s.length;n>e;e++)s[e]=ue[s[e]]?ue[s[e]]:m(s[e]);return function(i){var r="";for(e=0;n>e;e++)r+=s[e]instanceof Function?s[e].call(i,t):s[e];return r}}function M(t,e){function n(e){return t.lang().longDateFormat(e)||e}for(var s=5;s--&&N.test(e);)e=e.replace(N,n);return re[e]||(re[e]=y(e)),re[e](t)}function g(t,e){switch(t){case"DDDD":return V;case"YYYY":return X;case"YYYYY":return $;case"S":case"SS":case"SSS":case"DDD":return I;case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":return R;case"a":case"A":return _(e._l)._meridiemParse;case"X":return B;case"Z":case"ZZ":return j;case"T":return q;case"MM":case"DD":case"YY":case"HH":case"hh":case"mm":case"ss":case"M":case"D":case"d":case"H":case"h":case"m":case"s":return J;default:return new RegExp(t.replace("\\",""))}}function p(t){var e=(j.exec(t)||[])[0],n=(e+"").match(ee)||["-",0,0],s=+(60*n[1])+~~n[2];return"+"===n[0]?-s:s}function D(t,e,n){var s,i=n._a;switch(t){case"M":case"MM":i[1]=null==e?0:~~e-1;break;case"MMM":case"MMMM":s=_(n._l).monthsParse(e),null!=s?i[1]=s:n._isValid=!1;break;case"D":case"DD":case"DDD":case"DDDD":null!=e&&(i[2]=~~e);break;case"YY":i[0]=~~e+(~~e>68?1900:2e3);break;case"YYYY":case"YYYYY":i[0]=~~e;break;case"a":case"A":n._isPm=_(n._l).isPM(e);break;case"H":case"HH":case"h":case"hh":i[3]=~~e;break;case"m":case"mm":i[4]=~~e;break;case"s":case"ss":i[5]=~~e;break;case"S":case"SS":case"SSS":i[6]=~~(1e3*("0."+e));break;case"X":n._d=new Date(1e3*parseFloat(e));break;case"Z":case"ZZ":n._useUTC=!0,n._tzm=p(e)}null==e&&(n._isValid=!1)}function Y(t){var e,n,s=[];if(!t._d){for(e=0;7>e;e++)t._a[e]=s[e]=null==t._a[e]?2===e?1:0:t._a[e];s[3]+=~~((t._tzm||0)/60),s[4]+=~~((t._tzm||0)%60),n=new Date(0),t._useUTC?(n.setUTCFullYear(s[0],s[1],s[2]),n.setUTCHours(s[3],s[4],s[5],s[6])):(n.setFullYear(s[0],s[1],s[2]),n.setHours(s[3],s[4],s[5],s[6])),t._d=n}}function w(t){var e,n,s=t._f.match(E),i=t._i;for(t._a=[],e=0;e<s.length;e++)n=(g(s[e],t).exec(i)||[])[0],n&&(i=i.slice(i.indexOf(n)+n.length)),ue[s[e]]&&D(s[e],n,t);i&&(t._il=i),t._isPm&&t._a[3]<12&&(t._a[3]+=12),t._isPm===!1&&12===t._a[3]&&(t._a[3]=0),Y(t)}function k(t){var e,n,s,r,o,u=99;for(r=0;r<t._f.length;r++)e=a({},t),e._f=t._f[r],w(e),n=new i(e),o=c(e._a,n.toArray()),n._il&&(o+=n._il.length),u>o&&(u=o,s=n);a(t,s)}function v(t){var e,n=t._i,s=K.exec(n);if(s){for(t._f="YYYY-MM-DD"+(s[2]||" "),e=0;4>e;e++)if(te[e][1].exec(n)){t._f+=te[e][0];break}j.exec(n)&&(t._f+=" Z"),w(t)}else t._d=new Date(n)}function T(e){var n=e._i,s=G.exec(n);n===t?e._d=new Date:s?e._d=new Date(+s[1]):"string"==typeof n?v(e):d(n)?(e._a=n.slice(0),Y(e)):e._d=n instanceof Date?new Date(+n):new Date(n)}function b(t,e,n,s,i){return i.relativeTime(e||1,!!n,t,s)}function S(t,e,n){var s=W(Math.abs(t)/1e3),i=W(s/60),r=W(i/60),a=W(r/24),o=W(a/365),u=45>s&&["s",s]||1===i&&["m"]||45>i&&["mm",i]||1===r&&["h"]||22>r&&["hh",r]||1===a&&["d"]||25>=a&&["dd",a]||45>=a&&["M"]||345>a&&["MM",W(a/30)]||1===o&&["y"]||["yy",o];return u[2]=e,u[3]=t>0,u[4]=n,b.apply({},u)}function F(t,e,n){var s,i=n-e,r=n-t.day();return r>i&&(r-=7),i-7>r&&(r+=7),s=H(t).add("d",r),{week:Math.ceil(s.dayOfYear()/7),year:s.year()}}function O(t){var e=t._i,n=t._f;return null===e||""===e?null:("string"==typeof e&&(t._i=e=_().preparse(e)),H.isMoment(e)?(t=a({},e),t._d=new Date(+e._d)):n?d(n)?k(t):w(t):T(t),new i(t))}function z(t,e){H.fn[t]=H.fn[t+"s"]=function(t){var n=this._isUTC?"UTC":"";return null!=t?(this._d["set"+n+e](t),H.updateOffset(this),this):this._d["get"+n+e]()}}function C(t){H.duration.fn[t]=function(){return this._data[t]}}function L(t,e){H.duration.fn["as"+t]=function(){return+this/e}}for(var H,P,U="2.1.0",W=Math.round,x={},A="undefined"!=typeof module&&module.exports,G=/^\/?Date\((\-?\d+)/i,Z=/(\-)?(\d*)?\.?(\d+)\:(\d+)\:(\d+)\.?(\d{3})?/,E=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|SS?S?|X|zz?|ZZ?|.)/g,N=/(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,J=/\d\d?/,I=/\d{1,3}/,V=/\d{3}/,X=/\d{1,4}/,$=/[+\-]?\d{1,6}/,R=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,j=/Z|[\+\-]\d\d:?\d\d/i,q=/T/i,B=/[\+\-]?\d+(\.\d{1,3})?/,K=/^\s*\d{4}-\d\d-\d\d((T| )(\d\d(:\d\d(:\d\d(\.\d\d?\d?)?)?)?)?([\+\-]\d\d:?\d\d)?)?/,Q="YYYY-MM-DDTHH:mm:ssZ",te=[["HH:mm:ss.S",/(T| )\d\d:\d\d:\d\d\.\d{1,3}/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],ee=/([\+\-]|\d\d)/gi,ne="Date|Hours|Minutes|Seconds|Milliseconds".split("|"),se={Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6},ie={ms:"millisecond",s:"second",m:"minute",h:"hour",d:"day",w:"week",M:"month",y:"year"},re={},ae="DDD w W M D d".split(" "),oe="M D H h m s w W".split(" "),ue={M:function(){return this.month()+1},MMM:function(t){return this.lang().monthsShort(this,t)},MMMM:function(t){return this.lang().months(this,t)},D:function(){return this.date()},DDD:function(){return this.dayOfYear()},d:function(){return this.day()},dd:function(t){return this.lang().weekdaysMin(this,t)},ddd:function(t){return this.lang().weekdaysShort(this,t)},dddd:function(t){return this.lang().weekdays(this,t)},w:function(){return this.week()},W:function(){return this.isoWeek()},YY:function(){return u(this.year()%100,2)},YYYY:function(){return u(this.year(),4)},YYYYY:function(){return u(this.year(),5)},gg:function(){return u(this.weekYear()%100,2)},gggg:function(){return this.weekYear()},ggggg:function(){return u(this.weekYear(),5)},GG:function(){return u(this.isoWeekYear()%100,2)},GGGG:function(){return this.isoWeekYear()},GGGGG:function(){return u(this.isoWeekYear(),5)},e:function(){return this.weekday()},E:function(){return this.isoWeekday()},a:function(){return this.lang().meridiem(this.hours(),this.minutes(),!0)},A:function(){return this.lang().meridiem(this.hours(),this.minutes(),!1)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return~~(this.milliseconds()/100)},SS:function(){return u(~~(this.milliseconds()/10),2)},SSS:function(){return u(this.milliseconds(),3)},Z:function(){var t=-this.zone(),e="+";return 0>t&&(t=-t,e="-"),e+u(~~(t/60),2)+":"+u(~~t%60,2)},ZZ:function(){var t=-this.zone(),e="+";return 0>t&&(t=-t,e="-"),e+u(~~(10*t/6),4)},z:function(){return this.zoneAbbr()},zz:function(){return this.zoneName()},X:function(){return this.unix()}};ae.length;)P=ae.pop(),ue[P+"o"]=n(ue[P],P);for(;oe.length;)P=oe.pop(),ue[P+P]=e(ue[P],2);for(ue.DDDD=e(ue.DDD,3),s.prototype={set:function(t){var e,n;for(n in t)e=t[n],"function"==typeof e?this[n]=e:this["_"+n]=e},_months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months:function(t){return this._months[t.month()]},_monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort:function(t){return this._monthsShort[t.month()]},monthsParse:function(t){var e,n,s;for(this._monthsParse||(this._monthsParse=[]),e=0;12>e;e++)if(this._monthsParse[e]||(n=H([2e3,e]),s="^"+this.months(n,"")+"|^"+this.monthsShort(n,""),this._monthsParse[e]=new RegExp(s.replace(".",""),"i")),this._monthsParse[e].test(t))return e},_weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays:function(t){return this._weekdays[t.day()]},_weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort:function(t){return this._weekdaysShort[t.day()]},_weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin:function(t){return this._weekdaysMin[t.day()]},weekdaysParse:function(t){var e,n,s;for(this._weekdaysParse||(this._weekdaysParse=[]),e=0;7>e;e++)if(this._weekdaysParse[e]||(n=H([2e3,1]).day(e),s="^"+this.weekdays(n,"")+"|^"+this.weekdaysShort(n,"")+"|^"+this.weekdaysMin(n,""),this._weekdaysParse[e]=new RegExp(s.replace(".",""),"i")),this._weekdaysParse[e].test(t))return e},_longDateFormat:{LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D YYYY",LLL:"MMMM D YYYY LT",LLLL:"dddd, MMMM D YYYY LT"},longDateFormat:function(t){var e=this._longDateFormat[t];return!e&&this._longDateFormat[t.toUpperCase()]&&(e=this._longDateFormat[t.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(t){return t.slice(1)}),this._longDateFormat[t]=e),e},isPM:function(t){return"p"===(t+"").toLowerCase()[0]},_meridiemParse:/[ap]\.?m?\.?/i,meridiem:function(t,e,n){return t>11?n?"pm":"PM":n?"am":"AM"},_calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},calendar:function(t,e){var n=this._calendar[t];return"function"==typeof n?n.apply(e):n},_relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},relativeTime:function(t,e,n,s){var i=this._relativeTime[n];return"function"==typeof i?i(t,e,n,s):i.replace(/%d/i,t)},pastFuture:function(t,e){var n=this._relativeTime[t>0?"future":"past"];return"function"==typeof n?n(e):n.replace(/%s/i,e)},ordinal:function(t){return this._ordinal.replace("%d",t)},_ordinal:"%d",preparse:function(t){return t},postformat:function(t){return t},week:function(t){return F(t,this._week.dow,this._week.doy).week},_week:{dow:0,doy:6}},H=function(t,e,n){return O({_i:t,_f:e,_l:n,_isUTC:!1})},H.utc=function(t,e,n){return O({_useUTC:!0,_isUTC:!0,_l:n,_i:t,_f:e})},H.unix=function(t){return H(1e3*t)},H.duration=function(t,e){var n,s,i=H.isDuration(t),a="number"==typeof t,o=i?t._input:a?{}:t,u=Z.exec(t);return a?e?o[e]=t:o.milliseconds=t:u&&(n="-"===u[1]?-1:1,o={y:0,d:~~u[2]*n,h:~~u[3]*n,m:~~u[4]*n,s:~~u[5]*n,ms:~~u[6]*n}),s=new r(o),i&&t.hasOwnProperty("_lang")&&(s._lang=t._lang),s},H.version=U,H.defaultFormat=Q,H.updateOffset=function(){},H.lang=function(t,e){return t?(e?l(t,e):x[t]||_(t),H.duration.fn._lang=H.fn._lang=_(t),void 0):H.fn._lang._abbr},H.langData=function(t){return t&&t._lang&&t._lang._abbr&&(t=t._lang._abbr),_(t)},H.isMoment=function(t){return t instanceof i},H.isDuration=function(t){return t instanceof r},H.fn=i.prototype={clone:function(){return H(this)},valueOf:function(){return+this._d+6e4*(this._offset||0)},unix:function(){return Math.floor(+this/1e3)},toString:function(){return this.format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},toDate:function(){return this._offset?new Date(+this):this._d},toISOString:function(){return M(H(this).utc(),"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")},toArray:function(){var t=this;return[t.year(),t.month(),t.date(),t.hours(),t.minutes(),t.seconds(),t.milliseconds()]},isValid:function(){return null==this._isValid&&(this._isValid=this._a?!c(this._a,(this._isUTC?H.utc(this._a):H(this._a)).toArray()):!isNaN(this._d.getTime())),!!this._isValid},utc:function(){return this.zone(0)},local:function(){return this.zone(0),this._isUTC=!1,this},format:function(t){var e=M(this,t||H.defaultFormat);return this.lang().postformat(e)},add:function(t,e){var n;return n="string"==typeof t?H.duration(+e,t):H.duration(t,e),h(this,n,1),this},subtract:function(t,e){var n;return n="string"==typeof t?H.duration(+e,t):H.duration(t,e),h(this,n,-1),this},diff:function(t,e,n){var s,i,r=this._isUTC?H(t).zone(this._offset||0):H(t).local(),a=6e4*(this.zone()-r.zone());return e=f(e),"year"===e||"month"===e?(s=432e5*(this.daysInMonth()+r.daysInMonth()),i=12*(this.year()-r.year())+(this.month()-r.month()),i+=(this-H(this).startOf("month")-(r-H(r).startOf("month")))/s,i-=6e4*(this.zone()-H(this).startOf("month").zone()-(r.zone()-H(r).startOf("month").zone()))/s,"year"===e&&(i/=12)):(s=this-r,i="second"===e?s/1e3:"minute"===e?s/6e4:"hour"===e?s/36e5:"day"===e?(s-a)/864e5:"week"===e?(s-a)/6048e5:s),n?i:o(i)},from:function(t,e){return H.duration(this.diff(t)).lang(this.lang()._abbr).humanize(!e)},fromNow:function(t){return this.from(H(),t)},calendar:function(){var t=this.diff(H().startOf("day"),"days",!0),e=-6>t?"sameElse":-1>t?"lastWeek":0>t?"lastDay":1>t?"sameDay":2>t?"nextDay":7>t?"nextWeek":"sameElse";return this.format(this.lang().calendar(e,this))},isLeapYear:function(){var t=this.year();return 0===t%4&&0!==t%100||0===t%400},isDST:function(){return this.zone()<this.clone().month(0).zone()||this.zone()<this.clone().month(5).zone()},day:function(t){var e=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=t?"string"==typeof t&&(t=this.lang().weekdaysParse(t),"number"!=typeof t)?this:this.add({d:t-e}):e},month:function(t){var e,n=this._isUTC?"UTC":"";return null!=t?"string"==typeof t&&(t=this.lang().monthsParse(t),"number"!=typeof t)?this:(e=this.date(),this.date(1),this._d["set"+n+"Month"](t),this.date(Math.min(e,this.daysInMonth())),H.updateOffset(this),this):this._d["get"+n+"Month"]()},startOf:function(t){switch(t=f(t)){case"year":this.month(0);case"month":this.date(1);case"week":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===t&&this.weekday(0),this},endOf:function(t){return this.startOf(t).add(t,1).subtract("ms",1)},isAfter:function(t,e){return e="undefined"!=typeof e?e:"millisecond",+this.clone().startOf(e)>+H(t).startOf(e)},isBefore:function(t,e){return e="undefined"!=typeof e?e:"millisecond",+this.clone().startOf(e)<+H(t).startOf(e)},isSame:function(t,e){return e="undefined"!=typeof e?e:"millisecond",+this.clone().startOf(e)===+H(t).startOf(e)},min:function(t){return t=H.apply(null,arguments),this>t?this:t},max:function(t){return t=H.apply(null,arguments),t>this?this:t},zone:function(t){var e=this._offset||0;return null==t?this._isUTC?e:this._d.getTimezoneOffset():("string"==typeof t&&(t=p(t)),Math.abs(t)<16&&(t=60*t),this._offset=t,this._isUTC=!0,e!==t&&h(this,H.duration(e-t,"m"),1,!0),this)},zoneAbbr:function(){return this._isUTC?"UTC":""},zoneName:function(){return this._isUTC?"Coordinated Universal Time":""},daysInMonth:function(){return H.utc([this.year(),this.month()+1,0]).date()},dayOfYear:function(t){var e=W((H(this).startOf("day")-H(this).startOf("year"))/864e5)+1;return null==t?e:this.add("d",t-e)},weekYear:function(t){var e=F(this,this.lang()._week.dow,this.lang()._week.doy).year;return null==t?e:this.add("y",t-e)},isoWeekYear:function(t){var e=F(this,1,4).year;return null==t?e:this.add("y",t-e)},week:function(t){var e=this.lang().week(this);return null==t?e:this.add("d",7*(t-e))},isoWeek:function(t){var e=F(this,1,4).week;return null==t?e:this.add("d",7*(t-e))},weekday:function(t){var e=(this._d.getDay()+7-this.lang()._week.dow)%7;return null==t?e:this.add("d",t-e)},isoWeekday:function(t){return null==t?this.day()||7:this.day(this.day()%7?t:t-7)},lang:function(e){return e===t?this._lang:(this._lang=_(e),this)}},P=0;P<ne.length;P++)z(ne[P].toLowerCase().replace(/s$/,""),ne[P]);z("year","FullYear"),H.fn.days=H.fn.day,H.fn.months=H.fn.month,H.fn.weeks=H.fn.week,H.fn.isoWeeks=H.fn.isoWeek,H.fn.toJSON=H.fn.toISOString,H.duration.fn=r.prototype={_bubble:function(){var t,e,n,s,i=this._milliseconds,r=this._days,a=this._months,u=this._data;u.milliseconds=i%1e3,t=o(i/1e3),u.seconds=t%60,e=o(t/60),u.minutes=e%60,n=o(e/60),u.hours=n%24,r+=o(n/24),u.days=r%30,a+=o(r/30),u.months=a%12,s=o(a/12),u.years=s},weeks:function(){return o(this.days()/7)},valueOf:function(){return this._milliseconds+864e5*this._days+2592e6*(this._months%12)+31536e6*~~(this._months/12)},humanize:function(t){var e=+this,n=S(e,!t,this.lang());return t&&(n=this.lang().pastFuture(e,n)),this.lang().postformat(n)},add:function(t,e){var n=H.duration(t,e);return this._milliseconds+=n._milliseconds,this._days+=n._days,this._months+=n._months,this._bubble(),this},subtract:function(t,e){var n=H.duration(t,e);return this._milliseconds-=n._milliseconds,this._days-=n._days,this._months-=n._months,this._bubble(),this},get:function(t){return t=f(t),this[t.toLowerCase()+"s"]()},as:function(t){return t=f(t),this["as"+t.charAt(0).toUpperCase()+t.slice(1)+"s"]()},lang:H.fn.lang};for(P in se)se.hasOwnProperty(P)&&(L(P,se[P]),C(P.toLowerCase()));L("Weeks",6048e5),H.duration.fn.asMonths=function(){return(+this-31536e6*this.years())/2592e6+12*this.years()},H.lang("en",{ordinal:function(t){var e=t%10,n=1===~~(t%100/10)?"th":1===e?"st":2===e?"nd":3===e?"rd":"th";return t+n}}),A&&(module.exports=H),"undefined"==typeof ender&&(this.moment=H),"function"==typeof define&&define.amd&&define("moment",[],function(){return H})}.call(this);
;(function () {
   function plural(word, num) {
      var forms = word.split('_');
      return num % 10 === 1 && num % 100 !== 11 ? forms[0] : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2]);
   }

   function relativeTimeWithPlural(number, withoutSuffix, key) {
      var format = {
         'mm': 'минута_минуты_минут',
         'hh': 'час_часа_часов',
         'dd': 'день_дня_дней',
         'MM': 'месяц_месяца_месяцев',
         'yy': 'год_года_лет'
      };
      if (key === 'm') {
         return withoutSuffix ? 'минута' : 'минуту';
      }
      else {
         return number + ' ' + plural(format[key], +number);
      }
   }

   function monthsCaseReplace(m, format) {
      var months = {
            'nominative': 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_'),
            'accusative': 'января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря'.split('_')
         },

         nounCase = (/D[oD]? *MMMM?/).test(format) ?
            'accusative' :
            'nominative';

      return months[nounCase][m.month()];
   }

   function weekdaysCaseReplace(m, format) {
      var weekdays = {
            'nominative': 'воскресенье_понедельник_вторник_среда_четверг_пятница_суббота'.split('_'),
            'accusative': 'воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу'.split('_')
         },

         nounCase = (/\[ ?[Вв] ?(?:прошлую|следующую)? ?\] ?dddd/).test(format) ?
            'accusative' :
            'nominative';

      return weekdays[nounCase][m.day()];
   }

   moment.lang('ru', {
      months : monthsCaseReplace,
      monthsShort : "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
      weekdays : weekdaysCaseReplace,
      weekdaysShort : "вск_пнд_втр_срд_чтв_птн_сбт".split("_"),
      weekdaysMin : "вс_пн_вт_ср_чт_пт_сб".split("_"),
      longDateFormat : {
         LT : "HH:mm",
         L : "DD.MM.YYYY",
         LL : "D MMMM YYYY г.",
         LLL : "D MMMM YYYY г., LT",
         LLLL : "dddd, D MMMM YYYY г., LT"
      },
      calendar : {
         sameDay: '[Сегодня в] LT',
         nextDay: '[Завтра в] LT',
         lastDay: '[Вчера в] LT',
         nextWeek: function () {
            return this.day() === 2 ? '[Во] dddd [в] LT' : '[В] dddd [в] LT';
         },
         lastWeek: function () {
            switch (this.day()) {
               case 0:
                  return '[В прошлое] dddd [в] LT';
               case 1:
               case 2:
               case 4:
                  return '[В прошлый] dddd [в] LT';
               case 3:
               case 5:
               case 6:
                  return '[В прошлую] dddd [в] LT';
            }
         },
         sameElse: 'L'
      },
      relativeTime : {
         future : "через %s",
         past : "%s назад",
         s : "несколько секунд",
         m : relativeTimeWithPlural,
         mm : relativeTimeWithPlural,
         h : "час",
         hh : relativeTimeWithPlural,
         d : "день",
         dd : relativeTimeWithPlural,
         M : "месяц",
         MM : relativeTimeWithPlural,
         y : "год",
         yy : relativeTimeWithPlural
      },

      ordinal: function (number, period) {
         switch (period) {
            case 'M':
            case 'd':
            case 'DDD':
               return number + '-й';
            case 'D':
               return number + '-го';
            case 'w':
            case 'W':
               return number + '-я';
            default:
               return number;
         }
      },

      week : {
         dow : 1, // Monday is the first day of the week.
         doy : 7  // The week that contains Jan 1st is the first week of the year.
      }
   });
} ());

/*! Hammer.JS - v1.0.5 - 2013-04-07
 * http://eightmedia.github.com/hammer.js
 *
 * Copyright (c) 2013 Jorik Tangelder <j.tangelder@gmail.com>;
 * Licensed under the MIT license */

(function(t,e){"use strict";function n(){if(!i.READY){i.event.determineEventTypes();for(var t in i.gestures)i.gestures.hasOwnProperty(t)&&i.detection.register(i.gestures[t]);i.event.onTouch(i.DOCUMENT,i.EVENT_MOVE,i.detection.detect),i.event.onTouch(i.DOCUMENT,i.EVENT_END,i.detection.detect),i.READY=!0}}var i=function(t,e){return new i.Instance(t,e||{})};i.defaults={stop_browser_behavior:{userSelect:"none",touchAction:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}},i.HAS_POINTEREVENTS=navigator.pointerEnabled||navigator.msPointerEnabled,i.HAS_TOUCHEVENTS="ontouchstart"in t,i.MOBILE_REGEX=/mobile|tablet|ip(ad|hone|od)|android/i,i.NO_MOUSEEVENTS=i.HAS_TOUCHEVENTS&&navigator.userAgent.match(i.MOBILE_REGEX),i.EVENT_TYPES={},i.DIRECTION_DOWN="down",i.DIRECTION_LEFT="left",i.DIRECTION_UP="up",i.DIRECTION_RIGHT="right",i.POINTER_MOUSE="mouse",i.POINTER_TOUCH="touch",i.POINTER_PEN="pen",i.EVENT_START="start",i.EVENT_MOVE="move",i.EVENT_END="end",i.DOCUMENT=document,i.plugins={},i.READY=!1,i.Instance=function(t,e){var r=this;return n(),this.element=t,this.enabled=!0,this.options=i.utils.extend(i.utils.extend({},i.defaults),e||{}),this.options.stop_browser_behavior&&i.utils.stopDefaultBrowserBehavior(this.element,this.options.stop_browser_behavior),i.event.onTouch(t,i.EVENT_START,function(t){r.enabled&&i.detection.startDetect(r,t)}),this},i.Instance.prototype={on:function(t,e){for(var n=t.split(" "),i=0;n.length>i;i++)this.element.addEventListener(n[i],e,!1);return this},off:function(t,e){for(var n=t.split(" "),i=0;n.length>i;i++)this.element.removeEventListener(n[i],e,!1);return this},trigger:function(t,e){var n=i.DOCUMENT.createEvent("Event");n.initEvent(t,!0,!0),n.gesture=e;var r=this.element;return i.utils.hasParent(e.target,r)&&(r=e.target),r.dispatchEvent(n),this},enable:function(t){return this.enabled=t,this}};var r=null,o=!1,s=!1;i.event={bindDom:function(t,e,n){for(var i=e.split(" "),r=0;i.length>r;r++)t.addEventListener(i[r],n,!1)},onTouch:function(t,e,n){var a=this;this.bindDom(t,i.EVENT_TYPES[e],function(c){var u=c.type.toLowerCase();if(!u.match(/mouse/)||!s){(u.match(/touch/)||u.match(/pointerdown/)||u.match(/mouse/)&&1===c.which)&&(o=!0),u.match(/touch|pointer/)&&(s=!0);var h=0;o&&(i.HAS_POINTEREVENTS&&e!=i.EVENT_END?h=i.PointerEvent.updatePointer(e,c):u.match(/touch/)?h=c.touches.length:s||(h=u.match(/up/)?0:1),h>0&&e==i.EVENT_END?e=i.EVENT_MOVE:h||(e=i.EVENT_END),h||null===r?r=c:c=r,n.call(i.detection,a.collectEventData(t,e,c)),i.HAS_POINTEREVENTS&&e==i.EVENT_END&&(h=i.PointerEvent.updatePointer(e,c))),h||(r=null,o=!1,s=!1,i.PointerEvent.reset())}})},determineEventTypes:function(){var t;t=i.HAS_POINTEREVENTS?i.PointerEvent.getEvents():i.NO_MOUSEEVENTS?["touchstart","touchmove","touchend touchcancel"]:["touchstart mousedown","touchmove mousemove","touchend touchcancel mouseup"],i.EVENT_TYPES[i.EVENT_START]=t[0],i.EVENT_TYPES[i.EVENT_MOVE]=t[1],i.EVENT_TYPES[i.EVENT_END]=t[2]},getTouchList:function(t){return i.HAS_POINTEREVENTS?i.PointerEvent.getTouchList():t.touches?t.touches:[{identifier:1,pageX:t.pageX,pageY:t.pageY,target:t.target}]},collectEventData:function(t,e,n){var r=this.getTouchList(n,e),o=i.POINTER_TOUCH;return(n.type.match(/mouse/)||i.PointerEvent.matchType(i.POINTER_MOUSE,n))&&(o=i.POINTER_MOUSE),{center:i.utils.getCenter(r),timeStamp:(new Date).getTime(),target:n.target,touches:r,eventType:e,pointerType:o,srcEvent:n,preventDefault:function(){this.srcEvent.preventManipulation&&this.srcEvent.preventManipulation(),this.srcEvent.preventDefault&&this.srcEvent.preventDefault()},stopPropagation:function(){this.srcEvent.stopPropagation()},stopDetect:function(){return i.detection.stopDetect()}}}},i.PointerEvent={pointers:{},getTouchList:function(){var t=this,e=[];return Object.keys(t.pointers).sort().forEach(function(n){e.push(t.pointers[n])}),e},updatePointer:function(t,e){return t==i.EVENT_END?this.pointers={}:(e.identifier=e.pointerId,this.pointers[e.pointerId]=e),Object.keys(this.pointers).length},matchType:function(t,e){if(!e.pointerType)return!1;var n={};return n[i.POINTER_MOUSE]=e.pointerType==e.MSPOINTER_TYPE_MOUSE||e.pointerType==i.POINTER_MOUSE,n[i.POINTER_TOUCH]=e.pointerType==e.MSPOINTER_TYPE_TOUCH||e.pointerType==i.POINTER_TOUCH,n[i.POINTER_PEN]=e.pointerType==e.MSPOINTER_TYPE_PEN||e.pointerType==i.POINTER_PEN,n[t]},getEvents:function(){return["pointerdown MSPointerDown","pointermove MSPointerMove","pointerup pointercancel MSPointerUp MSPointerCancel"]},reset:function(){this.pointers={}}},i.utils={extend:function(t,n,i){for(var r in n)t[r]!==e&&i||(t[r]=n[r]);return t},hasParent:function(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1},getCenter:function(t){for(var e=[],n=[],i=0,r=t.length;r>i;i++)e.push(t[i].pageX),n.push(t[i].pageY);return{pageX:(Math.min.apply(Math,e)+Math.max.apply(Math,e))/2,pageY:(Math.min.apply(Math,n)+Math.max.apply(Math,n))/2}},getVelocity:function(t,e,n){return{x:Math.abs(e/t)||0,y:Math.abs(n/t)||0}},getAngle:function(t,e){var n=e.pageY-t.pageY,i=e.pageX-t.pageX;return 180*Math.atan2(n,i)/Math.PI},getDirection:function(t,e){var n=Math.abs(t.pageX-e.pageX),r=Math.abs(t.pageY-e.pageY);return n>=r?t.pageX-e.pageX>0?i.DIRECTION_LEFT:i.DIRECTION_RIGHT:t.pageY-e.pageY>0?i.DIRECTION_UP:i.DIRECTION_DOWN},getDistance:function(t,e){var n=e.pageX-t.pageX,i=e.pageY-t.pageY;return Math.sqrt(n*n+i*i)},getScale:function(t,e){return t.length>=2&&e.length>=2?this.getDistance(e[0],e[1])/this.getDistance(t[0],t[1]):1},getRotation:function(t,e){return t.length>=2&&e.length>=2?this.getAngle(e[1],e[0])-this.getAngle(t[1],t[0]):0},isVertical:function(t){return t==i.DIRECTION_UP||t==i.DIRECTION_DOWN},stopDefaultBrowserBehavior:function(t,e){var n,i=["webkit","khtml","moz","ms","o",""];if(e&&t.style){for(var r=0;i.length>r;r++)for(var o in e)e.hasOwnProperty(o)&&(n=o,i[r]&&(n=i[r]+n.substring(0,1).toUpperCase()+n.substring(1)),t.style[n]=e[o]);"none"==e.userSelect&&(t.onselectstart=function(){return!1})}}},i.detection={gestures:[],current:null,previous:null,stopped:!1,startDetect:function(t,e){this.current||(this.stopped=!1,this.current={inst:t,startEvent:i.utils.extend({},e),lastEvent:!1,name:""},this.detect(e))},detect:function(t){if(this.current&&!this.stopped){t=this.extendEventData(t);for(var e=this.current.inst.options,n=0,r=this.gestures.length;r>n;n++){var o=this.gestures[n];if(!this.stopped&&e[o.name]!==!1&&o.handler.call(o,t,this.current.inst)===!1){this.stopDetect();break}}return this.current&&(this.current.lastEvent=t),t.eventType==i.EVENT_END&&!t.touches.length-1&&this.stopDetect(),t}},stopDetect:function(){this.previous=i.utils.extend({},this.current),this.current=null,this.stopped=!0},extendEventData:function(t){var e=this.current.startEvent;if(e&&(t.touches.length!=e.touches.length||t.touches===e.touches)){e.touches=[];for(var n=0,r=t.touches.length;r>n;n++)e.touches.push(i.utils.extend({},t.touches[n]))}var o=t.timeStamp-e.timeStamp,s=t.center.pageX-e.center.pageX,a=t.center.pageY-e.center.pageY,c=i.utils.getVelocity(o,s,a);return i.utils.extend(t,{deltaTime:o,deltaX:s,deltaY:a,velocityX:c.x,velocityY:c.y,distance:i.utils.getDistance(e.center,t.center),angle:i.utils.getAngle(e.center,t.center),direction:i.utils.getDirection(e.center,t.center),scale:i.utils.getScale(e.touches,t.touches),rotation:i.utils.getRotation(e.touches,t.touches),startEvent:e}),t},register:function(t){var n=t.defaults||{};return n[t.name]===e&&(n[t.name]=!0),i.utils.extend(i.defaults,n,!0),t.index=t.index||1e3,this.gestures.push(t),this.gestures.sort(function(t,e){return t.index<e.index?-1:t.index>e.index?1:0}),this.gestures}},i.gestures=i.gestures||{},i.gestures.Hold={name:"hold",index:10,defaults:{hold_timeout:500,hold_threshold:1},timer:null,handler:function(t,e){switch(t.eventType){case i.EVENT_START:clearTimeout(this.timer),i.detection.current.name=this.name,this.timer=setTimeout(function(){"hold"==i.detection.current.name&&e.trigger("hold",t)},e.options.hold_timeout);break;case i.EVENT_MOVE:t.distance>e.options.hold_threshold&&clearTimeout(this.timer);break;case i.EVENT_END:clearTimeout(this.timer)}}},i.gestures.Tap={name:"tap",index:100,defaults:{tap_max_touchtime:600,tap_max_distance:10,tap_always:!0,doubletap_distance:20,doubletap_interval:300},handler:function(t,e){if(t.eventType==i.EVENT_END){var n=i.detection.previous,r=!1;if(t.deltaTime>e.options.tap_max_touchtime||t.distance>e.options.tap_max_distance)return;n&&"tap"==n.name&&t.timeStamp-n.lastEvent.timeStamp<e.options.doubletap_interval&&t.distance<e.options.doubletap_distance&&(e.trigger("doubletap",t),r=!0),(!r||e.options.tap_always)&&(i.detection.current.name="tap",e.trigger(i.detection.current.name,t))}}},i.gestures.Swipe={name:"swipe",index:40,defaults:{swipe_max_touches:1,swipe_velocity:.2},handler:function(t,e){if(t.eventType==i.EVENT_END){if(e.options.swipe_max_touches>0&&t.touches.length>e.options.swipe_max_touches)return;(t.velocityX>e.options.swipe_velocity||t.velocityY>e.options.swipe_velocity)&&(e.trigger(this.name,t),e.trigger(this.name+t.direction,t))}}},i.gestures.Drag={name:"drag",index:50,defaults:{drag_min_distance:3,drag_max_touches:1,drag_block_horizontal:!1,drag_block_vertical:!1,drag_lock_to_axis:!1,drag_lock_min_distance:15},triggered:!1,handler:function(t,n){if(i.detection.current.name!=this.name&&this.triggered)return n.trigger(this.name+"end",t),this.triggered=!1,e;if(!(n.options.drag_max_touches>0&&t.touches.length>n.options.drag_max_touches))switch(t.eventType){case i.EVENT_START:this.triggered=!1;break;case i.EVENT_MOVE:if(t.distance<n.options.drag_min_distance&&i.detection.current.name!=this.name)return;i.detection.current.name=this.name,(i.detection.current.lastEvent.drag_locked_to_axis||n.options.drag_lock_to_axis&&n.options.drag_lock_min_distance<=t.distance)&&(t.drag_locked_to_axis=!0);var r=i.detection.current.lastEvent.direction;t.drag_locked_to_axis&&r!==t.direction&&(t.direction=i.utils.isVertical(r)?0>t.deltaY?i.DIRECTION_UP:i.DIRECTION_DOWN:0>t.deltaX?i.DIRECTION_LEFT:i.DIRECTION_RIGHT),this.triggered||(n.trigger(this.name+"start",t),this.triggered=!0),n.trigger(this.name,t),n.trigger(this.name+t.direction,t),(n.options.drag_block_vertical&&i.utils.isVertical(t.direction)||n.options.drag_block_horizontal&&!i.utils.isVertical(t.direction))&&t.preventDefault();break;case i.EVENT_END:this.triggered&&n.trigger(this.name+"end",t),this.triggered=!1}}},i.gestures.Transform={name:"transform",index:45,defaults:{transform_min_scale:.01,transform_min_rotation:1,transform_always_block:!1},triggered:!1,handler:function(t,n){if(i.detection.current.name!=this.name&&this.triggered)return n.trigger(this.name+"end",t),this.triggered=!1,e;if(!(2>t.touches.length))switch(n.options.transform_always_block&&t.preventDefault(),t.eventType){case i.EVENT_START:this.triggered=!1;break;case i.EVENT_MOVE:var r=Math.abs(1-t.scale),o=Math.abs(t.rotation);if(n.options.transform_min_scale>r&&n.options.transform_min_rotation>o)return;i.detection.current.name=this.name,this.triggered||(n.trigger(this.name+"start",t),this.triggered=!0),n.trigger(this.name,t),o>n.options.transform_min_rotation&&n.trigger("rotate",t),r>n.options.transform_min_scale&&(n.trigger("pinch",t),n.trigger("pinch"+(1>t.scale?"in":"out"),t));break;case i.EVENT_END:this.triggered&&n.trigger(this.name+"end",t),this.triggered=!1}}},i.gestures.Touch={name:"touch",index:-1/0,defaults:{prevent_default:!1,prevent_mouseevents:!1},handler:function(t,n){return n.options.prevent_mouseevents&&t.pointerType==i.POINTER_MOUSE?(t.stopDetect(),e):(n.options.prevent_default&&t.preventDefault(),t.eventType==i.EVENT_START&&n.trigger(this.name,t),e)}},i.gestures.Release={name:"release",index:1/0,handler:function(t,e){t.eventType==i.EVENT_END&&e.trigger(this.name,t)}},"object"==typeof module&&"object"==typeof module.exports?module.exports=i:(t.Hammer=i,"function"==typeof t.define&&t.define.amd&&t.define("hammer",[],function(){return i}))})(this);
/*
 AngularJS v1.1.4
 (c) 2010-2012 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(M,V,s){'use strict';function gc(){var b=M.angular;M.angular=hc;return b}function o(b,a,c){var d;if(b)if(I(b))for(d in b)d!="prototype"&&d!="length"&&d!="name"&&b.hasOwnProperty(d)&&a.call(c,b[d],d);else if(b.forEach&&b.forEach!==o)b.forEach(a,c);else if(!b||typeof b.length!=="number"?0:typeof b.hasOwnProperty!="function"&&typeof b.constructor!="function"||b instanceof P||ca&&b instanceof ca||Da.call(b)!=="[object Object]"||typeof b.callee==="function")for(d=0;d<b.length;d++)a.call(c,b[d],
d);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d);return b}function rb(b){var a=[],c;for(c in b)b.hasOwnProperty(c)&&a.push(c);return a.sort()}function ic(b,a,c){for(var d=rb(b),e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}function sb(b){return function(a,c){b(c,a)}}function Ea(){for(var b=Z.length,a;b;){b--;a=Z[b].charCodeAt(0);if(a==57)return Z[b]="A",Z.join("");if(a==90)Z[b]="0";else return Z[b]=String.fromCharCode(a+1),Z.join("")}Z.unshift("0");return Z.join("")}function y(b){o(arguments,
function(a){a!==b&&o(a,function(a,d){b[d]=a})});return b}function K(b){return parseInt(b,10)}function Fa(b,a){return y(new (y(function(){},{prototype:b})),a)}function t(){}function pa(b){return b}function Q(b){return function(){return b}}function u(b){return typeof b=="undefined"}function w(b){return typeof b!="undefined"}function L(b){return b!=null&&typeof b=="object"}function x(b){return typeof b=="string"}function Za(b){return typeof b=="number"}function qa(b){return Da.apply(b)=="[object Date]"}
function C(b){return Da.apply(b)=="[object Array]"}function I(b){return typeof b=="function"}function ra(b){return b&&b.document&&b.location&&b.alert&&b.setInterval}function S(b){return x(b)?b.replace(/^\s*/,"").replace(/\s*$/,""):b}function jc(b){return b&&(b.nodeName||b.bind&&b.find)}function $a(b,a,c){var d=[];o(b,function(b,f,i){d.push(a.call(c,b,f,i))});return d}function Ga(b,a){if(b.indexOf)return b.indexOf(a);for(var c=0;c<b.length;c++)if(a===b[c])return c;return-1}function sa(b,a){var c=Ga(b,
a);c>=0&&b.splice(c,1);return a}function W(b,a){if(ra(b)||b&&b.$evalAsync&&b.$watch)throw Error("Can't copy Window or Scope");if(a){if(b===a)throw Error("Can't copy equivalent objects or arrays");if(C(b))for(var c=a.length=0;c<b.length;c++)a.push(W(b[c]));else for(c in o(a,function(b,c){delete a[c]}),b)a[c]=W(b[c])}else(a=b)&&(C(b)?a=W(b,[]):qa(b)?a=new Date(b.getTime()):L(b)&&(a=W(b,{})));return a}function kc(b,a){var a=a||{},c;for(c in b)b.hasOwnProperty(c)&&c.substr(0,2)!=="$$"&&(a[c]=b[c]);return a}
function ja(b,a){if(b===a)return!0;if(b===null||a===null)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&c=="object")if(C(b)){if((c=b.length)==a.length){for(d=0;d<c;d++)if(!ja(b[d],a[d]))return!1;return!0}}else if(qa(b))return qa(a)&&b.getTime()==a.getTime();else{if(b&&b.$evalAsync&&b.$watch||a&&a.$evalAsync&&a.$watch||ra(b)||ra(a))return!1;c={};for(d in b)if(!(d.charAt(0)==="$"||I(b[d]))){if(!ja(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c[d]&&d.charAt(0)!=="$"&&a[d]!==s&&!I(a[d]))return!1;
return!0}return!1}function ab(b,a){var c=arguments.length>2?ka.call(arguments,2):[];return I(a)&&!(a instanceof RegExp)?c.length?function(){return arguments.length?a.apply(b,c.concat(ka.call(arguments,0))):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}:a}function lc(b,a){var c=a;/^\$+/.test(b)?c=s:ra(a)?c="$WINDOW":a&&V===a?c="$DOCUMENT":a&&a.$evalAsync&&a.$watch&&(c="$SCOPE");return c}function da(b,a){return JSON.stringify(b,lc,a?"  ":null)}function tb(b){return x(b)?
JSON.parse(b):b}function Ha(b){b&&b.length!==0?(b=J(""+b),b=!(b=="f"||b=="0"||b=="false"||b=="no"||b=="n"||b=="[]")):b=!1;return b}function ta(b){b=v(b).clone();try{b.html("")}catch(a){}var c=v("<div>").append(b).html();try{return b[0].nodeType===3?J(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+J(b)})}catch(d){return J(c)}}function bb(b){var a={},c,d;o((b||"").split("&"),function(b){b&&(c=b.split("="),d=decodeURIComponent(c[0]),a[d]=w(c[1])?decodeURIComponent(c[1]):!0)});
return a}function ub(b){var a=[];o(b,function(b,d){a.push(ua(d,!0)+(b===!0?"":"="+ua(b,!0)))});return a.length?a.join("&"):""}function cb(b){return ua(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function ua(b,a){return encodeURIComponent(b).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,a?"%20":"+")}function mc(b,a){function c(a){a&&d.push(a)}var d=[b],e,f,i=["ng:app","ng-app","x-ng-app","data-ng-app"],h=/\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;
o(i,function(a){i[a]=!0;c(V.getElementById(a));a=a.replace(":","\\:");b.querySelectorAll&&(o(b.querySelectorAll("."+a),c),o(b.querySelectorAll("."+a+"\\:"),c),o(b.querySelectorAll("["+a+"]"),c))});o(d,function(a){if(!e){var b=h.exec(" "+a.className+" ");b?(e=a,f=(b[2]||"").replace(/\s+/g,",")):o(a.attributes,function(b){if(!e&&i[b.name])e=a,f=b.value})}});e&&a(e,f?[f]:[])}function vb(b,a){var c=function(){b=v(b);a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);a.unshift("ng");
var c=wb(a);c.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return c},d=/^NG_DEFER_BOOTSTRAP!/;if(M&&!d.test(M.name))return c();M.name=M.name.replace(d,"");Ia.resumeBootstrap=function(b){o(b,function(b){a.push(b)});c()}}function db(b,a){a=a||"_";return b.replace(nc,function(b,d){return(d?a:"")+b.toLowerCase()})}function eb(b,a,c){if(!b)throw Error("Argument '"+(a||"?")+"' is "+(c||"required"));return b}function va(b,
a,c){c&&C(b)&&(b=b[b.length-1]);eb(I(b),a,"not a function, got "+(b&&typeof b=="object"?b.constructor.name||"Object":typeof b));return b}function oc(b){function a(a,b,e){return a[b]||(a[b]=e())}return a(a(b,"angular",Object),"module",function(){var b={};return function(d,e,f){e&&b.hasOwnProperty(d)&&(b[d]=null);return a(b,d,function(){function a(c,d,e){return function(){b[e||"push"]([c,d,arguments]);return m}}if(!e)throw Error("No module: "+d);var b=[],c=[],g=a("$injector","invoke"),m={_invokeQueue:b,
_runBlocks:c,requires:e,name:d,provider:a("$provide","provider"),factory:a("$provide","factory"),service:a("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),animation:a("$animationProvider","register"),filter:a("$filterProvider","register"),controller:a("$controllerProvider","register"),directive:a("$compileProvider","directive"),config:g,run:function(a){c.push(a);return this}};f&&g(f);return m})}})}function Ja(b){return b.replace(pc,function(a,b,d,e){return e?
d.toUpperCase():d}).replace(qc,"Moz$1")}function fb(b,a){function c(){var e;for(var b=[this],c=a,i,h,j,g,m,k;b.length;){i=b.shift();h=0;for(j=i.length;h<j;h++){g=v(i[h]);c?g.triggerHandler("$destroy"):c=!c;m=0;for(e=(k=g.children()).length,g=e;m<g;m++)b.push(ca(k[m]))}}return d.apply(this,arguments)}var d=ca.fn[b],d=d.$original||d;c.$original=d;ca.fn[b]=c}function P(b){if(b instanceof P)return b;if(!(this instanceof P)){if(x(b)&&b.charAt(0)!="<")throw Error("selectors not implemented");return new P(b)}if(x(b)){var a=
V.createElement("div");a.innerHTML="<div>&#160;</div>"+b;a.removeChild(a.firstChild);gb(this,a.childNodes);this.remove()}else gb(this,b)}function hb(b){return b.cloneNode(!0)}function wa(b){xb(b);for(var a=0,b=b.childNodes||[];a<b.length;a++)wa(b[a])}function yb(b,a,c){var d=$(b,"events");$(b,"handle")&&(u(a)?o(d,function(a,c){ib(b,c,a);delete d[c]}):u(c)?(ib(b,a,d[a]),delete d[a]):sa(d[a],c))}function xb(b){var a=b[Ka],c=La[a];c&&(c.handle&&(c.events.$destroy&&c.handle({},"$destroy"),yb(b)),delete La[a],
b[Ka]=s)}function $(b,a,c){var d=b[Ka],d=La[d||-1];if(w(c))d||(b[Ka]=d=++rc,d=La[d]={}),d[a]=c;else return d&&d[a]}function zb(b,a,c){var d=$(b,"data"),e=w(c),f=!e&&w(a),i=f&&!L(a);!d&&!i&&$(b,"data",d={});if(e)d[a]=c;else if(f)if(i)return d&&d[a];else y(d,a);else return d}function Ma(b,a){return(" "+b.className+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" ")>-1}function Ab(b,a){a&&o(a.split(" "),function(a){b.className=S((" "+b.className+" ").replace(/[\n\t]/g," ").replace(" "+S(a)+" "," "))})}function Bb(b,
a){a&&o(a.split(" "),function(a){if(!Ma(b,a))b.className=S(b.className+" "+S(a))})}function gb(b,a){if(a)for(var a=!a.nodeName&&w(a.length)&&!ra(a)?a:[a],c=0;c<a.length;c++)b.push(a[c])}function Cb(b,a){return Na(b,"$"+(a||"ngController")+"Controller")}function Na(b,a,c){b=v(b);for(b[0].nodeType==9&&(b=b.find("html"));b.length;){if(c=b.data(a))return c;b=b.parent()}}function Db(b,a){var c=Oa[a.toLowerCase()];return c&&Eb[b.nodeName]&&c}function sc(b,a){var c=function(c,e){if(!c.preventDefault)c.preventDefault=
function(){c.returnValue=!1};if(!c.stopPropagation)c.stopPropagation=function(){c.cancelBubble=!0};if(!c.target)c.target=c.srcElement||V;if(u(c.defaultPrevented)){var f=c.preventDefault;c.preventDefault=function(){c.defaultPrevented=!0;f.call(c)};c.defaultPrevented=!1}c.isDefaultPrevented=function(){return c.defaultPrevented};o(a[e||c.type],function(a){a.call(b,c)});X<=8?(c.preventDefault=null,c.stopPropagation=null,c.isDefaultPrevented=null):(delete c.preventDefault,delete c.stopPropagation,delete c.isDefaultPrevented)};
c.elem=b;return c}function la(b){var a=typeof b,c;if(a=="object"&&b!==null)if(typeof(c=b.$$hashKey)=="function")c=b.$$hashKey();else{if(c===s)c=b.$$hashKey=Ea()}else c=b;return a+":"+c}function Pa(b){o(b,this.put,this)}function Fb(b){var a,c;if(typeof b=="function"){if(!(a=b.$inject))a=[],c=b.toString().replace(tc,""),c=c.match(uc),o(c[1].split(vc),function(b){b.replace(wc,function(b,c,d){a.push(d)})}),b.$inject=a}else C(b)?(c=b.length-1,va(b[c],"fn"),a=b.slice(0,c)):va(b,"fn",!0);return a}function wb(b){function a(a){return function(b,
c){if(L(b))o(b,sb(a));else return a(b,c)}}function c(a,b){if(I(b)||C(b))b=k.instantiate(b);if(!b.$get)throw Error("Provider "+a+" must define $get factory method.");return m[a+h]=b}function d(a,b){return c(a,{$get:b})}function e(a){var b=[];o(a,function(a){if(!g.get(a))if(g.put(a,!0),x(a)){var c=xa(a);b=b.concat(e(c.requires)).concat(c._runBlocks);try{for(var d=c._invokeQueue,c=0,h=d.length;c<h;c++){var f=d[c],n=k.get(f[0]);n[f[1]].apply(n,f[2])}}catch(j){throw j.message&&(j.message+=" from "+a),
j;}}else if(I(a))try{b.push(k.invoke(a))}catch(i){throw i.message&&(i.message+=" from "+a),i;}else if(C(a))try{b.push(k.invoke(a))}catch(l){throw l.message&&(l.message+=" from "+String(a[a.length-1])),l;}else va(a,"module")});return b}function f(a,b){function c(d){if(typeof d!=="string")throw Error("Service name expected");if(a.hasOwnProperty(d)){if(a[d]===i)throw Error("Circular dependency: "+j.join(" <- "));return a[d]}else try{return j.unshift(d),a[d]=i,a[d]=b(d)}finally{j.shift()}}function d(a,
b,e){var g=[],h=Fb(a),f,j,n;j=0;for(f=h.length;j<f;j++)n=h[j],g.push(e&&e.hasOwnProperty(n)?e[n]:c(n));a.$inject||(a=a[f]);switch(b?-1:g.length){case 0:return a();case 1:return a(g[0]);case 2:return a(g[0],g[1]);case 3:return a(g[0],g[1],g[2]);case 4:return a(g[0],g[1],g[2],g[3]);case 5:return a(g[0],g[1],g[2],g[3],g[4]);case 6:return a(g[0],g[1],g[2],g[3],g[4],g[5]);case 7:return a(g[0],g[1],g[2],g[3],g[4],g[5],g[6]);case 8:return a(g[0],g[1],g[2],g[3],g[4],g[5],g[6],g[7]);case 9:return a(g[0],g[1],
g[2],g[3],g[4],g[5],g[6],g[7],g[8]);case 10:return a(g[0],g[1],g[2],g[3],g[4],g[5],g[6],g[7],g[8],g[9]);default:return a.apply(b,g)}}return{invoke:d,instantiate:function(a,b){var c=function(){},e;c.prototype=(C(a)?a[a.length-1]:a).prototype;c=new c;e=d(a,c,b);return L(e)?e:c},get:c,annotate:Fb}}var i={},h="Provider",j=[],g=new Pa,m={$provide:{provider:a(c),factory:a(d),service:a(function(a,b){return d(a,["$injector",function(a){return a.instantiate(b)}])}),value:a(function(a,b){return d(a,Q(b))}),
constant:a(function(a,b){m[a]=b;l[a]=b}),decorator:function(a,b){var c=k.get(a+h),d=c.$get;c.$get=function(){var a=q.invoke(d,c);return q.invoke(b,null,{$delegate:a})}}}},k=m.$injector=f(m,function(){throw Error("Unknown provider: "+j.join(" <- "));}),l={},q=l.$injector=f(l,function(a){a=k.get(a+h);return q.invoke(a.$get,a)});o(e(b),function(a){q.invoke(a||t)});return q}function xc(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=
null;o(a,function(a){!b&&J(a.nodeName)==="a"&&(b=a)});return b}function f(){var b=c.hash(),d;b?(d=i.getElementById(b))?d.scrollIntoView():(d=e(i.getElementsByName(b)))?d.scrollIntoView():b==="top"&&a.scrollTo(0,0):a.scrollTo(0,0)}var i=a.document;b&&d.$watch(function(){return c.hash()},function(){d.$evalAsync(f)});return f}]}function Gb(b){this.register=function(a,c){b.factory(Ja(a)+"Animation",c)};this.$get=["$injector",function(a){return function(b){if(b)try{return a.get(Ja(b)+"Animation")}catch(d){}}}]}
function yc(b,a,c,d){function e(a){try{a.apply(null,ka.call(arguments,1))}finally{if(n--,n===0)for(;B.length;)try{B.pop()()}catch(b){c.error(b)}}}function f(a,b){(function z(){o(r,function(a){a()});p=b(z,a)})()}function i(){E!=h.url()&&(E=h.url(),o(G,function(a){a(h.url())}))}var h=this,j=a[0],g=b.location,m=b.history,k=b.setTimeout,l=b.clearTimeout,q={};h.isMock=!1;var n=0,B=[];h.$$completeOutstandingRequest=e;h.$$incOutstandingRequestCount=function(){n++};h.notifyWhenNoOutstandingRequests=function(a){o(r,
function(a){a()});n===0?a():B.push(a)};var r=[],p;h.addPollFn=function(a){u(p)&&f(100,k);r.push(a);return a};var E=g.href,D=a.find("base");h.url=function(a,b){if(a){if(E!=a)return E=a,d.history?b?m.replaceState(null,"",a):(m.pushState(null,"",a),D.attr("href",D.attr("href"))):b?g.replace(a):g.href=a,h}else return g.href.replace(/%27/g,"'")};var G=[],R=!1;h.onUrlChange=function(a){R||(d.history&&v(b).bind("popstate",i),d.hashchange?v(b).bind("hashchange",i):h.addPollFn(i),R=!0);G.push(a);return a};
h.baseHref=function(){var a=D.attr("href");return a?a.replace(/^https?\:\/\/[^\/]*/,""):""};var A={},H="",F=h.baseHref();h.cookies=function(a,b){var d,e,g,h;if(a)if(b===s)j.cookie=escape(a)+"=;path="+F+";expires=Thu, 01 Jan 1970 00:00:00 GMT";else{if(x(b))d=(j.cookie=escape(a)+"="+escape(b)+";path="+F).length+1,d>4096&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!")}else{if(j.cookie!==H){H=j.cookie;d=H.split("; ");A={};for(g=0;g<d.length;g++)e=
d[g],h=e.indexOf("="),h>0&&(A[unescape(e.substring(0,h))]=unescape(e.substring(h+1)))}return A}};h.defer=function(a,b){var c;n++;c=k(function(){delete q[c];e(a)},b||0);q[c]=!0;return c};h.defer.cancel=function(a){return q[a]?(delete q[a],l(a),e(t),!0):!1}}function zc(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new yc(b,d,a,c)}]}function Ac(){this.$get=function(){function b(b,d){function e(a){if(a!=k){if(l){if(l==a)l=a.n}else l=a;f(a.n,a.p);f(a,k);k=a;k.n=null}}function f(a,
b){if(a!=b){if(a)a.p=b;if(b)b.n=a}}if(b in a)throw Error("cacheId "+b+" taken");var i=0,h=y({},d,{id:b}),j={},g=d&&d.capacity||Number.MAX_VALUE,m={},k=null,l=null;return a[b]={put:function(a,b){var c=m[a]||(m[a]={key:a});e(c);if(!u(b))return a in j||i++,j[a]=b,i>g&&this.remove(l.key),b},get:function(a){var b=m[a];if(b)return e(b),j[a]},remove:function(a){var b=m[a];if(b){if(b==k)k=b.p;if(b==l)l=b.n;f(b.n,b.p);delete m[a];delete j[a];i--}},removeAll:function(){j={};i=0;m={};k=l=null},destroy:function(){m=
h=j=null;delete a[b]},info:function(){return y({},h,{size:i})}}}var a={};b.info=function(){var b={};o(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function Bc(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function Hb(b){var a={},c="Directive",d=/^\s*directive\:\s*([\d\w\-_]+)\s+(.*)$/,e=/(([\d\w\-_]+)(?:\:([^;]+))?;?)/,f="Template must have exactly one root element. was: ",i=/^\s*(https?|ftp|mailto|file):/;this.directive=function j(d,e){x(d)?
(eb(e,"directive"),a.hasOwnProperty(d)||(a[d]=[],b.factory(d+c,["$injector","$exceptionHandler",function(b,c){var e=[];o(a[d],function(a){try{var f=b.invoke(a);if(I(f))f={compile:Q(f)};else if(!f.compile&&f.link)f.compile=Q(f.link);f.priority=f.priority||0;f.name=f.name||d;f.require=f.require||f.controller&&f.name;f.restrict=f.restrict||"A";e.push(f)}catch(j){c(j)}});return e}])),a[d].push(e)):o(d,sb(j));return this};this.urlSanitizationWhitelist=function(a){return w(a)?(i=a,this):i};this.$get=["$injector",
"$interpolate","$exceptionHandler","$http","$templateCache","$parse","$controller","$rootScope","$document",function(b,g,m,k,l,q,n,B,r){function p(a,b,c){a instanceof v||(a=v(a));o(a,function(b,c){b.nodeType==3&&b.nodeValue.match(/\S+/)&&(a[c]=v(b).wrap("<span></span>").parent()[0])});var d=D(a,b,a,c);return function(b,c){eb(b,"scope");for(var e=c?za.clone.call(a):a,g=0,f=e.length;g<f;g++){var j=e[g];(j.nodeType==1||j.nodeType==9)&&e.eq(g).data("$scope",b)}E(e,"ng-scope");c&&c(e,b);d&&d(b,e,e);return e}}
function E(a,b){try{a.addClass(b)}catch(c){}}function D(a,b,c,d){function e(a,c,d,f){var j,i,l,m,n,k,q,p=[];n=0;for(k=c.length;n<k;n++)p.push(c[n]);q=n=0;for(k=g.length;n<k;q++)i=p[q],c=g[n++],j=g[n++],c?(c.scope?(l=a.$new(L(c.scope)),v(i).data("$scope",l)):l=a,(m=c.transclude)||!f&&b?c(j,l,i,d,function(b){return function(c){var d=a.$new();d.$$transcluded=!0;return b(d,c).bind("$destroy",ab(d,d.$destroy))}}(m||b)):c(j,l,i,s,f)):j&&j(a,i.childNodes,s,f)}for(var g=[],f,j,i,l=0;l<a.length;l++)j=new ya,
f=G(a[l],[],j,d),j=(f=f.length?R(f,a[l],j,b,c):null)&&f.terminal||!a[l].childNodes||!a[l].childNodes.length?null:D(a[l].childNodes,f?f.transclude:b),g.push(f),g.push(j),i=i||f||j;return i?e:null}function G(a,b,c,g){var f=c.$attr,j;switch(a.nodeType){case 1:A(b,aa(jb(a).toLowerCase()),"E",g);var i,l,n;j=a.attributes;for(var m=0,k=j&&j.length;m<k;m++)if(i=j[m],i.specified)l=i.name,n=aa(l),ha.test(n)&&(l=n.substr(6).toLowerCase()),n=aa(l.toLowerCase()),f[n]=l,c[n]=i=S(X&&l=="href"?decodeURIComponent(a.getAttribute(l,
2)):i.value),Db(a,n)&&(c[n]=!0),z(a,b,i,n),A(b,n,"A",g);a=a.className;if(x(a)&&a!=="")for(;j=e.exec(a);)n=aa(j[2]),A(b,n,"C",g)&&(c[n]=S(j[3])),a=a.substr(j.index+j[0].length);break;case 3:ga(b,a.nodeValue);break;case 8:try{if(j=d.exec(a.nodeValue))n=aa(j[1]),A(b,n,"M",g)&&(c[n]=S(j[2]))}catch(q){}}b.sort(N);return b}function R(a,b,c,d,e){function j(a,b){if(a)a.require=z.require,B.push(a);if(b)b.require=z.require,r.push(b)}function i(a,b){var c,d="data",e=!1;if(x(a)){for(;(c=a.charAt(0))=="^"||c==
"?";)a=a.substr(1),c=="^"&&(d="inheritedData"),e=e||c=="?";c=b[d]("$"+a+"Controller");if(!c&&!e)throw Error("No controller: "+a);}else C(a)&&(c=[],o(a,function(a){c.push(i(a,b))}));return c}function l(a,d,e,f,j){var k,p,D,G,H;k=b===e?c:kc(c,new ya(v(e),c.$attr));p=k.$$element;if(ba){var z=/^\s*([@=&])(\??)\s*(\w*)\s*$/,F=d.$parent||d;o(ba.scope,function(a,b){var c=a.match(z)||[],e=c[3]||b,f=c[2]=="?",c=c[1],j,l,i;d.$$isolateBindings[b]=c+e;switch(c){case "@":k.$observe(e,function(a){d[b]=a});k.$$observers[e].$$scope=
F;k[e]&&(d[b]=g(k[e])(F));break;case "=":if(f&&!k[e])break;l=q(k[e]);i=l.assign||function(){j=d[b]=l(F);throw Error(Ib+k[e]+" (directive: "+ba.name+")");};j=d[b]=l(F);d.$watch(function(){var a=l(F);a!==d[b]&&(a!==j?j=d[b]=a:i(F,a=j=d[b]));return a});break;case "&":l=q(k[e]);d[b]=function(a){return l(F,a)};break;default:throw Error("Invalid isolate scope definition for directive "+ba.name+": "+a);}})}ha&&o(ha,function(a){var b={$scope:d,$element:p,$attrs:k,$transclude:j};H=a.controller;H=="@"&&(H=
k[a.name]);p.data("$"+a.name+"Controller",n(H,b))});f=0;for(D=B.length;f<D;f++)try{G=B[f],G(d,p,k,G.require&&i(G.require,p))}catch(E){m(E,ta(p))}a&&a(d,e.childNodes,s,j);f=0;for(D=r.length;f<D;f++)try{G=r[f],G(d,p,k,G.require&&i(G.require,p))}catch(N){m(N,ta(p))}}for(var k=-Number.MAX_VALUE,B=[],r=[],D=null,ba=null,N=null,A=c.$$element=v(b),z,T,R,ga,ia=d,ha,t,y,w=0,u=a.length;w<u;w++){z=a[w];R=s;if(k>z.priority)break;if(y=z.scope)ea("isolated scope",ba,z,A),L(y)&&(E(A,"ng-isolate-scope"),ba=z),E(A,
"ng-scope"),D=D||z;T=z.name;if(y=z.controller)ha=ha||{},ea("'"+T+"' controller",ha[T],z,A),ha[T]=z;if(y=z.transclude)ea("transclusion",ga,z,A),ga=z,k=z.priority,y=="element"?(R=v(b),A=c.$$element=v(V.createComment(" "+T+": "+c[T]+" ")),b=A[0],fa(e,v(R[0]),b),ia=p(R,d,k)):(R=v(hb(b)).contents(),A.html(""),ia=p(R,d));if(z.template)if(ea("template",N,z,A),N=z,y=I(z.template)?z.template(A,c):z.template,y=Jb(y),z.replace){R=v("<div>"+S(y)+"</div>").contents();b=R[0];if(R.length!=1||b.nodeType!==1)throw Error(f+
y);fa(e,A,b);T={$attr:{}};a=a.concat(G(b,a.splice(w+1,a.length-(w+1)),T));H(c,T);u=a.length}else A.html(y);if(z.templateUrl)ea("template",N,z,A),N=z,l=F(a.splice(w,a.length-w),l,A,c,e,z.replace,ia),u=a.length;else if(z.compile)try{t=z.compile(A,c,ia),I(t)?j(null,t):t&&j(t.pre,t.post)}catch(J){m(J,ta(A))}if(z.terminal)l.terminal=!0,k=Math.max(k,z.priority)}l.scope=D&&D.scope;l.transclude=ga&&ia;return l}function A(d,e,g,f){var l=!1;if(a.hasOwnProperty(e))for(var i,e=b.get(e+c),n=0,k=e.length;n<k;n++)try{if(i=
e[n],(f===s||f>i.priority)&&i.restrict.indexOf(g)!=-1)d.push(i),l=!0}catch(q){m(q)}return l}function H(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;o(a,function(d,e){e.charAt(0)!="$"&&(b[e]&&(d+=(e==="style"?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});o(b,function(b,g){g=="class"?(E(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):g=="style"?e.attr("style",e.attr("style")+";"+b):g.charAt(0)!="$"&&!a.hasOwnProperty(g)&&(a[g]=b,d[g]=c[g])})}function F(a,b,c,d,e,g,j){var i=[],n,m,q=c[0],p=a.shift(),ya=y({},
p,{controller:null,templateUrl:null,transclude:null,scope:null}),p=I(p.templateUrl)?p.templateUrl(c,d):p.templateUrl;c.html("");k.get(p,{cache:l}).success(function(l){var k,p,l=Jb(l);if(g){p=v("<div>"+S(l)+"</div>").contents();k=p[0];if(p.length!=1||k.nodeType!==1)throw Error(f+l);l={$attr:{}};fa(e,c,k);G(k,a,l);H(d,l)}else k=q,c.html(l);a.unshift(ya);n=R(a,k,d,j);for(m=D(c[0].childNodes,j);i.length;){var B=i.shift(),l=i.shift();p=i.shift();var r=i.shift(),F=k;l!==q&&(F=hb(k),fa(p,v(l),F));n(function(){b(m,
B,F,e,r)},B,F,e,r)}i=null}).error(function(a,b,c,d){throw Error("Failed to load template: "+d.url);});return function(a,c,d,e,g){i?(i.push(c),i.push(d),i.push(e),i.push(g)):n(function(){b(m,c,d,e,g)},c,d,e,g)}}function N(a,b){return b.priority-a.priority}function ea(a,b,c,d){if(b)throw Error("Multiple directives ["+b.name+", "+c.name+"] asking for "+a+" on: "+ta(d));}function ga(a,b){var c=g(b,!0);c&&a.push({priority:0,compile:Q(function(a,b){var d=b.parent(),e=d.data("$binding")||[];e.push(c);E(d.data("$binding",
e),"ng-binding");a.$watch(c,function(a){b[0].nodeValue=a})})})}function z(a,b,c,d){var e=g(c,!0);e&&b.push({priority:100,compile:Q(function(a,b,c){b=c.$$observers||(c.$$observers={});if(e=g(c[d],!0))c[d]=e(a),(b[d]||(b[d]=[])).$$inter=!0,(c.$$observers&&c.$$observers[d].$$scope||a).$watch(e,function(a){c.$set(d,a)})})})}function fa(a,b,c){var d=b[0],e=d.parentNode,g,f;if(a){g=0;for(f=a.length;g<f;g++)if(a[g]==d){a[g]=c;break}}e&&e.replaceChild(c,d);c[v.expando]=d[v.expando];b[0]=c}var ya=function(a,
b){this.$$element=a;this.$attr=b||{}};ya.prototype={$normalize:aa,$set:function(a,b,c,d){var e=Db(this.$$element[0],a),g=this.$$observers;e&&(this.$$element.prop(a,b),d=e);this[a]=b;d?this.$attr[a]=d:(d=this.$attr[a])||(this.$attr[a]=d=db(a,"-"));if(jb(this.$$element[0])==="A"&&a==="href")ba.setAttribute("href",b),e=ba.href,e.match(i)||(this[a]=b="unsafe:"+e);c!==!1&&(b===null||b===s?this.$$element.removeAttr(d):this.$$element.attr(d,b));g&&o(g[a],function(a){try{a(b)}catch(c){m(c)}})},$observe:function(a,
b){var c=this,d=c.$$observers||(c.$$observers={}),e=d[a]||(d[a]=[]);e.push(b);B.$evalAsync(function(){e.$$inter||b(c[a])});return b}};var ba=r[0].createElement("a"),T=g.startSymbol(),ia=g.endSymbol(),Jb=T=="{{"||ia=="}}"?pa:function(a){return a.replace(/\{\{/g,T).replace(/}}/g,ia)},ha=/^ngAttr[A-Z]/;return p}]}function aa(b){return Ja(b.replace(Cc,""))}function Dc(){var b={};this.register=function(a,c){L(a)?y(b,a):b[a]=c};this.$get=["$injector","$window",function(a,c){return function(d,e){if(x(d)){var f=
d,d=b.hasOwnProperty(f)?b[f]:kb(e.$scope,f,!0)||kb(c,f,!0);va(d,f,!0)}return a.instantiate(d,e)}}]}function Ec(){this.$get=["$window",function(b){return v(b.document)}]}function Fc(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function Gc(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler",function(c,d){function e(e,j){for(var g,m,k=0,l=[],q=e.length,n=
!1,B=[];k<q;)(g=e.indexOf(b,k))!=-1&&(m=e.indexOf(a,g+f))!=-1?(k!=g&&l.push(e.substring(k,g)),l.push(k=c(n=e.substring(g+f,m))),k.exp=n,k=m+i,n=!0):(k!=q&&l.push(e.substring(k)),k=q);if(!(q=l.length))l.push(""),q=1;if(!j||n)return B.length=q,k=function(a){try{for(var b=0,c=q,g;b<c;b++){if(typeof(g=l[b])=="function")g=g(a),g==null||g==s?g="":typeof g!="string"&&(g=da(g));B[b]=g}return B.join("")}catch(f){d(Error("Error while interpolating: "+e+"\n"+f.toString()))}},k.exp=e,k.parts=l,k}var f=b.length,
i=a.length;e.startSymbol=function(){return b};e.endSymbol=function(){return a};return e}]}function Kb(b){for(var b=b.split("/"),a=b.length;a--;)b[a]=cb(b[a]);return b.join("/")}function Aa(b,a){var c=lb.exec(b),c={protocol:c[1],host:c[3],port:K(c[5])||Ba[c[1]]||null,path:c[6]||"/",search:c[8],hash:c[10]};if(a)a.$$protocol=c.protocol,a.$$host=c.host,a.$$port=c.port;return c}function ma(b,a,c){return b+"://"+a+(c==Ba[b]?"":":"+c)}function Hc(b,a,c){var d=Aa(b);return decodeURIComponent(d.path)!=a||
u(d.hash)||d.hash.indexOf(c)!==0?b:ma(d.protocol,d.host,d.port)+a.substr(0,a.lastIndexOf("/"))+d.hash.substr(c.length)}function Ic(b,a,c){var d=Aa(b);if(decodeURIComponent(d.path)==a&&!u(d.hash)&&d.hash.indexOf(c)===0)return b;else{var e=d.search&&"?"+d.search||"",f=d.hash&&"#"+d.hash||"",i=a.substr(0,a.lastIndexOf("/")),h=d.path.substr(i.length);if(d.path.indexOf(i)!==0)throw Error('Invalid url "'+b+'", missing path prefix "'+i+'" !');return ma(d.protocol,d.host,d.port)+a+"#"+c+h+e+f}}function mb(b,
a,c){a=a||"";this.$$parse=function(b){var c=Aa(b,this);if(c.path.indexOf(a)!==0)throw Error('Invalid url "'+b+'", missing path prefix "'+a+'" !');this.$$path=decodeURIComponent(c.path.substr(a.length));this.$$search=bb(c.search);this.$$hash=c.hash&&decodeURIComponent(c.hash)||"";this.$$compose()};this.$$compose=function(){var b=ub(this.$$search),c=this.$$hash?"#"+cb(this.$$hash):"";this.$$url=Kb(this.$$path)+(b?"?"+b:"")+c;this.$$absUrl=ma(this.$$protocol,this.$$host,this.$$port)+a+this.$$url};this.$$rewriteAppUrl=
function(a){if(a.indexOf(c)==0)return a};this.$$parse(b)}function Qa(b,a,c){var d;this.$$parse=function(b){var c=Aa(b,this);if(c.hash&&c.hash.indexOf(a)!==0)throw Error('Invalid url "'+b+'", missing hash prefix "'+a+'" !');d=c.path+(c.search?"?"+c.search:"");c=Jc.exec((c.hash||"").substr(a.length));this.$$path=c[1]?(c[1].charAt(0)=="/"?"":"/")+decodeURIComponent(c[1]):"";this.$$search=bb(c[3]);this.$$hash=c[5]&&decodeURIComponent(c[5])||"";this.$$compose()};this.$$compose=function(){var b=ub(this.$$search),
c=this.$$hash?"#"+cb(this.$$hash):"";this.$$url=Kb(this.$$path)+(b?"?"+b:"")+c;this.$$absUrl=ma(this.$$protocol,this.$$host,this.$$port)+d+(this.$$url?"#"+a+this.$$url:"")};this.$$rewriteAppUrl=function(a){if(a.indexOf(c)==0)return a};this.$$parse(b)}function Lb(b,a,c,d){Qa.apply(this,arguments);this.$$rewriteAppUrl=function(b){if(b.indexOf(c)==0)return c+d+"#"+a+b.substr(c.length)}}function Ra(b){return function(){return this[b]}}function Mb(b,a){return function(c){if(u(c))return this[b];this[b]=
a(c);this.$$compose();return this}}function Kc(){var b="",a=!1;this.hashPrefix=function(a){return w(a)?(b=a,this):b};this.html5Mode=function(b){return w(b)?(a=b,this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement",function(c,d,e,f){function i(a){c.$broadcast("$locationChangeSuccess",h.absUrl(),a)}var h,j,g,m=d.url(),k=Aa(m);a?(j=d.baseHref()||"/",g=j.substr(0,j.lastIndexOf("/")),k=ma(k.protocol,k.host,k.port)+g+"/",h=e.history?new mb(Hc(m,j,b),g,k):new Lb(Ic(m,j,b),b,k,j.substr(g.length+
1))):(k=ma(k.protocol,k.host,k.port)+(k.path||"")+(k.search?"?"+k.search:"")+"#"+b+"/",h=new Qa(m,b,k));f.bind("click",function(a){if(!a.ctrlKey&&!(a.metaKey||a.which==2)){for(var b=v(a.target);J(b[0].nodeName)!=="a";)if(b[0]===f[0]||!(b=b.parent())[0])return;var d=b.prop("href"),e=h.$$rewriteAppUrl(d);d&&!b.attr("target")&&e&&(h.$$parse(e),c.$apply(),a.preventDefault(),M.angular["ff-684208-preventDefault"]=!0)}});h.absUrl()!=m&&d.url(h.absUrl(),!0);d.onUrlChange(function(a){h.absUrl()!=a&&(c.$evalAsync(function(){var b=
h.absUrl();h.$$parse(a);i(b)}),c.$$phase||c.$digest())});var l=0;c.$watch(function(){var a=d.url(),b=h.$$replace;if(!l||a!=h.absUrl())l++,c.$evalAsync(function(){c.$broadcast("$locationChangeStart",h.absUrl(),a).defaultPrevented?h.$$parse(a):(d.url(h.absUrl(),b),i(a))});h.$$replace=!1;return l});return h}]}function Lc(){var b=!0,a=this;this.debugEnabled=function(a){return w(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&a.stack.indexOf(a.message)===
-1?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||t;return e.apply?function(){var a=[];o(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,b)}}return{log:e("log"),warn:e("warn"),info:e("info"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function Mc(b,a){function c(a){return a.indexOf(r)!=-1}function d(a){a=a||
1;return n+a<b.length?b.charAt(n+a):!1}function e(a){return"0"<=a&&a<="9"}function f(a){return a==" "||a=="\r"||a=="\t"||a=="\n"||a=="\u000b"||a=="\u00a0"}function i(a){return"a"<=a&&a<="z"||"A"<=a&&a<="Z"||"_"==a||a=="$"}function h(a){return a=="-"||a=="+"||e(a)}function j(a,c,d){d=d||n;throw Error("Lexer Error: "+a+" at column"+(w(c)?"s "+c+"-"+n+" ["+b.substring(c,d)+"]":" "+d)+" in expression ["+b+"].");}function g(){for(var a="",c=n;n<b.length;){var g=J(b.charAt(n));if(g=="."||e(g))a+=g;else{var f=
d();if(g=="e"&&h(f))a+=g;else if(h(g)&&f&&e(f)&&a.charAt(a.length-1)=="e")a+=g;else if(h(g)&&(!f||!e(f))&&a.charAt(a.length-1)=="e")j("Invalid exponent");else break}n++}a*=1;l.push({index:c,text:a,json:!0,fn:function(){return a}})}function m(){for(var c="",d=n,g,h,j;n<b.length;){var k=b.charAt(n);if(k=="."||i(k)||e(k))k=="."&&(g=n),c+=k;else break;n++}if(g)for(h=n;h<b.length;){k=b.charAt(h);if(k=="("){j=c.substr(g-d+1);c=c.substr(0,g-d);n=h;break}if(f(k))h++;else break}d={index:d,text:c};if(Ca.hasOwnProperty(c))d.fn=
d.json=Ca[c];else{var m=Nb(c,a);d.fn=y(function(a,b){return m(a,b)},{assign:function(a,b){return Ob(a,c,b)}})}l.push(d);j&&(l.push({index:g,text:".",json:!1}),l.push({index:g+1,text:j,json:!1}))}function k(a){var c=n;n++;for(var d="",e=a,g=!1;n<b.length;){var h=b.charAt(n);e+=h;if(g)h=="u"?(h=b.substring(n+1,n+5),h.match(/[\da-f]{4}/i)||j("Invalid unicode escape [\\u"+h+"]"),n+=4,d+=String.fromCharCode(parseInt(h,16))):(g=Nc[h],d+=g?g:h),g=!1;else if(h=="\\")g=!0;else if(h==a){n++;l.push({index:c,
text:e,string:d,json:!0,fn:function(){return d}});return}else d+=h;n++}j("Unterminated quote",c)}for(var l=[],q,n=0,B=[],r,p=":";n<b.length;){r=b.charAt(n);if(c("\"'"))k(r);else if(e(r)||c(".")&&e(d()))g();else if(i(r)){if(m(),"{,".indexOf(p)!=-1&&B[0]=="{"&&(q=l[l.length-1]))q.json=q.text.indexOf(".")==-1}else if(c("(){}[].,;:"))l.push({index:n,text:r,json:":[,".indexOf(p)!=-1&&c("{[")||c("}]:,")}),c("{[")&&B.unshift(r),c("}]")&&B.shift(),n++;else if(f(r)){n++;continue}else{var E=r+d(),D=E+d(2),
G=Ca[r],o=Ca[E],A=Ca[D];A?(l.push({index:n,text:D,fn:A}),n+=3):o?(l.push({index:n,text:E,fn:o}),n+=2):G?(l.push({index:n,text:r,fn:G,json:"[,:".indexOf(p)!=-1&&c("+-")}),n+=1):j("Unexpected next character ",n,n+1)}p=r}return l}function Oc(b,a,c,d){function e(a,c){throw Error("Syntax Error: Token '"+c.text+"' "+a+" at column "+(c.index+1)+" of the expression ["+b+"] starting at ["+b.substring(c.index)+"].");}function f(){if(F.length===0)throw Error("Unexpected end of expression: "+b);return F[0]}function i(a,
b,c,d){if(F.length>0){var e=F[0],g=e.text;if(g==a||g==b||g==c||g==d||!a&&!b&&!c&&!d)return e}return!1}function h(b,c,d,g){return(b=i(b,c,d,g))?(a&&!b.json&&e("is not valid json",b),F.shift(),b):!1}function j(a){h(a)||e("is unexpected, expecting ["+a+"]",i())}function g(a,b){return y(function(c,d){return a(c,d,b)},{constant:b.constant})}function m(a,b,c){return y(function(d,e){return b(d,e,a,c)},{constant:a.constant&&c.constant})}function k(){for(var a=[];;)if(F.length>0&&!i("}",")",";","]")&&a.push(fa()),
!h(";"))return a.length==1?a[0]:function(b,c){for(var d,e=0;e<a.length;e++){var g=a[e];g&&(d=g(b,c))}return d}}function l(){for(var a=h(),b=c(a.text),d=[];;)if(a=h(":"))d.push(N());else{var e=function(a,c,e){for(var e=[e],g=0;g<d.length;g++)e.push(d[g](a,c));return b.apply(a,e)};return function(){return e}}}function q(){for(var a=n(),b;;)if(b=h("||"))a=m(a,b.fn,n());else return a}function n(){var a=B(),b;if(b=h("&&"))a=m(a,b.fn,n());return a}function B(){var a=r(),b;if(b=h("==","!=","===","!=="))a=
m(a,b.fn,B());return a}function r(){var a;a=p();for(var b;b=h("+","-");)a=m(a,b.fn,p());if(b=h("<",">","<=",">="))a=m(a,b.fn,r());return a}function p(){for(var a=E(),b;b=h("*","/","%");)a=m(a,b.fn,E());return a}function E(){var a;return h("+")?D():(a=h("-"))?m(A,a.fn,E()):(a=h("!"))?g(a.fn,E()):D()}function D(){var a;if(h("("))a=fa(),j(")");else if(h("["))a=G();else if(h("{"))a=o();else{var b=h();(a=b.fn)||e("not a primary expression",b);if(b.json)a.constant=a.literal=!0}for(var c;b=h("(","[",".");)b.text===
"("?(a=ea(a,c),c=null):b.text==="["?(c=a,a=z(a)):b.text==="."?(c=a,a=ga(a)):e("IMPOSSIBLE");return a}function G(){var a=[],b=!0;if(f().text!="]"){do{var c=N();a.push(c);c.constant||(b=!1)}while(h(","))}j("]");return y(function(b,c){for(var d=[],e=0;e<a.length;e++)d.push(a[e](b,c));return d},{literal:!0,constant:b})}function o(){var a=[],b=!0;if(f().text!="}"){do{var c=h(),c=c.string||c.text;j(":");var d=N();a.push({key:c,value:d});d.constant||(b=!1)}while(h(","))}j("}");return y(function(b,c){for(var d=
{},e=0;e<a.length;e++){var g=a[e],h=g.value(b,c);d[g.key]=h}return d},{literal:!0,constant:b})}var A=Q(0),H,F=Mc(b,d),N=function(){var a=q(),c,d;return(d=h("="))?(a.assign||e("implies assignment but ["+b.substring(0,d.index)+"] can not be assigned to",d),c=q(),function(b,d){return a.assign(b,c(b,d),d)}):a},ea=function(a,b){var c=[];if(f().text!=")"){do c.push(N());while(h(","))}j(")");return function(d,e){for(var g=[],h=b?b(d,e):d,f=0;f<c.length;f++)g.push(c[f](d,e));f=a(d,e)||t;return f.apply?f.apply(h,
g):f(g[0],g[1],g[2],g[3],g[4])}},ga=function(a){var b=h().text,c=Nb(b,d);return y(function(b,d){return c(a(b,d),d)},{assign:function(c,d,e){return Ob(a(c,e),b,d)}})},z=function(a){var b=N();j("]");return y(function(c,d){var e=a(c,d),g=b(c,d),h;if(!e)return s;if((e=e[g])&&e.then){h=e;if(!("$$v"in e))h.$$v=s,h.then(function(a){h.$$v=a});e=e.$$v}return e},{assign:function(c,d,e){return a(c,e)[b(c,e)]=d}})},fa=function(){for(var a=N(),b;;)if(b=h("|"))a=m(a,b.fn,l());else return a};a?(N=q,ea=ga=z=fa=function(){e("is not valid json",
{text:b,index:0})},H=D()):H=k();F.length!==0&&e("is an unexpected token",F[0]);H.literal=!!H.literal;H.constant=!!H.constant;return H}function Ob(b,a,c){for(var a=a.split("."),d=0;a.length>1;d++){var e=a.shift(),f=b[e];f||(f={},b[e]=f);b=f}return b[a.shift()]=c}function kb(b,a,c){if(!a)return b;for(var a=a.split("."),d,e=b,f=a.length,i=0;i<f;i++)d=a[i],b&&(b=(e=b)[d]);return!c&&I(b)?ab(e,b):b}function Pb(b,a,c,d,e){return function(f,i){var h=i&&i.hasOwnProperty(b)?i:f,j;if(h===null||h===s)return h;
if((h=h[b])&&h.then){if(!("$$v"in h))j=h,j.$$v=s,j.then(function(a){j.$$v=a});h=h.$$v}if(!a||h===null||h===s)return h;if((h=h[a])&&h.then){if(!("$$v"in h))j=h,j.$$v=s,j.then(function(a){j.$$v=a});h=h.$$v}if(!c||h===null||h===s)return h;if((h=h[c])&&h.then){if(!("$$v"in h))j=h,j.$$v=s,j.then(function(a){j.$$v=a});h=h.$$v}if(!d||h===null||h===s)return h;if((h=h[d])&&h.then){if(!("$$v"in h))j=h,j.$$v=s,j.then(function(a){j.$$v=a});h=h.$$v}if(!e||h===null||h===s)return h;if((h=h[e])&&h.then){if(!("$$v"in
h))j=h,j.$$v=s,j.then(function(a){j.$$v=a});h=h.$$v}return h}}function Nb(b,a){if(nb.hasOwnProperty(b))return nb[b];var c=b.split("."),d=c.length,e;if(a)e=d<6?Pb(c[0],c[1],c[2],c[3],c[4]):function(a,b){var e=0,g;do g=Pb(c[e++],c[e++],c[e++],c[e++],c[e++])(a,b),b=s,a=g;while(e<d);return g};else{var f="var l, fn, p;\n";o(c,function(a,b){f+="if(s === null || s === undefined) return s;\nl=s;\ns="+(b?"s":'((k&&k.hasOwnProperty("'+a+'"))?k:s)')+'["'+a+'"];\nif (s && s.then) {\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n'});
f+="return s;";e=Function("s","k",f);e.toString=function(){return f}}return nb[b]=e}function Pc(){var b={};this.$get=["$filter","$sniffer",function(a,c){return function(d){switch(typeof d){case "string":return b.hasOwnProperty(d)?b[d]:b[d]=Oc(d,!1,a,c.csp);case "function":return d;default:return t}}}]}function Qc(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return Rc(function(a){b.$evalAsync(a)},a)}]}function Rc(b,a){function c(a){return a}function d(a){return i(a)}var e=function(){var h=
[],j,g;return g={resolve:function(a){if(h){var c=h;h=s;j=f(a);c.length&&b(function(){for(var a,b=0,d=c.length;b<d;b++)a=c[b],j.then(a[0],a[1])})}},reject:function(a){g.resolve(i(a))},promise:{then:function(b,g){var f=e(),i=function(d){try{f.resolve((b||c)(d))}catch(e){a(e),f.reject(e)}},n=function(b){try{f.resolve((g||d)(b))}catch(c){a(c),f.reject(c)}};h?h.push([i,n]):j.then(i,n);return f.promise}}}},f=function(a){return a&&a.then?a:{then:function(c){var d=e();b(function(){d.resolve(c(a))});return d.promise}}},
i=function(a){return{then:function(c,g){var f=e();b(function(){f.resolve((g||d)(a))});return f.promise}}};return{defer:e,reject:i,when:function(h,j,g){var m=e(),k,l=function(b){try{return(j||c)(b)}catch(d){return a(d),i(d)}},q=function(b){try{return(g||d)(b)}catch(c){return a(c),i(c)}};b(function(){f(h).then(function(a){k||(k=!0,m.resolve(f(a).then(l,q)))},function(a){k||(k=!0,m.resolve(q(a)))})});return m.promise},all:function(a){var b=e(),c=0,d=C(a)?[]:{};o(a,function(a,e){c++;f(a).then(function(a){d.hasOwnProperty(e)||
(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});c===0&&b.resolve(d);return b.promise}}}function Sc(){var b={};this.when=function(a,c){b[a]=y({reloadOnSearch:!0,caseInsensitiveMatch:!1},c);if(a){var d=a[a.length-1]=="/"?a.substr(0,a.length-1):a+"/";b[d]={redirectTo:a}}return this};this.otherwise=function(a){this.when(null,a);return this};this.$get=["$rootScope","$location","$routeParams","$q","$injector","$http","$templateCache",function(a,c,d,e,f,i,h){function j(a,b,c){for(var b=
"^"+b.replace(/[-\/\\^$:*+?.()|[\]{}]/g,"\\$&")+"$",d="",e=[],g={},f=/\\([:*])(\w+)/g,h,j=0;(h=f.exec(b))!==null;){d+=b.slice(j,h.index);switch(h[1]){case ":":d+="([^\\/]*)";break;case "*":d+="(.*)"}e.push(h[2]);j=f.lastIndex}d+=b.substr(j);var i=a.match(RegExp(d,c.caseInsensitiveMatch?"i":""));i&&o(e,function(a,b){g[a]=i[b+1]});return i?g:null}function g(){var b=m(),g=q.current;if(b&&g&&b.$$route===g.$$route&&ja(b.pathParams,g.pathParams)&&!b.reloadOnSearch&&!l)g.params=b.params,W(g.params,d),a.$broadcast("$routeUpdate",
g);else if(b||g)l=!1,a.$broadcast("$routeChangeStart",b,g),(q.current=b)&&b.redirectTo&&(x(b.redirectTo)?c.path(k(b.redirectTo,b.params)).search(b.params).replace():c.url(b.redirectTo(b.pathParams,c.path(),c.search())).replace()),e.when(b).then(function(){if(b){var a=y({},b.resolve),c;o(a,function(b,c){a[c]=x(b)?f.get(b):f.invoke(b)});if(w(c=b.template))I(c)&&(c=c(b.params));else if(w(c=b.templateUrl))if(I(c)&&(c=c(b.params)),w(c))b.loadedTemplateUrl=c,c=i.get(c,{cache:h}).then(function(a){return a.data});
w(c)&&(a.$template=c);return e.all(a)}}).then(function(c){if(b==q.current){if(b)b.locals=c,W(b.params,d);a.$broadcast("$routeChangeSuccess",b,g)}},function(c){b==q.current&&a.$broadcast("$routeChangeError",b,g,c)})}function m(){var a,d;o(b,function(b,e){if(!d&&(a=j(c.path(),e,b)))d=Fa(b,{params:y({},c.search(),a),pathParams:a}),d.$$route=b});return d||b[null]&&Fa(b[null],{params:{},pathParams:{}})}function k(a,b){var c=[];o((a||"").split(":"),function(a,d){if(d==0)c.push(a);else{var e=a.match(/(\w+)(.*)/),
g=e[1];c.push(b[g]);c.push(e[2]||"");delete b[g]}});return c.join("")}var l=!1,q={routes:b,reload:function(){l=!0;a.$evalAsync(g)}};a.$on("$locationChangeSuccess",g);return q}]}function Tc(){this.$get=Q({})}function Uc(){var b=10;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$injector","$exceptionHandler","$parse",function(a,c,d){function e(){this.$id=Ea();this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;
this["this"]=this.$root=this;this.$$destroyed=!1;this.$$asyncQueue=[];this.$$listeners={};this.$$isolateBindings={}}function f(a){if(j.$$phase)throw Error(j.$$phase+" already in progress");j.$$phase=a}function i(a,b){var c=d(a);va(c,b);return c}function h(){}e.prototype={$new:function(a){if(I(a))throw Error("API-CHANGE: Use $controller to instantiate controllers.");a?(a=new e,a.$root=this.$root):(a=function(){},a.prototype=this,a=new a,a.$id=Ea());a["this"]=a;a.$$listeners={};a.$parent=this;a.$$watchers=
a.$$nextSibling=a.$$childHead=a.$$childTail=null;a.$$prevSibling=this.$$childTail;this.$$childHead?this.$$childTail=this.$$childTail.$$nextSibling=a:this.$$childHead=this.$$childTail=a;return a},$watch:function(a,b,c){var d=i(a,"watch"),e=this.$$watchers,f={fn:b,last:h,get:d,exp:a,eq:!!c};if(!I(b)){var j=i(b||t,"listener");f.fn=function(a,b,c){j(c)}}if(typeof a=="string"&&d.constant){var r=f.fn;f.fn=function(a,b,c){r.call(this,a,b,c);sa(e,f)}}if(!e)e=this.$$watchers=[];e.unshift(f);return function(){sa(e,
f)}},$watchCollection:function(a,b){var c=this,e,f,h=0,j=d(a),i=[],p={},o=0;return this.$watch(function(){f=j(c);var a,b;if(L(f))if(C(f)){if(e!==i)e=i,o=e.length=0,h++;a=f.length;if(o!==a)h++,e.length=o=a;for(b=0;b<a;b++)e[b]!==f[b]&&(h++,e[b]=f[b])}else{e!==p&&(e=p={},o=0,h++);a=0;for(b in f)f.hasOwnProperty(b)&&(a++,e.hasOwnProperty(b)?e[b]!==f[b]&&(h++,e[b]=f[b]):(o++,e[b]=f[b],h++));if(o>a)for(b in h++,e)e.hasOwnProperty(b)&&!f.hasOwnProperty(b)&&(o--,delete e[b])}else e!==f&&(e=f,h++);return h},
function(){b(f,e,c)})},$digest:function(){var a,d,e,i,q=this.$$asyncQueue,n,o,r=b,p,E=[],D,G;f("$digest");do{o=!1;for(p=this;q.length;)try{p.$eval(q.shift())}catch(s){c(s)}do{if(i=p.$$watchers)for(n=i.length;n--;)try{if(a=i[n],(d=a.get(p))!==(e=a.last)&&!(a.eq?ja(d,e):typeof d=="number"&&typeof e=="number"&&isNaN(d)&&isNaN(e)))o=!0,a.last=a.eq?W(d):d,a.fn(d,e===h?d:e,p),r<5&&(D=4-r,E[D]||(E[D]=[]),G=I(a.exp)?"fn: "+(a.exp.name||a.exp.toString()):a.exp,G+="; newVal: "+da(d)+"; oldVal: "+da(e),E[D].push(G))}catch(A){c(A)}if(!(i=
p.$$childHead||p!==this&&p.$$nextSibling))for(;p!==this&&!(i=p.$$nextSibling);)p=p.$parent}while(p=i);if(o&&!r--)throw j.$$phase=null,Error(b+" $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: "+da(E));}while(o||q.length);j.$$phase=null},$destroy:function(){if(!(j==this||this.$$destroyed)){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;if(a.$$childHead==this)a.$$childHead=this.$$nextSibling;if(a.$$childTail==this)a.$$childTail=this.$$prevSibling;
if(this.$$prevSibling)this.$$prevSibling.$$nextSibling=this.$$nextSibling;if(this.$$nextSibling)this.$$nextSibling.$$prevSibling=this.$$prevSibling;this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null}},$eval:function(a,b){return d(a)(this,b)},$evalAsync:function(a){this.$$asyncQueue.push(a)},$apply:function(a){try{return f("$apply"),this.$eval(a)}catch(b){c(b)}finally{j.$$phase=null;try{j.$digest()}catch(d){throw c(d),d;}}},$on:function(a,b){var c=this.$$listeners[a];
c||(this.$$listeners[a]=c=[]);c.push(b);return function(){c[Ga(c,b)]=null}},$emit:function(a,b){var d=[],e,f=this,h=!1,i={name:a,targetScope:f,stopPropagation:function(){h=!0},preventDefault:function(){i.defaultPrevented=!0},defaultPrevented:!1},j=[i].concat(ka.call(arguments,1)),p,o;do{e=f.$$listeners[a]||d;i.currentScope=f;p=0;for(o=e.length;p<o;p++)if(e[p])try{if(e[p].apply(null,j),h)return i}catch(D){c(D)}else e.splice(p,1),p--,o--;f=f.$parent}while(f);return i},$broadcast:function(a,b){var d=
this,e=this,f={name:a,targetScope:this,preventDefault:function(){f.defaultPrevented=!0},defaultPrevented:!1},h=[f].concat(ka.call(arguments,1)),i,j;do{d=e;f.currentScope=d;e=d.$$listeners[a]||[];i=0;for(j=e.length;i<j;i++)if(e[i])try{e[i].apply(null,h)}catch(p){c(p)}else e.splice(i,1),i--,j--;if(!(e=d.$$childHead||d!==this&&d.$$nextSibling))for(;d!==this&&!(e=d.$$nextSibling);)d=d.$parent}while(d=e);return f}};var j=new e;return j}]}function Vc(){this.$get=["$window","$document",function(b,a){var c=
{},d=K((/android (\d+)/.exec(J((b.navigator||{}).userAgent))||[])[1]),e=a[0]||{},f,i=/^(Moz|webkit|O|ms)(?=[A-Z])/,h=e.body&&e.body.style,j=!1;if(h){for(var g in h)if(j=i.exec(g)){f=j[0];f=f.substr(0,1).toUpperCase()+f.substr(1);break}j=!!(f+"Transition"in h)}return{history:!(!b.history||!b.history.pushState||d<4),hashchange:"onhashchange"in b&&(!e.documentMode||e.documentMode>7),hasEvent:function(a){if(a=="input"&&X==9)return!1;if(u(c[a])){var b=e.createElement("div");c[a]="on"+a in b}return c[a]},
csp:e.securityPolicy?e.securityPolicy.isActive:!1,vendorPrefix:f,supportsTransitions:j}}]}function Wc(){this.$get=Q(M)}function Qb(b){var a={},c,d,e;if(!b)return a;o(b.split("\n"),function(b){e=b.indexOf(":");c=J(S(b.substr(0,e)));d=S(b.substr(e+1));c&&(a[c]?a[c]+=", "+d:a[c]=d)});return a}function Xc(b,a){var c=Yc.exec(b);if(c==null)return!0;var d={protocol:c[2],host:c[4],port:K(c[6])||Ba[c[2]]||null,relativeProtocol:c[2]===s||c[2]===""},c=lb.exec(a),c={protocol:c[1],host:c[3],port:K(c[5])||Ba[c[1]]||
null};return(d.protocol==c.protocol||d.relativeProtocol)&&d.host==c.host&&(d.port==c.port||d.relativeProtocol&&c.port==Ba[c.protocol])}function Rb(b){var a=L(b)?b:s;return function(c){a||(a=Qb(b));return c?a[J(c)]||null:a}}function Sb(b,a,c){if(I(c))return c(b,a);o(c,function(c){b=c(b,a)});return b}function Zc(){var b=/^\s*(\[|\{[^\{])/,a=/[\}\]]\s*$/,c=/^\)\]\}',?\n/,d=this.defaults={transformResponse:[function(d){x(d)&&(d=d.replace(c,""),b.test(d)&&a.test(d)&&(d=tb(d,!0)));return d}],transformRequest:[function(a){return L(a)&&
Da.apply(a)!=="[object File]"?da(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:{"Content-Type":"application/json;charset=utf-8"},put:{"Content-Type":"application/json;charset=utf-8"}},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"},e=this.interceptors=[],f=this.responseInterceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(a,b,c,g,m,k){function l(a){function c(a){var b=y({},a,{data:Sb(a.data,a.headers,e.transformResponse)});
return 200<=a.status&&a.status<300?b:m.reject(b)}var e={transformRequest:d.transformRequest,transformResponse:d.transformResponse},g={};y(e,a);e.headers=g;e.method=na(e.method);y(g,d.headers.common,d.headers[J(e.method)],a.headers);(a=Xc(e.url,b.url())?b.cookies()[e.xsrfCookieName||d.xsrfCookieName]:s)&&(g[e.xsrfHeaderName||d.xsrfHeaderName]=a);var f=[function(a){var b=Sb(a.data,Rb(g),a.transformRequest);u(a.data)&&delete g["Content-Type"];if(u(a.withCredentials)&&!u(d.withCredentials))a.withCredentials=
d.withCredentials;return q(a,b,g).then(c,c)},s],j=m.when(e);for(o(r,function(a){(a.request||a.requestError)&&f.unshift(a.request,a.requestError);(a.response||a.responseError)&&f.push(a.response,a.responseError)});f.length;)var a=f.shift(),i=f.shift(),j=j.then(a,i);j.success=function(a){j.then(function(b){a(b.data,b.status,b.headers,e)});return j};j.error=function(a){j.then(null,function(b){a(b.data,b.status,b.headers,e)});return j};return j}function q(b,c,e){function f(a,b,c){o&&(200<=a&&a<300?o.put(s,
[a,b,Qb(c)]):o.remove(s));h(b,a,c);g.$apply()}function h(a,c,d){c=Math.max(c,0);(200<=c&&c<300?k.resolve:k.reject)({data:a,status:c,headers:Rb(d),config:b})}function j(){var a=Ga(l.pendingRequests,b);a!==-1&&l.pendingRequests.splice(a,1)}var k=m.defer(),q=k.promise,o,r,s=n(b.url,b.params);l.pendingRequests.push(b);q.then(j,j);if((b.cache||d.cache)&&b.cache!==!1&&b.method=="GET")o=L(b.cache)?b.cache:L(d.cache)?d.cache:B;if(o)if(r=o.get(s))if(r.then)return r.then(j,j),r;else C(r)?h(r[1],r[0],W(r[2])):
h(r,200,{});else o.put(s,q);r||a(b.method,s,c,f,e,b.timeout,b.withCredentials,b.responseType);return q}function n(a,b){if(!b)return a;var c=[];ic(b,function(a,b){a==null||a==s||(C(a)||(a=[a]),o(a,function(a){L(a)&&(a=da(a));c.push(ua(b)+"="+ua(a))}))});return a+(a.indexOf("?")==-1?"?":"&")+c.join("&")}var B=c("$http"),r=[];o(e,function(a){r.unshift(x(a)?k.get(a):k.invoke(a))});o(f,function(a,b){var c=x(a)?k.get(a):k.invoke(a);r.splice(b,0,{response:function(a){return c(m.when(a))},responseError:function(a){return c(m.reject(a))}})});
l.pendingRequests=[];(function(a){o(arguments,function(a){l[a]=function(b,c){return l(y(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){o(arguments,function(a){l[a]=function(b,c,d){return l(y(d||{},{method:a,url:b,data:c}))}})})("post","put");l.defaults=d;return l}]}function $c(){this.$get=["$browser","$window","$document",function(b,a,c){return ad(b,bd,b.defer,a.angular.callbacks,c[0],a.location.protocol.replace(":",""))}]}function ad(b,a,c,d,e,f){function i(a,b){var c=
e.createElement("script"),d=function(){e.body.removeChild(c);b&&b()};c.type="text/javascript";c.src=a;X?c.onreadystatechange=function(){/loaded|complete/.test(c.readyState)&&d()}:c.onload=c.onerror=d;e.body.appendChild(c)}return function(e,j,g,m,k,l,q,n){function B(a,c,d,e){c=(j.match(lb)||["",f])[1]=="file"?d?200:404:c;a(c==1223?204:c,d,e);b.$$completeOutstandingRequest(t)}b.$$incOutstandingRequestCount();j=j||b.url();if(J(e)=="jsonp"){var r="_"+(d.counter++).toString(36);d[r]=function(a){d[r].data=
a};i(j.replace("JSON_CALLBACK","angular.callbacks."+r),function(){d[r].data?B(m,200,d[r].data):B(m,-2);delete d[r]})}else{var p=new a;p.open(e,j,!0);o(k,function(a,b){a&&p.setRequestHeader(b,a)});var s;p.onreadystatechange=function(){if(p.readyState==4){var a=p.getAllResponseHeaders(),b=["Cache-Control","Content-Language","Content-Type","Expires","Last-Modified","Pragma"];a||(a="",o(b,function(b){var c=p.getResponseHeader(b);c&&(a+=b+": "+c+"\n")}));B(m,s||p.status,p.responseType?p.response:p.responseText,
a)}};if(q)p.withCredentials=!0;if(n)p.responseType=n;p.send(g||"");l>0&&c(function(){s=-1;p.abort()},l)}}}function cd(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January,February,March,April,May,June,July,August,September,October,November,December".split(","),
SHORTMONTH:"Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),DAY:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),SHORTDAY:"Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(b){return b===1?"one":"other"}}}}function dd(){this.$get=["$rootScope","$browser","$q",
"$exceptionHandler",function(b,a,c,d){function e(e,h,j){var g=c.defer(),m=g.promise,k=w(j)&&!j,h=a.defer(function(){try{g.resolve(e())}catch(a){g.reject(a),d(a)}k||b.$apply()},h),j=function(){delete f[m.$$timeoutId]};m.$$timeoutId=h;f[h]=g;m.then(j,j);return m}var f={};e.cancel=function(b){return b&&b.$$timeoutId in f?(f[b.$$timeoutId].reject("canceled"),a.defer.cancel(b.$$timeoutId)):!1};return e}]}function Tb(b){function a(a,e){return b.factory(a+c,e)}var c="Filter";this.register=a;this.$get=["$injector",
function(a){return function(b){return a.get(b+c)}}];a("currency",Ub);a("date",Vb);a("filter",ed);a("json",fd);a("limitTo",gd);a("lowercase",hd);a("number",Wb);a("orderBy",Xb);a("uppercase",id)}function ed(){return function(b,a,c){if(!C(b))return b;var d=[];d.check=function(a){for(var b=0;b<d.length;b++)if(!d[b](a))return!1;return!0};switch(typeof c){case "function":break;case "boolean":if(c==!0){c=function(a,b){return Ia.equals(a,b)};break}default:c=function(a,b){b=(""+b).toLowerCase();return(""+
a).toLowerCase().indexOf(b)>-1}}var e=function(a,b){if(typeof b=="string"&&b.charAt(0)==="!")return!e(a,b.substr(1));switch(typeof a){case "boolean":case "number":case "string":return c(a,b);case "object":switch(typeof b){case "object":return c(a,b);default:for(var d in a)if(d.charAt(0)!=="$"&&e(a[d],b))return!0}return!1;case "array":for(d=0;d<a.length;d++)if(e(a[d],b))return!0;return!1;default:return!1}};switch(typeof a){case "boolean":case "number":case "string":a={$:a};case "object":for(var f in a)f==
"$"?function(){if(a[f]){var b=f;d.push(function(c){return e(c,a[b])})}}():function(){if(a[f]){var b=f;d.push(function(c){return e(kb(c,b),a[b])})}}();break;case "function":d.push(a);break;default:return b}for(var i=[],h=0;h<b.length;h++){var j=b[h];d.check(j)&&i.push(j)}return i}}function Ub(b){var a=b.NUMBER_FORMATS;return function(b,d){if(u(d))d=a.CURRENCY_SYM;return Yb(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,2).replace(/\u00A4/g,d)}}function Wb(b){var a=b.NUMBER_FORMATS;return function(b,d){return Yb(b,
a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function Yb(b,a,c,d,e){if(isNaN(b)||!isFinite(b))return"";var f=b<0,b=Math.abs(b),i=b+"",h="",j=[],g=!1;if(i.indexOf("e")!==-1){var m=i.match(/([\d\.]+)e(-?)(\d+)/);m&&m[2]=="-"&&m[3]>e+1?i="0":(h=i,g=!0)}if(!g){i=(i.split(Zb)[1]||"").length;u(e)&&(e=Math.min(Math.max(a.minFrac,i),a.maxFrac));var i=Math.pow(10,e),b=Math.round(b*i)/i,b=(""+b).split(Zb),i=b[0],b=b[1]||"",g=0,m=a.lgSize,k=a.gSize;if(i.length>=m+k)for(var g=i.length-m,l=0;l<g;l++)(g-l)%k===
0&&l!==0&&(h+=c),h+=i.charAt(l);for(l=g;l<i.length;l++)(i.length-l)%m===0&&l!==0&&(h+=c),h+=i.charAt(l);for(;b.length<e;)b+="0";e&&e!=="0"&&(h+=d+b.substr(0,e))}j.push(f?a.negPre:a.posPre);j.push(h);j.push(f?a.negSuf:a.posSuf);return j.join("")}function ob(b,a,c){var d="";b<0&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function O(b,a,c,d){return function(e){e=e["get"+b]();if(c>0||e>-c)e+=c;e===0&&c==-12&&(e=12);return ob(e,a,d)}}function Sa(b,a){return function(c,
d){var e=c["get"+b](),f=na(a?"SHORT"+b:b);return d[f][e]}}function Vb(b){function a(a){var b;if(b=a.match(c)){var a=new Date(0),f=0,i=0,h=b[8]?a.setUTCFullYear:a.setFullYear,j=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=K(b[9]+b[10]),i=K(b[9]+b[11]));h.call(a,K(b[1]),K(b[2])-1,K(b[3]));j.call(a,K(b[4]||0)-f,K(b[5]||0)-i,K(b[6]||0),K(b[7]||0))}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e){var f="",i=[],h,j,e=e||
"mediumDate",e=b.DATETIME_FORMATS[e]||e;x(c)&&(c=jd.test(c)?K(c):a(c));Za(c)&&(c=new Date(c));if(!qa(c))return c;for(;e;)(j=kd.exec(e))?(i=i.concat(ka.call(j,1)),e=i.pop()):(i.push(e),e=null);o(i,function(a){h=ld[a];f+=h?h(c,b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return f}}function fd(){return function(b){return da(b,!0)}}function gd(){return function(b,a){if(!C(b)&&!x(b))return b;a=K(a);if(x(b))return a?a>=0?b.slice(0,a):b.slice(a,b.length):"";var c=[],d,e;a>b.length?a=
b.length:a<-b.length&&(a=-b.length);a>0?(d=0,e=a):(d=b.length+a,e=b.length);for(;d<e;d++)c.push(b[d]);return c}}function Xb(b){return function(a,c,d){function e(a,b){return Ha(b)?function(b,c){return a(c,b)}:a}if(!C(a))return a;if(!c)return a;for(var c=C(c)?c:[c],c=$a(c,function(a){var c=!1,d=a||pa;if(x(a)){if(a.charAt(0)=="+"||a.charAt(0)=="-")c=a.charAt(0)=="-",a=a.substring(1);d=b(a)}return e(function(a,b){var c;c=d(a);var e=d(b),f=typeof c,h=typeof e;f==h?(f=="string"&&(c=c.toLowerCase()),f==
"string"&&(e=e.toLowerCase()),c=c===e?0:c<e?-1:1):c=f<h?-1:1;return c},c)}),f=[],i=0;i<a.length;i++)f.push(a[i]);return f.sort(e(function(a,b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(e!==0)return e}return 0},d))}}function Y(b){I(b)&&(b={link:b});b.restrict=b.restrict||"AC";return Q(b)}function $b(b,a){function c(a,c){c=c?"-"+db(c,"-"):"";b.removeClass((a?Ta:Ua)+c).addClass((a?Ua:Ta)+c)}var d=this,e=b.parent().controller("form")||Va,f=0,i=d.$error={},h=[];d.$name=a.name;d.$dirty=!1;d.$pristine=
!0;d.$valid=!0;d.$invalid=!1;e.$addControl(d);b.addClass(oa);c(!0);d.$addControl=function(a){h.push(a);a.$name&&!d.hasOwnProperty(a.$name)&&(d[a.$name]=a)};d.$removeControl=function(a){a.$name&&d[a.$name]===a&&delete d[a.$name];o(i,function(b,c){d.$setValidity(c,!0,a)});sa(h,a)};d.$setValidity=function(a,b,h){var k=i[a];if(b){if(k&&(sa(k,h),!k.length)){f--;if(!f)c(b),d.$valid=!0,d.$invalid=!1;i[a]=!1;c(!0,a);e.$setValidity(a,!0,d)}}else{f||c(b);if(k){if(Ga(k,h)!=-1)return}else i[a]=k=[],f++,c(!1,
a),e.$setValidity(a,!1,d);k.push(h);d.$valid=!1;d.$invalid=!0}};d.$setDirty=function(){b.removeClass(oa).addClass(Wa);d.$dirty=!0;d.$pristine=!1;e.$setDirty()};d.$setPristine=function(){b.removeClass(Wa).addClass(oa);d.$dirty=!1;d.$pristine=!0;o(h,function(a){a.$setPristine()})}}function U(b){return u(b)||b===""||b===null||b!==b}function Xa(b,a,c,d,e,f){var i=function(){var e=a.val();if(Ha(c.ngTrim||"T"))e=S(e);d.$viewValue!==e&&b.$apply(function(){d.$setViewValue(e)})};if(e.hasEvent("input"))a.bind("input",
i);else{var h;a.bind("keydown",function(a){a=a.keyCode;a===91||15<a&&a<19||37<=a&&a<=40||h||(h=f.defer(function(){i();h=null}))});a.bind("change",i)}d.$render=function(){a.val(U(d.$viewValue)?"":d.$viewValue)};var j=c.ngPattern,g=function(a,b){return U(b)||a.test(b)?(d.$setValidity("pattern",!0),b):(d.$setValidity("pattern",!1),s)};j&&(j.match(/^\/(.*)\/$/)?(j=RegExp(j.substr(1,j.length-2)),e=function(a){return g(j,a)}):e=function(a){var c=b.$eval(j);if(!c||!c.test)throw Error("Expected "+j+" to be a RegExp but was "+
c);return g(c,a)},d.$formatters.push(e),d.$parsers.push(e));if(c.ngMinlength){var m=K(c.ngMinlength),e=function(a){return!U(a)&&a.length<m?(d.$setValidity("minlength",!1),s):(d.$setValidity("minlength",!0),a)};d.$parsers.push(e);d.$formatters.push(e)}if(c.ngMaxlength){var k=K(c.ngMaxlength),e=function(a){return!U(a)&&a.length>k?(d.$setValidity("maxlength",!1),s):(d.$setValidity("maxlength",!0),a)};d.$parsers.push(e);d.$formatters.push(e)}}function pb(b,a){b="ngClass"+b;return Y(function(c,d,e){function f(b){if(a===
!0||c.$index%2===a)j&&b!==j&&i(j),h(b);j=b}function i(a){L(a)&&!C(a)&&(a=$a(a,function(a,b){if(a)return b}));d.removeClass(C(a)?a.join(" "):a)}function h(a){L(a)&&!C(a)&&(a=$a(a,function(a,b){if(a)return b}));a&&d.addClass(C(a)?a.join(" "):a)}var j=s;c.$watch(e[b],f,!0);e.$observe("class",function(){var a=c.$eval(e[b]);f(a,a)});b!=="ngClass"&&c.$watch("$index",function(d,f){var j=d%2;j!==f%2&&(j==a?h(c.$eval(e[b])):i(c.$eval(e[b])))})})}var J=function(b){return x(b)?b.toLowerCase():b},na=function(b){return x(b)?
b.toUpperCase():b},X=K((/msie (\d+)/.exec(J(navigator.userAgent))||[])[1]),v,ca,ka=[].slice,Ya=[].push,Da=Object.prototype.toString,hc=M.angular,Ia=M.angular||(M.angular={}),xa,jb,Z=["0","0","0"];t.$inject=[];pa.$inject=[];jb=X<9?function(b){b=b.nodeName?b:b[0];return b.scopeName&&b.scopeName!="HTML"?na(b.scopeName+":"+b.nodeName):b.nodeName}:function(b){return b.nodeName?b.nodeName:b[0].nodeName};var nc=/[A-Z]/g,md={full:"1.1.4",major:1,minor:1,dot:4,codeName:"quantum-manipulation"},La=P.cache={},
Ka=P.expando="ng-"+(new Date).getTime(),rc=1,ac=M.document.addEventListener?function(b,a,c){b.addEventListener(a,c,!1)}:function(b,a,c){b.attachEvent("on"+a,c)},ib=M.document.removeEventListener?function(b,a,c){b.removeEventListener(a,c,!1)}:function(b,a,c){b.detachEvent("on"+a,c)},pc=/([\:\-\_]+(.))/g,qc=/^moz([A-Z])/,za=P.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;V.readyState==="complete"?setTimeout(a):(this.bind("DOMContentLoaded",a),P(M).bind("load",a))},toString:function(){var b=
[];o(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return b>=0?v(this[b]):v(this[this.length+b])},length:0,push:Ya,sort:[].sort,splice:[].splice},Oa={};o("multiple,selected,checked,disabled,readOnly,required,open".split(","),function(b){Oa[J(b)]=b});var Eb={};o("input,select,option,textarea,button,form,details".split(","),function(b){Eb[na(b)]=!0});o({data:zb,inheritedData:Na,scope:function(b){return Na(b,"$scope")},controller:Cb,injector:function(b){return Na(b,"$injector")},
removeAttr:function(b,a){b.removeAttribute(a)},hasClass:Ma,css:function(b,a,c){a=Ja(a);if(w(c))b.style[a]=c;else{var d;X<=8&&(d=b.currentStyle&&b.currentStyle[a],d===""&&(d="auto"));d=d||b.style[a];X<=8&&(d=d===""?s:d);return d}},attr:function(b,a,c){var d=J(a);if(Oa[d])if(w(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||t).specified?d:s;else if(w(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),b===null?
s:b},prop:function(b,a,c){if(w(c))b[a]=c;else return b[a]},text:y(X<9?function(b,a){if(b.nodeType==1){if(u(a))return b.innerText;b.innerText=a}else{if(u(a))return b.nodeValue;b.nodeValue=a}}:function(b,a){if(u(a))return b.textContent;b.textContent=a},{$dv:""}),val:function(b,a){if(u(a))return b.value;b.value=a},html:function(b,a){if(u(a))return b.innerHTML;for(var c=0,d=b.childNodes;c<d.length;c++)wa(d[c]);b.innerHTML=a}},function(b,a){P.prototype[a]=function(a,d){var e,f;if((b.length==2&&b!==Ma&&
b!==Cb?a:d)===s)if(L(a)){for(e=0;e<this.length;e++)if(b===zb)b(this[e],a);else for(f in a)b(this[e],f,a[f]);return this}else{if(this.length)return b(this[0],a,d)}else{for(e=0;e<this.length;e++)b(this[e],a,d);return this}return b.$dv}});o({removeData:xb,dealoc:wa,bind:function a(c,d,e){var f=$(c,"events"),i=$(c,"handle");f||$(c,"events",f={});i||$(c,"handle",i=sc(c,f));o(d.split(" "),function(d){var j=f[d];if(!j){if(d=="mouseenter"||d=="mouseleave"){var g=0;f.mouseenter=[];f.mouseleave=[];a(c,"mouseover",
function(a){g++;g==1&&i(a,"mouseenter")});a(c,"mouseout",function(a){g--;g==0&&i(a,"mouseleave")})}else ac(c,d,i),f[d]=[];j=f[d]}j.push(e)})},unbind:yb,replaceWith:function(a,c){var d,e=a.parentNode;wa(a);o(new P(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];o(a.childNodes,function(a){a.nodeType===1&&c.push(a)});return c},contents:function(a){return a.childNodes||[]},append:function(a,c){o(new P(c),function(c){(a.nodeType===1||a.nodeType===
11)&&a.appendChild(c)})},prepend:function(a,c){if(a.nodeType===1){var d=a.firstChild;o(new P(c),function(c){d?a.insertBefore(c,d):(a.appendChild(c),d=c)})}},wrap:function(a,c){var c=v(c)[0],d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:function(a){wa(a);var c=a.parentNode;c&&c.removeChild(a)},after:function(a,c){var d=a,e=a.parentNode;o(new P(c),function(a){e.insertBefore(a,d.nextSibling);d=a})},addClass:Bb,removeClass:Ab,toggleClass:function(a,c,d){u(d)&&(d=!Ma(a,c));(d?Bb:Ab)(a,
c)},parent:function(a){return(a=a.parentNode)&&a.nodeType!==11?a:null},next:function(a){if(a.nextElementSibling)return a.nextElementSibling;for(a=a.nextSibling;a!=null&&a.nodeType!==1;)a=a.nextSibling;return a},find:function(a,c){return a.getElementsByTagName(c)},clone:hb,triggerHandler:function(a,c){var d=($(a,"events")||{})[c];o(d,function(c){c.call(a,null)})}},function(a,c){P.prototype[c]=function(c,e){for(var f,i=0;i<this.length;i++)f==s?(f=a(this[i],c,e),f!==s&&(f=v(f))):gb(f,a(this[i],c,e));
return f==s?this:f}});Pa.prototype={put:function(a,c){this[la(a)]=c},get:function(a){return this[la(a)]},remove:function(a){var c=this[a=la(a)];delete this[a];return c}};var uc=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,vc=/,/,wc=/^\s*(_?)(\S+?)\1\s*$/,tc=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;Gb.$inject=["$provide"];var nd=function(){this.$get=["$animation","$window","$sniffer",function(a,c,d){function e(a){a.css("display","")}function f(a){a.css("display","none")}function i(a,c,d){d?d.after(a):c.append(a)}
function h(a){a.remove()}function j(a,c,d){i(a,c,d)}return function(g,m){function k(e,f,h){var i=l&&g.$eval(l),e=l?L(i)?i[e]:i+"-"+e:"",j=(i=a(e))&&i.setup,k=i&&i.start;if(e){var m=e+"-setup",q=e+"-start";return function(a,e,g){function i(){h(a,e,g);a.removeClass(m);a.removeClass(q)}if(!d.supportsTransitions&&!j&&!k)f(a,e,g),h(a,e,g);else{a.addClass(m);f(a,e,g);if(a.length==0)return i();var l=(j||t)(a);c.setTimeout(function(){a.addClass(q);if(k)k(a,i,l);else if(I(c.getComputedStyle)){var e=d.vendorPrefix+
"Transition",f=0;o(a,function(a){a=c.getComputedStyle(a)||{};f=Math.max(parseFloat(a.transitionDuration)||parseFloat(a[e+"Duration"])||0,f)});c.setTimeout(i,f*1E3)}else i()},1)}}}else return function(a,c,d){f(a,c,d);h(a,c,d)}}var l=m.ngAnimate,q={};q.enter=k("enter",i,t);q.leave=k("leave",t,h);q.move=k("move",j,t);q.show=k("show",e,t);q.hide=k("hide",t,f);return q}}]},Ib="Non-assignable model expression: ";Hb.$inject=["$provide"];var Cc=/^(x[\:\-_]|data[\:\-_])/i,lb=/^([^:]+):\/\/(\w+:{0,1}\w*@)?(\{?[\w\.-]*\}?)(:([0-9]+))?(\/[^\?#]*)?(\?([^#]*))?(#(.*))?$/,
bc=/^([^\?#]*)?(\?([^#]*))?(#(.*))?$/,Jc=bc,Ba={http:80,https:443,ftp:21};mb.prototype={$$replace:!1,absUrl:Ra("$$absUrl"),url:function(a,c){if(u(a))return this.$$url;var d=bc.exec(a);d[1]&&this.path(decodeURIComponent(d[1]));if(d[2]||d[1])this.search(d[3]||"");this.hash(d[5]||"",c);return this},protocol:Ra("$$protocol"),host:Ra("$$host"),port:Ra("$$port"),path:Mb("$$path",function(a){return a.charAt(0)=="/"?a:"/"+a}),search:function(a,c){if(u(a))return this.$$search;w(c)?c===null?delete this.$$search[a]:
this.$$search[a]=c:this.$$search=x(a)?bb(a):a;this.$$compose();return this},hash:Mb("$$hash",pa),replace:function(){this.$$replace=!0;return this}};Qa.prototype=Fa(mb.prototype);Lb.prototype=Fa(Qa.prototype);var Ca={"null":function(){return null},"true":function(){return!0},"false":function(){return!1},undefined:t,"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return w(d)?w(e)?d+e:d:w(e)?e:s},"-":function(a,c,d,e){d=d(a,c);e=e(a,c);return(w(d)?d:0)-(w(e)?e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},
"/":function(a,c,d,e){return d(a,c)/e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"^":function(a,c,d,e){return d(a,c)^e(a,c)},"=":t,"===":function(a,c,d,e){return d(a,c)===e(a,c)},"!==":function(a,c,d,e){return d(a,c)!==e(a,c)},"==":function(a,c,d,e){return d(a,c)==e(a,c)},"!=":function(a,c,d,e){return d(a,c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,c,d,e){return d(a,c)<=e(a,c)},">=":function(a,c,d,e){return d(a,c)>=e(a,
c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},"||":function(a,c,d,e){return d(a,c)||e(a,c)},"&":function(a,c,d,e){return d(a,c)&e(a,c)},"|":function(a,c,d,e){return e(a,c)(a,c,d(a,c))},"!":function(a,c,d){return!d(a,c)}},Nc={n:"\n",f:"\u000c",r:"\r",t:"\t",v:"\u000b","'":"'",'"':'"'},nb={},Yc=/^(([^:]+):)?\/\/(\w+:{0,1}\w*@)?([\w\.-]*)?(:([0-9]+))?(.*)$/,bd=M.XMLHttpRequest||function(){try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(a){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(c){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(d){}throw Error("This browser does not support XMLHttpRequest.");
};Tb.$inject=["$provide"];Ub.$inject=["$locale"];Wb.$inject=["$locale"];var Zb=".",ld={yyyy:O("FullYear",4),yy:O("FullYear",2,0,!0),y:O("FullYear",1),MMMM:Sa("Month"),MMM:Sa("Month",!0),MM:O("Month",2,1),M:O("Month",1,1),dd:O("Date",2),d:O("Date",1),HH:O("Hours",2),H:O("Hours",1),hh:O("Hours",2,-12),h:O("Hours",1,-12),mm:O("Minutes",2),m:O("Minutes",1),ss:O("Seconds",2),s:O("Seconds",1),sss:O("Milliseconds",3),EEEE:Sa("Day"),EEE:Sa("Day",!0),a:function(a,c){return a.getHours()<12?c.AMPMS[0]:c.AMPMS[1]},
Z:function(a){var a=-1*a.getTimezoneOffset(),c=a>=0?"+":"";c+=ob(Math[a>0?"floor":"ceil"](a/60),2)+ob(Math.abs(a%60),2);return c}},kd=/((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,jd=/^\d+$/;Vb.$inject=["$locale"];var hd=Q(J),id=Q(na);Xb.$inject=["$parse"];var od=Q({restrict:"E",compile:function(a,c){X<=8&&(!c.href&&!c.name&&c.$set("href",""),a.append(V.createComment("IE fix")));return function(a,c){c.bind("click",function(a){c.attr("href")||a.preventDefault()})}}}),
qb={};o(Oa,function(a,c){var d=aa("ng-"+c);qb[d]=function(){return{priority:100,compile:function(){return function(a,f,i){a.$watch(i[d],function(a){i.$set(c,!!a)})}}}}});o(["src","href"],function(a){var c=aa("ng-"+a);qb[c]=function(){return{priority:99,link:function(d,e,f){f.$observe(c,function(c){c&&(f.$set(a,c),X&&e.prop(a,f[a]))})}}}});var Va={$addControl:t,$removeControl:t,$setValidity:t,$setDirty:t,$setPristine:t};$b.$inject=["$element","$attrs","$scope"];var Ya=function(a){return["$timeout",
function(c){var d={name:"form",restrict:"E",controller:$b,compile:function(){return{pre:function(a,d,i,h){if(!i.action){var j=function(a){a.preventDefault?a.preventDefault():a.returnValue=!1};ac(d[0],"submit",j);d.bind("$destroy",function(){c(function(){ib(d[0],"submit",j)},0,!1)})}var g=d.parent().controller("form"),m=i.name||i.ngForm;m&&(a[m]=h);g&&d.bind("$destroy",function(){g.$removeControl(h);m&&(a[m]=s);y(h,Va)})}}}};return a?y(W(d),{restrict:"EAC"}):d}]},pd=Ya(),qd=Ya(!0),rd=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
sd=/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,td=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,cc={text:Xa,number:function(a,c,d,e,f,i){Xa(a,c,d,e,f,i);e.$parsers.push(function(a){var c=U(a);return c||td.test(a)?(e.$setValidity("number",!0),a===""?null:c?a:parseFloat(a)):(e.$setValidity("number",!1),s)});e.$formatters.push(function(a){return U(a)?"":""+a});if(d.min){var h=parseFloat(d.min),a=function(a){return!U(a)&&a<h?(e.$setValidity("min",!1),s):(e.$setValidity("min",!0),a)};e.$parsers.push(a);
e.$formatters.push(a)}if(d.max){var j=parseFloat(d.max),d=function(a){return!U(a)&&a>j?(e.$setValidity("max",!1),s):(e.$setValidity("max",!0),a)};e.$parsers.push(d);e.$formatters.push(d)}e.$formatters.push(function(a){return U(a)||Za(a)?(e.$setValidity("number",!0),a):(e.$setValidity("number",!1),s)})},url:function(a,c,d,e,f,i){Xa(a,c,d,e,f,i);a=function(a){return U(a)||rd.test(a)?(e.$setValidity("url",!0),a):(e.$setValidity("url",!1),s)};e.$formatters.push(a);e.$parsers.push(a)},email:function(a,
c,d,e,f,i){Xa(a,c,d,e,f,i);a=function(a){return U(a)||sd.test(a)?(e.$setValidity("email",!0),a):(e.$setValidity("email",!1),s)};e.$formatters.push(a);e.$parsers.push(a)},radio:function(a,c,d,e){u(d.name)&&c.attr("name",Ea());c.bind("click",function(){c[0].checked&&a.$apply(function(){e.$setViewValue(d.value)})});e.$render=function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e){var f=d.ngTrueValue,i=d.ngFalseValue;x(f)||(f=!0);x(i)||(i=!1);c.bind("click",
function(){a.$apply(function(){e.$setViewValue(c[0].checked)})});e.$render=function(){c[0].checked=e.$viewValue};e.$formatters.push(function(a){return a===f});e.$parsers.push(function(a){return a?f:i})},hidden:t,button:t,submit:t,reset:t},dc=["$browser","$sniffer",function(a,c){return{restrict:"E",require:"?ngModel",link:function(d,e,f,i){i&&(cc[J(f.type)]||cc.text)(d,e,f,i,c,a)}}}],Ua="ng-valid",Ta="ng-invalid",oa="ng-pristine",Wa="ng-dirty",ud=["$scope","$exceptionHandler","$attrs","$element","$parse",
function(a,c,d,e,f){function i(a,c){c=c?"-"+db(c,"-"):"";e.removeClass((a?Ta:Ua)+c).addClass((a?Ua:Ta)+c)}this.$modelValue=this.$viewValue=Number.NaN;this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$name=d.name;var h=f(d.ngModel),j=h.assign;if(!j)throw Error(Ib+d.ngModel+" ("+ta(e)+")");this.$render=t;var g=e.inheritedData("$formController")||Va,m=0,k=this.$error={};e.addClass(oa);i(!0);this.$setValidity=function(a,
c){if(k[a]!==!c){if(c){if(k[a]&&m--,!m)i(!0),this.$valid=!0,this.$invalid=!1}else i(!1),this.$invalid=!0,this.$valid=!1,m++;k[a]=!c;i(c,a);g.$setValidity(a,c,this)}};this.$setPristine=function(){this.$dirty=!1;this.$pristine=!0;e.removeClass(Wa).addClass(oa)};this.$setViewValue=function(d){this.$viewValue=d;if(this.$pristine)this.$dirty=!0,this.$pristine=!1,e.removeClass(oa).addClass(Wa),g.$setDirty();o(this.$parsers,function(a){d=a(d)});if(this.$modelValue!==d)this.$modelValue=d,j(a,d),o(this.$viewChangeListeners,
function(a){try{a()}catch(d){c(d)}})};var l=this;a.$watch(function(){var c=h(a);if(l.$modelValue!==c){var d=l.$formatters,e=d.length;for(l.$modelValue=c;e--;)c=d[e](c);if(l.$viewValue!==c)l.$viewValue=c,l.$render()}})}],vd=function(){return{require:["ngModel","^?form"],controller:ud,link:function(a,c,d,e){var f=e[0],i=e[1]||Va;i.$addControl(f);c.bind("$destroy",function(){i.$removeControl(f)})}}},wd=Q({require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),
ec=function(){return{require:"?ngModel",link:function(a,c,d,e){if(e){d.required=!0;var f=function(a){if(d.required&&(U(a)||a===!1))e.$setValidity("required",!1);else return e.$setValidity("required",!0),a};e.$formatters.push(f);e.$parsers.unshift(f);d.$observe("required",function(){f(e.$viewValue)})}}}},xd=function(){return{require:"ngModel",link:function(a,c,d,e){var f=(a=/\/(.*)\//.exec(d.ngList))&&RegExp(a[1])||d.ngList||",";e.$parsers.push(function(a){var c=[];a&&o(a.split(f),function(a){a&&c.push(S(a))});
return c});e.$formatters.push(function(a){return C(a)?a.join(", "):s})}}},yd=/^(true|false|\d+)$/,zd=function(){return{priority:100,compile:function(a,c){return yd.test(c.ngValue)?function(a,c,f){f.$set("value",a.$eval(f.ngValue))}:function(a,c,f){a.$watch(f.ngValue,function(a){f.$set("value",a,!1)})}}}},Ad=Y(function(a,c,d){c.addClass("ng-binding").data("$binding",d.ngBind);a.$watch(d.ngBind,function(a){c.text(a==s?"":a)})}),Bd=["$interpolate",function(a){return function(c,d,e){c=a(d.attr(e.$attr.ngBindTemplate));
d.addClass("ng-binding").data("$binding",c);e.$observe("ngBindTemplate",function(a){d.text(a)})}}],Cd=[function(){return function(a,c,d){c.addClass("ng-binding").data("$binding",d.ngBindHtmlUnsafe);a.$watch(d.ngBindHtmlUnsafe,function(a){c.html(a||"")})}}],Dd=pb("",!0),Ed=pb("Odd",0),Fd=pb("Even",1),Gd=Y({compile:function(a,c){c.$set("ngCloak",s);a.removeClass("ng-cloak")}}),Hd=[function(){return{scope:!0,controller:"@"}}],Id=["$sniffer",function(a){return{priority:1E3,compile:function(){a.csp=!0}}}],
fc={};o("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress".split(" "),function(a){var c=aa("ng-"+a);fc[c]=["$parse",function(d){return function(e,f,i){var h=d(i[c]);f.bind(J(a),function(a){e.$apply(function(){h(e,{$event:a})})})}}]});var Jd=Y(function(a,c,d){c.bind("submit",function(){a.$apply(d.ngSubmit)})}),Kd=["$http","$templateCache","$anchorScroll","$compile","$animator",function(a,c,d,e,f){return{restrict:"ECA",terminal:!0,compile:function(i,
h){var j=h.ngInclude||h.src,g=h.onload||"",m=h.autoscroll;return function(h,i,o){var n=f(h,o),s=0,r,p=function(){r&&(r.$destroy(),r=null);n.leave(i.contents(),i)};h.$watch(j,function(f){var j=++s;f?a.get(f,{cache:c}).success(function(a){j===s&&(r&&r.$destroy(),r=h.$new(),n.leave(i.contents(),i),a=v("<div/>").html(a).contents(),n.enter(a,i),e(a)(r),w(m)&&(!m||h.$eval(m))&&d(),r.$emit("$includeContentLoaded"),h.$eval(g))}).error(function(){j===s&&p()}):p()})}}}}],Ld=Y({compile:function(){return{pre:function(a,
c,d){a.$eval(d.ngInit)}}}}),Md=Y({terminal:!0,priority:1E3}),Nd=["$locale","$interpolate",function(a,c){var d=/{}/g;return{restrict:"EA",link:function(e,f,i){var h=i.count,j=f.attr(i.$attr.when),g=i.offset||0,m=e.$eval(j),k={},l=c.startSymbol(),q=c.endSymbol();o(m,function(a,e){k[e]=c(a.replace(d,l+h+"-"+g+q))});e.$watch(function(){var c=parseFloat(e.$eval(h));return isNaN(c)?"":(m[c]||(c=a.pluralCat(c-g)),k[c](e,f,!0))},function(a){f.text(a)})}}}],Od=["$parse","$animator",function(a,c){return{transclude:"element",
priority:1E3,terminal:!0,compile:function(d,e,f){return function(d,e,j){var g=c(d,j),m=j.ngRepeat,k=m.match(/^\s*(.+)\s+in\s+(.*?)\s*(\s+track\s+by\s+(.+)\s*)?$/),l,q,n,s,r,p={$id:la};if(!k)throw Error("Expected ngRepeat in form of '_item_ in _collection_[ track by _id_]' but got '"+m+"'.");j=k[1];n=k[2];(k=k[4])?(l=a(k),q=function(a,c,e){r&&(p[r]=a);p[s]=c;p.$index=e;return l(d,p)}):q=function(a,c){return la(c)};k=j.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);if(!k)throw Error("'item' in 'item in collection' should be identifier or (key, value) but got '"+
j+"'.");s=k[3]||k[1];r=k[2];var y={};d.$watchCollection(n,function(a){var c,j,k=e,l,n={},p,t,v,z,w,u,x=[];if(C(a))w=a;else{w=[];for(v in a)a.hasOwnProperty(v)&&v.charAt(0)!="$"&&w.push(v);w.sort()}p=w.length;j=x.length=w.length;for(c=0;c<j;c++)if(v=a===w?c:w[c],z=a[v],l=q(v,z,c),u=y[l])delete y[l],n[l]=u,x[c]=u;else if(n.hasOwnProperty(l))throw o(x,function(a){a&&a.element&&(y[a.id]=a)}),Error("Duplicates in a repeater are not allowed. Repeater: "+m);else x[c]={id:l};for(v in y)if(y.hasOwnProperty(v))u=
y[v],g.leave(u.element),u.element[0].$$NG_REMOVED=!0,u.scope.$destroy();c=0;for(j=w.length;c<j;c++){v=a===w?c:w[c];z=a[v];u=x[c];if(u.element){t=u.scope;l=k[0];do l=l.nextSibling;while(l&&l.$$NG_REMOVED);u.element[0]!=l&&g.move(u.element,null,k);k=u.element}else t=d.$new();t[s]=z;r&&(t[r]=v);t.$index=c;t.$first=c===0;t.$last=c===p-1;t.$middle=!(t.$first||t.$last);u.element||f(t,function(a){g.enter(a,null,k);k=a;u.scope=t;u.element=a;n[u.id]=u})}y=n})}}}}],Pd=["$animator",function(a){return function(c,
d,e){var f=a(c,e);c.$watch(e.ngShow,function(a){f[Ha(a)?"show":"hide"](d)})}}],Qd=["$animator",function(a){return function(c,d,e){var f=a(c,e);c.$watch(e.ngHide,function(a){f[Ha(a)?"hide":"show"](d)})}}],Rd=Y(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&o(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),Sd=["$animator",function(a){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,d,e,f){var i=a(c,e),h,j,g=[];c.$watch(e.ngSwitch||
e.on,function(a){for(var d=0,l=g.length;d<l;d++)g[d].$destroy(),i.leave(j[d]);j=[];g=[];if(h=f.cases["!"+a]||f.cases["?"])c.$eval(e.change),o(h,function(a){var d=c.$new();g.push(d);a.transclude(d,function(c){var d=a.element;j.push(c);i.enter(c,d.parent(),d)})})})}}}],Td=Y({transclude:"element",priority:500,require:"^ngSwitch",compile:function(a,c,d){return function(a,f,i,h){h.cases["!"+c.ngSwitchWhen]=h.cases["!"+c.ngSwitchWhen]||[];h.cases["!"+c.ngSwitchWhen].push({transclude:d,element:f})}}}),Ud=
Y({transclude:"element",priority:500,require:"^ngSwitch",compile:function(a,c,d){return function(a,c,i,h){h.cases["?"]=h.cases["?"]||[];h.cases["?"].push({transclude:d,element:c})}}}),Vd=Y({controller:["$transclude","$element",function(a,c){a(function(a){c.append(a)})}]}),Wd=["$http","$templateCache","$route","$anchorScroll","$compile","$controller","$animator",function(a,c,d,e,f,i,h){return{restrict:"ECA",terminal:!0,link:function(a,c,m){function k(){var h=d.current&&d.current.locals,k=h&&h.$template;
if(k){n.leave(c.contents(),c);l&&(l.$destroy(),l=null);n.enter(v("<div></div>").html(k).contents(),c);var k=f(c.contents()),m=d.current;l=m.scope=a.$new();if(m.controller)h.$scope=l,h=i(m.controller,h),c.children().data("$ngControllerController",h);k(l);l.$emit("$viewContentLoaded");l.$eval(o);e()}else n.leave(c.contents(),c),l&&(l.$destroy(),l=null)}var l,o=m.onload||"",n=h(a,m);a.$on("$routeChangeSuccess",k);k()}}}],Xd=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,
d){d.type=="text/ng-template"&&a.put(d.id,c[0].text)}}}],Yd=Q({terminal:!0}),Zd=["$compile","$parse",function(a,c){var d=/^\s*(.*?)(?:\s+as\s+(.*?))?(?:\s+group\s+by\s+(.*))?\s+for\s+(?:([\$\w][\$\w\d]*)|(?:\(\s*([\$\w][\$\w\d]*)\s*,\s*([\$\w][\$\w\d]*)\s*\)))\s+in\s+(.*)$/,e={$setViewValue:t};return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(a,c,d){var j=this,g={},m=e,k;j.databound=d.ngModel;j.init=function(a,c,d){m=a;k=d};j.addOption=function(c){g[c]=
!0;m.$viewValue==c&&(a.val(c),k.parent()&&k.remove())};j.removeOption=function(a){this.hasOption(a)&&(delete g[a],m.$viewValue==a&&this.renderUnknownOption(a))};j.renderUnknownOption=function(c){c="? "+la(c)+" ?";k.val(c);a.prepend(k);a.val(c);k.prop("selected",!0)};j.hasOption=function(a){return g.hasOwnProperty(a)};c.$on("$destroy",function(){j.renderUnknownOption=t})}],link:function(e,i,h,j){function g(a,c,d,e){d.$render=function(){var a=d.$viewValue;e.hasOption(a)?(x.parent()&&x.remove(),c.val(a),
a===""&&p.prop("selected",!0)):u(a)&&p?c.val(""):e.renderUnknownOption(a)};c.bind("change",function(){a.$apply(function(){x.parent()&&x.remove();d.$setViewValue(c.val())})})}function m(a,c,d){var e;d.$render=function(){var a=new Pa(d.$viewValue);o(c.find("option"),function(c){c.selected=w(a.get(c.value))})};a.$watch(function(){ja(e,d.$viewValue)||(e=W(d.$viewValue),d.$render())});c.bind("change",function(){a.$apply(function(){var a=[];o(c.find("option"),function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}
function k(e,f,h){function g(){var a={"":[]},c=[""],d,i,t,v,u;t=h.$modelValue;v=p(e)||[];var w=l?rb(v):v,z,x,A;x={};u=!1;var B,C;if(n)u=new Pa(t);else if(t===null||r)a[""].push({selected:t===null,id:"",label:""}),u=!0;for(A=0;z=w.length,A<z;A++){x[k]=v[l?x[l]=w[A]:A];d=m(e,x)||"";if(!(i=a[d]))i=a[d]=[],c.push(d);n?d=u.remove(o(e,x))!=s:(d=t===o(e,x),u=u||d);B=j(e,x);B=B===s?"":B;i.push({id:l?w[A]:A,label:B,selected:d})}!n&&!u&&a[""].unshift({id:"?",label:"",selected:!0});x=0;for(w=c.length;x<w;x++){d=
c[x];i=a[d];if(q.length<=x)t={element:D.clone().attr("label",d),label:i.label},v=[t],q.push(v),f.append(t.element);else if(v=q[x],t=v[0],t.label!=d)t.element.attr("label",t.label=d);B=null;A=0;for(z=i.length;A<z;A++)if(d=i[A],u=v[A+1]){B=u.element;if(u.label!==d.label)B.text(u.label=d.label);if(u.id!==d.id)B.val(u.id=d.id);if(u.element.selected!==d.selected)B.prop("selected",u.selected=d.selected)}else d.id===""&&r?C=r:(C=y.clone()).val(d.id).attr("selected",d.selected).text(d.label),v.push({element:C,
label:d.label,id:d.id,selected:d.selected}),B?B.after(C):t.element.append(C),B=C;for(A++;v.length>A;)v.pop().element.remove()}for(;q.length>x;)q.pop()[0].element.remove()}var i;if(!(i=t.match(d)))throw Error("Expected ngOptions in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '"+t+"'.");var j=c(i[2]||i[1]),k=i[4]||i[6],l=i[5],m=c(i[3]||""),o=c(i[2]?i[1]:k),p=c(i[7]),q=[[{element:f,label:""}]];r&&(a(r)(e),r.removeClass("ng-scope"),r.remove());f.html("");f.bind("change",
function(){e.$apply(function(){var a,c=p(e)||[],d={},g,i,j,m,r,t;if(n){i=[];m=0;for(t=q.length;m<t;m++){a=q[m];j=1;for(r=a.length;j<r;j++)if((g=a[j].element)[0].selected)g=g.val(),l&&(d[l]=g),d[k]=c[g],i.push(o(e,d))}}else g=f.val(),g=="?"?i=s:g==""?i=null:(d[k]=c[g],l&&(d[l]=g),i=o(e,d));h.$setViewValue(i)})});h.$render=g;e.$watch(g)}if(j[1]){for(var l=j[0],q=j[1],n=h.multiple,t=h.ngOptions,r=!1,p,y=v(V.createElement("option")),D=v(V.createElement("optgroup")),x=y.clone(),j=0,C=i.children(),A=C.length;j<
A;j++)if(C[j].value==""){p=r=C.eq(j);break}l.init(q,r,x);if(n&&(h.required||h.ngRequired)){var H=function(a){q.$setValidity("required",!h.required||a&&a.length);return a};q.$parsers.push(H);q.$formatters.unshift(H);h.$observe("required",function(){H(q.$viewValue)})}t?k(e,i,q):n?m(e,i,q):g(e,i,q,l)}}}}],$d=["$interpolate",function(a){var c={addOption:t,removeOption:t};return{restrict:"E",priority:100,compile:function(d,e){if(u(e.value)){var f=a(d.text(),!0);f||e.$set("value",d.text())}return function(a,
d,e){var g=d.parent(),m=g.data("$selectController")||g.parent().data("$selectController");m&&m.databound?d.prop("selected",!1):m=c;f?a.$watch(f,function(a,c){e.$set("value",a);a!==c&&m.removeOption(c);m.addOption(a)}):m.addOption(e.value);d.bind("$destroy",function(){m.removeOption(e.value)})}}}}],ae=Q({restrict:"E",terminal:!0});(ca=M.jQuery)?(v=ca,y(ca.fn,{scope:za.scope,controller:za.controller,injector:za.injector,inheritedData:za.inheritedData}),fb("remove",!0),fb("empty"),fb("html")):v=P;Ia.element=
v;(function(a){y(a,{bootstrap:vb,copy:W,extend:y,equals:ja,element:v,forEach:o,injector:wb,noop:t,bind:ab,toJson:da,fromJson:tb,identity:pa,isUndefined:u,isDefined:w,isString:x,isFunction:I,isObject:L,isNumber:Za,isElement:jc,isArray:C,version:md,isDate:qa,lowercase:J,uppercase:na,callbacks:{counter:0},noConflict:gc});xa=oc(M);try{xa("ngLocale")}catch(c){xa("ngLocale",[]).provider("$locale",cd)}xa("ng",["ngLocale"],["$provide",function(a){a.provider("$compile",Hb).directive({a:od,input:dc,textarea:dc,
form:pd,script:Xd,select:Zd,style:ae,option:$d,ngBind:Ad,ngBindHtmlUnsafe:Cd,ngBindTemplate:Bd,ngClass:Dd,ngClassEven:Fd,ngClassOdd:Ed,ngCsp:Id,ngCloak:Gd,ngController:Hd,ngForm:qd,ngHide:Qd,ngInclude:Kd,ngInit:Ld,ngNonBindable:Md,ngPluralize:Nd,ngRepeat:Od,ngShow:Pd,ngSubmit:Jd,ngStyle:Rd,ngSwitch:Sd,ngSwitchWhen:Td,ngSwitchDefault:Ud,ngOptions:Yd,ngView:Wd,ngTransclude:Vd,ngModel:vd,ngList:xd,ngChange:wd,required:ec,ngRequired:ec,ngValue:zd}).directive(qb).directive(fc);a.provider({$anchorScroll:xc,
$animation:Gb,$animator:nd,$browser:zc,$cacheFactory:Ac,$controller:Dc,$document:Ec,$exceptionHandler:Fc,$filter:Tb,$interpolate:Gc,$http:Zc,$httpBackend:$c,$location:Kc,$log:Lc,$parse:Pc,$route:Sc,$routeParams:Tc,$rootScope:Uc,$q:Qc,$sniffer:Vc,$templateCache:Bc,$timeout:dd,$window:Wc})}])})(Ia);v(V).ready(function(){mc(V,vb)})})(window,document);angular.element(document).find("head").append('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak{display:none;}ng\\:form{display:block;}</style>');

;(function () {
   var hmTouchevents = angular.module('hmTouchevents', []),
      hmGestures = [
         'hmHold:hold',
         'hmTap:tap',
         'hmDoubletap:doubletap',
         'hmDrag:drag',
         'hmDragup:dragup',
         'hmDragdown:dragdown',
         'hmDragleft:dragleft',
         'hmDragright:dragright',
         'hmSwipe:swipe',
         'hmSwipeup:swipeup',
         'hmSwipedown:swipedown',
         'hmSwipeleft:swipeleft',
         'hmSwiperight:swiperight',
         'hmTransform:transform',
         'hmRotate:rotate',
         'hmPinch:pinch',
         'hmPinchin:pinchin',
         'hmPinchout:pinchout',
         'hmTouch:touch',
         'hmRelease:release'
      ];

   angular.forEach(hmGestures, function(name){
      var directive = name.split(':'),
         directiveName = directive[0],
         eventName = directive[1];

      hmTouchevents.directive(directiveName,
         ["$parse", function($parse) {
            return {
               scope: true,

               link: function(scope, element, attr) {

                  var fn = $parse(attr[directiveName]),
                      opts = $parse(attr["hmOptions"])(scope, {});

                  if(opts && opts.group) {
                     scope.hammer = scope.hammer || Hammer(element[0], opts);
                  }
                  else {
                     scope.hammer = Hammer(element[0], opts);
                  }

                  return scope.hammer.on(eventName, function(event) {
                     return scope.$apply(function() {
                        return fn(scope, {$event: event});
                     });
                  });
               }
            };
         }
      ]);
   });
} ());


angular.module('angularMoment', []).directive('amTimeAgo',
   ['$window', '$timeout', '$parse', function ($window, $timeout, $parse) {
		return function (scope, element, attr) {
			var activeTimeout = null;

			function cancelTimer() {
				if (activeTimeout) {
					$timeout.cancel(activeTimeout);
					activeTimeout = null;
				}
			}

			function updateTime(momentInstance) {
				element.text(momentInstance.fromNow());

				activeTimeout = $timeout(function () {
					updateTime(momentInstance);
				}, 60 * 1000, false);
			}

         updateTime($window.moment(new Date($parse(attr.amTimeAgo)(scope) * 1000)));

			scope.$on('$destroy', cancelTimer);
		};
	}]
);

/**
 * @license AngularJS v1.0.7
 * (c) 2010-2012 Google, Inc. http://angularjs.org
 * License: MIT
 */
(function(window, angular, undefined) {
'use strict';

/**
 * @ngdoc overview
 * @name ngResource
 * @description
 */

/**
 * @ngdoc object
 * @name ngResource.$resource
 * @requires $http
 *
 * @description
 * A factory which creates a resource object that lets you interact with
 * [RESTful](http://en.wikipedia.org/wiki/Representational_State_Transfer) server-side data sources.
 *
 * The returned resource object has action methods which provide high-level behaviors without
 * the need to interact with the low level {@link ng.$http $http} service.
 *
 * # Installation
 * To use $resource make sure you have included the `angular-resource.js` that comes in Angular 
 * package. You can also find this file on Google CDN, bower as well as at
 * {@link http://code.angularjs.org/ code.angularjs.org}.
 *
 * Finally load the module in your application:
 *
 *        angular.module('app', ['ngResource']);
 *
 * and you are ready to get started!
 *
 * @param {string} url A parameterized URL template with parameters prefixed by `:` as in
 *   `/user/:username`. If you are using a URL with a port number (e.g. 
 *   `http://example.com:8080/api`), you'll need to escape the colon character before the port
 *   number, like this: `$resource('http://example.com\\:8080/api')`.
 *
 * @param {Object=} paramDefaults Default values for `url` parameters. These can be overridden in
 *   `actions` methods.
 *
 *   Each key value in the parameter object is first bound to url template if present and then any
 *   excess keys are appended to the url search query after the `?`.
 *
 *   Given a template `/path/:verb` and parameter `{verb:'greet', salutation:'Hello'}` results in
 *   URL `/path/greet?salutation=Hello`.
 *
 *   If the parameter value is prefixed with `@` then the value of that parameter is extracted from
 *   the data object (useful for non-GET operations).
 *
 * @param {Object.<Object>=} actions Hash with declaration of custom action that should extend the
 *   default set of resource actions. The declaration should be created in the following format:
 *
 *       {action1: {method:?, params:?, isArray:?},
 *        action2: {method:?, params:?, isArray:?},
 *        ...}
 *
 *   Where:
 *
 *   - `action` – {string} – The name of action. This name becomes the name of the method on your
 *     resource object.
 *   - `method` – {string} – HTTP request method. Valid methods are: `GET`, `POST`, `PUT`, `DELETE`,
 *     and `JSONP`
 *   - `params` – {object=} – Optional set of pre-bound parameters for this action.
 *   - isArray – {boolean=} – If true then the returned object for this action is an array, see
 *     `returns` section.
 *
 * @returns {Object} A resource "class" object with methods for the default set of resource actions
 *   optionally extended with custom `actions`. The default set contains these actions:
 *
 *       { 'get':    {method:'GET'},
 *         'save':   {method:'POST'},
 *         'query':  {method:'GET', isArray:true},
 *         'remove': {method:'DELETE'},
 *         'delete': {method:'DELETE'} };
 *
 *   Calling these methods invoke an {@link ng.$http} with the specified http method,
 *   destination and parameters. When the data is returned from the server then the object is an
 *   instance of the resource class. The actions `save`, `remove` and `delete` are available on it
 *   as  methods with the `$` prefix. This allows you to easily perform CRUD operations (create,
 *   read, update, delete) on server-side data like this:
 *   <pre>
        var User = $resource('/user/:userId', {userId:'@id'});
        var user = User.get({userId:123}, function() {
          user.abc = true;
          user.$save();
        });
     </pre>
 *
 *   It is important to realize that invoking a $resource object method immediately returns an
 *   empty reference (object or array depending on `isArray`). Once the data is returned from the
 *   server the existing reference is populated with the actual data. This is a useful trick since
 *   usually the resource is assigned to a model which is then rendered by the view. Having an empty
 *   object results in no rendering, once the data arrives from the server then the object is
 *   populated with the data and the view automatically re-renders itself showing the new data. This
 *   means that in most case one never has to write a callback function for the action methods.
 *
 *   The action methods on the class object or instance object can be invoked with the following
 *   parameters:
 *
 *   - HTTP GET "class" actions: `Resource.action([parameters], [success], [error])`
 *   - non-GET "class" actions: `Resource.action([parameters], postData, [success], [error])`
 *   - non-GET instance actions:  `instance.$action([parameters], [success], [error])`
 *
 *
 * @example
 *
 * # Credit card resource
 *
 * <pre>
     // Define CreditCard class
     var CreditCard = $resource('/user/:userId/card/:cardId',
      {userId:123, cardId:'@id'}, {
       charge: {method:'POST', params:{charge:true}}
      });

     // We can retrieve a collection from the server
     var cards = CreditCard.query(function() {
       // GET: /user/123/card
       // server returns: [ {id:456, number:'1234', name:'Smith'} ];

       var card = cards[0];
       // each item is an instance of CreditCard
       expect(card instanceof CreditCard).toEqual(true);
       card.name = "J. Smith";
       // non GET methods are mapped onto the instances
       card.$save();
       // POST: /user/123/card/456 {id:456, number:'1234', name:'J. Smith'}
       // server returns: {id:456, number:'1234', name: 'J. Smith'};

       // our custom method is mapped as well.
       card.$charge({amount:9.99});
       // POST: /user/123/card/456?amount=9.99&charge=true {id:456, number:'1234', name:'J. Smith'}
     });

     // we can create an instance as well
     var newCard = new CreditCard({number:'0123'});
     newCard.name = "Mike Smith";
     newCard.$save();
     // POST: /user/123/card {number:'0123', name:'Mike Smith'}
     // server returns: {id:789, number:'01234', name: 'Mike Smith'};
     expect(newCard.id).toEqual(789);
 * </pre>
 *
 * The object returned from this function execution is a resource "class" which has "static" method
 * for each action in the definition.
 *
 * Calling these methods invoke `$http` on the `url` template with the given `method` and `params`.
 * When the data is returned from the server then the object is an instance of the resource type and
 * all of the non-GET methods are available with `$` prefix. This allows you to easily support CRUD
 * operations (create, read, update, delete) on server-side data.

   <pre>
     var User = $resource('/user/:userId', {userId:'@id'});
     var user = User.get({userId:123}, function() {
       user.abc = true;
       user.$save();
     });
   </pre>
 *
 * It's worth noting that the success callback for `get`, `query` and other method gets passed
 * in the response that came from the server as well as $http header getter function, so one
 * could rewrite the above example and get access to http headers as:
 *
   <pre>
     var User = $resource('/user/:userId', {userId:'@id'});
     User.get({userId:123}, function(u, getResponseHeaders){
       u.abc = true;
       u.$save(function(u, putResponseHeaders) {
         //u => saved user object
         //putResponseHeaders => $http header getter
       });
     });
   </pre>

 * # Buzz client

   Let's look at what a buzz client created with the `$resource` service looks like:
    <doc:example>
      <doc:source jsfiddle="false">
       <script>
         function BuzzController($resource) {
           this.userId = 'googlebuzz';
           this.Activity = $resource(
             'https://www.googleapis.com/buzz/v1/activities/:userId/:visibility/:activityId/:comments',
             {alt:'json', callback:'JSON_CALLBACK'},
             {get:{method:'JSONP', params:{visibility:'@self'}}, replies: {method:'JSONP', params:{visibility:'@self', comments:'@comments'}}}
           );
         }

         BuzzController.prototype = {
           fetch: function() {
             this.activities = this.Activity.get({userId:this.userId});
           },
           expandReplies: function(activity) {
             activity.replies = this.Activity.replies({userId:this.userId, activityId:activity.id});
           }
         };
         BuzzController.$inject = ['$resource'];
       </script>

       <div ng-controller="BuzzController">
         <input ng-model="userId"/>
         <button ng-click="fetch()">fetch</button>
         <hr/>
         <div ng-repeat="item in activities.data.items">
           <h1 style="font-size: 15px;">
             <img src="{{item.actor.thumbnailUrl}}" style="max-height:30px;max-width:30px;"/>
             <a href="{{item.actor.profileUrl}}">{{item.actor.name}}</a>
             <a href ng-click="expandReplies(item)" style="float: right;">Expand replies: {{item.links.replies[0].count}}</a>
           </h1>
           {{item.object.content | html}}
           <div ng-repeat="reply in item.replies.data.items" style="margin-left: 20px;">
             <img src="{{reply.actor.thumbnailUrl}}" style="max-height:30px;max-width:30px;"/>
             <a href="{{reply.actor.profileUrl}}">{{reply.actor.name}}</a>: {{reply.content | html}}
           </div>
         </div>
       </div>
      </doc:source>
      <doc:scenario>
      </doc:scenario>
    </doc:example>
 */
angular.module('ngResource', ['ng']).
  factory('$resource', ['$http', '$parse', function($http, $parse) {
    var DEFAULT_ACTIONS = {
      'get':    {method:'GET'},
      'save':   {method:'POST'},
      'query':  {method:'GET', isArray:true},
      'remove': {method:'DELETE'},
      'delete': {method:'DELETE'}
    };
    var noop = angular.noop,
        forEach = angular.forEach,
        extend = angular.extend,
        copy = angular.copy,
        isFunction = angular.isFunction,
        getter = function(obj, path) {
          return $parse(path)(obj);
        };

    /**
     * We need our custom method because encodeURIComponent is too aggressive and doesn't follow
     * http://www.ietf.org/rfc/rfc3986.txt with regards to the character set (pchar) allowed in path
     * segments:
     *    segment       = *pchar
     *    pchar         = unreserved / pct-encoded / sub-delims / ":" / "@"
     *    pct-encoded   = "%" HEXDIG HEXDIG
     *    unreserved    = ALPHA / DIGIT / "-" / "." / "_" / "~"
     *    sub-delims    = "!" / "$" / "&" / "'" / "(" / ")"
     *                     / "*" / "+" / "," / ";" / "="
     */
    function encodeUriSegment(val) {
      return encodeUriQuery(val, true).
        replace(/%26/gi, '&').
        replace(/%3D/gi, '=').
        replace(/%2B/gi, '+');
    }


    /**
     * This method is intended for encoding *key* or *value* parts of query component. We need a custom
     * method becuase encodeURIComponent is too agressive and encodes stuff that doesn't have to be
     * encoded per http://tools.ietf.org/html/rfc3986:
     *    query       = *( pchar / "/" / "?" )
     *    pchar         = unreserved / pct-encoded / sub-delims / ":" / "@"
     *    unreserved    = ALPHA / DIGIT / "-" / "." / "_" / "~"
     *    pct-encoded   = "%" HEXDIG HEXDIG
     *    sub-delims    = "!" / "$" / "&" / "'" / "(" / ")"
     *                     / "*" / "+" / "," / ";" / "="
     */
    function encodeUriQuery(val, pctEncodeSpaces) {
      return encodeURIComponent(val).
        replace(/%40/gi, '@').
        replace(/%3A/gi, ':').
        replace(/%24/g, '$').
        replace(/%2C/gi, ',').
        replace(/%20/g, (pctEncodeSpaces ? '%20' : '+'));
    }

    function Route(template, defaults) {
      this.template = template = template + '#';
      this.defaults = defaults || {};
      var urlParams = this.urlParams = {};
      forEach(template.split(/\W/), function(param){
        if (param && (new RegExp("(^|[^\\\\]):" + param + "\\W").test(template))) {
          urlParams[param] = true;
        }
      });
      this.template = template.replace(/\\:/g, ':');
    }

    Route.prototype = {
      url: function(params) {
        var self = this,
            url = this.template,
            val,
            encodedVal;

        params = params || {};
        forEach(this.urlParams, function(_, urlParam){
          val = params.hasOwnProperty(urlParam) ? params[urlParam] : self.defaults[urlParam];
          if (angular.isDefined(val) && val !== null) {
            encodedVal = encodeUriSegment(val);
            url = url.replace(new RegExp(":" + urlParam + "(\\W)", "g"), encodedVal + "$1");
          } else {
            url = url.replace(new RegExp("(\/?):" + urlParam + "(\\W)", "g"), function(match,
                leadingSlashes, tail) {
              if (tail.charAt(0) == '/') {
                return tail;
              } else {
                return leadingSlashes + tail;
              }
            });
          }
        });
        url = url.replace(/\/?#$/, '');
        var query = [];
        forEach(params, function(value, key){
          if (!self.urlParams[key]) {
            query.push(encodeUriQuery(key) + '=' + encodeUriQuery(value));
          }
        });
        query.sort();
        url = url.replace(/\/*$/, '');
        return url + (query.length ? '?' + query.join('&') : '');
      }
    };


    function ResourceFactory(url, paramDefaults, actions) {
      var route = new Route(url);

      actions = extend({}, DEFAULT_ACTIONS, actions);

      function extractParams(data, actionParams){
        var ids = {};
        actionParams = extend({}, paramDefaults, actionParams);
        forEach(actionParams, function(value, key){
          ids[key] = value.charAt && value.charAt(0) == '@' ? getter(data, value.substr(1)) : value;
        });
        return ids;
      }

      function Resource(value){
        copy(value || {}, this);
      }

      forEach(actions, function(action, name) {
        action.method = angular.uppercase(action.method);
        var hasBody = action.method == 'POST' || action.method == 'PUT' || action.method == 'PATCH';
        Resource[name] = function(a1, a2, a3, a4) {
          var params = {};
          var data;
          var success = noop;
          var error = null;
          switch(arguments.length) {
          case 4:
            error = a4;
            success = a3;
            //fallthrough
          case 3:
          case 2:
            if (isFunction(a2)) {
              if (isFunction(a1)) {
                success = a1;
                error = a2;
                break;
              }

              success = a2;
              error = a3;
              //fallthrough
            } else {
              params = a1;
              data = a2;
              success = a3;
              break;
            }
          case 1:
            if (isFunction(a1)) success = a1;
            else if (hasBody) data = a1;
            else params = a1;
            break;
          case 0: break;
          default:
            throw "Expected between 0-4 arguments [params, data, success, error], got " +
              arguments.length + " arguments.";
          }

          var value = this instanceof Resource ? this : (action.isArray ? [] : new Resource(data));
          $http({
            method: action.method,
            url: route.url(extend({}, extractParams(data, action.params || {}), params)),
            data: data
          }).then(function(response) {
              var data = response.data;

              if (data) {
                if (action.isArray) {
                  value.length = 0;
                  forEach(data, function(item) {
                    value.push(new Resource(item));
                  });
                } else {
                  copy(data, value);
                }
              }
              (success||noop)(value, response.headers);
            }, error);

          return value;
        };


        Resource.prototype['$' + name] = function(a1, a2, a3) {
          var params = extractParams(this),
              success = noop,
              error;

          switch(arguments.length) {
          case 3: params = a1; success = a2; error = a3; break;
          case 2:
          case 1:
            if (isFunction(a1)) {
              success = a1;
              error = a2;
            } else {
              params = a1;
              success = a2 || noop;
            }
          case 0: break;
          default:
            throw "Expected between 1-3 arguments [params, success, error], got " +
              arguments.length + " arguments.";
          }
          var data = hasBody ? this : undefined;
          Resource[name].call(this, params, data, success, error);
        };
      });

      Resource.bind = function(additionalParamDefaults){
        return ResourceFactory(url, extend({}, paramDefaults, additionalParamDefaults), actions);
      };

      return Resource;
    }

    return ResourceFactory;
  }]);


})(window, window.angular);

(function () {
   angular.module('angularytics', []).provider('Angularytics', function () {
      var eventHandlersNames = ['Google'];
      this.setEventHandlers = function (handlers) {
         if (angular.isString(handlers)) {
            handlers = [handlers];
         }
         eventHandlersNames = [];
         angular.forEach(handlers, function (handler) {
            eventHandlersNames.push(capitalizeHandler(handler));
         });
      };
      var capitalizeHandler = function (handler) {
         return handler.charAt(0).toUpperCase() + handler.substring(1);
      };
      var pageChangeEvent = '$locationChangeSuccess';
      this.setPageChangeEvent = function (newPageChangeEvent) {
         pageChangeEvent = newPageChangeEvent;
      };
      this.$get = [
         '$injector',
         '$rootScope',
         '$location',
         function ($injector, $rootScope, $location) {
            var eventHandlers = [];
            angular.forEach(eventHandlersNames, function (handler) {
               eventHandlers.push($injector.get('Angularytics' + handler + 'Handler'));
            });
            var forEachHandlerDo = function (action) {
               angular.forEach(eventHandlers, function (handler) {
                  action(handler);
               });
            };
            $rootScope.$on(pageChangeEvent, function () {
               forEachHandlerDo(function (handler) {
                  var url = $location.path();
                  if (url) {
                     handler.trackPageView(url);
                  }
               });
            });
            var service = {};
            service.init = function () {
            };
            service.trackEvent = function (category, action, opt_label, opt_value, opt_noninteraction) {
               forEachHandlerDo(function (handler) {
                  if (category && action) {
                     handler.trackEvent(category, action, opt_label, opt_value, opt_noninteraction);
                  }
               });
            };
            return service;
         }
      ];
   });
}());
(function () {
   angular.module('angularytics').factory('AngularyticsConsoleHandler', [
      '$log',
      function ($log) {
         var service = {};
         service.trackPageView = function (url) {
            $log.log('URL visited', url);
         };
         service.trackEvent = function (category, action, opt_label, opt_value, opt_noninteraction) {
            $log.log('Event tracked', category, action, opt_label, opt_value, opt_noninteraction);
         };
         return service;
      }
   ]);
}());
(function () {
   angular.module('angularytics').factory('AngularyticsGoogleHandler', [
         '$log',
         function ($log) {
            var service = {};
            service.trackPageView = function (url) {
               _gaq.push([
                  '_set',
                  'page',
                  url
               ]);
               _gaq.push([
                  '_trackPageview',
                  url
               ]);
            };
            service.trackEvent = function (category, action, opt_label, opt_value, opt_noninteraction) {
               _gaq.push([
                  '_trackEvent',
                  category,
                  action,
                  opt_label,
                  opt_value,
                  opt_noninteraction
               ]);
            };
            return service;
         }
      ]).factory('AngularyticsGoogleUniversalHandler', function () {
         var service = {};
         service.trackPageView = function (url) {
            ga('set', 'page', url);
            ga('send', 'pageview', url);
         };
         service.trackEvent = function (category, action, opt_label, opt_value, opt_noninteraction) {
            ga('send', 'event', category, action, opt_label, opt_value, { 'nonInteraction': opt_noninteraction });
         };
         return service;
      });
}());
(function () {
   angular.module('angularytics').filter('trackEvent', [
      'Angularytics',
      function (Angularytics) {
         return function (entry, category, action, opt_label, opt_value, opt_noninteraction) {
            Angularytics.trackEvent(category, action, opt_label, opt_value, opt_noninteraction);
            return entry;
         };
      }
   ]);
}());
var SERVER_URL = "http://surfo.ru/";

var App = angular.module('App',
   ['hmTouchevents', 'angularMoment', 'ngResource', 'angularytics'], null
);

App.config(['$routeProvider', function($routeProvider) {
   $routeProvider
      .when('/', {templateUrl: 'views/main.html'})
      .when('/posts/:cat', {templateUrl: 'views/posts.html'})
      .otherwise({redirectTo: '/'});
}]);

App.run(['$rootScope', function ($rootScope) {
   $rootScope.getPhoto = function (photo) {
      return $rootScope.isTablet ? photo.big: photo.small;
   };
}]);

function getUUID () {
   var generateUUID = function () {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
         var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
         return v.toString(16);
      });
   };

   var uuid = myStore.get('UUID');

   if(uuid) return uuid;

   uuid = generateUUID();
   myStore.set('UUID', uuid);

   return uuid;
}

function Zoom (wrapId) {
   var wrap = document.getElementById(wrapId);

   var hammertime = Hammer(wrap, {
      transform_always_block: true,
      transform_min_scale: 1,
      drag_block_horizontal: true,
      drag_block_vertical: true,
      drag_min_distance: 100
   });

   var rect = wrap.getElementsByTagName('img')[0];

   var posX = 0, posY = 0,
       scale = 1, last_scale,
       rotation = 1, last_rotation;

   hammertime.on('touch drag transform', function(ev) {
      var prevent = false;
      switch(ev.type) {
         case 'touch':
            last_scale = scale;
            last_rotation = rotation;
            break;

         case 'drag':
            prevent = true;
            posX = ev.gesture.deltaX;
            posY = ev.gesture.deltaY;
            break;

         case 'transform':
            prevent = true;
            rotation = last_rotation + ev.gesture.rotation;
            scale = Math.max(1, Math.min(last_scale * ev.gesture.scale, 10));
            break;
      }

      if(prevent) {
         ev.preventDefault();
         ev.gesture.preventDefault();
      }

      var transform =
         "translate3d("+posX+"px,"+posY+"px, 0) " +
            "scale3d("+scale+","+scale+", 1)";

      rect.style.transform = transform;
      rect.style.oTransform = transform;
      rect.style.msTransform = transform;
      rect.style.mozTransform = transform;
      rect.style.webkitTransform = transform;
   });
};

App.config(['AngularyticsProvider', function(Angularytics) {
   Angularytics.setEventHandlers(['GoogleUniversal']);
}]);

App.run(['Angularytics', function(Angularytics) {
   Angularytics.init();
}]);
App.directive('bindLinks', function () {
   return function (scope, els, attrs) {
      setTimeout(function () {
         var links = els[0].getElementsByClassName('link');

         for(var i=0; i<links.length; i++) {
            var link = angular.element(links[i]);

            link.bind('click', function (e) {
               e.preventDefault();
               e.stopPropagation();
               window.open(link.attr('href'), '_system');
               return false;
            });
         }
      }, 400);

   }
});
App.directive('checkTablet',
   ['$rootScope',  function ($rootScope) {

      return function (scope, els, attrs) {
         function checkTablet () {
            var changed = typeof $rootScope.isTablet !== 'undefined',
                dpi = els[0].clientWidth,
                winWidth = window.innerWidth,
                widthInch = winWidth / dpi;

            changed = changed && ($rootScope.isTablet !== (widthInch > 7));
            $rootScope.isTablet = widthInch > 7;
            return changed;
         }

         angular.element(window).bind('resize', function () {
            if(checkTablet()) $rootScope.$apply();
         });

         checkTablet();
      }

   }]
);
App.controller('HeaderController',
   ['$scope', '$rootScope', 'Header', 'Menu', 'zoom', '$location',
      function ($scope, $rootScope, Header, Menu, zoom, $location) {

         $scope.isBack = Header.back;
         $scope.title = Header.title;

         $rootScope.zoomOpened = null;

         $rootScope.$on('Header:title', function (e, title) {
            $scope.title = title;
         });

         $rootScope.$on('Header:back', function (e, back) {
            $scope.isBack = back;
         });

         $rootScope.$on('Header:color', function (e, color) {
            $scope.colorHeader = color;
         });

         $scope.back = function () {
            zoom.close();
            $location.path('/');
         };

         $scope.scrollTop = function () {
            scrollTo(0, 0);
         };
      }]
);
App.factory('Header',
   ['$rootScope', function ($rootScope) {
      return {
         title : 'Application',
         back : false,
         set : function (key, value) {
            this[key] = value;
            $rootScope.$emit('Header:'+key, value);
         }
      }
   }]
);

App.controller('IndexController',
   ['$scope', '$location', 'Header', 'Menu', '$rootScope',
      function ($scope, $location, Header, Menu, $rootScope) {

         if($rootScope.isTablet && $location.path() === '/') {
            $location.path('/posts/favorites');
         }

         $scope.showedMenu = -1;
         $scope.menus = Menu.menu();

         $scope.openMenu = function (index) {
            $scope.showedMenu = $scope.showedMenu === index ? -1 : index;
         };

         $scope.openFavorite = function () {
            $location.path('/posts/favorites');
         };

         $scope.openCategory = function (id) {
            $location.path('/posts/' + id);
         };

         Header.set('back', false);
         Header.set('title', null);

         Menu.ready(function () {
            $scope.menus = Menu.menu();
         });
      }]
);

App.factory('Menu',
   ['$resource', 'store', function ($resource, store) {
      var callbacks = [],
         params = {query: {method: 'JSONP', isArray: true, params: {callback: 'JSON_CALLBACK'}}},
         res = $resource(SERVER_URL + 'data/menu', {}, params),
         menu = store.get('menu', true) || [];

      function checkMenu (newMenu) {
         if( ! angular.equals(menu, newMenu)) {
            menu = newMenu;
            store.set('menu', menu);
            callbacks.map(function (cb){cb();});
         }
      }

      res.query({}, function (data) {
         checkMenu(data);
      });

      return {
         menu : function () {
            return menu;
         },
         ready : function (cb) {
            callbacks.push(cb);
         },
         getTitle : function (cat) {
            if(!menu) return APP_NAME;

            for (var i = 0; i < menu.length; i++) {
               var parent = menu[i];

               for (var j = 0; j < parent.submenu.length; j++) {
                  var m = parent.submenu[j];

                  if(m.id == cat) {
                     return m.name;
                  }
               }

            }
         },
         getColor : function (cat) {
            if(!menu) return null;

            for (var i = 0; i < menu.length; i++) {
               var parent = menu[i];

               for (var j = 0; j < parent.submenu.length; j++) {
                  var m = parent.submenu[j];

                  if(m.id == cat) {
                     return parent.color;
                  }
               }

            }
         }
      }
   }]
);
App.controller('PostsController',
   ['$scope', '$resource', 'store', 'zoom', 'Header', '$routeParams', 'Menu', '$timeout',
      function ($scope, $resource, store, zoom, Header, $routeParams, Menu, $timeout) {

         var offset      = 0,
            likedOffset = 0,
            canLoad     = true,
            win         = angular.element(window),
            cat         = $routeParams.cat,
            FAV         = cat === 'favorites',
            params      = {get: {method: 'JSONP', params: {callback: 'JSON_CALLBACK'}}},
            Post        = $resource(SERVER_URL + 'posts/category/:cat/:page', {}, params),
            LikedPost   = $resource(SERVER_URL + 'posts/list/:ids', {}, params),
            likedPosts  = (store.get('liked', true) || []).reverse();

         $scope.postIds = [];
         $scope.posts = [];
         $scope.liked = store.get('liked', true) || [];
         $scope.loading = false;
         $scope.updating = false;
         $scope.FAV = FAV;
         $scope.order = FAV ? 'none' : 'date';

         $scope.isLiked = function (id) {
            return $scope.liked.indexOf(id) !== -1;
         };

         $scope.like = function (id) {
            var index = $scope.liked.indexOf(id);

            if(index === -1) $scope.liked.push(id);
            else $scope.liked.splice(index, 1);

            store.set('liked', $scope.liked);
         };

         $scope.loadMore = function () {
            loadMore();
         };

         $scope.swipeDown = function () {
            if(FAV) return;

            if((window.pageYOffset || document.documentElement.scrollTop) < 10) {
               $scope.updating = true;

               loadMore(0, function () {
                  $timeout(function () {
                     $scope.updating = false;
                  }, 300);
               });
            }
         };

         $scope.swipeRight = function () {
            window.location.hash = "/";
         };

         $scope.openGif = function (ev, target) {
            var button = target ? ev.target.previousElementSibling : ev.target,
               gif = button.nextElementSibling,
               getAttr = gif.getAttribute.bind(gif),
               setAttr = gif.setAttribute.bind(gif),
               opened = getAttr('data-opened') != 'true';

            setAttr('src', getAttr(opened ? 'data-url' : 'data-preview'));
            setAttr('data-opened', opened);

            if(opened) {
               button.className = "gif loading";
               gif.onload = function () {
                  button.className = "gif loaded";
               }
            }
            else {
               button.className = "gif";
               gif.onload = angular.noop;
            }
         };

         $scope.zoomImage = function (image) {
            zoom.open(image);
         };

         $scope.loadMore();

         if(FAV) setFavHeader();
         else setHeader();

         Header.set('back', true);
         Menu.ready(setHeader);

         win.bind('scroll', onScroll);

         $scope.$on('$destroy', function () {
            win.unbind('scroll', onScroll);
            document.ontouchmove = angular.noop;
         });

         function loadMore (page, callback) {
            var liked = getList();

            if( ! canLoad || (FAV && !liked.length)) return;

            page = typeof page !== "undefined" ? page : offset++;
            canLoad = false;
            $scope.loading = true;

            if(FAV) LikedPost.get({ids: liked}, parse);
            else Post.get({page: page, cat: cat}, parse);

            function parse (res) {
               var posts = JSON.parse(res.posts);

               if(posts && FAV) posts = sortLikedPosts(posts, liked);

               angular.forEach(posts, function (post) {
                  if($scope.postIds.indexOf(+post.id) !== -1) return;
                  $scope.postIds.push(+post.id);
                  post.links = preparePostLinks(post.links, post.text);
                  $scope.posts.push(post);
               });

               if(posts.length === 12) canLoad = true;

               $scope.loading = false;
               (callback || angular.noop)();
            }
         }

         function onScroll () {
            if( ! canLoad) return;

            var scrollTop = window.pageYOffset || document.documentElement.scrollTop,
               windowHeight = window.innerHeight,
               docHeight = document.getElementById('posts').clientHeight;

            if((docHeight - windowHeight - scrollTop) < 3500) {
               loadMore();
               $scope.$apply();
               canLoad = false;
            }
         }

         function setHeader () {
            Header.set('title', Menu.getTitle(cat));
            Header.set('color', Menu.getColor(cat));
         }

         function setFavHeader () {
            Header.set('title', 'Избранное');
            Header.set('color', '#8E3D8D');
         }

         function getList () {
            var needLoad = likedPosts.slice(likedOffset, likedOffset +12);
            likedOffset += 12;
            return needLoad;
         }

         function sortLikedPosts (posts, liked) {
            return posts.sort(function (a, b) {
               return liked.indexOf(a.id) > liked.indexOf(b.id);
            })
         }

         function preparePostLinks (links, text) {
            if(!links) return [];

            return links
               .filter(function (link) {
                  return text.indexOf(link.url) === -1;
               })
               .map(function (link) {
                  link.title = link.title || link.url;

                  if(link.title.length > 30) {
                     var title = "",
                        word = 0,
                        words = link.title.split(' ');

                     while(title.length < 30) {
                        title += words[word++] + ' ';
                     }

                     link.title = title.slice(0, -1) + '...';
                  }

                  return link;
               });
         }

      }]
);
App.filter('readMore', function () {
   var LEN = 300;

   return function (t) {
      if (t.length < LEN + 100) return [t, null];

      var words = t.split('. '),
         res = "",
         word = 0,
         other;

      while(res.length < LEN) {
         res += words[word++] + ". ";
      }

      other = t.slice(res.length);

      if(other.length < 50) {
         return [res + other, null];
      }

      return [res, other];
   }
});
window.myStore = {
   set : function (k, v) {
      localStorage.setItem(k, typeof v === "object" ? JSON.stringify(v) : v);
   },
   get : function (k, json) {
      k = localStorage.getItem(k);
      return k && json ? JSON.parse(k) : k;
   }
};

App.factory('store', function () {
   return myStore;
});
App.directive('ngToggle', function () {
   return function (scope, els, attrs) {
      var menu = els;

      scope.$watch(attrs.ngToggle, function (isOpen) {
         if(isOpen) menu.addClass('opened');
         else menu.removeClass('opened');
      });
   }
});
App.controller('ZoomController',
   ['$scope', '$rootScope', 'zoom', function ($scope, $rootScope, zoom) {

      var img = document.getElementById('zoom-image'),
          evented = false;

      if( ! evented) {
         Zoom('zoom-wrap');
         evented = true;
      }

      $rootScope.zoomOpened = false;

      $scope.image = null;
      $scope.close = zoom.close;

      $rootScope.$on('zoom:close', function () {
         img.style.width = null;
         img.style.height = null;
         img.style.marginTop = null;
         img.style.marginLeft = null;
         img.style.transform = null;
         img.style.oTransform = null;
         img.style.msTransform = null;
         img.style.mozTransform = null;
         img.style.webkitTransform = null;
         close();
      });

      $rootScope.$on('zoom:open', function (e, imgRes) {
         $rootScope.zoomOpened = true;
         $scope.image = imgRes.src;
         imgRes.onload = function (e) {
            var target = e.target,
                imgH = target.height,
                imgW = target.width,
                ratio = imgW / imgH,
                wH = window.innerHeight,
                wW = window.innerWidth;

            if(imgW > wW) {
               imgW = wW - 20;
               imgH = imgW / ratio;
            }

            if(imgH > wH) {
               imgH = wH - 20;
               imgW = imgH * ratio;
            }

            //img.style.width = imgH + 'px';
            img.style.height = imgH + 'px';
            img.style.marginTop = - imgH / 2 + 'px';
            img.style.marginLeft = - imgW / 2 + 'px';
         };
      });

      function close () {
         $scope.opened = false;
         $scope.image = null;
         $rootScope.zoomOpened = null;
      }

   }]
);
App.factory('zoom',
   ['$rootScope', function ($rootScope) {
      var opened = false;

      return {
         opened : function () {
            return opened;
         },

         open : function (image) {
            $rootScope.$emit('zoom:open', this.createImage(image));
            opened = true;
         },

         close : function () {
            $rootScope.$emit('zoom:close', null);
            opened = false;
         },

         createImage : function (url) {
            var img = new Image();
            img.src = url;
            return img;
         }
      }
   }]
);
angular.module("App").run(["$templateCache", function($templateCache) {

  $templateCache.put("views/main.html",
    "<div ng-controller=\"IndexController\" class=\"menu-container\">\n" +
    "   <div class=\"button-container\" ng-repeat=\"(id, menu) in menus\" ng-style=\"{background: menu.color}\">\n" +
    "      <div class=\"button\" hm-tap=\"openMenu($index, menu.submenu.length)\">\n" +
    "         <i class=\"menu-icon-{{ menu.icon }}\"></i> {{ menu.name }}\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"submenu-container\" ng-class=\"{opened: $index === showedMenu}\"> <!-- ng-animate=\"'submenu'\"-->\n" +
    "         <div ng-repeat=\"smenu in menu.submenu\" hm-tap=\"openCategory(smenu.id)\">{{ smenu.name }}</div>\n" +
    "      </div>\n" +
    "   </div>\n" +
    "\n" +
    "   <div class=\"button-container\">\n" +
    "      <div class=\"button favorite\" hm-tap=\"openFavorite()\">\n" +
    "         <i class=\"menu-icon-fav\"></i> Избранное\n" +
    "      </div>\n" +
    "   </div>\n" +
    "</div>"
  );

  $templateCache.put("views/posts.html",
    "<table ng-controller=\"HeaderController\" ng-show=\"!isTablet\" ng-style=\"{background: colorHeader}\" id=\"header\">\n" +
    "    <tr>\n" +
    "        <td hm-tap=\"back()\" class=\"back\"><span class=\"icon-angle-left\"></span></td>\n" +
    "        <td ng-bind=\"title\" class=\"title\"></td>\n" +
    "        <td hm-tap=\"scrollTop()\" class=\"top\"><span class=\"icon-angle-up\"></span></td>\n" +
    "    </tr>\n" +
    "</table>\n" +
    "\n" +
    "<div class=\"header-push\"></div>\n" +
    "\n" +
    "<div ng-controller=\"PostsController\" id=\"posts\" hm-swipedown=\"swipeDown()\">\n" +
    "  <div ng-class=\"{opened: updating}\" class=\"updating\">Обновление <span class=\"icon-spin4 animate-spin\"></span></div>\n" +
    "  <div ng-class=\"{opened: FAV && !liked.length}\" class=\"updating\">Вы еще не сохранили ни одного поста.</div>\n" +
    "\n" +
    "  <div ng-repeat=\"post in posts | orderBy:order:true\" class=\"post\">\n" +
    "\n" +
    "     <div class=\"post-inner\" bind-links=\"\">\n" +
    "        <div class=\"text\" ng-show=\"post.text.length\" ng-init=\"text = (post.text | readMore); show=false\">\n" +
    "           <span ng-bind-html-unsafe=\"text[0]\"></span>\n" +
    "           <a ng-show=\"text[1] && ! show\" ng-click=\"show=true\" class=\"read-more\">Читать далее</a>\n" +
    "           <span ng-show=\"show\" ng-bind-html-unsafe=\"text[1]\"></span>\n" +
    "        </div>\n" +
    "\n" +
    "       <div ng-repeat=\"photo in post.photos\" class=\"image-container\">\n" +
    "          <span class=\"zoom\" ng-click=\"zoomImage(photo.big)\"></span>\n" +
    "          <img ng-src=\"{{ getPhoto(photo) }}\" class=\"image\">\n" +
    "       </div>\n" +
    "\n" +
    "       <div ng-repeat=\"gif in post.gifs\" class=\"image-container\">\n" +
    "          <span class=\"gif\" ng-click=\"openGif($event)\">Загрузка...</span>\n" +
    "          <img ng-src=\"{{ gif.preview }}\" data-url=\"{{ gif.url }}\" ng-click=\"openGif($event, true)\" data-preview=\"{{ gif.preview }}\" data-opened=\"false\" class=\"image gif-image\">\n" +
    "       </div>\n" +
    "\n" +
    "      <a ng-show=\"post.links[0]\" ng-href=\"{{ post.links[0].url }}\" ng-bind=\"post.links[0].title\" class=\"link\"></a>\n" +
    "\n" +
    "     </div>\n" +
    "\n" +
    "     <div class=\"meta\">\n" +
    "        <table>\n" +
    "           <tr>\n" +
    "              <td class=\"avatar-td\">\n" +
    "                  <img ng-src=\"{{post.groupAvatar}}\">\n" +
    "              </td>\n" +
    "              <td class=\"name-td\">\n" +
    "                  <div class=\"group\" ng-bind=\"post.group\"></div>\n" +
    "                  <div am-time-ago=\"post.date\" class=\"time\"></div>\n" +
    "              </td>\n" +
    "              <td class=\"like-td\">\n" +
    "                 <span hm-tap=\"like(post.id)\" class=\"like\" ng-class=\"{active: isLiked(post.id)}\"></span>\n" +
    "              </td>\n" +
    "           </tr>\n" +
    "        </table>\n" +
    "     </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div ng-show=\"loading\" class=\"loading\">Загрузка контента <span class=\"icon-spin4 animate-spin\"></span></div>\n" +
    "</div>\n" +
    "\n" +
    "<div ng-controller=\"ZoomController\">\n" +
    "  <div id=\"zoom\" ng-show=\"zoomOpened\">\n" +
    "     <div class=\"overlay\" hm-tap=\"close()\"></div>\n" +
    "     <div class=\"image\" id=\"zoom-wrap\" hm-tap=\"close()\">\n" +
    "        <img ng-src=\"{{image}}\" id=\"zoom-image\" hm-tap=\"close()\">\n" +
    "     </div>\n" +
    "  </div>\n" +
    "  </div>"
  );

}]);
