goog.module('org.gwtproject.text.client.DoubleRenderer$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractRenderer = goog.require('org.gwtproject.text.shared.AbstractRenderer$impl');

let Double = goog.forwardDeclare('java.lang.Double$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let NumberFormat = goog.forwardDeclare('org.gwtproject.i18n.client.NumberFormat$impl');
let Renderer = goog.forwardDeclare('org.gwtproject.text.shared.Renderer$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {AbstractRenderer<?number>}
  */
class DoubleRenderer extends AbstractRenderer {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {Renderer<?number>} */
 static m_instance__() {
  DoubleRenderer.$clinit();
  if ($Equality.$same(DoubleRenderer.f_INSTANCE__org_gwtproject_text_client_DoubleRenderer_, null)) {
   DoubleRenderer.f_INSTANCE__org_gwtproject_text_client_DoubleRenderer_ = DoubleRenderer.$create__();
  }
  return DoubleRenderer.f_INSTANCE__org_gwtproject_text_client_DoubleRenderer_;
 }
 /** @return {!DoubleRenderer} */
 static $create__() {
  DoubleRenderer.$clinit();
  let $instance = new DoubleRenderer();
  $instance.$ctor__org_gwtproject_text_client_DoubleRenderer__();
  return $instance;
 }
 
 $ctor__org_gwtproject_text_client_DoubleRenderer__() {
  this.$ctor__org_gwtproject_text_shared_AbstractRenderer__();
 }
 /** @return {?string} */
 m_render__java_lang_Double(/** ?number */ object) {
  return $Equality.$same(object, null) ? "" : NumberFormat.m_getDecimalFormat__().m_format__java_lang_Number(object);
 }
 //Bridge method.
 /** @override @return {?string} */
 m_render__java_lang_Object(/** * */ arg0) {
  return this.m_render__java_lang_Double(/**@type {?number}*/ ($Casts.$to(arg0, Double)));
 }
 
 static $clinit() {
  DoubleRenderer.$clinit = () =>{};
  DoubleRenderer.$loadModules();
  AbstractRenderer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DoubleRenderer;
 }
 
 static $loadModules() {
  Double = goog.module.get('java.lang.Double$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  NumberFormat = goog.module.get('org.gwtproject.i18n.client.NumberFormat$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(DoubleRenderer, 'org.gwtproject.text.client.DoubleRenderer');

/**@type {DoubleRenderer}*/
DoubleRenderer.f_INSTANCE__org_gwtproject_text_client_DoubleRenderer_;

exports = DoubleRenderer; 
//# sourceMappingURL=DoubleRenderer.js.map