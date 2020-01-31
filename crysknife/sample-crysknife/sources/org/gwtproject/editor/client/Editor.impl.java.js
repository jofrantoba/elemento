goog.module('org.gwtproject.editor.client.Editor$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @template T
 */
class Editor {
 
 static $clinit() {
  Editor.$clinit = () =>{};
  Editor.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_editor_client_Editor = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_editor_client_Editor;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(Editor, 'org.gwtproject.editor.client.Editor');

Editor.$markImplementor(/** @type {Function} */ (Editor));

exports = Editor; 
//# sourceMappingURL=Editor.js.map