goog.module('org.gwtproject.text.shared.ToStringRenderer$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractRenderer = goog.require('org.gwtproject.text.shared.AbstractRenderer$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @extends {AbstractRenderer<*>}
  */
class ToStringRenderer extends AbstractRenderer {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {?string} */
  this.f_textForNull__org_gwtproject_text_shared_ToStringRenderer_;
 }
 /**
  * @return {ToStringRenderer}
  * @public
  */
 static m_instance__() {
  ToStringRenderer.$clinit();
  if ($Equality.$same(ToStringRenderer.f_instance__org_gwtproject_text_shared_ToStringRenderer_, null)) {
   ToStringRenderer.f_instance__org_gwtproject_text_shared_ToStringRenderer_ = ToStringRenderer.$create__java_lang_String("");
  }
  return ToStringRenderer.f_instance__org_gwtproject_text_shared_ToStringRenderer_;
 }
 /**
  * @param {?string} textForNull
  * @return {!ToStringRenderer}
  * @public
  */
 static $create__java_lang_String(textForNull) {
  ToStringRenderer.$clinit();
  let $instance = new ToStringRenderer();
  $instance.$ctor__org_gwtproject_text_shared_ToStringRenderer__java_lang_String(textForNull);
  return $instance;
 }
 /**
  * @param {?string} textForNull
  * @public
  */
 $ctor__org_gwtproject_text_shared_ToStringRenderer__java_lang_String(textForNull) {
  this.$ctor__org_gwtproject_text_shared_AbstractRenderer__();
  this.f_textForNull__org_gwtproject_text_shared_ToStringRenderer_ = textForNull;
 }
 /**
  * @override
  * @param {*} object
  * @return {?string}
  * @public
  */
 m_render__java_lang_Object(object) {
  return $Equality.$same(object, null) ? this.f_textForNull__org_gwtproject_text_shared_ToStringRenderer_ : $Objects.m_toString__java_lang_Object(object);
 }
 /**
  * @public
  */
 static $clinit() {
  ToStringRenderer.$clinit = () =>{};
  ToStringRenderer.$loadModules();
  AbstractRenderer.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof ToStringRenderer;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
 
}
$Util.$setClassMetadata(ToStringRenderer, 'org.gwtproject.text.shared.ToStringRenderer');

/** @public {ToStringRenderer} */
ToStringRenderer.f_instance__org_gwtproject_text_shared_ToStringRenderer_;

exports = ToStringRenderer; 
//# sourceMappingURL=ToStringRenderer.js.map