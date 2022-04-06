import e,{useRef as n,useState as t,useEffect as o}from"react";import r from"react-loading-skeleton";function i(e,n){void 0===n&&(n={});var t=n.insertAt;if(e&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===t&&o.firstChild?o.insertBefore(r,o.firstChild):o.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}i("/* common */\n.Container {\n  text-align: left;\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  border-radius: 7px;\n  border: 1px solid #ccc;\n  color: black;\n  transition: 0.3s all ease;\n  height: fit-content; }\n  .Container:hover {\n    background-color: #fafafa !important;\n    cursor: pointer; }\n\n.Secondary {\n  color: #646464; }\n\n.LowerContainer {\n  padding: 10px; }\n\n.Title {\n  margin-top: 0;\n  margin-bottom: 10px; }\n\n.Image {\n  width: 100%;\n  border-top-left-radius: 7px;\n  border-top-right-radius: 7px;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  height: 30vh; }\n\n.SiteDetails {\n  margin-top: 10px; }\n\n/* sm */\n@media (max-width: 640px) {\n  .Description {\n    display: none; } }\n\n/* md */\n@media (min-width: 641px) and (max-width: 768px) {\n  .Description {\n    display: none; } }\n");i(".skeleton-container {\n  border-radius: 7px;\n  border: 1px solid #eee; }\n\n.skeleton-lower-container {\n  padding: 10px; }\n");var a=function(n){var t=n.width,o=void 0===t?"100%":t,i=n.imageHeight,a=void 0===i?"30vh":i,l=n.margin;return e.createElement("div",{className:"skeleton-container",style:{width:o,margin:l}},e.createElement(r,{width:o,height:a}),e.createElement("div",{className:"skeleton-lower-container"},e.createElement(r,{count:3})))},l="https://i.imgur.com/UeDNBNQ.jpeg";var c=function(r){var i=r.url,l=r.className,c=void 0===l?"":l,d=r.width,s=r.height,m=r.descriptionLength,u=r.borderRadius,p=r.imageHeight,h=r.textAlign,g=r.margin,v=r.fallback,f=void 0===v?null:v,b=r.backgroundColor,x=void 0===b?"white":b,N=r.primaryTextColor,w=void 0===N?"black":N,y=r.secondaryTextColor,k=void 0===y?"rgb(100, 100, 100)":y,E=r.borderColor,C=void 0===E?"#ccc":E,T=r.showLoader,D=void 0===T||T,S=r.customLoader,I=void 0===S?null:S,L=r.openInNewTab,R=void 0===L||L,A=r.fetcher,B=r.fallbackImageSrc,U=void 0===B?"https://i.imgur.com/UeDNBNQ.jpeg":B,j=r.explicitImageSrc,H=void 0===j?null:j,F=r.showPlaceholderIfNoImage,Q=void 0===F||F,_=r.customTitle,z=void 0===_?"":_,P=r.customDescription,W=void 0===P?"":P,q=r.setApiData,G=void 0===q?function(){}:q,J=n(!0),K=t(),M=K[0],O=K[1],V=t(!0),X=V[0],Y=V[1];if(o((function(){return J.current=!0,Y(!0),A?A(i).then((function(e){J.current&&(!function(e){return!!e&&null!==e.title&&null!==e.description&&null!==e.image&&null!==e.siteName&&null!==e.hostname&&void 0!==e.title&&void 0!==e.description&&void 0!==e.image&&void 0!==e.siteName&&void 0!==e.hostname&&"null"!==e.image&&!e.image.startsWith("/")}(e)?O(null):O(e),Y(!1))})).catch((function(e){console.error(e),console.error("No metadata could be found for the given URL."),J.current&&(O(null),Y(!1))})):fetch("https://rlp-proxy.herokuapp.com/v2?url="+i).then((function(e){return e.json()})).then((function(e){J.current&&(O(e.metadata),G(e.metadata),Y(!1))})).catch((function(e){console.error(e),console.error("No metadata could be found for the given URL."),J.current&&(O(null),Y(!1))})),function(){J.current=!1}}),[i,A]),X&&D)return I?e.createElement(e.Fragment,null,I):e.createElement(a,{width:d,imageHeight:p,margin:g});if(!M)return e.createElement(e.Fragment,null,f);var Z=M.image,$=M.description,ee=M.title,ne=M.siteName,te=M.hostname;return e.createElement("div",{"data-testid":"container",onClick:function(){var e=R?"_blank":"_self";window.open(i,e)},className:"Container "+c,style:{width:d,height:s,borderRadius:u,textAlign:h,margin:g,backgroundColor:x,borderColor:C}},(Z||U)&&Q&&e.createElement("div",{"data-testid":"image-container",style:{borderTopLeftRadius:u,borderTopRightRadius:u,backgroundImage:"url("+(H||Z||U)+"), url("+U+")",height:p},className:"Image"}),e.createElement("div",{className:"LowerContainer"},e.createElement("h3",{"data-testid":"title",className:"Title",style:{color:w}},""!==z?z:ee),""!==W?W:$&&e.createElement("span",{"data-testid":"desc",className:"Description Secondary",style:{color:k}},m&&$.length>m?$.slice(0,m)+"...":$),e.createElement("div",{className:"Secondary SiteDetails",style:{color:k}},ne&&e.createElement("span",null,ne," • "),e.createElement("span",null,te))))};export{c as LinkPreview,l as placeholderImg};
//# sourceMappingURL=index.esm.js.map
