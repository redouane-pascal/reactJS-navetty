(this["webpackJsonpma-navette"]=this["webpackJsonpma-navette"]||[]).push([[0],{11:function(l,n,e){l.exports=e(17)},17:function(l,n,e){"use strict";e.r(n);var u=e(0),t=e.n(u),a=e(5),r=e.n(a),s=e(6),i=e(9),o=e(7),c=e(1),m=e(10),d=(e(16),e(4),e(8)),h=e(2),L=function(l){var n=l.isFromCP,e=l.onChange;return t.a.createElement("div",{className:"divBottom"},t.a.createElement("div",{className:"spanFrom1"},"From CASA PORT"),t.a.createElement("label",{className:"switch"},t.a.createElement("input",{type:"checkbox",checked:n,onChange:e}),t.a.createElement("span",null)),t.a.createElement("div",{className:"spanFrom2"},"From KENITRA"),t.a.createElement("div",{className:"aboutMe"},t.a.createElement("span",{className:"madeBy"},"Made by",t.a.createElement("a",{href:"https://www.linkedin.com/in/radwanbasqual/",className:"authorName"},"Radwan BASQUAL"),"_2018")))};function v(l){var n=parseInt(l.replace(":","")),e=new Date;return n-(100*e.getHours()+e.getMinutes())}function f(l){for(var n=0,e=0;e<l.length;e++)if(null!=l[e][20]&&v(l[e][20])>0){n=e>1?e-1:e;break}return n}function p(l){return t.a.createElement("td",{className:"tdCssClass"},t.a.createElement("div",{id:l.cfIndex,className:l.cfClignote,style:l.cfStyle},t.a.createElement("span",{id:l.haIndex,className:"nomGare horaire",style:l.haStyle},l.haValue)))}function E(l){return t.a.createElement("th",{id:l.gareId,className:l.titreGareCssClass},l.titreGare)}function g(l){return t.a.createElement("div",{id:"band_up",className:"divInfo"},t.a.createElement("div",{id:"info"},t.a.createElement("span",{className:"spanInfo"},t.a.createElement("span",null,l.message)," - ",t.a.createElement("span",null,l.now))))}function y(l){return t.a.createElement("div",null,t.a.createElement("div",{id:l.id,style:l.style,className:"train"}),t.a.createElement("div",{id:l.idNumTrain,className:"numTrain",title:"N\xb0 du train",style:l.numTrainCssStyle},l.numTrain))}var C=function(l){function n(l){var e;return Object(s.a)(this,n),(e=Object(i.a)(this,Object(o.a)(n).call(this,l))).state={listGare:["K\xc9NITRA","SAL\xc9 TABRIQUET","SAL\xc9 VILLE","RABAT VILLE","RABAT AGDAL","TEMARA","SKHIRATE","BOUZNIKA","MOHAMMEDIA","AIN SEBAA","CASA PORT"],isFromCP:!0,data:h},e}return Object(m.a)(n,l),Object(c.a)(n,[{key:"componentDidMount",value:function(){var l=this;this.interval=setInterval((function(){return l.setState({time:Date.now()})}),5e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}}]),Object(c.a)(n,[{key:"handleChange",value:function(l){console.log("handleChange passed !!"),this.state.isFromCP?this.setState({listGare:this.state.listGare.reverse(),isFromCP:!this.state.isFromCP,data:d}):this.setState({listGare:this.state.listGare.reverse(),isFromCP:!this.state.isFromCP,data:h})}},{key:"renderTrainLine",value:function(){for(var l=[],n=[],e=0;e<11;e++){var u="titreGare titreGareOdd";e%2===0&&(u="titreGare titreGareEven"),n.push(this.renderTitreGare(e,"th"+e,u,this.state.listGare[e]))}l.push(t.a.createElement("thead",{key:2019},t.a.createElement("tr",{key:2018},n)));for(var a=[],r={backgroundColor:"gray"},s={},i=f(this.state.data.lines);i<this.state.data.lines.length;i++){for(var o=[],c=0;c<11;c++){var m=0==c?1:2*c,d=this.state.data.lines[i][m],h=d;c<10&&c>0&&(h=this.state.data.lines[i][m+1]);var L="circle_front ";null!=h&&null==d?v(h)<0?(r={backgroundColor:"gray"},s={color:"lightgrey"},d=h):v(h)<1?(L+="clignote ",r={},s={},d=h):(r={},s={}):null==h||null==d?r={display:"none"}:v(h)<0?(r={backgroundColor:"gray"},s={color:"lightgrey"},d=h):v(d)<=0&&v(h)>=0?(L+="clignote ",r={},s={},d=h):(r={},s={}),o.push(this.renderHoraire("cf"+String.fromCharCode(80+i)+c,L,r,"ha"+String.fromCharCode(80+i)+c,s,d))}a.push(t.a.createElement("tr",{key:2020+i},o))}return l.push(t.a.createElement("tbody",{key:2021},a)),l}},{key:"renderTrain",value:function(){for(var l=new Date,n=100*l.getHours()+l.getMinutes(),e=[],u=f(this.state.data.lines),a=u;a<this.state.data.lines.length;a++){for(var r="train"+a,s=74+35.2*(a-u),i=void 0,o=9.1,c=this.state.data.lines[a].length,m=this.state.data.lines[a].slice(0,c),d=2;d<c;d++)null==m[d]&&(m[d]=m[d-1]);for(var h=c-1;h>0;h--)null==m[h]&&(m[h]=m[h+1]);var L=parseInt(m[1].replace(":","")),v=parseInt(m[c-1].replace(":","")),p=!1;if(L<n&&n<v&&(p=!0),p){for(var E=c-1,g=!0,C=!0,I=0;g&&C&&E>0;)parseInt(m[E].replace(":",""))<n?g=!1:parseInt(m[E].replace(":",""))==n?C=!1:E--;var k=1;if(!g){for(;m[E]==m[E-1]&&E>0;)k+=.5,E--;I=E}C||(p=!1),I%2==0&&I++,i=I/2*9.1,o*=k}var A={display:p?"block":"none",left:i+"%",width:o+"%",top:s+"px"},N="numTrain_"+r,b={top:s-16+"px"},T=m[0].replace("L","");e.push(t.a.createElement(y,{key:a,id:r,style:A,idNumTrain:N,numTrainCssStyle:b,numTrain:T}))}return e}},{key:"renderBandeInfo",value:function(l,n){return t.a.createElement(g,{message:l,now:n})}},{key:"renderTitreGare",value:function(l,n,e,u){return t.a.createElement(E,{key:l,gareId:n,titreGareCssClass:e,titreGare:u})}},{key:"renderHoraire",value:function(l,n,e,u,a,r){return t.a.createElement(p,{key:l,cfIndex:l,cfClignote:n,cfStyle:e,haIndex:u,haStyle:a,haValue:r})}},{key:"render",value:function(){var l=this,n=new Date,e=n.getMinutes()<10?"0"+n.getMinutes():n.getMinutes(),u=n.getHours()+":"+e;return t.a.createElement("div",null,this.renderTrain(),this.renderBandeInfo("Donn\xe9es valables depuis 01 Jan. 2020",u),t.a.createElement("table",{id:"grille",className:"table table-borderless",style:{marginBottom:"0px",position:"relative",zIndex:"3"}},this.renderTrainLine()),t.a.createElement(L,{isFromCP:this.state.isFromCP,onChange:function(n){return l.handleChange(n)}}))}}]),n}(t.a.Component);r.a.render(t.a.createElement(C,null),document.getElementById("root"))},2:function(l){l.exports=JSON.parse('{"lines":[["L02","05:57","06:14","06:15","06:18","06:19","06:27","06:29","06:32","06:34","06:41","06:42","06:49","06:50","06:58","06:59","07:14","07:15","07:24","07:25","07:37"],["L04","06:30","06:47","06:48","06:51","06:52","07:00","07:02","07:05","07:07","07:14","07:15","07:22","07:23","07:31","07:32","07:48","07:49","07:58","07:59","08:11"],["L06","07:07","07:24","07:25","07:28","07:29","07:37","07:39","07:42","07:44","07:51","07:52","07:59","08:00","08:08","08:09","08:25","08:26","08:35","08:36","08:49"],["L08","07:30","07:47","07:48","07:51","07:52","08:00","08:02","08:05","08:07","08:14","08:15","08:22","08:23","08:31","08:32","08:48","08:49","08:58","08:59","09:10"],["L10","08:07","08:24","08:25","08:28","08:29","08:37","08:39","08:42","08:44","08:51","08:52",null,null,null,null,"09:21","09:22","09:31","09:32","09:43"],["L12","08:30","08:47","08:48","08:51","08:52","09:00","09:02","09:05","09:07",null,null,null,null,null,null,"09:48","09:49","09:58","09:59","10:10"],["L14","09:07","09:24","09:25","09:28","09:29","09:37","09:39","09:42","09:44","09:51","09:52","09:59","10:00","10:08","10:09","10:25","10:26","10:35","10:36","10:49"],["L16","09:30","09:47","09:48","09:51","09:52","10:00","10:02","10:05","10:07",null,null,null,null,null,null,"10:48","10:49","10:58","10:59","11:10"],["L18",null,null,null,null,null,null,null,null,"10:51","10:58","10:59",null,null,null,null,"11:24","11:25","11:35","11:36","11:47"],["L20","10:30","10:47","10:48","10:51","10:52","11:00","11:02","11:05","11:07",null,null,"11:22","11:23","11:31","11:32","11:48","11:49","11:58","11:59","12:10"],["L22",null,null,null,null,null,null,null,null,"11:51","11:58","11:59",null,null,null,null,"12:24","12:25","12:35","12:36","12:47"],["L24","11:30","11:47","11:48","11:51","11:52","12:00","12:02","12:05","12:07","12:14","12:15","12:22","12:23","12:31","12:32","12:48","12:49","12:58","12:59","13:10"],["L26",null,null,null,null,null,null,null,null,"12:51","12:58","12:59",null,null,null,null,"13:24","13:25","13:35","13:36","13:47"],["L28","12:30","12:47","12:48","12:51","12:52","13:00","13:02","13:05","13:07",null,null,null,null,null,null,"13:48","13:49","13:58","13:59","14:10"],["L30",null,null,null,null,null,null,null,null,"13:51","13:58","13:59",null,null,null,null,"14:24","14:25","14:35","14:36","14:47"],["L32","13:30","13:47","13:48","13:51","13:52","14:00","14:02","14:05","14:07","14:14","14:15","14:22","14:23","14:31","14:32","14:48","14:49","14:58","14:59","15:10"],["L34",null,null,null,null,null,null,null,null,"14:51","14:58","14:59",null,null,null,null,"15:24","15:25","15:35","15:36","15:47"],["L36","14:30","14:47","14:48","14:51","14:52","15:00","15:02","15:05","15:07",null,null,null,null,null,null,"15:48","15:49","15:58","15:59","16:10"],["L38",null,null,null,null,null,null,null,null,"15:51","15:58","15:59",null,null,null,null,"16:24","16:25","16:35","16:36","16:47"],["L40","15:30","15:47","15:48","15:51","15:52","16:00","16:02","16:05","16:07","16:14","16:15","16:22","16:23","16:31","16:32","16:48","16:49","16:58","16:59","17:10"],["L42","16:07","16:24","16:25","16:28","16:29","16:37","16:39","16:42","16:44","16:51","16:52",null,null,null,null,"17:25","17:26","17:35","17:36","17:49"],["L44","16:30","16:47","16:48","16:51","16:52","17:00","17:02","17:05","17:07","17:14","17:15","17:22","17:23","17:31","17:32","17:48","17:49","17:58","17:59","18:10"],["L46","17:07","17:24","17:25","17:28","17:29","17:37","17:39","17:42","17:44","17:51","17:52",null,null,null,null,"18:25","18:26","18:35","18:36","18:49"],["L48","17:30","17:47","17:48","17:51","17:52","18:00","18:02","18:05","18:07","18:14","18:15","18:22","18:23","18:31","18:32","18:48","18:49","18:58","18:59","19:10"],["L50","18:07","18:24","18:25","18:28","18:29","18:37","18:39","18:42","18:44",null,null,null,null,null,null,"19:21","19:22","19:31","19:32","19:43"],["L52","18:30","18:47","18:48","18:51","18:52","19:00","19:02","19:05","19:07","19:14","19:15","19:22","19:23","19:31","19:32","19:48","19:49","19:58","19:59","20:10"],["L54","19:07","19:24","19:25","19:28","19:29","19:37","19:39","19:42","19:44",null,null,null,null,null,null,"20:25","20:26","20:35","20:36","20:49"],["L56","19:30","19:47","19:48","19:51","19:52","20:00","20:02","20:05","20:07","20:14","20:15","20:22","20:23","20:31","20:32","20:48","20:49","20:58","20:59","21:10"],["L58",null,null,null,null,null,null,null,null,"20:51","20:58","20:59",null,null,null,null,"21:24","21:25","21:35","21:36","21:47"],["L60","20:30","20:47","20:48","20:51","20:52","21:00","21:02","21:05","21:07",null,null,null,null,null,null,"21:47","21:48","21:57","21:58","22:09"],["L62","21:07","21:24","21:25","21:28","21:29","21:37","21:39","21:42","21:44",null,null,null,null,null,null,"22:21","22:22","22:31","22:32","22:43"]]}')},4:function(l,n,e){},8:function(l){l.exports=JSON.parse('{"lines":[["L01","06:20","06:31","06:32","06:41","06:42","06:54","06:55","07:03","07:04","07:11","07:12","07:22","07:24","07:27","07:29","07:34","07:35","07:38","07:39","07:58"],["L03","07:10","07:21","07:22","07:31","07:32","07:44","07:45","07:53","07:54","08:01","08:02","08:12","08:14","08:17","08:19","08:24","08:25","08:28","08:29","08:48"],["L05","07:35","07:46","07:47","07:56","07:57",null,null,null,null,"08:20","08:21","08:33","08:35","08:38","08:40","08:45","08:46","08:48","08:49","09:06"],["L07","08:10","08:21","08:22","08:31","08:32","08:44","08:45","08:53","08:54","09:01","09:02","09:12","09:14","09:17","09:19","09:24","09:25","09:28","09:29","09:48"],["L09","08:35","08:45","08:46","08:56","08:57",null,null,null,null,null,null,"09:31","09:33","09:36","09:38","09:43","09:44","09:46","09:47","10:04"],["L11","09:10","09:21","09:22","09:31","09:32","09:44","09:45","09:53","09:54","10:01","10:02","10:12","10:14","10:17","10:19","10:24","10:25","10:28","10:29","10:48"],["L13","09:35","09:45","09:46","09:56","09:57",null,null,null,null,"10:20","10:21","10:31","10:33",null,null,null,null,null,null,null],["L15","10:10","10:21","10:22","10:31","10:32","10:44","10:45","10:53","10:54","11:01","11:02","11:12","11:14","11:17","11:19","11:24","11:25","11:28","11:29","11:48"],["L17","10:35","10:45","10:46","10:56","10:57",null,null,null,null,"11:20","11:21","11:31","11:33",null,null,null,null,null,null,null],["L19","11:10","11:21","11:22","11:31","11:32",null,null,null,null,null,null,"12:12","12:14","12:17","12:19","12:24","12:25","12:27","12:28","12:45"],["L21","11:35","11:45","11:46","11:56","11:57",null,null,null,null,"12:20","12:21","12:31","12:33",null,null,null,null,null,null,null],["L23","12:10","12:21","12:22","12:31","12:32","12:44","12:45","12:53","12:54","13:01","13:02","13:12","13:14","13:17","13:19","13:24","13:25","13:28","13:29","13:48"],["L25","12:35","12:45","12:46","12:56","12:57",null,null,null,null,"13:20","13:21","13:31","13:33",null,null,null,null,null,null,null],["L27","13:10","13:21","13:22","13:31","13:32",null,null,null,null,null,null,"14:12","14:14","14:17","14:19","14:24","14:25","14:27","14:28","14:45"],["L29","13:35","13:45","13:46","13:56","13:57",null,null,null,null,"14:20","14:21","14:31","14:33",null,null,null,null,null,null,null],["L31","14:10","14:21","14:22","14:31","14:32","14:44","14:45","14:53","14:54","15:01","15:02","15:12","15:14","15:17","15:19","15:24","15:25","15:28","15:29","15:48"],["L33","14:35","14:45","14:46","14:56","14:57",null,null,null,null,"15:20","15:21","15:31","15:33",null,null,null,null,null,null,null],["L35","15:10","15:21","15:22","15:31","15:32","15:44","15:45","15:53","15:54","16:01","16:02","16:12","16:14","16:17","16:19","16:24","16:25","16:28","16:29","16:48"],["L37","15:35","15:46","15:47","15:56","15:57",null,null,null,null,null,null,"16:31","16:33","16:36","16:38","16:43","16:44","16:46","16:47","17:04"],["L39","16:10","16:21","16:22","16:31","16:32","16:44","16:45","16:53","16:54","17:01","17:02","17:12","17:14","17:17","17:19","17:24","17:25","17:28","17:29","17:48"],["L41","16:35","16:46","16:47","16:56","16:57",null,null,null,null,null,null,"17:31","17:33","17:36","17:38","17:43","17:44","17:46","17:47","18:04"],["L43","17:10","17:21","17:22","17:31","17:32","17:44","17:45","17:53","17:54","18:01","18:02","18:12","18:14","18:17","18:19","18:24","18:25","18:28","18:29","18:48"],["L45","17:35","17:45","17:46","17:56","17:57",null,null,null,null,null,null,"18:31","18:33","18:36","18:38","18:43","18:44","18:46","18:47","19:04"],["L47","18:10","18:21","18:22","18:31","18:32","18:44","18:45","18:53","18:54","19:01","19:02","19:12","19:14","19:17","19:19","19:24","19:25","19:28","19:29","19:48"],["L49","18:35","18:46","18:47","18:56","18:57",null,null,null,null,"19:20","19:21","19:33","19:35","19:38","19:40","19:45","19:46","19:48","19:49","20:06"],["L51","19:10","19:21","19:22","19:31","19:32","19:44","19:45","19:53","19:54","20:01","20:02","20:12","20:14","20:17","20:19","20:24","20:25","20:28","20:29","20:48"],["L53","19:35","19:45","19:46","19:56","19:57",null,null,null,null,"20:20","20:21","20:31","20:33",null,null,null,null,null,null,null],["L55","20:10","20:21","20:22","20:31","20:32","20:44","20:45","20:53","20:54","21:01","21:02","21:12","21:14","21:17","21:19","21:24","21:25","21:28","21:29","21:48"],["L57","20:35","20:46","20:47","20:56","20:57",null,null,null,null,null,null,"21:31","21:33","21:36","21:38","21:43","21:44","21:46","21:47","22:04"],["L59","21:25","21:35","21:36","21:45","21:46",null,null,null,null,null,null,"22:18","22:20","22:23","22:25","22:30","22:31","22:33","22:34","22:51"],["L61","22:00","22:11","22:12","22:21","22:22",null,null,null,null,null,null,"22:58","23:00","23:03","23:05","23:10","23:11","23:13","23:14","23:31"]]}')}},[[11,1,2]]]);
//# sourceMappingURL=main.418047f8.chunk.js.map