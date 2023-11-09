"use strict";(globalThis.webpackChunkth_v3=globalThis.webpackChunkth_v3||[]).push([[7663],{57663:(a,e,n)=>{n.r(e),n.d(e,{classBreaks:()=>I,heatmapStatistics:()=>h,histogram:()=>x,summaryStatistics:()=>v,uniqueValues:()=>p});n(59486),n(10064);var i=n(92026),t=n(17842),o=n(78952),l=n(58971),s=n(92975),r=(n(80031),n(27811)),u=n(15903),m=n(819),f=n(7882);let d=null;async function c(a,e){if(!e)return[];const n=a.field,i=a.valueExpression,t=a.normalizationType,l=a.normalizationField,s=a.normalizationTotal,r=[],f=a.viewInfoParams;let c=null,v=null;if(i){if(!d){const{arcadeUtils:a}=await(0,m.LC)();d=a}c=d.createFunction(i),v=f&&d.getViewInfo({viewingMode:f.viewingMode,scale:f.scale,spatialReference:new o.Z(f.spatialReference)})}const p=a.fieldInfos,I=e[0]&&"declaredClass"in e[0]&&"esri.Graphic"===e[0].declaredClass||!p?null:{fields:p};return e.forEach((a=>{const e=a.attributes;let o;if(i){const e=I?{...a,layer:I}:a,n=d.createExecContext(e,v);o=d.executeFunction(c,n)}else e&&(o=e[n]);if(t&&isFinite(o)){const a=e&&parseFloat(e[l]);o=(0,u.fk)(o,t,a,s)}r.push(o)})),r}async function v(a){const{attribute:e,features:n}=a,{normalizationType:i,normalizationField:t,minValue:o,maxValue:l,fieldType:s}=e,r=await c({field:e.field,valueExpression:e.valueExpression,normalizationType:i,normalizationField:t,normalizationTotal:e.normalizationTotal,viewInfoParams:e.viewInfoParams,fieldInfos:e.fieldInfos},n),m=(0,u.S5)({normalizationType:i,normalizationField:t,minValue:o,maxValue:l}),f={value:.5,fieldType:s},d="esriFieldTypeString"===s?(0,u.H0)({values:r,supportsNullCount:m,percentileParams:f}):(0,u.i5)({values:r,minValue:o,maxValue:l,useSampleStdDev:!i,supportsNullCount:m,percentileParams:f});return(0,u.F_)(d,"esriFieldTypeDate"===s)}async function p(a){const{attribute:e,features:n}=a,i=await c({field:e.field,valueExpression:e.valueExpression,viewInfoParams:e.viewInfoParams,fieldInfos:e.fieldInfos},n),t=(0,u.eT)(i);return(0,u.Qm)(t,e.domain,e.returnAllCodedValues)}async function I(a){const{attribute:e,features:n}=a,{field:i,normalizationType:t,normalizationField:o,normalizationTotal:l,classificationMethod:s}=e,r=await c({field:i,valueExpression:e.valueExpression,normalizationType:t,normalizationField:o,normalizationTotal:l,viewInfoParams:e.viewInfoParams,fieldInfos:e.fieldInfos},n),m=(0,u.G2)(r,{field:i,normalizationType:t,normalizationField:o,normalizationTotal:l,classificationMethod:s,standardDeviationInterval:e.standardDeviationInterval,numClasses:e.numClasses,minValue:e.minValue,maxValue:e.maxValue});return(0,u.DL)(m,s)}async function x(a){const{attribute:e,features:n}=a,{field:i,normalizationType:t,normalizationField:o,normalizationTotal:l,classificationMethod:s}=e,r=await c({field:i,valueExpression:e.valueExpression,normalizationType:t,normalizationField:o,normalizationTotal:l,viewInfoParams:e.viewInfoParams,fieldInfos:e.fieldInfos},n);return(0,u.oF)(r,{field:i,normalizationType:t,normalizationField:o,normalizationTotal:l,classificationMethod:s,standardDeviationInterval:e.standardDeviationInterval,numBins:e.numBins,minValue:e.minValue,maxValue:e.maxValue})}async function h(a){const{attribute:e,features:n}=a,{field:o,radius:u,fieldOffset:m,transform:d,spatialReference:c,size:v}=e,p=function(a,e,n,t){const o=(0,s.MP)(n)?(0,s.C5)(n):null,r=o?Math.round((o.valid[1]-o.valid[0])/e.scale[0]):null;return a.map((a=>{const n=new f.Z((0,i.Wg)(a.geometry));return(0,l.RF)(e,n,n,n.hasZ,n.hasM),a.geometry=o?function(a,e,n){return a.x<0?a.x+=e:a.x>n&&(a.x-=e),a}(n,r,t[0]):n,a}))}(n,d,c,v),{count:I,min:x,max:h,mean:z,stdDev:T}=function(a){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:18,n=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0,o=arguments.length>4?arguments[4]:void 0,l=arguments.length>5?arguments[5]:void 0;const s=new Float64Array(o*l);e=Math.round((0,t.F2)(e));let u=Number.POSITIVE_INFINITY,m=Number.NEGATIVE_INFINITY,f=0,d=0,c=0,v=0;const p=(0,r.wx)(i,n);for(const{geometry:t,attributes:x}of a){const{x:a,y:n}=t,i=Math.max(0,a-e),I=Math.max(0,n-e),h=Math.min(l,n+e),z=Math.min(o,a+e),T=+p(x);for(let t=I;t<h;t++)for(let l=i;l<z;l++){const i=t*o+l,p=(0,r.If)(l-a,t-n,e),I=s[i];f=s[i]+=p*T;const x=f-I;d+=x,c+=x*x,f<u&&(u=f),f>m&&(m=f),v++}}if(!v)return{mean:0,stddev:0,min:0,max:0,mid:0,count:0};const I=(m-u)/2;return{mean:d/v,stdDev:Math.sqrt((c-d*d/v)/v),min:u,max:m,mid:I,count:v}}(p,u,m,o,v[0],v[1]);return{count:I,min:x,max:h,avg:z,stddev:T}}}}]);
//# sourceMappingURL=7663.af356487.chunk.js.map