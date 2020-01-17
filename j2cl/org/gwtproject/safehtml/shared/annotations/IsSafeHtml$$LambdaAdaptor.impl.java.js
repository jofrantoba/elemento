goog.module('org.gwtproject.safehtml.shared.annotations.IsSafeHtml.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsSafeHtml = goog.require('org.gwtproject.safehtml.shared.annotations.IsSafeHtml$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');

/**
 * @implements {IsSafeHtml}
  */
class $LambdaAdaptor extends j_l_Object {
 /**
  * @param {?function():Class<?>} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function():Class<?>} */
  this.f_$$fn__org_gwtproject_safehtml_shared_annotations_IsSafeHtml_$LambdaAdaptor;
  this.$ctor__org_gwtproject_safehtml_shared_annotations_IsSafeHtml_$LambdaAdaptor__org_gwtproject_safehtml_shared_annotations_IsSafeHtml_$JsFunction(fn);
 }
 /**
  * @param {?function():Class<?>} fn
  * @public
  */
 $ctor__org_gwtproject_safehtml_shared_annotations_IsSafeHtml_$LambdaAdaptor__org_gwtproject_safehtml_shared_annotations_IsSafeHtml_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_safehtml_shared_annotations_IsSafeHtml_$LambdaAdaptor = fn;
 }
 /**
  * @return {Class<?>}
  * @public
  */
 m_annotationType__() {
  let /** ?function():Class<?> */ $function;
  return ($function = this.f_$$fn__org_gwtproject_safehtml_shared_annotations_IsSafeHtml_$LambdaAdaptor, $function());
 }
 /**
  * @public
  */
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof $LambdaAdaptor;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.safehtml.shared.annotations.IsSafeHtml$$LambdaAdaptor');

IsSafeHtml.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=IsSafeHtml$$LambdaAdaptor.js.map