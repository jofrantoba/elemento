goog.module('org.gwtproject.dom.style.shared.CssProperty.$48$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CssProperty = goog.require('org.gwtproject.dom.style.shared.CssProperty$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $48 extends CssProperty {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$48} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $48.$clinit();
  let $instance = new $48();
  $instance.$ctor__org_gwtproject_dom_style_shared_CssProperty_48__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_style_shared_CssProperty_48__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_CssProperty__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getJsName__() {
  return "outlineColor";
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** * */ arg0) {
  return super.compareTo(/**@type {CssProperty}*/ ($Casts.$to(arg0, CssProperty)));
 }
 
 static $clinit() {
  $48.$clinit = () =>{};
  $48.$loadModules();
  CssProperty.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $48;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($48, 'org.gwtproject.dom.style.shared.CssProperty$48');

exports = $48; 
//# sourceMappingURL=CssProperty$48.js.map