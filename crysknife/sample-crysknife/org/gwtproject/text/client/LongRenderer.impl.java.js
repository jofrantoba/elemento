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
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {Renderer<Long>}
  * @public
  */
 static m_instance__() {
  LongRenderer.$clinit();
  if ($Equality.$same(LongRenderer.f_INSTANCE__org_gwtproject_text_client_LongRenderer_, null)) {
   LongRenderer.f_INSTANCE__org_gwtproject_text_client_LongRenderer_ = LongRenderer.$create__();
  }
  return LongRenderer.f_INSTANCE__org_gwtproject_text_client_LongRenderer_;
 }
 /**
  * @return {!LongRenderer}
  * @public
  */
 static $create__() {
  LongRenderer.$clinit();
  let $instance = new LongRenderer();
  $instance.$ctor__org_gwtproject_text_client_LongRenderer__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_text_client_LongRenderer__() {
  this.$ctor__org_gwtproject_text_shared_AbstractRenderer__();
 }
 /**
  * @param {Long} object
  * @return {?string}
  * @public
  */
 m_render__java_lang_Long(object) {
  return $Equality.$same(object, null) ? "" : NumberFormat.m_getDecimalFormat__().m_format__java_lang_Number(object);
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @return {?string}
  * @public
  */
 m_render__java_lang_Object(arg0) {
  return this.m_render__java_lang_Long(/**@type {Long} */ ($Casts.$to(arg0, Long)));
 }
 /**
  * @public
  */
 static $clinit() {
  LongRenderer.$clinit = () =>{};
  LongRenderer.$loadModules();
  AbstractRenderer.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof LongRenderer;
 }
 /**
  * @public
  */
 static $loadModules() {
  Long = goog.module.get('java.lang.Long$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  NumberFormat = goog.module.get('org.gwtproject.i18n.client.NumberFormat$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(LongRenderer, 'org.gwtproject.text.client.LongRenderer');

/** @public {LongRenderer} */
LongRenderer.f_INSTANCE__org_gwtproject_text_client_LongRenderer_;

exports = LongRenderer; 
//# sourceMappingURL=LongRenderer.js.map