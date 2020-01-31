goog.module('org.gwtproject.editor.client.LeafValueEditor$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Editor = goog.require('org.gwtproject.editor.client.Editor$impl');

/**
 * @interface
 * @template T
 * @extends {Editor<T>}
 */
class LeafValueEditor {
 /** @abstract */
 m_setValue__java_lang_Object(/** T */ value) {}
 /** @abstract @return {T} */
 m_getValue__() {}
 
 static $clinit() {
  LeafValueEditor.$clinit = () =>{};
  LeafValueEditor.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Editor.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_editor_client_LeafValueEditor = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_editor_client_LeafValueEditor;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(LeafValueEditor, 'org.gwtproject.editor.client.LeafValueEditor');

LeafValueEditor.$markImplementor(/** @type {Function} */ (LeafValueEditor));

exports = LeafValueEditor; 
//# sourceMappingURL=LeafValueEditor.js.map