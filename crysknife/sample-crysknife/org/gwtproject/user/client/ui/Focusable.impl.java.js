goog.module('org.gwtproject.user.client.ui.Focusable$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 */
class Focusable {
 /** @abstract @return {number} */
 m_getTabIndex__() {}
 /** @abstract */
 m_setAccessKey__char(/** number */ key) {}
 /** @abstract */
 m_setFocus__boolean(/** boolean */ focused) {}
 /** @abstract */
 m_setTabIndex__int(/** number */ index) {}
 
 static $clinit() {
  Focusable.$clinit = () =>{};
  Focusable.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_user_client_ui_Focusable = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_Focusable;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(Focusable, 'org.gwtproject.user.client.ui.Focusable');

Focusable.$markImplementor(/** @type {Function} */ (Focusable));

exports = Focusable; 
//# sourceMappingURL=Focusable.js.map