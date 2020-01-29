goog.module('org.gwtproject.editor.client.EditorDelegate$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');

/**
 * @interface
 * @template T
 */
class EditorDelegate {
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_getPath__() {}
 /**
  * @abstract
  * @param {?string} message
  * @param {*} value
  * @param {*} userData
  * @public
  */
 m_recordError__java_lang_String__java_lang_Object__java_lang_Object(message, value, userData) {}
 /**
  * @abstract
  * @param {boolean} dirty
  * @public
  */
 m_setDirty__boolean(dirty) {}
 /**
  * @abstract
  * @return {HandlerRegistration}
  * @public
  */
 m_subscribe__() {}
 /**
  * @public
  */
 static $clinit() {
  EditorDelegate.$clinit = () =>{};
  EditorDelegate.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_editor_client_EditorDelegate = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_editor_client_EditorDelegate;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(EditorDelegate, 'org.gwtproject.editor.client.EditorDelegate');

EditorDelegate.$markImplementor(/** @type {Function} */ (EditorDelegate));

exports = EditorDelegate; 
//# sourceMappingURL=EditorDelegate.js.map