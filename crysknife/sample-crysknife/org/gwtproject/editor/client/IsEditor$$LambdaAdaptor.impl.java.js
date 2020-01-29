goog.module('org.gwtproject.editor.client.IsEditor.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsEditor = goog.require('org.gwtproject.editor.client.IsEditor$impl');

let Editor = goog.forwardDeclare('org.gwtproject.editor.client.Editor$impl');

/**
 * @template E
 * @implements {IsEditor<E>}
  */
class $LambdaAdaptor extends j_l_Object {
 /**
  * @param {?function():E} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function():E} */
  this.f_$$fn__org_gwtproject_editor_client_IsEditor_$LambdaAdaptor;
  this.$ctor__org_gwtproject_editor_client_IsEditor_$LambdaAdaptor__org_gwtproject_editor_client_IsEditor_$JsFunction(fn);
 }
 /**
  * @param {?function():E} fn
  * @public
  */
 $ctor__org_gwtproject_editor_client_IsEditor_$LambdaAdaptor__org_gwtproject_editor_client_IsEditor_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_editor_client_IsEditor_$LambdaAdaptor = fn;
 }
 /**
  * @return {E}
  * @public
  */
 m_asEditor__() {
  let /** ?function():E */ $function;
  return ($function = this.f_$$fn__org_gwtproject_editor_client_IsEditor_$LambdaAdaptor, $function());
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.editor.client.IsEditor$$LambdaAdaptor');

IsEditor.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=IsEditor$$LambdaAdaptor.js.map