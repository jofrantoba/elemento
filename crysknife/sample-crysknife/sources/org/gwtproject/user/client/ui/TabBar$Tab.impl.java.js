goog.module('org.gwtproject.user.client.ui.TabBar.Tab$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasAllKeyHandlers = goog.require('org.gwtproject.event.dom.client.HasAllKeyHandlers$impl');
const HasClickHandlers = goog.require('org.gwtproject.event.dom.client.HasClickHandlers$impl');
const HasWordWrap = goog.require('org.gwtproject.user.client.ui.HasWordWrap$impl');

/**
 * @interface
 * @extends {HasAllKeyHandlers}
 * @extends {HasClickHandlers}
 * @extends {HasWordWrap}
 */
class Tab {
 /**
  * @abstract
  * @return {boolean}
  * @public
  */
 m_hasWordWrap__() {}
 /**
  * @public
  */
 static $clinit() {
  Tab.$clinit = () =>{};
  Tab.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  HasAllKeyHandlers.$markImplementor(classConstructor);
  HasClickHandlers.$markImplementor(classConstructor);
  HasWordWrap.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_user_client_ui_TabBar_Tab = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_TabBar_Tab;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(Tab, 'org.gwtproject.user.client.ui.TabBar$Tab');

Tab.$markImplementor(/** @type {Function} */ (Tab));

exports = Tab; 
//# sourceMappingURL=TabBar$Tab.js.map