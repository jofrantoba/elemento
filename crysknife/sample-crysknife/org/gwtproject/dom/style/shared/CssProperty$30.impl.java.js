goog.module('org.gwtproject.dom.style.shared.CssProperty.$30$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CssProperty = goog.require('org.gwtproject.dom.style.shared.CssProperty$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $30 extends CssProperty {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$30} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $30.$clinit();
  let $instance = new $30();
  $instance.$ctor__org_gwtproject_dom_style_shared_CssProperty_30__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_style_shared_CssProperty_30__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_CssProperty__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getJsName__() {
  return "cursor";
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** * */ arg0) {
  return super.compareTo(/**@type {CssProperty}*/ ($Casts.$to(arg0, CssProperty)));
 }
 
 static $clinit() {
  $30.$clinit = () =>{};
  $30.$loadModules();
  CssProperty.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $30;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($30, 'org.gwtproject.dom.style.shared.CssProperty$30');

exports = $30; 
//# sourceMappingURL=CssProperty$30.js.map