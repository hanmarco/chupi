(function(){"use strict";var t={409:function(t,e,n){var l=n(5130),i=n(6768),u=n(4232),a=n(6450),p=n(5091),r=n(9728),o=n(8477);const d={class:"mb-2 text-center w-100"};function h(t,e,n,l,h,c){const b=(0,i.g2)("MainPanel");return(0,i.uX)(),(0,i.Wv)(a.E,null,{default:(0,i.k6)((()=>[(0,i.bF)(o.Y,null,{default:(0,i.k6)((()=>[(0,i.bF)(b,{urlList:t.urlList},null,8,["urlList"])])),_:1}),(0,i.bF)(r.O,null,{default:(0,i.k6)((()=>[(0,i.Lk)("div",d,[(0,i.Lk)("div",null,[(0,i.eW)((0,u.v_)((new Date).getFullYear())+" — Created by ",1),(0,i.bF)(p.D,{text:"",onClick:e[0]||(e[0]=e=>c.openUrl(t.conf.owner)),density:"compact",variant:"plain",ripple:!1},{default:(0,i.k6)((()=>e[1]||(e[1]=[(0,i.eW)(" Marco ")]))),_:1})]),e[2]||(e[2]=(0,i.Lk)("div",{class:"small-gray-text"},[(0,i.eW)("Made for "),(0,i.Lk)("strong",null,"Da-young"),(0,i.eW)(" & "),(0,i.Lk)("strong",null,"Do-young")],-1))])])),_:1})])),_:1})}var c=n(8331),b=n(6990),s=n(2187),_=n(6756),m=n(5526),g=n(9669),f=n(1146),k=n(859);const w={class:"prepend-number",style:{"margin-right":"8px"}};function x(t,e,n,l,a,r){return(0,i.uX)(),(0,i.CE)(i.FK,null,[(0,i.bF)(c.z,{elevation:4,image:t.imageSrc},{prepend:(0,i.k6)((()=>[(0,i.bF)(p.D,{icon:""},{default:(0,i.k6)((()=>[(0,i.bF)(g.w,{onClick:e[0]||(e[0]=e=>r.openUrl(t.chupiTube))},{default:(0,i.k6)((()=>e[3]||(e[3]=[(0,i.eW)("mdi-youtube")]))),_:1})])),_:1})])),default:(0,i.k6)((()=>[(0,i.bF)(b.l,null,{default:(0,i.k6)((()=>e[2]||(e[2]=[(0,i.eW)("T'choupi")]))),_:1}),(0,i.bF)(s.h),(0,i.bF)(k.W,{modelValue:t.search,"onUpdate:modelValue":e[1]||(e[1]=e=>t.search=e),density:"compact",label:"Search","prepend-inner-icon":"mdi-magnify",variant:"solo-filled",flat:"","hide-details":"","single-line":"",class:"mr-2"},null,8,["modelValue"])])),_:1},8,["image"]),(0,i.bF)(f.i,{class:"ma-2"},{default:(0,i.k6)((()=>[(0,i.bF)(_.L,{dense:""},{default:(0,i.k6)((()=>[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(r.filteredUrlList,(t=>((0,i.uX)(),(0,i.Wv)(m.B,{key:t.originalIndex,cols:"12",md:"6"},{default:(0,i.k6)((()=>[(0,i.bF)(p.D,{onClick:e=>r.openUrl(t.url),block:"",class:"mt-2",variant:"tonal",color:t.originalIndex+1==r.displayOriginalIndex(t.originalIndex)?"red":"blue",size:"x-large",ripple:!1},{prepend:(0,i.k6)((()=>[(0,i.Lk)("span",w,(0,u.v_)(r.displayOriginalIndex(t.originalIndex))+".",1)])),default:(0,i.k6)((()=>[(0,i.eW)(" "+(0,u.v_)(t.label),1)])),_:2},1032,["onClick","color"])])),_:2},1024)))),128))])),_:1})])),_:1})],64)}var j=JSON.parse('{"owner":"https://github.com/hanmarco","chupiTube":"https://www.youtube.com/watch?v=tiLEdxPU2mE&list=PLN7gmmzwthNYU0_kLHRzqGHC3udLddNB-"}'),v=n.p+"img/appbar.a1ee8df0.png",y={name:"MainPanel",data:()=>({search:"",limit:71,chupiTube:j.chupiTube,imageSrc:v}),props:{urlList:{type:Array,default:null}},computed:{filteredUrlList(){if(!this.search)return this.urlList.map(((t,e)=>({...t,originalIndex:e})));const t=this.search.toLowerCase();return this.urlList.map(((t,e)=>({...t,originalIndex:e}))).filter((e=>e.label.toLowerCase().includes(t)))}},methods:{openUrl(t){window.open(t,"_self")},displayOriginalIndex(t){return t>=this.limit?t-this.limit+1:t+1}}},O=n(1241);const L=(0,O.A)(y,[["render",x]]);var F=L,C=JSON.parse('[{"label":"🐾 추피는 아기 고양이를 키우고 싶어요 🐱","url":"http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_1"},{"label":"🙅‍♂️ 추피는 빌려주는 것이 싫대요 🚫","url":"http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_2"},{"label":"🌙 추피는 잠이 오지 않아요 😴","url":"http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_3"},{"label":"🌼 추피가 정원을 가꿔요 🌸","url":"http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_4"},{"label":"🚲 추피가 자전거를 타요 🚴","url":"http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_5"},{"label":"😋 추피는 먹는 걸 너무 좋아해요 🍽️","url":"http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_6"},{"label":"😤 추피가 화났어요 😡","url":"http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_7"},{"label":"☔ 추피는 비 오는 게 좋아요 🌧️","url":"http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_8"},{"label":"🦊 추피가 변장을 했어요 🎭","url":"http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_9"},{"label":"🎉 추피가 크리스마스 파티를 해요 🎄","url":"http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_10"},{"label":"🏄‍♂️ 추피가 해수욕을 해요 🏖️","url":"http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_11"},{"label":"🎈 추피가 눈사람을 만들어요 ⛄","url":"http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_12"},{"label":"🏠 추피가 집을 만들어요 🏡","url":"http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_13"},{"label":"🎒 추피가 유치원에 가요 🎒","url":"http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_14"},{"label":"😱 추피는 폭풍우가 무서워요 🌩️","url":"http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_15"},{"label":"🍼 추피에게 여동생이 생겼어요 👶","url":"http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_16"},{"label":"🚫 추피가 슈퍼마켓에서 엄마를 잃어버렸어요 🛒","url":"http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_17"},{"label":"🛤️ 추피가 기차를 타요 🚂","url":"http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_18"},{"label":"🍭 추피가 소풍을 가요 🍉","url":"http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_19"},{"label":"🤕 추피가 아파요 🤒","url":"http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_20"},{"label":"📝 추피가 엄마의 선물을 준비했어요 🎁","url":"http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_21"},{"label":"🎊 추피의 생일이에요 🎂","url":"http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_22"},{"label":"🧸 추피가 두두를 잃어버렸어요 🧸","url":"http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_23"},{"label":"👻 추피의 할로윈 파티 🎃","url":"http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_24"},{"label":"🧁 추피가 케이크를 만들어요 🍰","url":"http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_25"},{"label":"🤹‍♂️ 추피가 서커스 구경을 가요 🎪","url":"http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_26"},{"label":"🎻 추피 가족의 연주회 🎻","url":"http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_27"},{"label":"📺 추피는 텔레비전이 보고 싶어요 📺","url":"http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_28"},{"label":"🎡 추피가 회전목마를 타요 🎠","url":"http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_29"},{"label":"🍼 추피가 여동생을 보살펴요 👶","url":"http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_30"},{"label":"🌌 추피가 낮잠을 자요 💤","url":"http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_31"},{"label":"😡 추피가 아빠와 다퉜어요 😠","url":"http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_32"},{"label":"🚽 추피에게 변기통이 생겼어요 🚽","url":"http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_33"},{"label":"🦴 추피는 강아지가 무서워요 🐶","url":"http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_34"},{"label":"🐣 추피가 부활절 달걀을 찾고 있어요 🐣","url":"http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_35"},{"label":"🛁 추피가 목욕을 해요 🛁","url":"http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_36"},{"label":"🚀 추피는 혼자 하고 싶어요 👦","url":"http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_37"},{"label":"🥨 추피는 갈레트 과자를 좋아해요 🍪","url":"http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_38"},{"label":"🛌 추피는 잠자기가 싫어요 😴","url":"http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_39"},{"label":"🏊 추피는 수영장에 간다 🏊","url":"http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_40"},{"label":"🤪 추피가 장난을 쳐요 🤪","url":"http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_41"},{"label":"🏖️ 추피 가족이 휴가를 떠나요 🏖️","url":"http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_42"},{"label":"😇 추피는 예의 바른 어린이예요 😊","url":"http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_43"},{"label":"👕 추피가 혼자서 옷을 입어요 👚","url":"http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_44"},{"label":"🏇 추피가 승마장에 갔어요 🐎","url":"http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_45"},{"label":"👩‍👧‍👦 추피는 이모를 좋아해요 🧑‍🦰","url":"http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_46"},{"label":"🤕 추피가 수두에 결렸어요 🤕","url":"http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_47"},{"label":"🛌 추피가 할머니, 할아버지 집에서 자요 🛌","url":"http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_48"},{"label":"👶 추피 엄마가 아기를 가졌어요 🤰","url":"http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_49"},{"label":"🚛 추피네 가족이 이사가요 🚚","url":"http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_50"},{"label":"⛵ 추피는 멋진 꼬마 선장이에요 🚢","url":"http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_51"},{"label":"🍱 추피가 유치원에서 점심을 먹어요 🍱","url":"http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_52"},{"label":"😢 추피가 다쳤어요 😢","url":"http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_53"},{"label":"👧 추피에게 여자 친구가 생겼어요 👧","url":"http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_54"},{"label":"🚜 추피가 농장에 가요 🚜","url":"http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_55"},{"label":"🥊 추피는 싸우는 게 싫어요 🤼","url":"http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_56"},{"label":"🏂 추피가 스키를 배워요 🎿","url":"http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_57"},{"label":"🚫 추피는 이제 노리개젖꼭지가 필요 없어요 👶❌","url":"http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_58"},{"label":"🎾 추피가 테니스를 배워요 🎾","url":"http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_59"},{"label":"🚷 추피는 무조건 싫대요 🙅‍♂️","url":"http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_60"},{"label":"🌌 추피는 깜깜한 밤이 무서워요 🌙","url":"http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_61"},{"label":"🏆 추피는 축구 챔피언이에요 ⚽","url":"http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_62"},{"label":"🔥 추피가 즐거운 캠핑을 가요 🏕️","url":"http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_63"},{"label":"🕵️‍♂️ 추피가 숨바꼭질을 해요 🤫","url":"http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_64"},{"label":"🦷 추피가 혼자서 이를 닦아요 🦷","url":"http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_65"},{"label":"🦁 추피가 동물원에 가요 🦁","url":"http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_66"},{"label":"🛴 추피가 킥보드를 타요 🛴","url":"http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_67"},{"label":"🥞 추피가 팬케이크를 만들어요 🥞","url":"http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_68"},{"label":"💧🚫 추피는 이제 이불에 쉬하지 않아요 💧🚫","url":"http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_69"},{"label":"🐠 추피가 수족관에 가요 🐠","url":"http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_70"},{"label":"🐕 추피가 강아지를 키워요 🐕","url":"http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_71"},{"label":"🌲 추피가 숲에 갔어요 🌲","url":"http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_72"},{"label":"🏖️ 추피가 해변에 갔어요 🏖️","url":"http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_73"},{"label":"🚜 추피가 농장에 견학을 갔어요 🚜","url":"http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_74"},{"label":"🎠 추피가 동물원에 놀러 갔어요 🦁","url":"http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_75"},{"label":"🌳 추피가 공원에서 놀아요 🌳","url":"http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_76"},{"label":"🚗 추피와 교통 수단 🚗","url":"http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_77"},{"label":"🎒 유치원에 간 추피 🎒","url":"http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_78"},{"label":"🏥 추피가 병원에 갔어요 🏥","url":"http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_79"},{"label":"🧸 추피의 장난감 🧸","url":"http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_80"},{"label":"👗 추피의 멋진 새 옷 👗","url":"http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_81"}]'),P={name:"App",components:{MainPanel:F},data:()=>({urlList:C,conf:j}),methods:{openUrl(t){window.open(t,"_self")}}};const E=(0,O.A)(P,[["render",h]]);var T=E,I=(n(5524),n(1036)),N=(0,I.$N)();async function S(){const t=await n.e(53).then(n.t.bind(n,8874,23));t.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}S(),(0,l.Ef)(T).use(N).mount("#app")}},e={};function n(l){var i=e[l];if(void 0!==i)return i.exports;var u=e[l]={exports:{}};return t[l].call(u.exports,u,u.exports,n),u.exports}n.m=t,function(){var t=[];n.O=function(e,l,i,u){if(!l){var a=1/0;for(d=0;d<t.length;d++){l=t[d][0],i=t[d][1],u=t[d][2];for(var p=!0,r=0;r<l.length;r++)(!1&u||a>=u)&&Object.keys(n.O).every((function(t){return n.O[t](l[r])}))?l.splice(r--,1):(p=!1,u<a&&(a=u));if(p){t.splice(d--,1);var o=i();void 0!==o&&(e=o)}}return e}u=u||0;for(var d=t.length;d>0&&t[d-1][2]>u;d--)t[d]=t[d-1];t[d]=[l,i,u]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){var t,e=Object.getPrototypeOf?function(t){return Object.getPrototypeOf(t)}:function(t){return t.__proto__};n.t=function(l,i){if(1&i&&(l=this(l)),8&i)return l;if("object"===typeof l&&l){if(4&i&&l.__esModule)return l;if(16&i&&"function"===typeof l.then)return l}var u=Object.create(null);n.r(u);var a={};t=t||[null,e({}),e([]),e(e)];for(var p=2&i&&l;"object"==typeof p&&!~t.indexOf(p);p=e(p))Object.getOwnPropertyNames(p).forEach((function(t){a[t]=function(){return l[t]}}));return a["default"]=function(){return l},n.d(u,a),u}}(),function(){n.d=function(t,e){for(var l in e)n.o(e,l)&&!n.o(t,l)&&Object.defineProperty(t,l,{enumerable:!0,get:e[l]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,l){return n.f[l](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/webfontloader.f27e5e29.js"}}(),function(){n.miniCssF=function(t){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="chupi:";n.l=function(l,i,u,a){if(t[l])t[l].push(i);else{var p,r;if(void 0!==u)for(var o=document.getElementsByTagName("script"),d=0;d<o.length;d++){var h=o[d];if(h.getAttribute("src")==l||h.getAttribute("data-webpack")==e+u){p=h;break}}p||(r=!0,p=document.createElement("script"),p.charset="utf-8",p.timeout=120,n.nc&&p.setAttribute("nonce",n.nc),p.setAttribute("data-webpack",e+u),p.src=l),t[l]=[i];var c=function(e,n){p.onerror=p.onload=null,clearTimeout(b);var i=t[l];if(delete t[l],p.parentNode&&p.parentNode.removeChild(p),i&&i.forEach((function(t){return t(n)})),e)return e(n)},b=setTimeout(c.bind(null,void 0,{type:"timeout",target:p}),12e4);p.onerror=c.bind(null,p.onerror),p.onload=c.bind(null,p.onload),r&&document.head.appendChild(p)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/chupi/"}(),function(){var t={524:0};n.f.j=function(e,l){var i=n.o(t,e)?t[e]:void 0;if(0!==i)if(i)l.push(i[2]);else{var u=new Promise((function(n,l){i=t[e]=[n,l]}));l.push(i[2]=u);var a=n.p+n.u(e),p=new Error,r=function(l){if(n.o(t,e)&&(i=t[e],0!==i&&(t[e]=void 0),i)){var u=l&&("load"===l.type?"missing":l.type),a=l&&l.target&&l.target.src;p.message="Loading chunk "+e+" failed.\n("+u+": "+a+")",p.name="ChunkLoadError",p.type=u,p.request=a,i[1](p)}};n.l(a,r,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,l){var i,u,a=l[0],p=l[1],r=l[2],o=0;if(a.some((function(e){return 0!==t[e]}))){for(i in p)n.o(p,i)&&(n.m[i]=p[i]);if(r)var d=r(n)}for(e&&e(l);o<a.length;o++)u=a[o],n.o(t,u)&&t[u]&&t[u][0](),t[u]=0;return n.O(d)},l=self["webpackChunkchupi"]=self["webpackChunkchupi"]||[];l.forEach(e.bind(null,0)),l.push=e.bind(null,l.push.bind(l))}();var l=n.O(void 0,[504],(function(){return n(409)}));l=n.O(l)})();
//# sourceMappingURL=app.54928897.js.map