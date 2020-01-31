goog.module('org.gwtproject.editor.client.EditorDelegate$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');

/**
 * @interface
 * @template T
 */
class EditorDelegate {
 /** @abstract @return {?string} */
 m_getPath__() {}
 /** @abstract */
 m_recordError__java_lang_String__java_lang_Object__java_lang_Object(/** ?string */ message, /** * */ value, /** * */ userData) {}
 /** @abstract */
 m_setDirty__boolean(/** boolean */ dirty) {}
 /** @abstract @return {HandlerRegistration} */
 m_subscribe__() {}
 
 static $clinit() {
  EditorDelegate.$clinit = () =>{};
  EditorDelegate.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_editor_client_EditorDelegate = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_editor_client_EditorDelegate;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(EditorDelegate, 'org.gwtproject.editor.client.EditorDelegate');

EditorDelegate.$markImplementor(/** @type {Function} */ (EditorDelegate));

exports = EditorDelegate; 
//# sourceMappingURL=EditorDelegate.js.map