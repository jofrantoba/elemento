goog.module('org.gwtproject.event.logical.shared.AttachEvent.Handler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let AttachEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.AttachEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.logical.shared.AttachEvent.Handler.$LambdaAdaptor$impl');

/**
 * @interface
 */
class Handler {
 /** @abstract */
 m_onAttachOrDetach__org_gwtproject_event_logical_shared_AttachEvent(/** AttachEvent */ event) {}
 /** @return {Handler} */
 static $adapt(/** ?function(AttachEvent):void */ fn) {
  Handler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  Handler.$clinit = () =>{};
  Handler.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_event_logical_shared_AttachEvent_Handler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_logical_shared_AttachEvent_Handler;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.logical.shared.AttachEvent.Handler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Handler, 'org.gwtproject.event.logical.shared.AttachEvent$Handler');

Handler.$markImplementor(/** @type {Function} */ (Handler));

exports = Handler; 
//# sourceMappingURL=AttachEvent$Handler.js.map