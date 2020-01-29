goog.module('org.gwtproject.editor.client.IsEditor$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Editor = goog.forwardDeclare('org.gwtproject.editor.client.Editor$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.editor.client.IsEditor.$LambdaAdaptor$impl');

/**
 * @interface
 * @template E
 */
class IsEditor {
 /**
  * @abstract
  * @return {E}
  * @public
  */
 m_asEditor__() {}
 /**
  * @template E
  * @param {?function():E} fn
  * @return {IsEditor<E>}
  * @public
  */
 static $adapt(fn) {
  IsEditor.$clinit();
  return /**@type {!$LambdaAdaptor<E>} */ (new $LambdaAdaptor(fn));
 }
 /**
  * @public
  */
 static $clinit() {
  IsEditor.$clinit = () =>{};
  IsEditor.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_editor_client_IsEditor = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_editor_client_IsEditor;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.editor.client.IsEditor.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(IsEditor, 'org.gwtproject.editor.client.IsEditor');

IsEditor.$markImplementor(/** @type {Function} */ (IsEditor));

exports = IsEditor; 
//# sourceMappingURL=IsEditor.js.map