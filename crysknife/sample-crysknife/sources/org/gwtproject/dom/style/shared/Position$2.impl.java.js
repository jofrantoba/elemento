goog.module('org.gwtproject.dom.style.shared.Position.$2$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Position = goog.require('org.gwtproject.dom.style.shared.Position$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $2 extends Position {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$2} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $2.$clinit();
  let $instance = new $2();
  $instance.$ctor__org_gwtproject_dom_style_shared_Position_2__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_style_shared_Position_2__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_Position__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getCssName__() {
  return "relative";
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** * */ arg0) {
  return super.compareTo(/**@type {Position}*/ ($Casts.$to(arg0, Position)));
 }
 
 static $clinit() {
  $2.$clinit = () =>{};
  $2.$loadModules();
  Position.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $2;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($2, 'org.gwtproject.dom.style.shared.Position$2');

exports = $2; 
//# sourceMappingURL=Position$2.js.map