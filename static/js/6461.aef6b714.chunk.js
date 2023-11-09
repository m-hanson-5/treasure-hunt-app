"use strict";(globalThis.webpackChunkth_v3=globalThis.webpackChunkth_v3||[]).push([[6461],{16461:(e,t,r)=>{r.r(t),r.d(t,{default:()=>h});r(59486);var s=r(92026),o=r(42306),n=r(99278),i=r(45502),a=r(17314),f=r(80394),l=r(21449),c=r(64145),p=r(77960),m=r(55343),u=r(55185),y=r(53866);class h{convertVectorFieldData(e){const t=n.Z.fromJSON(e.pixelBlock),r=(0,c.KC)(t,e.type);return Promise.resolve((0,s.pC)(r)&&r.toJSON())}async decode(e){const t=await(0,i.J)(e.data,e.options);return t&&t.toJSON()}symbolize(e){e.pixelBlock=n.Z.fromJSON(e.pixelBlock),e.extent=e.extent?y.Z.fromJSON(e.extent):null;const t=this.symbolizer.symbolize(e);return Promise.resolve((0,s.pC)(t)&&t.toJSON())}async updateSymbolizer(e){this.symbolizer=m.Z.fromJSON(e.symbolizerJSON),e.histograms&&"rasterStretch"===this.symbolizer?.rendererJSON.type&&(this.symbolizer.rendererJSON.histograms=e.histograms)}stretch(e){const t=this.symbolizer.simpleStretch(n.Z.fromJSON(e.srcPixelBlock),e.stretchParams);return Promise.resolve((0,s.pC)(t)&&t.toJSON())}estimateStatisticsHistograms(e){const t=(0,l.Hv)(n.Z.fromJSON(e.srcPixelBlock));return Promise.resolve(t)}split(e){const t=(0,a.Vl)(n.Z.fromJSON(e.srcPixelBlock),e.tileSize,e.maximumPyramidLevel);return t&&t.forEach(((e,r)=>{t.set(r,e?.toJSON())})),Promise.resolve(t)}async mosaicAndTransform(e){const t=e.srcPixelBlocks.map((e=>e?new n.Z(e):null)),r=(0,a.us)(t,e.srcMosaicSize,{blockWidths:e.blockWidths,alignmentInfo:e.alignmentInfo,clipOffset:e.clipOffset,clipSize:e.clipSize});let o,i=r;return e.coefs&&(i=(0,a.Uk)(r,e.destDimension,e.coefs,e.sampleSpacing,e.interpolation)),e.projectDirections&&e.gcsGrid&&(o=(0,a.Qh)(e.destDimension,e.gcsGrid),i=(0,s.Wg)((0,c.xQ)(i,e.isUV?"vector-uv":"vector-magdir",o))),{pixelBlock:i?.toJSON(),localNorthDirections:o}}async createFlowMesh(e,t){const r={data:new Float32Array(e.flowData.buffer),mask:new Uint8Array(e.flowData.maskBuffer),width:e.flowData.width,height:e.flowData.height},{vertexData:s,indexData:o}=await(0,u.GE)(e.meshType,e.simulationSettings,r,t.signal);return{result:{vertexBuffer:s.buffer,indexBuffer:o.buffer},transferList:[s.buffer,o.buffer]}}async getProjectionOffsetGrid(e){const t=y.Z.fromJSON(e.projectedExtent),r=y.Z.fromJSON(e.srcBufferExtent);let s=null;e.datumTransformationSteps&&(s=new o.Z({steps:e.datumTransformationSteps})),(e.includeGCSGrid||(0,f.Mk)(t.spatialReference,r.spatialReference,s))&&await(0,f.zD)();const n=e.rasterTransform?(0,p.c)(e.rasterTransform):null;return(0,f.Qp)({...e,projectedExtent:t,srcBufferExtent:r,datumTransformation:s,rasterTransform:n})}}},32935:(e,t,r)=>{r.d(t,{Z:()=>f});var s=r(27366),o=r(46784),n=r(49861),i=(r(63780),r(93169),r(25243),r(69912));let a=class extends o.wq{get affectsPixelSize(){return!1}forwardTransform(e){return e}inverseTransform(e){return e}};(0,s._)([(0,n.Cb)()],a.prototype,"affectsPixelSize",null),(0,s._)([(0,n.Cb)({json:{write:!0}})],a.prototype,"spatialReference",void 0),a=(0,s._)([(0,i.j)("esri.layers.support.rasterTransforms.BaseRasterTransform")],a);const f=a},3089:(e,t,r)=>{r.d(t,{Z:()=>l});var s=r(27366),o=r(49861),n=(r(63780),r(93169),r(25243),r(27135)),i=r(69912),a=r(32935);let f=class extends a.Z{constructor(){super(...arguments),this.type="gcs-shift",this.tolerance=1e-8}forwardTransform(e){return"point"===(e=e.clone()).type?(e.x>180+this.tolerance&&(e.x-=360),e):(e.xmin>=180-this.tolerance?(e.xmax-=360,e.xmin-=360):e.xmax>180+this.tolerance&&(e.xmin=-180,e.xmax=180),e)}inverseTransform(e){return"point"===(e=e.clone()).type?(e.x<-this.tolerance&&(e.x+=360),e):(e.xmin<-this.tolerance&&(e.xmin+=360,e.xmax+=360),e)}};(0,s._)([(0,n.J)({GCSShiftXform:"gcs-shift"})],f.prototype,"type",void 0),(0,s._)([(0,o.Cb)()],f.prototype,"tolerance",void 0),f=(0,s._)([(0,i.j)("esri.layers.support.rasterTransforms.GCSShiftTransform")],f);const l=f},69405:(e,t,r)=>{r.d(t,{Z:()=>h});var s=r(27366),o=(r(59486),r(49861)),n=(r(63780),r(93169),r(25243),r(27135)),i=r(38511),a=r(69912),f=r(31201),l=r(32935),c=r(7882),p=r(53866);function m(e,t,r){const{x:s,y:o}=t;if(r<2)return{x:e[0]+s*e[2]+o*e[4],y:e[1]+s*e[3]+o*e[5]};if(2===r){const t=s*s,r=o*o,n=s*o;return{x:e[0]+s*e[2]+o*e[4]+t*e[6]+n*e[8]+r*e[10],y:e[1]+s*e[3]+o*e[5]+t*e[7]+n*e[9]+r*e[11]}}const n=s*s,i=o*o,a=s*o,f=n*s,l=n*o,c=s*i,p=o*i;return{x:e[0]+s*e[2]+o*e[4]+n*e[6]+a*e[8]+i*e[10]+f*e[12]+l*e[14]+c*e[16]+p*e[18],y:e[1]+s*e[3]+o*e[5]+n*e[7]+a*e[9]+i*e[11]+f*e[13]+l*e[15]+c*e[17]+p*e[19]}}function u(e,t,r){const{xmin:s,ymin:o,xmax:n,ymax:i,spatialReference:a}=t;let f=[];if(r<2)f.push({x:s,y:i}),f.push({x:n,y:i}),f.push({x:s,y:o}),f.push({x:n,y:o});else{let e=10;for(let t=0;t<e;t++)f.push({x:s,y:o+(i-o)*t/(e-1)}),f.push({x:n,y:o+(i-o)*t/(e-1)});e=8;for(let t=1;t<=e;t++)f.push({x:s+(n-s)*t/e,y:o}),f.push({x:s+(n-s)*t/e,y:i})}f=f.map((t=>m(e,t,r)));const l=f.map((e=>e.x)),c=f.map((e=>e.y));return new p.Z({xmin:Math.min.apply(null,l),xmax:Math.max.apply(null,l),ymin:Math.min.apply(null,c),ymax:Math.max.apply(null,c),spatialReference:a})}let y=class extends l.Z{constructor(){super(...arguments),this.polynomialOrder=1,this.type="polynomial"}readForwardCoefficients(e,t){const{coeffX:r,coeffY:s}=t;if(!r?.length||!s?.length||r.length!==s.length)return null;const o=[];for(let n=0;n<r.length;n++)o.push(r[n]),o.push(s[n]);return o}writeForwardCoefficients(e,t,r){const s=[],o=[];for(let n=0;n<e?.length;n++)n%2==0?s.push(e[n]):o.push(e[n]);t.coeffX=s,t.coeffY=o}get inverseCoefficients(){let e=this._get("inverseCoefficients");const t=this._get("forwardCoefficients");return!e&&t&&this.polynomialOrder<2&&(e=function(e){const[t,r,s,o,n,i]=e,a=s*i-n*o,f=n*o-s*i;return[(n*r-t*i)/a,(s*r-t*o)/f,i/a,o/f,-n/a,-s/f]}(t)),e}set inverseCoefficients(e){this._set("inverseCoefficients",e)}readInverseCoefficients(e,t){const{inverseCoeffX:r,inverseCoeffY:s}=t;if(!r?.length||!s?.length||r.length!==s.length)return null;const o=[];for(let n=0;n<r.length;n++)o.push(r[n]),o.push(s[n]);return o}writeInverseCoefficients(e,t,r){const s=[],o=[];for(let n=0;n<e?.length;n++)n%2==0?s.push(e[n]):o.push(e[n]);t.inverseCoeffX=s,t.inverseCoeffY=o}get affectsPixelSize(){return this.polynomialOrder>0}forwardTransform(e){if("point"===e.type){const t=m(this.forwardCoefficients,e,this.polynomialOrder);return new c.Z({x:t.x,y:t.y,spatialReference:e.spatialReference})}return u(this.forwardCoefficients,e,this.polynomialOrder)}inverseTransform(e){if("point"===e.type){const t=m(this.inverseCoefficients,e,this.polynomialOrder);return new c.Z({x:t.x,y:t.y,spatialReference:e.spatialReference})}return u(this.inverseCoefficients,e,this.polynomialOrder)}};(0,s._)([(0,o.Cb)({json:{write:!0}})],y.prototype,"polynomialOrder",void 0),(0,s._)([(0,o.Cb)()],y.prototype,"forwardCoefficients",void 0),(0,s._)([(0,i.r)("forwardCoefficients",["coeffX","coeffY"])],y.prototype,"readForwardCoefficients",null),(0,s._)([(0,f.c)("forwardCoefficients")],y.prototype,"writeForwardCoefficients",null),(0,s._)([(0,o.Cb)({json:{write:!0}})],y.prototype,"inverseCoefficients",null),(0,s._)([(0,i.r)("inverseCoefficients",["inverseCoeffX","inverseCoeffY"])],y.prototype,"readInverseCoefficients",null),(0,s._)([(0,f.c)("inverseCoefficients")],y.prototype,"writeInverseCoefficients",null),(0,s._)([(0,o.Cb)()],y.prototype,"affectsPixelSize",null),(0,s._)([(0,n.J)({PolynomialXform:"polynomial"})],y.prototype,"type",void 0),y=(0,s._)([(0,a.j)("esri.layers.support.rasterTransforms.PolynomialTransform")],y);const h=y},77960:(e,t,r)=>{r.d(t,{j:()=>u,c:()=>y});var s=r(3089),o=r(27366),n=(r(32718),r(25243),r(63780),r(93169),r(75366),r(27135)),i=r(69912),a=r(32935);let f=class extends a.Z{constructor(){super(...arguments),this.type="identity"}};(0,o._)([(0,n.J)({IdentityXform:"identity"})],f.prototype,"type",void 0),f=(0,o._)([(0,i.j)("esri.layers.support.rasterTransforms.IdentityTransform")],f);const l=f;var c=r(69405);const p={GCSShiftXform:s.Z,IdentityXform:l,PolynomialXform:c.Z},m=Object.keys(p);function u(e){const t=e?.type;return!e||m.includes(t)}function y(e){const t=e?.type;if(!t)return null;const r=p[e?.type];if(r){const t=new r;return t.read(e),t}return null}}}]);
//# sourceMappingURL=6461.aef6b714.chunk.js.map