goog.module('org.gwtproject.user.client.ui.HorizontalScrollbar$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasScrollHandlers = goog.require('org.gwtproject.event.dom.client.HasScrollHandlers$impl');
const HasHorizontalScrolling = goog.require('org.gwtproject.user.client.ui.HasHorizontalScrolling$impl');
const IsWidget = goog.require('org.gwtproject.user.client.ui.IsWidget$impl');

/**
 * @interface
 * @extends {HasHorizontalScrolling}
 * @extends {HasScrollHandlers}
 * @extends {IsWidget}
 */
class HorizontalScrollbar {
 /** @abstract @return {number} */
 m_getScrollWidth__() {}
 /** @abstract */
 m_setScrollWidth__int(/** number */ width) {}
 
 static $clinit() {
  HorizontalScrollbar.$clinit = () =>{};
  HorizontalScrollbar.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  HasHorizontalScrolling.$markImplementor(ctor);
  HasScrollHandlers.$markImplementor(ctor);
  IsWidget.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_user_client_ui_HorizontalScrollbar = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_HorizontalScrollbar;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HorizontalScrollbar, 'org.gwtproject.user.client.ui.HorizontalScrollbar');

HorizontalScrollbar.$markImplementor(/** @type {Function} */ (HorizontalScrollbar));

exports = HorizontalScrollbar; 
//# sourceMappingURL=HorizontalScrollbar.js.map