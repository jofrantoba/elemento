goog.module('org.gwtproject.user.client.ui.impl.HyperlinkImpl$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
let Event = goog.forwardDeclare('org.gwtproject.user.client.Event$impl');

class HyperlinkImpl extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!HyperlinkImpl}
  * @public
  */
 static $create__() {
  HyperlinkImpl.$clinit();
  let $instance = new HyperlinkImpl();
  $instance.$ctor__org_gwtproject_user_client_ui_impl_HyperlinkImpl__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_impl_HyperlinkImpl__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @param {Event} event
  * @return {boolean}
  * @public
  */
 m_handleAsClick__org_gwtproject_user_client_Event(event) {
  let mouseButtons = $Overlay.m_getButton__$devirt__org_gwtproject_dom_client_NativeEvent(event);
  let alt = $Overlay.m_getAltKey__$devirt__org_gwtproject_dom_client_NativeEvent(event);
  let ctrl = $Overlay.m_getCtrlKey__$devirt__org_gwtproject_dom_client_NativeEvent(event);
  let meta = $Overlay.m_getMetaKey__$devirt__org_gwtproject_dom_client_NativeEvent(event);
  let shift = $Overlay.m_getShiftKey__$devirt__org_gwtproject_dom_client_NativeEvent(event);
  let modifiers = alt || ctrl || meta || shift;
  let middle = mouseButtons == $Overlay.f_BUTTON_MIDDLE__org_gwtproject_dom_client_NativeEvent_$Overlay;
  let right = mouseButtons == $Overlay.f_BUTTON_RIGHT__org_gwtproject_dom_client_NativeEvent_$Overlay;
  return !modifiers && !middle && !right;
 }
 /**
  * @public
  */
 static $clinit() {
  HyperlinkImpl.$clinit = () =>{};
  HyperlinkImpl.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof HyperlinkImpl;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Overlay = goog.module.get('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
 }
 
}
$Util.$setClassMetadata(HyperlinkImpl, 'org.gwtproject.user.client.ui.impl.HyperlinkImpl');

exports = HyperlinkImpl; 
//# sourceMappingURL=HyperlinkImpl.js.map