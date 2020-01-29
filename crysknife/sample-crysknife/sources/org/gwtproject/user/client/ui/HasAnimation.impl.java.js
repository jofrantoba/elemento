goog.module('org.gwtproject.user.client.ui.HasAnimation$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 */
class HasAnimation {
 /**
  * @abstract
  * @return {boolean}
  * @public
  */
 m_isAnimationEnabled__() {}
 /**
  * @abstract
  * @param {boolean} enable
  * @public
  */
 m_setAnimationEnabled__boolean(enable) {}
 /**
  * @public
  */
 static $clinit() {
  HasAnimation.$clinit = () =>{};
  HasAnimation.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_user_client_ui_HasAnimation = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_HasAnimation;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasAnimation, 'org.gwtproject.user.client.ui.HasAnimation');

HasAnimation.$markImplementor(/** @type {Function} */ (HasAnimation));

exports = HasAnimation; 
//# sourceMappingURL=HasAnimation.js.map