"use strict";(globalThis.webpackChunkth_v3=globalThis.webpackChunkth_v3||[]).push([[5396],{42388:(e,t,r)=>{r.d(t,{j:()=>h});var s=r(27366),a=r(85015),i=r(41691),o=r(49861),n=(r(63780),r(93169),r(25243),r(69912));const l={visible:"visibleSublayers"};let h=class extends((0,i.p)(a.Z)){constructor(e){super(e),this.scale=0}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.handles.remove("layer"),e&&this.handles.add([e.sublayers.on("change",(()=>this.notifyChange("visibleSublayers"))),e.on("wms-sublayer-update",(e=>this.notifyChange(l[e.propertyName])))],"layer"))}get layers(){const{visibleSublayers:e}=this;return e.filter((e=>e.name)).map((e=>e.name)).join(",")}get version(){this.commitProperty("layers");const e=this.layer;return e&&e.commitProperty("imageTransparency"),(this._get("version")||0)+1}get visibleSublayers(){const{layer:e,scale:t}=this,r=e?.sublayers,s=[],a=e=>{const{minScale:r,maxScale:i,sublayers:o,visible:n}=e;n&&(0===t||(0===r||t<=r)&&(0===i||t>=i))&&(o?o.forEach(a):s.unshift(e))};return r?.forEach(a),s}toJSON(){const{layer:e,layers:t}=this,{imageFormat:r,imageTransparency:s,version:a}=e;return{format:r,request:"GetMap",service:"WMS",styles:"",transparent:s?"TRUE":"FALSE",version:a,layers:t}}};(0,s._)([(0,o.Cb)()],h.prototype,"layer",null),(0,s._)([(0,o.Cb)({readOnly:!0})],h.prototype,"layers",null),(0,s._)([(0,o.Cb)({type:Number})],h.prototype,"scale",void 0),(0,s._)([(0,o.Cb)({readOnly:!0})],h.prototype,"version",null),(0,s._)([(0,o.Cb)({readOnly:!0})],h.prototype,"visibleSublayers",null),h=(0,s._)([(0,n.j)("esri.layers.support.ExportWMSImageParameters")],h)},15396:(e,t,r)=>{r.r(t),r.d(t,{default:()=>w});var s=r(27366),a=r(32718),i=r(66978),o=r(94172),n=r(49861),l=(r(63780),r(93169),r(25243),r(69912)),h=r(53866),p=r(90110),u=r(95986),y=r(9229),c=r(67581),m=r(13107),d=r(10064),g=r(45948),v=r(42388);const b=e=>{let t=class extends e{initialize(){this.exportImageParameters=new v.j({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get exportImageVersion(){return this.exportImageParameters?.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}fetchPopupFeatures(e){const{layer:t}=this;if(!e)return Promise.reject(new d.Z("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:t}));const{popupEnabled:r}=t;if(!r)return Promise.reject(new d.Z("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:r}));const s=this.createFetchPopupFeaturesQuery(e);if(!s)return Promise.resolve([]);const{extent:a,width:i,height:o,x:n,y:l}=s;if(!(a&&i&&o))throw new d.Z("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:a,width:i,height:o});const h=t.fetchFeatureInfo(a,i,o,n,l);return Promise.resolve(h?[h]:[])}};return(0,s._)([(0,n.Cb)()],t.prototype,"exportImageParameters",void 0),(0,s._)([(0,n.Cb)({readOnly:!0})],t.prototype,"exportImageVersion",null),(0,s._)([(0,n.Cb)()],t.prototype,"layer",void 0),(0,s._)([(0,n.Cb)(g.qG)],t.prototype,"timeExtent",void 0),t=(0,s._)([(0,l.j)("esri.layers.mixins.WMSLayerView")],t),t},x=a.Z.getLogger("esri.views.2d.layers.WMSLayerView2D");let f=class extends(b((0,m.Z)((0,u.y)(c.Z)))){constructor(){super(...arguments),this.container=new p.c}supportsSpatialReference(e){return this.layer.serviceSupportsSpatialReference(e)}update(e){this.strategy.update(e).catch((e=>{(0,i.D_)(e)||x.error(e)}))}attach(){const{layer:e,container:t}=this,{imageMaxHeight:r,imageMaxWidth:s}=e;this.strategy=new y.Z({container:t,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:r,imageMaxWidth:s,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this.handles.add((0,o.YP)((()=>this.exportImageVersion),(()=>this.requestUpdate())),"exportImageVersion")}detach(){this.handles.remove("exportImageVersion"),this.strategy.destroy(),this.strategy=null,this.container.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}createFetchPopupFeaturesQuery(e){const{view:t,container:r}=this,{x:s,y:a}=e,{spatialReference:i}=t;let o=null,n=0,l=0;if(r.children.some((e=>{const{width:t,height:r,resolution:p,x:u,y:y}=e,c=u+p*t,m=y-p*r;return s>=u&&s<=c&&a<=y&&a>=m&&(o=new h.Z({xmin:u,ymin:m,xmax:c,ymax:y,spatialReference:i}),n=t,l=r,!0)})),!o)return null;const p=o.width/n,u=Math.round((s-o.xmin)/p),y=Math.round((o.ymax-a)/p);return{extent:o,width:n,height:l,x:u,y:y}}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,t,r,s){return this.layer.fetchImage(e,t,r,{timeExtent:this.timeExtent,...s})}};(0,s._)([(0,n.Cb)()],f.prototype,"strategy",void 0),(0,s._)([(0,n.Cb)()],f.prototype,"updating",void 0),f=(0,s._)([(0,l.j)("esri.views.2d.layers.WMSLayerView2D")],f);const w=f}}]);
//# sourceMappingURL=5396.4fb365fc.chunk.js.map