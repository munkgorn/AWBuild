(this.webpackJsonpAWEasy=this.webpackJsonpAWEasy||[]).push([[0],{327:function(t,e,n){},39:function(t,e,n){"use strict";(function(t){n.d(e,"b",(function(){return x})),n.d(e,"i",(function(){return g})),n.d(e,"d",(function(){return O})),n.d(e,"g",(function(){return h})),n.d(e,"e",(function(){return w})),n.d(e,"c",(function(){return v})),n.d(e,"f",(function(){return _})),n.d(e,"h",(function(){return y})),n.d(e,"a",(function(){return k}));var a=n(88),r=(n(21),n(6)),c=n.n(r),o=n(15),s=n(402),i=(n(186),n(227).Serialize),u=n(489),l=u.TextDecoder,d=u.TextEncoder,p=n(492).Int64LE,f=n(47),b=function(t){var e=new i.SerialBuffer({textEncoder:new d,textDecoder:new l});return e.pushName(t),e.array},j=function(t){t=new p(t);var e=new i.SerialBuffer({textEncoder:new d,textDecoder:new l});return e.pushArray(t.toArray()),e.getName()},h=function(){var t=Object(o.a)(c.a.mark((function t(e,n,a,r){var o,s,i;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.get_table_rows({code:e,scope:e,table:"players",lower_bound:n,upper_bound:n});case 2:if(o=t.sent,s={tag:"",avatar:""},!o.rows.length){t.next=11;break}if(s.tag=o.rows[0].tag,!(o.rows[0].avatar>0)){t.next=11;break}return t.next=9,r.getAsset(o.rows[0].avatar);case 9:(i=t.sent)&&(s.avatar=i);case 11:return t.abrupt("return",s);case 12:case"end":return t.stop()}}),t)})));return function(e,n,a,r){return t.apply(this,arguments)}}(),x=function(){var t=Object(o.a)(c.a.mark((function t(e,n,a,r){var o,s,i;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.get_table_rows({code:e,scope:e,table:"bags",lower_bound:n,upper_bound:n});case 2:if(o=t.sent,s=[],!o.rows.length){t.next=9;break}return i=o.rows[0].items.map((function(t){return r.getAsset(t)})),t.next=8,Promise.all(i);case 8:return t.abrupt("return",t.sent);case 9:return t.abrupt("return",s);case 10:case"end":return t.stop()}}),t)})));return function(e,n,a,r){return t.apply(this,arguments)}}(),g=function(){var t=Object(o.a)(c.a.mark((function t(e,n,a,r){var o,s,i,u=arguments;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=u.length>4&&void 0!==u[4]?u[4]:"active",s=[{account:e,name:"setbag",authorization:[{actor:n,permission:o}],data:{account:n,items:a.slice(0,3)}}],t.next=4,r.transact({actions:s},{blocksBehind:3,expireSeconds:90});case 4:return i=t.sent,t.abrupt("return",i);case 6:case"end":return t.stop()}}),t)})));return function(e,n,a,r){return t.apply(this,arguments)}}(),m=function(){var t=Object(o.a)(c.a.mark((function t(e,n,a,r){var o,s,i;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a.get_table_rows({code:e,scope:e,table:"landregs",lower_bound:n,upper_bound:n});case 3:if(o=t.sent,s="federation",o.rows.length&&(s=o.rows[0].owner),s){t.next=8;break}throw new Error("Land owner not found for land id ".concat(n));case 8:return t.next=10,r.getAsset(n);case 10:return(i=t.sent).data.planet=j(i.data.planet),i.data.img=i.data.img||"",i.owner=i.owner||s,t.abrupt("return",i);case 17:return t.prev=17,t.t0=t.catch(0),console.log("Error in getLandById ".concat(t.t0.message)),t.abrupt("return",null);case 21:case"end":return t.stop()}}),t,null,[[0,17]])})));return function(e,n,a,r){return t.apply(this,arguments)}}(),O=function(){var t=Object(o.a)(c.a.mark((function t(e,n,a,r,o){var s,i;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,r.get_table_rows({code:n,scope:n,table:"miners",lower_bound:a,upper_bound:a});case 3:if(0!==(s=t.sent).rows.length){t.next=8;break}return t.abrupt("return",null);case 8:i=s.rows[0].current_land;case 9:return t.next=11,m(e,i,r,o);case 11:return t.abrupt("return",t.sent);case 14:return t.prev=14,t.t0=t.catch(0),console.error("Failed to get land - ".concat(t.t0.message)),t.abrupt("return",null);case 18:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e,n,a,r,c){return t.apply(this,arguments)}}(),w=function(t){var e={delay:0,difficulty:0,ease:0};return e.delay+=t.data.delay,e.difficulty+=t.data.difficulty,e.ease+=t.data.ease,e},v=function(t){for(var e={delay:0,difficulty:0,ease:0},n=65535,a=0;a<t.length;a++)t[a].data.delay<n&&(n=t[a].data.delay),e.delay+=t[a].data.delay,e.difficulty+=t[a].data.difficulty,e.ease+=t[a].data.ease/10;return 2===t.length?e.delay-=parseInt(n/2):3===t.length&&(e.delay-=n),e},_=function(){var t=Object(o.a)(c.a.mark((function t(e,n,a,r){var o,s,i,u;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(n),t.next=3,r.get_table_rows({code:e,scope:e,table:"miners",lower_bound:n,upper_bound:n});case 3:return o=t.sent,s=-1,i=f().valueOf(),console.log("Delay = ".concat(a.delay)),o.rows.length&&"0000000000000000000000000000000000000000000000000000000000000000"!==o.rows[0].last_mine_tx&&(console.log("Last mine was at ".concat(f(o.rows[0].last_mine).add(7,"hour").toISOString(),", now is ").concat(f().toISOString())),u=f(o.rows[0].last_mine).add(7,"hour").valueOf(),(s=u+1e3*a.delay-i)<0&&(s=0)),t.abrupt("return",s);case 9:case"end":return t.stop()}}),t)})));return function(e,n,a,r){return t.apply(this,arguments)}}(),y=function(){var t=Object(o.a)(c.a.mark((function t(e,n,a){var r,o;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.get_table_rows({code:e,scope:e,table:"miners",lower_bound:n,upper_bound:n});case 2:return r=t.sent,o="0000000000000000000000000000000000000000000000000000000000000000",r.rows.length&&(o=r.rows[0].last_mine_tx),t.abrupt("return",o);case 6:case"end":return t.stop()}}),t)})));return function(e,n,a){return t.apply(this,arguments)}}(),k=function(){var t=Object(o.a)(c.a.mark((function t(e){var n,r,u,p;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=function(){return(n=Object(o.a)(c.a.mark((function t(e){var n,r,o,i,u,l,d,p,f,b,j,h,x,g,m,O,w,v,_;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=function(t){return Object(a.a)(new Uint8Array(t)).map((function(t){return t.toString(16).padStart(2,"0")})).join("")},n=function(){for(var t=new Uint8Array(8),e=0;e<8;e++){var n=Math.floor(255*Math.random());t[e]=n}return t},console.log("call temp doworkwoker"),o=e.data,o.mining_account,i=o.account,u=o.account_str,l=o.difficulty,o.last_mine_tx,d=o.last_mine_arr,i=i.slice(0,8),p=".wam"===u.substr(-4),f=!1,b=0,0,m=(new Date).getTime(),console.log("while lopp check");case 11:if(f){t.next=30;break}return x=n(),(O=new Uint8Array(i.length+d.length+x.length)).set(i),O.set(d,i.length),O.set(x,i.length+d.length),t.next=19,s.subtle.digest("SHA-256",O.slice(0,24));case 19:if(j=t.sent,h=r(j),(f=p?"0000"===h.substr(0,4):"000000"===h.substr(0,6))&&(g=p?parseInt(h.substr(4,1),16):parseInt(h.substr(6,1),16),f&=g<=l),++b%1e6===0&&console.log("Still mining - tried ".concat(b," iterations")),f||(j=null),!(b>=1e7)){t.next=28;break}return t.abrupt("break",30);case 28:t.next=11;break;case 30:return w=(new Date).getTime(),v=r(x),console.log("Found hash in ".concat(b," iterations with ").concat(i," ").concat(v,", last = ").concat(g,", hex_digest ").concat(h," taking ").concat((w-m)/1e3,"s")),_={account:u,rand_str:v,hex_digest:h},this.postMessage(_),t.abrupt("return",_);case 36:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)},function(t){return n.apply(this,arguments)},console.log("mining_params",e),e.last_mine_tx=e.last_mine_tx.substr(0,16),e.last_mine_arr=(f=e.last_mine_tx,new Uint8Array(f.match(/.{1,2}/g).map((function(t){return parseInt(t,16)})))),r=new i.SerialBuffer({textEncoder:new d,textDecoder:new l}),e.sb=r,e.account_str=e.account,e.account=b(e.account),u=new Blob(["onmessage = async function tempDoWOrkWorker(_message){function getRand(){const arr=new Uint8Array(8);for(let i=0;i<8;i++){const rand=Math.floor(Math.random()*255);arr[i]=rand}return arr};function toHex(buffer){return[...new Uint8Array(buffer)].map(b=>b.toString(16).padStart(2,'0')).join('')};let{mining_account,account,account_str,difficulty,last_mine_tx,last_mine_arr}=_message.data;account=account.slice(0,8);const is_wam=account_str.substr(-4)==='.wam';let good=!1,itr=0,rand=0,hash,hex_digest,rand_arr,last;const start=new Date().getTime();while(!good){rand_arr=getRand();const combined=new Uint8Array(account.length+last_mine_arr.length+rand_arr.length);combined.set(account);combined.set(last_mine_arr,account.length);combined.set(rand_arr,account.length+last_mine_arr.length);hash=await crypto.subtle.digest('SHA-256',combined.slice(0,24));hex_digest=toHex(hash);if(is_wam){good=hex_digest.substr(0,4)==='0000'}else{good=hex_digest.substr(0,6)==='000000'}if(good){if(is_wam){last=parseInt(hex_digest.substr(4,1),16)}else{last=parseInt(hex_digest.substr(6,1),16)}good&=last<=difficulty}itr++;if(itr%1000000===0){console.log(`Still mining - tried ${itr} iterations`)}if(!good){hash=null}if(itr>=1000000*10)break}const end = new Date().getTime(); const rand_str = toHex(rand_arr); console.log(`Found hash in ${itr} iterations with ${account} ${rand_str}, last = ${last}, hex_digest ${hex_digest} taking ${(end - start) / 1000}s`); const mine_work = { account: account_str, rand_str, hex_digest }; this.postMessage(mine_work); return mine_work}"],{type:"text/javascript"}),(p=new Worker(URL.createObjectURL(u))).postMessage(e),t.next=14,new Promise((function(t){p.onmessage=function(e){t(e.data)}}));case 14:return t.abrupt("return",t.sent);case 15:case"end":return t.stop()}var f}),t)})));return function(e){return t.apply(this,arguments)}}()}).call(this,n(60).Buffer)},406:function(t,e){},408:function(t,e){},418:function(t,e){},420:function(t,e){},448:function(t,e){},450:function(t,e){},451:function(t,e){},456:function(t,e){},458:function(t,e){},471:function(t,e){},483:function(t,e){},486:function(t,e){},601:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n(36),c=n.n(r),o=(n(327),n(328),n(21)),s=n(33),i=(n(319),n(32)),u=n(108),l=n(603),d=n(92),p=n(6),f=n.n(p),b=n(15),j=n(88),h=n(62),x=n.n(h),g=n(608),m=n(606),O=n(609),w=n(610),v=n(605),_=n(607),y=n(133),k=n(168),S=n(79),A=Object(a.createContext)(),C=n(47),I=n.n(C),E=n(153),F="m.federation",W=n(227),L=(W.Api,W.JsonRpc),M=(W.RpcError,n(233)),T=M.ExplorerApi,D=(M.RpcApi,n(186)),R=new T("https://wax.api.atomicassets.io","atomicassets",{fetch:D,rateLimit:4}),B=(new L("https://api.waxsweden.org",{fetch:D}),n(39)),U=(n(186),n(493),n(8)),N=g.a.Panel,P=m.a.TextArea,H=new E.WaxJS("https://api.waxsweden.org"),J=function(){var t=Object(a.useContext)(A),e="federation",n=["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23"],r=Object(a.useState)(90),c=Object(o.a)(r,2),i=c[0],u=c[1],l=Object(a.useState)(t.account),d=Object(o.a)(l,2),p=d[0],h=d[1],m=Object(a.useState)("0 WAX"),C=Object(o.a)(m,2),E=C[0],W=C[1],L=Object(a.useState)("0 TLM"),M=Object(o.a)(L,2),T=M[0],D=M[1],J=Object(a.useState)(100),$=Object(o.a)(J,2),z=$[0],G=$[1],X=Object(a.useState)(100),q=Object(o.a)(X,2),K=q[0],V=q[1],Q=Object(a.useState)(100),Y=Object(o.a)(Q,2),Z=Y[0],tt=Y[1],et=Object(a.useState)([]),nt=Object(o.a)(et,2),at=nt[0],rt=nt[1],ct=Object(a.useState)([]),ot=Object(o.a)(ct,2),st=(ot[0],ot[1]),it=Object(a.useState)(""),ut=Object(o.a)(it,2),lt=ut[0],dt=ut[1],pt=Object(a.useState)(""),ft=Object(o.a)(pt,2),bt=ft[0],jt=ft[1],ht=Object(a.useState)("Loading..."),xt=Object(o.a)(ht,2),gt=xt[0],mt=xt[1],Ot=Object(a.useState)([]),wt=Object(o.a)(Ot,2),vt=wt[0],_t=(wt[1],Object(a.useState)(["7","8","9","10","11","13","14","15","16","17","19","20","21","22","23"])),yt=Object(o.a)(_t,2),kt=yt[0],St=yt[1],At=Object(a.useState)(!1),Ct=Object(o.a)(At,2),It=Ct[0],Et=Ct[1],Ft=Object(a.useState)(!1),Wt=Object(o.a)(Ft,2),Lt=(Wt[0],Wt[1],Object(a.useState)({time:!0===kt.includes(I()().hour().toString()),delay:!1,cpu:!1})),Mt=Object(o.a)(Lt,2),Tt=Mt[0],Dt=Mt[1],Rt=function(){var e={code:"eosio.token",account:p,symbol:"WAX"};return x.a.post("https://wax.greymass.com/v1/chain/get_currency_balance",JSON.stringify(e)).then((function(e){1===(null===e||void 0===e?void 0:e.data.length)&&(t.wax=e.data[0],W(e.data[0]))})),!0},Bt=function(){var e={json:!0,code:"alien.worlds",scope:p,table:"accounts",table_key:"",lower_bound:"",upper_bound:"",index_position:1,key_type:"",limit:1,reverse:!1,show_payer:!1};return x.a.post("https://api.waxsweden.org/v1/chain/get_table_rows",e).then((function(e){var n,a,r,c;(null===e||void 0===e?void 0:e.data.rows.length)>=1&&(t.tlm=null===(n=e.data)||void 0===n||null===(a=n.rows[0])||void 0===a?void 0:a.balance,D(null===(r=e.data)||void 0===r||null===(c=r.rows[0])||void 0===c?void 0:c.balance))})),!0},Ut=function(){var t={account_name:p};x.a.post("https://api.waxsweden.org/v1/chain/get_account",t).then((function(t){var e=(t.data.cpu_limit.used/t.data.cpu_limit.max*100).toFixed(2).toString(),n=(t.data.ram_usage/t.data.ram_quota*100).toFixed(2).toString(),a=(t.data.net_limit.used/t.data.net_limit.max*100).toFixed(2).toString();G(+e),V(+n),tt(+a)}))},Nt=function(){var t=Object(b.a)(f.a.mark((function t(n){var a,r,c,o,s;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,console.log(H),mt("Get delay"),t.next=5,B.b(F,n,H.api.rpc,R);case 5:return a=t.sent,mt("Get bag"),t.next=9,B.d(e,F,n,H.api.rpc,R);case 9:return r=t.sent,mt("Get land"),rt(a.filter((function(t){return"tool.worlds"===t.schema.schema_name})).map((function(t){return{code:t.asset_id,name:t.name}}))),st(a),dt("".concat(r.asset_id," : ").concat(r.name," (").concat(r.data.x,"x").concat(r.data.y,") (Com.").concat(r.data.commission/100,"%)")),c=B.c(a),o=B.e(r),c.delay*=o.delay/10,c.difficulty+=o.difficulty,mt("Get next time mine"),t.next=21,B.f(F,n,c,H.api.rpc);case 21:return s=t.sent,t.abrupt("return",s);case 25:t.prev=25,t.t0=t.catch(0),console.log(t.t0);case 28:case"end":return t.stop()}}),t,null,[[0,25]])})));return function(e){return t.apply(this,arguments)}}(),Pt=function(){var t=Object(b.a)(f.a.mark((function t(){var e,n,a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Nt(p);case 2:e=t.sent,n=Math.floor(e/1e3),a=setInterval((function(){console.log("Loop delay ".concat(n," sec")),console.log(Tt);var t,e=Math.floor(n/60);e>=60&&(t=Math.floor(e/60));var r=n-60*e;0===n?(jt(""),console.log("clear time"),clearInterval(a),console.log(Tt),Dt(Object(s.a)(Object(s.a)({},Tt),{},{delay:!0}))):(n--,jt("".concat(t?t.toString().padStart(2,"0")+":":"").concat(e.toString().padStart(2,"0"),":").concat(r.toString().padStart(2,"0"))))}),1e3);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),Ht=function(){var t=Object(b.a)(f.a.mark((function t(e){var n,a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,B.b(F,e,H.api.rpc,R);case 3:return n=t.sent,a=B.c(n),t.abrupt("return",a.difficulty);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),Jt=function(){var t=Object(b.a)(f.a.mark((function t(n){var a,r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,B.d(e,F,n,H.api.rpc,R);case 3:return a=t.sent,r=B.e(a),t.abrupt("return",r.difficulty);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),$t=function(){var t=Object(b.a)(f.a.mark((function t(e){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise(function(){var t=Object(b.a)(f.a.mark((function t(n,a){var r,c,o,s;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Ht(e);case 2:return r=t.sent,t.next=5,Jt(e);case 5:return c=t.sent,o=r+c,console.log("difficulty",o),console.log("start doWork = "+Date.now()),t.next=11,B.h(F,e,H.api.rpc);case 11:s=t.sent,B.a({mining_account:F,account:e,difficulty:o,last_mine_tx:s}).then((function(t){console.log("end doWork = "+Date.now()),console.log(t),n(t)})).catch((function(t){return a(t)}));case 13:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),zt=function(){var t=Object(b.a)(f.a.mark((function t(e,n,a,r,c){var o,s,i;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e),console.log(n),console.log(a),console.log(r),console.log(c),t.prev=5,o=JSON.parse(r),s={miner:o.account,nonce:o.rand_str},console.log("Claiming Now"),t.next=11,Gt(F,n,"active",s,c,H.api);case 11:i=t.sent,console.log("Claim Data"+i),mt("Claiming..."),mt("Claim data : ".concat(i.toString())),t.next=21;break;case 17:t.prev=17,t.t0=t.catch(5),console.log(t.t0),mt("claim fail");case 21:case"end":return t.stop()}}),t,null,[[5,17]])})));return function(e,n,a,r,c){return t.apply(this,arguments)}}(),Gt=function(t,e,n,a,r,c){return new Promise(function(){var r=Object(b.a)(f.a.mark((function r(o,i){var u,l;return f.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,u=[{account:t,name:"mine",authorization:[{actor:e,permission:n}],data:a}],r.next=4,c.transact({actions:u},{blocksBehind:3,expireSeconds:90});case 4:l=r.sent,console.log(l.transaction_id),mt("Transaction claiming"),Et(!1),Dt(Object(s.a)(Object(s.a)({},Tt),{},{delay:!1})),Object(b.a)(f.a.mark((function t(){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Pt());case 1:case"end":return t.stop()}}),t)})))(),o(l.transaction_id),r.next=17;break;case 13:r.prev=13,r.t0=r.catch(0),console.log("Failed to push mine results ".concat(r.t0.message)),i(r.t0);case 17:case"end":return r.stop()}}),r,null,[[0,13]])})));return function(t,e){return r.apply(this,arguments)}}())};return Object(a.useEffect)((function(){console.log(vt)}),[vt]),Object(a.useEffect)((function(){!0===kt.includes(I()().hour().toString())?Dt(Object(s.a)(Object(s.a)({},Tt),{},{time:!0})):Dt(Object(s.a)(Object(s.a)({},Tt),{},{time:!1}))}),[kt]),Object(a.useEffect)((function(){Dt(z<=i?Object(s.a)(Object(s.a)({},Tt),{},{cpu:!0}):Object(s.a)(Object(s.a)({},Tt),{},{cpu:!1}))}),[z]),Object(a.useEffect)((function(){console.log(!0===kt.includes(I()().hour().toString()),kt,I()().hour().toString()),console.log("condition",Tt),!1===Tt.time?mt("Time to offline"):!1===Tt.delay?mt("Waiting..."):!1===Tt.cpu?mt("Waiting checking cpu every 15 sec."):It?mt("Minging..."):(Et(!0),mt("Time to mine"),function(){try{$t(p).then((function(t){console.log(t),Object(b.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,zt(F,p,"active",JSON.stringify(t),["https://api.waxsweden.org","https://wax.eosrio.io"]);case 2:case"end":return e.stop()}}),e)})))()})).catch((function(t){return console.log("background mine fail")}))}catch(t){console.log(t),mt("Fail mining!!")}}())}),[Tt]),Object(a.useEffect)((function(){Object(b.a)(f.a.mark((function t(){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(null===H||void 0===H?void 0:H.api)){t.next=7;break}return mt("Login ".concat(p)),Rt(),Bt(),Ut(),t.next=7,Pt();case 7:case"end":return t.stop()}}),t)})))();var t=window.setInterval((function(){console.log("get cpu every 15 sec."),Ut()}),15e3);return function(){window.clearInterval(t)}}),[H,p]),Object(a.useEffect)((function(){Object(b.a)(f.a.mark((function t(){var e;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return mt("Login..."),t.next=3,H.login();case 3:e=t.sent,h(e);case 5:case"end":return t.stop()}}),t)})))()}),[]),Object(U.jsxs)("div",{children:[Object(U.jsx)("h1",{children:p?"Hi, ".concat(p):"Wait auto login"}),Object(U.jsxs)("p",{children:[T," / ",E," "]}),Object(U.jsxs)("p",{children:["Status : ",gt]}),Object(U.jsxs)(O.a,{gutter:[4,4],children:[Object(U.jsx)(w.a,{span:8,children:Object(U.jsxs)("p",{children:["Delay :",Object(U.jsx)("br",{}),Tt.delay?Object(U.jsx)(k.a,{style:{color:"green"}}):Object(U.jsx)(S.a,{style:{color:"red"}})," ","".concat(bt)]})}),Object(U.jsx)(w.a,{span:8,children:Object(U.jsxs)("p",{children:["Time :",Object(U.jsx)("br",{}),Tt.time?Object(U.jsx)(k.a,{style:{color:"green"}}):Object(U.jsx)(S.a,{style:{color:"red"}})," ",!1===Tt.time?"Offline":"Online"]})}),Object(U.jsx)(w.a,{span:8,children:Object(U.jsxs)("p",{children:["CPU :",Object(U.jsx)("br",{}),Tt.cpu?Object(U.jsx)(k.a,{style:{color:"green"}}):Object(U.jsx)(S.a,{style:{color:"red"}})," ","".concat(z.toFixed(0),"/").concat(i," %")]})})]}),Object(U.jsx)(O.a,{gutter:[12,12],style:{marginBottom:"15px"},children:Object(U.jsxs)(w.a,{span:24,children:[Object(U.jsxs)("div",{children:[Object(U.jsxs)("span",{style:{marginRight:"5px"},children:["CPU / MAX : ",Object(U.jsx)(v.a,{onChange:function(t){return u(t)},min:1,max:99,defaultValue:i,bordered:!1})]}),Object(U.jsx)(_.a,{percent:z,status:z>i?"exception":"active"})]}),Object(U.jsxs)("div",{children:[Object(U.jsx)("span",{style:{marginRight:"5px"},children:"RAM"}),Object(U.jsx)(_.a,{percent:K,status:K>90?"exception":"active"})]}),Object(U.jsxs)("div",{children:[Object(U.jsx)("span",{style:{marginRight:"5px"},children:"NET"}),Object(U.jsx)(_.a,{percent:Z,status:K>90?"exception":"active"})]})]})}),Object(U.jsxs)(O.a,{gutter:[12,12],children:[Object(U.jsx)(w.a,{span:24,children:lt}),Object(U.jsx)(w.a,{span:24,children:at&&at.map((function(t,e){return Object(U.jsx)("p",{style:{marginBottom:0},children:"".concat(t.code," : ").concat(t.name)},e)}))}),Object(U.jsx)(w.a,{span:24,children:Object(U.jsx)(P,{rows:4,bordered:!1,placeholder:"History mine ..",value:vt.map((function(t,e){return Object(U.jsx)("span",{children:t},e)}))})}),Object(U.jsx)(w.a,{span:24,children:Object(U.jsx)(g.a,{ghost:!0,expandIcon:function(){return""},children:Object(U.jsxs)(N,{header:"Config time online",children:[Object(U.jsx)("div",{children:Object(U.jsx)(y.a,{onChange:function(t){return e=t.target.checked,void St(e?n:[]);var e},children:"All"})},"all"),n.map((function(t,e){return Object(U.jsx)("div",{children:Object(U.jsx)(y.a,{onChange:function(e){return n=e.target.checked,a=t,void St(n?[].concat(Object(j.a)(kt),[a]):Object(j.a)(kt.filter((function(t){return t!==a}))));var n,a},checked:!!kt.find((function(e){return e===t})),children:"".concat(t.toString().padStart(2,"0"),":00-").concat(t.toString().padStart(2,"0"),":59")})},e)}))]},"1")})})]})]})},$=(n(71),n(611)),z=n(315),G=n(604),X=n(613),q=n(612),K=n(304),V=n.n(K),Q=n(305),Y=n.n(Q),Z=n(306),tt=n.n(Z);I.a.extend(V.a),I.a.extend(Y.a),I.a.extend(tt.a);l.a.Header,l.a.Content,l.a.Footer;var et=m.a.Search,nt=function(){var t=Object(a.useState)([]),e=Object(o.a)(t,2),n=e[0],r=e[1],c=Object(a.useState)([]),i=Object(o.a)(c,2),u=i[0],l=i[1],d=Object(a.useState)(!1),p=Object(o.a)(d,2),h=(p[0],p[1],Object(a.useState)(10)),g=Object(o.a)(h,2),m=g[0],y=g[1],k=Object(a.useState)(null),S=Object(o.a)(k,2),A=S[0],C=S[1],E=Object(a.useState)(""),F=Object(o.a)(E,2),W=F[0],L=F[1],M=Object(a.useState)(0),T=Object(o.a)(M,2),D=T[0],R=T[1],B=Object(a.useState)(0),N=Object(o.a)(B,2),P=N[0],H=N[1],J=[{title:"Account",dataIndex:"account",key:"account"},{title:"CPU",dataIndex:"cpu",key:"cpu",width:"20%",render:function(t){return Object(U.jsx)(_.a,{percent:t,strokeColor:t>90?"red":"",format:function(t,e){return"".concat(t,"%")},style:{width:"100%"}})}},{title:"RAM",dataIndex:"ram",key:"ram",width:"20%",responsive:["md"],render:function(t){return Object(U.jsx)(_.a,{percent:t,strokeColor:t>90?"red":"",format:function(t,e){return"".concat(t,"%")},style:{width:"100%"}})}},{title:"TLM ".concat(P),dataIndex:"tlm",key:"tlm"},{title:"WAX ".concat(D),dataIndex:"wax",key:"wax",responsive:["md"]},{title:"Last Mine",dataIndex:"last",key:"wax"},{title:"Remove",key:"action",render:function(t,e){return Object(U.jsx)($.b,{size:"middle",children:Object(U.jsx)("a",{onClick:function(){return K(e)},children:Object(U.jsx)(X.a,{style:{color:"red"}})})})}}],K=function(t){console.log(t),r(n.filter((function(e){return e!==t.account}))),l(u.filter((function(e){return e.account!==t.account})))},V=function(){var t=Object(b.a)(f.a.mark((function t(e){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=e.map((function(t){var e=x.a.post("https://api.waxsweden.org/v1/chain/get_account",{account_name:t}),n=x.a.post("https://api.waxsweden.org/v1/chain/get_table_rows",{json:!0,code:"alien.worlds",scope:t,table:"accounts",table_key:"",lower_bound:"",upper_bound:"",index_position:1,key_type:"",limit:1,reverse:!1,show_payer:!1}),a=x.a.post("https://api.waxsweden.org/v1/chain/get_table_rows",{json:!0,code:"m.federation",scope:"m.federation",table:"miners",table_key:"",lower_bound:t,upper_bound:t,index_position:1,key_type:"",limit:10,reverse:!1,show_payer:!1});return x.a.all([e,n,a]).then(x.a.spread((function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var a=e[0].data.core_liquid_balance.split(" "),r=e[1].data.rows[0].balance.split(" ");return{account:e[0].data.account_name,cpu:+(e[0].data.cpu_limit.used/e[0].data.cpu_limit.max*100).toFixed(0),ram:+(e[0].data.ram_usage/e[0].data.ram_quota*100).toFixed(0),wax:+a[0],tlm:+r[0],last:I()().to(I()(e[2].data.rows[0].last_mine).add(7,"hour").toISOString())}}))).catch((function(t){return console.error(t)}))})),Promise.all(n).then((function(t){t.length>0&&(R(t.map((function(t){return t.wax})).reduce((function(t,e){return t+e})).toFixed(2)),H(t.map((function(t){return t.tlm})).reduce((function(t,e){return t+e})).toFixed(2)),l(t)),z.b.destroy(),L("")}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),Q=function(){var t=Object(b.a)(f.a.mark((function t(e){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:L(e),e&&!n.includes(e)?(console.log("add"),r([].concat(Object(j.a)(n),[e])),z.b.loading("Add account ".concat(e))):z.b.error("This account has in list.");case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),Y=function(){return Object(U.jsx)(G.a,{size:"small",columns:J,dataSource:u.map((function(t,e){return Object(s.a)({key:e},t)}))})},Z=function(){clearInterval(A),C(setInterval((function(){n.length>0&&(console.log("Load Account",n),V(n))}),1e3*m))};return Object(a.useEffect)((function(){m>0&&(console.log("Change sec",m),z.b.info("Change time ".concat(m)),Z())}),[m]),Object(a.useEffect)((function(){console.log("account change",n),V(n),Z()}),[n]),Object(U.jsxs)(O.a,{gutter:[12,12],children:[Object(U.jsx)(w.a,{sm:{span:24},md:{span:12},lg:{span:6},children:Object(U.jsx)(et,{value:W,onChange:function(t){return L(t.target.value)},placeholder:"New Account",allowClear:!0,enterButton:Object(U.jsx)(q.a,{}),onSearch:Q})}),Object(U.jsxs)(w.a,{sm:{span:24},md:{span:12},lg:{span:6},children:["Refresh ",Object(U.jsx)(v.a,{min:1,max:3600,onChange:function(t){return y(t)},defaultValue:m,bordered:!1})," Sec."]}),Object(U.jsx)(w.a,{span:24,children:Object(U.jsx)(Y,{})})]})},at=l.a.Header,rt=l.a.Content,ct=l.a.Footer,ot=function(){var t=Object(a.useState)({isLogin:!1,account:null,publicKey:null,wax:0,tlm:0,cpu:0,ram:0}),e=Object(o.a)(t,2),n=e[0];e[1];return Object(U.jsx)(A.Provider,{value:n,children:Object(U.jsx)(u.a,{children:Object(U.jsxs)(l.a,{className:"layout",children:[Object(U.jsx)(at,{children:Object(U.jsxs)(d.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["1"],children:[Object(U.jsx)(d.a.Item,{children:Object(U.jsx)(u.b,{to:"/",children:"AWEasy"})},"1"),Object(U.jsx)(d.a.Item,{children:Object(U.jsx)(u.b,{to:"/AWAccount",children:"AWAccount"})},"2")]})}),Object(U.jsx)(rt,{style:{padding:"25px 50px"},children:Object(U.jsx)("div",{className:"site-layout-content",children:Object(U.jsxs)(i.c,{children:[Object(U.jsx)(i.a,{path:"/AWAccount",children:Object(U.jsx)(nt,{})}),Object(U.jsx)(i.a,{path:"/",children:Object(U.jsx)(J,{})})]})})}),Object(U.jsx)(ct,{style:{textAlign:"center"},children:"AWEasy \xa92021 v 1.0.2 Created by MUNKGORN"})]})})})},st=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,614)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,c=e.getLCP,o=e.getTTFB;n(t),a(t),r(t),c(t),o(t)}))};c.a.render(Object(U.jsx)(ot,{}),document.getElementById("root")),st()}},[[601,1,2]]]);
//# sourceMappingURL=main.b2567350.chunk.js.map