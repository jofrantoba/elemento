goog.module('org.gwtproject.user.client.ui.HasWordWrap$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 */
class HasWordWrap {
 /** @abstract @return {boolean} */
 m_getWordWrap__() {}
 /** @abstract */
 m_setWordWrap__boolean(/** boolean */ wrap) {}
 
 static $clinit() {
  HasWordWrap.$clinit = () =>{};
  HasWordWrap.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_user_client_ui_HasWordWrap = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_HasWordWrap;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasWordWrap, 'org.gwtproject.user.client.ui.HasWordWrap');

HasWordWrap.$markImplementor(/** @type {Function} */ (HasWordWrap));

exports = HasWordWrap; 
//# sourceMappingURL=HasWordWrap.js.map