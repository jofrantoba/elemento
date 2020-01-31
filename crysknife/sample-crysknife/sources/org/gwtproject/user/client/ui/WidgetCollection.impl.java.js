goog.module('org.gwtproject.user.client.ui.WidgetCollection$impl');

const Iterable = goog.require('java.lang.Iterable$impl');
const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let IndexOutOfBoundsException = goog.forwardDeclare('java.lang.IndexOutOfBoundsException$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let NoSuchElementException = goog.forwardDeclare('java.util.NoSuchElementException$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let HasWidgets = goog.forwardDeclare('org.gwtproject.user.client.ui.HasWidgets$impl');
let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');
let WidgetIterator = goog.forwardDeclare('org.gwtproject.user.client.ui.WidgetCollection.WidgetIterator$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @implements {Iterable<Widget>}
  */
class WidgetCollection extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {Array<Widget>}*/
  this.f_array__org_gwtproject_user_client_ui_WidgetCollection_;
  /**@type {HasWidgets}*/
  this.f_parent__org_gwtproject_user_client_ui_WidgetCollection_;
  /**@type {number}*/
  this.f_size__org_gwtproject_user_client_ui_WidgetCollection_ = 0;
 }
 /** @return {!WidgetCollection} */
 static $create__org_gwtproject_user_client_ui_HasWidgets(/** HasWidgets */ parent) {
  WidgetCollection.$clinit();
  let $instance = new WidgetCollection();
  $instance.$ctor__org_gwtproject_user_client_ui_WidgetCollection__org_gwtproject_user_client_ui_HasWidgets(parent);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_WidgetCollection__org_gwtproject_user_client_ui_HasWidgets(/** HasWidgets */ parent) {
  this.$ctor__java_lang_Object__();
  this.f_parent__org_gwtproject_user_client_ui_WidgetCollection_ = parent;
  this.f_array__org_gwtproject_user_client_ui_WidgetCollection_ = /**@type {!Array<Widget>}*/ ($Arrays.$create([WidgetCollection.f_INITIAL_SIZE__org_gwtproject_user_client_ui_WidgetCollection_], Widget));
 }
 
 m_add__org_gwtproject_user_client_ui_Widget(/** Widget */ w) {
  this.m_insert__org_gwtproject_user_client_ui_Widget__int(w, this.f_size__org_gwtproject_user_client_ui_WidgetCollection_);
 }
 /** @return {boolean} */
 m_contains__org_gwtproject_user_client_ui_Widget(/** Widget */ w) {
  return (this.m_indexOf__org_gwtproject_user_client_ui_Widget(w) != -1);
 }
 /** @return {Widget} */
 m_get__int(/** number */ index) {
  if ((index < 0) || (index >= this.f_size__org_gwtproject_user_client_ui_WidgetCollection_)) {
   throw $Exceptions.toJs(IndexOutOfBoundsException.$create__());
  }
  return this.f_array__org_gwtproject_user_client_ui_WidgetCollection_[index];
 }
 /** @return {number} */
 m_indexOf__org_gwtproject_user_client_ui_Widget(/** Widget */ w) {
  for (let i = 0; i < this.f_size__org_gwtproject_user_client_ui_WidgetCollection_; ++i) {
   if ($Equality.$same(this.f_array__org_gwtproject_user_client_ui_WidgetCollection_[i], w)) {
    return i;
   }
  }
  return -1;
 }
 
 m_insert__org_gwtproject_user_client_ui_Widget__int(/** Widget */ w, /** number */ beforeIndex) {
  if ((beforeIndex < 0) || (beforeIndex > this.f_size__org_gwtproject_user_client_ui_WidgetCollection_)) {
   throw $Exceptions.toJs(IndexOutOfBoundsException.$create__());
  }
  if (this.f_size__org_gwtproject_user_client_ui_WidgetCollection_ == this.f_array__org_gwtproject_user_client_ui_WidgetCollection_.length) {
   let newArray = /**@type {!Array<Widget>}*/ ($Arrays.$create([this.f_array__org_gwtproject_user_client_ui_WidgetCollection_.length * 2], Widget));
   for (let i = 0; i < this.f_array__org_gwtproject_user_client_ui_WidgetCollection_.length; ++i) {
    $Arrays.$set(newArray, i, this.f_array__org_gwtproject_user_client_ui_WidgetCollection_[i]);
   }
   this.f_array__org_gwtproject_user_client_ui_WidgetCollection_ = newArray;
  }
  ++this.f_size__org_gwtproject_user_client_ui_WidgetCollection_;
  for (let i_1 = this.f_size__org_gwtproject_user_client_ui_WidgetCollection_ - 1; i_1 > beforeIndex; --i_1) {
   $Arrays.$set(this.f_array__org_gwtproject_user_client_ui_WidgetCollection_, i_1, this.f_array__org_gwtproject_user_client_ui_WidgetCollection_[i_1 - 1]);
  }
  $Arrays.$set(this.f_array__org_gwtproject_user_client_ui_WidgetCollection_, beforeIndex, w);
 }
 /** @override @return {Iterator<Widget>} */
 m_iterator__() {
  return WidgetIterator.$create__org_gwtproject_user_client_ui_WidgetCollection(this);
 }
 
 m_remove__int(/** number */ index) {
  if ((index < 0) || (index >= this.f_size__org_gwtproject_user_client_ui_WidgetCollection_)) {
   throw $Exceptions.toJs(IndexOutOfBoundsException.$create__());
  }
  --this.f_size__org_gwtproject_user_client_ui_WidgetCollection_;
  for (let i = index; i < this.f_size__org_gwtproject_user_client_ui_WidgetCollection_; ++i) {
   $Arrays.$set(this.f_array__org_gwtproject_user_client_ui_WidgetCollection_, i, this.f_array__org_gwtproject_user_client_ui_WidgetCollection_[i + 1]);
  }
  $Arrays.$set(this.f_array__org_gwtproject_user_client_ui_WidgetCollection_, this.f_size__org_gwtproject_user_client_ui_WidgetCollection_, null);
 }
 
 m_remove__org_gwtproject_user_client_ui_Widget(/** Widget */ w) {
  let index = this.m_indexOf__org_gwtproject_user_client_ui_Widget(w);
  if (index == -1) {
   throw $Exceptions.toJs(NoSuchElementException.$create__());
  }
  this.m_remove__int(index);
 }
 /** @return {number} */
 m_size__() {
  return this.f_size__org_gwtproject_user_client_ui_WidgetCollection_;
 }
 //Default method forwarding stub.
 /** @override */
 m_forEach__java_util_function_Consumer(/** Consumer<?> */ arg0) {
  Iterable.m_forEach__$default__java_lang_Iterable__java_util_function_Consumer(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @return {Spliterator<Widget>} */
 m_spliterator__() {
  return /**@type {Spliterator<Widget>}*/ (Iterable.m_spliterator__$default__java_lang_Iterable(this));
 }
 
 static $clinit() {
  WidgetCollection.$clinit = () =>{};
  WidgetCollection.$loadModules();
  j_l_Object.$clinit();
  Iterable.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof WidgetCollection;
 }
 
 static $loadModules() {
  IndexOutOfBoundsException = goog.module.get('java.lang.IndexOutOfBoundsException$impl');
  NoSuchElementException = goog.module.get('java.util.NoSuchElementException$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Widget = goog.module.get('org.gwtproject.user.client.ui.Widget$impl');
  WidgetIterator = goog.module.get('org.gwtproject.user.client.ui.WidgetCollection.WidgetIterator$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(WidgetCollection, 'org.gwtproject.user.client.ui.WidgetCollection');

Iterable.$markImplementor(WidgetCollection);

/**@const {number}*/
WidgetCollection.f_INITIAL_SIZE__org_gwtproject_user_client_ui_WidgetCollection_ = 4;

exports = WidgetCollection; 
//# sourceMappingURL=WidgetCollection.js.map