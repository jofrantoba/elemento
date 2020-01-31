goog.module('org.gwtproject.user.client.ui.VerticalScrollbar$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasScrollHandlers = goog.require('org.gwtproject.event.dom.client.HasScrollHandlers$impl');
const HasVerticalScrolling = goog.require('org.gwtproject.user.client.ui.HasVerticalScrolling$impl');
const IsWidget = goog.require('org.gwtproject.user.client.ui.IsWidget$impl');

/**
 * @interface
 * @extends {HasVerticalScrolling}
 * @extends {HasScrollHandlers}
 * @extends {IsWidget}
 */
class VerticalScrollbar {
 /** @abstract @return {number} */
 m_getScrollHeight__() {}
 /** @abstract */
 m_setScrollHeight__int(/** number */ height) {}
 
 static $clinit() {
  VerticalScrollbar.$clinit = () =>{};
  VerticalScrollbar.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  HasVerticalScrolling.$markImplementor(ctor);
  HasScrollHandlers.$markImplementor(ctor);
  IsWidget.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_user_client_ui_VerticalScrollbar = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_VerticalScrollbar;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(VerticalScrollbar, 'org.gwtproject.user.client.ui.VerticalScrollbar');

VerticalScrollbar.$markImplementor(/** @type {Function} */ (VerticalScrollbar));

exports = VerticalScrollbar; 
//# sourceMappingURL=VerticalScrollbar.js.map