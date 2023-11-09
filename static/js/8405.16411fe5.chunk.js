"use strict";(globalThis.webpackChunkth_v3=globalThis.webpackChunkth_v3||[]).push([[8405],{95986:(e,t,i)=>{i.d(t,{y:()=>V});var s=i(27366),r=i(40281),a=i(60354),n=i(10064),h=i(94172),o=i(49861),l=(i(63780),i(93169),i(25243),i(69912)),p=i(33624),d=i(46784);i(32718),i(75366);let u=class extends d.wq{};u=(0,s._)([(0,l.j)("esri.views.layers.support.ClipArea")],u);const c=u;var g;let y=g=class extends c{constructor(){super(...arguments),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new g({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}get version(){return(this._get("version")||0)+1}};(0,s._)([(0,o.Cb)({type:[Number,String],json:{write:!0}})],y.prototype,"left",void 0),(0,s._)([(0,o.Cb)({type:[Number,String],json:{write:!0}})],y.prototype,"right",void 0),(0,s._)([(0,o.Cb)({type:[Number,String],json:{write:!0}})],y.prototype,"top",void 0),(0,s._)([(0,o.Cb)({type:[Number,String],json:{write:!0}})],y.prototype,"bottom",void 0),(0,s._)([(0,o.Cb)({readOnly:!0})],y.prototype,"version",null),y=g=(0,s._)([(0,l.j)("esri.views.layers.support.ClipRect")],y);const _=y;i(59486);var v,w=i(32238),f=i(77981),b=i(53866),m=i(80885);const C={base:w.Z,key:"type",typeMap:{extent:b.Z,polygon:m.Z}};let R=v=class extends c{constructor(){super(...arguments),this.type="geometry",this.geometry=null}get version(){return(this._get("version")||0)+1}clone(){return new v({geometry:this.geometry.clone()})}};(0,s._)([(0,o.Cb)({types:C,json:{read:f.im,write:!0}})],R.prototype,"geometry",void 0),(0,s._)([(0,o.Cb)({readOnly:!0})],R.prototype,"version",null),R=v=(0,s._)([(0,l.j)("esri.views.layers.support.Geometry")],R);const k=R;let S=class extends c{constructor(){super(...arguments),this.type="path",this.path=[]}get version(){return(this._get("version")||0)+1}};(0,s._)([(0,o.Cb)({type:[[[Number]]],json:{write:!0}})],S.prototype,"path",void 0),(0,s._)([(0,o.Cb)({readOnly:!0})],S.prototype,"version",null),S=(0,s._)([(0,l.j)("esri.views.layers.support.Path")],S);const I=S,M=r.Z.ofType({key:"type",base:c,typeMap:{rect:_,path:I,geometry:k}}),V=e=>{let t=class extends e{constructor(){super(...arguments),this.attached=!1,this.clips=new M,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1}initialize(){const e=this.view?.spatialReferenceLocked??!0,t=this.view?.spatialReference;t&&e&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new n.Z("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new p.W),this.container.fadeTransitionEnabled=!0,this.container.opacity=0,this.container.clips=this.clips,this.handles.add([(0,h.YP)((()=>this.suspended),(e=>{this.container&&(this.container.visible=!e),this.view&&!e&&this.updateRequested&&this.view.requestUpdate()}),h.tX),(0,h.YP)((()=>this.layer?.opacity??1),(e=>{this.container&&(this.container.opacity=e)}),h.tX),(0,h.YP)((()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal"),(e=>{this.container&&(this.container.blendMode=e)}),h.tX),(0,h.YP)((()=>this.layer&&"effect"in this.layer?this.layer.effect:null),(e=>{this.container&&(this.container.effect=e)}),h.tX),(0,h.on)((()=>this.clips),"change",(()=>{this.container&&(this.container.clips=this.clips)}))]),this.view?.whenLayerView?this.view.whenLayerView(this.layer).then((e=>{e===this&&this.processAttach()}),(()=>{})):this.when().then((()=>{this.processAttach()}),(()=>{})))}destroy(){this.processDetach(),this.updateRequested=!1}get spatialReferenceSupported(){const e=this.view?.spatialReference;return null==e||this.supportsSpatialReference(e)}get updating(){return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!!this.updatingHandles?.updating)}get visibleAtCurrentScale(){return this.isVisibleAtScale(this.view.scale)}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.detach(),this.updateRequested=!1)}isVisibleAtScale(e){const t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;if(!t)return!0;const{minScale:i,maxScale:s}=t;return(0===i||e<=i)&&(0===s||e>=s)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}processUpdate(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}hitTest(e,t){return Promise.resolve(null)}supportsSpatialReference(e){return!0}canResume(){return!!this.spatialReferenceSupported&&!!super.canResume()&&this.visibleAtCurrentScale}getSuspendInfo(){const e=super.getSuspendInfo(),t=!this.spatialReferenceSupported,i=this.visibleAtCurrentScale;return t&&(e.spatialReferenceNotSupported=t),i&&(e.outsideScaleRange=i),e}};return(0,s._)([(0,o.Cb)()],t.prototype,"attached",void 0),(0,s._)([(0,o.Cb)({type:M,set(e){const t=(0,a.Z)(e,this._get("clips"),M);this._set("clips",t)}})],t.prototype,"clips",void 0),(0,s._)([(0,o.Cb)()],t.prototype,"container",void 0),(0,s._)([(0,o.Cb)()],t.prototype,"moving",void 0),(0,s._)([(0,o.Cb)({readOnly:!0})],t.prototype,"spatialReferenceSupported",null),(0,s._)([(0,o.Cb)({readOnly:!0})],t.prototype,"updateParameters",void 0),(0,s._)([(0,o.Cb)()],t.prototype,"updateRequested",void 0),(0,s._)([(0,o.Cb)()],t.prototype,"updating",null),(0,s._)([(0,o.Cb)()],t.prototype,"view",void 0),(0,s._)([(0,o.Cb)({readOnly:!0})],t.prototype,"visibleAtCurrentScale",null),t=(0,s._)([(0,l.j)("esri.views.2d.layers.LayerView2D")],t),t}},58405:(e,t,i)=>{i.r(t),i.d(t,{default:()=>I});var s=i(27366),r=i(40281),a=i(77178),n=i(92026),h=i(94172),o=i(49861),l=(i(63780),i(93169),i(25243),i(69912)),p=i(40653),d=i(54889),u=i(16406),c=i(44745),g=i(21604),y=i(99821),_=i(70491),v=i(95986),w=i(75391),f=i(34035),b=i(67581);const m=Object.freeze({remove(){},pause(){},resume(){}}),C=["route-info","direction-line","direction-point","polygon-barrier","polyline-barrier","point-barrier","stop"],R={graphic:null,property:null,oldValue:null,newValue:null};function k(e){return e instanceof p.Z||e instanceof d.Z||e instanceof u.Z||e instanceof c.Z||e instanceof g.Z||e instanceof y.Z||e instanceof _.Z}let S=class extends((0,v.y)(b.Z)){constructor(){super(...arguments),this._graphics=new r.Z,this._highlightIds=new Map,this._networkFeatureMap=new Map,this._networkGraphicMap=new Map}get _routeItems(){return new a.Z({getCollections:()=>[(0,n.pC)(this.layer.routeInfo)?new r.Z([this.layer.routeInfo]):null,this.layer.directionLines,this.layer.directionPoints,this.layer.polygonBarriers,this.layer.polylineBarriers,this.layer.pointBarriers,this.layer.stops]})}initialize(){this.updatingHandles.addOnCollectionChange((()=>this._routeItems),(e=>this._routeItemsChanged(e)),h.nn)}destroy(){this.handles.removeAll(),this.updatingHandles.removeAll(),this._networkFeatureMap.clear(),this._networkGraphicMap.clear(),this._graphics.removeAll()}attach(){this._createGraphicsView()}detach(){this._destroyGraphicsView()}async fetchPopupFeatures(e){return this._graphicsView.hitTest(e).filter((e=>!!e.popupTemplate))}highlight(e){let t;t=k(e)?[this._getNetworkFeatureUid(e)]:function(e){return Array.isArray(e)&&e.length&&k(e[0])}(e)?e.map((e=>this._getNetworkFeatureUid(e))):function(e){return r.Z.isCollection(e)&&e.length&&k(e.getItemAt(0))}(e)?e.map((e=>this._getNetworkFeatureUid(e))).toArray():[e.uid];const i=t.filter(n.pC);return i.length?(this._addHighlight(i),{remove:()=>this._removeHighlight(i)}):m}async hitTest(e,t){if(this.suspended)return null;const i=this._graphicsView.hitTest(e).filter(n.pC).map((e=>this._networkGraphicMap.get(e)));if(!i.length)return null;const{layer:s}=this;return i.reverse().map((t=>({type:"route",layer:s,mapPoint:e,networkFeature:t})))}isUpdating(){return this._graphicsView.updating}moveStart(){}moveEnd(){}update(e){this._graphicsView.processUpdate(e)}viewChange(){this._graphicsView.viewChange()}_addHighlight(e){for(const t of e)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t);this._highlightIds.set(t,e+1)}else this._highlightIds.set(t,1);this._updateHighlight()}_createGraphic(e){const t=e.toGraphic();return t.layer=this.layer,t.sourceLayer=this.layer,t}_createGraphicsView(){const e=this.view,t=new w.Z(e.featuresTilingScheme);this._graphicsView=new f.Z({container:t,graphics:this._graphics,requestUpdateCallback:()=>this.requestUpdate(),view:e}),this.container.addChild(t),this._updateHighlight()}_destroyGraphicsView(){this.container.removeChild(this._graphicsView.container),this._graphicsView.destroy()}_getDrawOrder(e){const t=this._networkGraphicMap.get(e);return C.indexOf(t.type)}_getNetworkFeatureUid(e){return this._networkFeatureMap.has(e)?this._networkFeatureMap.get(e).uid:null}_removeHighlight(e){for(const t of e)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t)-1;0===e?this._highlightIds.delete(t):this._highlightIds.set(t,e)}this._updateHighlight()}_routeItemsChanged(e){if(e.removed.length){this._graphics.removeMany(e.removed.map((e=>{const t=this._networkFeatureMap.get(e);return this._networkFeatureMap.delete(e),this._networkGraphicMap.delete(t),t})));for(const t of e.removed)this.handles.remove(t)}if(e.added.length){this._graphics.addMany(e.added.map((e=>{const t=this._createGraphic(e);return(0,n.Wi)(t.symbol)?null:(this._networkFeatureMap.set(e,t),this._networkGraphicMap.set(t,e),t)})).filter(n.pC));for(const t of e.added)this.handles.add([(0,h.YP)((()=>t.geometry),((e,i)=>{this._updateGraphic(t,"geometry",e,i)})),(0,h.YP)((()=>t.symbol),((e,i)=>{this._updateGraphic(t,"symbol",e,i)}))],t);this._graphics.sort(((e,t)=>this._getDrawOrder(e)-this._getDrawOrder(t)))}}_updateGraphic(e,t,i,s){if(!this._networkFeatureMap.has(e)){const t=this._createGraphic(e);return this._networkFeatureMap.set(e,t),this._networkGraphicMap.set(t,e),void this._graphics.add(t)}const r=this._networkFeatureMap.get(e);r[t]=i,R.graphic=r,R.property=t,R.oldValue=s,R.newValue=i,this._graphicsView.graphicUpdateHandler(R)}_updateHighlight(){const e=Array.from(this._highlightIds.keys());this._graphicsView.setHighlight(e)}};(0,s._)([(0,o.Cb)()],S.prototype,"_graphics",void 0),(0,s._)([(0,o.Cb)()],S.prototype,"_routeItems",null),S=(0,s._)([(0,l.j)("esri.views.2d.layers.RouteLayerView2D")],S);const I=S},75391:(e,t,i)=>{i.d(t,{Z:()=>a});var s=i(80613),r=i(82022);class a extends r.Z{renderChildren(e){this.attributeView.bindTextures(e.context,!1),this.children.some((e=>e.hasData))&&(super.renderChildren(e),e.drawPhase===s.jx.MAP&&this._renderChildren(e),this.hasHighlight()&&e.drawPhase===s.jx.HIGHLIGHT&&this._renderHighlight(e),this._boundsRenderer&&this._boundsRenderer.doRender(e))}_renderHighlight(e){const{painter:t}=e,i=t.effects.highlight;i.bind(e),this._renderChildren(e,i.defines),i.draw(e),i.unbind()}}},67581:(e,t,i)=>{i.d(t,{Z:()=>g});var s=i(27366),r=i(85015),a=i(91505),n=i(41691),h=i(79056),o=i(32718),l=i(92026),p=i(67426),d=i(49861),u=(i(63780),i(93169),i(25243),i(69912));let c=class extends((0,n.p)((0,h.IG)((0,p.v)(a.Z.EventedMixin(r.Z))))){constructor(e){super(e),this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){const t=this.layer&&this.layer.id||"no id",i=this.layer&&this.layer.title||"no title";o.Z.getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${i}', id: '${t}')`,e)}}))}get fullOpacity(){return(0,l.Pt)(this.get("layer.opacity"),1)*(0,l.Pt)(this.get("parent.fullOpacity"),1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer?.legendEnabled}get updating(){return!(!this.updatingHandles?.updating&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){return!0===this.layer?.visible}set visible(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")}canResume(){return this.visible&&this.layer?.loaded&&!this.parent?.suspended&&this.view?.ready||!1}getSuspendInfo(){const e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return!1}};(0,s._)([(0,d.Cb)()],c.prototype,"fullOpacity",null),(0,s._)([(0,d.Cb)()],c.prototype,"layer",void 0),(0,s._)([(0,d.Cb)()],c.prototype,"parent",void 0),(0,s._)([(0,d.Cb)({readOnly:!0})],c.prototype,"suspended",null),(0,s._)([(0,d.Cb)({readOnly:!0})],c.prototype,"suspendInfo",null),(0,s._)([(0,d.Cb)({readOnly:!0})],c.prototype,"legendEnabled",null),(0,s._)([(0,d.Cb)({type:Boolean,readOnly:!0})],c.prototype,"updating",null),(0,s._)([(0,d.Cb)({readOnly:!0})],c.prototype,"updatingProgress",null),(0,s._)([(0,d.Cb)()],c.prototype,"visible",null),(0,s._)([(0,d.Cb)()],c.prototype,"view",void 0),c=(0,s._)([(0,u.j)("esri.views.layers.LayerView")],c);const g=c}}]);
//# sourceMappingURL=8405.16411fe5.chunk.js.map