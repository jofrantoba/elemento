goog.module('org.gwtproject.dom.style.shared.Display.$10$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Display = goog.require('org.gwtproject.dom.style.shared.Display$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $10 extends Display {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$10} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $10.$clinit();
  let $instance = new $10();
  $instance.$ctor__org_gwtproject_dom_style_shared_Display_10__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_style_shared_Display_10__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_Display__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getCssName__() {
  return "table-column-group";
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** * */ arg0) {
  return super.compareTo(/**@type {Display}*/ ($Casts.$to(arg0, Display)));
 }
 
 static $clinit() {
  $10.$clinit = () =>{};
  $10.$loadModules();
  Display.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $10;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($10, 'org.gwtproject.dom.style.shared.Display$10');

exports = $10; 
//# sourceMappingURL=Display$10.js.map