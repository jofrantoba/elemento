goog.module('org.gwtproject.editor.client.IsEditor$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Editor = goog.forwardDeclare('org.gwtproject.editor.client.Editor$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.editor.client.IsEditor.$LambdaAdaptor$impl');

/**
 * @interface
 * @template E
 */
class IsEditor {
 /** @abstract @return {E} */
 m_asEditor__() {}
 /** @template E @return {IsEditor<E>} */
 static $adapt(/** ?function():E */ fn) {
  IsEditor.$clinit();
  return /**@type {!$LambdaAdaptor<E>}*/ (new $LambdaAdaptor(fn));
 }
 
 static $clinit() {
  IsEditor.$clinit = () =>{};
  IsEditor.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_editor_client_IsEditor = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_editor_client_IsEditor;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.editor.client.IsEditor.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(IsEditor, 'org.gwtproject.editor.client.IsEditor');

IsEditor.$markImplementor(/** @type {Function} */ (IsEditor));

exports = IsEditor; 
//# sourceMappingURL=IsEditor.js.map