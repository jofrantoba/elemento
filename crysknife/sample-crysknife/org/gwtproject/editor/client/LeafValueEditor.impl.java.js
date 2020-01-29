goog.module('org.gwtproject.editor.client.LeafValueEditor$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Editor = goog.require('org.gwtproject.editor.client.Editor$impl');

/**
 * @interface
 * @template T
 * @extends {Editor<T>}
 */
class LeafValueEditor {
 /**
  * @abstract
  * @param {T} value
  * @public
  */
 m_setValue__java_lang_Object(value) {}
 /**
  * @abstract
  * @return {T}
  * @public
  */
 m_getValue__() {}
 /**
  * @public
  */
 static $clinit() {
  LeafValueEditor.$clinit = () =>{};
  LeafValueEditor.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_editor_client_LeafValueEditor = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_editor_client_LeafValueEditor;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(LeafValueEditor, 'org.gwtproject.editor.client.LeafValueEditor');

LeafValueEditor.$markImplementor(/** @type {Function} */ (LeafValueEditor));

exports = LeafValueEditor; 
//# sourceMappingURL=LeafValueEditor.js.map