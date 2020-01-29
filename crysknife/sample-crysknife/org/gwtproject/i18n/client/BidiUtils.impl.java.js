goog.module('org.gwtproject.i18n.client.BidiUtils$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let Direction = goog.forwardDeclare('org.gwtproject.i18n.client.HasDirection.Direction$impl');

class BidiUtils extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!BidiUtils}
  * @public
  */
 static $create__() {
  BidiUtils.$clinit();
  let $instance = new BidiUtils();
  $instance.$ctor__org_gwtproject_i18n_client_BidiUtils__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_i18n_client_BidiUtils__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @param {Object} elem
  * @return {Direction}
  * @public
  */
 static m_getDirectionOnElement__org_gwtproject_dom_client_Element(elem) {
  BidiUtils.$clinit();
  let dirPropertyValue = $Overlay.m_getPropertyString__$devirt__org_gwtproject_dom_client_Element__java_lang_String(elem, BidiUtils.f_DIR_PROPERTY_NAME__org_gwtproject_i18n_client_BidiUtils);
  if (j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String(BidiUtils.f_DIR_PROPERTY_VALUE_RTL__org_gwtproject_i18n_client_BidiUtils_, dirPropertyValue)) {
   return Direction.f_RTL__org_gwtproject_i18n_client_HasDirection_Direction;
  } else if (j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String(BidiUtils.f_DIR_PROPERTY_VALUE_LTR__org_gwtproject_i18n_client_BidiUtils_, dirPropertyValue)) {
   return Direction.f_LTR__org_gwtproject_i18n_client_HasDirection_Direction;
  }
  return Direction.f_DEFAULT__org_gwtproject_i18n_client_HasDirection_Direction;
 }
 /**
  * @param {Object} elem
  * @param {Direction} direction
  * @public
  */
 static m_setDirectionOnElement__org_gwtproject_dom_client_Element__org_gwtproject_i18n_client_HasDirection_Direction(elem, direction) {
  BidiUtils.$clinit();
  switch (direction.ordinal()) {
   case Direction.$ordinal$f_RTL__org_gwtproject_i18n_client_HasDirection_Direction: 
    {
     $Overlay.m_setPropertyString__$devirt__org_gwtproject_dom_client_Element__java_lang_String__java_lang_String(elem, BidiUtils.f_DIR_PROPERTY_NAME__org_gwtproject_i18n_client_BidiUtils, BidiUtils.f_DIR_PROPERTY_VALUE_RTL__org_gwtproject_i18n_client_BidiUtils_);
     break;
    }
   case Direction.$ordinal$f_LTR__org_gwtproject_i18n_client_HasDirection_Direction: 
    {
     $Overlay.m_setPropertyString__$devirt__org_gwtproject_dom_client_Element__java_lang_String__java_lang_String(elem, BidiUtils.f_DIR_PROPERTY_NAME__org_gwtproject_i18n_client_BidiUtils, BidiUtils.f_DIR_PROPERTY_VALUE_LTR__org_gwtproject_i18n_client_BidiUtils_);
     break;
    }
   case Direction.$ordinal$f_DEFAULT__org_gwtproject_i18n_client_HasDirection_Direction: 
    {
     if (!$Equality.$same(BidiUtils.m_getDirectionOnElement__org_gwtproject_dom_client_Element(elem), Direction.f_DEFAULT__org_gwtproject_i18n_client_HasDirection_Direction)) {
      $Overlay.m_setPropertyString__$devirt__org_gwtproject_dom_client_Element__java_lang_String__java_lang_String(elem, BidiUtils.f_DIR_PROPERTY_NAME__org_gwtproject_i18n_client_BidiUtils, "");
     }
     break;
    }
  }
 }
 /**
  * @public
  */
 static $clinit() {
  BidiUtils.$clinit = () =>{};
  BidiUtils.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof BidiUtils;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  Direction = goog.module.get('org.gwtproject.i18n.client.HasDirection.Direction$impl');
 }
 
}
$Util.$setClassMetadata(BidiUtils, 'org.gwtproject.i18n.client.BidiUtils');

/** @public {?string} @const */
BidiUtils.f_DIR_PROPERTY_NAME__org_gwtproject_i18n_client_BidiUtils = "dir";
/** @public {?string} @const */
BidiUtils.f_DIR_PROPERTY_VALUE_RTL__org_gwtproject_i18n_client_BidiUtils_ = "rtl";
/** @public {?string} @const */
BidiUtils.f_DIR_PROPERTY_VALUE_LTR__org_gwtproject_i18n_client_BidiUtils_ = "ltr";

exports = BidiUtils; 
//# sourceMappingURL=BidiUtils.js.map