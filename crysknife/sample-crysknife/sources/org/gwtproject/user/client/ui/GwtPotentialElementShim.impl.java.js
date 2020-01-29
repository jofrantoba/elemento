goog.module('org.gwtproject.user.client.ui.GwtPotentialElementShim$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let JsArray_$Overlay = goog.forwardDeclare('elemental2.core.JsArray.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let JavaScriptObject_$Overlay = goog.forwardDeclare('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');

class GwtPotentialElementShim extends Object {
 /**
  * @public
  */
 constructor() {
  GwtPotentialElementShim.$clinit();
  super();
  /** @public {?string} */
  this.className;
  /** @public {number} */
  this.clientHeight = 0;
  /** @public {number} */
  this.clientWidth = 0;
  /** @public {?string} */
  this.tagName;
  /** @public {?string} */
  this.dir;
  /** @public {?string} */
  this.href;
  /** @public {?string} */
  this.id;
  /** @public {?string} */
  this.lang;
  /** @public {number} */
  this.nodeType = 0;
  /** @public {?string} */
  this.src;
  /** @public {Array<?string>} */
  this.style;
  /** @public {?string} */
  this.title;
  /** @public {?function():void} */
  this.__gwt_resolve;
  this.$ctor__org_gwtproject_user_client_ui_GwtPotentialElementShim__();
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_GwtPotentialElementShim__() {
  this.$init___$p_org_gwtproject_user_client_ui_GwtPotentialElementShim();
 }
 /**
  * @param {?string} name
  * @return {*}
  * @public
  */
 getAttribute(name) {
  return $Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(Js.m_asPropertyMap__java_lang_Object(this), name);
 }
 /**
  * @param {?string} name
  * @public
  */
 removeAttribute(name) {
  $Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(Js.m_asPropertyMap__java_lang_Object(this), name, null);
 }
 /**
  * @param {?string} name
  * @param {?string} value
  * @public
  */
 setAttribute(name, value) {
  $Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(Js.m_asPropertyMap__java_lang_Object(this), name, value);
 }
 /**
  * @private
  */
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
  this.style = /**@type {!Array<?string>} */ (new Array());
  this.title = "";
 }
 /**
  * @public
  */
 static $clinit() {
  GwtPotentialElementShim.$clinit = () =>{};
  GwtPotentialElementShim.$loadModules();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof GwtPotentialElementShim;
 }
 /**
  * @public
  */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}
$Util.$setClassMetadata(GwtPotentialElementShim, 'org.gwtproject.user.client.ui.GwtPotentialElementShim');

exports = GwtPotentialElementShim; 
//# sourceMappingURL=GwtPotentialElementShim.js.map