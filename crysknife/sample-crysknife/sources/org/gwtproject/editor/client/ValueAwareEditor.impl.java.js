goog.module('org.gwtproject.editor.client.ValueAwareEditor$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasEditorDelegate = goog.require('org.gwtproject.editor.client.HasEditorDelegate$impl');

/**
 * @interface
 * @template T
 * @extends {HasEditorDelegate<T>}
 */
class ValueAwareEditor {
 /**
  * @abstract
  * @public
  */
 m_flush__() {}
 /**
  * @abstract
  * @param {Array<?string>} paths
  * @public
  */
 m_onPropertyChange__arrayOf_java_lang_String(paths) {}
 /**
  * @abstract
  * @param {T} value
  * @public
  */
 m_setValue__java_lang_Object(value) {}
 /**
  * @public
  */
 static $clinit() {
  ValueAwareEditor.$clinit = () =>{};
  ValueAwareEditor.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  HasEditorDelegate.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_editor_client_ValueAwareEditor = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_editor_client_ValueAwareEditor;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(ValueAwareEditor, 'org.gwtproject.editor.client.ValueAwareEditor');

ValueAwareEditor.$markImplementor(/** @type {Function} */ (ValueAwareEditor));

exports = ValueAwareEditor; 
//# sourceMappingURL=ValueAwareEditor.js.map