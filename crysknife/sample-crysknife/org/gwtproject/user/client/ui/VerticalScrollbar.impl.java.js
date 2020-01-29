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
 /**
  * @abstract
  * @return {number}
  * @public
  */
 m_getScrollHeight__() {}
 /**
  * @abstract
  * @param {number} height
  * @public
  */
 m_setScrollHeight__int(height) {}
 /**
  * @public
  */
 static $clinit() {
  VerticalScrollbar.$clinit = () =>{};
  VerticalScrollbar.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  HasVerticalScrolling.$markImplementor(classConstructor);
  HasScrollHandlers.$markImplementor(classConstructor);
  IsWidget.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_user_client_ui_VerticalScrollbar = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_VerticalScrollbar;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(VerticalScrollbar, 'org.gwtproject.user.client.ui.VerticalScrollbar');

VerticalScrollbar.$markImplementor(/** @type {Function} */ (VerticalScrollbar));

exports = VerticalScrollbar; 
//# sourceMappingURL=VerticalScrollbar.js.map