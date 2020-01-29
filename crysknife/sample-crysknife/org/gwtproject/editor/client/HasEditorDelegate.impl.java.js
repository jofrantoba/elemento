goog.module('org.gwtproject.editor.client.HasEditorDelegate$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Editor = goog.require('org.gwtproject.editor.client.Editor$impl');

let EditorDelegate = goog.forwardDeclare('org.gwtproject.editor.client.EditorDelegate$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.editor.client.HasEditorDelegate.$LambdaAdaptor$impl');

/**
 * @interface
 * @template T
 * @extends {Editor<T>}
 */
class HasEditorDelegate {
 /**
  * @abstract
  * @param {EditorDelegate<T>} delegate
  * @public
  */
 m_setDelegate__org_gwtproject_editor_client_EditorDelegate(delegate) {}
 /**
  * @template T
  * @param {?function(EditorDelegate<T>):void} fn
  * @return {HasEditorDelegate<T>}
  * @public
  */
 static $adapt(fn) {
  HasEditorDelegate.$clinit();
  return /**@type {!$LambdaAdaptor<T>} */ (new $LambdaAdaptor(fn));
 }
 /**
  * @public
  */
 static $clinit() {
  HasEditorDelegate.$clinit = () =>{};
  HasEditorDelegate.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  Editor.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_editor_client_HasEditorDelegate = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_editor_client_HasEditorDelegate;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.editor.client.HasEditorDelegate.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(HasEditorDelegate, 'org.gwtproject.editor.client.HasEditorDelegate');

HasEditorDelegate.$markImplementor(/** @type {Function} */ (HasEditorDelegate));

exports = HasEditorDelegate; 
//# sourceMappingURL=HasEditorDelegate.js.map