goog.module('org.gwtproject.event.shared.HandlerManager.Bus$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EventBus = goog.require('org.gwtproject.event.shared.EventBus$impl');

let NullPointerException = goog.forwardDeclare('java.lang.NullPointerException$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Throwable = goog.forwardDeclare('java.lang.Throwable$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let HashSet = goog.forwardDeclare('java.util.HashSet$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Event = goog.forwardDeclare('org.gwtproject.event.shared.Event$impl');
let Type = goog.forwardDeclare('org.gwtproject.event.shared.Event.Type$impl');
let Command = goog.forwardDeclare('org.gwtproject.event.shared.HandlerManager.Bus.Command$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let UmbrellaException = goog.forwardDeclare('org.gwtproject.event.shared.UmbrellaException$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

class Bus extends EventBus {
 /** @protected */
 constructor() {
  super();
  /**@type {Map<Type<?>, Map<*, List<?>>>}*/
  this.f_map__org_gwtproject_event_shared_HandlerManager_Bus_;
  /**@type {boolean}*/
  this.f_isReverseOrder__org_gwtproject_event_shared_HandlerManager_Bus_ = false;
  /**@type {number}*/
  this.f_firingDepth__org_gwtproject_event_shared_HandlerManager_Bus_ = 0;
  /**@type {List<Command>}*/
  this.f_deferredDeltas__org_gwtproject_event_shared_HandlerManager_Bus_;
 }
 /** @return {!Bus} */
 static $create__boolean(/** boolean */ fireInReverseOrder) {
  Bus.$clinit();
  let $instance = new Bus();
  $instance.$ctor__org_gwtproject_event_shared_HandlerManager_Bus__boolean(fireInReverseOrder);
  return $instance;
 }
 
 $ctor__org_gwtproject_event_shared_HandlerManager_Bus__boolean(/** boolean */ fireInReverseOrder) {
  this.$ctor__org_gwtproject_event_shared_EventBus__();
  this.$init___$p_org_gwtproject_event_shared_HandlerManager_Bus();
  this.f_isReverseOrder__org_gwtproject_event_shared_HandlerManager_Bus_ = fireInReverseOrder;
 }
 /** @override @template H @return {HandlerRegistration} */
 m_addHandler__org_gwtproject_event_shared_Event_Type__java_lang_Object(/** Type<H> */ type, /** H */ handler) {
  return this.m_doAdd__org_gwtproject_event_shared_Event_Type__java_lang_Object__java_lang_Object_$p_org_gwtproject_event_shared_HandlerManager_Bus(type, null, handler);
 }
 /** @override @template H @return {HandlerRegistration} */
 m_addHandlerToSource__org_gwtproject_event_shared_Event_Type__java_lang_Object__java_lang_Object(/** Type<H> */ type, /** * */ source, /** H */ handler) {
  if ($Equality.$same(source, null)) {
   throw $Exceptions.toJs(NullPointerException.$create__java_lang_String("Cannot add a handler with a null source"));
  }
  return this.m_doAdd__org_gwtproject_event_shared_Event_Type__java_lang_Object__java_lang_Object_$p_org_gwtproject_event_shared_HandlerManager_Bus(type, source, handler);
 }
 /** @override */
 m_fireEvent__org_gwtproject_event_shared_Event(/** Event<?> */ event) {
  this.m_doFire__org_gwtproject_event_shared_Event__java_lang_Object_$p_org_gwtproject_event_shared_HandlerManager_Bus(event, null);
 }
 /** @override */
 m_fireEventFromSource__org_gwtproject_event_shared_Event__java_lang_Object(/** Event<?> */ event, /** * */ source) {
  this.m_doFire__org_gwtproject_event_shared_Event__java_lang_Object_$p_org_gwtproject_event_shared_HandlerManager_Bus(event, source);
 }
 /** @template H */
 m_doRemove__org_gwtproject_event_shared_Event_Type__java_lang_Object__java_lang_Object(/** Type<H> */ type, /** * */ source, /** H */ handler) {
  if (this.f_firingDepth__org_gwtproject_event_shared_HandlerManager_Bus_ > 0) {
   this.m_enqueueRemove__org_gwtproject_event_shared_Event_Type__java_lang_Object__java_lang_Object_$p_org_gwtproject_event_shared_HandlerManager_Bus(type, source, handler);
  } else {
   this.m_doRemoveNow__org_gwtproject_event_shared_Event_Type__java_lang_Object__java_lang_Object_$p_org_gwtproject_event_shared_HandlerManager_Bus(type, source, handler);
  }
 }
 
 m_defer__org_gwtproject_event_shared_HandlerManager_Bus_Command_$p_org_gwtproject_event_shared_HandlerManager_Bus(/** Command */ command) {
  if ($Equality.$same(this.f_deferredDeltas__org_gwtproject_event_shared_HandlerManager_Bus_, null)) {
   this.f_deferredDeltas__org_gwtproject_event_shared_HandlerManager_Bus_ = /**@type {!ArrayList<Command>}*/ (ArrayList.$create__());
  }
  this.f_deferredDeltas__org_gwtproject_event_shared_HandlerManager_Bus_.add(command);
 }
 /** @template H @return {HandlerRegistration} */
 m_doAdd__org_gwtproject_event_shared_Event_Type__java_lang_Object__java_lang_Object_$p_org_gwtproject_event_shared_HandlerManager_Bus(/** Type<H> */ type, /** * */ source, /** H */ handler) {
  if ($Equality.$same(type, null)) {
   throw $Exceptions.toJs(NullPointerException.$create__java_lang_String("Cannot add a handler with a null type"));
  }
  if ($Equality.$same(handler, null)) {
   throw $Exceptions.toJs(NullPointerException.$create__java_lang_String("Cannot add a null handler"));
  }
  if (this.f_firingDepth__org_gwtproject_event_shared_HandlerManager_Bus_ > 0) {
   this.m_enqueueAdd__org_gwtproject_event_shared_Event_Type__java_lang_Object__java_lang_Object_$p_org_gwtproject_event_shared_HandlerManager_Bus(type, source, handler);
  } else {
   this.m_doAddNow__org_gwtproject_event_shared_Event_Type__java_lang_Object__java_lang_Object_$p_org_gwtproject_event_shared_HandlerManager_Bus(type, source, handler);
  }
  return HandlerRegistration.$adapt(() =>{
   this.m_doRemove__org_gwtproject_event_shared_Event_Type__java_lang_Object__java_lang_Object(type, source, handler);
  });
 }
 /** @template H */
 m_doAddNow__org_gwtproject_event_shared_Event_Type__java_lang_Object__java_lang_Object_$p_org_gwtproject_event_shared_HandlerManager_Bus(/** Type<H> */ type, /** * */ source, /** H */ handler) {
  let l = /**@type {List<H>}*/ (this.m_ensureHandlerList__org_gwtproject_event_shared_Event_Type__java_lang_Object_$p_org_gwtproject_event_shared_HandlerManager_Bus(type, source));
  l.add(handler);
 }
 /** @template H */
 m_doFire__org_gwtproject_event_shared_Event__java_lang_Object_$p_org_gwtproject_event_shared_HandlerManager_Bus(/** Event<H> */ event, /** * */ source) {
  if ($Equality.$same(event, null)) {
   throw $Exceptions.toJs(NullPointerException.$create__java_lang_String("Cannot fire null event"));
  }
  try {
   this.f_firingDepth__org_gwtproject_event_shared_HandlerManager_Bus_++;
   if (!$Equality.$same(source, null)) {
    EventBus.m_setSourceOfEvent__org_gwtproject_event_shared_Event__java_lang_Object(event, source);
   }
   let handlers = /**@type {List<H>}*/ (this.m_getDispatchList__org_gwtproject_event_shared_Event_Type__java_lang_Object_$p_org_gwtproject_event_shared_HandlerManager_Bus(event.m_getAssociatedType__(), source));
   let causes = null;
   let it = this.f_isReverseOrder__org_gwtproject_event_shared_HandlerManager_Bus_ ? handlers.m_listIterator__int(handlers.size()) : handlers.m_listIterator__();
   while (this.f_isReverseOrder__org_gwtproject_event_shared_HandlerManager_Bus_ ? it.m_hasPrevious__() : it.m_hasNext__()) {
    let handler = this.f_isReverseOrder__org_gwtproject_event_shared_HandlerManager_Bus_ ? it.m_previous__() : it.m_next__();
    try {
     EventBus.m_dispatchEvent__org_gwtproject_event_shared_Event__java_lang_Object(event, handler);
    } catch (__$exc) {
     __$exc = $Exceptions.toJava(__$exc);
     {
      let e = /**@type {Throwable}*/ (__$exc);
      if ($Equality.$same(causes, null)) {
       causes = /**@type {!HashSet<Throwable>}*/ (HashSet.$create__());
      }
      causes.add(e);
     }
    }
   }
   if (!$Equality.$same(causes, null)) {
    throw $Exceptions.toJs(UmbrellaException.$create__java_util_Set(causes));
   }
  } finally {
   this.f_firingDepth__org_gwtproject_event_shared_HandlerManager_Bus_--;
   if (this.f_firingDepth__org_gwtproject_event_shared_HandlerManager_Bus_ == 0) {
    this.m_handleQueuedAddsAndRemoves___$p_org_gwtproject_event_shared_HandlerManager_Bus();
   }
  }
 }
 /** @template H */
 m_doRemoveNow__org_gwtproject_event_shared_Event_Type__java_lang_Object__java_lang_Object_$p_org_gwtproject_event_shared_HandlerManager_Bus(/** Type<H> */ type, /** * */ source, /** H */ handler) {
  let l = /**@type {List<H>}*/ (this.m_getHandlerList__org_gwtproject_event_shared_Event_Type__java_lang_Object_$p_org_gwtproject_event_shared_HandlerManager_Bus(type, source));
  let removed = l.remove(handler);
  if (removed && l.isEmpty()) {
   this.m_prune__org_gwtproject_event_shared_Event_Type__java_lang_Object_$p_org_gwtproject_event_shared_HandlerManager_Bus(type, source);
  }
 }
 /** @template H */
 m_enqueueAdd__org_gwtproject_event_shared_Event_Type__java_lang_Object__java_lang_Object_$p_org_gwtproject_event_shared_HandlerManager_Bus(/** Type<H> */ type, /** * */ source, /** H */ handler) {
  this.m_defer__org_gwtproject_event_shared_HandlerManager_Bus_Command_$p_org_gwtproject_event_shared_HandlerManager_Bus(Command.$adapt(() =>{
   this.m_doAddNow__org_gwtproject_event_shared_Event_Type__java_lang_Object__java_lang_Object_$p_org_gwtproject_event_shared_HandlerManager_Bus(type, source, handler);
  }));
 }
 /** @template H */
 m_enqueueRemove__org_gwtproject_event_shared_Event_Type__java_lang_Object__java_lang_Object_$p_org_gwtproject_event_shared_HandlerManager_Bus(/** Type<H> */ type, /** * */ source, /** H */ handler) {
  this.m_defer__org_gwtproject_event_shared_HandlerManager_Bus_Command_$p_org_gwtproject_event_shared_HandlerManager_Bus(Command.$adapt(() =>{
   this.m_doRemoveNow__org_gwtproject_event_shared_Event_Type__java_lang_Object__java_lang_Object_$p_org_gwtproject_event_shared_HandlerManager_Bus(type, source, handler);
  }));
 }
 /** @template H @return {List<H>} */
 m_ensureHandlerList__org_gwtproject_event_shared_Event_Type__java_lang_Object_$p_org_gwtproject_event_shared_HandlerManager_Bus(/** Type<H> */ type, /** * */ source) {
  let sourceMap = /**@type {Map<*, List<?>>}*/ ($Casts.$to(this.f_map__org_gwtproject_event_shared_HandlerManager_Bus_.m_computeIfAbsent__java_lang_Object__java_util_function_Function(type, j_u_function_Function.$adapt((k) =>{
   let k_1 = /**@type {Type}*/ ($Casts.$to(k, Type));
   return /**@type {!HashMap<*, List<?>>}*/ (HashMap.$create__());
  })), Map));
  let handlers = /**@type {List<H>}*/ ($Casts.$to(sourceMap.get(source), List));
  if ($Equality.$same(handlers, null)) {
   handlers = /**@type {!ArrayList<H>}*/ (ArrayList.$create__());
   sourceMap.put(source, handlers);
  }
  return handlers;
 }
 /** @template H @return {List<H>} */
 m_getDispatchList__org_gwtproject_event_shared_Event_Type__java_lang_Object_$p_org_gwtproject_event_shared_HandlerManager_Bus(/** Type<H> */ type, /** * */ source) {
  let directHandlers = /**@type {List<H>}*/ (this.m_getHandlerList__org_gwtproject_event_shared_Event_Type__java_lang_Object_$p_org_gwtproject_event_shared_HandlerManager_Bus(type, source));
  if ($Equality.$same(source, null)) {
   return directHandlers;
  }
  let globalHandlers = /**@type {List<H>}*/ (this.m_getHandlerList__org_gwtproject_event_shared_Event_Type__java_lang_Object_$p_org_gwtproject_event_shared_HandlerManager_Bus(type, null));
  let rtn = /**@type {!ArrayList<H>}*/ (ArrayList.$create__java_util_Collection(directHandlers));
  rtn.addAll(globalHandlers);
  return rtn;
 }
 /** @template H @return {List<H>} */
 m_getHandlerList__org_gwtproject_event_shared_Event_Type__java_lang_Object_$p_org_gwtproject_event_shared_HandlerManager_Bus(/** Type<H> */ type, /** * */ source) {
  let sourceMap = /**@type {Map<*, List<?>>}*/ ($Casts.$to(this.f_map__org_gwtproject_event_shared_HandlerManager_Bus_.get(type), Map));
  if ($Equality.$same(sourceMap, null)) {
   return /**@type {List<H>}*/ (Collections.m_emptyList__());
  }
  let handlers = /**@type {List<H>}*/ ($Casts.$to(sourceMap.get(source), List));
  if ($Equality.$same(handlers, null)) {
   return /**@type {List<H>}*/ (Collections.m_emptyList__());
  }
  return handlers;
 }
 
 m_handleQueuedAddsAndRemoves___$p_org_gwtproject_event_shared_HandlerManager_Bus() {
  if (!$Equality.$same(this.f_deferredDeltas__org_gwtproject_event_shared_HandlerManager_Bus_, null)) {
   try {
    for (let $iterator = this.f_deferredDeltas__org_gwtproject_event_shared_HandlerManager_Bus_.m_iterator__(); $iterator.m_hasNext__(); ) {
     let c = /**@type {Command}*/ ($Casts.$to($iterator.m_next__(), Command));
     c.m_execute__();
    }
   } finally {
    this.f_deferredDeltas__org_gwtproject_event_shared_HandlerManager_Bus_ = null;
   }
  }
 }
 
 m_prune__org_gwtproject_event_shared_Event_Type__java_lang_Object_$p_org_gwtproject_event_shared_HandlerManager_Bus(/** Type<?> */ type, /** * */ source) {
  let sourceMap = /**@type {Map<*, List<?>>}*/ ($Casts.$to(this.f_map__org_gwtproject_event_shared_HandlerManager_Bus_.get(type), Map));
  let pruned = /**@type {List<*>}*/ ($Casts.$to(sourceMap.remove(source), List));
  $Asserts.$assertWithMessage(!$Equality.$same(pruned, null), "Can't prune what wasn't there");
  $Asserts.$assertWithMessage(pruned.isEmpty(), "Pruned unempty list!");
  if (sourceMap.isEmpty()) {
   this.f_map__org_gwtproject_event_shared_HandlerManager_Bus_.remove(type);
  }
 }
 /** @template H @return {H} */
 m_getHandler__org_gwtproject_event_shared_Event_Type__int(/** Type<H> */ type, /** number */ index) {
  $Asserts.$assertWithMessage(index < this.m_getHandlerCount__org_gwtproject_event_shared_Event_Type(type), "handlers for " + j_l_String.m_valueOf__java_lang_Object($Objects.m_getClass__java_lang_Object(type)) + " have size: " + this.m_getHandlerCount__org_gwtproject_event_shared_Event_Type(type) + " so do not have a handler at index: " + index);
  let l = /**@type {List<H>}*/ (this.m_getHandlerList__org_gwtproject_event_shared_Event_Type__java_lang_Object_$p_org_gwtproject_event_shared_HandlerManager_Bus(type, null));
  return l.getAtIndex(index);
 }
 /** @return {number} */
 m_getHandlerCount__org_gwtproject_event_shared_Event_Type(/** Type<?> */ type) {
  return /**@type {List<*>}*/ (this.m_getHandlerList__org_gwtproject_event_shared_Event_Type__java_lang_Object_$p_org_gwtproject_event_shared_HandlerManager_Bus(type, null)).size();
 }
 /** @return {boolean} */
 m_isEventHandled__org_gwtproject_event_shared_Event_Type(/** Type<?> */ type) {
  return this.f_map__org_gwtproject_event_shared_HandlerManager_Bus_.containsKey(type);
 }
 /** @private */
 $init___$p_org_gwtproject_event_shared_HandlerManager_Bus() {
  this.f_map__org_gwtproject_event_shared_HandlerManager_Bus_ = /**@type {!HashMap<Type<?>, Map<*, List<?>>>}*/ (HashMap.$create__());
  this.f_firingDepth__org_gwtproject_event_shared_HandlerManager_Bus_ = 0;
 }
 
 static $clinit() {
  Bus.$clinit = () =>{};
  Bus.$loadModules();
  EventBus.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Bus;
 }
 
 static $loadModules() {
  NullPointerException = goog.module.get('java.lang.NullPointerException$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  Collections = goog.module.get('java.util.Collections$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  HashSet = goog.module.get('java.util.HashSet$impl');
  List = goog.module.get('java.util.List$impl');
  Map = goog.module.get('java.util.Map$impl');
  j_u_function_Function = goog.module.get('java.util.function.Function$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Type = goog.module.get('org.gwtproject.event.shared.Event.Type$impl');
  Command = goog.module.get('org.gwtproject.event.shared.HandlerManager.Bus.Command$impl');
  HandlerRegistration = goog.module.get('org.gwtproject.event.shared.HandlerRegistration$impl');
  UmbrellaException = goog.module.get('org.gwtproject.event.shared.UmbrellaException$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
 
}
$Util.$setClassMetadata(Bus, 'org.gwtproject.event.shared.HandlerManager$Bus');

exports = Bus; 
//# sourceMappingURL=HandlerManager$Bus.js.map