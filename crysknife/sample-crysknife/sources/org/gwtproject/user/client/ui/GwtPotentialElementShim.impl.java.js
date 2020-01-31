goog.module('org.gwtproject.user.client.ui.GwtPotentialElementShim$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let JsArray_$Overlay = goog.forwardDeclare('elemental2.core.JsArray.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let JavaScriptObject_$Overlay = goog.forwardDeclare('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');

class GwtPotentialElementShim extends Object {
 
 constructor() {
  GwtPotentialElementShim.$clinit();
  super();
  /**@type {?string}*/
  this.className;
  /**@type {number}*/
  this.clientHeight = 0;
  /**@type {number}*/
  this.clientWidth = 0;
  /**@type {?string}*/
  this.tagName;
  /**@type {?string}*/
  this.dir;
  /**@type {?string}*/
  this.href;
  /**@type {?string}*/
  this.id;
  /**@type {?string}*/
  this.lang;
  /**@type {number}*/
  this.nodeType = 0;
  /**@type {?string}*/
  this.src;
  /**@type {Array<?string>}*/
  this.style;
  /**@type {?string}*/
  this.title;
  /**@type {?function():void}*/
  this.__gwt_resolve;
  this.$ctor__org_gwtproject_user_client_ui_GwtPotentialElementShim__();
 }
 
 $ctor__org_gwtproject_user_client_ui_GwtPotentialElementShim__() {
  this.$init___$p_org_gwtproject_user_client_ui_GwtPotentialElementShim();
 }
 /** @return {*} */
 getAttribute(/** ?string */ name) {
  return $Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(Js.m_asPropertyMap__java_lang_Object(this), name);
 }
 
 removeAttribute(/** ?string */ name) {
  $Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(Js.m_asPropertyMap__java_lang_Object(this), name, null);
 }
 
 setAttribute(/** ?string */ name, /** ?string */ value) {
  $Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(Js.m_asPropertyMap__java_lang_Object(this), name, value);
 }
 /** @private */
 $init___$p_org_gwtproject_user_client_ui_GwtPotentialElementShim() {
  this.className = "";
  this.clientHeight = 0;
  this.clientWidth = 0;
  this.tagName = "";
  this.dir = "";
  this.href = "";
  this.id = "";
  this.lang = "";
  this.nodeType = 1;
  this.src = "";
  this.style = /**@type {!Array<?string>}*/ (new Array());
  this.title = "";
 }
 
 static $clinit() {
  GwtPotentialElementShim.$clinit = () =>{};
  GwtPotentialElementShim.$loadModules();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof GwtPotentialElementShim;
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}
$Util.$setClassMetadata(GwtPotentialElementShim, 'org.gwtproject.user.client.ui.GwtPotentialElementShim');

exports = GwtPotentialElementShim; 
//# sourceMappingURL=GwtPotentialElementShim.js.map