(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[98],{KtOZ:function(e,n,t){(function(e){e(t("tA7P"))})((function(e){"use strict";var n=/[\w$]+/,t=500;e.registerHelper("hint","anyword",(function(i,r){var o=r&&r.word||n,s=r&&r.range||t,a=i.getCursor(),l=i.getLine(a.line),c=a.ch,w=c;while(w&&o.test(l.charAt(w-1)))--w;for(var p=w!=c&&l.slice(w,c),h=r&&r.list||[],u={},f=new RegExp(o.source,"g"),g=-1;g<=1;g+=2)for(var d=a.line,v=Math.min(Math.max(d+g*s,i.firstLine()),i.lastLine())+g;d!=v;d+=g){var x,L=i.getLine(d);while(x=f.exec(L))d==a.line&&x[0]===p||p&&0!=x[0].lastIndexOf(p,0)||Object.prototype.hasOwnProperty.call(u,x[0])||(u[x[0]]=!0,h.push(x[0]))}return{list:h,from:e.Pos(a.line,w),to:e.Pos(a.line,c)}}))}))}}]);