goog.module('org.gwtproject.touch.client.Momentum$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let State = goog.forwardDeclare('org.gwtproject.touch.client.Momentum.State$impl');
let Point = goog.forwardDeclare('org.gwtproject.touch.client.Point$impl');

/**
 * @interface
 */
class Momentum {
 /** @abstract @return {State} */
 m_createState__org_gwtproject_touch_client_Point__org_gwtproject_touch_client_Point(/** Point */ initialPosition, /** Point */ initialVelocity) {}
 /** @abstract @return {boolean} */
 m_updateState__org_gwtproject_touch_client_Momentum_State(/** State */ state) {}
 
 static $clinit() {
  Momentum.$clinit = () =>{};
  Momentum.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_touch_client_Momentum = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_touch_client_Momentum;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(Momentum, 'org.gwtproject.touch.client.Momentum');

Momentum.$markImplementor(/** @type {Function} */ (Momentum));

exports = Momentum; 
//# sourceMappingURL=Momentum.js.map