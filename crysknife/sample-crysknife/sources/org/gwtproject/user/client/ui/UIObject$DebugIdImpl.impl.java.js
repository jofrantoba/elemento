goog.module('org.gwtproject.user.client.ui.UIObject.DebugIdImpl$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let UIObject = goog.forwardDeclare('org.gwtproject.user.client.ui.UIObject$impl');

class DebugIdImpl extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DebugIdImpl} */
 static $create__() {
  DebugIdImpl.$clinit();
  let $instance = new DebugIdImpl();
  $instance.$ctor__org_gwtproject_user_client_ui_UIObject_DebugIdImpl__();
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_UIObject_DebugIdImpl__() {
  this.$ctor__java_lang_Object__();
 }
 
 m_ensureDebugId__org_gwtproject_user_client_ui_UIObject__java_lang_String(/** UIObject */ uiObject, /** ?string */ id) {}
 
 m_ensureDebugId__org_gwtproject_dom_client_Element__java_lang_String__java_lang_String(/** Object */ elem, /** ?string */ baseID, /** ?string */ id) {}
 
 static $clinit() {
  DebugIdImpl.$clinit = () =>{};
  DebugIdImpl.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DebugIdImpl;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DebugIdImpl, 'org.gwtproject.user.client.ui.UIObject$DebugIdImpl');

exports = DebugIdImpl; 
//# sourceMappingURL=UIObject$DebugIdImpl.js.map