goog.module('org.gwtproject.user.client.ui.Accessibility$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');

/**
 * @deprecated
  */
class Accessibility extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {Object} elem
  * @return {?string}
  * @public
  */
 static m_getRole__org_gwtproject_dom_client_Element(elem) {
  Accessibility.$clinit();
  return $Overlay.m_getAttribute__$devirt__org_gwtproject_dom_client_Element__java_lang_String(elem, Accessibility.f_ATTR_NAME_ROLE__org_gwtproject_user_client_ui_Accessibility_);
 }
 /**
  * @param {Object} elem
  * @param {?string} stateName
  * @return {?string}
  * @public
  */
 static m_getState__org_gwtproject_dom_client_Element__java_lang_String(elem, stateName) {
  Accessibility.$clinit();
  return $Overlay.m_getAttribute__$devirt__org_gwtproject_dom_client_Element__java_lang_String(elem, stateName);
 }
 /**
  * @param {Object} elem
  * @param {?string} stateName
  * @public
  */
 static m_removeState__org_gwtproject_dom_client_Element__java_lang_String(elem, stateName) {
  Accessibility.$clinit();
  elem.removeAttribute(stateName);
 }
 /**
  * @param {Object} elem
  * @param {?string} roleName
  * @public
  */
 static m_setRole__org_gwtproject_dom_client_Element__java_lang_String(elem, roleName) {
  Accessibility.$clinit();
  elem.setAttribute(Accessibility.f_ATTR_NAME_ROLE__org_gwtproject_user_client_ui_Accessibility_, roleName);
 }
 /**
  * @param {Object} elem
  * @param {?string} stateName
  * @param {?string} stateValue
  * @public
  */
 static m_setState__org_gwtproject_dom_client_Element__java_lang_String__java_lang_String(elem, stateName, stateValue) {
  Accessibility.$clinit();
  elem.setAttribute(stateName, stateValue);
 }
 /**
  * @return {!Accessibility}
  * @public
  */
 static $create__() {
  let $instance = new Accessibility();
  $instance.$ctor__org_gwtproject_user_client_ui_Accessibility__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_Accessibility__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @public
  */
 static $clinit() {
  Accessibility.$clinit = () =>{};
  Accessibility.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof Accessibility;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
 }
 
}
$Util.$setClassMetadata(Accessibility, 'org.gwtproject.user.client.ui.Accessibility');

/** @public {?string} @const */
Accessibility.f_ROLE_TREE__org_gwtproject_user_client_ui_Accessibility = "tree";
/** @public {?string} @const */
Accessibility.f_ROLE_TREEITEM__org_gwtproject_user_client_ui_Accessibility = "treeitem";
/** @public {?string} @const */
Accessibility.f_ROLE_BUTTON__org_gwtproject_user_client_ui_Accessibility = "button";
/** @public {?string} @const */
Accessibility.f_ROLE_TABLIST__org_gwtproject_user_client_ui_Accessibility = "tablist";
/** @public {?string} @const */
Accessibility.f_ROLE_TAB__org_gwtproject_user_client_ui_Accessibility = "tab";
/** @public {?string} @const */
Accessibility.f_ROLE_TABPANEL__org_gwtproject_user_client_ui_Accessibility = "tabpanel";
/** @public {?string} @const */
Accessibility.f_ROLE_MENUBAR__org_gwtproject_user_client_ui_Accessibility = "menubar";
/** @public {?string} @const */
Accessibility.f_ROLE_MENUITEM__org_gwtproject_user_client_ui_Accessibility = "menuitem";
/** @public {?string} @const */
Accessibility.f_STATE_ACTIVEDESCENDANT__org_gwtproject_user_client_ui_Accessibility = "aria-activedescendant";
/** @public {?string} @const */
Accessibility.f_STATE_POSINSET__org_gwtproject_user_client_ui_Accessibility = "aria-posinset";
/** @public {?string} @const */
Accessibility.f_STATE_SETSIZE__org_gwtproject_user_client_ui_Accessibility = "aria-setsize";
/** @public {?string} @const */
Accessibility.f_STATE_SELECTED__org_gwtproject_user_client_ui_Accessibility = "aria-selected";
/** @public {?string} @const */
Accessibility.f_STATE_EXPANDED__org_gwtproject_user_client_ui_Accessibility = "aria-expanded";
/** @public {?string} @const */
Accessibility.f_STATE_LEVEL__org_gwtproject_user_client_ui_Accessibility = "aria-level";
/** @public {?string} @const */
Accessibility.f_STATE_HASPOPUP__org_gwtproject_user_client_ui_Accessibility = "aria-haspopup";
/** @public {?string} @const */
Accessibility.f_STATE_PRESSED__org_gwtproject_user_client_ui_Accessibility = "aria-pressed";
/** @public {?string} @const */
Accessibility.f_ATTR_NAME_ROLE__org_gwtproject_user_client_ui_Accessibility_ = "role";

exports = Accessibility; 
//# sourceMappingURL=Accessibility.js.map