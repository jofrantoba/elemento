goog.module('org.gwtproject.editor.client.ValueAwareEditor$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasEditorDelegate = goog.require('org.gwtproject.editor.client.HasEditorDelegate$impl');

/**
 * @interface
 * @template T
 * @extends {HasEditorDelegate<T>}
 */
class ValueAwareEditor {
 /** @abstract */
 m_flush__() {}
 /** @abstract */
 m_onPropertyChange__arrayOf_java_lang_String(/** Array<?string> */ paths) {}
 /** @abstract */
 m_setValue__java_lang_Object(/** T */ value) {}
 
 static $clinit() {
  ValueAwareEditor.$clinit = () =>{};
  ValueAwareEditor.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  HasEditorDelegate.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_editor_client_ValueAwareEditor = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_editor_client_ValueAwareEditor;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(ValueAwareEditor, 'org.gwtproject.editor.client.ValueAwareEditor');

ValueAwareEditor.$markImplementor(/** @type {Function} */ (ValueAwareEditor));

exports = ValueAwareEditor; 
//# sourceMappingURL=ValueAwareEditor.js.map