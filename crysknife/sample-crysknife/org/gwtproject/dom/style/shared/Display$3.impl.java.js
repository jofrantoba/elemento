goog.module('org.gwtproject.dom.style.shared.Display.$3$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Display = goog.require('org.gwtproject.dom.style.shared.Display$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $3 extends Display {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {?string} $name
  * @param {number} $ordinal
  * @return {!$3}
  * @public
  */
 static $create__java_lang_String__int($name, $ordinal) {
  $3.$clinit();
  let $instance = new $3();
  $instance.$ctor__org_gwtproject_dom_style_shared_Display_3__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 /**
  * @param {?string} $name
  * @param {number} $ordinal
  * @public
  */
 $ctor__org_gwtproject_dom_style_shared_Display_3__java_lang_String__int($name, $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_Display__java_lang_String__int($name, $ordinal);
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_getCssName__() {
  return "inline";
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
  $3.$clinit = () =>{};
  $3.$loadModules();
  Display.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof $3;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($3, 'org.gwtproject.dom.style.shared.Display$3');

exports = $3; 
//# sourceMappingURL=Display$3.js.map