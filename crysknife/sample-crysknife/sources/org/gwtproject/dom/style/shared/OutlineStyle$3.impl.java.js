goog.module('org.gwtproject.dom.style.shared.OutlineStyle.$3$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const OutlineStyle = goog.require('org.gwtproject.dom.style.shared.OutlineStyle$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $3 extends OutlineStyle {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$3} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $3.$clinit();
  let $instance = new $3();
  $instance.$ctor__org_gwtproject_dom_style_shared_OutlineStyle_3__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_style_shared_OutlineStyle_3__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_OutlineStyle__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getCssName__() {
  return "dotted";
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** * */ arg0) {
  return super.compareTo(/**@type {OutlineStyle}*/ ($Casts.$to(arg0, OutlineStyle)));
 }
 
 static $clinit() {
  $3.$clinit = () =>{};
  $3.$loadModules();
  OutlineStyle.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $3;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($3, 'org.gwtproject.dom.style.shared.OutlineStyle$3');

exports = $3; 
//# sourceMappingURL=OutlineStyle$3.js.map