goog.module('org.gwtproject.user.client.ui.HasScrolling$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasScrollHandlers = goog.require('org.gwtproject.event.dom.client.HasScrollHandlers$impl');
const HasHorizontalScrolling = goog.require('org.gwtproject.user.client.ui.HasHorizontalScrolling$impl');
const HasVerticalScrolling = goog.require('org.gwtproject.user.client.ui.HasVerticalScrolling$impl');
const IsWidget = goog.require('org.gwtproject.user.client.ui.IsWidget$impl');

/**
 * @interface
 * @extends {HasHorizontalScrolling}
 * @extends {HasVerticalScrolling}
 * @extends {HasScrollHandlers}
 * @extends {IsWidget}
 */
class HasScrolling {
 /**
  * @public
  */
 static $clinit() {
  HasScrolling.$clinit = () =>{};
  HasScrolling.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  HasHorizontalScrolling.$markImplementor(classConstructor);
  HasVerticalScrolling.$markImplementor(classConstructor);
  HasScrollHandlers.$markImplementor(classConstructor);
  IsWidget.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_user_client_ui_HasScrolling = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_HasScrolling;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasScrolling, 'org.gwtproject.user.client.ui.HasScrolling');

HasScrolling.$markImplementor(/** @type {Function} */ (HasScrolling));

exports = HasScrolling; 
//# sourceMappingURL=HasScrolling.js.map