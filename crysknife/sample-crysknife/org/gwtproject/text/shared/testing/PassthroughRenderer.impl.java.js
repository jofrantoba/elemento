goog.module('org.gwtproject.text.shared.testing.PassthroughRenderer$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractRenderer = goog.require('org.gwtproject.text.shared.AbstractRenderer$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Renderer = goog.forwardDeclare('org.gwtproject.text.shared.Renderer$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {AbstractRenderer<?string>}
  */
class PassthroughRenderer extends AbstractRenderer {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {Renderer<?string>} */
 static m_instance__() {
  PassthroughRenderer.$clinit();
  if ($Equality.$same(PassthroughRenderer.f_INSTANCE__org_gwtproject_text_shared_testing_PassthroughRenderer_, null)) {
   PassthroughRenderer.f_INSTANCE__org_gwtproject_text_shared_testing_PassthroughRenderer_ = PassthroughRenderer.$create__();
  }
  return PassthroughRenderer.f_INSTANCE__org_gwtproject_text_shared_testing_PassthroughRenderer_;
 }
 /** @return {!PassthroughRenderer} */
 static $create__() {
  PassthroughRenderer.$clinit();
  let $instance = new PassthroughRenderer();
  $instance.$ctor__org_gwtproject_text_shared_testing_PassthroughRenderer__();
  return $instance;
 }
 
 $ctor__org_gwtproject_text_shared_testing_PassthroughRenderer__() {
  this.$ctor__org_gwtproject_text_shared_AbstractRenderer__();
 }
 /** @return {?string} */
 m_render__java_lang_String(/** ?string */ object) {
  return object;
 }
 //Bridge method.
 /** @override @return {?string} */
 m_render__java_lang_Object(/** * */ arg0) {
  return this.m_render__java_lang_String(/**@type {?string}*/ ($Casts.$to(arg0, j_l_String)));
 }
 
 static $clinit() {
  PassthroughRenderer.$clinit = () =>{};
  PassthroughRenderer.$loadModules();
  AbstractRenderer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PassthroughRenderer;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(PassthroughRenderer, 'org.gwtproject.text.shared.testing.PassthroughRenderer');

/**@type {PassthroughRenderer}*/
PassthroughRenderer.f_INSTANCE__org_gwtproject_text_shared_testing_PassthroughRenderer_;

exports = PassthroughRenderer; 
//# sourceMappingURL=PassthroughRenderer.js.map