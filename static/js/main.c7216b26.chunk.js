(this.webpackJsonpAWEasy=this.webpackJsonpAWEasy||[]).push([[0],{327:function(e,t,n){},39:function(e,t,n){"use strict";(function(e){n.d(t,"b",(function(){return x})),n.d(t,"i",(function(){return g})),n.d(t,"d",(function(){return m})),n.d(t,"g",(function(){return h})),n.d(t,"e",(function(){return w})),n.d(t,"c",(function(){return v})),n.d(t,"f",(function(){return y})),n.d(t,"h",(function(){return _})),n.d(t,"a",(function(){return S}));var a=n(88),r=(n(21),n(6)),c=n.n(r),o=n(15),s=n(402),i=(n(186),n(227).Serialize),u=n(489),l=u.TextDecoder,d=u.TextEncoder,p=n(492).Int64LE,f=n(47),b=function(e){var t=new i.SerialBuffer({textEncoder:new d,textDecoder:new l});return t.pushName(e),t.array},j=function(e){e=new p(e);var t=new i.SerialBuffer({textEncoder:new d,textDecoder:new l});return t.pushArray(e.toArray()),t.getName()},h=function(){var e=Object(o.a)(c.a.mark((function e(t,n,a,r){var o,s,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.get_table_rows({code:t,scope:t,table:"players",lower_bound:n,upper_bound:n});case 2:if(o=e.sent,s={tag:"",avatar:""},!o.rows.length){e.next=11;break}if(s.tag=o.rows[0].tag,!(o.rows[0].avatar>0)){e.next=11;break}return e.next=9,r.getAsset(o.rows[0].avatar);case 9:(i=e.sent)&&(s.avatar=i);case 11:return e.abrupt("return",s);case 12:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),x=function(){var e=Object(o.a)(c.a.mark((function e(t,n,a,r){var o,s,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.get_table_rows({code:t,scope:t,table:"bags",lower_bound:n,upper_bound:n});case 2:if(o=e.sent,s=[],!o.rows.length){e.next=9;break}return i=o.rows[0].items.map((function(e){return r.getAsset(e)})),e.next=8,Promise.all(i);case 8:return e.abrupt("return",e.sent);case 9:return e.abrupt("return",s);case 10:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),g=function(){var e=Object(o.a)(c.a.mark((function e(t,n,a,r){var o,s,i,u=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=u.length>4&&void 0!==u[4]?u[4]:"active",s=[{account:t,name:"setbag",authorization:[{actor:n,permission:o}],data:{account:n,items:a.slice(0,3)}}],e.next=4,r.transact({actions:s},{blocksBehind:3,expireSeconds:90});case 4:return i=e.sent,e.abrupt("return",i);case 6:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),O=function(){var e=Object(o.a)(c.a.mark((function e(t,n,a,r){var o,s,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.get_table_rows({code:t,scope:t,table:"landregs",lower_bound:n,upper_bound:n});case 3:if(o=e.sent,s="federation",o.rows.length&&(s=o.rows[0].owner),s){e.next=8;break}throw new Error("Land owner not found for land id ".concat(n));case 8:return e.next=10,r.getAsset(n);case 10:return(i=e.sent).data.planet=j(i.data.planet),i.data.img=i.data.img||"",i.owner=i.owner||s,e.abrupt("return",i);case 17:return e.prev=17,e.t0=e.catch(0),console.log("Error in getLandById ".concat(e.t0.message)),e.abrupt("return",null);case 21:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(t,n,a,r){return e.apply(this,arguments)}}(),m=function(){var e=Object(o.a)(c.a.mark((function e(t,n,a,r,o){var s,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.get_table_rows({code:n,scope:n,table:"miners",lower_bound:a,upper_bound:a});case 3:if(0!==(s=e.sent).rows.length){e.next=8;break}return e.abrupt("return",null);case 8:i=s.rows[0].current_land;case 9:return e.next=11,O(t,i,r,o);case 11:return e.abrupt("return",e.sent);case 14:return e.prev=14,e.t0=e.catch(0),console.error("Failed to get land - ".concat(e.t0.message)),e.abrupt("return",null);case 18:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t,n,a,r,c){return e.apply(this,arguments)}}(),w=function(e){var t={delay:0,difficulty:0,ease:0};return t.delay+=e.data.delay,t.difficulty+=e.data.difficulty,t.ease+=e.data.ease,t},v=function(e){for(var t={delay:0,difficulty:0,ease:0},n=65535,a=0;a<e.length;a++)e[a].data.delay<n&&(n=e[a].data.delay),t.delay+=e[a].data.delay,t.difficulty+=e[a].data.difficulty,t.ease+=e[a].data.ease/10;return 2===e.length?t.delay-=parseInt(n/2):3===e.length&&(t.delay-=n),t},y=function(){var e=Object(o.a)(c.a.mark((function e(t,n,a,r){var o,s,i,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(n),e.next=3,r.get_table_rows({code:t,scope:t,table:"miners",lower_bound:n,upper_bound:n});case 3:return o=e.sent,s=-1,i=f().valueOf(),console.log("Delay = ".concat(a.delay)),o.rows.length&&"0000000000000000000000000000000000000000000000000000000000000000"!==o.rows[0].last_mine_tx&&(console.log("Last mine was at ".concat(f(o.rows[0].last_mine).add(7,"hour").toISOString(),", now is ").concat(f().toISOString())),u=f(o.rows[0].last_mine).add(7,"hour").valueOf(),(s=u+1e3*a.delay-i)<0&&(s=0)),e.abrupt("return",s);case 9:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),_=function(){var e=Object(o.a)(c.a.mark((function e(t,n,a){var r,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.get_table_rows({code:t,scope:t,table:"miners",lower_bound:n,upper_bound:n});case 2:return r=e.sent,o="0000000000000000000000000000000000000000000000000000000000000000",r.rows.length&&(o=r.rows[0].last_mine_tx),e.abrupt("return",o);case 6:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),S=function(){var e=Object(o.a)(c.a.mark((function e(t){var n,r,u,p,f;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=function(){return(r=Object(o.a)(c.a.mark((function e(t){var n,r,o,i,u,l,d,p,f,b,j,h,x,g,O,m,w,v,y;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=function(e){return Object(a.a)(new Uint8Array(e)).map((function(e){return e.toString(16).padStart(2,"0")})).join("")},n=function(){for(var e=new Uint8Array(8),t=0;t<8;t++){var n=Math.floor(255*Math.random());e[t]=n}return e},console.log("call temp doworkwoker"),o=t.data,o.mining_account,i=o.account,u=o.account_str,l=o.difficulty,o.last_mine_tx,d=o.last_mine_arr,i=i.slice(0,8),p=".wam"===u.substr(-4),f=!1,b=0,0,O=(new Date).getTime(),console.log("while lopp check");case 11:if(f){e.next=30;break}return x=n(),(m=new Uint8Array(i.length+d.length+x.length)).set(i),m.set(d,i.length),m.set(x,i.length+d.length),e.next=19,s.subtle.digest("SHA-256",m.slice(0,24));case 19:if(j=e.sent,h=r(j),(f=p?"0000"===h.substr(0,4):"000000"===h.substr(0,6))&&(g=p?parseInt(h.substr(4,1),16):parseInt(h.substr(6,1),16),f&=g<=l),++b%1e6===0&&console.log("Still mining - tried ".concat(b," iterations")),f||(j=null),!(b>=1e7)){e.next=28;break}return e.abrupt("break",30);case 28:e.next=11;break;case 30:return w=(new Date).getTime(),v=r(x),console.log("Found hash in ".concat(b," iterations with ").concat(i," ").concat(v,", last = ").concat(g,", hex_digest ").concat(h," taking ").concat((w-O)/1e3,"s")),y={account:u,rand_str:v,hex_digest:h},this.postMessage(y),e.abrupt("return",y);case 36:case"end":return e.stop()}}),e,this)})))).apply(this,arguments)},n=function(e){return r.apply(this,arguments)},console.log("mining_params",t),t.last_mine_tx=t.last_mine_tx.substr(0,16),t.last_mine_arr=(j=t.last_mine_tx,new Uint8Array(j.match(/.{1,2}/g).map((function(e){return parseInt(e,16)})))),u=new i.SerialBuffer({textEncoder:new d,textDecoder:new l}),t.sb=u,t.account_str=t.account,t.account=b(t.account);try{window.URL=window.URL||window.webkitURL,p=new Blob(["onmessage = ".concat(n.toString())],{type:"text/javascript"})}catch(h){console.log("fail create blob")}return console.log(p),(f=new Worker(URL.createObjectURL(p))).postMessage(t),e.next=15,new Promise((function(e){f.onmessage=function(t){e(t.data)}}));case 15:return e.abrupt("return",e.sent);case 16:case"end":return e.stop()}var j}),e)})));return function(t){return e.apply(this,arguments)}}()}).call(this,n(60).Buffer)},406:function(e,t){},408:function(e,t){},418:function(e,t){},420:function(e,t){},448:function(e,t){},450:function(e,t){},451:function(e,t){},456:function(e,t){},458:function(e,t){},471:function(e,t){},483:function(e,t){},486:function(e,t){},601:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(36),c=n.n(r),o=(n(327),n(328),n(21)),s=n(33),i=(n(319),n(32)),u=n(108),l=n(603),d=n(92),p=n(6),f=n.n(p),b=n(15),j=n(88),h=n(62),x=n.n(h),g=n(608),O=n(606),m=n(609),w=n(610),v=n(605),y=n(607),_=n(133),S=n(168),k=n(79),A=Object(a.createContext)(),C=n(47),I=n.n(C),E=n(153),L="m.federation",F=n(227),W=(F.Api,F.JsonRpc),R=(F.RpcError,n(233)),M=R.ExplorerApi,T=(R.RpcApi,n(186)),B=new M("https://wax.api.atomicassets.io","atomicassets",{fetch:T,rateLimit:4}),U=(new W("https://api.waxsweden.org",{fetch:T}),n(39)),D=(n(186),n(493),n(8)),N=g.a.Panel,P=O.a.TextArea,J=new E.WaxJS("https://api.waxsweden.org"),z=function(){var e=Object(a.useContext)(A),t="federation",n=["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23"],r=Object(a.useState)(90),c=Object(o.a)(r,2),i=c[0],u=c[1],l=Object(a.useState)(e.account),d=Object(o.a)(l,2),p=d[0],h=d[1],O=Object(a.useState)("0 WAX"),C=Object(o.a)(O,2),E=C[0],F=C[1],W=Object(a.useState)("0 TLM"),R=Object(o.a)(W,2),M=R[0],T=R[1],z=Object(a.useState)(100),G=Object(o.a)(z,2),H=G[0],X=G[1],q=Object(a.useState)(100),K=Object(o.a)(q,2),V=K[0],Q=K[1],Y=Object(a.useState)(100),Z=Object(o.a)(Y,2),$=Z[0],ee=Z[1],te=Object(a.useState)([]),ne=Object(o.a)(te,2),ae=ne[0],re=ne[1],ce=Object(a.useState)([]),oe=Object(o.a)(ce,2),se=(oe[0],oe[1]),ie=Object(a.useState)(""),ue=Object(o.a)(ie,2),le=ue[0],de=ue[1],pe=Object(a.useState)(""),fe=Object(o.a)(pe,2),be=fe[0],je=fe[1],he=Object(a.useState)("Loading..."),xe=Object(o.a)(he,2),ge=xe[0],Oe=xe[1],me=Object(a.useState)([]),we=Object(o.a)(me,2),ve=we[0],ye=(we[1],Object(a.useState)(["7","8","9","10","11","13","14","15","16","17","19","20","21","22","23"])),_e=Object(o.a)(ye,2),Se=_e[0],ke=_e[1],Ae=Object(a.useState)(!1),Ce=Object(o.a)(Ae,2),Ie=Ce[0],Ee=Ce[1],Le=Object(a.useState)(!1),Fe=Object(o.a)(Le,2),We=(Fe[0],Fe[1],Object(a.useState)({time:!0===Se.includes(I()().hour().toString()),delay:!1,cpu:!1})),Re=Object(o.a)(We,2),Me=Re[0],Te=Re[1],Be=function(){var t={code:"eosio.token",account:p,symbol:"WAX"};return x.a.post("https://wax.greymass.com/v1/chain/get_currency_balance",JSON.stringify(t)).then((function(t){1===(null===t||void 0===t?void 0:t.data.length)&&(e.wax=t.data[0],F(t.data[0]))})),!0},Ue=function(){var t={json:!0,code:"alien.worlds",scope:p,table:"accounts",table_key:"",lower_bound:"",upper_bound:"",index_position:1,key_type:"",limit:1,reverse:!1,show_payer:!1};return x.a.post("https://api.waxsweden.org/v1/chain/get_table_rows",t).then((function(t){var n,a,r,c;(null===t||void 0===t?void 0:t.data.rows.length)>=1&&(e.tlm=null===(n=t.data)||void 0===n||null===(a=n.rows[0])||void 0===a?void 0:a.balance,T(null===(r=t.data)||void 0===r||null===(c=r.rows[0])||void 0===c?void 0:c.balance))})),!0},De=function(){var e={account_name:p};x.a.post("https://api.waxsweden.org/v1/chain/get_account",e).then((function(e){var t=(e.data.cpu_limit.used/e.data.cpu_limit.max*100).toFixed(2).toString(),n=(e.data.ram_usage/e.data.ram_quota*100).toFixed(2).toString(),a=(e.data.net_limit.used/e.data.net_limit.max*100).toFixed(2).toString();X(+t),Q(+n),ee(+a)}))},Ne=function(){var e=Object(b.a)(f.a.mark((function e(n){var a,r,c,o,s;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(J),Oe("Get delay"),e.next=5,U.b(L,n,J.api.rpc,B);case 5:return a=e.sent,Oe("Get bag"),e.next=9,U.d(t,L,n,J.api.rpc,B);case 9:return r=e.sent,Oe("Get land"),re(a.filter((function(e){return"tool.worlds"===e.schema.schema_name})).map((function(e){return{code:e.asset_id,name:e.name}}))),se(a),de("".concat(r.asset_id," : ").concat(r.name," (").concat(r.data.x,"x").concat(r.data.y,") (Com.").concat(r.data.commission/100,"%)")),c=U.c(a),o=U.e(r),c.delay*=o.delay/10,c.difficulty+=o.difficulty,Oe("Get next time mine"),e.next=21,U.f(L,n,c,J.api.rpc);case 21:return s=e.sent,e.abrupt("return",s);case 25:e.prev=25,e.t0=e.catch(0),console.log(e.t0);case 28:case"end":return e.stop()}}),e,null,[[0,25]])})));return function(t){return e.apply(this,arguments)}}(),Pe=function(){var e=Object(b.a)(f.a.mark((function e(){var t,n,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ne(p);case 2:t=e.sent,n=Math.floor(t/1e3),a=setInterval((function(){console.log("Loop delay ".concat(n," sec")),console.log(Me);var e,t=Math.floor(n/60);t>=60&&(e=Math.floor(t/60));var r=n-60*t;0===n?(je(""),console.log("clear time"),clearInterval(a),console.log(Me),Te(Object(s.a)(Object(s.a)({},Me),{},{delay:!0}))):(n--,je("".concat(e?e.toString().padStart(2,"0")+":":"").concat(t.toString().padStart(2,"0"),":").concat(r.toString().padStart(2,"0"))))}),1e3);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Je=function(){var e=Object(b.a)(f.a.mark((function e(t){var n,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U.b(L,t,J.api.rpc,B);case 3:return n=e.sent,a=U.c(n),e.abrupt("return",a.difficulty);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),ze=function(){var e=Object(b.a)(f.a.mark((function e(n){var a,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U.d(t,L,n,J.api.rpc,B);case 3:return a=e.sent,r=U.e(a),e.abrupt("return",r.difficulty);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),Ge=function(){var e=Object(b.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=Object(b.a)(f.a.mark((function e(n,a){var r,c,o,s;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Je(t);case 2:return r=e.sent,e.next=5,ze(t);case 5:return c=e.sent,o=r+c,console.log("difficulty",o),console.log("start doWork = "+Date.now()),e.next=11,U.h(L,t,J.api.rpc);case 11:s=e.sent,U.a({mining_account:L,account:t,difficulty:o,last_mine_tx:s}).then((function(e){console.log("end doWork = "+Date.now()),console.log(e),n(e)})).catch((function(e){return a(e)}));case 13:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),He=function(){var e=Object(b.a)(f.a.mark((function e(t,n,a,r,c){var o,s,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),console.log(n),console.log(a),console.log(r),console.log(c),e.prev=5,o=JSON.parse(r),s={miner:o.account,nonce:o.rand_str},console.log("Claiming Now"),e.next=11,Xe(L,n,"active",s,c,J.api);case 11:i=e.sent,console.log("Claim Data"+i),Oe("Claiming..."),Oe("Claim data : ".concat(i.toString())),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(5),console.log(e.t0),Oe("claim fail");case 21:case"end":return e.stop()}}),e,null,[[5,17]])})));return function(t,n,a,r,c){return e.apply(this,arguments)}}(),Xe=function(e,t,n,a,r,c){return new Promise(function(){var r=Object(b.a)(f.a.mark((function r(o,i){var u,l;return f.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,u=[{account:e,name:"mine",authorization:[{actor:t,permission:n}],data:a}],r.next=4,c.transact({actions:u},{blocksBehind:3,expireSeconds:90});case 4:l=r.sent,console.log(l.transaction_id),Oe("Transaction claiming"),Ee(!1),Te(Object(s.a)(Object(s.a)({},Me),{},{delay:!1})),Object(b.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Pe());case 1:case"end":return e.stop()}}),e)})))(),o(l.transaction_id),r.next=17;break;case 13:r.prev=13,r.t0=r.catch(0),console.log("Failed to push mine results ".concat(r.t0.message)),i(r.t0);case 17:case"end":return r.stop()}}),r,null,[[0,13]])})));return function(e,t){return r.apply(this,arguments)}}())};return Object(a.useEffect)((function(){console.log(ve)}),[ve]),Object(a.useEffect)((function(){!0===Se.includes(I()().hour().toString())?Te(Object(s.a)(Object(s.a)({},Me),{},{time:!0})):Te(Object(s.a)(Object(s.a)({},Me),{},{time:!1}))}),[Se]),Object(a.useEffect)((function(){Te(H<=i?Object(s.a)(Object(s.a)({},Me),{},{cpu:!0}):Object(s.a)(Object(s.a)({},Me),{},{cpu:!1}))}),[H]),Object(a.useEffect)((function(){console.log(!0===Se.includes(I()().hour().toString()),Se,I()().hour().toString()),console.log("condition",Me),!1===Me.time?Oe("Time to offline"):!1===Me.delay?Oe("Waiting..."):!1===Me.cpu?Oe("Waiting checking cpu every 15 sec."):Ie?Oe("Minging..."):(Ee(!0),Oe("Time to mine"),function(){try{Ge(p).then((function(e){console.log(e),Object(b.a)(f.a.mark((function t(){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,He(L,p,"active",JSON.stringify(e),["https://api.waxsweden.org","https://wax.eosrio.io"]);case 2:case"end":return t.stop()}}),t)})))()})).catch((function(e){return console.log("background mine fail")}))}catch(e){console.log(e),Oe("Fail mining!!")}}())}),[Me]),Object(a.useEffect)((function(){Object(b.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(null===J||void 0===J?void 0:J.api)){e.next=7;break}return Oe("Login ".concat(p)),Be(),Ue(),De(),e.next=7,Pe();case 7:case"end":return e.stop()}}),e)})))();var e=window.setInterval((function(){console.log("get cpu every 15 sec."),De()}),15e3);return function(){window.clearInterval(e)}}),[J,p]),Object(a.useEffect)((function(){Object(b.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Oe("Login..."),e.next=3,J.login();case 3:t=e.sent,h(t);case 5:case"end":return e.stop()}}),e)})))()}),[]),Object(D.jsxs)("div",{children:[Object(D.jsx)("h1",{children:p?"Hi, ".concat(p):"Wait auto login"}),Object(D.jsxs)("p",{children:[M," / ",E," "]}),Object(D.jsxs)("p",{children:["Status : ",ge]}),Object(D.jsxs)(m.a,{gutter:[4,4],children:[Object(D.jsx)(w.a,{span:8,children:Object(D.jsxs)("p",{children:["Delay :",Object(D.jsx)("br",{}),Me.delay?Object(D.jsx)(S.a,{style:{color:"green"}}):Object(D.jsx)(k.a,{style:{color:"red"}})," ","".concat(be)]})}),Object(D.jsx)(w.a,{span:8,children:Object(D.jsxs)("p",{children:["Time :",Object(D.jsx)("br",{}),Me.time?Object(D.jsx)(S.a,{style:{color:"green"}}):Object(D.jsx)(k.a,{style:{color:"red"}})," ",!1===Me.time?"Offline":"Online"]})}),Object(D.jsx)(w.a,{span:8,children:Object(D.jsxs)("p",{children:["CPU :",Object(D.jsx)("br",{}),Me.cpu?Object(D.jsx)(S.a,{style:{color:"green"}}):Object(D.jsx)(k.a,{style:{color:"red"}})," ","".concat(H.toFixed(0),"/").concat(i," %")]})})]}),Object(D.jsx)(m.a,{gutter:[12,12],style:{marginBottom:"15px"},children:Object(D.jsxs)(w.a,{span:24,children:[Object(D.jsxs)("div",{children:[Object(D.jsxs)("span",{style:{marginRight:"5px"},children:["CPU / MAX : ",Object(D.jsx)(v.a,{onChange:function(e){return u(e)},min:1,max:99,defaultValue:i,bordered:!1})]}),Object(D.jsx)(y.a,{percent:H,status:H>i?"exception":"active"})]}),Object(D.jsxs)("div",{children:[Object(D.jsx)("span",{style:{marginRight:"5px"},children:"RAM"}),Object(D.jsx)(y.a,{percent:V,status:V>90?"exception":"active"})]}),Object(D.jsxs)("div",{children:[Object(D.jsx)("span",{style:{marginRight:"5px"},children:"NET"}),Object(D.jsx)(y.a,{percent:$,status:V>90?"exception":"active"})]})]})}),Object(D.jsxs)(m.a,{gutter:[12,12],children:[Object(D.jsx)(w.a,{span:24,children:le}),Object(D.jsx)(w.a,{span:24,children:ae&&ae.map((function(e,t){return Object(D.jsx)("p",{style:{marginBottom:0},children:"".concat(e.code," : ").concat(e.name)},t)}))}),Object(D.jsx)(w.a,{span:24,children:Object(D.jsx)(P,{rows:4,bordered:!1,placeholder:"History mine ..",value:ve.map((function(e,t){return Object(D.jsx)("span",{children:e},t)}))})}),Object(D.jsx)(w.a,{span:24,children:Object(D.jsx)(g.a,{ghost:!0,expandIcon:function(){return""},children:Object(D.jsxs)(N,{header:"Config time online",children:[Object(D.jsx)("div",{children:Object(D.jsx)(_.a,{onChange:function(e){return t=e.target.checked,void ke(t?n:[]);var t},children:"All"})},"all"),n.map((function(e,t){return Object(D.jsx)("div",{children:Object(D.jsx)(_.a,{onChange:function(t){return n=t.target.checked,a=e,void ke(n?[].concat(Object(j.a)(Se),[a]):Object(j.a)(Se.filter((function(e){return e!==a}))));var n,a},checked:!!Se.find((function(t){return t===e})),children:"".concat(e.toString().padStart(2,"0"),":00-").concat(e.toString().padStart(2,"0"),":59")})},t)}))]},"1")})})]})]})},G=(n(71),n(611)),H=n(315),X=n(604),q=n(613),K=n(612),V=n(304),Q=n.n(V),Y=n(305),Z=n.n(Y),$=n(306),ee=n.n($);I.a.extend(Q.a),I.a.extend(Z.a),I.a.extend(ee.a);l.a.Header,l.a.Content,l.a.Footer;var te=O.a.Search,ne=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)([]),i=Object(o.a)(c,2),u=i[0],l=i[1],d=Object(a.useState)(!1),p=Object(o.a)(d,2),h=(p[0],p[1],Object(a.useState)(10)),g=Object(o.a)(h,2),O=g[0],_=g[1],S=Object(a.useState)(null),k=Object(o.a)(S,2),A=k[0],C=k[1],E=Object(a.useState)(""),L=Object(o.a)(E,2),F=L[0],W=L[1],R=Object(a.useState)(0),M=Object(o.a)(R,2),T=M[0],B=M[1],U=Object(a.useState)(0),N=Object(o.a)(U,2),P=N[0],J=N[1],z=[{title:"Account",dataIndex:"account",key:"account"},{title:"CPU",dataIndex:"cpu",key:"cpu",width:"20%",render:function(e){return Object(D.jsx)(y.a,{percent:e,strokeColor:e>90?"red":"",format:function(e,t){return"".concat(e,"%")},style:{width:"100%"}})}},{title:"RAM",dataIndex:"ram",key:"ram",width:"20%",responsive:["md"],render:function(e){return Object(D.jsx)(y.a,{percent:e,strokeColor:e>90?"red":"",format:function(e,t){return"".concat(e,"%")},style:{width:"100%"}})}},{title:"TLM ".concat(P),dataIndex:"tlm",key:"tlm"},{title:"WAX ".concat(T),dataIndex:"wax",key:"wax",responsive:["md"]},{title:"Last Mine",dataIndex:"last",key:"wax"},{title:"Remove",key:"action",render:function(e,t){return Object(D.jsx)(G.b,{size:"middle",children:Object(D.jsx)("a",{onClick:function(){return V(t)},children:Object(D.jsx)(q.a,{style:{color:"red"}})})})}}],V=function(e){console.log(e),r(n.filter((function(t){return t!==e.account}))),l(u.filter((function(t){return t.account!==e.account})))},Q=function(){var e=Object(b.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.map((function(e){var t=x.a.post("https://api.waxsweden.org/v1/chain/get_account",{account_name:e}),n=x.a.post("https://api.waxsweden.org/v1/chain/get_table_rows",{json:!0,code:"alien.worlds",scope:e,table:"accounts",table_key:"",lower_bound:"",upper_bound:"",index_position:1,key_type:"",limit:1,reverse:!1,show_payer:!1}),a=x.a.post("https://api.waxsweden.org/v1/chain/get_table_rows",{json:!0,code:"m.federation",scope:"m.federation",table:"miners",table_key:"",lower_bound:e,upper_bound:e,index_position:1,key_type:"",limit:10,reverse:!1,show_payer:!1});return x.a.all([t,n,a]).then(x.a.spread((function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var a=t[0].data.core_liquid_balance.split(" "),r=t[1].data.rows[0].balance.split(" ");return{account:t[0].data.account_name,cpu:+(t[0].data.cpu_limit.used/t[0].data.cpu_limit.max*100).toFixed(0),ram:+(t[0].data.ram_usage/t[0].data.ram_quota*100).toFixed(0),wax:+a[0],tlm:+r[0],last:I()().to(I()(t[2].data.rows[0].last_mine).add(7,"hour").toISOString())}}))).catch((function(e){return console.error(e)}))})),Promise.all(n).then((function(e){e.length>0&&(B(e.map((function(e){return e.wax})).reduce((function(e,t){return e+t})).toFixed(2)),J(e.map((function(e){return e.tlm})).reduce((function(e,t){return e+t})).toFixed(2)),l(e)),H.b.destroy(),W("")}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y=function(){var e=Object(b.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:W(t),t&&!n.includes(t)?(console.log("add"),r([].concat(Object(j.a)(n),[t])),H.b.loading("Add account ".concat(t))):H.b.error("This account has in list.");case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Z=function(){return Object(D.jsx)(X.a,{size:"small",columns:z,dataSource:u.map((function(e,t){return Object(s.a)({key:t},e)}))})},$=function(){clearInterval(A),C(setInterval((function(){n.length>0&&(console.log("Load Account",n),Q(n))}),1e3*O))};return Object(a.useEffect)((function(){O>0&&(console.log("Change sec",O),H.b.info("Change time ".concat(O)),$())}),[O]),Object(a.useEffect)((function(){console.log("account change",n),Q(n),$()}),[n]),Object(D.jsxs)(m.a,{gutter:[12,12],children:[Object(D.jsx)(w.a,{sm:{span:24},md:{span:12},lg:{span:6},children:Object(D.jsx)(te,{value:F,onChange:function(e){return W(e.target.value)},placeholder:"New Account",allowClear:!0,enterButton:Object(D.jsx)(K.a,{}),onSearch:Y})}),Object(D.jsxs)(w.a,{sm:{span:24},md:{span:12},lg:{span:6},children:["Refresh ",Object(D.jsx)(v.a,{min:1,max:3600,onChange:function(e){return _(e)},defaultValue:O,bordered:!1})," Sec."]}),Object(D.jsx)(w.a,{span:24,children:Object(D.jsx)(Z,{})})]})},ae=l.a.Header,re=l.a.Content,ce=l.a.Footer,oe=function(){var e=Object(a.useState)({isLogin:!1,account:null,publicKey:null,wax:0,tlm:0,cpu:0,ram:0}),t=Object(o.a)(e,2),n=t[0];t[1];return Object(D.jsx)(A.Provider,{value:n,children:Object(D.jsx)(u.a,{children:Object(D.jsxs)(l.a,{className:"layout",children:[Object(D.jsx)(ae,{children:Object(D.jsxs)(d.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["1"],children:[Object(D.jsx)(d.a.Item,{children:Object(D.jsx)(u.b,{to:"/",children:"AWEasy"})},"1"),Object(D.jsx)(d.a.Item,{children:Object(D.jsx)(u.b,{to:"/AWAccount",children:"AWAccount"})},"2")]})}),Object(D.jsx)(re,{style:{padding:"25px 50px"},children:Object(D.jsx)("div",{className:"site-layout-content",children:Object(D.jsxs)(i.c,{children:[Object(D.jsx)(i.a,{path:"/AWAccount",children:Object(D.jsx)(ne,{})}),Object(D.jsx)(i.a,{path:"/",children:Object(D.jsx)(z,{})})]})})}),Object(D.jsx)(ce,{style:{textAlign:"center"},children:"AWEasy \xa92021 v 1.0.2 Created by MUNKGORN"})]})})})},se=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,614)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),c(e),o(e)}))};c.a.render(Object(D.jsx)(oe,{}),document.getElementById("root")),se()}},[[601,1,2]]]);
//# sourceMappingURL=main.c7216b26.chunk.js.map