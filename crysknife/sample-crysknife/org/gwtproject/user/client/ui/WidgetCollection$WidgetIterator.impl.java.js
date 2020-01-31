goog.module('org.gwtproject.user.client.ui.WidgetCollection.WidgetIterator$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const Iterator = goog.require('java.util.Iterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let IllegalStateException = goog.forwardDeclare('java.lang.IllegalStateException$impl');
let NoSuchElementException = goog.forwardDeclare('java.util.NoSuchElementException$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');
let WidgetCollection = goog.forwardDeclare('org.gwtproject.user.client.ui.WidgetCollection$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @implements {Iterator<Widget>}
  */
class WidgetIterator extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {WidgetCollection}*/
  this.f_$outer_this__org_gwtproject_user_client_ui_WidgetCollection_WidgetIterator;
  /**@type {number}*/
  this.f_index__org_gwtproject_user_client_ui_WidgetCollection_WidgetIterator_ = 0;
  /**@type {Widget}*/
  this.f_currentWidget__org_gwtproject_user_client_ui_WidgetCollection_WidgetIterator_;
 }
 /** @return {!WidgetIterator} */
 static $create__org_gwtproject_user_client_ui_WidgetCollection(/** WidgetCollection */ $outer_this) {
  WidgetIterator.$clinit();
  let $instance = new WidgetIterator();
  $instance.$ctor__org_gwtproject_user_client_ui_WidgetCollection_WidgetIterator__org_gwtproject_user_client_ui_WidgetCollection($outer_this);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_WidgetCollection_WidgetIterator__org_gwtproject_user_client_ui_WidgetCollection(/** WidgetCollection */ $outer_this) {
  this.f_$outer_this__org_gwtproject_user_client_ui_WidgetCollection_WidgetIterator = $outer_this;
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_gwtproject_user_client_ui_WidgetCollection_WidgetIterator();
 }
 /** @override @return {boolean} */
 m_hasNext__() {
  return this.f_index__org_gwtproject_user_client_ui_WidgetCollection_WidgetIterator_ < this.f_$outer_this__org_gwtproject_user_client_ui_WidgetCollection_WidgetIterator.f_size__org_gwtproject_user_client_ui_WidgetCollection_;
 }
 /** @override @return {Widget} */
 m_next__() {
  if (this.f_index__org_gwtproject_user_client_ui_WidgetCollection_WidgetIterator_ >= this.f_$outer_this__org_gwtproject_user_client_ui_WidgetCollection_WidgetIterator.f_size__org_gwtproject_user_client_ui_WidgetCollection_) {
   throw $Exceptions.toJs(NoSuchElementException.$create__());
  }
  this.f_currentWidget__org_gwtproject_user_client_ui_WidgetCollection_WidgetIterator_ = this.f_$outer_this__org_gwtproject_user_client_ui_WidgetCollection_WidgetIterator.f_array__org_gwtproject_user_client_ui_WidgetCollection_[this.f_index__org_gwtproject_user_client_ui_WidgetCollection_WidgetIterator_];
  this.f_index__org_gwtproject_user_client_ui_WidgetCollection_WidgetIterator_++;
  return this.f_currentWidget__org_gwtproject_user_client_ui_WidgetCollection_WidgetIterator_;
 }
 /** @override */
 m_remove__() {
  if ($Equality.$same(this.f_currentWidget__org_gwtproject_user_client_ui_WidgetCollection_WidgetIterator_, null)) {
   throw $Exceptions.toJs(IllegalStateException.$create__());
  }
  this.f_$outer_this__org_gwtproject_user_client_ui_WidgetCollection_WidgetIterator.f_parent__org_gwtproject_user_client_ui_WidgetCollection_.m_remove__org_gwtproject_user_client_ui_Widget(this.f_currentWidget__org_gwtproject_user_client_ui_WidgetCollection_WidgetIterator_);
  this.f_index__org_gwtproject_user_client_ui_WidgetCollection_WidgetIterator_--;
  this.f_currentWidget__org_gwtproject_user_client_ui_WidgetCollection_WidgetIterator_ = null;
 }
 //Default method forwarding stub.
 /** @override */
 m_forEachRemaining__java_util_function_Consumer(/** Consumer<?> */ arg0) {
  Iterator.m_forEachRemaining__$default__java_util_Iterator__java_util_function_Consumer(this, arg0);
 }
 /** @private */
 $init___$p_org_gwtproject_user_client_ui_WidgetCollection_WidgetIterator() {
  this.f_index__org_gwtproject_user_client_ui_WidgetCollection_WidgetIterator_ = 0;
 }
 
 static $clinit() {
  WidgetIterator.$clinit = () =>{};
  WidgetIterator.$loadModules();
  j_l_Object.$clinit();
  Iterator.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof WidgetIterator;
 }
 
 static $loadModules() {
  IllegalStateException = goog.module.get('java.lang.IllegalStateException$impl');
  NoSuchElementException = goog.module.get('java.util.NoSuchElementException$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(WidgetIterator, 'org.gwtproject.user.client.ui.WidgetCollection$WidgetIterator');

Iterator.$markImplementor(WidgetIterator);

exports = WidgetIterator; 
//# sourceMappingURL=WidgetCollection$WidgetIterator.js.map