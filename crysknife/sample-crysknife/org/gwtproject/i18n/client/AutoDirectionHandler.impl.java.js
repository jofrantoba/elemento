goog.module('org.gwtproject.i18n.client.AutoDirectionHandler$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const KeyUpHandler = goog.require('org.gwtproject.event.dom.client.KeyUpHandler$impl');
const HasDirectionEstimator = goog.require('org.gwtproject.i18n.shared.HasDirectionEstimator$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let KeyUpEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.KeyUpEvent$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let Target = goog.forwardDeclare('org.gwtproject.i18n.client.AutoDirectionHandler.Target$impl');
let DirectionEstimator = goog.forwardDeclare('org.gwtproject.i18n.shared.DirectionEstimator$impl');
let WordCountDirectionEstimator = goog.forwardDeclare('org.gwtproject.i18n.shared.WordCountDirectionEstimator$impl');

/**
 * @implements {KeyUpHandler}
 * @implements {HasDirectionEstimator}
  */
class AutoDirectionHandler extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {DirectionEstimator}*/
  this.f_directionEstimator__org_gwtproject_i18n_client_AutoDirectionHandler_;
  /**@type {HandlerRegistration}*/
  this.f_handlerRegistration__org_gwtproject_i18n_client_AutoDirectionHandler_;
  /**@type {Target}*/
  this.f_target__org_gwtproject_i18n_client_AutoDirectionHandler_;
 }
 /** @return {AutoDirectionHandler} */
 static m_addTo__org_gwtproject_i18n_client_AutoDirectionHandler_Target(/** Target */ target) {
  AutoDirectionHandler.$clinit();
  return AutoDirectionHandler.m_addTo__org_gwtproject_i18n_client_AutoDirectionHandler_Target__boolean(target, true);
 }
 /** @return {AutoDirectionHandler} */
 static m_addTo__org_gwtproject_i18n_client_AutoDirectionHandler_Target__boolean(/** Target */ target, /** boolean */ enabled) {
  AutoDirectionHandler.$clinit();
  return AutoDirectionHandler.m_addTo__org_gwtproject_i18n_client_AutoDirectionHandler_Target__org_gwtproject_i18n_shared_DirectionEstimator(target, enabled ? WordCountDirectionEstimator.m_get__() : null);
 }
 /** @return {AutoDirectionHandler} */
 static m_addTo__org_gwtproject_i18n_client_AutoDirectionHandler_Target__org_gwtproject_i18n_shared_DirectionEstimator(/** Target */ target, /** DirectionEstimator */ directionEstimator) {
  AutoDirectionHandler.$clinit();
  return AutoDirectionHandler.$create__org_gwtproject_i18n_client_AutoDirectionHandler_Target__org_gwtproject_i18n_shared_DirectionEstimator(target, directionEstimator);
 }
 /** @return {!AutoDirectionHandler} */
 static $create__org_gwtproject_i18n_client_AutoDirectionHandler_Target__org_gwtproject_i18n_shared_DirectionEstimator(/** Target */ target, /** DirectionEstimator */ directionEstimator) {
  let $instance = new AutoDirectionHandler();
  $instance.$ctor__org_gwtproject_i18n_client_AutoDirectionHandler__org_gwtproject_i18n_client_AutoDirectionHandler_Target__org_gwtproject_i18n_shared_DirectionEstimator(target, directionEstimator);
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_AutoDirectionHandler__org_gwtproject_i18n_client_AutoDirectionHandler_Target__org_gwtproject_i18n_shared_DirectionEstimator(/** Target */ target, /** DirectionEstimator */ directionEstimator) {
  this.$ctor__java_lang_Object__();
  this.f_target__org_gwtproject_i18n_client_AutoDirectionHandler_ = target;
  this.f_handlerRegistration__org_gwtproject_i18n_client_AutoDirectionHandler_ = null;
  this.m_setDirectionEstimator__org_gwtproject_i18n_shared_DirectionEstimator(directionEstimator);
 }
 /** @override @return {DirectionEstimator} */
 m_getDirectionEstimator__() {
  return this.f_directionEstimator__org_gwtproject_i18n_client_AutoDirectionHandler_;
 }
 /** @override */
 m_onKeyUp__org_gwtproject_event_dom_client_KeyUpEvent(/** KeyUpEvent */ event) {
  this.m_refreshDirection__();
 }
 
 m_refreshDirection__() {
  if (!$Equality.$same(this.f_directionEstimator__org_gwtproject_i18n_client_AutoDirectionHandler_, null)) {
   let dir = this.f_directionEstimator__org_gwtproject_i18n_client_AutoDirectionHandler_.m_estimateDirection__java_lang_String(this.f_target__org_gwtproject_i18n_client_AutoDirectionHandler_.m_getText__());
   if (!$Equality.$same(dir, this.f_target__org_gwtproject_i18n_client_AutoDirectionHandler_.m_getDirection__())) {
    this.f_target__org_gwtproject_i18n_client_AutoDirectionHandler_.m_setDirection__org_gwtproject_i18n_client_HasDirection_Direction(dir);
   }
  }
 }
 /** @override */
 m_setDirectionEstimator__boolean(/** boolean */ enabled) {
  this.m_setDirectionEstimator__org_gwtproject_i18n_shared_DirectionEstimator(enabled ? WordCountDirectionEstimator.m_get__() : null);
 }
 /** @override */
 m_setDirectionEstimator__org_gwtproject_i18n_shared_DirectionEstimator(/** DirectionEstimator */ directionEstimator) {
  this.f_directionEstimator__org_gwtproject_i18n_client_AutoDirectionHandler_ = directionEstimator;
  if ($Equality.$same(directionEstimator, null) != $Equality.$same(this.f_handlerRegistration__org_gwtproject_i18n_client_AutoDirectionHandler_, null)) {
   if ($Equality.$same(directionEstimator, null)) {
    this.f_handlerRegistration__org_gwtproject_i18n_client_AutoDirectionHandler_.m_removeHandler__();
    this.f_handlerRegistration__org_gwtproject_i18n_client_AutoDirectionHandler_ = null;
   } else {
    this.f_handlerRegistration__org_gwtproject_i18n_client_AutoDirectionHandler_ = this.f_target__org_gwtproject_i18n_client_AutoDirectionHandler_.m_addKeyUpHandler__org_gwtproject_event_dom_client_KeyUpHandler(this);
   }
  }
  this.m_refreshDirection__();
 }
 
 static $clinit() {
  AutoDirectionHandler.$clinit = () =>{};
  AutoDirectionHandler.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AutoDirectionHandler;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  WordCountDirectionEstimator = goog.module.get('org.gwtproject.i18n.shared.WordCountDirectionEstimator$impl');
 }
 
}
$Util.$setClassMetadata(AutoDirectionHandler, 'org.gwtproject.i18n.client.AutoDirectionHandler');

KeyUpHandler.$markImplementor(AutoDirectionHandler);
HasDirectionEstimator.$markImplementor(AutoDirectionHandler);

exports = AutoDirectionHandler; 
//# sourceMappingURL=AutoDirectionHandler.js.map