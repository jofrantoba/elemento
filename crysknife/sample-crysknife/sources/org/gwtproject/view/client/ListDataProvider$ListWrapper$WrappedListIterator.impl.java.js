goog.module('org.gwtproject.view.client.ListDataProvider.ListWrapper.WrappedListIterator$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const ListIterator = goog.require('java.util.ListIterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let IllegalStateException = goog.forwardDeclare('java.lang.IllegalStateException$impl');
let IndexOutOfBoundsException = goog.forwardDeclare('java.lang.IndexOutOfBoundsException$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let NoSuchElementException = goog.forwardDeclare('java.util.NoSuchElementException$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let ListWrapper = goog.forwardDeclare('org.gwtproject.view.client.ListDataProvider.ListWrapper$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @template T
 * @implements {ListIterator<T>}
  */
class WrappedListIterator extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {ListWrapper<T>}*/
  this.f_$outer_this__org_gwtproject_view_client_ListDataProvider_ListWrapper_WrappedListIterator;
  /**@type {number}*/
  this.f_i__org_gwtproject_view_client_ListDataProvider_ListWrapper_WrappedListIterator_ = 0;
  /**@type {number}*/
  this.f_last__org_gwtproject_view_client_ListDataProvider_ListWrapper_WrappedListIterator_ = 0;
 }
 //Factory method corresponding to constructor 'WrappedListIterator(ListWrapper)'.
 /** @template T @return {!WrappedListIterator<T>} */
 static $create__org_gwtproject_view_client_ListDataProvider_ListWrapper(/** ListWrapper<T> */ $outer_this) {
  WrappedListIterator.$clinit();
  let $instance = new WrappedListIterator();
  $instance.$ctor__org_gwtproject_view_client_ListDataProvider_ListWrapper_WrappedListIterator__org_gwtproject_view_client_ListDataProvider_ListWrapper($outer_this);
  return $instance;
 }
 //Initialization from constructor 'WrappedListIterator(ListWrapper)'.
 
 $ctor__org_gwtproject_view_client_ListDataProvider_ListWrapper_WrappedListIterator__org_gwtproject_view_client_ListDataProvider_ListWrapper(/** ListWrapper<T> */ $outer_this) {
  this.f_$outer_this__org_gwtproject_view_client_ListDataProvider_ListWrapper_WrappedListIterator = $outer_this;
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_gwtproject_view_client_ListDataProvider_ListWrapper_WrappedListIterator();
 }
 //Factory method corresponding to constructor 'WrappedListIterator(ListWrapper, int)'.
 /** @template T @return {!WrappedListIterator<T>} */
 static $create__org_gwtproject_view_client_ListDataProvider_ListWrapper__int(/** ListWrapper<T> */ $outer_this, /** number */ start) {
  WrappedListIterator.$clinit();
  let $instance = new WrappedListIterator();
  $instance.$ctor__org_gwtproject_view_client_ListDataProvider_ListWrapper_WrappedListIterator__org_gwtproject_view_client_ListDataProvider_ListWrapper__int($outer_this, start);
  return $instance;
 }
 //Initialization from constructor 'WrappedListIterator(ListWrapper, int)'.
 
 $ctor__org_gwtproject_view_client_ListDataProvider_ListWrapper_WrappedListIterator__org_gwtproject_view_client_ListDataProvider_ListWrapper__int(/** ListWrapper<T> */ $outer_this, /** number */ start) {
  this.f_$outer_this__org_gwtproject_view_client_ListDataProvider_ListWrapper_WrappedListIterator = $outer_this;
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_gwtproject_view_client_ListDataProvider_ListWrapper_WrappedListIterator();
  let size = $outer_this.size();
  if (start < 0 || start > size) {
   throw $Exceptions.toJs(IndexOutOfBoundsException.$create__java_lang_String("Index: " + start + ", Size: " + size));
  }
  this.f_i__org_gwtproject_view_client_ListDataProvider_ListWrapper_WrappedListIterator_ = start;
 }
 /** @override */
 m_add__java_lang_Object(/** T */ o) {
  if (this.f_last__org_gwtproject_view_client_ListDataProvider_ListWrapper_WrappedListIterator_ < 0) {
   throw $Exceptions.toJs(IllegalStateException.$create__java_lang_String(WrappedListIterator.f_IMPERMEABLE_EXCEPTION__org_gwtproject_view_client_ListDataProvider_ListWrapper_WrappedListIterator_));
  }
  this.f_$outer_this__org_gwtproject_view_client_ListDataProvider_ListWrapper_WrappedListIterator.addAtIndex(this.f_i__org_gwtproject_view_client_ListDataProvider_ListWrapper_WrappedListIterator_++, o);
  this.f_last__org_gwtproject_view_client_ListDataProvider_ListWrapper_WrappedListIterator_ = -1;
 }
 /** @override @return {boolean} */
 m_hasNext__() {
  return this.f_i__org_gwtproject_view_client_ListDataProvider_ListWrapper_WrappedListIterator_ < this.f_$outer_this__org_gwtproject_view_client_ListDataProvider_ListWrapper_WrappedListIterator.size();
 }
 /** @override @return {boolean} */
 m_hasPrevious__() {
  return this.f_i__org_gwtproject_view_client_ListDataProvider_ListWrapper_WrappedListIterator_ > 0;
 }
 /** @override @return {T} */
 m_next__() {
  if (!this.m_hasNext__()) {
   throw $Exceptions.toJs(NoSuchElementException.$create__());
  }
  return this.f_$outer_this__org_gwtproject_view_client_ListDataProvider_ListWrapper_WrappedListIterator.getAtIndex(this.f_last__org_gwtproject_view_client_ListDataProvider_ListWrapper_WrappedListIterator_ = this.f_i__org_gwtproject_view_client_ListDataProvider_ListWrapper_WrappedListIterator_++);
 }
 /** @override @return {number} */
 m_nextIndex__() {
  return this.f_i__org_gwtproject_view_client_ListDataProvider_ListWrapper_WrappedListIterator_;
 }
 /** @override @return {T} */
 m_previous__() {
  if (!this.m_hasPrevious__()) {
   throw $Exceptions.toJs(NoSuchElementException.$create__());
  }
  return this.f_$outer_this__org_gwtproject_view_client_ListDataProvider_ListWrapper_WrappedListIterator.getAtIndex(this.f_last__org_gwtproject_view_client_ListDataProvider_ListWrapper_WrappedListIterator_ = --this.f_i__org_gwtproject_view_client_ListDataProvider_ListWrapper_WrappedListIterator_);
 }
 /** @override @return {number} */
 m_previousIndex__() {
  return this.f_i__org_gwtproject_view_client_ListDataProvider_ListWrapper_WrappedListIterator_ - 1;
 }
 /** @override */
 m_remove__() {
  if (this.f_last__org_gwtproject_view_client_ListDataProvider_ListWrapper_WrappedListIterator_ < 0) {
   throw $Exceptions.toJs(IllegalStateException.$create__java_lang_String(WrappedListIterator.f_IMPERMEABLE_EXCEPTION__org_gwtproject_view_client_ListDataProvider_ListWrapper_WrappedListIterator_));
  }
  this.f_$outer_this__org_gwtproject_view_client_ListDataProvider_ListWrapper_WrappedListIterator.removeAtIndex(this.f_last__org_gwtproject_view_client_ListDataProvider_ListWrapper_WrappedListIterator_);
  this.f_i__org_gwtproject_view_client_ListDataProvider_ListWrapper_WrappedListIterator_ = this.f_last__org_gwtproject_view_client_ListDataProvider_ListWrapper_WrappedListIterator_;
  this.f_last__org_gwtproject_view_client_ListDataProvider_ListWrapper_WrappedListIterator_ = -1;
 }
 /** @override */
 m_set__java_lang_Object(/** T */ o) {
  if (this.f_last__org_gwtproject_view_client_ListDataProvider_ListWrapper_WrappedListIterator_ == -1) {
   throw $Exceptions.toJs(IllegalStateException.$create__());
  }
  this.f_$outer_this__org_gwtproject_view_client_ListDataProvider_ListWrapper_WrappedListIterator.setAtIndex(this.f_last__org_gwtproject_view_client_ListDataProvider_ListWrapper_WrappedListIterator_, o);
 }
 //Default method forwarding stub.
 /** @override */
 m_forEachRemaining__java_util_function_Consumer(/** Consumer<?> */ arg0) {
  Iterator.m_forEachRemaining__$default__java_util_Iterator__java_util_function_Consumer(this, arg0);
 }
 /** @private */
 $init___$p_org_gwtproject_view_client_ListDataProvider_ListWrapper_WrappedListIterator() {
  this.f_i__org_gwtproject_view_client_ListDataProvider_ListWrapper_WrappedListIterator_ = 0;
  this.f_last__org_gwtproject_view_client_ListDataProvider_ListWrapper_WrappedListIterator_ = -1;
 }
 
 static $clinit() {
  WrappedListIterator.$clinit = () =>{};
  WrappedListIterator.$loadModules();
  j_l_Object.$clinit();
  Iterator.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof WrappedListIterator;
 }
 
 static $loadModules() {
  IllegalStateException = goog.module.get('java.lang.IllegalStateException$impl');
  IndexOutOfBoundsException = goog.module.get('java.lang.IndexOutOfBoundsException$impl');
  Iterator = goog.module.get('java.util.Iterator$impl');
  NoSuchElementException = goog.module.get('java.util.NoSuchElementException$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(WrappedListIterator, 'org.gwtproject.view.client.ListDataProvider$ListWrapper$WrappedListIterator');

ListIterator.$markImplementor(WrappedListIterator);

/**@const {?string}*/
WrappedListIterator.f_IMPERMEABLE_EXCEPTION__org_gwtproject_view_client_ListDataProvider_ListWrapper_WrappedListIterator_ = "Cannot call add/remove more than once per call to next/previous.";

exports = WrappedListIterator; 
//# sourceMappingURL=ListDataProvider$ListWrapper$WrappedListIterator.js.map