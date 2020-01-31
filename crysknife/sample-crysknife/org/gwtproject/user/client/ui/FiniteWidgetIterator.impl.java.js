goog.module('org.gwtproject.user.client.ui.FiniteWidgetIterator$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const Iterator = goog.require('java.util.Iterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let IllegalStateException = goog.forwardDeclare('java.lang.IllegalStateException$impl');
let NoSuchElementException = goog.forwardDeclare('java.util.NoSuchElementException$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let WidgetProvider = goog.forwardDeclare('org.gwtproject.user.client.ui.FiniteWidgetIterator.WidgetProvider$impl');
let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @implements {Iterator<Widget>}
  */
class FiniteWidgetIterator extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {number}*/
  this.f_index__org_gwtproject_user_client_ui_FiniteWidgetIterator_ = 0;
  /**@type {WidgetProvider}*/
  this.f_provider__org_gwtproject_user_client_ui_FiniteWidgetIterator_;
  /**@type {number}*/
  this.f_widgetCount__org_gwtproject_user_client_ui_FiniteWidgetIterator_ = 0;
 }
 /** @return {!FiniteWidgetIterator} */
 static $create__org_gwtproject_user_client_ui_FiniteWidgetIterator_WidgetProvider__int(/** WidgetProvider */ provider, /** number */ widgetCount) {
  FiniteWidgetIterator.$clinit();
  let $instance = new FiniteWidgetIterator();
  $instance.$ctor__org_gwtproject_user_client_ui_FiniteWidgetIterator__org_gwtproject_user_client_ui_FiniteWidgetIterator_WidgetProvider__int(provider, widgetCount);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_FiniteWidgetIterator__org_gwtproject_user_client_ui_FiniteWidgetIterator_WidgetProvider__int(/** WidgetProvider */ provider, /** number */ widgetCount) {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_gwtproject_user_client_ui_FiniteWidgetIterator();
  this.f_provider__org_gwtproject_user_client_ui_FiniteWidgetIterator_ = provider;
  this.f_widgetCount__org_gwtproject_user_client_ui_FiniteWidgetIterator_ = widgetCount;
 }
 /** @override @return {boolean} */
 m_hasNext__() {
  for (let i = this.f_index__org_gwtproject_user_client_ui_FiniteWidgetIterator_ + 1; i < this.f_widgetCount__org_gwtproject_user_client_ui_FiniteWidgetIterator_; i++) {
   let w = this.f_provider__org_gwtproject_user_client_ui_FiniteWidgetIterator_.m_get__int(i);
   if (!$Equality.$same(w, null)) {
    return true;
   }
  }
  return false;
 }
 /** @override @return {Widget} */
 m_next__() {
  for (let i = this.f_index__org_gwtproject_user_client_ui_FiniteWidgetIterator_ + 1; i < this.f_widgetCount__org_gwtproject_user_client_ui_FiniteWidgetIterator_; i++) {
   this.f_index__org_gwtproject_user_client_ui_FiniteWidgetIterator_ = i;
   let w = this.f_provider__org_gwtproject_user_client_ui_FiniteWidgetIterator_.m_get__int(i);
   if (!$Equality.$same(w, null)) {
    return w.m_asWidget__();
   }
  }
  throw $Exceptions.toJs(NoSuchElementException.$create__());
 }
 /** @override */
 m_remove__() {
  if (this.f_index__org_gwtproject_user_client_ui_FiniteWidgetIterator_ < 0 || this.f_index__org_gwtproject_user_client_ui_FiniteWidgetIterator_ >= this.f_widgetCount__org_gwtproject_user_client_ui_FiniteWidgetIterator_) {
   throw $Exceptions.toJs(IllegalStateException.$create__());
  }
  let w = this.f_provider__org_gwtproject_user_client_ui_FiniteWidgetIterator_.m_get__int(this.f_index__org_gwtproject_user_client_ui_FiniteWidgetIterator_);
  if ($Equality.$same(w, null)) {
   throw $Exceptions.toJs(IllegalStateException.$create__java_lang_String("Widget was already removed."));
  }
  w.m_asWidget__().m_removeFromParent__();
 }
 //Default method forwarding stub.
 /** @override */
 m_forEachRemaining__java_util_function_Consumer(/** Consumer<?> */ arg0) {
  Iterator.m_forEachRemaining__$default__java_util_Iterator__java_util_function_Consumer(this, arg0);
 }
 /** @private */
 $init___$p_org_gwtproject_user_client_ui_FiniteWidgetIterator() {
  this.f_index__org_gwtproject_user_client_ui_FiniteWidgetIterator_ = -1;
 }
 
 static $clinit() {
  FiniteWidgetIterator.$clinit = () =>{};
  FiniteWidgetIterator.$loadModules();
  j_l_Object.$clinit();
  Iterator.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof FiniteWidgetIterator;
 }
 
 static $loadModules() {
  IllegalStateException = goog.module.get('java.lang.IllegalStateException$impl');
  NoSuchElementException = goog.module.get('java.util.NoSuchElementException$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(FiniteWidgetIterator, 'org.gwtproject.user.client.ui.FiniteWidgetIterator');

Iterator.$markImplementor(FiniteWidgetIterator);

exports = FiniteWidgetIterator; 
//# sourceMappingURL=FiniteWidgetIterator.js.map