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
 /** @abstract @return {boolean} */
 m_hasWordWrap__() {}
 
 static $clinit() {
  Tab.$clinit = () =>{};
  Tab.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  HasAllKeyHandlers.$markImplementor(ctor);
  HasClickHandlers.$markImplementor(ctor);
  HasWordWrap.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_user_client_ui_TabBar_Tab = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_TabBar_Tab;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(Tab, 'org.gwtproject.user.client.ui.TabBar$Tab');

Tab.$markImplementor(/** @type {Function} */ (Tab));

exports = Tab; 
//# sourceMappingURL=TabBar$Tab.js.map