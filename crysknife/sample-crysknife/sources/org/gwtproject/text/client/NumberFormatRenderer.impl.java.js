goog.module('org.gwtproject.text.client.NumberFormatRenderer$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractRenderer = goog.require('org.gwtproject.text.shared.AbstractRenderer$impl');

let Number = goog.forwardDeclare('java.lang.Number$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let NumberFormat = goog.forwardDeclare('org.gwtproject.i18n.client.NumberFormat$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {AbstractRenderer<(Number|number)>}
  */
class NumberFormatRenderer extends AbstractRenderer {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {NumberFormat} */
  this.f_format__org_gwtproject_text_client_NumberFormatRenderer_;
 }
 /**
  * Factory method corresponding to constructor 'NumberFormatRenderer()'.
  * @return {!NumberFormatRenderer}
  * @public
  */
 static $create__() {
  NumberFormatRenderer.$clinit();
  let $instance = new NumberFormatRenderer();
  $instance.$ctor__org_gwtproject_text_client_NumberFormatRenderer__();
  return $instance;
 }
 /**
  * Initialization from constructor 'NumberFormatRenderer()'.
  * @public
  */
 $ctor__org_gwtproject_text_client_NumberFormatRenderer__() {
  this.$ctor__org_gwtproject_text_client_NumberFormatRenderer__org_gwtproject_i18n_client_NumberFormat(NumberFormat.m_getDecimalFormat__());
 }
 /**
  * Factory method corresponding to constructor 'NumberFormatRenderer(NumberFormat)'.
  * @param {NumberFormat} format
  * @return {!NumberFormatRenderer}
  * @public
  */
 static $create__org_gwtproject_i18n_client_NumberFormat(format) {
  NumberFormatRenderer.$clinit();
  let $instance = new NumberFormatRenderer();
  $instance.$ctor__org_gwtproject_text_client_NumberFormatRenderer__org_gwtproject_i18n_client_NumberFormat(format);
  return $instance;
 }
 /**
  * Initialization from constructor 'NumberFormatRenderer(NumberFormat)'.
  * @param {NumberFormat} format
  * @public
  */
 $ctor__org_gwtproject_text_client_NumberFormatRenderer__org_gwtproject_i18n_client_NumberFormat(format) {
  this.$ctor__org_gwtproject_text_shared_AbstractRenderer__();
  this.f_format__org_gwtproject_text_client_NumberFormatRenderer_ = format;
 }
 /**
  * @param {(Number|number)} object
  * @return {?string}
  * @public
  */
 m_render__java_lang_Number(object) {
  return $Equality.$same(object, null) ? "" : this.f_format__org_gwtproject_text_client_NumberFormatRenderer_.m_format__java_lang_Number(object);
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @return {?string}
  * @public
  */
 m_render__java_lang_Object(arg0) {
  return this.m_render__java_lang_Number(/**@type {(Number|number)} */ ($Casts.$to(arg0, Number)));
 }
 /**
  * @public
  */
 static $clinit() {
  NumberFormatRenderer.$clinit = () =>{};
  NumberFormatRenderer.$loadModules();
  AbstractRenderer.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof NumberFormatRenderer;
 }
 /**
  * @public
  */
 static $loadModules() {
  Number = goog.module.get('java.lang.Number$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  NumberFormat = goog.module.get('org.gwtproject.i18n.client.NumberFormat$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(NumberFormatRenderer, 'org.gwtproject.text.client.NumberFormatRenderer');

exports = NumberFormatRenderer; 
//# sourceMappingURL=NumberFormatRenderer.js.map