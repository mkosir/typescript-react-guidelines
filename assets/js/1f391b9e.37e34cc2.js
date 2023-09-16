(self.webpackChunktypescript_style_guide_website=self.webpackChunktypescript_style_guide_website||[]).push([[85],{5705:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>Ge});var o=n(7294),s=n(6010),i=n(833),a=n(5281),r=n(1917),c=n(1151),l=n(5742),d=n(2389),u=n(2949),m=n(6668);function p(){const{prism:e}=(0,m.L)(),{colorMode:t}=(0,u.I)(),n=e.theme,o=e.darkTheme||n;return"dark"===t?o:n}var h=n(7594),f=n.n(h);const g=/title=(?<quote>["'])(?<title>.*?)\1/,v=/\{(?<range>[\d,-]+)\}/,x={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"},lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""}};function y(e,t){const n=e.map((e=>{const{start:n,end:o}=x[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${o})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function b(e,t){let n=e.replace(/\n$/,"");const{language:o,magicComments:s,metastring:i}=t;if(i&&v.test(i)){const e=i.match(v).groups.range;if(0===s.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${i}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=s[0].className,o=f()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(o),code:n}}if(void 0===o)return{lineClassNames:{},code:n};const a=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return y(["js","jsBlock"],t);case"jsx":case"tsx":return y(["js","jsBlock","jsx"],t);case"html":return y(["js","jsBlock","html"],t);case"python":case"py":case"bash":return y(["bash"],t);case"markdown":case"md":return y(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return y(["tex"],t);case"lua":case"haskell":case"sql":return y(["lua"],t);case"wasm":return y(["wasm"],t);default:return y(Object.keys(x).filter((e=>!["lua","wasm","tex","latex","matlab"].includes(e))),t)}}(o,s),r=n.split("\n"),c=Object.fromEntries(s.map((e=>[e.className,{start:0,range:""}]))),l=Object.fromEntries(s.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),d=Object.fromEntries(s.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),u=Object.fromEntries(s.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let p=0;p<r.length;){const e=r[p].match(a);if(!e){p+=1;continue}const t=e.slice(1).find((e=>void 0!==e));l[t]?c[l[t]].range+=`${p},`:d[t]?c[d[t]].start=p:u[t]&&(c[u[t]].range+=`${c[u[t]].start}-${p-1},`),r.splice(p,1)}n=r.join("\n");const m={};return Object.entries(c).forEach((e=>{let[t,{range:n}]=e;f()(n).forEach((e=>{m[e]??=[],m[e].push(t)}))})),{lineClassNames:m,code:n}}const j={codeBlockContainer:"codeBlockContainer_Ckt0"};var k=n(5893);function N(e){let{as:t,...n}=e;const o=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[o,s]=e;const i=t[o];i&&"string"==typeof s&&(n[i]=s)})),n}(p());return(0,k.jsx)(t,{...n,style:o,className:(0,s.Z)(n.className,j.codeBlockContainer,a.k.common.codeBlock)})}const C={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function L(e){let{children:t,className:n}=e;return(0,k.jsx)(N,{as:"pre",tabIndex:0,className:(0,s.Z)(C.codeBlockStandalone,"thin-scrollbar",n),children:(0,k.jsx)("code",{className:C.codeBlockLines,children:t})})}var w=n(902);const B={attributes:!0,characterData:!0,childList:!0,subtree:!0};function _(e,t){const[n,s]=(0,o.useState)(),i=(0,o.useCallback)((()=>{s(e.current?.closest("[role=tabpanel][hidden]"))}),[e,s]);(0,o.useEffect)((()=>{i()}),[i]),function(e,t,n){void 0===n&&(n=B);const s=(0,w.zX)(t),i=(0,w.Ql)(n);(0,o.useEffect)((()=>{const t=new MutationObserver(s);return e&&t.observe(e,i),()=>t.disconnect()}),[e,s,i])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),i())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}const E={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var H={Prism:n(7410).Z,theme:E};function T(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Z(){return Z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Z.apply(this,arguments)}var S=/\r\n|\r|\n/,I=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},A=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)};function z(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}var M=function(e){function t(){for(var t=this,n=[],o=arguments.length;o--;)n[o]=arguments[o];e.apply(this,n),T(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?function(e,t){var n=e.plain,o=Object.create(null),s=e.styles.reduce((function(e,n){var o=n.languages,s=n.style;return o&&!o.includes(t)||n.types.forEach((function(t){var n=Z({},e[t],s);e[t]=n})),e}),o);return s.root=n,s.plain=Z({},n,{backgroundColor:null}),s}(e.theme,e.language):void 0;return t.themeDict=n})),T(this,"getLineProps",(function(e){var n=e.key,o=e.className,s=e.style,i=Z({},z(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),a=t.getThemeDict(t.props);return void 0!==a&&(i.style=a.plain),void 0!==s&&(i.style=void 0!==i.style?Z({},i.style,s):s),void 0!==n&&(i.key=n),o&&(i.className+=" "+o),i})),T(this,"getStyleForToken",(function(e){var n=e.types,o=e.empty,s=n.length,i=t.getThemeDict(t.props);if(void 0!==i){if(1===s&&"plain"===n[0])return o?{display:"inline-block"}:void 0;if(1===s&&!o)return i[n[0]];var a=o?{display:"inline-block"}:{},r=n.map((function(e){return i[e]}));return Object.assign.apply(Object,[a].concat(r))}})),T(this,"getTokenProps",(function(e){var n=e.key,o=e.className,s=e.style,i=e.token,a=Z({},z(e,["key","className","style","token"]),{className:"token "+i.types.join(" "),children:i.content,style:t.getStyleForToken(i),key:void 0});return void 0!==s&&(a.style=void 0!==a.style?Z({},a.style,s):s),void 0!==n&&(a.key=n),o&&(a.className+=" "+o),a})),T(this,"tokenize",(function(e,t,n,o){var s={code:t,grammar:n,language:o,tokens:[]};e.hooks.run("before-tokenize",s);var i=s.tokens=e.tokenize(s.code,s.grammar,s.language);return e.hooks.run("after-tokenize",s),i}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,o=e.code,s=e.children,i=this.getThemeDict(this.props),a=t.languages[n];return s({tokens:function(e){for(var t=[[]],n=[e],o=[0],s=[e.length],i=0,a=0,r=[],c=[r];a>-1;){for(;(i=o[a]++)<s[a];){var l=void 0,d=t[a],u=n[a][i];if("string"==typeof u?(d=a>0?d:["plain"],l=u):(d=A(d,u.type),u.alias&&(d=A(d,u.alias)),l=u.content),"string"==typeof l){var m=l.split(S),p=m.length;r.push({types:d,content:m[0]});for(var h=1;h<p;h++)I(r),c.push(r=[]),r.push({types:d,content:m[h]})}else a++,t.push(d),n.push(l),o.push(0),s.push(l.length)}a--,t.pop(),n.pop(),o.pop(),s.pop()}return I(r),c}(void 0!==a?this.tokenize(t,o,a,n):[o]),className:"prism-code language-"+n,style:void 0!==i?i.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component);const O=M,P={codeLine:"codeLine_lJS_",codeLineNumber:"codeLineNumber_Tfdd",codeLineContent:"codeLineContent_feaV"};function R(e){let{line:t,classNames:n,showLineNumbers:o,getLineProps:i,getTokenProps:a}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const r=i({line:t,className:(0,s.Z)(n,o&&P.codeLine)}),c=t.map(((e,t)=>(0,k.jsx)("span",{...a({token:e,key:t})},t)));return(0,k.jsxs)("span",{...r,children:[o?(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("span",{className:P.codeLineNumber}),(0,k.jsx)("span",{className:P.codeLineContent,children:c})]}):c,(0,k.jsx)("br",{})]})}var W=n(5999);function D(e){return(0,k.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,k.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})})}function $(e){return(0,k.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,k.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})})}const V={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function q(e){let{code:t,className:n}=e;const[i,a]=(0,o.useState)(!1),r=(0,o.useRef)(void 0),c=(0,o.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;if("string"!=typeof e)throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);const o=document.createElement("textarea"),s=document.activeElement;o.value=e,o.setAttribute("readonly",""),o.style.contain="strict",o.style.position="absolute",o.style.left="-9999px",o.style.fontSize="12pt";const i=document.getSelection(),a=i.rangeCount>0&&i.getRangeAt(0);n.append(o),o.select(),o.selectionStart=0,o.selectionEnd=e.length;let r=!1;try{r=document.execCommand("copy")}catch{}o.remove(),a&&(i.removeAllRanges(),i.addRange(a)),s&&s.focus()}(t),a(!0),r.current=window.setTimeout((()=>{a(!1)}),1e3)}),[t]);return(0,o.useEffect)((()=>()=>window.clearTimeout(r.current)),[]),(0,k.jsx)("button",{type:"button","aria-label":i?(0,W.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,W.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,W.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,s.Z)("clean-btn",n,V.copyButton,i&&V.copyButtonCopied),onClick:c,children:(0,k.jsxs)("span",{className:V.copyButtonIcons,"aria-hidden":"true",children:[(0,k.jsx)(D,{className:V.copyButtonIcon}),(0,k.jsx)($,{className:V.copyButtonSuccessIcon})]})})}function F(e){return(0,k.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,k.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}const G={wordWrapButtonIcon:"wordWrapButtonIcon_Bwma",wordWrapButtonEnabled:"wordWrapButtonEnabled_EoeP"};function U(e){let{className:t,onClick:n,isEnabled:o}=e;const i=(0,W.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,k.jsx)("button",{type:"button",onClick:n,className:(0,s.Z)("clean-btn",t,o&&G.wordWrapButtonEnabled),"aria-label":i,title:i,children:(0,k.jsx)(F,{className:G.wordWrapButtonIcon,"aria-hidden":"true"})})}function J(e){let{children:t,className:n="",metastring:i,title:a,showLineNumbers:r,language:c}=e;const{prism:{defaultLanguage:l,magicComments:d}}=(0,m.L)(),u=function(e){return e?.toLowerCase()}(c??function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return t?.replace(/language-/,"")}(n)??l),h=p(),f=function(){const[e,t]=(0,o.useState)(!1),[n,s]=(0,o.useState)(!1),i=(0,o.useRef)(null),a=(0,o.useCallback)((()=>{const n=i.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[i,e]),r=(0,o.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=i.current,n=e>t||i.current.querySelector("code").hasAttribute("style");s(n)}),[i]);return _(i,r),(0,o.useEffect)((()=>{r()}),[e,r]),(0,o.useEffect)((()=>(window.addEventListener("resize",r,{passive:!0}),()=>{window.removeEventListener("resize",r)})),[r]),{codeBlockRef:i,isEnabled:e,isCodeScrollable:n,toggle:a}}(),v=function(e){return e?.match(g)?.groups.title??""}(i)||a,{lineClassNames:x,code:y}=b(t,{metastring:i,language:u,magicComments:d}),j=r??function(e){return Boolean(e?.includes("showLineNumbers"))}(i);return(0,k.jsxs)(N,{as:"div",className:(0,s.Z)(n,u&&!n.includes(`language-${u}`)&&`language-${u}`),children:[v&&(0,k.jsx)("div",{className:C.codeBlockTitle,children:v}),(0,k.jsxs)("div",{className:C.codeBlockContent,children:[(0,k.jsx)(O,{...H,theme:h,code:y,language:u??"text",children:e=>{let{className:t,tokens:n,getLineProps:o,getTokenProps:i}=e;return(0,k.jsx)("pre",{tabIndex:0,ref:f.codeBlockRef,className:(0,s.Z)(t,C.codeBlock,"thin-scrollbar"),children:(0,k.jsx)("code",{className:(0,s.Z)(C.codeBlockLines,j&&C.codeBlockLinesWithNumbering),children:n.map(((e,t)=>(0,k.jsx)(R,{line:e,getLineProps:o,getTokenProps:i,classNames:x[t],showLineNumbers:j},t)))})})}}),(0,k.jsxs)("div",{className:C.buttonGroup,children:[(f.isEnabled||f.isCodeScrollable)&&(0,k.jsx)(U,{className:C.codeButton,onClick:()=>f.toggle(),isEnabled:f.isEnabled}),(0,k.jsx)(q,{className:C.codeButton,code:y})]})]})]})}function Y(e){let{children:t,...n}=e;const s=(0,d.Z)(),i=function(e){return o.Children.toArray(e).some((e=>(0,o.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),a="string"==typeof i?J:L;return(0,k.jsx)(a,{...n,children:i},String(s))}var K=n(9960);var Q=n(7186);const X={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function ee(e){return!!e&&("SUMMARY"===e.tagName||ee(e.parentElement))}function te(e,t){return!!e&&(e===t||te(e.parentElement,t))}function ne(e){let{summary:t,children:n,...i}=e;const a=(0,d.Z)(),r=(0,o.useRef)(null),{collapsed:c,setCollapsed:l}=(0,Q.u)({initialState:!i.open}),[u,m]=(0,o.useState)(i.open),p=o.isValidElement(t)?t:(0,k.jsx)("summary",{children:t??"Details"});return(0,k.jsxs)("details",{...i,ref:r,open:u,"data-collapsed":c,className:(0,s.Z)(X.details,a&&X.isBrowser,i.className),onMouseDown:e=>{ee(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;ee(t)&&te(t,r.current)&&(e.preventDefault(),c?(l(!1),m(!0)):l(!0))},children:[p,(0,k.jsx)(Q.z,{lazy:!1,collapsed:c,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{l(e),m(!e)},children:(0,k.jsx)("div",{className:X.collapsibleContent,children:n})})]})}const oe={details:"details_b_Ee"},se="alert alert--info";function ie(e){let{...t}=e;return(0,k.jsx)(ne,{...t,className:(0,s.Z)(se,oe.details,t.className)})}function ae(e){const t=o.Children.toArray(e.children),n=t.find((e=>o.isValidElement(e)&&"summary"===e.type)),s=(0,k.jsx)(k.Fragment,{children:t.filter((e=>e!==n))});return(0,k.jsx)(ie,{...e,summary:n,children:s})}var re=n(2503);function ce(e){return(0,k.jsx)(re.Z,{...e})}const le={containsTaskList:"containsTaskList_mC6p"};function de(e){if(void 0!==e)return(0,s.Z)(e,e?.includes("contains-task-list")&&le.containsTaskList)}const ue={img:"img_ev3q"};function me(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=o.Children.toArray(e),n=t.find((e=>o.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),s=t.filter((e=>e!==n)),i=n?.props.children;return{mdxAdmonitionTitle:i,rest:s.length>0?(0,k.jsx)(k.Fragment,{children:s}):null}}(e.children),s=e.title??t;return{...e,...s&&{title:s},children:n}}const pe={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};function he(e){let{type:t,className:n,children:o}=e;return(0,k.jsx)("div",{className:(0,s.Z)(a.k.common.admonition,a.k.common.admonitionType(t),pe.admonition,n),children:o})}function fe(e){let{icon:t,title:n}=e;return(0,k.jsxs)("div",{className:pe.admonitionHeading,children:[(0,k.jsx)("span",{className:pe.admonitionIcon,children:t}),n]})}function ge(e){let{children:t}=e;return t?(0,k.jsx)("div",{className:pe.admonitionContent,children:t}):null}function ve(e){const{type:t,icon:n,title:o,children:s,className:i}=e;return(0,k.jsxs)(he,{type:t,className:i,children:[(0,k.jsx)(fe,{title:o,icon:n}),(0,k.jsx)(ge,{children:s})]})}function xe(e){return(0,k.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,k.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const ye={icon:(0,k.jsx)(xe,{}),title:(0,k.jsx)(W.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function be(e){return(0,k.jsx)(ve,{...ye,...e,className:(0,s.Z)("alert alert--secondary",e.className),children:e.children})}function je(e){return(0,k.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,k.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const ke={icon:(0,k.jsx)(je,{}),title:(0,k.jsx)(W.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function Ne(e){return(0,k.jsx)(ve,{...ke,...e,className:(0,s.Z)("alert alert--success",e.className),children:e.children})}function Ce(e){return(0,k.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,k.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const Le={icon:(0,k.jsx)(Ce,{}),title:(0,k.jsx)(W.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function we(e){return(0,k.jsx)(ve,{...Le,...e,className:(0,s.Z)("alert alert--info",e.className),children:e.children})}function Be(e){return(0,k.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,k.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const _e={icon:(0,k.jsx)(Be,{}),title:(0,k.jsx)(W.Z,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function Ee(e){return(0,k.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,k.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const He={icon:(0,k.jsx)(Ee,{}),title:(0,k.jsx)(W.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const Te={icon:(0,k.jsx)(Be,{}),title:(0,k.jsx)(W.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const Ze={...{note:be,tip:Ne,info:we,warning:function(e){return(0,k.jsx)(ve,{..._e,...e,className:(0,s.Z)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,k.jsx)(ve,{...He,...e,className:(0,s.Z)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,k.jsx)(be,{title:"secondary",...e}),important:e=>(0,k.jsx)(we,{title:"important",...e}),success:e=>(0,k.jsx)(Ne,{title:"success",...e}),caution:function(e){return(0,k.jsx)(ve,{...Te,...e,className:(0,s.Z)("alert alert--warning",e.className),children:e.children})}}};function Se(e){const t=me(e),n=(o=t.type,Ze[o]||(console.warn(`No admonition component found for admonition type "${o}". Using Info as fallback.`),Ze.info));var o;return(0,k.jsx)(n,{...t})}const Ie={Head:l.Z,details:ae,Details:ae,code:function(e){return o.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")))?(0,k.jsx)("code",{...e}):(0,k.jsx)(Y,{...e})},a:function(e){return(0,k.jsx)(K.Z,{...e})},pre:function(e){return(0,k.jsx)(k.Fragment,{children:e.children})},ul:function(e){return(0,k.jsx)("ul",{...e,className:de(e.className)})},img:function(e){return(0,k.jsx)("img",{loading:"lazy",...e,className:(t=e.className,(0,s.Z)(t,ue.img))});var t},h1:e=>(0,k.jsx)(ce,{as:"h1",...e}),h2:e=>(0,k.jsx)(ce,{as:"h2",...e}),h3:e=>(0,k.jsx)(ce,{as:"h3",...e}),h4:e=>(0,k.jsx)(ce,{as:"h4",...e}),h5:e=>(0,k.jsx)(ce,{as:"h5",...e}),h6:e=>(0,k.jsx)(ce,{as:"h6",...e}),admonition:Se,mermaid:()=>null};function Ae(e){let{children:t}=e;return(0,k.jsx)(c.Zo,{components:Ie,children:t})}var ze=n(3743);const Me={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},Oe="table-of-contents__link toc-highlight",Pe="table-of-contents__link--active";function Re(e){let{className:t,...n}=e;return(0,k.jsx)("div",{className:(0,s.Z)(Me.tableOfContents,"thin-scrollbar",t),children:(0,k.jsx)(ze.Z,{...n,linkClassName:Oe,linkActiveClassName:Pe})})}function We(){return(0,k.jsx)(W.Z,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function De(){return(0,k.jsx)(W.Z,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function $e(){return(0,k.jsx)(l.Z,{children:(0,k.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function Ve(e){let{className:t}=e;return(0,k.jsx)(Se,{type:"caution",title:(0,k.jsx)(We,{}),className:(0,s.Z)(t,a.k.common.unlistedBanner),children:(0,k.jsx)(De,{})})}function qe(e){return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)($e,{}),(0,k.jsx)(Ve,{...e})]})}const Fe={mdxPageWrapper:"mdxPageWrapper_j9I6"};function Ge(e){const{content:t}=e,{metadata:{title:n,description:o,frontMatter:c,unlisted:l},assets:d}=t,{keywords:u,wrapperClassName:m,hide_table_of_contents:p}=c,h=d.image??c.image;return(0,k.jsx)(i.FG,{className:(0,s.Z)(m??a.k.wrapper.mdxPages,a.k.page.mdxPage),children:(0,k.jsxs)(r.Z,{children:[(0,k.jsx)(i.d,{title:n,description:o,keywords:u,image:h}),(0,k.jsx)("main",{className:"container container--fluid margin-vert--lg",children:(0,k.jsxs)("div",{className:(0,s.Z)("row",Fe.mdxPageWrapper),children:[(0,k.jsxs)("div",{className:(0,s.Z)("col",!p&&"col--8"),children:[l&&(0,k.jsx)(qe,{}),(0,k.jsx)("article",{children:(0,k.jsx)(Ae,{children:(0,k.jsx)(t,{})})})]}),!p&&t.toc.length>0&&(0,k.jsx)("div",{className:"col col--2",children:(0,k.jsx)(Re,{toc:t.toc,minHeadingLevel:c.toc_min_heading_level,maxHeadingLevel:c.toc_max_heading_level})})]})})]})})}},3743:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var o=n(7294),s=n(6668);function i(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const o=n.slice(2,e.level);e.parentIndex=Math.max(...o),n[e.level]=t}));const o=[];return t.forEach((e=>{const{parentIndex:n,...s}=e;n>=0?t[n].children.push(s):o.push(s)})),o}function a(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:o}=e;return t.flatMap((e=>{const t=a({toc:e.children,minHeadingLevel:n,maxHeadingLevel:o});return function(e){return e.level>=n&&e.level<=o}(e)?[{...e,children:t}]:t}))}function r(e){const t=e.getBoundingClientRect();return t.top===t.bottom?r(e.parentNode):t}function c(e,t){let{anchorTopOffset:n}=t;const o=e.find((e=>r(e).top>=n));if(o){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(r(o))?o:e[e.indexOf(o)-1]??null}return e[e.length-1]??null}function l(){const e=(0,o.useRef)(0),{navbar:{hideOnScroll:t}}=(0,s.L)();return(0,o.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,o.useRef)(void 0),n=l();(0,o.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:o,linkActiveClassName:s,minHeadingLevel:i,maxHeadingLevel:a}=e;function r(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(o),r=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const o=[];for(let s=t;s<=n;s+=1)o.push(`h${s}.anchor`);return Array.from(document.querySelectorAll(o.join()))}({minHeadingLevel:i,maxHeadingLevel:a}),l=c(r,{anchorTopOffset:n.current}),d=e.find((e=>l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(s),e.classList.add(s),t.current=e):e.classList.remove(s)}(e,e===d)}))}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),()=>{document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}),[e,n])}var u=n(9960),m=n(5893);function p(e){let{toc:t,className:n,linkClassName:o,isChild:s}=e;return t.length?(0,m.jsx)("ul",{className:s?void 0:n,children:t.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.Z,{to:`#${e.id}`,className:o??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(p,{isChild:!0,toc:e.children,className:n,linkClassName:o})]},e.id)))}):null}const h=o.memo(p);function f(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:r="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:l,maxHeadingLevel:u,...p}=e;const f=(0,s.L)(),g=l??f.tableOfContents.minHeadingLevel,v=u??f.tableOfContents.maxHeadingLevel,x=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return(0,o.useMemo)((()=>a({toc:i(t),minHeadingLevel:n,maxHeadingLevel:s})),[t,n,s])}({toc:t,minHeadingLevel:g,maxHeadingLevel:v});return d((0,o.useMemo)((()=>{if(r&&c)return{linkClassName:r,linkActiveClassName:c,minHeadingLevel:g,maxHeadingLevel:v}}),[r,c,g,v])),(0,m.jsx)(h,{toc:x,className:n,linkClassName:r,...p})}},7594:(e,t)=>{function n(e){let t,n=[];for(let o of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(o))n.push(parseInt(o,10));else if(t=o.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,o,s,i]=t;if(o&&i){o=parseInt(o),i=parseInt(i);const e=o<i?1:-1;"-"!==s&&".."!==s&&"\u2025"!==s||(i+=e);for(let t=o;t!==i;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},1151:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>r,ah:()=>i});var o=n(7294);const s=o.createContext({});function i(e){const t=o.useContext(s);return o.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function r({components:e,children:t,disableParentContext:n}){let r;return r=n?"function"==typeof e?e({}):e||a:i(e),o.createElement(s.Provider,{value:r},t)}}}]);