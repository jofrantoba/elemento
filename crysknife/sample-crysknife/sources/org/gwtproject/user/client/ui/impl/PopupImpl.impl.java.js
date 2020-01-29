goog.module('org.gwtproject.user.client.ui.impl.PopupImpl$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');
let Style_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Style.$Overlay$impl');

class PopupImpl extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!PopupImpl}
  * @public
  */
 static $create__() {
  PopupImpl.$clinit();
  let $instance = new PopupImpl();
  $instance.$ctor__org_gwtproject_user_client_ui_impl_PopupImpl__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_impl_PopupImpl__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @return {Object}
  * @public
  */
 m_createElement__() {
  return $Overlay.m_createDivElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__());
 }
 /**
  * @param {Object} popup
  * @return {Object}
  * @public
  */
 m_getContainerElement__org_gwtproject_dom_client_Element(popup) {
  return popup;
 }
 /**
  * @param {Object} popup
  * @return {Object}
  * @public
  */
 m_getStyleElement__org_gwtproject_dom_client_Element(popup) {
  return Node_$Overlay.m_getParentElement__$devirt__org_gwtproject_dom_client_Node(popup);
 }
 /**
  * @param {Object} popup
  * @param {?string} rect
  * @public
  */
 m_setClip__org_gwtproject_dom_client_Element__java_lang_String(popup, rect) {
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(popup.style, "clip", rect);
 }
 /**
  * @public
  */
 static $clinit() {
  PopupImpl.$clinit = () =>{};
  PopupImpl.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof PopupImpl;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Overlay = goog.module.get('org.gwtproject.dom.client.Document.$Overlay$impl');
  Node_$Overlay = goog.module.get('org.gwtproject.dom.client.Node.$Overlay$impl');
  Style_$Overlay = goog.module.get('org.gwtproject.dom.client.Style.$Overlay$impl');
 }
 
}
$Util.$setClassMetadata(PopupImpl, 'org.gwtproject.user.client.ui.impl.PopupImpl');

exports = PopupImpl; 
//# sourceMappingURL=PopupImpl.js.map