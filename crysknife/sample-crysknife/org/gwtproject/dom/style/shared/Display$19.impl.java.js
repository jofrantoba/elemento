goog.module('org.gwtproject.dom.style.shared.Display.$19$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Display = goog.require('org.gwtproject.dom.style.shared.Display$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $19 extends Display {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$19} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $19.$clinit();
  let $instance = new $19();
  $instance.$ctor__org_gwtproject_dom_style_shared_Display_19__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_style_shared_Display_19__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_Display__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getCssName__() {
  return "inline-flex";
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** * */ arg0) {
  return super.compareTo(/**@type {Display}*/ ($Casts.$to(arg0, Display)));
 }
 
 static $clinit() {
  $19.$clinit = () =>{};
  $19.$loadModules();
  Display.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $19;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($19, 'org.gwtproject.dom.style.shared.Display$19');

exports = $19; 
//# sourceMappingURL=Display$19.js.map