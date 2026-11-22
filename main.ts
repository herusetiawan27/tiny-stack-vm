import{readFileSync as R,writeFileSync as W,mkdirSync as M}from"node:fs";
const{MAKEFUN_INPUT_DIR:A="/input",MAKEFUN_OUTPUT_DIR:B="/output"}=process.env;
function r(g,w){let m=[],s=[],c=[],x=0,y=0,q=0,t=0,o=Buffer.alloc(65536),l=0,n=g.length,k=0,e=0,a=0;
let T=e=>[o.slice(0,l),e];
for(;;){if(t++>=1e6)return T(10);if(q<0|q>=n)return T(9);let h=g[q],v="0Aa46:;?pppppppp999999959995999p999pppppppppppppPTTP0ppppppppppp58pppppppppppppp4414".charCodeAt(h)-48;if(!(v<64))return T(5);let u=v>>2&3,z=+"0124"[v>>4];v&=3;
if(q+z>=n)return T(9);
if(x<u)return T(2);if(x-u+v>256)return T(3);let j=q+1+z;
if(h==3|h==4|h==6){if(h>3)s[x]=s[x-u];x+=v-u}else switch(h){case 0:return T(0);case 1:s[x++]=g.readInt8(q+1);break;case 2:s[x++]=g.readInt32LE(q+1);break;case 5:{e=s[x-1];s[x-1]=s[x-2];s[x-2]=e;break}case 7:{e=s[x-3];s[x-3]=s[x-2];s[x-2]=s[x-1];s[x-1]=e;break}case 23:case 27:s[x-1]=h==23?-s[x-1]|0:~s[x-1];break;case 48:case 49:case 50:{let e=g.readInt16LE(q+1),d=h==48||(h==49?s[--x]==0:s[--x]!=0);if(d)j=q+3+e;break}case 51:{if(y>=64)return T(7);c[y++]=q+3;j=g[q+1]|g[q+2]<<8;break}case 52:{if(!y)return T(8);j=c[--y];break}case 64:{e=s[x-1];if(e>>>0>255)return T(6);s[x-1]=m[e]|0;break}case 65:{e=s[--x],a=s[--x];if(e>>>0>255)return T(6);m[e]=a;break}case 80:{e=""+s[--x];if(l+e.length>65536)return T(11);l+=o.write(e,l);break}case 81:{if(l>65535)return T(11);o[l++]=s[--x]&255;break}case 82:s[x++]=w[k++]??-1;break;case 83:return T(s[--x]&255);default:{let b=s[--x];a=s[x-1];e=0;if(h==21|h==22|h==34){a>>>=0;b>>>=0}if(h>=19&&h<=22&&!b)return T(4);s[x-1]=[a+b|0,a-b|0,Math.imul(a,b),a/b|0,a%b|0,a&b,a|b,a^b,a<<(b&31),a>>(b&31),a>>>(b&31)|0,+(a==b),+(a<b),+(a<b)][h-16-2*(h>20)-(h>23)-(h>27)-(h>31)]}}
q=j}}
for(let i=0;++i<41;){let d="i"+("00"+i).slice(-3),g=R(A+"/"+d+"/program.bin"),w;try{w=R(A+"/"+d+"/input.bin")}catch{w=[]}let[o,e]=r(g,w),y=B+"/"+d;M(y,{recursive:!0});W(y+"/stdout.bin",o);W(y+"/exit.txt",e+"\n")}
