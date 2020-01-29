goog.module('org.gwtproject.text.client.IntegerRenderer$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractRenderer = goog.require('org.gwtproject.text.shared.AbstractRenderer$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let NumberFormat = goog.forwardDeclare('org.gwtproject.i18n.client.NumberFormat$impl');
let Renderer = goog.forwardDeclare('org.gwtproject.text.shared.Renderer$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {AbstractRenderer<Integer>}
  */
class IntegerRenderer extends AbstractRenderer {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {Renderer<Integer>}
  * @public
  */
 static m_instance__() {
  IntegerRenderer.$clinit();
  if ($Equality.$same(IntegerRenderer.f_INSTANCE__org_gwtproject_text_client_IntegerRenderer_, null)) {
   IntegerRenderer.f_INSTANCE__org_gwtproject_text_client_IntegerRenderer_ = IntegerRenderer.$create__();
  }
  return IntegerRenderer.f_INSTANCE__org_gwtproject_text_client_IntegerRenderer_;
 }
 /**
  * @return {!IntegerRenderer}
  * @public
  */
 static $create__() {
  IntegerRenderer.$clinit();
  let $instance = new IntegerRenderer();
  $instance.$ctor__org_gwtproject_text_client_IntegerRenderer__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_text_client_IntegerRenderer__() {
  this.$ctor__org_gwtproject_text_shared_AbstractRenderer__();
 }
 /**
  * @param {Integer} object
  * @return {?string}
  * @public
  */
 m_render__java_lang_Integer(object) {
  return $Equality.$same(null, object) ? "" : NumberFormat.m_getDecimalFormat__().m_format__java_lang_Number(object);
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @return {?string}
  * @public
  */
 m_render__java_lang_Object(arg0) {
  return this.m_render__java_lang_Integer(/**@type {Integer} */ ($Casts.$to(arg0, Integer)));
 }
 /**
  * @public
  */
 static $clinit() {
  IntegerRenderer.$clinit = () =>{};
  IntegerRenderer.$loadModules();
  AbstractRenderer.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof IntegerRenderer;
 }
 /**
  * @public
  */
 static $loadModules() {
  Integer = goog.module.get('java.lang.Integer$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  NumberFormat = goog.module.get('org.gwtproject.i18n.client.NumberFormat$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(IntegerRenderer, 'org.gwtproject.text.client.IntegerRenderer');

/** @public {IntegerRenderer} */
IntegerRenderer.f_INSTANCE__org_gwtproject_text_client_IntegerRenderer_;

exports = IntegerRenderer; 
//# sourceMappingURL=IntegerRenderer.js.map