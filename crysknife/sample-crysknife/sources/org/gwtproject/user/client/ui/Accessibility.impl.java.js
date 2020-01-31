goog.module('org.gwtproject.user.client.ui.Accessibility$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');

/**
 * @deprecated
  */
class Accessibility extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {?string} */
 static m_getRole__org_gwtproject_dom_client_Element(/** Object */ elem) {
  Accessibility.$clinit();
  return $Overlay.m_getAttribute__$devirt__org_gwtproject_dom_client_Element__java_lang_String(elem, Accessibility.f_ATTR_NAME_ROLE__org_gwtproject_user_client_ui_Accessibility_);
 }
 /** @return {?string} */
 static m_getState__org_gwtproject_dom_client_Element__java_lang_String(/** Object */ elem, /** ?string */ stateName) {
  Accessibility.$clinit();
  return $Overlay.m_getAttribute__$devirt__org_gwtproject_dom_client_Element__java_lang_String(elem, stateName);
 }
 
 static m_removeState__org_gwtproject_dom_client_Element__java_lang_String(/** Object */ elem, /** ?string */ stateName) {
  Accessibility.$clinit();
  elem.removeAttribute(stateName);
 }
 
 static m_setRole__org_gwtproject_dom_client_Element__java_lang_String(/** Object */ elem, /** ?string */ roleName) {
  Accessibility.$clinit();
  elem.setAttribute(Accessibility.f_ATTR_NAME_ROLE__org_gwtproject_user_client_ui_Accessibility_, roleName);
 }
 
 static m_setState__org_gwtproject_dom_client_Element__java_lang_String__java_lang_String(/** Object */ elem, /** ?string */ stateName, /** ?string */ stateValue) {
  Accessibility.$clinit();
  elem.setAttribute(stateName, stateValue);
 }
 /** @return {!Accessibility} */
 static $create__() {
  let $instance = new Accessibility();
  $instance.$ctor__org_gwtproject_user_client_ui_Accessibility__();
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_Accessibility__() {
  this.$ctor__java_lang_Object__();
 }
 
 static $clinit() {
  Accessibility.$clinit = () =>{};
  Accessibility.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Accessibility;
 }
 
 static $loadModules() {
  $Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
 }
 
}
$Util.$setClassMetadata(Accessibility, 'org.gwtproject.user.client.ui.Accessibility');

/**@const {?string}*/
Accessibility.f_ROLE_TREE__org_gwtproject_user_client_ui_Accessibility = "tree";
/**@const {?string}*/
Accessibility.f_ROLE_TREEITEM__org_gwtproject_user_client_ui_Accessibility = "treeitem";
/**@const {?string}*/
Accessibility.f_ROLE_BUTTON__org_gwtproject_user_client_ui_Accessibility = "button";
/**@const {?string}*/
Accessibility.f_ROLE_TABLIST__org_gwtproject_user_client_ui_Accessibility = "tablist";
/**@const {?string}*/
Accessibility.f_ROLE_TAB__org_gwtproject_user_client_ui_Accessibility = "tab";
/**@const {?string}*/
Accessibility.f_ROLE_TABPANEL__org_gwtproject_user_client_ui_Accessibility = "tabpanel";
/**@const {?string}*/
Accessibility.f_ROLE_MENUBAR__org_gwtproject_user_client_ui_Accessibility = "menubar";
/**@const {?string}*/
Accessibility.f_ROLE_MENUITEM__org_gwtproject_user_client_ui_Accessibility = "menuitem";
/**@const {?string}*/
Accessibility.f_STATE_ACTIVEDESCENDANT__org_gwtproject_user_client_ui_Accessibility = "aria-activedescendant";
/**@const {?string}*/
Accessibility.f_STATE_POSINSET__org_gwtproject_user_client_ui_Accessibility = "aria-posinset";
/**@const {?string}*/
Accessibility.f_STATE_SETSIZE__org_gwtproject_user_client_ui_Accessibility = "aria-setsize";
/**@const {?string}*/
Accessibility.f_STATE_SELECTED__org_gwtproject_user_client_ui_Accessibility = "aria-selected";
/**@const {?string}*/
Accessibility.f_STATE_EXPANDED__org_gwtproject_user_client_ui_Accessibility = "aria-expanded";
/**@const {?string}*/
Accessibility.f_STATE_LEVEL__org_gwtproject_user_client_ui_Accessibility = "aria-level";
/**@const {?string}*/
Accessibility.f_STATE_HASPOPUP__org_gwtproject_user_client_ui_Accessibility = "aria-haspopup";
/**@const {?string}*/
Accessibility.f_STATE_PRESSED__org_gwtproject_user_client_ui_Accessibility = "aria-pressed";
/**@const {?string}*/
Accessibility.f_ATTR_NAME_ROLE__org_gwtproject_user_client_ui_Accessibility_ = "role";

exports = Accessibility; 
//# sourceMappingURL=Accessibility.js.map