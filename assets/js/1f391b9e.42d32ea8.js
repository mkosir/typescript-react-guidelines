(self.webpackChunktypescript_style_guide_website=self.webpackChunktypescript_style_guide_website||[]).push([[61],{2241:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>Qe});var s=n(6540),o=n(4164),a=n(9024),c=n(7559),i=n(8548),r=n(8453),l=n(5260),d=n(2303),u=n(5293),m=n(6342);function h(){const{prism:e}=(0,m.p)(),{colorMode:t}=(0,u.G)(),n=e.theme,s=e.darkTheme||n;return"dark"===t?s:n}var p=n(8426),f=n.n(p);const x=/title=(?<quote>["'])(?<title>.*?)\1/,g=/\{(?<range>[\d,-]+)\}/,j={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},b={...j,lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""},vb:{start:"['\u2018\u2019]",end:""},vbnet:{start:"(?:_\\s*)?['\u2018\u2019]",end:""},rem:{start:"[Rr][Ee][Mm]\\b",end:""},f90:{start:"!",end:""},ml:{start:"\\(\\*",end:"\\*\\)"},cobol:{start:"\\*>",end:""}},v=Object.keys(j);function y(e,t){const n=e.map((e=>{const{start:n,end:s}=b[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${s})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function N(e,t){let n=e.replace(/\n$/,"");const{language:s,magicComments:o,metastring:a}=t;if(a&&g.test(a)){const e=a.match(g).groups.range;if(0===o.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${a}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=o[0].className,s=f()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(s),code:n}}if(void 0===s)return{lineClassNames:{},code:n};const c=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return y(["js","jsBlock"],t);case"jsx":case"tsx":return y(["js","jsBlock","jsx"],t);case"html":return y(["js","jsBlock","html"],t);case"python":case"py":case"bash":return y(["bash"],t);case"markdown":case"md":return y(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return y(["tex"],t);case"lua":case"haskell":case"sql":return y(["lua"],t);case"wasm":return y(["wasm"],t);case"vb":case"vba":case"visual-basic":return y(["vb","rem"],t);case"vbnet":return y(["vbnet","rem"],t);case"batch":return y(["rem"],t);case"basic":return y(["rem","f90"],t);case"fsharp":return y(["js","ml"],t);case"ocaml":case"sml":return y(["ml"],t);case"fortran":return y(["f90"],t);case"cobol":return y(["cobol"],t);default:return y(v,t)}}(s,o),i=n.split("\n"),r=Object.fromEntries(o.map((e=>[e.className,{start:0,range:""}]))),l=Object.fromEntries(o.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),d=Object.fromEntries(o.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),u=Object.fromEntries(o.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let h=0;h<i.length;){const e=i[h].match(c);if(!e){h+=1;continue}const t=e.slice(1).find((e=>void 0!==e));l[t]?r[l[t]].range+=`${h},`:d[t]?r[d[t]].start=h:u[t]&&(r[u[t]].range+=`${r[u[t]].start}-${h-1},`),i.splice(h,1)}n=i.join("\n");const m={};return Object.entries(r).forEach((e=>{let[t,{range:n}]=e;f()(n).forEach((e=>{m[e]??=[],m[e].push(t)}))})),{lineClassNames:m,code:n}}const A={codeBlockContainer:"codeBlockContainer_Ckt0"};var k=n(4848);function C(e){let{as:t,...n}=e;const s=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[s,o]=e;const a=t[s];a&&"string"==typeof o&&(n[a]=o)})),n}(h());return(0,k.jsx)(t,{...n,style:s,className:(0,o.A)(n.className,A.codeBlockContainer,c.G.common.codeBlock)})}const w={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function B(e){let{children:t,className:n}=e;return(0,k.jsx)(C,{as:"pre",tabIndex:0,className:(0,o.A)(w.codeBlockStandalone,"thin-scrollbar",n),children:(0,k.jsx)("code",{className:w.codeBlockLines,children:t})})}var _=n(9532);const E={attributes:!0,characterData:!0,childList:!0,subtree:!0};function L(e,t){const[n,o]=(0,s.useState)(),a=(0,s.useCallback)((()=>{o(e.current?.closest("[role=tabpanel][hidden]"))}),[e,o]);(0,s.useEffect)((()=>{a()}),[a]),function(e,t,n){void 0===n&&(n=E);const o=(0,_._q)(t),a=(0,_.Be)(n);(0,s.useEffect)((()=>{const t=new MutationObserver(o);return e&&t.observe(e,a),()=>t.disconnect()}),[e,o,a])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),a())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}var T=n(1765);const U={codeLine:"codeLine_lJS_",codeLineNumber:"codeLineNumber_Tfdd",codeLineContent:"codeLineContent_feaV"};function S(e){let{line:t,classNames:n,showLineNumbers:s,getLineProps:a,getTokenProps:c}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const i=a({line:t,className:(0,o.A)(n,s&&U.codeLine)}),r=t.map(((e,t)=>(0,k.jsx)("span",{...c({token:e})},t)));return(0,k.jsxs)("span",{...i,children:[s?(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("span",{className:U.codeLineNumber}),(0,k.jsx)("span",{className:U.codeLineContent,children:r})]}):r,(0,k.jsx)("br",{})]})}var M=n(1312);function I(e){return(0,k.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,k.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})})}function z(e){return(0,k.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,k.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})})}const H={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function R(e){let{code:t,className:n}=e;const[a,c]=(0,s.useState)(!1),i=(0,s.useRef)(void 0),r=(0,s.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;if("string"!=typeof e)throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);const s=document.createElement("textarea"),o=document.activeElement;s.value=e,s.setAttribute("readonly",""),s.style.contain="strict",s.style.position="absolute",s.style.left="-9999px",s.style.fontSize="12pt";const a=document.getSelection(),c=a.rangeCount>0&&a.getRangeAt(0);n.append(s),s.select(),s.selectionStart=0,s.selectionEnd=e.length;let i=!1;try{i=document.execCommand("copy")}catch{}s.remove(),c&&(a.removeAllRanges(),a.addRange(c)),o&&o.focus()}(t),c(!0),i.current=window.setTimeout((()=>{c(!1)}),1e3)}),[t]);return(0,s.useEffect)((()=>()=>window.clearTimeout(i.current)),[]),(0,k.jsx)("button",{type:"button","aria-label":a?(0,M.T)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,M.T)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,M.T)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,o.A)("clean-btn",n,H.copyButton,a&&H.copyButtonCopied),onClick:r,children:(0,k.jsxs)("span",{className:H.copyButtonIcons,"aria-hidden":"true",children:[(0,k.jsx)(I,{className:H.copyButtonIcon}),(0,k.jsx)(z,{className:H.copyButtonSuccessIcon})]})})}function P(e){return(0,k.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,k.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}const W={wordWrapButtonIcon:"wordWrapButtonIcon_Bwma",wordWrapButtonEnabled:"wordWrapButtonEnabled_EoeP"};function V(e){let{className:t,onClick:n,isEnabled:s}=e;const a=(0,M.T)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,k.jsx)("button",{type:"button",onClick:n,className:(0,o.A)("clean-btn",t,s&&W.wordWrapButtonEnabled),"aria-label":a,title:a,children:(0,k.jsx)(P,{className:W.wordWrapButtonIcon,"aria-hidden":"true"})})}function $(e){let{children:t,className:n="",metastring:a,title:c,showLineNumbers:i,language:r}=e;const{prism:{defaultLanguage:l,magicComments:d}}=(0,m.p)(),u=function(e){return e?.toLowerCase()}(r??function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return t?.replace(/language-/,"")}(n)??l),p=h(),f=function(){const[e,t]=(0,s.useState)(!1),[n,o]=(0,s.useState)(!1),a=(0,s.useRef)(null),c=(0,s.useCallback)((()=>{const n=a.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[a,e]),i=(0,s.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=a.current,n=e>t||a.current.querySelector("code").hasAttribute("style");o(n)}),[a]);return L(a,i),(0,s.useEffect)((()=>{i()}),[e,i]),(0,s.useEffect)((()=>(window.addEventListener("resize",i,{passive:!0}),()=>{window.removeEventListener("resize",i)})),[i]),{codeBlockRef:a,isEnabled:e,isCodeScrollable:n,toggle:c}}(),g=function(e){return e?.match(x)?.groups.title??""}(a)||c,{lineClassNames:j,code:b}=N(t,{metastring:a,language:u,magicComments:d}),v=i??function(e){return Boolean(e?.includes("showLineNumbers"))}(a);return(0,k.jsxs)(C,{as:"div",className:(0,o.A)(n,u&&!n.includes(`language-${u}`)&&`language-${u}`),children:[g&&(0,k.jsx)("div",{className:w.codeBlockTitle,children:g}),(0,k.jsxs)("div",{className:w.codeBlockContent,children:[(0,k.jsx)(T.f4,{theme:p,code:b,language:u??"text",children:e=>{let{className:t,style:n,tokens:s,getLineProps:a,getTokenProps:c}=e;return(0,k.jsx)("pre",{tabIndex:0,ref:f.codeBlockRef,className:(0,o.A)(t,w.codeBlock,"thin-scrollbar"),style:n,children:(0,k.jsx)("code",{className:(0,o.A)(w.codeBlockLines,v&&w.codeBlockLinesWithNumbering),children:s.map(((e,t)=>(0,k.jsx)(S,{line:e,getLineProps:a,getTokenProps:c,classNames:j[t],showLineNumbers:v},t)))})})}}),(0,k.jsxs)("div",{className:w.buttonGroup,children:[(f.isEnabled||f.isCodeScrollable)&&(0,k.jsx)(V,{className:w.codeButton,onClick:()=>f.toggle(),isEnabled:f.isEnabled}),(0,k.jsx)(R,{className:w.codeButton,code:b})]})]})]})}function D(e){let{children:t,...n}=e;const o=(0,d.A)(),a=function(e){return s.Children.toArray(e).some((e=>(0,s.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),c="string"==typeof a?$:B;return(0,k.jsx)(c,{...n,children:a},String(o))}function G(e){return(0,k.jsx)("code",{...e})}var O=n(8774);var q=n(3427),F=n(4577);const Z={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function J(e){return!!e&&("SUMMARY"===e.tagName||J(e.parentElement))}function Y(e,t){return!!e&&(e===t||Y(e.parentElement,t))}function K(e){let{summary:t,children:n,...a}=e;(0,q.A)().collectAnchor(a.id);const c=(0,d.A)(),i=(0,s.useRef)(null),{collapsed:r,setCollapsed:l}=(0,F.u)({initialState:!a.open}),[u,m]=(0,s.useState)(a.open),h=s.isValidElement(t)?t:(0,k.jsx)("summary",{children:t??"Details"});return(0,k.jsxs)("details",{...a,ref:i,open:u,"data-collapsed":r,className:(0,o.A)(Z.details,c&&Z.isBrowser,a.className),onMouseDown:e=>{J(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;J(t)&&Y(t,i.current)&&(e.preventDefault(),r?(l(!1),m(!0)):l(!0))},children:[h,(0,k.jsx)(F.N,{lazy:!1,collapsed:r,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{l(e),m(!e)},children:(0,k.jsx)("div",{className:Z.collapsibleContent,children:n})})]})}const Q={details:"details_b_Ee"},X="alert alert--info";function ee(e){let{...t}=e;return(0,k.jsx)(K,{...t,className:(0,o.A)(X,Q.details,t.className)})}function te(e){const t=s.Children.toArray(e.children),n=t.find((e=>s.isValidElement(e)&&"summary"===e.type)),o=(0,k.jsx)(k.Fragment,{children:t.filter((e=>e!==n))});return(0,k.jsx)(ee,{...e,summary:n,children:o})}var ne=n(1107);function se(e){return(0,k.jsx)(ne.A,{...e})}const oe={containsTaskList:"containsTaskList_mC6p"};function ae(e){if(void 0!==e)return(0,o.A)(e,e?.includes("contains-task-list")&&oe.containsTaskList)}const ce={img:"img_ev3q"};function ie(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=s.Children.toArray(e),n=t.find((e=>s.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),o=t.filter((e=>e!==n)),a=n?.props.children;return{mdxAdmonitionTitle:a,rest:o.length>0?(0,k.jsx)(k.Fragment,{children:o}):null}}(e.children),o=e.title??t;return{...e,...o&&{title:o},children:n}}const re={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};function le(e){let{type:t,className:n,children:s}=e;return(0,k.jsx)("div",{className:(0,o.A)(c.G.common.admonition,c.G.common.admonitionType(t),re.admonition,n),children:s})}function de(e){let{icon:t,title:n}=e;return(0,k.jsxs)("div",{className:re.admonitionHeading,children:[(0,k.jsx)("span",{className:re.admonitionIcon,children:t}),n]})}function ue(e){let{children:t}=e;return t?(0,k.jsx)("div",{className:re.admonitionContent,children:t}):null}function me(e){const{type:t,icon:n,title:s,children:o,className:a}=e;return(0,k.jsxs)(le,{type:t,className:a,children:[s||n?(0,k.jsx)(de,{title:s,icon:n}):null,(0,k.jsx)(ue,{children:o})]})}function he(e){return(0,k.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,k.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const pe={icon:(0,k.jsx)(he,{}),title:(0,k.jsx)(M.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function fe(e){return(0,k.jsx)(me,{...pe,...e,className:(0,o.A)("alert alert--secondary",e.className),children:e.children})}function xe(e){return(0,k.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,k.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const ge={icon:(0,k.jsx)(xe,{}),title:(0,k.jsx)(M.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function je(e){return(0,k.jsx)(me,{...ge,...e,className:(0,o.A)("alert alert--success",e.className),children:e.children})}function be(e){return(0,k.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,k.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const ve={icon:(0,k.jsx)(be,{}),title:(0,k.jsx)(M.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function ye(e){return(0,k.jsx)(me,{...ve,...e,className:(0,o.A)("alert alert--info",e.className),children:e.children})}function Ne(e){return(0,k.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,k.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const Ae={icon:(0,k.jsx)(Ne,{}),title:(0,k.jsx)(M.A,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function ke(e){return(0,k.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,k.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const Ce={icon:(0,k.jsx)(ke,{}),title:(0,k.jsx)(M.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const we={icon:(0,k.jsx)(Ne,{}),title:(0,k.jsx)(M.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const Be={...{note:fe,tip:je,info:ye,warning:function(e){return(0,k.jsx)(me,{...Ae,...e,className:(0,o.A)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,k.jsx)(me,{...Ce,...e,className:(0,o.A)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,k.jsx)(fe,{title:"secondary",...e}),important:e=>(0,k.jsx)(ye,{title:"important",...e}),success:e=>(0,k.jsx)(je,{title:"success",...e}),caution:function(e){return(0,k.jsx)(me,{...we,...e,className:(0,o.A)("alert alert--warning",e.className),children:e.children})}}};function _e(e){const t=ie(e),n=(s=t.type,Be[s]||(console.warn(`No admonition component found for admonition type "${s}". Using Info as fallback.`),Be.info));var s;return(0,k.jsx)(n,{...t})}const Ee={Head:l.A,details:te,Details:te,code:function(e){return function(e){return void 0!==e.children&&s.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")))}(e)?(0,k.jsx)(G,{...e}):(0,k.jsx)(D,{...e})},a:function(e){return(0,k.jsx)(O.A,{...e})},pre:function(e){return(0,k.jsx)(k.Fragment,{children:e.children})},ul:function(e){return(0,k.jsx)("ul",{...e,className:ae(e.className)})},li:function(e){return(0,q.A)().collectAnchor(e.id),(0,k.jsx)("li",{...e})},img:function(e){return(0,k.jsx)("img",{decoding:"async",loading:"lazy",...e,className:(t=e.className,(0,o.A)(t,ce.img))});var t},h1:e=>(0,k.jsx)(se,{as:"h1",...e}),h2:e=>(0,k.jsx)(se,{as:"h2",...e}),h3:e=>(0,k.jsx)(se,{as:"h3",...e}),h4:e=>(0,k.jsx)(se,{as:"h4",...e}),h5:e=>(0,k.jsx)(se,{as:"h5",...e}),h6:e=>(0,k.jsx)(se,{as:"h6",...e}),admonition:_e,mermaid:()=>null};function Le(e){let{children:t}=e;return(0,k.jsx)(r.x,{components:Ee,children:t})}var Te=n(5195);const Ue={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},Se="table-of-contents__link toc-highlight",Me="table-of-contents__link--active";function Ie(e){let{className:t,...n}=e;return(0,k.jsx)("div",{className:(0,o.A)(Ue.tableOfContents,"thin-scrollbar",t),children:(0,k.jsx)(Te.A,{...n,linkClassName:Se,linkActiveClassName:Me})})}function ze(){return(0,k.jsx)(M.A,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function He(){return(0,k.jsx)(M.A,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function Re(){return(0,k.jsx)(l.A,{children:(0,k.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function Pe(e){let{className:t}=e;return(0,k.jsx)(_e,{type:"caution",title:(0,k.jsx)(ze,{}),className:(0,o.A)(t,c.G.common.unlistedBanner),children:(0,k.jsx)(He,{})})}function We(e){return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(Re,{}),(0,k.jsx)(Pe,{...e})]})}const Ve={iconEdit:"iconEdit_Z9Sw"};function $e(e){let{className:t,...n}=e;return(0,k.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,o.A)(Ve.iconEdit,t),"aria-hidden":"true",...n,children:(0,k.jsx)("g",{children:(0,k.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function De(e){let{editUrl:t}=e;return(0,k.jsxs)(O.A,{to:t,className:c.G.common.editThisPage,children:[(0,k.jsx)($e,{}),(0,k.jsx)(M.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}var Ge=n(4586);function Oe(e){void 0===e&&(e={});const{i18n:{currentLocale:t}}=(0,Ge.A)(),n=function(){const{i18n:{currentLocale:e,localeConfigs:t}}=(0,Ge.A)();return t[e].calendar}();return new Intl.DateTimeFormat(t,{calendar:n,...e})}function qe(e){let{lastUpdatedAt:t}=e;const n=new Date(t),s=Oe({day:"numeric",month:"short",year:"numeric",timeZone:"UTC"}).format(n);return(0,k.jsx)(M.A,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,k.jsx)("b",{children:(0,k.jsx)("time",{dateTime:n.toISOString(),itemProp:"dateModified",children:s})})},children:" on {date}"})}function Fe(e){let{lastUpdatedBy:t}=e;return(0,k.jsx)(M.A,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,k.jsx)("b",{children:t})},children:" by {user}"})}function Ze(e){let{lastUpdatedAt:t,lastUpdatedBy:n}=e;return(0,k.jsxs)("span",{className:c.G.common.lastUpdated,children:[(0,k.jsx)(M.A,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t?(0,k.jsx)(qe,{lastUpdatedAt:t}):"",byUser:n?(0,k.jsx)(Fe,{lastUpdatedBy:n}):""},children:"Last updated{atDate}{byUser}"}),!1]})}const Je={lastUpdated:"lastUpdated_JAkA"};function Ye(e){let{className:t,editUrl:n,lastUpdatedAt:s,lastUpdatedBy:a}=e;return(0,k.jsxs)("div",{className:(0,o.A)("row",t),children:[(0,k.jsx)("div",{className:"col",children:n&&(0,k.jsx)(De,{editUrl:n})}),(0,k.jsx)("div",{className:(0,o.A)("col",Je.lastUpdated),children:(s||a)&&(0,k.jsx)(Ze,{lastUpdatedAt:s,lastUpdatedBy:a})})]})}const Ke={mdxPageWrapper:"mdxPageWrapper_j9I6"};function Qe(e){const{content:t}=e,{metadata:{title:n,editUrl:s,description:r,frontMatter:l,unlisted:d,lastUpdatedBy:u,lastUpdatedAt:m},assets:h}=t,{keywords:p,wrapperClassName:f,hide_table_of_contents:x}=l,g=h.image??l.image,j=!!(s||m||u);return(0,k.jsx)(a.e3,{className:(0,o.A)(f??c.G.wrapper.mdxPages,c.G.page.mdxPage),children:(0,k.jsxs)(i.A,{children:[(0,k.jsx)(a.be,{title:n,description:r,keywords:p,image:g}),(0,k.jsx)("main",{className:"container container--fluid margin-vert--lg",children:(0,k.jsxs)("div",{className:(0,o.A)("row",Ke.mdxPageWrapper),children:[(0,k.jsxs)("div",{className:(0,o.A)("col",!x&&"col--8"),children:[d&&(0,k.jsx)(We,{}),(0,k.jsx)("article",{children:(0,k.jsx)(Le,{children:(0,k.jsx)(t,{})})}),j&&(0,k.jsx)(Ye,{className:(0,o.A)("margin-top--sm",c.G.pages.pageFooterEditMetaRow),editUrl:s,lastUpdatedAt:m,lastUpdatedBy:u})]}),!x&&t.toc.length>0&&(0,k.jsx)("div",{className:"col col--2",children:(0,k.jsx)(Ie,{toc:t.toc,minHeadingLevel:l.toc_min_heading_level,maxHeadingLevel:l.toc_max_heading_level})})]})})]})})}},8426:(e,t)=>{function n(e){let t,n=[];for(let s of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(s))n.push(parseInt(s,10));else if(t=s.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,s,o,a]=t;if(s&&a){s=parseInt(s),a=parseInt(a);const e=s<a?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(a+=e);for(let t=s;t!==a;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},8453:(e,t,n)=>{"use strict";n.d(t,{R:()=>c,x:()=>i});var s=n(6540);const o={},a=s.createContext(o);function c(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);