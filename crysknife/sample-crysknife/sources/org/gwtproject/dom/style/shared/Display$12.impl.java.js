goog.module('org.gwtproject.dom.style.shared.Display.$12$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Display = goog.require('org.gwtproject.dom.style.shared.Display$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $12 extends Display {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {?string} $name
  * @param {number} $ordinal
  * @return {!$12}
  * @public
  */
 static $create__java_lang_String__int($name, $ordinal) {
  $12.$clinit();
  let $instance = new $12();
  $instance.$ctor__org_gwtproject_dom_style_shared_Display_12__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 /**
  * @param {?string} $name
  * @param {number} $ordinal
  * @public
  */
 $ctor__org_gwtproject_dom_style_shared_Display_12__java_lang_String__int($name, $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_Display__java_lang_String__int($name, $ordinal);
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_getCssName__() {
  return "table-footer-group";
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @return {number}
  * @public
  */
 m_compareTo__java_lang_Object(arg0) {
  return super.compareTo(/**@type {Display} */ ($Casts.$to(arg0, Display)));
 }
 /**
  * @public
  */
 static $clinit() {
  $12.$clinit = () =>{};
  $12.$loadModules();
  Display.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof $12;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($12, 'org.gwtproject.dom.style.shared.Display$12');

exports = $12; 
//# sourceMappingURL=Display$12.js.map