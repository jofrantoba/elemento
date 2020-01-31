goog.module('org.gwtproject.text.client.LongRenderer$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractRenderer = goog.require('org.gwtproject.text.shared.AbstractRenderer$impl');

let Long = goog.forwardDeclare('java.lang.Long$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let NumberFormat = goog.forwardDeclare('org.gwtproject.i18n.client.NumberFormat$impl');
let Renderer = goog.forwardDeclare('org.gwtproject.text.shared.Renderer$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {AbstractRenderer<Long>}
  */
class LongRenderer extends AbstractRenderer {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {Renderer<Long>} */
 static m_instance__() {
  LongRenderer.$clinit();
  if ($Equality.$same(LongRenderer.f_INSTANCE__org_gwtproject_text_client_LongRenderer_, null)) {
   LongRenderer.f_INSTANCE__org_gwtproject_text_client_LongRenderer_ = LongRenderer.$create__();
  }
  return LongRenderer.f_INSTANCE__org_gwtproject_text_client_LongRenderer_;
 }
 /** @return {!LongRenderer} */
 static $create__() {
  LongRenderer.$clinit();
  let $instance = new LongRenderer();
  $instance.$ctor__org_gwtproject_text_client_LongRenderer__();
  return $instance;
 }
 
 $ctor__org_gwtproject_text_client_LongRenderer__() {
  this.$ctor__org_gwtproject_text_shared_AbstractRenderer__();
 }
 /** @return {?string} */
 m_render__java_lang_Long(/** Long */ object) {
  return $Equality.$same(object, null) ? "" : NumberFormat.m_getDecimalFormat__().m_format__java_lang_Number(object);
 }
 //Bridge method.
 /** @override @return {?string} */
 m_render__java_lang_Object(/** * */ arg0) {
  return this.m_render__java_lang_Long(/**@type {Long}*/ ($Casts.$to(arg0, Long)));
 }
 
 static $clinit() {
  LongRenderer.$clinit = () =>{};
  LongRenderer.$loadModules();
  AbstractRenderer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LongRenderer;
 }
 
 static $loadModules() {
  Long = goog.module.get('java.lang.Long$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  NumberFormat = goog.module.get('org.gwtproject.i18n.client.NumberFormat$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(LongRenderer, 'org.gwtproject.text.client.LongRenderer');

/**@type {LongRenderer}*/
LongRenderer.f_INSTANCE__org_gwtproject_text_client_LongRenderer_;

exports = LongRenderer; 
//# sourceMappingURL=LongRenderer.js.map