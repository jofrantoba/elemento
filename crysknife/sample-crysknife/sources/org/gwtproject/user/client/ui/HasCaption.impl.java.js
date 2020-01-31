goog.module('org.gwtproject.user.client.ui.HasCaption$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 */
class HasCaption {
 /** @abstract @return {?string} */
 m_getCaption__() {}
 /** @abstract */
 m_setCaption__java_lang_String(/** ?string */ caption) {}
 
 static $clinit() {
  HasCaption.$clinit = () =>{};
  HasCaption.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_user_client_ui_HasCaption = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_HasCaption;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasCaption, 'org.gwtproject.user.client.ui.HasCaption');

HasCaption.$markImplementor(/** @type {Function} */ (HasCaption));

exports = HasCaption; 
//# sourceMappingURL=HasCaption.js.map