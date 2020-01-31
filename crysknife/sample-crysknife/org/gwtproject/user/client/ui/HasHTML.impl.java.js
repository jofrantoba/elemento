goog.module('org.gwtproject.user.client.ui.HasHTML$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasText = goog.require('org.gwtproject.user.client.ui.HasText$impl');

/**
 * @interface
 * @extends {HasText}
 */
class HasHTML {
 /** @abstract @return {?string} */
 m_getHTML__() {}
 /** @abstract */
 m_setHTML__java_lang_String(/** ?string */ html) {}
 
 static $clinit() {
  HasHTML.$clinit = () =>{};
  HasHTML.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  HasText.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_user_client_ui_HasHTML = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_HasHTML;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasHTML, 'org.gwtproject.user.client.ui.HasHTML');

HasHTML.$markImplementor(/** @type {Function} */ (HasHTML));

exports = HasHTML; 
//# sourceMappingURL=HasHTML.js.map