goog.module('org.gwtproject.dom.style.shared.Display.$18$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Display = goog.require('org.gwtproject.dom.style.shared.Display$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $18 extends Display {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$18} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $18.$clinit();
  let $instance = new $18();
  $instance.$ctor__org_gwtproject_dom_style_shared_Display_18__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_style_shared_Display_18__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_Display__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getCssName__() {
  return "flex";
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** * */ arg0) {
  return super.compareTo(/**@type {Display}*/ ($Casts.$to(arg0, Display)));
 }
 
 static $clinit() {
  $18.$clinit = () =>{};
  $18.$loadModules();
  Display.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $18;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($18, 'org.gwtproject.dom.style.shared.Display$18');

exports = $18; 
//# sourceMappingURL=Display$18.js.map