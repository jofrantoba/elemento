goog.module('org.gwtproject.user.client.ui.UIObject.DebugIdImplEnabled$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DebugIdImpl = goog.require('org.gwtproject.user.client.ui.UIObject.DebugIdImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let DebugInfo = goog.forwardDeclare('org.gwtproject.debug.client.DebugInfo$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let UIObject = goog.forwardDeclare('org.gwtproject.user.client.ui.UIObject$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');

class DebugIdImplEnabled extends DebugIdImpl {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!DebugIdImplEnabled}
  * @public
  */
 static $create__() {
  DebugIdImplEnabled.$clinit();
  let $instance = new DebugIdImplEnabled();
  $instance.$ctor__org_gwtproject_user_client_ui_UIObject_DebugIdImplEnabled__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_UIObject_DebugIdImplEnabled__() {
  this.$ctor__org_gwtproject_user_client_ui_UIObject_DebugIdImpl__();
 }
 /**
  * @override
  * @param {UIObject} uiObject
  * @param {?string} id
  * @public
  */
 m_ensureDebugId__org_gwtproject_user_client_ui_UIObject__java_lang_String(uiObject, id) {
  uiObject.m_onEnsureDebugId__java_lang_String(id);
 }
 /**
  * @override
  * @param {Object} elem
  * @param {?string} baseID
  * @param {?string} id
  * @public
  */
 m_ensureDebugId__org_gwtproject_dom_client_Element__java_lang_String__java_lang_String(elem, baseID, id) {
  $Asserts.$assert(!$Equality.$same(baseID, null));
  baseID = (j_l_String.m_length__java_lang_String(baseID) > 0) ? j_l_String.m_valueOf__java_lang_Object(baseID) + "-" : "";
  let prefix = DebugInfo.m_getDebugIdPrefix__();
  let debugId = j_l_String.m_valueOf__java_lang_Object(($Equality.$same(prefix, null) ? "" : prefix)) + j_l_String.m_valueOf__java_lang_Object(baseID) + j_l_String.m_valueOf__java_lang_Object(id);
  let attribute = DebugInfo.m_getDebugIdAttribute__();
  if (DebugInfo.m_isDebugIdAsProperty__()) {
   $Overlay.m_setPropertyString__$devirt__org_gwtproject_dom_client_Element__java_lang_String__java_lang_String(elem, attribute, debugId);
  } else {
   elem.setAttribute(attribute, debugId);
  }
 }
 /**
  * @public
  */
 static $clinit() {
  DebugIdImplEnabled.$clinit = () =>{};
  DebugIdImplEnabled.$loadModules();
  DebugIdImpl.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DebugIdImplEnabled;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  DebugInfo = goog.module.get('org.gwtproject.debug.client.DebugInfo$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
 }
 
}
$Util.$setClassMetadata(DebugIdImplEnabled, 'org.gwtproject.user.client.ui.UIObject$DebugIdImplEnabled');

exports = DebugIdImplEnabled; 
//# sourceMappingURL=UIObject$DebugIdImplEnabled.js.map