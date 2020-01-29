goog.module('org.gwtproject.editor.client.Editor$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @template T
 */
class Editor {
 /**
  * @public
  */
 static $clinit() {
  Editor.$clinit = () =>{};
  Editor.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_editor_client_Editor = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_editor_client_Editor;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(Editor, 'org.gwtproject.editor.client.Editor');

Editor.$markImplementor(/** @type {Function} */ (Editor));

exports = Editor; 
//# sourceMappingURL=Editor.js.map