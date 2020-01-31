goog.module('org.gwtproject.user.client.ui.HasName$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 */
class HasName {
 /** @abstract */
 m_setName__java_lang_String(/** ?string */ name) {}
 /** @abstract @return {?string} */
 m_getName__() {}
 
 static $clinit() {
  HasName.$clinit = () =>{};
  HasName.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_user_client_ui_HasName = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_HasName;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasName, 'org.gwtproject.user.client.ui.HasName');

HasName.$markImplementor(/** @type {Function} */ (HasName));

exports = HasName; 
//# sourceMappingURL=HasName.js.map