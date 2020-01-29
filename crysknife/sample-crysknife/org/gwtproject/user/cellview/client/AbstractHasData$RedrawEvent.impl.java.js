goog.module('org.gwtproject.user.cellview.client.AbstractHasData.RedrawEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Event = goog.require('org.gwtproject.event.shared.Event$impl');

let Type = goog.forwardDeclare('org.gwtproject.event.shared.Event.Type$impl');
let Handler = goog.forwardDeclare('org.gwtproject.user.cellview.client.AbstractHasData.RedrawEvent.Handler$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {Event<Handler>}
  */
class RedrawEvent extends Event {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!RedrawEvent}
  * @public
  */
 static $create__() {
  RedrawEvent.$clinit();
  let $instance = new RedrawEvent();
  $instance.$ctor__org_gwtproject_user_cellview_client_AbstractHasData_RedrawEvent__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_AbstractHasData_RedrawEvent__() {
  this.$ctor__org_gwtproject_event_shared_Event__();
 }
 /**
  * @override
  * @return {Type<Handler>}
  * @public
  */
 m_getAssociatedType__() {
  return RedrawEvent.$f_TYPE__org_gwtproject_user_cellview_client_AbstractHasData_RedrawEvent_;
 }
 /**
  * @param {Handler} handler
  * @public
  */
 m_dispatch__org_gwtproject_user_cellview_client_AbstractHasData_RedrawEvent_Handler(handler) {
  handler.m_onRedraw__();
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @public
  */
 m_dispatch__java_lang_Object(arg0) {
  this.m_dispatch__org_gwtproject_user_cellview_client_AbstractHasData_RedrawEvent_Handler(/**@type {Handler} */ ($Casts.$to(arg0, Handler)));
 }
 /**
  * @return {Type<Handler>}
  * @public
  */
 static get f_TYPE__org_gwtproject_user_cellview_client_AbstractHasData_RedrawEvent_() {
  return (RedrawEvent.$clinit(), RedrawEvent.$f_TYPE__org_gwtproject_user_cellview_client_AbstractHasData_RedrawEvent_);
 }
 /**
  * @public
  */
 static $clinit() {
  RedrawEvent.$clinit = () =>{};
  RedrawEvent.$loadModules();
  Event.$clinit();
  RedrawEvent.$f_TYPE__org_gwtproject_user_cellview_client_AbstractHasData_RedrawEvent_ = /**@type {!Type<Handler>} */ (Type.$create__());
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof RedrawEvent;
 }
 /**
  * @public
  */
 static $loadModules() {
  Type = goog.module.get('org.gwtproject.event.shared.Event.Type$impl');
  Handler = goog.module.get('org.gwtproject.user.cellview.client.AbstractHasData.RedrawEvent.Handler$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(RedrawEvent, 'org.gwtproject.user.cellview.client.AbstractHasData$RedrawEvent');

/** @private {Type<Handler>} */
RedrawEvent.$f_TYPE__org_gwtproject_user_cellview_client_AbstractHasData_RedrawEvent_;

exports = RedrawEvent; 
//# sourceMappingURL=AbstractHasData$RedrawEvent.js.map