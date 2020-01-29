goog.module('org.gwtproject.editor.client.annotation.IsDriver.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDriver = goog.require('org.gwtproject.editor.client.annotation.IsDriver$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');

/**
 * @implements {IsDriver}
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
  this.f_$$fn__org_gwtproject_editor_client_annotation_IsDriver_$LambdaAdaptor;
  this.$ctor__org_gwtproject_editor_client_annotation_IsDriver_$LambdaAdaptor__org_gwtproject_editor_client_annotation_IsDriver_$JsFunction(fn);
 }
 /**
  * @param {?function():Class<?>} fn
  * @public
  */
 $ctor__org_gwtproject_editor_client_annotation_IsDriver_$LambdaAdaptor__org_gwtproject_editor_client_annotation_IsDriver_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_editor_client_annotation_IsDriver_$LambdaAdaptor = fn;
 }
 /**
  * @return {Class<?>}
  * @public
  */
 m_annotationType__() {
  let /** ?function():Class<?> */ $function;
  return ($function = this.f_$$fn__org_gwtproject_editor_client_annotation_IsDriver_$LambdaAdaptor, $function());
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.editor.client.annotation.IsDriver$$LambdaAdaptor');

IsDriver.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=IsDriver$$LambdaAdaptor.js.map