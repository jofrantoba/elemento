goog.module('org.gwtproject.i18n.client.HasDirection$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Direction = goog.forwardDeclare('org.gwtproject.i18n.client.HasDirection.Direction$impl');

/**
 * @interface
 */
class HasDirection {
 /**
  * @abstract
  * @param {Direction} direction
  * @public
  */
 m_setDirection__org_gwtproject_i18n_client_HasDirection_Direction(direction) {}
 /**
  * @abstract
  * @return {Direction}
  * @public
  */
 m_getDirection__() {}
 /**
  * @public
  */
 static $clinit() {
  HasDirection.$clinit = () =>{};
  HasDirection.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_i18n_client_HasDirection = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_i18n_client_HasDirection;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasDirection, 'org.gwtproject.i18n.client.HasDirection');

HasDirection.$markImplementor(/** @type {Function} */ (HasDirection));

exports = HasDirection; 
//# sourceMappingURL=HasDirection.js.map