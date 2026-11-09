/* Billy Bob's Christmas Club: optional, consent-gated analytics. */
(function(){
const ID='G-BHN086WHCE';
const test=new URLSearchParams(location.search).has('test') || sessionStorage.getItem('bb_test')==='1';
if(test)sessionStorage.setItem('bb_test','1');
window.bbTrack=function(name,params){if(test||localStorage.getItem('bb_analytics_consent')!=='yes'||typeof window.gtag!=='function')return;window.gtag('event',name,Object.assign({club:'christmas_2026'},params||{}));};
window.bbEnableAnalytics=function(){if(test||window.__bbLoaded)return;window.__bbLoaded=true;window.dataLayer=window.dataLayer||[];window.gtag=function(){dataLayer.push(arguments)};let s=document.createElement('script');s.async=true;s.src='https://www.googletagmanager.com/gtag/js?id='+ID;document.head.appendChild(s);gtag('js',new Date());gtag('config',ID,{send_page_view:false,allow_google_signals:false,allow_ad_personalization_signals:false,anonymize_ip:true});gtag('event','page_view',{page_title:document.title,club:'christmas_2026'});if(!/index\.html$|\/$/.test(location.pathname))gtag('event','game_opened',{game_file:location.pathname.split('/').pop(),club:'christmas_2026'});};
if(localStorage.getItem('bb_analytics_consent')==='yes')window.bbEnableAnalytics();
})();
