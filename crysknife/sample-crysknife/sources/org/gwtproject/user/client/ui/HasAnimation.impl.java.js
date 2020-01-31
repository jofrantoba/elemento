goog.module('org.gwtproject.user.client.ui.HasAnimation$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 */
class HasAnimation {
 /** @abstract @return {boolean} */
 m_isAnimationEnabled__() {}
 /** @abstract */
 m_setAnimationEnabled__boolean(/** boolean */ enable) {}
 
 static $clinit() {
  HasAnimation.$clinit = () =>{};
  HasAnimation.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_user_client_ui_HasAnimation = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_HasAnimation;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasAnimation, 'org.gwtproject.user.client.ui.HasAnimation');

HasAnimation.$markImplementor(/** @type {Function} */ (HasAnimation));

exports = HasAnimation; 
//# sourceMappingURL=HasAnimation.js.map