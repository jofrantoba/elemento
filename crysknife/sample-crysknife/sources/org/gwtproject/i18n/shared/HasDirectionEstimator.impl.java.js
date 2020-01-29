goog.module('org.gwtproject.i18n.shared.HasDirectionEstimator$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let DirectionEstimator = goog.forwardDeclare('org.gwtproject.i18n.shared.DirectionEstimator$impl');

/**
 * @interface
 */
class HasDirectionEstimator {
 /**
  * @abstract
  * @return {DirectionEstimator}
  * @public
  */
 m_getDirectionEstimator__() {}
 /**
  * @abstract
  * @param {boolean} enabled
  * @public
  */
 m_setDirectionEstimator__boolean(enabled) {}
 /**
  * @abstract
  * @param {DirectionEstimator} directionEstimator
  * @public
  */
 m_setDirectionEstimator__org_gwtproject_i18n_shared_DirectionEstimator(directionEstimator) {}
 /**
  * @public
  */
 static $clinit() {
  HasDirectionEstimator.$clinit = () =>{};
  HasDirectionEstimator.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_i18n_shared_HasDirectionEstimator = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_i18n_shared_HasDirectionEstimator;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasDirectionEstimator, 'org.gwtproject.i18n.shared.HasDirectionEstimator');

HasDirectionEstimator.$markImplementor(/** @type {Function} */ (HasDirectionEstimator));

exports = HasDirectionEstimator; 
//# sourceMappingURL=HasDirectionEstimator.js.map