goog.module('org.treblereel.gwt.crysknife.client.internal.AbstractEventHandler$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const Event = goog.require('javax.enterprise.event.Event$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let HashSet = goog.forwardDeclare('java.util.HashSet$impl');
let Set = goog.forwardDeclare('java.util.Set$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @abstract
 * @template T
 * @implements {Event<T>}
  */
class AbstractEventHandler extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {Set<Consumer<T>>} */
  this.f_subscribers__org_treblereel_gwt_crysknife_client_internal_AbstractEventHandler_;
 }
 /**
  * @public
  */
 $ctor__org_treblereel_gwt_crysknife_client_internal_AbstractEventHandler__() {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_treblereel_gwt_crysknife_client_internal_AbstractEventHandler();
 }
 /**
  * @override
  * @param {T} t
  * @public
  */
 m_fire__java_lang_Object(t) {
  this.f_subscribers__org_treblereel_gwt_crysknife_client_internal_AbstractEventHandler_.m_forEach__java_util_function_Consumer(Consumer.$adapt((subscriber) =>{
   let subscriber_1 = /**@type {Consumer} */ ($Casts.$to(subscriber, Consumer));
   subscriber_1.m_accept__java_lang_Object(t);
  }));
 }
 /**
  * @param {Consumer<T>} subscriber
  * @public
  */
 m_addSubscriber__java_util_function_Consumer(subscriber) {
  this.f_subscribers__org_treblereel_gwt_crysknife_client_internal_AbstractEventHandler_.add(subscriber);
 }
 /**
  * @private
  */
 $init___$p_org_treblereel_gwt_crysknife_client_internal_AbstractEventHandler() {
  this.f_subscribers__org_treblereel_gwt_crysknife_client_internal_AbstractEventHandler_ = /**@type {!HashSet<Consumer<T>>} */ (HashSet.$create__());
 }
 /**
  * @public
  */
 static $clinit() {
  AbstractEventHandler.$clinit = () =>{};
  AbstractEventHandler.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof AbstractEventHandler;
 }
 /**
  * @public
  */
 static $loadModules() {
  HashSet = goog.module.get('java.util.HashSet$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(AbstractEventHandler, 'org.treblereel.gwt.crysknife.client.internal.AbstractEventHandler');

Event.$markImplementor(AbstractEventHandler);

exports = AbstractEventHandler; 
//# sourceMappingURL=AbstractEventHandler.js.map