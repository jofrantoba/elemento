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
 /**
  * @abstract
  * @return {number}
  * @public
  */
 m_getScrollWidth__() {}
 /**
  * @abstract
  * @param {number} width
  * @public
  */
 m_setScrollWidth__int(width) {}
 /**
  * @public
  */
 static $clinit() {
  HorizontalScrollbar.$clinit = () =>{};
  HorizontalScrollbar.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  HasHorizontalScrolling.$markImplementor(classConstructor);
  HasScrollHandlers.$markImplementor(classConstructor);
  IsWidget.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_user_client_ui_HorizontalScrollbar = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_HorizontalScrollbar;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HorizontalScrollbar, 'org.gwtproject.user.client.ui.HorizontalScrollbar');

HorizontalScrollbar.$markImplementor(/** @type {Function} */ (HorizontalScrollbar));

exports = HorizontalScrollbar; 
//# sourceMappingURL=HorizontalScrollbar.js.map