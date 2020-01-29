goog.module('org.gwtproject.dom.style.shared.Display.$14$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Display = goog.require('org.gwtproject.dom.style.shared.Display$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $14 extends Display {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {?string} $name
  * @param {number} $ordinal
  * @return {!$14}
  * @public
  */
 static $create__java_lang_String__int($name, $ordinal) {
  $14.$clinit();
  let $instance = new $14();
  $instance.$ctor__org_gwtproject_dom_style_shared_Display_14__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 /**
  * @param {?string} $name
  * @param {number} $ordinal
  * @public
  */
 $ctor__org_gwtproject_dom_style_shared_Display_14__java_lang_String__int($name, $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_Display__java_lang_String__int($name, $ordinal);
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_getCssName__() {
  return "table-cell";
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
  $14.$clinit = () =>{};
  $14.$loadModules();
  Display.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof $14;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($14, 'org.gwtproject.dom.style.shared.Display$14');

exports = $14; 
//# sourceMappingURL=Display$14.js.map