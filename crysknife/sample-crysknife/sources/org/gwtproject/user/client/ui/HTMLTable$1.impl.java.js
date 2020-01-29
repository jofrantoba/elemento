goog.module('org.gwtproject.user.client.ui.HTMLTable.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const Iterator = goog.require('java.util.Iterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let IllegalStateException = goog.forwardDeclare('java.lang.IllegalStateException$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let NoSuchElementException = goog.forwardDeclare('java.util.NoSuchElementException$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let HTMLTable = goog.forwardDeclare('org.gwtproject.user.client.ui.HTMLTable$impl');
let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @implements {Iterator<Widget>}
  */
class $1 extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {HTMLTable} */
  this.f_$outer_this__org_gwtproject_user_client_ui_HTMLTable_1;
  /** @public {ArrayList<Widget>} */
  this.f_widgetList__org_gwtproject_user_client_ui_HTMLTable_1;
  /** @public {number} */
  this.f_lastIndex__org_gwtproject_user_client_ui_HTMLTable_1 = 0;
  /** @public {number} */
  this.f_nextIndex__org_gwtproject_user_client_ui_HTMLTable_1 = 0;
 }
 /**
  * @param {HTMLTable} $outer_this
  * @return {!$1}
  * @public
  */
 static $create__org_gwtproject_user_client_ui_HTMLTable($outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_user_client_ui_HTMLTable_1__org_gwtproject_user_client_ui_HTMLTable($outer_this);
  return $instance;
 }
 /**
  * @param {HTMLTable} $outer_this
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_HTMLTable_1__org_gwtproject_user_client_ui_HTMLTable($outer_this) {
  this.f_$outer_this__org_gwtproject_user_client_ui_HTMLTable_1 = $outer_this;
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_gwtproject_user_client_ui_HTMLTable_1();
 }
 /**
  * @override
  * @return {boolean}
  * @public
  */
 m_hasNext__() {
  return this.f_nextIndex__org_gwtproject_user_client_ui_HTMLTable_1 < this.f_widgetList__org_gwtproject_user_client_ui_HTMLTable_1.size();
 }
 /**
  * @override
  * @return {Widget}
  * @public
  */
 m_next__() {
  if (!this.m_hasNext__()) {
   throw $Exceptions.toJs(NoSuchElementException.$create__());
  }
  let result = /**@type {Widget} */ ($Casts.$to(this.f_widgetList__org_gwtproject_user_client_ui_HTMLTable_1.getAtIndex(this.f_nextIndex__org_gwtproject_user_client_ui_HTMLTable_1), Widget));
  this.f_lastIndex__org_gwtproject_user_client_ui_HTMLTable_1 = this.f_nextIndex__org_gwtproject_user_client_ui_HTMLTable_1;
  this.m_findNext___$p_org_gwtproject_user_client_ui_HTMLTable_1();
  return result;
 }
 /**
  * @override
  * @public
  */
 m_remove__() {
  if (this.f_lastIndex__org_gwtproject_user_client_ui_HTMLTable_1 < 0) {
   throw $Exceptions.toJs(IllegalStateException.$create__());
  }
  let w = /**@type {Widget} */ ($Casts.$to(this.f_widgetList__org_gwtproject_user_client_ui_HTMLTable_1.getAtIndex(this.f_lastIndex__org_gwtproject_user_client_ui_HTMLTable_1), Widget));
  $Asserts.$assert(HTMLTable.$isInstance(w.m_getParent__()));
  w.m_removeFromParent__();
  this.f_lastIndex__org_gwtproject_user_client_ui_HTMLTable_1 = -1;
 }
 /**
  * @public
  */
 m_findNext___$p_org_gwtproject_user_client_ui_HTMLTable_1() {
  while (++this.f_nextIndex__org_gwtproject_user_client_ui_HTMLTable_1 < this.f_widgetList__org_gwtproject_user_client_ui_HTMLTable_1.size()) {
   if (!$Equality.$same(this.f_widgetList__org_gwtproject_user_client_ui_HTMLTable_1.getAtIndex(this.f_nextIndex__org_gwtproject_user_client_ui_HTMLTable_1), null)) {
    return;
   }
  }
 }
 /**
  * Default method forwarding stub.
  * @override
  * @param {Consumer<?>} arg0
  * @public
  */
 m_forEachRemaining__java_util_function_Consumer(arg0) {
  Iterator.m_forEachRemaining__$default__java_util_Iterator__java_util_function_Consumer(this, arg0);
 }
 /**
  * @private
  */
 $init___$p_org_gwtproject_user_client_ui_HTMLTable_1() {
  this.f_widgetList__org_gwtproject_user_client_ui_HTMLTable_1 = this.f_$outer_this__org_gwtproject_user_client_ui_HTMLTable_1.f_widgetMap__org_gwtproject_user_client_ui_HTMLTable_.m_getObjectList__();
  this.f_lastIndex__org_gwtproject_user_client_ui_HTMLTable_1 = -1;
  this.f_nextIndex__org_gwtproject_user_client_ui_HTMLTable_1 = -1;
  this.m_findNext___$p_org_gwtproject_user_client_ui_HTMLTable_1();
 }
 /**
  * @public
  */
 static $clinit() {
  $1.$clinit = () =>{};
  $1.$loadModules();
  j_l_Object.$clinit();
  Iterator.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof $1;
 }
 /**
  * @public
  */
 static $loadModules() {
  IllegalStateException = goog.module.get('java.lang.IllegalStateException$impl');
  NoSuchElementException = goog.module.get('java.util.NoSuchElementException$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  HTMLTable = goog.module.get('org.gwtproject.user.client.ui.HTMLTable$impl');
  Widget = goog.module.get('org.gwtproject.user.client.ui.Widget$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata($1, 'org.gwtproject.user.client.ui.HTMLTable$1');

Iterator.$markImplementor($1);

exports = $1; 
//# sourceMappingURL=HTMLTable$1.js.map