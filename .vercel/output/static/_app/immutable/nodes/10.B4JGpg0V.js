import{s as ie,n as Z,r as Ne,e as ge,j as Oe,i as ke}from"../chunks/scheduler.BVKwUkgL.js";import{S as oe,i as ce,e as _,s as w,c as v,a as E,g as J,f as M,d as h,h as p,j as P,k as f,v as me,t as F,b as B,l as Y,w as W,x as $e,E as se,C as ye,o as x,p as ee,q as te,m as le,n as ae,r as ne}from"../chunks/index.BJVizwO2.js";import{s as Se}from"../chunks/stores.BsF8LMy-.js";import{C as Ee}from"../chunks/Card.qpc5-zEe.js";import{e as X}from"../chunks/each.D6YF6ztN.js";import{p as Fe,i as Be,a as je}from"../chunks/entry.BQpUHGpu.js";function Le(r,e,l){const t=r.slice();return t[1]=e[l],t}function Te(r){let e=r[1].trektype.title+"",l;return{c(){l=F(e)},l(t){l=B(t,e)},m(t,a){P(t,l,a)},p(t,a){a&1&&e!==(e=t[1].trektype.title+"")&&Y(l,e)},d(t){t&&h(l)}}}function Ue(r){let e=r[1].member+"",l;return{c(){l=F(e)},l(t){l=B(t,e)},m(t,a){P(t,l,a)},p(t,a){a&1&&e!==(e=t[1].member+"")&&Y(l,e)},d(t){t&&h(l)}}}function qe(r){let e=r[1].member.lastName+"",l,t,a=r[1].member.firstName+"",n;return{c(){l=F(e),t=F(", "),n=F(a)},l(s){l=B(s,e),t=B(s,", "),n=B(s,a)},m(s,i){P(s,l,i),P(s,t,i),P(s,n,i)},p(s,i){i&1&&e!==(e=s[1].member.lastName+"")&&Y(l,e),i&1&&a!==(a=s[1].member.firstName+"")&&Y(n,a)},d(s){s&&(h(l),h(t),h(n))}}}function De(r){let e,l,t,a,n=r[1].poi+"",s,i,o,d=r[1].level+"",u,$,L,I,g=typeof r[1].trektype!="string"&&Te(r);function y(c,b){return typeof c[1].member!="string"?qe:Ue}let A=y(r),T=A(r);return{c(){e=_("tr"),l=_("td"),g&&g.c(),t=w(),a=_("td"),s=F(n),i=w(),o=_("td"),u=F(d),$=w(),L=_("td"),T.c(),I=w()},l(c){e=v(c,"TR",{});var b=E(e);l=v(b,"TD",{});var N=E(l);g&&g.l(N),N.forEach(h),t=M(b),a=v(b,"TD",{});var j=E(a);s=B(j,n),j.forEach(h),i=M(b),o=v(b,"TD",{});var O=E(o);u=B(O,d),O.forEach(h),$=M(b),L=v(b,"TD",{});var U=E(L);T.l(U),U.forEach(h),I=M(b),b.forEach(h)},m(c,b){P(c,e,b),f(e,l),g&&g.m(l,null),f(e,t),f(e,a),f(a,s),f(e,i),f(e,o),f(o,u),f(e,$),f(e,L),T.m(L,null),f(e,I)},p(c,b){typeof c[1].trektype!="string"?g?g.p(c,b):(g=Te(c),g.c(),g.m(l,null)):g&&(g.d(1),g=null),b&1&&n!==(n=c[1].poi+"")&&Y(s,n),b&1&&d!==(d=c[1].level+"")&&Y(u,d),A===(A=y(c))&&T?T.p(c,b):(T.d(1),T=A(c),T&&(T.c(),T.m(L,null)))},d(c){c&&h(e),g&&g.d(),T.d()}}}function Re(r){let e,l,t="<th>Trektype</th> <th>POI</th> <th>Level</th> <th>Added by</th>",a,n,s=X(r[0]),i=[];for(let o=0;o<s.length;o+=1)i[o]=De(Le(r,s,o));return{c(){e=_("table"),l=_("thead"),l.innerHTML=t,a=w(),n=_("tbody");for(let o=0;o<i.length;o+=1)i[o].c();this.h()},l(o){e=v(o,"TABLE",{class:!0});var d=E(e);l=v(d,"THEAD",{"data-svelte-h":!0}),J(l)!=="svelte-k44123"&&(l.innerHTML=t),a=M(d),n=v(d,"TBODY",{});var u=E(n);for(let $=0;$<i.length;$+=1)i[$].l(u);u.forEach(h),d.forEach(h),this.h()},h(){p(e,"class","table is-fullwidth")},m(o,d){P(o,e,d),f(e,l),f(e,a),f(e,n);for(let u=0;u<i.length;u+=1)i[u]&&i[u].m(n,null)},p(o,[d]){if(d&1){s=X(o[0]);let u;for(u=0;u<s.length;u+=1){const $=Le(o,s,u);i[u]?i[u].p($,d):(i[u]=De($),i[u].c(),i[u].m(n,null))}for(;u<i.length;u+=1)i[u].d(1);i.length=s.length}},i:Z,o:Z,d(o){o&&h(e),me(i,o)}}}function ze(r,e,l){let{placemarks:t}=e;return r.$$set=a=>{"placemarks"in a&&l(0,t=a.placemarks)},[t]}class Je extends oe{constructor(e){super(),ce(this,e,ze,Re,ie,{placemarks:0})}}function Ye(r){const e=JSON.parse(r);return e.data&&(e.data=Fe(e.data)),e}function Ie(r){return HTMLElement.prototype.cloneNode.call(r)}function Ge(r,e=()=>{}){const l=async({action:a,result:n,reset:s=!0,invalidateAll:i=!0})=>{n.type==="success"&&(s&&HTMLFormElement.prototype.reset.call(r),i&&await Be()),(location.origin+location.pathname===a.origin+a.pathname||n.type==="redirect"||n.type==="error")&&je(n)};async function t(a){var g,y,A,T;if(((g=a.submitter)!=null&&g.hasAttribute("formmethod")?a.submitter.formMethod:Ie(r).method)!=="post")return;a.preventDefault();const s=new URL((y=a.submitter)!=null&&y.hasAttribute("formaction")?a.submitter.formAction:Ie(r).action),i=new FormData(r),o=(A=a.submitter)==null?void 0:A.getAttribute("name");o&&i.append(o,((T=a.submitter)==null?void 0:T.getAttribute("value"))??"");const d=new AbortController;let u=!1;const L=await e({action:s,cancel:()=>u=!0,controller:d,formData:i,formElement:r,submitter:a.submitter})??l;if(u)return;let I;try{const c=await fetch(s,{method:"POST",headers:{accept:"application/json","x-sveltekit-action":"true"},cache:"no-store",body:i,signal:d.signal});I=Ye(await c.text()),I.type==="error"&&(I.status=c.status)}catch(c){if((c==null?void 0:c.name)==="AbortError")return;I={type:"error",error:c}}L({action:s,formData:i,formElement:r,update:c=>l({action:s,result:I,reset:c==null?void 0:c.reset,invalidateAll:c==null?void 0:c.invalidateAll}),result:I})}return HTMLFormElement.prototype.addEventListener.call(r,"submit",t),{destroy(){HTMLFormElement.prototype.removeEventListener.call(r,"submit",t)}}}function Ke(r){let e,l,t='<label for="lat" class="label">Lat</label>',a,n,s,i,o,d,u,$='<label for="lng" class="label">Lng</label>',L,I,g,y,A,T;return{c(){e=_("div"),l=_("div"),l.innerHTML=t,a=w(),n=_("div"),s=_("div"),i=_("p"),o=_("input"),d=w(),u=_("div"),u.innerHTML=$,L=w(),I=_("div"),g=_("p"),y=_("input"),this.h()},l(c){e=v(c,"DIV",{class:!0});var b=E(e);l=v(b,"DIV",{class:!0,"data-svelte-h":!0}),J(l)!=="svelte-a1jkre"&&(l.innerHTML=t),a=M(b),n=v(b,"DIV",{class:!0});var N=E(n);s=v(N,"DIV",{class:!0});var j=E(s);i=v(j,"P",{class:!0});var O=E(i);o=v(O,"INPUT",{id:!0,class:!0,type:!0,name:!0,step:!0}),O.forEach(h),j.forEach(h),d=M(N),u=v(N,"DIV",{class:!0,"data-svelte-h":!0}),J(u)!=="svelte-18bhoyi"&&(u.innerHTML=$),L=M(N),I=v(N,"DIV",{class:!0});var U=E(I);g=v(U,"P",{class:!0});var q=E(g);y=v(q,"INPUT",{id:!0,class:!0,type:!0,name:!0,step:!0}),q.forEach(h),U.forEach(h),N.forEach(h),b.forEach(h),this.h()},h(){p(l,"class","field-label is-normal"),p(o,"id","lat"),p(o,"class","input"),p(o,"type","number"),p(o,"name","lat"),p(o,"step","any"),p(i,"class","control is-expanded"),p(s,"class","field"),p(u,"class","field-label is-normal"),p(y,"id","lng"),p(y,"class","input"),p(y,"type","number"),p(y,"name","lng"),p(y,"step","any"),p(g,"class","control is-expanded"),p(I,"class","field"),p(n,"class","field-body"),p(e,"class","box field is-horizontal")},m(c,b){P(c,e,b),f(e,l),f(e,a),f(e,n),f(n,s),f(s,i),f(i,o),W(o,r[0]),f(n,d),f(n,u),f(n,L),f(n,I),f(I,g),f(g,y),W(y,r[1]),A||(T=[$e(o,"input",r[2]),$e(y,"input",r[3])],A=!0)},p(c,[b]){b&1&&se(o.value)!==c[0]&&W(o,c[0]),b&2&&se(y.value)!==c[1]&&W(y,c[1])},i:Z,o:Z,d(c){c&&h(e),A=!1,Ne(T)}}}function Qe(r,e,l){let{lat:t=0}=e,{lng:a=0}=e;function n(){t=se(this.value),l(0,t)}function s(){a=se(this.value),l(1,a)}return r.$$set=i=>{"lat"in i&&l(0,t=i.lat),"lng"in i&&l(1,a=i.lng)},[t,a,n,s]}class We extends oe{constructor(e){super(),ce(this,e,Qe,Ke,ie,{lat:0,lng:1})}}function Ae(r,e,l){const t=r.slice();return t[6]=e[l],t}function Ce(r,e,l){const t=r.slice();return t[9]=e[l],t}function Ve(r){let e,l,t=r[9]+"",a;return{c(){e=_("input"),l=w(),a=F(t),this.h()},l(n){e=v(n,"INPUT",{class:!0,type:!0,name:!0}),l=M(n),a=B(n,t),this.h()},h(){p(e,"class","radio"),p(e,"type","radio"),e.value=r[9],p(e,"name","level")},m(n,s){P(n,e,s),P(n,l,s),P(n,a,s)},p:Z,d(n){n&&(h(e),h(l),h(a))}}}function we(r){let e,l=r[6].title+"",t,a;return{c(){e=_("option"),t=F(l),this.h()},l(n){e=v(n,"OPTION",{});var s=E(e);t=B(s,l),s.forEach(h),this.h()},h(){e.__value=a=r[6]._id,W(e,e.__value)},m(n,s){P(n,e,s),f(e,t)},p(n,s){s&1&&l!==(l=n[6].title+"")&&Y(t,l),s&1&&a!==(a=n[6]._id)&&(e.__value=a,W(e,e.__value))},d(n){n&&h(e)}}}function Xe(r){let e,l,t='<label class="label" for="poi">Enter Trail:</label> <input class="input" id="poi" name="poi" type="string"/>',a,n,s,i,o="Select Level of experience required:",d,u,$,L,I="Select Trektype:",g,y,A,T,c,b,N,j,O,U='<div class="control"><button class="button is-success is-fullwidth">Please Add a Trail</button></div>',q,R,G,ue,re,fe,he,K=X(r[3]),C=[];for(let m=0;m<K.length;m+=1)C[m]=Ve(Ce(r,K,m));let Q=X(r[0]),V=[];for(let m=0;m<Q.length;m+=1)V[m]=we(Ae(r,Q,m));function He(m){r[4](m)}function Pe(m){r[5](m)}let de={};return r[1]!==void 0&&(de.lat=r[1]),r[2]!==void 0&&(de.lng=r[2]),c=new We({props:de}),ge.push(()=>ye(c,"lat",He)),ge.push(()=>ye(c,"lng",Pe)),{c(){e=_("form"),l=_("div"),l.innerHTML=t,a=w(),n=_("div"),s=_("div"),i=_("label"),i.textContent=o,d=w();for(let m=0;m<C.length;m+=1)C[m].c();u=w(),$=_("div"),L=_("label"),L.textContent=I,g=w(),y=_("div"),A=_("select");for(let m=0;m<V.length;m+=1)V[m].c();T=w(),x(c.$$.fragment),j=w(),O=_("div"),O.innerHTML=U,q=w(),R=_("div"),G=_("div"),ue=F(Me),this.h()},l(m){e=v(m,"FORM",{method:!0,action:!0});var D=E(e);l=v(D,"DIV",{class:!0,"data-svelte-h":!0}),J(l)!=="svelte-1n0vphb"&&(l.innerHTML=t),a=M(D),n=v(D,"DIV",{class:!0});var H=E(n);s=v(H,"DIV",{class:!0});var k=E(s);i=v(k,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),J(i)!=="svelte-1fswki9"&&(i.textContent=o),d=M(k);for(let z=0;z<C.length;z+=1)C[z].l(k);k.forEach(h),H.forEach(h),u=M(D),$=v(D,"DIV",{class:!0});var S=E($);L=v(S,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),J(L)!=="svelte-gkh9sh"&&(L.textContent=I),g=M(S),y=v(S,"DIV",{class:!0});var pe=E(y);A=v(pe,"SELECT",{name:!0});var _e=E(A);for(let z=0;z<V.length;z+=1)V[z].l(_e);_e.forEach(h),pe.forEach(h),S.forEach(h),T=M(D),ee(c.$$.fragment,D),j=M(D),O=v(D,"DIV",{class:!0,"data-svelte-h":!0}),J(O)!=="svelte-tte50g"&&(O.innerHTML=U),D.forEach(h),q=M(m),R=v(m,"DIV",{class:!0});var ve=E(R);G=v(ve,"DIV",{class:!0});var be=E(G);ue=B(be,Me),be.forEach(h),ve.forEach(h),this.h()},h(){p(l,"class","field"),p(i,"class","label"),p(i,"for","poi"),p(s,"class","control"),p(n,"class","field"),p(L,"class","label"),p(L,"for","poi"),p(A,"name","trektype"),p(y,"class","select"),p($,"class","field"),p(O,"class","field"),p(e,"method","POST"),p(e,"action","?/trails"),p(G,"class","content has-text-centered"),p(R,"class","box mt-4")},m(m,D){P(m,e,D),f(e,l),f(e,a),f(e,n),f(n,s),f(s,i),f(s,d);for(let H=0;H<C.length;H+=1)C[H]&&C[H].m(s,null);f(e,u),f(e,$),f($,L),f($,g),f($,y),f(y,A);for(let H=0;H<V.length;H+=1)V[H]&&V[H].m(A,null);f(e,T),te(c,e,null),f(e,j),f(e,O),P(m,q,D),P(m,R,D),f(R,G),f(G,ue),re=!0,fe||(he=Oe(Ge.call(null,e)),fe=!0)},p(m,[D]){if(D&8){K=X(m[3]);let k;for(k=0;k<K.length;k+=1){const S=Ce(m,K,k);C[k]?C[k].p(S,D):(C[k]=Ve(S),C[k].c(),C[k].m(s,null))}for(;k<C.length;k+=1)C[k].d(1);C.length=K.length}if(D&1){Q=X(m[0]);let k;for(k=0;k<Q.length;k+=1){const S=Ae(m,Q,k);V[k]?V[k].p(S,D):(V[k]=we(S),V[k].c(),V[k].m(A,null))}for(;k<V.length;k+=1)V[k].d(1);V.length=Q.length}const H={};!b&&D&2&&(b=!0,H.lat=m[1],ke(()=>b=!1)),!N&&D&4&&(N=!0,H.lng=m[2],ke(()=>N=!1)),c.$set(H)},i(m){re||(le(c.$$.fragment,m),re=!0)},o(m){ae(c.$$.fragment,m),re=!1},d(m){m&&(h(e),h(q),h(R)),me(C,m),me(V,m),ne(c),fe=!1,he()}}}let Me="Build the Journey";function Ze(r,e,l){let{trektypeList:t=[]}=e,a=52.160858,n=-7.15242,s=["beginner","intermediate","expert"];function i(d){a=d,l(1,a)}function o(d){n=d,l(2,n)}return r.$$set=d=>{"trektypeList"in d&&l(0,t=d.trektypeList)},[t,a,n,s,i,o]}class xe extends oe{constructor(e){super(),ce(this,e,Ze,Xe,ie,{trektypeList:0})}}function et(r){let e,l;return e=new Je({props:{placemarks:r[0].placemarks}}),{c(){x(e.$$.fragment)},l(t){ee(e.$$.fragment,t)},m(t,a){te(e,t,a),l=!0},p(t,a){const n={};a&1&&(n.placemarks=t[0].placemarks),e.$set(n)},i(t){l||(le(e.$$.fragment,t),l=!0)},o(t){ae(e.$$.fragment,t),l=!1},d(t){ne(e,t)}}}function tt(r){let e,l;return e=new xe({props:{trektypeList:r[0].trektypes}}),{c(){x(e.$$.fragment)},l(t){ee(e.$$.fragment,t)},m(t,a){te(e,t,a),l=!0},p(t,a){const n={};a&1&&(n.trektypeList=t[0].trektypes),e.$set(n)},i(t){l||(le(e.$$.fragment,t),l=!0)},o(t){ae(e.$$.fragment,t),l=!1},d(t){ne(e,t)}}}function lt(r){let e,l,t,a,n,s,i;return t=new Ee({props:{title:"Placemarks",$$slots:{default:[et]},$$scope:{ctx:r}}}),s=new Ee({props:{title:"Placemarks",$$slots:{default:[tt]},$$scope:{ctx:r}}}),{c(){e=_("div"),l=_("div"),x(t.$$.fragment),a=w(),n=_("div"),x(s.$$.fragment),this.h()},l(o){e=v(o,"DIV",{class:!0});var d=E(e);l=v(d,"DIV",{class:!0});var u=E(l);ee(t.$$.fragment,u),u.forEach(h),a=M(d),n=v(d,"DIV",{class:!0});var $=E(n);ee(s.$$.fragment,$),$.forEach(h),d.forEach(h),this.h()},h(){p(l,"class","column"),p(n,"class","column"),p(e,"class","columns")},m(o,d){P(o,e,d),f(e,l),te(t,l,null),f(e,a),f(e,n),te(s,n,null),i=!0},p(o,[d]){const u={};d&3&&(u.$$scope={dirty:d,ctx:o}),t.$set(u);const $={};d&3&&($.$$scope={dirty:d,ctx:o}),s.$set($)},i(o){i||(le(t.$$.fragment,o),le(s.$$.fragment,o),i=!0)},o(o){ae(t.$$.fragment,o),ae(s.$$.fragment,o),i=!1},d(o){o&&h(e),ne(t),ne(s)}}}function at(r,e,l){let{data:t}=e;return Se.set("Placemarks to Date"),r.$$set=a=>{"data"in a&&l(0,t=a.data)},[t]}class ut extends oe{constructor(e){super(),ce(this,e,at,lt,ie,{data:0})}}export{ut as component};
