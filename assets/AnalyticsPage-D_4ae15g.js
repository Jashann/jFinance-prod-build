import{c as gt,j as e,ab as te,X as ce,b as re,a as n,a8 as je,g as O,ac as Qe,ad as Xe,ae as Ze,h as qe,af as ht,ag as pt,ah as mt,ai as bt,aj as ut,ak as Le,al as Ce,a1 as Ee,am as Ae,an as et,i as De,ao as tt,ap as Ie,aq as oe,ar as de,as as Pe,at as We,au as Re,av as Ye,aw as Oe,ax as K,k as at,z as st,u as rt,ay as ve,a9 as yt,aa as ft,az as fe,aA as vt,aB as kt,M as jt}from"./index-tuULB18A.js";import{r as c}from"./react-DH1ANOw6.js";import nt from"./AccountCategoryBreakdown-Cn1xlUo0.js";import{R as ne,B as ke,C as pe,X as me,Y as be,T as ie,L as it,a as ue,b as lt,c as ot,d as dt,P as Se,e as Me,f as Fe}from"./recharts-DmA0MuGJ.js";import{D as Te}from"./download-DdO8HSXp.js";import{C as ze}from"./check-LjARB28A.js";import{A as Nt,I as wt}from"./AccountTotalsLegacy-BKi3JxHA.js";import"./firebase-iE6GOvee.js";const $t=[["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}],["path",{d:"M3.103 6.034h17.794",key:"awc11p"}],["path",{d:"M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",key:"o988cm"}]],ct=gt("shopping-bag",$t),Be=5;function Ct({purchases:h,onPurchaseClick:P}){const[C,$]=c.useState(!1),[z,m]=c.useState(!1);if(h.length===0)return e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100 dark:border-gray-700/60",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white mb-4",children:"Frequent Purchases"}),e.jsx("p",{className:"text-gray-400 dark:text-gray-500 text-sm",children:"Add more transactions to see frequent purchase patterns"})]});const V=C?h:h.slice(0,Be),y=x=>e.jsx("div",{className:"space-y-3",children:x.map((A,W)=>e.jsxs("div",{onClick:()=>P?.(A.details),className:"flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-xl cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-8 h-8 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center text-lg font-bold text-gray-400 dark:text-gray-500 border border-gray-200 dark:border-gray-600",children:W+1}),e.jsxs("div",{children:[e.jsx("p",{className:"font-medium text-gray-900 dark:text-white capitalize",children:A.details}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"w-2 h-2 rounded-full",style:{backgroundColor:re(A.category)}}),e.jsx("span",{className:"text-xs text-gray-500 dark:text-gray-400",children:A.category})]})]})]}),e.jsxs("div",{className:"text-right",children:[e.jsxs("p",{className:"font-semibold tabular-nums text-gray-900 dark:text-white",children:[A.count,"x"]}),e.jsx("p",{className:"text-sm tabular-nums text-gray-500 dark:text-gray-400",children:n(A.totalSpent)})]})]},W))});return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100 dark:border-gray-700/60",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(ct,{className:"text-indigo-600 dark:text-indigo-400",size:20}),e.jsx("h3",{className:"app-label text-gray-500 dark:text-gray-400",children:"Frequent purchases"})]}),e.jsx("button",{onClick:()=>m(!0),className:"p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors",title:"Expand",children:e.jsx(te,{size:18})})]}),e.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400 mb-4",children:"Places you visit most often - click to view transactions"}),y(V),h.length>Be&&e.jsx("button",{onClick:()=>$(!C),className:"mt-3 text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium",children:C?"Show less":`View all ${h.length} purchases`})]}),z&&e.jsx("div",{className:"fixed inset-0 bg-black/55 backdrop-blur-sm flex items-center justify-center z-50 p-4",onClick:x=>x.target===x.currentTarget&&m(!1),children:e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl w-[95vw] max-w-4xl max-h-[80vh] overflow-hidden flex flex-col",children:[e.jsxs("div",{className:"flex items-center justify-between p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700",children:[e.jsxs("h3",{className:"text-lg sm:text-xl font-semibold font-display text-gray-900 dark:text-white",children:["Frequent Purchases (",h.length,")"]}),e.jsx("button",{onClick:()=>m(!1),className:"p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors",children:e.jsx(ce,{size:20})})]}),e.jsx("div",{className:"p-4 sm:p-6 overflow-y-auto flex-1 dark-scrollbar",children:y(h)})]})})]})}const Ge=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function St(){const[h,P]=c.useState(()=>typeof window<"u"?window.innerWidth<768:!1);return c.useEffect(()=>{const C=window.matchMedia("(max-width: 767px)"),$=()=>P(C.matches);return $(),C.addEventListener("change",$),()=>C.removeEventListener("change",$)},[]),h}function Mt({transactions:h}){const{resolvedTheme:P}=je(),C=P==="dark",[$,z]=c.useState(!1),m=St(),V=c.useMemo(()=>{const S=new Date().getFullYear(),f=S-1,w={};return Ge.forEach((R,E)=>{w[E]={currentYear:0,lastYear:0}}),h.forEach(R=>{if(R.excludeFromTotals||R.category==="Credit Card Payment")return;const E=R.date.getFullYear(),u=R.date.getMonth();if(R.type==="Income")return;const N=O(R);E===S?w[u].currentYear+=N:E===f&&(w[u].lastYear+=N)}),Ge.map((R,E)=>({month:R,[S]:w[E].currentYear,[f]:w[E].lastYear}))},[h]),y=c.useMemo(()=>{const S=new Date().getFullYear();return{current:S,last:S-1}},[]),x=V.some(S=>S[y.current]>0),A=V.some(S=>S[y.last]>0);if(!x&&!A)return e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100 dark:border-gray-700/60",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white mb-4",children:"Year-over-Year Comparison"}),e.jsx("div",{className:"h-64 flex items-center justify-center text-gray-400 dark:text-gray-500",children:"No data available for comparison"})]});const W=S=>e.jsx("div",{className:S,children:e.jsx(ne,{width:"100%",height:"100%",children:e.jsxs(ke,{data:V,barGap:0,barCategoryGap:"20%",margin:m?{top:5,right:5,left:0,bottom:20}:void 0,children:[e.jsx(pe,{strokeDasharray:"3 3",stroke:C?"#374151":"#f0f0f0"}),e.jsx(me,{dataKey:"month",interval:0,tick:{fontSize:m?10:12,fill:C?"#9ca3af":"#6b7280",className:"font-axis"},angle:m?-45:0,textAnchor:m?"end":"middle",height:m?50:30}),e.jsx(be,{tickFormatter:f=>`$${(f/1e3).toFixed(0)}k`,tick:{fontSize:m?10:12,fill:C?"#9ca3af":"#6b7280",className:"font-axis"}}),e.jsx(ie,{formatter:(f,w)=>[n(Number(f)),w],contentStyle:{backgroundColor:C?"#1f2937":"white",border:`1px solid ${C?"#374151":"#e5e7eb"}`,borderRadius:"8px",color:C?"#f3f4f6":"#111827"},labelStyle:{color:C?"#f3f4f6":"#111827"}}),e.jsx(it,{wrapperStyle:{paddingTop:"20px",fontSize:m?11:14}}),A&&e.jsx(ue,{dataKey:y.last,name:`${y.last}`,fill:"#94a3b8",radius:[4,4,0,0]}),x&&e.jsx(ue,{dataKey:y.current,name:`${y.current}`,fill:"#6366f1",radius:[4,4,0,0]})]})})}),B=()=>e.jsxs("div",{className:"grid grid-cols-3 gap-2 sm:gap-4 mt-4 pt-4 border-t border-gray-100 dark:border-gray-700",children:[e.jsxs("div",{children:[e.jsxs("p",{className:"text-xs text-gray-500 dark:text-gray-400",children:[y.current," Total"]}),e.jsx("p",{className:"font-display text-base sm:text-lg font-semibold tabular-nums text-indigo-600 dark:text-indigo-400",children:n(V.reduce((S,f)=>S+f[y.current],0))})]}),e.jsxs("div",{children:[e.jsxs("p",{className:"text-xs text-gray-500 dark:text-gray-400",children:[y.last," Total"]}),e.jsx("p",{className:"font-display text-base sm:text-lg font-semibold tabular-nums text-gray-500 dark:text-gray-400",children:n(V.reduce((S,f)=>S+f[y.last],0))})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400",children:"YoY Change"}),(()=>{const S=V.reduce((E,u)=>E+u[y.current],0),f=V.reduce((E,u)=>E+u[y.last],0),w=f>0?(S-f)/f*100:0,R=w>0;return e.jsxs("p",{className:`font-display text-base sm:text-lg font-semibold tabular-nums ${R?"text-neg":"text-pos"}`,children:[w>0?"+":"",w.toFixed(1),"%"]})})()]})]});return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100 dark:border-gray-700/60",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h3",{className:"app-label text-gray-500 dark:text-gray-400",children:"Year-over-year comparison"}),e.jsx("button",{onClick:()=>z(!0),className:"min-h-11 min-w-11 md:min-h-0 md:min-w-0 inline-flex items-center justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors",title:"Expand",children:e.jsx(te,{size:18})})]}),e.jsxs("p",{className:"text-sm text-gray-500 dark:text-gray-400 mb-4",children:["Monthly expenses: ",y.current," vs ",y.last]}),W("h-56 sm:h-72"),B()]}),$&&e.jsx("div",{className:"fixed inset-0 bg-black/55 backdrop-blur-sm flex items-center justify-center z-50 p-4",onClick:S=>S.target===S.currentTarget&&z(!1),children:e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl w-[95vw] max-w-5xl max-h-[90vh] overflow-hidden flex flex-col",children:[e.jsxs("div",{className:"flex items-center justify-between p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg sm:text-xl font-semibold font-display text-gray-900 dark:text-white",children:"Year-over-Year Comparison"}),e.jsxs("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:["Monthly expenses: ",y.current," vs ",y.last]})]}),e.jsx("button",{onClick:()=>z(!1),className:"min-h-11 min-w-11 md:min-h-0 md:min-w-0 inline-flex items-center justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors",children:e.jsx(ce,{size:20})})]}),e.jsxs("div",{className:"p-4 sm:p-6 overflow-y-auto flex-1 dark-scrollbar",children:[W("h-[50vh]"),B()]})]})})]})}const Ft=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function Tt(){const[h,P]=c.useState(()=>typeof window<"u"?window.innerWidth<768:!1);return c.useEffect(()=>{const C=window.matchMedia("(max-width: 767px)"),$=()=>P(C.matches);return $(),C.addEventListener("change",$),()=>C.removeEventListener("change",$)},[]),h}function zt({transactions:h,onMonthSelect:P}){const{resolvedTheme:C}=je(),$=C==="dark",[z,m]=c.useState(!1),V=Tt(),{chartData:y,stats:x,months:A}=c.useMemo(()=>{const u=new Date,N=[];for(let p=11;p>=0;p--){const D=new Date(u.getFullYear(),u.getMonth()-p,1);N.push({year:D.getFullYear(),month:D.getMonth(),key:`${D.getFullYear()}-${String(D.getMonth()+1).padStart(2,"0")}`,label:`${Ft[D.getMonth()]} ${D.getFullYear().toString().slice(2)}`})}const F={};N.forEach(p=>{F[p.key]=0}),h.forEach(p=>{if(p.excludeFromTotals||p.category==="Credit Card Payment"||p.type==="Income")return;const D=`${p.date.getFullYear()}-${String(p.date.getMonth()+1).padStart(2,"0")}`;F[D]!==void 0&&(F[D]+=O(p))});const L=N.map(p=>({month:p.label,amount:F[p.key]})),I=L.map(p=>p.amount).filter(p=>p>0),J=I.length>0?I.reduce((p,D)=>p+D,0)/I.length:0,Z=Math.max(...I,0),M=I.length>0?Math.min(...I):0,G=L.filter(p=>p.amount>0);let j="stable",v=0;if(G.length>=3){const p=G.slice(-3).map(U=>U.amount),D=G.slice(0,Math.min(3,G.length-3)).map(U=>U.amount);if(D.length>0){const U=p.reduce((ee,ae)=>ee+ae,0)/p.length,_=D.reduce((ee,ae)=>ee+ae,0)/D.length;v=_>0?(U-_)/_*100:0,v>5?j="up":v<-5&&(j="down")}}return{chartData:L,stats:{average:J,max:Z,min:M,trend:j,trendPercent:v},months:N}},[h]),W=y.some(u=>u.amount>0),B=u=>{if(!P||!u)return;const N=u.activeTooltipIndex;if(N==null||N<0||N>=A.length)return;const F=A[N];P({year:F.year,month:F.month,label:F.label})};if(!W)return e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100 dark:border-gray-700/60",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white mb-4",children:"Spending Trends"}),e.jsx("div",{className:"h-64 flex items-center justify-center text-gray-400 dark:text-gray-500",children:"Not enough data for trends"})]});const S=x.trend==="up"?Qe:x.trend==="down"?Xe:Ze,f=x.trend==="up"?"text-neg":x.trend==="down"?"text-pos":"text-gray-500",w=x.trend==="up"?"bg-neg-soft":x.trend==="down"?"bg-pos-soft":"bg-gray-50 dark:bg-gray-700",R=u=>e.jsx("div",{className:`${u} ${P?"cursor-pointer":""}`,children:e.jsx(ne,{width:"100%",height:"100%",children:e.jsxs(lt,{data:y,onClick:B,children:[e.jsx(pe,{strokeDasharray:"3 3",stroke:$?"#374151":"#f0f0f0"}),e.jsx(me,{dataKey:"month",tick:{fontSize:V?10:11,fill:$?"#9ca3af":"#6b7280",className:"font-axis"},interval:"preserveStartEnd"}),e.jsx(be,{tickFormatter:N=>`$${(N/1e3).toFixed(0)}k`,tick:{fontSize:V?10:12,fill:$?"#9ca3af":"#6b7280",className:"font-axis"}}),e.jsx(ie,{formatter:N=>[n(Number(N)),"Expenses"],contentStyle:{backgroundColor:$?"#1f2937":"white",border:`1px solid ${$?"#374151":"#e5e7eb"}`,borderRadius:"8px",color:$?"#f3f4f6":"#111827"},labelStyle:{color:$?"#f3f4f6":"#111827"}}),e.jsx(ot,{y:x.average,stroke:"#9ca3af",strokeDasharray:"5 5",label:{value:"Avg",position:"right",fill:$?"#9ca3af":"#6b7280",fontSize:11}}),e.jsx(dt,{type:"monotone",dataKey:"amount",stroke:"#6366f1",strokeWidth:2,dot:{fill:"#6366f1",strokeWidth:0,r:4},activeDot:{fill:"#6366f1",strokeWidth:0,r:6,style:{cursor:P?"pointer":void 0}}})]})})}),E=()=>e.jsxs("div",{className:"grid grid-cols-3 gap-2 sm:gap-4 mt-4 pt-4 border-t border-gray-100 dark:border-gray-700",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400",children:"Average"}),e.jsx("p",{className:"font-display text-base sm:text-lg font-semibold tabular-nums text-gray-900 dark:text-white",children:n(x.average)})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400",children:"Highest"}),e.jsx("p",{className:"font-display text-base sm:text-lg font-semibold tabular-nums text-neg",children:n(x.max)})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400",children:"Lowest"}),e.jsx("p",{className:"font-display text-base sm:text-lg font-semibold tabular-nums text-pos",children:n(x.min)})]})]});return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100 dark:border-gray-700/60",children:[e.jsxs("div",{className:"flex items-start justify-between mb-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"app-label text-gray-500 dark:text-gray-400",children:"Spending trends"}),e.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400 mt-1",children:"Monthly expenses over the last 12 months"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("div",{className:`flex items-center gap-1 px-2 py-1 rounded-xl ${w}`,children:[e.jsx(S,{size:16,className:f}),e.jsxs("span",{className:`text-sm font-medium ${f}`,children:[x.trendPercent>0?"+":"",x.trendPercent.toFixed(0),"%"]})]}),e.jsx("button",{onClick:()=>m(!0),className:"min-h-11 min-w-11 md:min-h-0 md:min-w-0 inline-flex items-center justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors",title:"Expand",children:e.jsx(te,{size:18})})]})]}),R("h-56 sm:h-64"),E()]}),z&&e.jsx("div",{className:"fixed inset-0 bg-black/55 backdrop-blur-sm flex items-center justify-center z-50 p-4",onClick:u=>u.target===u.currentTarget&&m(!1),children:e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl w-[95vw] max-w-5xl max-h-[90vh] overflow-hidden flex flex-col",children:[e.jsxs("div",{className:"flex items-center justify-between p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg sm:text-xl font-semibold font-display text-gray-900 dark:text-white",children:"Spending Trends"}),e.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:"Monthly expenses over the last 12 months"})]}),e.jsx("button",{onClick:()=>m(!1),className:"min-h-11 min-w-11 md:min-h-0 md:min-w-0 inline-flex items-center justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors",children:e.jsx(ce,{size:20})})]}),e.jsxs("div",{className:"p-4 sm:p-6 overflow-y-auto flex-1 dark-scrollbar",children:[R("h-[50vh]"),E()]})]})})]})}const He=6;function xt({transactions:h}){const{uiPrefs:P,updateUiPref:C}=qe(),$=P.monthlyAveragesRange??ht,[z,m]=c.useState(!1),[V,y]=c.useState(!1),[x,A]=c.useState(null),W=c.useMemo(()=>pt(h,$),[h,$]),{monthsCounted:B,expenses:S,income:f}=W,w=mt(W),R=S[0]?.average??0,E=f[0]?.average??0,u=(N,F,L,I,J,Z)=>e.jsxs("div",{children:[e.jsx("h4",{className:"app-label text-[11px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3",children:L}),N.length===0?e.jsx("p",{className:"text-sm text-gray-400 dark:text-gray-500",children:"Nothing to average over this window."}):e.jsxs("div",{className:"space-y-1",children:[(J?N:N.slice(0,He)).map(M=>{const G=F==="income"?"#10b981":re(M.category),j=M.monthsActive===B;return e.jsxs("button",{type:"button",onClick:()=>A({row:M,kind:F}),className:"w-full min-h-12 text-left px-2 py-2 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/60 transition-colors",children:[e.jsxs("div",{className:"flex items-baseline justify-between gap-3",children:[e.jsxs("span",{className:"flex items-center gap-2 min-w-0",children:[e.jsx("span",{className:"w-2 h-2 rounded-full shrink-0",style:{backgroundColor:G}}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300 truncate",children:M.category})]}),e.jsxs("span",{className:"text-sm font-semibold tabular-nums text-gray-900 dark:text-white shrink-0",children:[Ce(M.average),e.jsx("span",{className:"font-normal text-gray-400 dark:text-gray-500",children:"/mo"})]})]}),e.jsx("div",{className:"mt-1.5 h-1 rounded-full bg-gray-100 dark:bg-gray-700 overflow-hidden",children:e.jsx("div",{className:"h-full rounded-full",style:{width:`${I>0?Math.max(2,M.average/I*100):0}%`,backgroundColor:G}})}),e.jsxs("div",{className:"mt-1 text-xs text-gray-400 dark:text-gray-500 tabular-nums",children:[Ce(M.total)," over ",B," month",B===1?"":"s"," · ",j?"every month":`${M.monthsActive} of ${B} months`]})]},M.category)}),N.length>He&&e.jsx("button",{onClick:()=>Z(!J),className:"mt-2 text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium",children:J?"Show less":`View all ${N.length}`})]})]});return e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100 dark:border-gray-700/60",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 mb-1",children:[e.jsxs("h3",{className:"app-label text-gray-500 dark:text-gray-400 flex items-center gap-2",children:[e.jsx(bt,{size:16,className:"text-gray-400 dark:text-gray-500"}),"Average per month"]}),e.jsx(ut,{value:$,onChange:N=>C("monthlyAveragesRange",N)})]}),B===0?e.jsx("p",{className:"text-sm text-gray-400 dark:text-gray-500 mt-4",children:$.kind==="custom"?"No transactions in those months.":"No finished months to average yet — this fills in once you have a month of history."}):e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"text-xs text-gray-400 dark:text-gray-500 mb-4 tabular-nums",children:w}),e.jsxs("div",{className:"grid grid-cols-3 gap-2 sm:gap-3 mb-5",children:[e.jsx(Ve,{label:"Income",value:W.incomeAverage,tone:"pos"}),e.jsx(Ve,{label:"Spending",value:W.expenseAverage,tone:"neg"}),e.jsx(Ve,{label:"Left over",value:W.savingsAverage,tone:W.savingsAverage>=0?"pos":"neg"})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8",children:[u(S,"expense","Spending by category",R,z,m),u(f,"income","Income by source",E,V,y)]})]}),x&&e.jsx(Le,{isOpen:!0,onClose:()=>A(null),title:x.row.category,subtitle:`${Ce(x.row.average)}/mo average · ${w}`,transactions:x.row.transactions,highlightColor:x.kind==="income"?"#10b981":re(x.row.category),breakdowns:!0,breakdownDefaultTab:"month",breakdownIncludeIncome:x.kind==="income"})]})}function Ve({label:h,value:P,tone:C}){return e.jsxs("div",{className:"rounded-xl border border-gray-100 dark:border-gray-700/60 px-2.5 sm:px-3 py-2.5",children:[e.jsx("div",{className:"app-label text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider",children:h}),e.jsx("div",{className:`font-display text-base sm:text-xl font-bold tabular-nums ${C==="pos"?"text-pos":"text-neg"}`,children:Ce(P)}),e.jsx("div",{className:"text-[10px] text-gray-400 dark:text-gray-500",children:"per month"})]})}const we=[{id:"financial",label:"Financial Summary",description:"Income, expenses, savings & fixed/variable breakdown"},{id:"dashboard",label:"Dashboard Overview",description:"Key insights and spending analysis"},{id:"categories",label:"Category Breakdown",description:"Spending by category with budget comparisons"},{id:"frequentPurchases",label:"Frequent Purchases",description:"Most repeated purchases and their totals"},{id:"subscriptions",label:"Subscription Tracker",description:"Recurring subscriptions and monthly cost"},{id:"fixedVariable",label:"Fixed vs Variable Expenses",description:"Breakdown of fixed and variable spending"},{id:"dayOfWeek",label:"Spending by Day of Week",description:"How spending varies across weekdays"},{id:"transactions",label:"Transaction Details",description:"Full list of all transactions"},{id:"networth",label:"Net Worth Summary",description:"Net worth, accounts, investments & gains"}];function Et({selectedMonth:h}){const{getVisibleTransactions:P}=Ee(),{budgets:C}=Ae(),{netWorthSnapshots:$}=et(),{accounts:z}=De(),{netWorthGoals:m}=tt(),V=P(),[y,x]=c.useState(!1),[A,W]=c.useState("print"),[B,S]=c.useState({dashboard:!0,financial:!0,categories:!0,frequentPurchases:!0,subscriptions:!0,dayOfWeek:!0,fixedVariable:!0,networth:!0,transactions:!0}),f=c.useMemo(()=>Ie(V,h),[V,h]),w=c.useMemo(()=>{const l=oe(f),o=l.filter(t=>t.type==="Income").reduce((t,r)=>t+O(r),0),b=l.filter(t=>t.type==="Fixed Expenses").reduce((t,r)=>t+O(r),0),Y=l.filter(t=>t.type==="Variable Expenses").reduce((t,r)=>t+O(r),0),T=b+Y,q=o-T,a=o>0?q/o*100:0;return{income:o,fixedExpenses:b,variableExpenses:Y,totalExpenses:T,netSavings:q,savingsRate:a,transactionCount:f.length}},[f]),R=de(h)?new Date().getMonth()+1:1,E=c.useMemo(()=>Pe(f,C,R),[f,C,R]),u=c.useMemo(()=>We(f,10),[f]),N=c.useMemo(()=>{const l=Re(f);return Object.entries(l).map(([o,b])=>({day:o,amount:b}))},[f]),F=c.useMemo(()=>Ye(f),[f]),L=c.useMemo(()=>F.reduce((l,o)=>l+O(o),0),[F]),I=c.useMemo(()=>{const l=oe(f),o=l.filter(T=>T.type==="Fixed Expenses").reduce((T,q)=>T+O(q),0),b=l.filter(T=>T.type==="Variable Expenses").reduce((T,q)=>T+O(q),0),Y=o+b;return{fixed:o,variable:b,total:Y}},[f]),J=c.useMemo(()=>{if(/^\d{4}$/.test(h))return String(Number(h)-1);const[l,o]=h.split("-").map(Number),b=new Date(l,o-2,1);return`${b.getFullYear()}-${String(b.getMonth()+1).padStart(2,"0")}`},[h]),Z=c.useMemo(()=>Oe(V,C,h,J),[V,C,h,J]),M=c.useMemo(()=>{const l=$.filter(o=>/^\d{4}$/.test(h)?o.month.startsWith(h):o.month===h);return l.length===0?null:l.reduce((o,b)=>(b.updatedAt||b.createdAt)>(o.updatedAt||o.createdAt)?b:o)},[$,h]),G=c.useMemo(()=>{if(/^\d{4}$/.test(h))return null;const[l,o]=h.split("-").map(Number),b=`${o===1?l-1:l}-${String(o===1?12:o-1).padStart(2,"0")}`,Y=$.filter(T=>T.month===b);return Y.length===0?null:Y.reduce((T,q)=>(q.updatedAt||q.createdAt)>(T.updatedAt||T.createdAt)?q:T)},[$,h]),j=c.useMemo(()=>{const l=M?.totalNetWorth||0,o=G?.totalNetWorth||0,b=M&&G?l-o:null,Y=b!==null&&o!==0?b/o*100:null,T=M?M.snapshots.filter(d=>z.find(k=>k.id===d.accountId)?.type==="investment").reduce((d,k)=>d+(k.contribution||0),0):0,q=M?M.snapshots.filter(d=>z.find(k=>k.id===d.accountId)?.type==="investment").reduce((d,k)=>d+k.balance,0):0,a=M?M.snapshots.filter(d=>z.find(k=>k.id===d.accountId)?.type==="regular").reduce((d,k)=>d+k.balance,0):0,t=M?M.snapshots.filter(d=>z.find(k=>k.id===d.accountId)?.type==="receivable").reduce((d,k)=>d+k.balance,0):0,r=M?M.snapshots.filter(d=>z.find(k=>k.id===d.accountId)?.type==="liability").reduce((d,k)=>d+k.balance,0):0,i=q-T,g=M?M.snapshots.map(d=>{const k=z.find(X=>X.id===d.accountId);return{name:k?.name||"Unknown",type:k?.type||"regular",balance:d.balance,contribution:d.contribution,riskLevel:k?.riskLevel}}):[];return{currentNW:l,change:b,changePercent:Y,totalContributions:T,totalInvestmentValue:q,totalCheckingBalance:a,totalReceivables:t,totalLiabilities:r,investmentGains:i,accountBreakdown:g,snapshotMonth:M?.month}},[M,G,z]),v=c.useMemo(()=>{const l=new Date,o=`${l.getFullYear()}-${String(l.getMonth()+1).padStart(2,"0")}`,b=l.getMonth()+1,Y=l.getFullYear(),T=b<=4?`${Y}-04`:b<=8?`${Y}-08`:`${Y}-12`,q=b<=4?"Q1 (Jan–Apr)":b<=8?"Q2 (May–Aug)":"Q3 (Sep–Dec)",a=b<=4?4-b:b<=8?8-b:12-b,t=b===1?12:b-1,i=`${b===1?Y-1:Y}-${String(t).padStart(2,"0")}`,d=$.find(H=>H.month===i&&(H.period||"end-of-month")==="end-of-month")?.totalNetWorth??null,k=m.find(H=>H.month===o),X=m.find(H=>H.month===T);let se=null;if(k&&d!==null){const H=k.target-d,le=j.currentNW-d,s=H>0?Math.min(Math.max(le/H*100,0),100):le>=0?100:0;se={target:k.target,growthNeeded:H,growthAchieved:le,percent:s}}let xe=null;if(X){const H=X.target>0?Math.min(Math.max(j.currentNW/X.target*100,0),100):0;xe={target:X.target,percent:H,quarterLabel:q,monthsRemaining:a,quarterEndMonth:T}}return{monthly:se,quarterly:xe,currentMonth:o}},[m,$,j.currentNW]),p=we.every(l=>B[l.id]),D=we.every(l=>!B[l.id]),U=()=>{const l=!p,o={...B};for(const b of we)o[b.id]=l;S(o)},_=l=>{S(o=>({...o,[l]:!o[l]}))},ee=()=>{W("print"),x(!0)},ae=()=>{x(!1);const l=he(B),o=window.open("","_blank");o&&(o.document.write(l),o.document.close(),o.onload=()=>{o.print()})},he=l=>{const o=K(h),b=l.dashboard&&Z.length>0?`
      <div class="section">
        <div class="sh"><div class="sh-bar green-bar"></div><h2>Dashboard Overview</h2></div>
        <div class="insight-box">
          <div class="insight-title">Key Insights</div>
          ${Z.map(s=>`
            <div class="insight-row">
              <span class="dot ${s.type==="warning"?"dot-amber":s.type==="success"?"dot-green":"dot-blue"}"></span>
              ${s.message}
            </div>
          `).join("")}
        </div>
      </div>
    `:"",Y=l.financial?`
      <div class="section">
        <div class="sh"><div class="sh-bar indigo-bar"></div><h2>Financial Summary</h2></div>
        <div class="cards c3">
          <div class="card">
            <span class="card-label">Total Income</span>
            <span class="card-val green">${n(w.income)}</span>
          </div>
          <div class="card">
            <span class="card-label">Total Expenses</span>
            <span class="card-val red">${n(w.totalExpenses)}</span>
          </div>
          <div class="card">
            <span class="card-label">Net Savings</span>
            <span class="card-val ${w.netSavings>=0?"green":"red"}">${n(w.netSavings)}</span>
          </div>
          <div class="card">
            <span class="card-label">Fixed Expenses</span>
            <span class="card-val">${n(w.fixedExpenses)}</span>
          </div>
          <div class="card">
            <span class="card-label">Variable Expenses</span>
            <span class="card-val">${n(w.variableExpenses)}</span>
          </div>
          <div class="card">
            <span class="card-label">Savings Rate</span>
            <span class="card-val ${w.savingsRate>=0?"green":"red"}">${w.savingsRate.toFixed(1)}%</span>
          </div>
        </div>
      </div>
    `:"",T=l.categories?`
      <div class="section page-break">
        <div class="sh"><div class="sh-bar amber-bar"></div><h2>Category Breakdown</h2></div>
        <table>
          <thead><tr>
            <th>Category</th>
            <th class="tc">Count</th>
            <th class="tr">Total</th>
            <th class="tr">Budget</th>
            <th style="width:18%">Usage</th>
          </tr></thead>
          <tbody>
            ${E.filter(s=>s.total>0).map((s,Q)=>`
              <tr>
                <td><span class="dot-inline" style="background:${["#6366f1","#f59e0b","#10b981","#ef4444","#8b5cf6","#ec4899","#14b8a6","#f97316","#06b6d4","#84cc16"][Q%10]}"></span>${s.category}</td>
                <td class="tc">${s.count}</td>
                <td class="tr fw600">${n(s.total)}</td>
                <td class="tr">${s.budget?n(s.budget):'<span class="muted">-</span>'}</td>
                <td>${s.budget?`
                  <div class="pbar"><div class="pfill ${(s.percentUsed||0)>100?"pf-red":(s.percentUsed||0)>80?"pf-amber":"pf-green"}" style="width:${Math.min(s.percentUsed||0,100)}%"></div></div>
                  <span class="ptext">${s.percentUsed?.toFixed(0)||0}%</span>
                `:'<span class="muted">-</span>'}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `:"",q=l.frequentPurchases&&u.length>0?`
      <div class="section page-break">
        <div class="sh"><div class="sh-bar purple-bar"></div><h2>Frequent Purchases</h2></div>
        <table>
          <thead><tr>
            <th>Item</th>
            <th class="tc">Times</th>
            <th class="tr">Avg</th>
            <th class="tr">Total</th>
          </tr></thead>
          <tbody>
            ${u.map(s=>`
              <tr>
                <td style="text-transform:capitalize">${s.details}</td>
                <td class="tc"><span class="pill">${s.count}x</span></td>
                <td class="tr">${n(s.totalSpent/s.count)}</td>
                <td class="tr fw600">${n(s.totalSpent)}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `:"",a=de(h),t=s=>s.replace(/\s+(?=[a-z]*\d)[a-z\d]{6,}$/i,"").replace(/[*#]\d{6,}$/,"").trim(),r=(()=>{const s=new Map;for(const Q of F){const ge=t(Q.details),Ne=ge.toLowerCase(),ye=s.get(Ne);ye?(ye.count++,ye.total+=O(Q)):s.set(Ne,{name:ge,count:1,total:O(Q)})}return Array.from(s.values()).sort((Q,ge)=>ge.total-Q.total)})(),i=l.subscriptions?`
      <div class="section ${!l.frequentPurchases||u.length===0?"page-break":""}">
        <div class="sh" ${l.frequentPurchases&&u.length>0?'style="margin-top:12px"':""}><div class="sh-bar teal-bar"></div><h2>Subscription Tracker</h2></div>
        <div class="sub-total">
          <span class="sub-total-label">${a?"Yearly":"Monthly"} Total</span>
          <span class="sub-total-val">${n(L)}<span class="sub-suffix">/${a?"yr":"mo"}</span></span>
        </div>
        ${r.length>0?`
          <div class="sub-list">
            ${r.map(s=>`
              <div class="sub-row">
                <span>${s.name}${s.count>1?` <span style="color:#94a3b8;font-size:11px">(${s.count} payments)</span>`:""}</span>
                <span class="fw600">${n(s.total)}</span>
              </div>
            `).join("")}
          </div>
        `:'<p class="muted" style="padding:8px 0">No subscriptions found</p>'}
      </div>
    `:"",g=Math.max(...N.map(s=>s.amount),1),d=N.reduce((s,Q)=>s+Q.amount,0),k=l.dayOfWeek&&N.some(s=>s.amount>0)?`
      <div class="section">
        <div class="sh"><div class="sh-bar indigo-bar"></div><h2>Spending by Day of Week</h2></div>
        <div class="day-chart">
          ${N.map(s=>`
            <div class="day-row">
              <span class="day-name">${s.day}</span>
              <div class="day-track"><div class="day-fill" style="width:${g>0?s.amount/g*100:0}%"></div></div>
              <span class="day-val">${n(s.amount)}</span>
              <span class="day-pct">${d>0?(s.amount/d*100).toFixed(1):"0.0"}%</span>
            </div>
          `).join("")}
        </div>
      </div>
    `:"",X=I.total>0?I.fixed/I.total*100:0,se=I.total>0?I.variable/I.total*100:0,xe=l.fixedVariable&&I.total>0?`
      <div class="section page-break">
        <div class="sh"><div class="sh-bar amber-bar"></div><h2>Fixed vs Variable Expenses</h2></div>
        <div class="ratio-bar">
          ${X>0?`<div class="ratio-fixed" style="width:${X}%"></div>`:""}
          ${se>0?`<div class="ratio-var" style="width:${se}%"></div>`:""}
        </div>
        <div class="ratio-legend">
          <span><span class="dot-inline" style="background:#6366f1"></span>Fixed ${X.toFixed(1)}%</span>
          <span><span class="dot-inline" style="background:#f59e0b"></span>Variable ${se.toFixed(1)}%</span>
        </div>
        <div class="cards c3" style="margin-top:14px">
          <div class="card"><span class="card-label">Fixed</span><span class="card-val">${n(I.fixed)}</span></div>
          <div class="card"><span class="card-label">Variable</span><span class="card-val">${n(I.variable)}</span></div>
          <div class="card"><span class="card-label">Total</span><span class="card-val red">${n(I.total)}</span></div>
        </div>
      </div>
    `:"",H=l.networth?`
      <div class="section page-break">
        <div class="sh"><div class="sh-bar blue-bar"></div><h2>Net Worth Summary${j.snapshotMonth?` <span class="sh-sub">as of ${K(j.snapshotMonth)}</span>`:""}</h2></div>
        <div class="cards c3">
          <div class="card">
            <span class="card-label">Net Worth</span>
            <span class="card-val" style="font-size:24px">${n(j.currentNW)}</span>
          </div>
          ${j.totalReceivables>0?`
          <div class="card">
            <span class="card-label">NW excl. Receivables</span>
            <span class="card-val" style="font-size:24px">${n(j.currentNW-j.totalReceivables)}</span>
          </div>`:""}
          <div class="card">
            <span class="card-label">Monthly Change</span>
            <span class="card-val ${j.change!==null&&j.change>=0?"green":"red"}">
              ${j.change!==null?`${j.change>=0?"+":""}${n(j.change)}`:"--"}
            </span>
          </div>
          <div class="card">
            <span class="card-label">Checking Accounts</span>
            <span class="card-val">${n(j.totalCheckingBalance)}</span>
          </div>
          <div class="card">
            <span class="card-label">Investments</span>
            <span class="card-val">${n(j.totalContributions)}</span>
          </div>
          <div class="card">
            <span class="card-label">Investment Gains</span>
            <span class="card-val ${j.investmentGains>=0?"green":"red"}">${j.investmentGains>=0?"+":""}${n(j.investmentGains)}</span>
          </div>
          ${j.totalReceivables>0?`
          <div class="card">
            <span class="card-label">Receivables</span>
            <span class="card-val orange">${n(j.totalReceivables)}</span>
          </div>`:""}
          ${j.totalLiabilities>0?`
          <div class="card">
            <span class="card-label">Liabilities</span>
            <span class="card-val red">-${n(j.totalLiabilities)}</span>
          </div>`:""}
        </div>
        ${j.accountBreakdown.length>0?`
          <div class="sh-mini">Account Breakdown</div>
          <table>
            <thead><tr>
              <th>Account</th>
              <th class="tc">Type</th>
              <th class="tr">Balance</th>
              <th class="tr">Details</th>
            </tr></thead>
            <tbody>
              ${j.accountBreakdown.map(s=>`
                <tr>
                  <td class="fw500">${s.name}</td>
                  <td class="tc"><span class="pill ${s.type==="investment"?"pill-green":s.type==="receivable"?"pill-orange":s.type==="liability"?"pill-red":"pill-amber"}">${s.type==="investment"?"Investment":s.type==="receivable"?"Receivable":s.type==="liability"?"Credit Card":"Checking"}</span></td>
                  <td class="tr fw600 ${s.type==="receivable"?"orange":s.type==="liability"?"red":""}">${s.type==="liability"&&s.balance>0?"-":""}${n(s.balance)}</td>
                  <td class="tr">${s.type==="investment"&&s.contribution!=null?`Contrib: ${n(s.contribution)}`:s.type==="receivable"&&s.riskLevel?`<span class="pill ${s.riskLevel==="low"?"pill-green":s.riskLevel==="medium"?"pill-amber":"pill-red"}">${s.riskLevel} risk</span>`:'<span class="muted">-</span>'}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        `:""}
        ${v.monthly||v.quarterly?`
          <div class="sh-mini">Goal Progress</div>
          <div class="goals-section">
            ${v.monthly?`
              <div class="goal-card">
                <div class="goal-header">
                  <span class="goal-title">Monthly Goal — ${K(v.currentMonth)}</span>
                  <span class="goal-pct ${v.monthly.percent>=100?"green":""}">${v.monthly.percent.toFixed(0)}%</span>
                </div>
                <div class="goal-track"><div class="goal-fill ${v.monthly.percent>=100?"gf-green":v.monthly.percent>=50?"gf-amber":"gf-red"}" style="width:${v.monthly.percent}%"></div></div>
                <div class="goal-details">
                  <span>Growth needed: ${n(v.monthly.growthNeeded)}</span>
                  <span>Achieved: <span class="${v.monthly.growthAchieved>=v.monthly.growthNeeded?"green":""}">${n(v.monthly.growthAchieved)}</span></span>
                </div>
                <div class="goal-target">Target: ${n(v.monthly.target)}</div>
              </div>
            `:""}
            ${v.quarterly?`
              <div class="goal-card">
                <div class="goal-header">
                  <span class="goal-title">Quarterly Goal — ${v.quarterly.quarterLabel}</span>
                  <span class="goal-pct ${v.quarterly.percent>=100?"green":""}">${v.quarterly.percent.toFixed(0)}%</span>
                </div>
                <div class="goal-track"><div class="goal-fill ${v.quarterly.percent>=100?"gf-green":v.quarterly.percent>=50?"gf-amber":"gf-red"}" style="width:${v.quarterly.percent}%"></div></div>
                <div class="goal-details">
                  <span>Current: ${n(j.currentNW)}</span>
                  <span>Target: ${n(v.quarterly.target)}</span>
                </div>
                <div class="goal-target">${v.quarterly.monthsRemaining} month${v.quarterly.monthsRemaining!==1?"s":""} remaining</div>
              </div>
            `:""}
          </div>
        `:""}
      </div>
    `:"",le=l.transactions?`
      <div class="section page-break">
        <div class="sh"><div class="sh-bar gray-bar"></div><h2>Transaction Details</h2></div>
        <table class="tx-table">
          <thead><tr>
            <th>Date</th>
            <th>Type</th>
            <th>Category</th>
            <th>Details</th>
            <th class="tr">Amount</th>
          </tr></thead>
          <tbody>
            ${f.sort((s,Q)=>s.date.getTime()-Q.date.getTime()).map(s=>`
              <tr>
                <td class="mono">${s.date.toLocaleDateString()}</td>
                <td><span class="pill ${s.type==="Income"?"pill-green":s.type==="Fixed Expenses"?"pill-indigo":"pill-amber"}">${s.type==="Income"?"Income":s.type==="Fixed Expenses"?"Fixed":"Variable"}</span></td>
                <td>${s.category}</td>
                <td>${s.details}</td>
                <td class="tr fw600 ${s.type==="Income"||O(s)<0?"green":""}">${s.type==="Income"||O(s)<0?"+":"-"}${n(Math.abs(O(s)))}${at(s)?` <span style="color:#7c3aed;font-size:11px">(${st(s)})</span>`:""}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `:"";return`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Financial Report - ${o}</title>
<style>
  /* Reset & Base */
  *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, Roboto, sans-serif;
    max-width: 800px;
    margin: 0 auto;
    color: #1e293b;
    background: #fff;
    font-size: 13px;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
  }

  /* Header */
  .header {
    padding: 48px 40px 32px;
    border-bottom: 1px solid #e2e8f0;
  }
  .header h1 {
    font-size: 26px;
    font-weight: 700;
    letter-spacing: -0.3px;
    color: #0f172a;
  }
  .header p { color: #64748b; font-size: 14px; margin-top: 4px; }
  .header-meta {
    margin-top: 16px;
    font-size: 11px;
    color: #94a3b8;
    letter-spacing: 0.2px;
  }

  /* Body */
  .body { padding: 0 40px 40px; }

  /* Section */
  .section { margin-top: 36px; }

  /* Section header with left accent bar */
  .sh {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 20px;
  }
  .sh-bar {
    width: 4px;
    height: 22px;
    border-radius: 2px;
    flex-shrink: 0;
  }
  .green-bar { background: #22c55e; }
  .indigo-bar { background: #6366f1; }
  .amber-bar { background: #f59e0b; }
  .purple-bar { background: #8b5cf6; }
  .teal-bar { background: #14b8a6; }
  .blue-bar { background: #3b82f6; }
  .gray-bar { background: #94a3b8; }
  .sh h2 {
    font-size: 17px;
    font-weight: 600;
    color: #0f172a;
  }
  .sh-sub { font-weight: 400; color: #94a3b8; font-size: 13px; }
  .sh-mini {
    font-size: 13px;
    font-weight: 600;
    color: #475569;
    margin: 24px 0 8px;
    padding-bottom: 6px;
    border-bottom: 1px solid #f1f5f9;
  }

  /* Cards */
  .cards { display: grid; gap: 10px; }
  .c4 { grid-template-columns: repeat(4, 1fr); }
  .c3 { grid-template-columns: repeat(3, 1fr); }
  .card {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 14px 16px;
    background: #f8fafc;
    border: 1px solid #f1f5f9;
    border-radius: 8px;
  }
  .card-label {
    font-size: 10px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.6px;
    color: #94a3b8;
  }
  .card-val {
    font-size: 20px;
    font-weight: 700;
    color: #0f172a;
    line-height: 1.2;
  }
  .card-sub { font-size: 11px; margin-top: -2px; }

  /* Colors */
  .green { color: #059669; }
  .red { color: #dc2626; }
  .orange { color: #ea580c; }

  /* Tables */
  table { width: 100%; border-collapse: collapse; }
  th {
    text-align: left;
    padding: 8px 10px;
    font-size: 10px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: #94a3b8;
    border-bottom: 1px solid #e2e8f0;
  }
  td {
    padding: 9px 10px;
    font-size: 13px;
    color: #334155;
    border-bottom: 1px solid #f1f5f9;
  }
  .tc { text-align: center; }
  .tr { text-align: right; }
  .fw500 { font-weight: 500; }
  .fw600 { font-weight: 600; }
  .mono { font-variant-numeric: tabular-nums; }
  .muted { color: #cbd5e1; }
  .tx-table td { padding: 6px 10px; font-size: 12px; }
  .tx-table th { padding: 7px 10px; }

  /* Category dot inline */
  .dot-inline {
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin-right: 8px;
    vertical-align: middle;
  }

  /* Progress bars */
  .pbar {
    height: 6px;
    background: #e2e8f0;
    border-radius: 3px;
    overflow: hidden;
    margin-bottom: 2px;
  }
  .pfill { height: 100%; border-radius: 3px; }
  .pf-green { background: #22c55e; }
  .pf-amber { background: #f59e0b; }
  .pf-red { background: #ef4444; }
  .ptext { font-size: 10px; color: #94a3b8; }

  /* Pills */
  .pill {
    display: inline-block;
    font-size: 10px;
    font-weight: 600;
    padding: 1px 8px;
    border-radius: 4px;
    background: #f1f5f9;
    color: #475569;
  }
  .pill-green { background: #ecfdf5; color: #065f46; }
  .pill-amber { background: #fffbeb; color: #92400e; }
  .pill-indigo { background: #eef2ff; color: #3730a3; }
  .pill-orange { background: #fff7ed; color: #9a3412; }
  .pill-red { background: #fef2f2; color: #991b1b; }

  /* Insights */
  .insight-box {
    background: #f8fafc;
    border: 1px solid #f1f5f9;
    border-radius: 8px;
    padding: 14px 18px;
    margin-top: 16px;
  }
  .insight-title {
    font-size: 10px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: #94a3b8;
    margin-bottom: 8px;
  }
  .insight-row {
    font-size: 12px;
    color: #475569;
    padding: 4px 0;
    display: flex;
    align-items: flex-start;
    gap: 8px;
  }
  .dot {
    width: 6px; height: 6px;
    border-radius: 50%;
    flex-shrink: 0;
    margin-top: 6px;
  }
  .dot-amber { background: #f59e0b; }
  .dot-green { background: #22c55e; }
  .dot-blue { background: #6366f1; }

  /* Subscriptions */
  .sub-total {
    display: flex;
    align-items: baseline;
    gap: 12px;
    margin-bottom: 14px;
  }
  .sub-total-label {
    font-size: 10px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: #94a3b8;
  }
  .sub-total-val {
    font-size: 24px;
    font-weight: 700;
    color: #0f172a;
  }
  .sub-suffix { font-size: 13px; font-weight: 500; color: #94a3b8; }
  .sub-list {
    border: 1px solid #f1f5f9;
    border-radius: 8px;
    overflow: hidden;
  }
  .sub-row {
    display: flex;
    justify-content: space-between;
    padding: 10px 14px;
    font-size: 13px;
    color: #334155;
    border-bottom: 1px solid #f8fafc;
  }
  .sub-row:last-child { border-bottom: none; }

  /* Day of Week */
  .day-chart { display: flex; flex-direction: column; gap: 6px; }
  .day-row {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .day-name {
    width: 76px;
    font-size: 13px;
    font-weight: 500;
    color: #475569;
  }
  .day-track {
    flex: 1;
    height: 8px;
    background: #f1f5f9;
    border-radius: 4px;
    overflow: hidden;
  }
  .day-fill {
    height: 100%;
    background: #6366f1;
    border-radius: 4px;
  }
  .day-val {
    width: 72px;
    text-align: right;
    font-size: 13px;
    font-weight: 600;
    color: #1e293b;
    font-variant-numeric: tabular-nums;
  }
  .day-pct {
    width: 40px;
    text-align: right;
    font-size: 11px;
    color: #94a3b8;
  }

  /* Ratio bar */
  .ratio-bar {
    display: flex;
    height: 10px;
    border-radius: 5px;
    overflow: hidden;
    margin-bottom: 8px;
  }
  .ratio-fixed { background: #6366f1; }
  .ratio-var { background: #f59e0b; }
  .ratio-legend {
    display: flex;
    gap: 24px;
    font-size: 12px;
    color: #64748b;
    margin-bottom: 4px;
  }

  /* Goals */
  .goals-section { display: flex; flex-direction: column; gap: 14px; }
  .goal-card {
    padding: 14px 16px;
    background: #f8fafc;
    border: 1px solid #f1f5f9;
    border-radius: 8px;
  }
  .goal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }
  .goal-title { font-size: 13px; font-weight: 600; color: #1e293b; }
  .goal-pct { font-size: 14px; font-weight: 700; color: #475569; }
  .goal-track {
    height: 8px;
    background: #e2e8f0;
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 8px;
  }
  .goal-fill { height: 100%; border-radius: 4px; }
  .gf-green { background: #22c55e; }
  .gf-amber { background: #f59e0b; }
  .gf-red { background: #ef4444; }
  .goal-details {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: #64748b;
  }
  .goal-target {
    font-size: 11px;
    color: #94a3b8;
    margin-top: 4px;
  }

  /* Footer */
  .footer {
    margin-top: 48px;
    padding: 16px 40px;
    border-top: 1px solid #f1f5f9;
    text-align: center;
    font-size: 10px;
    color: #cbd5e1;
    letter-spacing: 0.2px;
  }

  /* Avoid breaking inside rows */
  .sub-row, tr, .day-row, .insight-box, .card { break-inside: avoid; }
  .section { break-inside: avoid; }

  /* Print */
  .page-break { page-break-before: always; }
  @page { margin: 0; }
  @media print {
    body { padding: 16px 32px; margin: 0; }
    .header { padding: 28px 0 20px; }
    .body { padding: 0 0 20px; }
    .footer { padding: 12px 0; }
    .page-break { page-break-before: always; }
    .card, .pill, .insight-box, .sub-row, .pbar, .pfill,
    .day-track, .day-fill, .ratio-fixed, .ratio-var,
    .dot, .dot-inline, .sh-bar { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  }
</style>
</head>
<body>
  <div class="header">
    <h1>Financial Report</h1>
    <p>${o} &middot; ${w.transactionCount} transactions</p>
    <div class="header-meta">Generated ${new Date().toLocaleDateString()} &middot; JFinance Expense Tracker</div>
  </div>
  <div class="body">
    ${Y}
    ${b}
    ${T}
    ${q}
    ${i}
    ${xe}
    ${k}
    ${le}
    ${H}
  </div>
  <div class="footer">Generated ${new Date().toLocaleString()} &middot; JFinance Expense Tracker</div>
</body>
</html>`};return e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100 dark:border-gray-700/60",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"app-label text-gray-500 dark:text-gray-400",children:de(h)?"Yearly report":"Monthly report"}),e.jsxs("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:[K(h)," • ",w.transactionCount," transactions"]})]}),e.jsx("div",{className:"flex gap-2",children:e.jsxs("button",{onClick:ee,className:"flex items-center gap-2 min-h-11 px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 font-medium transition-colors",children:[e.jsx(Te,{size:18}),"Save PDF"]})})]}),e.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4",children:[e.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400",children:"Income"}),e.jsx("p",{className:"font-display text-xl font-semibold text-pos tabular-nums",children:n(w.income)})]}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4",children:[e.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400",children:"Expenses"}),e.jsx("p",{className:"font-display text-xl font-semibold text-neg tabular-nums",children:n(w.totalExpenses)})]}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4",children:[e.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400",children:"Net Savings"}),e.jsx("p",{className:`font-display text-xl font-semibold tabular-nums ${w.netSavings>=0?"text-pos":"text-neg"}`,children:n(w.netSavings)})]})]}),e.jsx("p",{className:"text-xs text-gray-400 dark:text-gray-500 mt-4",children:'Click "Print / Save PDF" to choose sections and generate a print-friendly report.'}),y&&e.jsx("div",{className:"fixed inset-0 bg-black/55 backdrop-blur-sm z-50 flex items-center justify-center p-4",onClick:()=>x(!1),children:e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-xl w-full max-w-md max-h-[90vh] flex flex-col border border-gray-100 dark:border-gray-700/60",onClick:l=>l.stopPropagation(),children:[e.jsxs("div",{className:"flex items-center justify-between p-5 border-b border-gray-100 dark:border-gray-700",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white",children:"Select Report Sections"}),e.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400 mt-0.5",children:"Choose what to include in your PDF"})]}),e.jsx("button",{onClick:()=>x(!1),className:"p-1.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-colors",children:e.jsx(ce,{size:20})})]}),e.jsx("div",{className:"px-5 pt-4 pb-2",children:e.jsxs("button",{onClick:U,className:"flex items-center gap-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors",children:[e.jsx("div",{className:`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${p?"bg-indigo-600 border-indigo-600":"border-gray-300 dark:border-gray-500"}`,children:p&&e.jsx(ze,{size:14,className:"text-white"})}),p?"Deselect All":"Select All"]})}),e.jsx("div",{className:"px-5 pb-4 space-y-1 overflow-y-auto",children:we.map(l=>e.jsxs("button",{onClick:()=>_(l.id),className:"w-full flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors text-left",children:[e.jsx("div",{className:`w-5 h-5 mt-0.5 rounded border-2 flex-shrink-0 flex items-center justify-center transition-colors ${B[l.id]?"bg-indigo-600 border-indigo-600":"border-gray-300 dark:border-gray-500"}`,children:B[l.id]&&e.jsx(ze,{size:14,className:"text-white"})}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium text-gray-900 dark:text-white",children:l.label}),e.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400 mt-0.5",children:l.description})]})]},l.id))}),e.jsxs("div",{className:"flex items-center justify-end gap-3 p-5 border-t border-gray-100 dark:border-gray-700",children:[e.jsx("button",{onClick:()=>x(!1),className:"min-h-11 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-colors",children:"Cancel"}),e.jsxs("button",{onClick:ae,disabled:D,className:"flex items-center gap-2 min-h-11 px-4 py-2 text-sm font-medium text-white rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-colors bg-indigo-600 hover:bg-indigo-700",children:[e.jsx(Te,{size:16}),"Generate PDF"]})]})]})})]})}const Ue=5;function At({purchases:h,onPurchaseClick:P}){const[C,$]=c.useState(!1),[z,m]=c.useState(!1);if(h.length===0)return e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white mb-4",children:"Frequent Purchases"}),e.jsx("p",{className:"text-gray-400 dark:text-gray-500 text-sm",children:"Add more transactions to see frequent purchase patterns"})]});const V=C?h:h.slice(0,Ue),y=x=>e.jsx("div",{className:"space-y-3",children:x.map((A,W)=>e.jsxs("div",{onClick:()=>P?.(A.details),className:"flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-8 h-8 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center text-lg font-bold text-gray-400 dark:text-gray-500 border border-gray-200 dark:border-gray-600",children:W+1}),e.jsxs("div",{children:[e.jsx("p",{className:"font-medium text-gray-900 dark:text-white capitalize",children:A.details}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"w-2 h-2 rounded-full",style:{backgroundColor:re(A.category)}}),e.jsx("span",{className:"text-xs text-gray-500 dark:text-gray-400",children:A.category})]})]})]}),e.jsxs("div",{className:"text-right",children:[e.jsxs("p",{className:"font-semibold text-gray-900 dark:text-white",children:[A.count,"x"]}),e.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:n(A.totalSpent)})]})]},W))});return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(ct,{className:"text-indigo-600 dark:text-indigo-400",size:20}),e.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white",children:"Frequent Purchases"})]}),e.jsx("button",{onClick:()=>m(!0),className:"p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors",title:"Expand",children:e.jsx(te,{size:18})})]}),e.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400 mb-4",children:"Places you visit most often - click to view transactions"}),y(V),h.length>Ue&&e.jsx("button",{onClick:()=>$(!C),className:"mt-3 text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium",children:C?"Show less":`View all ${h.length} purchases`})]}),z&&e.jsx("div",{className:"fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4",onClick:x=>x.target===x.currentTarget&&m(!1),children:e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl w-full max-w-4xl max-h-[80vh] overflow-hidden flex flex-col",children:[e.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700",children:[e.jsxs("h3",{className:"text-xl font-semibold text-gray-900 dark:text-white",children:["Frequent Purchases (",h.length,")"]}),e.jsx("button",{onClick:()=>m(!1),className:"p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors",children:e.jsx(ce,{size:20})})]}),e.jsx("div",{className:"p-6 overflow-y-auto flex-1 dark-scrollbar",children:y(h)})]})})]})}const Ke=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function Dt(){const[h,P]=c.useState(()=>typeof window<"u"?window.innerWidth<768:!1);return c.useEffect(()=>{const C=window.matchMedia("(max-width: 767px)"),$=()=>P(C.matches);return $(),C.addEventListener("change",$),()=>C.removeEventListener("change",$)},[]),h}function It({transactions:h}){const{resolvedTheme:P}=je(),C=P==="dark",[$,z]=c.useState(!1),m=Dt(),V=c.useMemo(()=>{const S=new Date().getFullYear(),f=S-1,w={};return Ke.forEach((R,E)=>{w[E]={currentYear:0,lastYear:0}}),h.forEach(R=>{if(R.excludeFromTotals||R.category==="Credit Card Payment")return;const E=R.date.getFullYear(),u=R.date.getMonth();if(R.type==="Income")return;const N=O(R);E===S?w[u].currentYear+=N:E===f&&(w[u].lastYear+=N)}),Ke.map((R,E)=>({month:R,[S]:w[E].currentYear,[f]:w[E].lastYear}))},[h]),y=c.useMemo(()=>{const S=new Date().getFullYear();return{current:S,last:S-1}},[]),x=V.some(S=>S[y.current]>0),A=V.some(S=>S[y.last]>0);if(!x&&!A)return e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white mb-4",children:"Year-over-Year Comparison"}),e.jsx("div",{className:"h-64 flex items-center justify-center text-gray-400 dark:text-gray-500",children:"No data available for comparison"})]});const W=S=>e.jsx("div",{className:S,children:e.jsx(ne,{width:"100%",height:"100%",children:e.jsxs(ke,{data:V,barGap:0,barCategoryGap:"20%",margin:m?{top:5,right:5,left:0,bottom:20}:void 0,children:[e.jsx(pe,{strokeDasharray:"3 3",stroke:C?"#374151":"#f0f0f0"}),e.jsx(me,{dataKey:"month",interval:0,tick:{fontSize:m?10:12,fill:C?"#9ca3af":"#6b7280"},angle:m?-45:0,textAnchor:m?"end":"middle",height:m?50:30}),e.jsx(be,{tickFormatter:f=>`$${(f/1e3).toFixed(0)}k`,tick:{fontSize:m?10:12,fill:C?"#9ca3af":"#6b7280"}}),e.jsx(ie,{formatter:(f,w)=>[n(Number(f)),w],contentStyle:{backgroundColor:C?"#1f2937":"white",border:`1px solid ${C?"#374151":"#e5e7eb"}`,borderRadius:"8px",color:C?"#f3f4f6":"#111827"},labelStyle:{color:C?"#f3f4f6":"#111827"}}),e.jsx(it,{wrapperStyle:{paddingTop:"20px",fontSize:m?11:14}}),A&&e.jsx(ue,{dataKey:y.last,name:`${y.last}`,fill:"#94a3b8",radius:[4,4,0,0]}),x&&e.jsx(ue,{dataKey:y.current,name:`${y.current}`,fill:"#6366f1",radius:[4,4,0,0]})]})})}),B=()=>e.jsxs("div",{className:"grid grid-cols-3 gap-2 sm:gap-4 mt-4 pt-4 border-t border-gray-100 dark:border-gray-700",children:[e.jsxs("div",{children:[e.jsxs("p",{className:"text-xs text-gray-500 dark:text-gray-400",children:[y.current," Total"]}),e.jsx("p",{className:"text-base sm:text-lg font-semibold text-indigo-600 dark:text-indigo-400",children:n(V.reduce((S,f)=>S+f[y.current],0))})]}),e.jsxs("div",{children:[e.jsxs("p",{className:"text-xs text-gray-500 dark:text-gray-400",children:[y.last," Total"]}),e.jsx("p",{className:"text-base sm:text-lg font-semibold text-gray-500 dark:text-gray-400",children:n(V.reduce((S,f)=>S+f[y.last],0))})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400",children:"YoY Change"}),(()=>{const S=V.reduce((E,u)=>E+u[y.current],0),f=V.reduce((E,u)=>E+u[y.last],0),w=f>0?(S-f)/f*100:0,R=w>0;return e.jsxs("p",{className:`text-base sm:text-lg font-semibold ${R?"text-red-500":"text-green-500"}`,children:[w>0?"+":"",w.toFixed(1),"%"]})})()]})]});return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white",children:"Year-over-Year Comparison"}),e.jsx("button",{onClick:()=>z(!0),className:"min-h-11 min-w-11 md:min-h-0 md:min-w-0 inline-flex items-center justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors",title:"Expand",children:e.jsx(te,{size:18})})]}),e.jsxs("p",{className:"text-sm text-gray-500 dark:text-gray-400 mb-4",children:["Monthly expenses: ",y.current," vs ",y.last]}),W("h-56 sm:h-72"),B()]}),$&&e.jsx("div",{className:"fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4",onClick:S=>S.target===S.currentTarget&&z(!1),children:e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col",children:[e.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-semibold text-gray-900 dark:text-white",children:"Year-over-Year Comparison"}),e.jsxs("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:["Monthly expenses: ",y.current," vs ",y.last]})]}),e.jsx("button",{onClick:()=>z(!1),className:"min-h-11 min-w-11 md:min-h-0 md:min-w-0 inline-flex items-center justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors",children:e.jsx(ce,{size:20})})]}),e.jsxs("div",{className:"p-6 overflow-y-auto flex-1 dark-scrollbar",children:[W("h-[50vh]"),B()]})]})})]})}const Pt=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function Wt(){const[h,P]=c.useState(()=>typeof window<"u"?window.innerWidth<768:!1);return c.useEffect(()=>{const C=window.matchMedia("(max-width: 767px)"),$=()=>P(C.matches);return $(),C.addEventListener("change",$),()=>C.removeEventListener("change",$)},[]),h}function Rt({transactions:h,onMonthSelect:P}){const{resolvedTheme:C}=je(),$=C==="dark",[z,m]=c.useState(!1),V=Wt(),{chartData:y,stats:x,months:A}=c.useMemo(()=>{const u=new Date,N=[];for(let p=11;p>=0;p--){const D=new Date(u.getFullYear(),u.getMonth()-p,1);N.push({year:D.getFullYear(),month:D.getMonth(),key:`${D.getFullYear()}-${String(D.getMonth()+1).padStart(2,"0")}`,label:`${Pt[D.getMonth()]} ${D.getFullYear().toString().slice(2)}`})}const F={};N.forEach(p=>{F[p.key]=0}),h.forEach(p=>{if(p.excludeFromTotals||p.category==="Credit Card Payment"||p.type==="Income")return;const D=`${p.date.getFullYear()}-${String(p.date.getMonth()+1).padStart(2,"0")}`;F[D]!==void 0&&(F[D]+=O(p))});const L=N.map(p=>({month:p.label,amount:F[p.key]})),I=L.map(p=>p.amount).filter(p=>p>0),J=I.length>0?I.reduce((p,D)=>p+D,0)/I.length:0,Z=Math.max(...I,0),M=I.length>0?Math.min(...I):0,G=L.filter(p=>p.amount>0);let j="stable",v=0;if(G.length>=3){const p=G.slice(-3).map(U=>U.amount),D=G.slice(0,Math.min(3,G.length-3)).map(U=>U.amount);if(D.length>0){const U=p.reduce((ee,ae)=>ee+ae,0)/p.length,_=D.reduce((ee,ae)=>ee+ae,0)/D.length;v=_>0?(U-_)/_*100:0,v>5?j="up":v<-5&&(j="down")}}return{chartData:L,stats:{average:J,max:Z,min:M,trend:j,trendPercent:v},months:N}},[h]),W=y.some(u=>u.amount>0),B=u=>{if(!P||!u)return;const N=u.activeTooltipIndex;if(N==null||N<0||N>=A.length)return;const F=A[N];P({year:F.year,month:F.month,label:F.label})};if(!W)return e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white mb-4",children:"Spending Trends"}),e.jsx("div",{className:"h-64 flex items-center justify-center text-gray-400 dark:text-gray-500",children:"Not enough data for trends"})]});const S=x.trend==="up"?Qe:x.trend==="down"?Xe:Ze,f=x.trend==="up"?"text-red-500":x.trend==="down"?"text-green-500":"text-gray-500",w=x.trend==="up"?"bg-red-50 dark:bg-red-900/20":x.trend==="down"?"bg-green-50 dark:bg-green-900/20":"bg-gray-50 dark:bg-gray-700",R=u=>e.jsx("div",{className:`${u} ${P?"cursor-pointer":""}`,children:e.jsx(ne,{width:"100%",height:"100%",children:e.jsxs(lt,{data:y,onClick:B,children:[e.jsx(pe,{strokeDasharray:"3 3",stroke:$?"#374151":"#f0f0f0"}),e.jsx(me,{dataKey:"month",tick:{fontSize:V?10:11,fill:$?"#9ca3af":"#6b7280"},interval:"preserveStartEnd"}),e.jsx(be,{tickFormatter:N=>`$${(N/1e3).toFixed(0)}k`,tick:{fontSize:V?10:12,fill:$?"#9ca3af":"#6b7280"}}),e.jsx(ie,{formatter:N=>[n(Number(N)),"Expenses"],contentStyle:{backgroundColor:$?"#1f2937":"white",border:`1px solid ${$?"#374151":"#e5e7eb"}`,borderRadius:"8px",color:$?"#f3f4f6":"#111827"},labelStyle:{color:$?"#f3f4f6":"#111827"}}),e.jsx(ot,{y:x.average,stroke:"#9ca3af",strokeDasharray:"5 5",label:{value:"Avg",position:"right",fill:$?"#9ca3af":"#6b7280",fontSize:11}}),e.jsx(dt,{type:"monotone",dataKey:"amount",stroke:"#6366f1",strokeWidth:2,dot:{fill:"#6366f1",strokeWidth:0,r:4},activeDot:{fill:"#6366f1",strokeWidth:0,r:6,style:{cursor:P?"pointer":void 0}}})]})})}),E=()=>e.jsxs("div",{className:"grid grid-cols-3 gap-2 sm:gap-4 mt-4 pt-4 border-t border-gray-100 dark:border-gray-700",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400",children:"Average"}),e.jsx("p",{className:"text-base sm:text-lg font-semibold text-gray-900 dark:text-white",children:n(x.average)})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400",children:"Highest"}),e.jsx("p",{className:"text-base sm:text-lg font-semibold text-red-500",children:n(x.max)})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400",children:"Lowest"}),e.jsx("p",{className:"text-base sm:text-lg font-semibold text-green-500",children:n(x.min)})]})]});return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700",children:[e.jsxs("div",{className:"flex items-start justify-between mb-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white",children:"Spending Trends"}),e.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:"Monthly expenses over the last 12 months"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("div",{className:`flex items-center gap-1 px-2 py-1 rounded-lg ${w}`,children:[e.jsx(S,{size:16,className:f}),e.jsxs("span",{className:`text-sm font-medium ${f}`,children:[x.trendPercent>0?"+":"",x.trendPercent.toFixed(0),"%"]})]}),e.jsx("button",{onClick:()=>m(!0),className:"min-h-11 min-w-11 md:min-h-0 md:min-w-0 inline-flex items-center justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors",title:"Expand",children:e.jsx(te,{size:18})})]})]}),R("h-56 sm:h-64"),E()]}),z&&e.jsx("div",{className:"fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4",onClick:u=>u.target===u.currentTarget&&m(!1),children:e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col",children:[e.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-semibold text-gray-900 dark:text-white",children:"Spending Trends"}),e.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:"Monthly expenses over the last 12 months"})]}),e.jsx("button",{onClick:()=>m(!1),className:"min-h-11 min-w-11 md:min-h-0 md:min-w-0 inline-flex items-center justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors",children:e.jsx(ce,{size:20})})]}),e.jsxs("div",{className:"p-6 overflow-y-auto flex-1 dark-scrollbar",children:[R("h-[50vh]"),E()]})]})})]})}const $e=[{id:"financial",label:"Financial Summary",description:"Income, expenses, savings & fixed/variable breakdown"},{id:"dashboard",label:"Dashboard Overview",description:"Key insights and spending analysis"},{id:"categories",label:"Category Breakdown",description:"Spending by category with budget comparisons"},{id:"frequentPurchases",label:"Frequent Purchases",description:"Most repeated purchases and their totals"},{id:"subscriptions",label:"Subscription Tracker",description:"Recurring subscriptions and monthly cost"},{id:"fixedVariable",label:"Fixed vs Variable Expenses",description:"Breakdown of fixed and variable spending"},{id:"dayOfWeek",label:"Spending by Day of Week",description:"How spending varies across weekdays"},{id:"transactions",label:"Transaction Details",description:"Full list of all transactions"},{id:"networth",label:"Net Worth Summary",description:"Net worth, accounts, investments & gains"}];function Yt({selectedMonth:h}){const{getVisibleTransactions:P}=Ee(),{budgets:C}=Ae(),{netWorthSnapshots:$}=et(),{accounts:z}=De(),{netWorthGoals:m}=tt(),V=P(),[y,x]=c.useState(!1),[A,W]=c.useState("print"),[B,S]=c.useState({dashboard:!0,financial:!0,categories:!0,frequentPurchases:!0,subscriptions:!0,dayOfWeek:!0,fixedVariable:!0,networth:!0,transactions:!0}),f=c.useMemo(()=>Ie(V,h),[V,h]),w=c.useMemo(()=>{const l=oe(f),o=l.filter(t=>t.type==="Income").reduce((t,r)=>t+O(r),0),b=l.filter(t=>t.type==="Fixed Expenses").reduce((t,r)=>t+O(r),0),Y=l.filter(t=>t.type==="Variable Expenses").reduce((t,r)=>t+O(r),0),T=b+Y,q=o-T,a=o>0?q/o*100:0;return{income:o,fixedExpenses:b,variableExpenses:Y,totalExpenses:T,netSavings:q,savingsRate:a,transactionCount:f.length}},[f]),R=de(h)?new Date().getMonth()+1:1,E=c.useMemo(()=>Pe(f,C,R),[f,C,R]),u=c.useMemo(()=>We(f,10),[f]),N=c.useMemo(()=>{const l=Re(f);return Object.entries(l).map(([o,b])=>({day:o,amount:b}))},[f]),F=c.useMemo(()=>Ye(f),[f]),L=c.useMemo(()=>F.reduce((l,o)=>l+O(o),0),[F]),I=c.useMemo(()=>{const l=oe(f),o=l.filter(T=>T.type==="Fixed Expenses").reduce((T,q)=>T+O(q),0),b=l.filter(T=>T.type==="Variable Expenses").reduce((T,q)=>T+O(q),0),Y=o+b;return{fixed:o,variable:b,total:Y}},[f]),J=c.useMemo(()=>{if(/^\d{4}$/.test(h))return String(Number(h)-1);const[l,o]=h.split("-").map(Number),b=new Date(l,o-2,1);return`${b.getFullYear()}-${String(b.getMonth()+1).padStart(2,"0")}`},[h]),Z=c.useMemo(()=>Oe(V,C,h,J),[V,C,h,J]),M=c.useMemo(()=>{const l=$.filter(o=>/^\d{4}$/.test(h)?o.month.startsWith(h):o.month===h);return l.length===0?null:l.reduce((o,b)=>(b.updatedAt||b.createdAt)>(o.updatedAt||o.createdAt)?b:o)},[$,h]),G=c.useMemo(()=>{if(/^\d{4}$/.test(h))return null;const[l,o]=h.split("-").map(Number),b=`${o===1?l-1:l}-${String(o===1?12:o-1).padStart(2,"0")}`,Y=$.filter(T=>T.month===b);return Y.length===0?null:Y.reduce((T,q)=>(q.updatedAt||q.createdAt)>(T.updatedAt||T.createdAt)?q:T)},[$,h]),j=c.useMemo(()=>{const l=M?.totalNetWorth||0,o=G?.totalNetWorth||0,b=M&&G?l-o:null,Y=b!==null&&o!==0?b/o*100:null,T=M?M.snapshots.filter(d=>z.find(k=>k.id===d.accountId)?.type==="investment").reduce((d,k)=>d+(k.contribution||0),0):0,q=M?M.snapshots.filter(d=>z.find(k=>k.id===d.accountId)?.type==="investment").reduce((d,k)=>d+k.balance,0):0,a=M?M.snapshots.filter(d=>z.find(k=>k.id===d.accountId)?.type==="regular").reduce((d,k)=>d+k.balance,0):0,t=M?M.snapshots.filter(d=>z.find(k=>k.id===d.accountId)?.type==="receivable").reduce((d,k)=>d+k.balance,0):0,r=M?M.snapshots.filter(d=>z.find(k=>k.id===d.accountId)?.type==="liability").reduce((d,k)=>d+k.balance,0):0,i=q-T,g=M?M.snapshots.map(d=>{const k=z.find(X=>X.id===d.accountId);return{name:k?.name||"Unknown",type:k?.type||"regular",balance:d.balance,contribution:d.contribution,riskLevel:k?.riskLevel}}):[];return{currentNW:l,change:b,changePercent:Y,totalContributions:T,totalInvestmentValue:q,totalCheckingBalance:a,totalReceivables:t,totalLiabilities:r,investmentGains:i,accountBreakdown:g,snapshotMonth:M?.month}},[M,G,z]),v=c.useMemo(()=>{const l=new Date,o=`${l.getFullYear()}-${String(l.getMonth()+1).padStart(2,"0")}`,b=l.getMonth()+1,Y=l.getFullYear(),T=b<=4?`${Y}-04`:b<=8?`${Y}-08`:`${Y}-12`,q=b<=4?"Q1 (Jan–Apr)":b<=8?"Q2 (May–Aug)":"Q3 (Sep–Dec)",a=b<=4?4-b:b<=8?8-b:12-b,t=b===1?12:b-1,i=`${b===1?Y-1:Y}-${String(t).padStart(2,"0")}`,d=$.find(H=>H.month===i&&(H.period||"end-of-month")==="end-of-month")?.totalNetWorth??null,k=m.find(H=>H.month===o),X=m.find(H=>H.month===T);let se=null;if(k&&d!==null){const H=k.target-d,le=j.currentNW-d,s=H>0?Math.min(Math.max(le/H*100,0),100):le>=0?100:0;se={target:k.target,growthNeeded:H,growthAchieved:le,percent:s}}let xe=null;if(X){const H=X.target>0?Math.min(Math.max(j.currentNW/X.target*100,0),100):0;xe={target:X.target,percent:H,quarterLabel:q,monthsRemaining:a,quarterEndMonth:T}}return{monthly:se,quarterly:xe,currentMonth:o}},[m,$,j.currentNW]),p=$e.every(l=>B[l.id]),D=$e.every(l=>!B[l.id]),U=()=>{const l=!p,o={...B};for(const b of $e)o[b.id]=l;S(o)},_=l=>{S(o=>({...o,[l]:!o[l]}))},ee=()=>{W("print"),x(!0)},ae=()=>{x(!1);const l=he(B),o=window.open("","_blank");o&&(o.document.write(l),o.document.close(),o.onload=()=>{o.print()})},he=l=>{const o=K(h),b=l.dashboard&&Z.length>0?`
      <div class="section">
        <div class="sh"><div class="sh-bar green-bar"></div><h2>Dashboard Overview</h2></div>
        <div class="insight-box">
          <div class="insight-title">Key Insights</div>
          ${Z.map(s=>`
            <div class="insight-row">
              <span class="dot ${s.type==="warning"?"dot-amber":s.type==="success"?"dot-green":"dot-blue"}"></span>
              ${s.message}
            </div>
          `).join("")}
        </div>
      </div>
    `:"",Y=l.financial?`
      <div class="section">
        <div class="sh"><div class="sh-bar indigo-bar"></div><h2>Financial Summary</h2></div>
        <div class="cards c3">
          <div class="card">
            <span class="card-label">Total Income</span>
            <span class="card-val green">${n(w.income)}</span>
          </div>
          <div class="card">
            <span class="card-label">Total Expenses</span>
            <span class="card-val red">${n(w.totalExpenses)}</span>
          </div>
          <div class="card">
            <span class="card-label">Net Savings</span>
            <span class="card-val ${w.netSavings>=0?"green":"red"}">${n(w.netSavings)}</span>
          </div>
          <div class="card">
            <span class="card-label">Fixed Expenses</span>
            <span class="card-val">${n(w.fixedExpenses)}</span>
          </div>
          <div class="card">
            <span class="card-label">Variable Expenses</span>
            <span class="card-val">${n(w.variableExpenses)}</span>
          </div>
          <div class="card">
            <span class="card-label">Savings Rate</span>
            <span class="card-val ${w.savingsRate>=0?"green":"red"}">${w.savingsRate.toFixed(1)}%</span>
          </div>
        </div>
      </div>
    `:"",T=l.categories?`
      <div class="section page-break">
        <div class="sh"><div class="sh-bar amber-bar"></div><h2>Category Breakdown</h2></div>
        <table>
          <thead><tr>
            <th>Category</th>
            <th class="tc">Count</th>
            <th class="tr">Total</th>
            <th class="tr">Budget</th>
            <th style="width:18%">Usage</th>
          </tr></thead>
          <tbody>
            ${E.filter(s=>s.total>0).map((s,Q)=>`
              <tr>
                <td><span class="dot-inline" style="background:${["#6366f1","#f59e0b","#10b981","#ef4444","#8b5cf6","#ec4899","#14b8a6","#f97316","#06b6d4","#84cc16"][Q%10]}"></span>${s.category}</td>
                <td class="tc">${s.count}</td>
                <td class="tr fw600">${n(s.total)}</td>
                <td class="tr">${s.budget?n(s.budget):'<span class="muted">-</span>'}</td>
                <td>${s.budget?`
                  <div class="pbar"><div class="pfill ${(s.percentUsed||0)>100?"pf-red":(s.percentUsed||0)>80?"pf-amber":"pf-green"}" style="width:${Math.min(s.percentUsed||0,100)}%"></div></div>
                  <span class="ptext">${s.percentUsed?.toFixed(0)||0}%</span>
                `:'<span class="muted">-</span>'}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `:"",q=l.frequentPurchases&&u.length>0?`
      <div class="section page-break">
        <div class="sh"><div class="sh-bar purple-bar"></div><h2>Frequent Purchases</h2></div>
        <table>
          <thead><tr>
            <th>Item</th>
            <th class="tc">Times</th>
            <th class="tr">Avg</th>
            <th class="tr">Total</th>
          </tr></thead>
          <tbody>
            ${u.map(s=>`
              <tr>
                <td style="text-transform:capitalize">${s.details}</td>
                <td class="tc"><span class="pill">${s.count}x</span></td>
                <td class="tr">${n(s.totalSpent/s.count)}</td>
                <td class="tr fw600">${n(s.totalSpent)}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `:"",a=de(h),t=s=>s.replace(/\s+(?=[a-z]*\d)[a-z\d]{6,}$/i,"").replace(/[*#]\d{6,}$/,"").trim(),r=(()=>{const s=new Map;for(const Q of F){const ge=t(Q.details),Ne=ge.toLowerCase(),ye=s.get(Ne);ye?(ye.count++,ye.total+=O(Q)):s.set(Ne,{name:ge,count:1,total:O(Q)})}return Array.from(s.values()).sort((Q,ge)=>ge.total-Q.total)})(),i=l.subscriptions?`
      <div class="section ${!l.frequentPurchases||u.length===0?"page-break":""}">
        <div class="sh" ${l.frequentPurchases&&u.length>0?'style="margin-top:12px"':""}><div class="sh-bar teal-bar"></div><h2>Subscription Tracker</h2></div>
        <div class="sub-total">
          <span class="sub-total-label">${a?"Yearly":"Monthly"} Total</span>
          <span class="sub-total-val">${n(L)}<span class="sub-suffix">/${a?"yr":"mo"}</span></span>
        </div>
        ${r.length>0?`
          <div class="sub-list">
            ${r.map(s=>`
              <div class="sub-row">
                <span>${s.name}${s.count>1?` <span style="color:#94a3b8;font-size:11px">(${s.count} payments)</span>`:""}</span>
                <span class="fw600">${n(s.total)}</span>
              </div>
            `).join("")}
          </div>
        `:'<p class="muted" style="padding:8px 0">No subscriptions found</p>'}
      </div>
    `:"",g=Math.max(...N.map(s=>s.amount),1),d=N.reduce((s,Q)=>s+Q.amount,0),k=l.dayOfWeek&&N.some(s=>s.amount>0)?`
      <div class="section">
        <div class="sh"><div class="sh-bar indigo-bar"></div><h2>Spending by Day of Week</h2></div>
        <div class="day-chart">
          ${N.map(s=>`
            <div class="day-row">
              <span class="day-name">${s.day}</span>
              <div class="day-track"><div class="day-fill" style="width:${g>0?s.amount/g*100:0}%"></div></div>
              <span class="day-val">${n(s.amount)}</span>
              <span class="day-pct">${d>0?(s.amount/d*100).toFixed(1):"0.0"}%</span>
            </div>
          `).join("")}
        </div>
      </div>
    `:"",X=I.total>0?I.fixed/I.total*100:0,se=I.total>0?I.variable/I.total*100:0,xe=l.fixedVariable&&I.total>0?`
      <div class="section page-break">
        <div class="sh"><div class="sh-bar amber-bar"></div><h2>Fixed vs Variable Expenses</h2></div>
        <div class="ratio-bar">
          ${X>0?`<div class="ratio-fixed" style="width:${X}%"></div>`:""}
          ${se>0?`<div class="ratio-var" style="width:${se}%"></div>`:""}
        </div>
        <div class="ratio-legend">
          <span><span class="dot-inline" style="background:#6366f1"></span>Fixed ${X.toFixed(1)}%</span>
          <span><span class="dot-inline" style="background:#f59e0b"></span>Variable ${se.toFixed(1)}%</span>
        </div>
        <div class="cards c3" style="margin-top:14px">
          <div class="card"><span class="card-label">Fixed</span><span class="card-val">${n(I.fixed)}</span></div>
          <div class="card"><span class="card-label">Variable</span><span class="card-val">${n(I.variable)}</span></div>
          <div class="card"><span class="card-label">Total</span><span class="card-val red">${n(I.total)}</span></div>
        </div>
      </div>
    `:"",H=l.networth?`
      <div class="section page-break">
        <div class="sh"><div class="sh-bar blue-bar"></div><h2>Net Worth Summary${j.snapshotMonth?` <span class="sh-sub">as of ${K(j.snapshotMonth)}</span>`:""}</h2></div>
        <div class="cards c3">
          <div class="card">
            <span class="card-label">Net Worth</span>
            <span class="card-val" style="font-size:24px">${n(j.currentNW)}</span>
          </div>
          ${j.totalReceivables>0?`
          <div class="card">
            <span class="card-label">NW excl. Receivables</span>
            <span class="card-val" style="font-size:24px">${n(j.currentNW-j.totalReceivables)}</span>
          </div>`:""}
          <div class="card">
            <span class="card-label">Monthly Change</span>
            <span class="card-val ${j.change!==null&&j.change>=0?"green":"red"}">
              ${j.change!==null?`${j.change>=0?"+":""}${n(j.change)}`:"--"}
            </span>
          </div>
          <div class="card">
            <span class="card-label">Checking Accounts</span>
            <span class="card-val">${n(j.totalCheckingBalance)}</span>
          </div>
          <div class="card">
            <span class="card-label">Investments</span>
            <span class="card-val">${n(j.totalContributions)}</span>
          </div>
          <div class="card">
            <span class="card-label">Investment Gains</span>
            <span class="card-val ${j.investmentGains>=0?"green":"red"}">${j.investmentGains>=0?"+":""}${n(j.investmentGains)}</span>
          </div>
          ${j.totalReceivables>0?`
          <div class="card">
            <span class="card-label">Receivables</span>
            <span class="card-val orange">${n(j.totalReceivables)}</span>
          </div>`:""}
          ${j.totalLiabilities>0?`
          <div class="card">
            <span class="card-label">Liabilities</span>
            <span class="card-val red">-${n(j.totalLiabilities)}</span>
          </div>`:""}
        </div>
        ${j.accountBreakdown.length>0?`
          <div class="sh-mini">Account Breakdown</div>
          <table>
            <thead><tr>
              <th>Account</th>
              <th class="tc">Type</th>
              <th class="tr">Balance</th>
              <th class="tr">Details</th>
            </tr></thead>
            <tbody>
              ${j.accountBreakdown.map(s=>`
                <tr>
                  <td class="fw500">${s.name}</td>
                  <td class="tc"><span class="pill ${s.type==="investment"?"pill-green":s.type==="receivable"?"pill-orange":s.type==="liability"?"pill-red":"pill-amber"}">${s.type==="investment"?"Investment":s.type==="receivable"?"Receivable":s.type==="liability"?"Credit Card":"Checking"}</span></td>
                  <td class="tr fw600 ${s.type==="receivable"?"orange":s.type==="liability"?"red":""}">${s.type==="liability"&&s.balance>0?"-":""}${n(s.balance)}</td>
                  <td class="tr">${s.type==="investment"&&s.contribution!=null?`Contrib: ${n(s.contribution)}`:s.type==="receivable"&&s.riskLevel?`<span class="pill ${s.riskLevel==="low"?"pill-green":s.riskLevel==="medium"?"pill-amber":"pill-red"}">${s.riskLevel} risk</span>`:'<span class="muted">-</span>'}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        `:""}
        ${v.monthly||v.quarterly?`
          <div class="sh-mini">Goal Progress</div>
          <div class="goals-section">
            ${v.monthly?`
              <div class="goal-card">
                <div class="goal-header">
                  <span class="goal-title">Monthly Goal — ${K(v.currentMonth)}</span>
                  <span class="goal-pct ${v.monthly.percent>=100?"green":""}">${v.monthly.percent.toFixed(0)}%</span>
                </div>
                <div class="goal-track"><div class="goal-fill ${v.monthly.percent>=100?"gf-green":v.monthly.percent>=50?"gf-amber":"gf-red"}" style="width:${v.monthly.percent}%"></div></div>
                <div class="goal-details">
                  <span>Growth needed: ${n(v.monthly.growthNeeded)}</span>
                  <span>Achieved: <span class="${v.monthly.growthAchieved>=v.monthly.growthNeeded?"green":""}">${n(v.monthly.growthAchieved)}</span></span>
                </div>
                <div class="goal-target">Target: ${n(v.monthly.target)}</div>
              </div>
            `:""}
            ${v.quarterly?`
              <div class="goal-card">
                <div class="goal-header">
                  <span class="goal-title">Quarterly Goal — ${v.quarterly.quarterLabel}</span>
                  <span class="goal-pct ${v.quarterly.percent>=100?"green":""}">${v.quarterly.percent.toFixed(0)}%</span>
                </div>
                <div class="goal-track"><div class="goal-fill ${v.quarterly.percent>=100?"gf-green":v.quarterly.percent>=50?"gf-amber":"gf-red"}" style="width:${v.quarterly.percent}%"></div></div>
                <div class="goal-details">
                  <span>Current: ${n(j.currentNW)}</span>
                  <span>Target: ${n(v.quarterly.target)}</span>
                </div>
                <div class="goal-target">${v.quarterly.monthsRemaining} month${v.quarterly.monthsRemaining!==1?"s":""} remaining</div>
              </div>
            `:""}
          </div>
        `:""}
      </div>
    `:"",le=l.transactions?`
      <div class="section page-break">
        <div class="sh"><div class="sh-bar gray-bar"></div><h2>Transaction Details</h2></div>
        <table class="tx-table">
          <thead><tr>
            <th>Date</th>
            <th>Type</th>
            <th>Category</th>
            <th>Details</th>
            <th class="tr">Amount</th>
          </tr></thead>
          <tbody>
            ${f.sort((s,Q)=>s.date.getTime()-Q.date.getTime()).map(s=>`
              <tr>
                <td class="mono">${s.date.toLocaleDateString()}</td>
                <td><span class="pill ${s.type==="Income"?"pill-green":s.type==="Fixed Expenses"?"pill-indigo":"pill-amber"}">${s.type==="Income"?"Income":s.type==="Fixed Expenses"?"Fixed":"Variable"}</span></td>
                <td>${s.category}</td>
                <td>${s.details}</td>
                <td class="tr fw600 ${s.type==="Income"||O(s)<0?"green":""}">${s.type==="Income"||O(s)<0?"+":"-"}${n(Math.abs(O(s)))}${at(s)?` <span style="color:#7c3aed;font-size:11px">(${st(s)})</span>`:""}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `:"";return`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Financial Report - ${o}</title>
<style>
  /* Reset & Base */
  *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, Roboto, sans-serif;
    max-width: 800px;
    margin: 0 auto;
    color: #1e293b;
    background: #fff;
    font-size: 13px;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
  }

  /* Header */
  .header {
    padding: 48px 40px 32px;
    border-bottom: 1px solid #e2e8f0;
  }
  .header h1 {
    font-size: 26px;
    font-weight: 700;
    letter-spacing: -0.3px;
    color: #0f172a;
  }
  .header p { color: #64748b; font-size: 14px; margin-top: 4px; }
  .header-meta {
    margin-top: 16px;
    font-size: 11px;
    color: #94a3b8;
    letter-spacing: 0.2px;
  }

  /* Body */
  .body { padding: 0 40px 40px; }

  /* Section */
  .section { margin-top: 36px; }

  /* Section header with left accent bar */
  .sh {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 20px;
  }
  .sh-bar {
    width: 4px;
    height: 22px;
    border-radius: 2px;
    flex-shrink: 0;
  }
  .green-bar { background: #22c55e; }
  .indigo-bar { background: #6366f1; }
  .amber-bar { background: #f59e0b; }
  .purple-bar { background: #8b5cf6; }
  .teal-bar { background: #14b8a6; }
  .blue-bar { background: #3b82f6; }
  .gray-bar { background: #94a3b8; }
  .sh h2 {
    font-size: 17px;
    font-weight: 600;
    color: #0f172a;
  }
  .sh-sub { font-weight: 400; color: #94a3b8; font-size: 13px; }
  .sh-mini {
    font-size: 13px;
    font-weight: 600;
    color: #475569;
    margin: 24px 0 8px;
    padding-bottom: 6px;
    border-bottom: 1px solid #f1f5f9;
  }

  /* Cards */
  .cards { display: grid; gap: 10px; }
  .c4 { grid-template-columns: repeat(4, 1fr); }
  .c3 { grid-template-columns: repeat(3, 1fr); }
  .card {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 14px 16px;
    background: #f8fafc;
    border: 1px solid #f1f5f9;
    border-radius: 8px;
  }
  .card-label {
    font-size: 10px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.6px;
    color: #94a3b8;
  }
  .card-val {
    font-size: 20px;
    font-weight: 700;
    color: #0f172a;
    line-height: 1.2;
  }
  .card-sub { font-size: 11px; margin-top: -2px; }

  /* Colors */
  .green { color: #059669; }
  .red { color: #dc2626; }
  .orange { color: #ea580c; }

  /* Tables */
  table { width: 100%; border-collapse: collapse; }
  th {
    text-align: left;
    padding: 8px 10px;
    font-size: 10px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: #94a3b8;
    border-bottom: 1px solid #e2e8f0;
  }
  td {
    padding: 9px 10px;
    font-size: 13px;
    color: #334155;
    border-bottom: 1px solid #f1f5f9;
  }
  .tc { text-align: center; }
  .tr { text-align: right; }
  .fw500 { font-weight: 500; }
  .fw600 { font-weight: 600; }
  .mono { font-variant-numeric: tabular-nums; }
  .muted { color: #cbd5e1; }
  .tx-table td { padding: 6px 10px; font-size: 12px; }
  .tx-table th { padding: 7px 10px; }

  /* Category dot inline */
  .dot-inline {
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin-right: 8px;
    vertical-align: middle;
  }

  /* Progress bars */
  .pbar {
    height: 6px;
    background: #e2e8f0;
    border-radius: 3px;
    overflow: hidden;
    margin-bottom: 2px;
  }
  .pfill { height: 100%; border-radius: 3px; }
  .pf-green { background: #22c55e; }
  .pf-amber { background: #f59e0b; }
  .pf-red { background: #ef4444; }
  .ptext { font-size: 10px; color: #94a3b8; }

  /* Pills */
  .pill {
    display: inline-block;
    font-size: 10px;
    font-weight: 600;
    padding: 1px 8px;
    border-radius: 4px;
    background: #f1f5f9;
    color: #475569;
  }
  .pill-green { background: #ecfdf5; color: #065f46; }
  .pill-amber { background: #fffbeb; color: #92400e; }
  .pill-indigo { background: #eef2ff; color: #3730a3; }
  .pill-orange { background: #fff7ed; color: #9a3412; }
  .pill-red { background: #fef2f2; color: #991b1b; }

  /* Insights */
  .insight-box {
    background: #f8fafc;
    border: 1px solid #f1f5f9;
    border-radius: 8px;
    padding: 14px 18px;
    margin-top: 16px;
  }
  .insight-title {
    font-size: 10px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: #94a3b8;
    margin-bottom: 8px;
  }
  .insight-row {
    font-size: 12px;
    color: #475569;
    padding: 4px 0;
    display: flex;
    align-items: flex-start;
    gap: 8px;
  }
  .dot {
    width: 6px; height: 6px;
    border-radius: 50%;
    flex-shrink: 0;
    margin-top: 6px;
  }
  .dot-amber { background: #f59e0b; }
  .dot-green { background: #22c55e; }
  .dot-blue { background: #6366f1; }

  /* Subscriptions */
  .sub-total {
    display: flex;
    align-items: baseline;
    gap: 12px;
    margin-bottom: 14px;
  }
  .sub-total-label {
    font-size: 10px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: #94a3b8;
  }
  .sub-total-val {
    font-size: 24px;
    font-weight: 700;
    color: #0f172a;
  }
  .sub-suffix { font-size: 13px; font-weight: 500; color: #94a3b8; }
  .sub-list {
    border: 1px solid #f1f5f9;
    border-radius: 8px;
    overflow: hidden;
  }
  .sub-row {
    display: flex;
    justify-content: space-between;
    padding: 10px 14px;
    font-size: 13px;
    color: #334155;
    border-bottom: 1px solid #f8fafc;
  }
  .sub-row:last-child { border-bottom: none; }

  /* Day of Week */
  .day-chart { display: flex; flex-direction: column; gap: 6px; }
  .day-row {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .day-name {
    width: 76px;
    font-size: 13px;
    font-weight: 500;
    color: #475569;
  }
  .day-track {
    flex: 1;
    height: 8px;
    background: #f1f5f9;
    border-radius: 4px;
    overflow: hidden;
  }
  .day-fill {
    height: 100%;
    background: #6366f1;
    border-radius: 4px;
  }
  .day-val {
    width: 72px;
    text-align: right;
    font-size: 13px;
    font-weight: 600;
    color: #1e293b;
    font-variant-numeric: tabular-nums;
  }
  .day-pct {
    width: 40px;
    text-align: right;
    font-size: 11px;
    color: #94a3b8;
  }

  /* Ratio bar */
  .ratio-bar {
    display: flex;
    height: 10px;
    border-radius: 5px;
    overflow: hidden;
    margin-bottom: 8px;
  }
  .ratio-fixed { background: #6366f1; }
  .ratio-var { background: #f59e0b; }
  .ratio-legend {
    display: flex;
    gap: 24px;
    font-size: 12px;
    color: #64748b;
    margin-bottom: 4px;
  }

  /* Goals */
  .goals-section { display: flex; flex-direction: column; gap: 14px; }
  .goal-card {
    padding: 14px 16px;
    background: #f8fafc;
    border: 1px solid #f1f5f9;
    border-radius: 8px;
  }
  .goal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }
  .goal-title { font-size: 13px; font-weight: 600; color: #1e293b; }
  .goal-pct { font-size: 14px; font-weight: 700; color: #475569; }
  .goal-track {
    height: 8px;
    background: #e2e8f0;
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 8px;
  }
  .goal-fill { height: 100%; border-radius: 4px; }
  .gf-green { background: #22c55e; }
  .gf-amber { background: #f59e0b; }
  .gf-red { background: #ef4444; }
  .goal-details {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: #64748b;
  }
  .goal-target {
    font-size: 11px;
    color: #94a3b8;
    margin-top: 4px;
  }

  /* Footer */
  .footer {
    margin-top: 48px;
    padding: 16px 40px;
    border-top: 1px solid #f1f5f9;
    text-align: center;
    font-size: 10px;
    color: #cbd5e1;
    letter-spacing: 0.2px;
  }

  /* Avoid breaking inside rows */
  .sub-row, tr, .day-row, .insight-box, .card { break-inside: avoid; }
  .section { break-inside: avoid; }

  /* Print */
  .page-break { page-break-before: always; }
  @page { margin: 0; }
  @media print {
    body { padding: 16px 32px; margin: 0; }
    .header { padding: 28px 0 20px; }
    .body { padding: 0 0 20px; }
    .footer { padding: 12px 0; }
    .page-break { page-break-before: always; }
    .card, .pill, .insight-box, .sub-row, .pbar, .pfill,
    .day-track, .day-fill, .ratio-fixed, .ratio-var,
    .dot, .dot-inline, .sh-bar { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  }
</style>
</head>
<body>
  <div class="header">
    <h1>Financial Report</h1>
    <p>${o} &middot; ${w.transactionCount} transactions</p>
    <div class="header-meta">Generated ${new Date().toLocaleDateString()} &middot; JFinance Expense Tracker</div>
  </div>
  <div class="body">
    ${Y}
    ${b}
    ${T}
    ${q}
    ${i}
    ${xe}
    ${k}
    ${le}
    ${H}
  </div>
  <div class="footer">Generated ${new Date().toLocaleString()} &middot; JFinance Expense Tracker</div>
</body>
</html>`};return e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white",children:de(h)?"Yearly Report":"Monthly Report"}),e.jsxs("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:[K(h)," • ",w.transactionCount," transactions"]})]}),e.jsx("div",{className:"flex gap-2",children:e.jsxs("button",{onClick:ee,className:"flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium",children:[e.jsx(Te,{size:18}),"Save PDF"]})})]}),e.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4",children:[e.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400",children:"Income"}),e.jsx("p",{className:"text-xl font-semibold text-green-600 dark:text-green-400",children:n(w.income)})]}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4",children:[e.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400",children:"Expenses"}),e.jsx("p",{className:"text-xl font-semibold text-red-600 dark:text-red-400",children:n(w.totalExpenses)})]}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4",children:[e.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400",children:"Net Savings"}),e.jsx("p",{className:`text-xl font-semibold ${w.netSavings>=0?"text-green-600 dark:text-green-400":"text-red-600 dark:text-red-400"}`,children:n(w.netSavings)})]})]}),e.jsx("p",{className:"text-xs text-gray-400 dark:text-gray-500 mt-4",children:'Click "Print / Save PDF" to choose sections and generate a print-friendly report.'}),y&&e.jsx("div",{className:"fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4",onClick:()=>x(!1),children:e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-xl w-full max-w-md max-h-[90vh] flex flex-col border border-gray-200 dark:border-gray-700",onClick:l=>l.stopPropagation(),children:[e.jsxs("div",{className:"flex items-center justify-between p-5 border-b border-gray-100 dark:border-gray-700",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white",children:"Select Report Sections"}),e.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400 mt-0.5",children:"Choose what to include in your PDF"})]}),e.jsx("button",{onClick:()=>x(!1),className:"p-1.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors",children:e.jsx(ce,{size:20})})]}),e.jsx("div",{className:"px-5 pt-4 pb-2",children:e.jsxs("button",{onClick:U,className:"flex items-center gap-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors",children:[e.jsx("div",{className:`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${p?"bg-indigo-600 border-indigo-600":"border-gray-300 dark:border-gray-500"}`,children:p&&e.jsx(ze,{size:14,className:"text-white"})}),p?"Deselect All":"Select All"]})}),e.jsx("div",{className:"px-5 pb-4 space-y-1 overflow-y-auto",children:$e.map(l=>e.jsxs("button",{onClick:()=>_(l.id),className:"w-full flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors text-left",children:[e.jsx("div",{className:`w-5 h-5 mt-0.5 rounded border-2 flex-shrink-0 flex items-center justify-center transition-colors ${B[l.id]?"bg-indigo-600 border-indigo-600":"border-gray-300 dark:border-gray-500"}`,children:B[l.id]&&e.jsx(ze,{size:14,className:"text-white"})}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium text-gray-900 dark:text-white",children:l.label}),e.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400 mt-0.5",children:l.description})]})]},l.id))}),e.jsxs("div",{className:"flex items-center justify-end gap-3 p-5 border-t border-gray-100 dark:border-gray-700",children:[e.jsx("button",{onClick:()=>x(!1),className:"px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors",children:"Cancel"}),e.jsxs("button",{onClick:ae,disabled:D,className:"flex items-center gap-2 px-4 py-2 text-sm font-medium text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors bg-indigo-600 hover:bg-indigo-700",children:[e.jsx(Te,{size:16}),"Generate PDF"]})]})]})})]})}const Je={Sun:"Sunday",Mon:"Monday",Tue:"Tuesday",Wed:"Wednesday",Thu:"Thursday",Fri:"Friday",Sat:"Saturday"};function Ot(){const{getVisibleTransactions:h}=Ee(),{budgets:P}=Ae(),{tags:C}=rt(),{accounts:$}=De(),z=h(),{selectedMonth:m}=qe(),{resolvedTheme:V}=je(),y=V==="dark",[x,A]=c.useState({isOpen:!1,title:"",transactions:[]}),[W,B]=c.useState(!1),[S,f]=c.useState(!1),[w,R]=c.useState(!1),[E,u]=c.useState(null),N=c.useMemo(()=>{if(/^\d{4}$/.test(m))return String(Number(m)-1);const[a,t]=m.split("-").map(Number),r=new Date(a,t-2,1);return`${r.getFullYear()}-${String(r.getMonth()+1).padStart(2,"0")}`},[m]),F=c.useMemo(()=>Ie(z,m),[z,m]),L=c.useMemo(()=>We(F,10),[F]),I=c.useMemo(()=>{const a=Re(F);return Object.entries(a).map(([t,r])=>({day:t.slice(0,3),fullDay:t,amount:r}))},[F]),J=c.useMemo(()=>Ye(F),[F]),Z=c.useMemo(()=>J.reduce((a,t)=>a+O(t),0),[J]),M=c.useMemo(()=>{const a=r=>r.replace(/\s+(?=[a-z]*\d)[a-z\d]{6,}$/i,"").replace(/[*#]\d{6,}$/,"").trim(),t=new Map;for(const r of J){const i=a(r.details),g=i.toLowerCase(),d=t.get(g);d?(d.count++,d.total+=O(r),d.transactions.push(r)):t.set(g,{name:i,count:1,total:O(r),transactions:[r]})}return Array.from(t.values()).sort((r,i)=>i.total-r.total)},[J]),G=c.useMemo(()=>Oe(z,P,m,N),[z,P,m,N]),j=de(m)?new Date().getMonth()+1:1,v=c.useMemo(()=>Pe(F,P,j),[F,P,j]),p=c.useMemo(()=>{const a=oe(F).filter(r=>r.type!=="Income"&&r.amount<0),t=new Map;for(const r of a){const i=r.details.replace(/\s*(refund|return|credit|reversal)\s*/gi,"").trim()||r.details,g=i.toLowerCase(),d=t.get(g);d?(d.count++,d.total+=Math.abs(O(r)),d.transactions.push(r)):t.set(g,{store:i,count:1,total:Math.abs(O(r)),transactions:[r]})}return Array.from(t.values()).sort((r,i)=>i.total-r.total)},[F]),D=c.useMemo(()=>p.reduce((a,t)=>a+t.total,0),[p]),U=c.useMemo(()=>{const a=oe(F),t=a.filter(i=>i.type==="Fixed Expenses").reduce((i,g)=>i+O(g),0),r=a.filter(i=>i.type==="Variable Expenses").reduce((i,g)=>i+O(g),0);return[{name:"Fixed",value:t,color:"#6366f1",type:"Fixed Expenses"},{name:"Variable",value:r,color:"#f59e0b",type:"Variable Expenses"}].filter(i=>i.value>0)},[F]),_=c.useMemo(()=>{const a=oe(F),t=new Map;for(const r of a)if(!(!r.tags||r.tags.length===0))for(const i of r.tags){const g=t.get(i)||{total:0,count:0,transactions:[]};g.total+=O(r),g.count+=1,g.transactions.push(r),t.set(i,g)}return C.map(r=>{const i=t.get(r.id);return!i||i.total===0?null:{tag:r,...i}}).filter(r=>r!==null).sort((r,i)=>i.total-r.total)},[F,C]),ee=()=>{A({isOpen:!1,title:"",transactions:[]})},ae=a=>{const t=F.filter(r=>r.details.toLowerCase().includes(a.toLowerCase()));A({isOpen:!0,title:a,subtitle:`${t.length} transactions in ${K(m)}`,transactions:t,highlightColor:"#6366f1"})},he=a=>{if(!a||!a.fullDay)return;const t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"].indexOf(a.fullDay),r=F.filter(i=>i.date.getDay()===t);A({isOpen:!0,title:`${a.fullDay} Spending`,subtitle:K(m),transactions:r,highlightColor:"#6366f1"})},l=a=>{if(!a||!a.type)return;const t=F.filter(r=>r.type===a.type);A({isOpen:!0,title:`${a.name} Expenses`,subtitle:K(m),transactions:t,highlightColor:a.color})},o=a=>{A({isOpen:!0,title:a.name,subtitle:`${a.count} subscription${a.count>1?"s":""}`,transactions:a.transactions,highlightColor:"#6366f1"})},b=a=>{const t=F.filter(r=>r.category===a);A({isOpen:!0,title:a,subtitle:K(m),transactions:t,highlightColor:re(a)})},Y=a=>{A({isOpen:!0,title:`${a.store} Refunds`,subtitle:`${a.transactions.length} refund${a.transactions.length>1?"s":""} totalling ${n(a.total)}`,transactions:a.transactions,highlightColor:"#22c55e"})},T=({year:a,month:t,label:r})=>{const i=z.filter(g=>!g.excludeFromTotals&&g.category!=="Credit Card Payment"&&g.type!=="Income"&&g.date.getFullYear()===a&&g.date.getMonth()===t);A({isOpen:!0,title:`Spending in ${r}`,subtitle:`${i.length} transaction${i.length!==1?"s":""}`,transactions:i,highlightColor:"#6366f1"})},q=a=>{if(a.category){const t=F.filter(r=>r.category===a.category);A({isOpen:!0,title:a.category,subtitle:a.message,transactions:t,highlightColor:a.type==="warning"?"#f59e0b":a.type==="success"?"#22c55e":"#3b82f6"})}};return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:"Analytics"}),e.jsx("p",{className:"text-gray-500 dark:text-gray-400 mt-1",children:"Understand your spending patterns"})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[e.jsx(Nt,{transactions:F,subtitle:K(m),onAccountClick:a=>{const t=$.find(i=>i.id===a),r=F.filter(i=>i.accountId===a&&!(i.excludeFromAccountTotals??i.excludeFromTotals));A({isOpen:!0,title:t?.name||"Account",subtitle:K(m),transactions:r,highlightColor:"#0ea5e9"})}}),e.jsx(wt,{insights:G,onInsightClick:q}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white",children:"Category Breakdown"}),e.jsx("button",{onClick:()=>u("categories"),className:"p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors",title:"Expand",children:e.jsx(te,{size:18})})]}),e.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400 mb-4",children:"Tap a category to view transactions"}),e.jsx("div",{className:"md:hidden space-y-2",children:(W?v:v.slice(0,5)).map(a=>{const t=v.reduce((i,g)=>i+Math.max(0,g.total),0),r=t>0?Math.max(0,a.total)/t*100:0;return e.jsxs("button",{onClick:()=>b(a.category),className:"w-full text-left p-3 rounded-lg border border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/40",children:[e.jsxs("div",{className:"flex items-center justify-between gap-2",children:[e.jsxs("div",{className:"flex items-center gap-2 min-w-0",children:[e.jsx("span",{className:"w-2.5 h-2.5 rounded-full shrink-0",style:{backgroundColor:re(a.category)}}),e.jsx("span",{className:"text-sm font-medium text-gray-900 dark:text-white truncate",children:a.category})]}),e.jsx("span",{className:"text-sm font-semibold text-gray-900 dark:text-white shrink-0",children:n(a.total)})]}),e.jsxs("div",{className:"mt-1 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400",children:[e.jsxs("span",{children:[a.count," txn",a.count===1?"":"s"]}),e.jsxs("span",{children:[r.toFixed(1),"% of expenses"]})]}),a.budget?e.jsxs("div",{className:"mt-2",children:[e.jsx("div",{className:"h-1.5 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden",children:e.jsx("div",{className:"h-full rounded-full",style:{width:`${Math.min(100,a.percentUsed||0)}%`,backgroundColor:ve(a.percentUsed||0)}})}),e.jsxs("p",{className:"text-[11px] text-gray-400 dark:text-gray-500 mt-0.5",children:[n(a.total)," / ",n(a.budget)]})]}):null]},a.category)})}),e.jsx("div",{className:"hidden md:block overflow-x-auto dark-scrollbar",children:e.jsxs("table",{className:"w-full",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider border-b border-gray-100 dark:border-gray-700",children:[e.jsx("th",{className:"pb-3",children:"Category"}),e.jsx("th",{className:"pb-3 hidden lg:table-cell",style:{minWidth:"120px"},children:"Budget"}),e.jsx("th",{className:"pb-3 text-right hidden sm:table-cell",children:"Transactions"}),e.jsx("th",{className:"pb-3 text-right",children:"Total"}),e.jsx("th",{className:"pb-3 text-right hidden md:table-cell",children:"% of Expenses"})]})}),e.jsx("tbody",{className:"divide-y divide-gray-50 dark:divide-gray-700",children:(W?v:v.slice(0,5)).map(a=>{const t=v.reduce((i,g)=>i+Math.max(0,g.total),0),r=t>0?Math.max(0,a.total)/t*100:0;return e.jsxs("tr",{onClick:()=>b(a.category),className:"cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors",children:[e.jsx("td",{className:"py-3",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"w-2 h-2 rounded-full",style:{backgroundColor:re(a.category)}}),e.jsx("span",{className:"text-sm text-gray-900 dark:text-white",children:a.category})]})}),e.jsx("td",{className:"py-3 hidden lg:table-cell",children:a.budget?e.jsxs("div",{children:[e.jsx("div",{className:"h-1.5 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden",children:e.jsx("div",{className:"h-full rounded-full transition-all",style:{width:`${Math.min(100,a.percentUsed||0)}%`,backgroundColor:ve(a.percentUsed||0)}})}),e.jsxs("p",{className:"text-xs text-gray-400 dark:text-gray-500 mt-0.5",children:[n(a.total)," / ",n(a.budget)]})]}):e.jsx("span",{className:"text-xs text-gray-400 dark:text-gray-500",children:"-"})}),e.jsx("td",{className:"py-3 text-right text-sm text-gray-600 dark:text-gray-400 hidden sm:table-cell",children:a.count}),e.jsx("td",{className:"py-3 text-right text-sm font-medium text-gray-900 dark:text-white",children:n(a.total)}),e.jsxs("td",{className:"py-3 text-right text-sm text-gray-600 dark:text-gray-400 hidden md:table-cell",children:[r.toFixed(1),"%"]})]},a.category)})})]})}),v.length>5&&e.jsx("button",{onClick:()=>B(!W),className:"mt-3 text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium",children:W?"Show less":`View all ${v.length} categories`})]})]}),e.jsx(nt,{transactions:F,subtitle:K(m),sideBySide:!0}),e.jsx(xt,{transactions:z}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white",children:"Subscription Tracker"}),e.jsx("button",{onClick:()=>u("subscriptions"),className:"p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors",title:"Expand",children:e.jsx(te,{size:18})})]}),e.jsxs("p",{className:"text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4",children:[n(Z),"/",de(m)?"year":"month"]}),M.length===0?e.jsx("p",{className:"text-gray-400 dark:text-gray-500 text-sm",children:"No subscriptions found this month"}):e.jsx("div",{className:"space-y-2",children:(S?M:M.slice(0,5)).map(a=>e.jsxs("div",{onClick:()=>o(a),className:"flex items-center justify-between py-2 px-2 border-b border-gray-100 dark:border-gray-700 last:border-0 rounded cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:a.name}),a.count>1&&e.jsxs("span",{className:"text-xs text-gray-400 dark:text-gray-500",children:[a.count," payments"]})]}),e.jsx("span",{className:"text-sm font-medium text-gray-900 dark:text-white",children:n(a.total)})]},a.name))}),M.length>5&&e.jsx("button",{onClick:()=>f(!S),className:"mt-3 text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium",children:S?"Show less":`View all ${M.length} subscriptions`})]}),e.jsx(At,{purchases:L,onPurchaseClick:ae})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white",children:"Refunds"}),e.jsx("button",{onClick:()=>u("refunds"),className:"p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors",title:"Expand",children:e.jsx(te,{size:18})})]}),e.jsx("p",{className:"text-2xl font-bold text-green-600 dark:text-green-400 mb-4",children:n(D)}),p.length===0?e.jsx("p",{className:"text-gray-400 dark:text-gray-500 text-sm",children:"No refunds this month"}):e.jsx("div",{className:"space-y-2",children:(w?p:p.slice(0,5)).map(a=>e.jsxs("div",{onClick:()=>Y(a),className:"flex items-center justify-between py-2 px-2 border-b border-gray-100 dark:border-gray-700 last:border-0 rounded cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:a.store}),e.jsxs("span",{className:"text-xs text-gray-400 dark:text-gray-500",children:[a.count," refund",a.count>1?"s":""]})]}),e.jsxs("span",{className:"text-sm font-medium text-green-600 dark:text-green-400",children:["+",n(a.total)]})]},a.store))}),p.length>5&&e.jsx("button",{onClick:()=>R(!w),className:"mt-3 text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium",children:w?"Show less":`View all ${p.length} refunds`})]}),e.jsx(Rt,{transactions:z,onMonthSelect:T})]}),_.length>0&&e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white mb-4",children:"Spending by Tag"}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3",children:_.map(({tag:a,total:t,count:r,transactions:i})=>e.jsxs("div",{onClick:()=>A({isOpen:!0,title:a.name,subtitle:`${K(m)} — ${r} transaction${r!==1?"s":""}`,transactions:i,highlightColor:a.color}),className:"flex items-center gap-3 p-3 rounded-lg border border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 cursor-pointer transition-colors",children:[e.jsx("div",{className:"w-3 h-3 rounded-full flex-shrink-0",style:{backgroundColor:a.color}}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("p",{className:"text-sm font-medium text-gray-900 dark:text-white truncate",children:a.name}),e.jsxs("p",{className:"text-xs text-gray-400 dark:text-gray-500",children:[r," transaction",r!==1?"s":""]})]}),e.jsx("span",{className:"text-sm font-semibold text-gray-900 dark:text-white",children:n(t)})]},a.id))})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white",children:"Fixed vs Variable Expenses"}),e.jsx("button",{onClick:()=>u("fixedVariable"),className:"p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors",title:"Expand",children:e.jsx(te,{size:18})})]}),e.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400 mb-4",children:"Click a section to view transactions"}),e.jsx("div",{className:"h-48 md:h-64",children:U.length>0?e.jsx(ne,{width:"100%",height:"100%",children:e.jsxs(Se,{children:[e.jsx(Me,{data:U,cx:"50%",cy:"50%",innerRadius:50,outerRadius:80,paddingAngle:5,dataKey:"value",label:({name:a,percent:t})=>`${a} ${((t||0)*100).toFixed(0)}%`,onClick:l,cursor:"pointer",children:U.map((a,t)=>e.jsx(Fe,{fill:a.color},`cell-${t}`))}),e.jsx(ie,{formatter:a=>n(Number(a)),contentStyle:{backgroundColor:y?"#1f2937":"white",border:`1px solid ${y?"#374151":"#e5e7eb"}`,borderRadius:"8px",color:y?"#f3f4f6":"#111827"}})]})}):e.jsx("div",{className:"h-full flex items-center justify-center text-gray-400 dark:text-gray-500",children:"No expense data"})}),e.jsxs("div",{className:"flex justify-center gap-6 mt-4",children:[e.jsxs("button",{onClick:()=>l({name:"Fixed",type:"Fixed Expenses",color:"#6366f1"}),className:"flex items-center gap-2 px-3 py-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors",children:[e.jsx("div",{className:"w-3 h-3 rounded-full bg-indigo-500"}),e.jsx("span",{className:"text-sm text-gray-600 dark:text-gray-300",children:"Fixed"})]}),e.jsxs("button",{onClick:()=>l({name:"Variable",type:"Variable Expenses",color:"#f59e0b"}),className:"flex items-center gap-2 px-3 py-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors",children:[e.jsx("div",{className:"w-3 h-3 rounded-full bg-amber-500"}),e.jsx("span",{className:"text-sm text-gray-600 dark:text-gray-300",children:"Variable"})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white",children:"Spending by Day of Week"}),e.jsx("button",{onClick:()=>u("dayOfWeek"),className:"p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors",title:"Expand",children:e.jsx(te,{size:18})})]}),e.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400 mb-4",children:"Click a bar to view transactions for that day"}),e.jsx("div",{className:"h-48 md:h-64",children:I.some(a=>a.amount>0)?e.jsx(ne,{width:"100%",height:"100%",children:e.jsxs(ke,{data:I,children:[e.jsx(pe,{strokeDasharray:"3 3",stroke:y?"#374151":"#f0f0f0"}),e.jsx(me,{dataKey:"day",tick:{fontSize:12,fill:y?"#9ca3af":"#6b7280"}}),e.jsx(be,{tickFormatter:a=>`$${a}`,tick:{fontSize:12,fill:y?"#9ca3af":"#6b7280"}}),e.jsx(ie,{formatter:a=>n(Number(a)),labelFormatter:a=>Je[a]||a,contentStyle:{backgroundColor:y?"#1f2937":"white",border:`1px solid ${y?"#374151":"#e5e7eb"}`,borderRadius:"8px",color:y?"#f3f4f6":"#111827"},labelStyle:{color:y?"#f3f4f6":"#111827"}}),e.jsx(ue,{dataKey:"amount",fill:"#6366f1",radius:[4,4,0,0],cursor:"pointer",onClick:he})]})}):e.jsx("div",{className:"h-full flex items-center justify-center text-gray-400 dark:text-gray-500",children:"No data available"})})]})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsx(It,{transactions:z}),e.jsx(Yt,{selectedMonth:m})]}),E&&e.jsx("div",{className:"fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4",onClick:a=>a.target===a.currentTarget&&u(null),children:e.jsxs("div",{className:`bg-white dark:bg-gray-800 rounded-xl w-full ${E==="fixedVariable"||E==="dayOfWeek"?"max-w-5xl max-h-[90vh]":"max-w-4xl max-h-[80vh]"} overflow-hidden flex flex-col`,children:[e.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700",children:[e.jsxs("h3",{className:"text-xl font-semibold text-gray-900 dark:text-white",children:[E==="categories"&&`Category Breakdown (${v.length})`,E==="subscriptions"&&`Subscriptions (${M.length})`,E==="refunds"&&`Refunds (${p.length})`,E==="fixedVariable"&&"Fixed vs Variable Expenses",E==="dayOfWeek"&&"Spending by Day of Week"]}),e.jsx("button",{onClick:()=>u(null),className:"p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors",children:e.jsx(ce,{size:20})})]}),e.jsxs("div",{className:"p-6 overflow-y-auto flex-1 dark-scrollbar",children:[E==="categories"&&e.jsx("div",{className:"overflow-x-auto dark-scrollbar",children:e.jsxs("table",{className:"w-full",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider border-b border-gray-100 dark:border-gray-700",children:[e.jsx("th",{className:"pb-3",children:"Category"}),e.jsx("th",{className:"pb-3",style:{minWidth:"150px"},children:"Budget"}),e.jsx("th",{className:"pb-3 text-right",children:"Transactions"}),e.jsx("th",{className:"pb-3 text-right",children:"Total"}),e.jsx("th",{className:"pb-3 text-right",children:"% of Expenses"})]})}),e.jsx("tbody",{className:"divide-y divide-gray-50 dark:divide-gray-700",children:v.map(a=>{const t=v.reduce((i,g)=>i+Math.max(0,g.total),0),r=t>0?Math.max(0,a.total)/t*100:0;return e.jsxs("tr",{onClick:()=>{u(null),b(a.category)},className:"cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors",children:[e.jsx("td",{className:"py-3",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"w-2 h-2 rounded-full",style:{backgroundColor:re(a.category)}}),e.jsx("span",{className:"text-sm text-gray-900 dark:text-white",children:a.category})]})}),e.jsx("td",{className:"py-3",children:a.budget?e.jsxs("div",{children:[e.jsx("div",{className:"h-1.5 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden",children:e.jsx("div",{className:"h-full rounded-full transition-all",style:{width:`${Math.min(100,a.percentUsed||0)}%`,backgroundColor:ve(a.percentUsed||0)}})}),e.jsxs("p",{className:"text-xs text-gray-400 dark:text-gray-500 mt-0.5",children:[n(a.total)," / ",n(a.budget)]})]}):e.jsx("span",{className:"text-xs text-gray-400 dark:text-gray-500",children:"-"})}),e.jsx("td",{className:"py-3 text-right text-sm text-gray-600 dark:text-gray-400",children:a.count}),e.jsx("td",{className:"py-3 text-right text-sm font-medium text-gray-900 dark:text-white",children:n(a.total)}),e.jsxs("td",{className:"py-3 text-right text-sm text-gray-600 dark:text-gray-400",children:[r.toFixed(1),"%"]})]},a.category)})})]})}),E==="subscriptions"&&e.jsxs("div",{className:"space-y-2",children:[M.map(a=>e.jsxs("div",{onClick:()=>{u(null),o(a)},className:"flex items-center justify-between py-3 px-3 border-b border-gray-100 dark:border-gray-700 last:border-0 rounded cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:a.name}),a.count>1&&e.jsxs("span",{className:"text-xs text-gray-400 dark:text-gray-500",children:[a.count," payments"]})]}),e.jsx("span",{className:"text-sm font-medium text-gray-900 dark:text-white",children:n(a.total)})]},a.name)),e.jsxs("div",{className:"pt-3 border-t border-gray-200 dark:border-gray-600 flex justify-between px-3",children:[e.jsx("span",{className:"text-sm font-semibold text-gray-900 dark:text-white",children:"Total"}),e.jsx("span",{className:"text-sm font-semibold text-indigo-600 dark:text-indigo-400",children:n(Z)})]})]}),E==="refunds"&&e.jsxs("div",{className:"space-y-2",children:[p.map(a=>e.jsxs("div",{onClick:()=>{u(null),Y(a)},className:"flex items-center justify-between py-3 px-3 border-b border-gray-100 dark:border-gray-700 last:border-0 rounded cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:a.store}),e.jsxs("span",{className:"text-xs text-gray-400 dark:text-gray-500",children:[a.count," refund",a.count>1?"s":""]})]}),e.jsxs("span",{className:"text-sm font-medium text-green-600 dark:text-green-400",children:["+",n(a.total)]})]},a.store)),e.jsxs("div",{className:"pt-3 border-t border-gray-200 dark:border-gray-600 flex justify-between px-3",children:[e.jsx("span",{className:"text-sm font-semibold text-gray-900 dark:text-white",children:"Total Refunds"}),e.jsxs("span",{className:"text-sm font-semibold text-green-600 dark:text-green-400",children:["+",n(D)]})]})]}),E==="fixedVariable"&&e.jsxs("div",{children:[e.jsx("div",{className:"h-[40vh] md:h-[50vh]",children:U.length>0?e.jsx(ne,{width:"100%",height:"100%",children:e.jsxs(Se,{children:[e.jsx(Me,{data:U,cx:"50%",cy:"50%",innerRadius:80,outerRadius:140,paddingAngle:5,dataKey:"value",label:({name:a,percent:t})=>`${a} ${((t||0)*100).toFixed(0)}%`,onClick:a=>{u(null),l(a)},cursor:"pointer",children:U.map((a,t)=>e.jsx(Fe,{fill:a.color},`cell-${t}`))}),e.jsx(ie,{formatter:a=>n(Number(a)),contentStyle:{backgroundColor:y?"#1f2937":"white",border:`1px solid ${y?"#374151":"#e5e7eb"}`,borderRadius:"8px",color:y?"#f3f4f6":"#111827"}})]})}):e.jsx("div",{className:"h-full flex items-center justify-center text-gray-400 dark:text-gray-500",children:"No expense data"})}),e.jsxs("div",{className:"flex justify-center gap-6 mt-4",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-3 h-3 rounded-full bg-indigo-500"}),e.jsxs("span",{className:"text-sm text-gray-600 dark:text-gray-300",children:["Fixed: ",n(U.find(a=>a.name==="Fixed")?.value||0)]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-3 h-3 rounded-full bg-amber-500"}),e.jsxs("span",{className:"text-sm text-gray-600 dark:text-gray-300",children:["Variable: ",n(U.find(a=>a.name==="Variable")?.value||0)]})]})]})]}),E==="dayOfWeek"&&e.jsx("div",{className:"h-[40vh] md:h-[50vh]",children:I.some(a=>a.amount>0)?e.jsx(ne,{width:"100%",height:"100%",children:e.jsxs(ke,{data:I,children:[e.jsx(pe,{strokeDasharray:"3 3",stroke:y?"#374151":"#f0f0f0"}),e.jsx(me,{dataKey:"day",tick:{fontSize:12,fill:y?"#9ca3af":"#6b7280"}}),e.jsx(be,{tickFormatter:a=>`$${a}`,tick:{fontSize:12,fill:y?"#9ca3af":"#6b7280"}}),e.jsx(ie,{formatter:a=>n(Number(a)),labelFormatter:a=>Je[a]||a,contentStyle:{backgroundColor:y?"#1f2937":"white",border:`1px solid ${y?"#374151":"#e5e7eb"}`,borderRadius:"8px",color:y?"#f3f4f6":"#111827"},labelStyle:{color:y?"#f3f4f6":"#111827"}}),e.jsx(ue,{dataKey:"amount",fill:"#6366f1",radius:[4,4,0,0],cursor:"pointer",onClick:a=>{u(null),he(a)}})]})}):e.jsx("div",{className:"h-full flex items-center justify-center text-gray-400 dark:text-gray-500",children:"No data available"})})]})]})}),e.jsx(Le,{isOpen:x.isOpen,onClose:ee,title:x.title,subtitle:x.subtitle,transactions:x.transactions,highlightColor:x.highlightColor,breakdowns:!0})]})}const _e={Sun:"Sunday",Mon:"Monday",Tue:"Tuesday",Wed:"Wednesday",Thu:"Thursday",Fri:"Friday",Sat:"Saturday"};function Jt(){const{getVisibleTransactions:h}=Ee(),{budgets:P}=Ae(),{tags:C}=rt(),{accounts:$}=De(),z=h(),{selectedMonth:m}=qe(),{resolvedTheme:V,activeThemeId:y}=je(),x=V==="dark",[A,W]=c.useState({isOpen:!1,title:"",transactions:[]}),[B,S]=c.useState(!1),[f,w]=c.useState(!1),[R,E]=c.useState(!1),[u,N]=c.useState(null),F=c.useMemo(()=>{if(/^\d{4}$/.test(m))return String(Number(m)-1);const[t,r]=m.split("-").map(Number),i=new Date(t,r-2,1);return`${i.getFullYear()}-${String(i.getMonth()+1).padStart(2,"0")}`},[m]),L=c.useMemo(()=>Ie(z,m),[z,m]),I=c.useMemo(()=>We(L,10),[L]),J=c.useMemo(()=>{const t=Re(L);return Object.entries(t).map(([r,i])=>({day:r.slice(0,3),fullDay:r,amount:i}))},[L]),Z=c.useMemo(()=>Ye(L),[L]),M=c.useMemo(()=>Z.reduce((t,r)=>t+O(r),0),[Z]),G=c.useMemo(()=>{const t=i=>i.replace(/\s+(?=[a-z]*\d)[a-z\d]{6,}$/i,"").replace(/[*#]\d{6,}$/,"").trim(),r=new Map;for(const i of Z){const g=t(i.details),d=g.toLowerCase(),k=r.get(d);k?(k.count++,k.total+=O(i),k.transactions.push(i)):r.set(d,{name:g,count:1,total:O(i),transactions:[i]})}return Array.from(r.values()).sort((i,g)=>g.total-i.total)},[Z]),j=c.useMemo(()=>Oe(z,P,m,F),[z,P,m,F]),v=de(m)?new Date().getMonth()+1:1,p=c.useMemo(()=>Pe(L,P,v),[L,P,v]),D=c.useMemo(()=>{const t=oe(L).filter(i=>i.type!=="Income"&&i.amount<0),r=new Map;for(const i of t){const g=i.details.replace(/\s*(refund|return|credit|reversal)\s*/gi,"").trim()||i.details,d=g.toLowerCase(),k=r.get(d);k?(k.count++,k.total+=Math.abs(O(i)),k.transactions.push(i)):r.set(d,{store:g,count:1,total:Math.abs(O(i)),transactions:[i]})}return Array.from(r.values()).sort((i,g)=>g.total-i.total)},[L]),U=c.useMemo(()=>D.reduce((t,r)=>t+r.total,0),[D]),_=c.useMemo(()=>{const t=oe(L),r=t.filter(g=>g.type==="Fixed Expenses").reduce((g,d)=>g+O(d),0),i=t.filter(g=>g.type==="Variable Expenses").reduce((g,d)=>g+O(d),0);return[{name:"Fixed",value:r,color:"#6366f1",type:"Fixed Expenses"},{name:"Variable",value:i,color:"#f59e0b",type:"Variable Expenses"}].filter(g=>g.value>0)},[L]),ee=c.useMemo(()=>{const t=oe(L),r=new Map;for(const i of t)if(!(!i.tags||i.tags.length===0))for(const g of i.tags){const d=r.get(g)||{total:0,count:0,transactions:[]};d.total+=O(i),d.count+=1,d.transactions.push(i),r.set(g,d)}return C.map(i=>{const g=r.get(i.id);return!g||g.total===0?null:{tag:i,...g}}).filter(i=>i!==null).sort((i,g)=>g.total-i.total)},[L,C]),ae=()=>{W({isOpen:!1,title:"",transactions:[]})},he=t=>{const r=L.filter(i=>i.details.toLowerCase().includes(t.toLowerCase()));W({isOpen:!0,title:t,subtitle:`${r.length} transactions in ${K(m)}`,transactions:r,highlightColor:"#6366f1"})},l=t=>{if(!t||!t.fullDay)return;const r=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"].indexOf(t.fullDay),i=L.filter(g=>g.date.getDay()===r);W({isOpen:!0,title:`${t.fullDay} Spending`,subtitle:K(m),transactions:i,highlightColor:"#6366f1"})},o=t=>{if(!t||!t.type)return;const r=L.filter(i=>i.type===t.type);W({isOpen:!0,title:`${t.name} Expenses`,subtitle:K(m),transactions:r,highlightColor:t.color})},b=t=>{W({isOpen:!0,title:t.name,subtitle:`${t.count} subscription${t.count>1?"s":""}`,transactions:t.transactions,highlightColor:"#6366f1"})},Y=t=>{const r=L.filter(i=>i.category===t);W({isOpen:!0,title:t,subtitle:K(m),transactions:r,highlightColor:re(t)})},T=t=>{W({isOpen:!0,title:`${t.store} Refunds`,subtitle:`${t.transactions.length} refund${t.transactions.length>1?"s":""} totalling ${n(t.total)}`,transactions:t.transactions,highlightColor:"#22c55e"})},q=({year:t,month:r,label:i})=>{const g=z.filter(d=>!d.excludeFromTotals&&d.category!=="Credit Card Payment"&&d.type!=="Income"&&d.date.getFullYear()===t&&d.date.getMonth()===r);W({isOpen:!0,title:`Spending in ${i}`,subtitle:`${g.length} transaction${g.length!==1?"s":""}`,transactions:g,highlightColor:"#6366f1"})},a=t=>{if(t.category){const r=L.filter(i=>i.category===t.category);W({isOpen:!0,title:t.category,subtitle:t.message,transactions:r,highlightColor:t.type==="warning"?"#f59e0b":t.type==="success"?"#22c55e":"#3b82f6"})}};return y==="midnight"?e.jsx(Ot,{}):e.jsxs("div",{className:"space-y-6",children:[e.jsx(yt,{title:"Analytics",badge:e.jsx(ft,{children:K(m)}),subtitle:"Understand your spending patterns"}),e.jsx(fe,{label:"This period"}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[e.jsx(vt,{transactions:L,subtitle:K(m),onAccountClick:t=>{const r=$.find(g=>g.id===t),i=L.filter(g=>g.accountId===t&&!(g.excludeFromAccountTotals??g.excludeFromTotals));W({isOpen:!0,title:r?.name||"Account",subtitle:K(m),transactions:i,highlightColor:"#0ea5e9"})}}),e.jsx(kt,{insights:j,onInsightClick:a}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100 dark:border-gray-700/60",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"app-label text-gray-500 dark:text-gray-400",children:"Category breakdown"}),e.jsx("button",{onClick:()=>N("categories"),className:"p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors",title:"Expand",children:e.jsx(te,{size:18})})]}),e.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400 mb-4",children:"Tap a category to view transactions"}),e.jsx("div",{className:"md:hidden space-y-2",children:(B?p:p.slice(0,5)).map(t=>{const r=p.reduce((g,d)=>g+Math.max(0,d.total),0),i=r>0?Math.max(0,t.total)/r*100:0;return e.jsxs("button",{onClick:()=>Y(t.category),className:"w-full text-left p-3 rounded-xl border border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/40",children:[e.jsxs("div",{className:"flex items-center justify-between gap-2",children:[e.jsxs("div",{className:"flex items-center gap-2 min-w-0",children:[e.jsx("span",{className:"w-2.5 h-2.5 rounded-full shrink-0",style:{backgroundColor:re(t.category)}}),e.jsx("span",{className:"text-sm font-medium text-gray-900 dark:text-white truncate",children:t.category})]}),e.jsx("span",{className:"text-sm font-semibold text-gray-900 dark:text-white shrink-0",children:n(t.total)})]}),e.jsxs("div",{className:"mt-1 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400",children:[e.jsxs("span",{children:[t.count," txn",t.count===1?"":"s"]}),e.jsxs("span",{children:[i.toFixed(1),"% of expenses"]})]}),t.budget?e.jsxs("div",{className:"mt-2",children:[e.jsx("div",{className:"h-1.5 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden",children:e.jsx("div",{className:"h-full rounded-full",style:{width:`${Math.min(100,t.percentUsed||0)}%`,backgroundColor:ve(t.percentUsed||0)}})}),e.jsxs("p",{className:"text-[11px] text-gray-400 dark:text-gray-500 mt-0.5",children:[n(t.total)," / ",n(t.budget)]})]}):null]},t.category)})}),e.jsx("div",{className:"hidden md:block overflow-x-auto dark-scrollbar",children:e.jsxs("table",{className:"w-full",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider border-b border-gray-100 dark:border-gray-700",children:[e.jsx("th",{className:"pb-3",children:"Category"}),e.jsx("th",{className:"pb-3 hidden lg:table-cell",style:{minWidth:"120px"},children:"Budget"}),e.jsx("th",{className:"pb-3 text-right hidden sm:table-cell",children:"Transactions"}),e.jsx("th",{className:"pb-3 text-right",children:"Total"}),e.jsx("th",{className:"pb-3 text-right hidden md:table-cell",children:"% of Expenses"})]})}),e.jsx("tbody",{className:"divide-y divide-gray-50 dark:divide-gray-700",children:(B?p:p.slice(0,5)).map(t=>{const r=p.reduce((g,d)=>g+Math.max(0,d.total),0),i=r>0?Math.max(0,t.total)/r*100:0;return e.jsxs("tr",{onClick:()=>Y(t.category),className:"cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors",children:[e.jsx("td",{className:"py-3",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"w-2 h-2 rounded-full",style:{backgroundColor:re(t.category)}}),e.jsx("span",{className:"text-sm text-gray-900 dark:text-white",children:t.category})]})}),e.jsx("td",{className:"py-3 hidden lg:table-cell",children:t.budget?e.jsxs("div",{children:[e.jsx("div",{className:"h-1.5 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden",children:e.jsx("div",{className:"h-full rounded-full transition-all",style:{width:`${Math.min(100,t.percentUsed||0)}%`,backgroundColor:ve(t.percentUsed||0)}})}),e.jsxs("p",{className:"text-xs text-gray-400 dark:text-gray-500 mt-0.5",children:[n(t.total)," / ",n(t.budget)]})]}):e.jsx("span",{className:"text-xs text-gray-400 dark:text-gray-500",children:"-"})}),e.jsx("td",{className:"py-3 text-right text-sm text-gray-600 dark:text-gray-400 hidden sm:table-cell",children:t.count}),e.jsx("td",{className:"py-3 text-right text-sm font-medium text-gray-900 dark:text-white",children:n(t.total)}),e.jsxs("td",{className:"py-3 text-right text-sm text-gray-600 dark:text-gray-400 hidden md:table-cell",children:[i.toFixed(1),"%"]})]},t.category)})})]})}),p.length>5&&e.jsx("button",{onClick:()=>S(!B),className:"mt-3 text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium",children:B?"Show less":`View all ${p.length} categories`})]})]}),e.jsx(nt,{transactions:L,subtitle:K(m),sideBySide:!0}),e.jsx(fe,{label:"Typical month"}),e.jsx(xt,{transactions:z}),e.jsx(fe,{label:"Recurring & habits"}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100 dark:border-gray-700/60",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h3",{className:"app-label text-gray-500 dark:text-gray-400",children:"Subscriptions"}),e.jsx("button",{onClick:()=>N("subscriptions"),className:"p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors",title:"Expand",children:e.jsx(te,{size:18})})]}),e.jsxs("p",{className:"font-display text-2xl font-bold tabular-nums text-indigo-600 dark:text-indigo-400 mb-4",children:[n(M),"/",de(m)?"year":"month"]}),G.length===0?e.jsx("p",{className:"text-gray-400 dark:text-gray-500 text-sm",children:"No subscriptions found this month"}):e.jsx("div",{className:"space-y-2",children:(f?G:G.slice(0,5)).map(t=>e.jsxs("div",{onClick:()=>b(t),className:"flex items-center justify-between py-2 px-2 border-b border-gray-100 dark:border-gray-700 last:border-0 rounded cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:t.name}),t.count>1&&e.jsxs("span",{className:"text-xs text-gray-400 dark:text-gray-500",children:[t.count," payments"]})]}),e.jsx("span",{className:"text-sm font-medium text-gray-900 dark:text-white",children:n(t.total)})]},t.name))}),G.length>5&&e.jsx("button",{onClick:()=>w(!f),className:"mt-3 text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium",children:f?"Show less":`View all ${G.length} subscriptions`})]}),e.jsx(Ct,{purchases:I,onPurchaseClick:he})]}),e.jsx(fe,{label:"Refunds & trends"}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100 dark:border-gray-700/60",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h3",{className:"app-label text-gray-500 dark:text-gray-400",children:"Refunds"}),e.jsx("button",{onClick:()=>N("refunds"),className:"p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors",title:"Expand",children:e.jsx(te,{size:18})})]}),e.jsx("p",{className:"font-display text-2xl font-bold tabular-nums text-pos mb-4",children:n(U)}),D.length===0?e.jsx("p",{className:"text-gray-400 dark:text-gray-500 text-sm",children:"No refunds this month"}):e.jsx("div",{className:"space-y-2",children:(R?D:D.slice(0,5)).map(t=>e.jsxs("div",{onClick:()=>T(t),className:"flex items-center justify-between py-2 px-2 border-b border-gray-100 dark:border-gray-700 last:border-0 rounded cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:t.store}),e.jsxs("span",{className:"text-xs text-gray-400 dark:text-gray-500",children:[t.count," refund",t.count>1?"s":""]})]}),e.jsxs("span",{className:"text-sm font-medium tabular-nums text-pos",children:["+",n(t.total)]})]},t.store))}),D.length>5&&e.jsx("button",{onClick:()=>E(!R),className:"mt-3 text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium",children:R?"Show less":`View all ${D.length} refunds`})]}),e.jsx(zt,{transactions:z,onMonthSelect:q})]}),e.jsx(fe,{label:"Spending patterns"}),ee.length>0&&e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100 dark:border-gray-700/60",children:[e.jsx("h3",{className:"app-label text-gray-500 dark:text-gray-400 mb-4",children:"Spending by tag"}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3",children:ee.map(({tag:t,total:r,count:i,transactions:g})=>e.jsxs("div",{onClick:()=>W({isOpen:!0,title:t.name,subtitle:`${K(m)} — ${i} transaction${i!==1?"s":""}`,transactions:g,highlightColor:t.color}),className:"flex items-center gap-3 p-3 rounded-xl border border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 cursor-pointer transition-colors",children:[e.jsx("div",{className:"w-3 h-3 rounded-full flex-shrink-0",style:{backgroundColor:t.color}}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("p",{className:"text-sm font-medium text-gray-900 dark:text-white truncate",children:t.name}),e.jsxs("p",{className:"text-xs text-gray-400 dark:text-gray-500",children:[i," transaction",i!==1?"s":""]})]}),e.jsx("span",{className:"text-sm font-semibold text-gray-900 dark:text-white",children:n(r)})]},t.id))})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100 dark:border-gray-700/60",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"app-label text-gray-500 dark:text-gray-400",children:"Fixed vs variable"}),e.jsx("button",{onClick:()=>N("fixedVariable"),className:"p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors",title:"Expand",children:e.jsx(te,{size:18})})]}),e.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400 mb-4",children:"Click a section to view transactions"}),e.jsx("div",{className:"h-48 md:h-64",children:_.length>0?e.jsx(ne,{width:"100%",height:"100%",children:e.jsxs(Se,{children:[e.jsx(Me,{data:_,cx:"50%",cy:"50%",innerRadius:50,outerRadius:80,paddingAngle:5,dataKey:"value",label:({name:t,percent:r})=>`${t} ${((r||0)*100).toFixed(0)}%`,onClick:o,cursor:"pointer",children:_.map((t,r)=>e.jsx(Fe,{fill:t.color},`cell-${r}`))}),e.jsx(ie,{formatter:t=>n(Number(t)),contentStyle:{backgroundColor:x?"#1f2937":"white",border:`1px solid ${x?"#374151":"#e5e7eb"}`,borderRadius:"8px",color:x?"#f3f4f6":"#111827"}})]})}):e.jsx("div",{className:"h-full flex items-center justify-center text-gray-400 dark:text-gray-500",children:"No expense data"})}),e.jsxs("div",{className:"flex justify-center gap-6 mt-4",children:[e.jsxs("button",{onClick:()=>o({name:"Fixed",type:"Fixed Expenses",color:"#6366f1"}),className:"flex items-center gap-2 px-3 py-1 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors",children:[e.jsx("div",{className:"w-3 h-3 rounded-full bg-indigo-500"}),e.jsx("span",{className:"text-sm text-gray-600 dark:text-gray-300",children:"Fixed"})]}),e.jsxs("button",{onClick:()=>o({name:"Variable",type:"Variable Expenses",color:"#f59e0b"}),className:"flex items-center gap-2 px-3 py-1 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors",children:[e.jsx("div",{className:"w-3 h-3 rounded-full bg-amber-500"}),e.jsx("span",{className:"text-sm text-gray-600 dark:text-gray-300",children:"Variable"})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100 dark:border-gray-700/60",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"app-label text-gray-500 dark:text-gray-400",children:"Spending by day of week"}),e.jsx("button",{onClick:()=>N("dayOfWeek"),className:"p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors",title:"Expand",children:e.jsx(te,{size:18})})]}),e.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400 mb-4",children:"Click a bar to view transactions for that day"}),e.jsx("div",{className:"h-48 md:h-64",children:J.some(t=>t.amount>0)?e.jsx(ne,{width:"100%",height:"100%",children:e.jsxs(ke,{data:J,children:[e.jsx(pe,{strokeDasharray:"3 3",stroke:x?"#374151":"#f0f0f0"}),e.jsx(me,{dataKey:"day",tick:{fontSize:12,fill:x?"#9ca3af":"#6b7280",className:"font-axis"}}),e.jsx(be,{tickFormatter:t=>`$${t}`,tick:{fontSize:12,fill:x?"#9ca3af":"#6b7280",className:"font-axis"}}),e.jsx(ie,{formatter:t=>n(Number(t)),labelFormatter:t=>_e[t]||t,contentStyle:{backgroundColor:x?"#1f2937":"white",border:`1px solid ${x?"#374151":"#e5e7eb"}`,borderRadius:"8px",color:x?"#f3f4f6":"#111827"},labelStyle:{color:x?"#f3f4f6":"#111827"}}),e.jsx(ue,{dataKey:"amount",fill:"#6366f1",radius:[4,4,0,0],cursor:"pointer",onClick:l})]})}):e.jsx("div",{className:"h-full flex items-center justify-center text-gray-400 dark:text-gray-500",children:"No data available"})})]})]}),e.jsx(fe,{label:"Year over year & reports"}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsx(Mt,{transactions:z}),e.jsx(Et,{selectedMonth:m})]}),u&&e.jsxs(jt,{isOpen:!0,onClose:()=>N(null),className:u==="fixedVariable"||u==="dayOfWeek"?"md:max-w-5xl":"md:max-w-4xl",children:[e.jsxs("div",{className:"flex items-center justify-between px-4 sm:px-6 pb-4 pt-2 md:pt-5 border-b border-gray-200 dark:border-gray-700",children:[e.jsxs("h3",{className:"text-lg sm:text-xl font-semibold font-display text-gray-900 dark:text-white",children:[u==="categories"&&`Category Breakdown (${p.length})`,u==="subscriptions"&&`Subscriptions (${G.length})`,u==="refunds"&&`Refunds (${D.length})`,u==="fixedVariable"&&"Fixed vs Variable Expenses",u==="dayOfWeek"&&"Spending by Day of Week"]}),e.jsx("button",{onClick:()=>N(null),"aria-label":"Close",className:"grid place-items-center w-10 h-10 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors",children:e.jsx(ce,{size:20})})]}),e.jsxs("div",{className:"p-4 sm:p-6 overflow-y-auto flex-1 dark-scrollbar overscroll-none-safe",children:[u==="categories"&&e.jsx("div",{className:"overflow-x-auto dark-scrollbar",children:e.jsxs("table",{className:"w-full",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider border-b border-gray-100 dark:border-gray-700",children:[e.jsx("th",{className:"pb-3",children:"Category"}),e.jsx("th",{className:"pb-3",style:{minWidth:"150px"},children:"Budget"}),e.jsx("th",{className:"pb-3 text-right",children:"Transactions"}),e.jsx("th",{className:"pb-3 text-right",children:"Total"}),e.jsx("th",{className:"pb-3 text-right",children:"% of Expenses"})]})}),e.jsx("tbody",{className:"divide-y divide-gray-50 dark:divide-gray-700",children:p.map(t=>{const r=p.reduce((g,d)=>g+Math.max(0,d.total),0),i=r>0?Math.max(0,t.total)/r*100:0;return e.jsxs("tr",{onClick:()=>{N(null),Y(t.category)},className:"cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors",children:[e.jsx("td",{className:"py-3",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"w-2 h-2 rounded-full",style:{backgroundColor:re(t.category)}}),e.jsx("span",{className:"text-sm text-gray-900 dark:text-white",children:t.category})]})}),e.jsx("td",{className:"py-3",children:t.budget?e.jsxs("div",{children:[e.jsx("div",{className:"h-1.5 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden",children:e.jsx("div",{className:"h-full rounded-full transition-all",style:{width:`${Math.min(100,t.percentUsed||0)}%`,backgroundColor:ve(t.percentUsed||0)}})}),e.jsxs("p",{className:"text-xs text-gray-400 dark:text-gray-500 mt-0.5",children:[n(t.total)," / ",n(t.budget)]})]}):e.jsx("span",{className:"text-xs text-gray-400 dark:text-gray-500",children:"-"})}),e.jsx("td",{className:"py-3 text-right text-sm text-gray-600 dark:text-gray-400",children:t.count}),e.jsx("td",{className:"py-3 text-right text-sm font-medium text-gray-900 dark:text-white",children:n(t.total)}),e.jsxs("td",{className:"py-3 text-right text-sm text-gray-600 dark:text-gray-400",children:[i.toFixed(1),"%"]})]},t.category)})})]})}),u==="subscriptions"&&e.jsxs("div",{className:"space-y-2",children:[G.map(t=>e.jsxs("div",{onClick:()=>{N(null),b(t)},className:"flex items-center justify-between py-3 px-3 border-b border-gray-100 dark:border-gray-700 last:border-0 rounded cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:t.name}),t.count>1&&e.jsxs("span",{className:"text-xs text-gray-400 dark:text-gray-500",children:[t.count," payments"]})]}),e.jsx("span",{className:"text-sm font-medium text-gray-900 dark:text-white",children:n(t.total)})]},t.name)),e.jsxs("div",{className:"pt-3 border-t border-gray-200 dark:border-gray-600 flex justify-between px-3",children:[e.jsx("span",{className:"text-sm font-semibold text-gray-900 dark:text-white",children:"Total"}),e.jsx("span",{className:"text-sm font-semibold text-indigo-600 dark:text-indigo-400",children:n(M)})]})]}),u==="refunds"&&e.jsxs("div",{className:"space-y-2",children:[D.map(t=>e.jsxs("div",{onClick:()=>{N(null),T(t)},className:"flex items-center justify-between py-3 px-3 border-b border-gray-100 dark:border-gray-700 last:border-0 rounded cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:t.store}),e.jsxs("span",{className:"text-xs text-gray-400 dark:text-gray-500",children:[t.count," refund",t.count>1?"s":""]})]}),e.jsxs("span",{className:"text-sm font-medium text-green-600 dark:text-green-400",children:["+",n(t.total)]})]},t.store)),e.jsxs("div",{className:"pt-3 border-t border-gray-200 dark:border-gray-600 flex justify-between px-3",children:[e.jsx("span",{className:"text-sm font-semibold text-gray-900 dark:text-white",children:"Total Refunds"}),e.jsxs("span",{className:"text-sm font-semibold text-green-600 dark:text-green-400",children:["+",n(U)]})]})]}),u==="fixedVariable"&&e.jsxs("div",{children:[e.jsx("div",{className:"h-[40vh] md:h-[50vh]",children:_.length>0?e.jsx(ne,{width:"100%",height:"100%",children:e.jsxs(Se,{children:[e.jsx(Me,{data:_,cx:"50%",cy:"50%",innerRadius:80,outerRadius:140,paddingAngle:5,dataKey:"value",label:({name:t,percent:r})=>`${t} ${((r||0)*100).toFixed(0)}%`,onClick:t=>{N(null),o(t)},cursor:"pointer",children:_.map((t,r)=>e.jsx(Fe,{fill:t.color},`cell-${r}`))}),e.jsx(ie,{formatter:t=>n(Number(t)),contentStyle:{backgroundColor:x?"#1f2937":"white",border:`1px solid ${x?"#374151":"#e5e7eb"}`,borderRadius:"8px",color:x?"#f3f4f6":"#111827"}})]})}):e.jsx("div",{className:"h-full flex items-center justify-center text-gray-400 dark:text-gray-500",children:"No expense data"})}),e.jsxs("div",{className:"flex justify-center gap-6 mt-4",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-3 h-3 rounded-full bg-indigo-500"}),e.jsxs("span",{className:"text-sm text-gray-600 dark:text-gray-300",children:["Fixed: ",n(_.find(t=>t.name==="Fixed")?.value||0)]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-3 h-3 rounded-full bg-amber-500"}),e.jsxs("span",{className:"text-sm text-gray-600 dark:text-gray-300",children:["Variable: ",n(_.find(t=>t.name==="Variable")?.value||0)]})]})]})]}),u==="dayOfWeek"&&e.jsx("div",{className:"h-[40vh] md:h-[50vh]",children:J.some(t=>t.amount>0)?e.jsx(ne,{width:"100%",height:"100%",children:e.jsxs(ke,{data:J,children:[e.jsx(pe,{strokeDasharray:"3 3",stroke:x?"#374151":"#f0f0f0"}),e.jsx(me,{dataKey:"day",tick:{fontSize:12,fill:x?"#9ca3af":"#6b7280",className:"font-axis"}}),e.jsx(be,{tickFormatter:t=>`$${t}`,tick:{fontSize:12,fill:x?"#9ca3af":"#6b7280",className:"font-axis"}}),e.jsx(ie,{formatter:t=>n(Number(t)),labelFormatter:t=>_e[t]||t,contentStyle:{backgroundColor:x?"#1f2937":"white",border:`1px solid ${x?"#374151":"#e5e7eb"}`,borderRadius:"8px",color:x?"#f3f4f6":"#111827"},labelStyle:{color:x?"#f3f4f6":"#111827"}}),e.jsx(ue,{dataKey:"amount",fill:"#6366f1",radius:[4,4,0,0],cursor:"pointer",onClick:t=>{N(null),l(t)}})]})}):e.jsx("div",{className:"h-full flex items-center justify-center text-gray-400 dark:text-gray-500",children:"No data available"})})]})]}),e.jsx(Le,{isOpen:A.isOpen,onClose:ae,title:A.title,subtitle:A.subtitle,transactions:A.transactions,highlightColor:A.highlightColor,breakdowns:!0})]})}export{Jt as default};
