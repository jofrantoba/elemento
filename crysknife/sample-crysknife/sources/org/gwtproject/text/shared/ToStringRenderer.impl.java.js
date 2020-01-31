goog.module('org.gwtproject.text.shared.ToStringRenderer$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractRenderer = goog.require('org.gwtproject.text.shared.AbstractRenderer$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @extends {AbstractRenderer<*>}
  */
class ToStringRenderer extends AbstractRenderer {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_textForNull__org_gwtproject_text_shared_ToStringRenderer_;
 }
 /** @return {ToStringRenderer} */
 static m_instance__() {
  ToStringRenderer.$clinit();
  if ($Equality.$same(ToStringRenderer.f_instance__org_gwtproject_text_shared_ToStringRenderer_, null)) {
   ToStringRenderer.f_instance__org_gwtproject_text_shared_ToStringRenderer_ = ToStringRenderer.$create__java_lang_String("");
  }
  return ToStringRenderer.f_instance__org_gwtproject_text_shared_ToStringRenderer_;
 }
 /** @return {!ToStringRenderer} */
 static $create__java_lang_String(/** ?string */ textForNull) {
  ToStringRenderer.$clinit();
  let $instance = new ToStringRenderer();
  $instance.$ctor__org_gwtproject_text_shared_ToStringRenderer__java_lang_String(textForNull);
  return $instance;
 }
 
 $ctor__org_gwtproject_text_shared_ToStringRenderer__java_lang_String(/** ?string */ textForNull) {
  this.$ctor__org_gwtproject_text_shared_AbstractRenderer__();
  this.f_textForNull__org_gwtproject_text_shared_ToStringRenderer_ = textForNull;
 }
 /** @override @return {?string} */
 m_render__java_lang_Object(/** * */ object) {
  return $Equality.$same(object, null) ? this.f_textForNull__org_gwtproject_text_shared_ToStringRenderer_ : $Objects.m_toString__java_lang_Object(object);
 }
 
 static $clinit() {
  ToStringRenderer.$clinit = () =>{};
  ToStringRenderer.$loadModules();
  AbstractRenderer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ToStringRenderer;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
 
}
$Util.$setClassMetadata(ToStringRenderer, 'org.gwtproject.text.shared.ToStringRenderer');

/**@type {ToStringRenderer}*/
ToStringRenderer.f_instance__org_gwtproject_text_shared_ToStringRenderer_;

exports = ToStringRenderer; 
//# sourceMappingURL=ToStringRenderer.js.map