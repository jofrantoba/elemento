goog.module('org.gwtproject.user.client.ui.AttachDetachException$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const UmbrellaException = goog.require('org.gwtproject.event.shared.UmbrellaException$impl');

let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let Throwable = goog.forwardDeclare('java.lang.Throwable$impl');
let HashSet = goog.forwardDeclare('java.util.HashSet$impl');
let Set = goog.forwardDeclare('java.util.Set$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $1 = goog.forwardDeclare('org.gwtproject.user.client.ui.AttachDetachException.$1$impl');
let $2 = goog.forwardDeclare('org.gwtproject.user.client.ui.AttachDetachException.$2$impl');
let Command = goog.forwardDeclare('org.gwtproject.user.client.ui.AttachDetachException.Command$impl');
let IsWidget = goog.forwardDeclare('org.gwtproject.user.client.ui.IsWidget$impl');
let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

class AttachDetachException extends UmbrellaException {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {Iterable<Widget>} hasWidgets
  * @param {Command} c
  * @public
  */
 static m_tryCommand__java_lang_Iterable__org_gwtproject_user_client_ui_AttachDetachException_Command(hasWidgets, c) {
  AttachDetachException.$clinit();
  let caught = null;
  for (let $iterator = hasWidgets.m_iterator__(); $iterator.m_hasNext__(); ) {
   let w = /**@type {Widget} */ ($Casts.$to($iterator.m_next__(), Widget));
   try {
    c.m_execute__org_gwtproject_user_client_ui_Widget(w);
   } catch (__$exc) {
    __$exc = $Exceptions.toJava(__$exc);
    {
     let e = /**@type {Throwable} */ (__$exc);
     if ($Equality.$same(caught, null)) {
      caught = /**@type {!HashSet<Throwable>} */ (HashSet.$create__());
     }
     caught.add(e);
    }
   }
  }
  if (!$Equality.$same(caught, null)) {
   throw $Exceptions.toJs(AttachDetachException.$create__java_util_Set(caught));
  }
 }
 /**
  * @param {Command} c
  * @param {Array<IsWidget>} widgets
  * @public
  */
 static m_tryCommand__org_gwtproject_user_client_ui_AttachDetachException_Command__arrayOf_org_gwtproject_user_client_ui_IsWidget(c, widgets) {
  AttachDetachException.$clinit();
  let caught = null;
  for (let $array = widgets, $index = 0; $index < $array.length; $index++) {
   let w = $array[$index];
   try {
    if (!$Equality.$same(w, null)) {
     c.m_execute__org_gwtproject_user_client_ui_Widget(w.m_asWidget__());
    }
   } catch (__$exc) {
    __$exc = $Exceptions.toJava(__$exc);
    {
     let e = /**@type {Throwable} */ (__$exc);
     if ($Equality.$same(caught, null)) {
      caught = /**@type {!HashSet<Throwable>} */ (HashSet.$create__());
     }
     caught.add(e);
    }
   }
  }
  if (!$Equality.$same(caught, null)) {
   throw $Exceptions.toJs(AttachDetachException.$create__java_util_Set(caught));
  }
 }
 /**
  * @param {Set<Throwable>} causes
  * @return {!AttachDetachException}
  * @public
  */
 static $create__java_util_Set(causes) {
  AttachDetachException.$clinit();
  let $instance = new AttachDetachException();
  $instance.$ctor__org_gwtproject_user_client_ui_AttachDetachException__java_util_Set(causes);
  $instance.m_privateInitError__java_lang_Object_$pp_java_lang(new Error($instance));
  return $instance;
 }
 /**
  * @param {Set<Throwable>} causes
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_AttachDetachException__java_util_Set(causes) {
  this.$ctor__org_gwtproject_event_shared_UmbrellaException__java_util_Set(causes);
 }
 /**
  * @return {Command}
  * @public
  */
 static get f_attachCommand__org_gwtproject_user_client_ui_AttachDetachException() {
  return (AttachDetachException.$clinit(), AttachDetachException.$f_attachCommand__org_gwtproject_user_client_ui_AttachDetachException);
 }
 /**
  * @return {Command}
  * @public
  */
 static get f_detachCommand__org_gwtproject_user_client_ui_AttachDetachException() {
  return (AttachDetachException.$clinit(), AttachDetachException.$f_detachCommand__org_gwtproject_user_client_ui_AttachDetachException);
 }
 /**
  * @public
  */
 static $clinit() {
  AttachDetachException.$clinit = () =>{};
  AttachDetachException.$loadModules();
  UmbrellaException.$clinit();
  AttachDetachException.$f_attachCommand__org_gwtproject_user_client_ui_AttachDetachException = $1.$create__();
  AttachDetachException.$f_detachCommand__org_gwtproject_user_client_ui_AttachDetachException = $2.$create__();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof AttachDetachException;
 }
 /**
  * @public
  */
 static $loadModules() {
  HashSet = goog.module.get('java.util.HashSet$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $1 = goog.module.get('org.gwtproject.user.client.ui.AttachDetachException.$1$impl');
  $2 = goog.module.get('org.gwtproject.user.client.ui.AttachDetachException.$2$impl');
  Widget = goog.module.get('org.gwtproject.user.client.ui.Widget$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(AttachDetachException, 'org.gwtproject.user.client.ui.AttachDetachException');

/** @private {Command} */
AttachDetachException.$f_attachCommand__org_gwtproject_user_client_ui_AttachDetachException;
/** @private {Command} */
AttachDetachException.$f_detachCommand__org_gwtproject_user_client_ui_AttachDetachException;

exports = AttachDetachException; 
//# sourceMappingURL=AttachDetachException.js.map