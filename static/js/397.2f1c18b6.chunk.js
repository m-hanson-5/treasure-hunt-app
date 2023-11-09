"use strict";(globalThis.webpackChunkth_v3=globalThis.webpackChunkth_v3||[]).push([[397],{50397:(e,t,r)=>{r.r(t),r.d(t,{default:()=>y});var i=r(27366),n=r(10064),s=r(92026),a=r(94172),o=r(49861),l=(r(63780),r(93169),r(25243),r(69912)),c=r(49818),d=r(99288),p=r(31666);function h(e,t){if((0,s.Wi)(e)&&(0,s.Wi)(t))return null;const r={};return(0,s.pC)(t)&&(r.geometry=t.toJSON()),(0,s.pC)(e)&&(r.where=e),r}let u=class extends d.default{constructor(){super(...arguments),this._enabledDataReceived=!1,this.errorString=null,this.connectionStatus="disconnected"}initialize(){this.handles.add([(0,a.YP)((()=>this.layer?.purgeOptions),(()=>this._update())),(0,a.YP)((()=>this.suspended),(e=>{e?this._proxy.pauseStream():this._proxy.resumeStream()}))])}get connectionError(){if(this.errorString)return new n.Z("stream-controller",this.errorString)}on(e,t){"data-received"===e&&(this._enabledDataReceived=!0,this._proxy.enableEvent("data-received",!0));const r=super.on(e,t),i=this;return{remove(){r.remove(),"data-received"===e&&(i._proxy.closed||i.hasEventListener("data-received")||i._proxy.enableEvent("data-received",!1))}}}queryLatestObservations(e,t){if(!this.layer.timeInfo.endField&&!this.layer.timeInfo.startField)throw new n.Z("streamlayer-no-timeField","queryLatestObservation can only be used with services that define a TrackIdField");return this._proxy.queryLatestObservations(this._cleanUpQuery(e),t).then((e=>{const t=c.default.fromJSON(e);return t.features.forEach((e=>{e.layer=this.layer,e.sourceLayer=this.layer})),t}))}detach(){super.detach(),this.connectionStatus="disconnected"}_createClientOptions(){return{...super._createClientOptions(),setProperty:e=>{this.set(e.propertyName,e.value)}}}_createTileRendererHash(e){const t=`${JSON.stringify(this.layer.purgeOptions)}.${JSON.stringify(h(this.layer.definitionExpression,this.layer.geometryDefinition))})`;return super._createTileRendererHash(e)+t}async _createServiceOptions(){const e=this.layer,{objectIdField:t}=e,r=e.fields.map((e=>e.toJSON())),i=(0,p.oq)(e.geometryType),n=e.timeInfo&&e.timeInfo.toJSON()||null,s=e.spatialReference?e.spatialReference.toJSON():null;return{type:"stream",fields:r,geometryType:i,objectIdField:t,timeInfo:n,source:this.layer.parsedUrl,serviceFilter:h(this.layer.definitionExpression,this.layer.geometryDefinition),purgeOptions:this.layer.purgeOptions.toJSON(),enableDataReceived:this._enabledDataReceived,spatialReference:s,maxReconnectionAttempts:this.layer.maxReconnectionAttempts,maxReconnectionInterval:this.layer.maxReconnectionInterval,updateInterval:this.layer.updateInterval,customParameters:e.customParameters}}};(0,i._)([(0,o.Cb)()],u.prototype,"errorString",void 0),(0,i._)([(0,o.Cb)({readOnly:!0})],u.prototype,"connectionError",null),(0,i._)([(0,o.Cb)()],u.prototype,"connectionStatus",void 0),u=(0,i._)([(0,l.j)("esri.views.2d.layers.StreamLayerView2D")],u);const y=u}}]);
//# sourceMappingURL=397.2f1c18b6.chunk.js.map