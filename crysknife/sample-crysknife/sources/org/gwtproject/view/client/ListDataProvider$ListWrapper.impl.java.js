goog.module('org.gwtproject.view.client.ListDataProvider.ListWrapper$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const List = goog.require('java.util.List$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let IndexOutOfBoundsException = goog.forwardDeclare('java.lang.IndexOutOfBoundsException$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let Collection = goog.forwardDeclare('java.util.Collection$impl');
let Comparator = goog.forwardDeclare('java.util.Comparator$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let ListIterator = goog.forwardDeclare('java.util.ListIterator$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let Predicate = goog.forwardDeclare('java.util.function.Predicate$impl');
let UnaryOperator = goog.forwardDeclare('java.util.function.UnaryOperator$impl');
let Stream = goog.forwardDeclare('java.util.stream.Stream$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Scheduler = goog.forwardDeclare('org.gwtproject.core.client.Scheduler$impl');
let ScheduledCommand = goog.forwardDeclare('org.gwtproject.core.client.Scheduler.ScheduledCommand$impl');
let ListDataProvider = goog.forwardDeclare('org.gwtproject.view.client.ListDataProvider$impl');
let $1 = goog.forwardDeclare('org.gwtproject.view.client.ListDataProvider.ListWrapper.$1$impl');
let WrappedListIterator = goog.forwardDeclare('org.gwtproject.view.client.ListDataProvider.ListWrapper.WrappedListIterator$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @template T
 * @implements {List<T>}
  */
class ListWrapper extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {ListDataProvider<T>}*/
  this.f_$outer_this__org_gwtproject_view_client_ListDataProvider_ListWrapper;
  /**@type {number}*/
  this.f_curSize__org_gwtproject_view_client_ListDataProvider_ListWrapper_ = 0;
  /**@type {ListWrapper<T>}*/
  this.f_delegate__org_gwtproject_view_client_ListDataProvider_ListWrapper_;
  /**@type {boolean}*/
  this.f_flushCancelled__org_gwtproject_view_client_ListDataProvider_ListWrapper_ = false;
  /**@type {ScheduledCommand}*/
  this.f_flushCommand__org_gwtproject_view_client_ListDataProvider_ListWrapper_;
  /**@type {boolean}*/
  this.f_flushPending__org_gwtproject_view_client_ListDataProvider_ListWrapper_ = false;
  /**@type {List<T>}*/
  this.f_list__org_gwtproject_view_client_ListDataProvider_ListWrapper_;
  /**@type {number}*/
  this.f_offset__org_gwtproject_view_client_ListDataProvider_ListWrapper_ = 0;
  /**@type {number}*/
  this.f_maxModified__org_gwtproject_view_client_ListDataProvider_ListWrapper_ = 0;
  /**@type {number}*/
  this.f_minModified__org_gwtproject_view_client_ListDataProvider_ListWrapper_ = 0;
  /**@type {boolean}*/
  this.f_modified__org_gwtproject_view_client_ListDataProvider_ListWrapper_ = false;
 }
 //Factory method corresponding to constructor 'ListWrapper(ListDataProvider, List)'.
 /** @template T @return {!ListWrapper<T>} */
 static $create__org_gwtproject_view_client_ListDataProvider__java_util_List(/** ListDataProvider<T> */ $outer_this, /** List<T> */ list) {
  ListWrapper.$clinit();
  let $instance = new ListWrapper();
  $instance.$ctor__org_gwtproject_view_client_ListDataProvider_ListWrapper__org_gwtproject_view_client_ListDataProvider__java_util_List($outer_this, list);
  return $instance;
 }
 //Initialization from constructor 'ListWrapper(ListDataProvider, List)'.
 
 $ctor__org_gwtproject_view_client_ListDataProvider_ListWrapper__org_gwtproject_view_client_ListDataProvider__java_util_List(/** ListDataProvider<T> */ $outer_this, /** List<T> */ list) {
  this.$ctor__org_gwtproject_view_client_ListDataProvider_ListWrapper__org_gwtproject_view_client_ListDataProvider__java_util_List__org_gwtproject_view_client_ListDataProvider_ListWrapper__int($outer_this, list, null, 0);
  $outer_this.m_updateRowCount__int__boolean(list.size(), true);
 }
 //Factory method corresponding to constructor 'ListWrapper(ListDataProvider, List, ListWrapper, int)'.
 /** @template T @return {!ListWrapper<T>} */
 static $create__org_gwtproject_view_client_ListDataProvider__java_util_List__org_gwtproject_view_client_ListDataProvider_ListWrapper__int(/** ListDataProvider<T> */ $outer_this, /** List<T> */ list, /** ListWrapper<T> */ delegate, /** number */ offset) {
  let $instance = new ListWrapper();
  $instance.$ctor__org_gwtproject_view_client_ListDataProvider_ListWrapper__org_gwtproject_view_client_ListDataProvider__java_util_List__org_gwtproject_view_client_ListDataProvider_ListWrapper__int($outer_this, list, delegate, offset);
  return $instance;
 }
 //Initialization from constructor 'ListWrapper(ListDataProvider, List, ListWrapper, int)'.
 
 $ctor__org_gwtproject_view_client_ListDataProvider_ListWrapper__org_gwtproject_view_client_ListDataProvider__java_util_List__org_gwtproject_view_client_ListDataProvider_ListWrapper__int(/** ListDataProvider<T> */ $outer_this, /** List<T> */ list, /** ListWrapper<T> */ delegate, /** number */ offset) {
  this.f_$outer_this__org_gwtproject_view_client_ListDataProvider_ListWrapper = $outer_this;
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_gwtproject_view_client_ListDataProvider_ListWrapper();
  this.f_list__org_gwtproject_view_client_ListDataProvider_ListWrapper_ = list;
  this.f_delegate__org_gwtproject_view_client_ListDataProvider_ListWrapper_ = delegate;
  this.f_offset__org_gwtproject_view_client_ListDataProvider_ListWrapper_ = offset;
 }
 /** @override */
 addAtIndex(/** number */ index, /** T */ element) {
  try {
   this.f_list__org_gwtproject_view_client_ListDataProvider_ListWrapper_.addAtIndex(index, element);
   this.f_minModified__org_gwtproject_view_client_ListDataProvider_ListWrapper_ = Math.min(this.f_minModified__org_gwtproject_view_client_ListDataProvider_ListWrapper_, index);
   this.f_maxModified__org_gwtproject_view_client_ListDataProvider_ListWrapper_ = this.size();
   this.f_modified__org_gwtproject_view_client_ListDataProvider_ListWrapper_ = true;
   this.m_flush___$p_org_gwtproject_view_client_ListDataProvider_ListWrapper();
  } catch (__$exc) {
   __$exc = $Exceptions.toJava(__$exc);
   if (IndexOutOfBoundsException.$isInstance(__$exc)) {
    let e = /**@type {IndexOutOfBoundsException}*/ (__$exc);
    throw $Exceptions.toJs(IndexOutOfBoundsException.$create__java_lang_String(e.m_getMessage__()));
   } else {
    throw $Exceptions.toJs(__$exc);
   }
  }
 }
 /** @override @return {boolean} */
 add(/** T */ e) {
  let toRet = this.f_list__org_gwtproject_view_client_ListDataProvider_ListWrapper_.add(e);
  this.f_minModified__org_gwtproject_view_client_ListDataProvider_ListWrapper_ = Math.min(this.f_minModified__org_gwtproject_view_client_ListDataProvider_ListWrapper_, this.size() - 1);
  this.f_maxModified__org_gwtproject_view_client_ListDataProvider_ListWrapper_ = this.size();
  this.f_modified__org_gwtproject_view_client_ListDataProvider_ListWrapper_ = true;
  this.m_flush___$p_org_gwtproject_view_client_ListDataProvider_ListWrapper();
  return toRet;
 }
 /** @override @return {boolean} */
 addAll(/** Collection<?> */ c) {
  this.f_minModified__org_gwtproject_view_client_ListDataProvider_ListWrapper_ = Math.min(this.f_minModified__org_gwtproject_view_client_ListDataProvider_ListWrapper_, this.size());
  let toRet = this.f_list__org_gwtproject_view_client_ListDataProvider_ListWrapper_.addAll(c);
  this.f_maxModified__org_gwtproject_view_client_ListDataProvider_ListWrapper_ = this.size();
  this.f_modified__org_gwtproject_view_client_ListDataProvider_ListWrapper_ = true;
  this.m_flush___$p_org_gwtproject_view_client_ListDataProvider_ListWrapper();
  return toRet;
 }
 /** @override @return {boolean} */
 addAllAtIndex(/** number */ index, /** Collection<?> */ c) {
  try {
   let toRet = this.f_list__org_gwtproject_view_client_ListDataProvider_ListWrapper_.addAllAtIndex(index, c);
   this.f_minModified__org_gwtproject_view_client_ListDataProvider_ListWrapper_ = Math.min(this.f_minModified__org_gwtproject_view_client_ListDataProvider_ListWrapper_, index);
   this.f_maxModified__org_gwtproject_view_client_ListDataProvider_ListWrapper_ = this.size();
   this.f_modified__org_gwtproject_view_client_ListDataProvider_ListWrapper_ = true;
   this.m_flush___$p_org_gwtproject_view_client_ListDataProvider_ListWrapper();
   return toRet;
  } catch (__$exc) {
   __$exc = $Exceptions.toJava(__$exc);
   if (IndexOutOfBoundsException.$isInstance(__$exc)) {
    let e = /**@type {IndexOutOfBoundsException}*/ (__$exc);
    throw $Exceptions.toJs(IndexOutOfBoundsException.$create__java_lang_String(e.m_getMessage__()));
   } else {
    throw $Exceptions.toJs(__$exc);
   }
  }
 }
 /** @override */
 clear() {
  this.f_list__org_gwtproject_view_client_ListDataProvider_ListWrapper_.clear();
  this.f_minModified__org_gwtproject_view_client_ListDataProvider_ListWrapper_ = this.f_maxModified__org_gwtproject_view_client_ListDataProvider_ListWrapper_ = 0;
  this.f_modified__org_gwtproject_view_client_ListDataProvider_ListWrapper_ = true;
  this.m_flush___$p_org_gwtproject_view_client_ListDataProvider_ListWrapper();
 }
 /** @override @return {boolean} */
 contains(/** * */ o) {
  return this.f_list__org_gwtproject_view_client_ListDataProvider_ListWrapper_.contains(o);
 }
 /** @override @return {boolean} */
 containsAll(/** Collection<?> */ c) {
  return this.f_list__org_gwtproject_view_client_ListDataProvider_ListWrapper_.containsAll(c);
 }
 /** @override @return {boolean} */
 equals(/** * */ o) {
  return $Objects.m_equals__java_lang_Object__java_lang_Object(this.f_list__org_gwtproject_view_client_ListDataProvider_ListWrapper_, o);
 }
 /** @override @return {T} */
 getAtIndex(/** number */ index) {
  return this.f_list__org_gwtproject_view_client_ListDataProvider_ListWrapper_.getAtIndex(index);
 }
 /** @override @return {number} */
 hashCode() {
  return $Objects.m_hashCode__java_lang_Object(this.f_list__org_gwtproject_view_client_ListDataProvider_ListWrapper_);
 }
 /** @override @return {number} */
 indexOf(/** * */ o) {
  return this.f_list__org_gwtproject_view_client_ListDataProvider_ListWrapper_.indexOf(o);
 }
 /** @override @return {boolean} */
 isEmpty() {
  return this.f_list__org_gwtproject_view_client_ListDataProvider_ListWrapper_.isEmpty();
 }
 /** @override @return {Iterator<T>} */
 m_iterator__() {
  return this.m_listIterator__();
 }
 /** @override @return {number} */
 lastIndexOf(/** * */ o) {
  return this.f_list__org_gwtproject_view_client_ListDataProvider_ListWrapper_.lastIndexOf(o);
 }
 /** @override @return {ListIterator<T>} */
 m_listIterator__() {
  return /**@type {!WrappedListIterator<T>}*/ (WrappedListIterator.$create__org_gwtproject_view_client_ListDataProvider_ListWrapper(this));
 }
 /** @override @return {ListIterator<T>} */
 m_listIterator__int(/** number */ index) {
  return /**@type {!WrappedListIterator<T>}*/ (WrappedListIterator.$create__org_gwtproject_view_client_ListDataProvider_ListWrapper__int(this, index));
 }
 /** @override @return {T} */
 removeAtIndex(/** number */ index) {
  try {
   let toRet = this.f_list__org_gwtproject_view_client_ListDataProvider_ListWrapper_.removeAtIndex(index);
   this.f_minModified__org_gwtproject_view_client_ListDataProvider_ListWrapper_ = Math.min(this.f_minModified__org_gwtproject_view_client_ListDataProvider_ListWrapper_, index);
   this.f_maxModified__org_gwtproject_view_client_ListDataProvider_ListWrapper_ = this.size();
   this.f_modified__org_gwtproject_view_client_ListDataProvider_ListWrapper_ = true;
   this.m_flush___$p_org_gwtproject_view_client_ListDataProvider_ListWrapper();
   return toRet;
  } catch (__$exc) {
   __$exc = $Exceptions.toJava(__$exc);
   if (IndexOutOfBoundsException.$isInstance(__$exc)) {
    let e = /**@type {IndexOutOfBoundsException}*/ (__$exc);
    throw $Exceptions.toJs(IndexOutOfBoundsException.$create__java_lang_String(e.m_getMessage__()));
   } else {
    throw $Exceptions.toJs(__$exc);
   }
  }
 }
 /** @override @return {boolean} */
 remove(/** * */ o) {
  let index = this.indexOf(o);
  if (index == -1) {
   return false;
  }
  this.removeAtIndex(index);
  return true;
 }
 /** @override @return {boolean} */
 removeAll(/** Collection<?> */ c) {
  let toRet = this.f_list__org_gwtproject_view_client_ListDataProvider_ListWrapper_.removeAll(c);
  this.f_minModified__org_gwtproject_view_client_ListDataProvider_ListWrapper_ = 0;
  this.f_maxModified__org_gwtproject_view_client_ListDataProvider_ListWrapper_ = this.size();
  this.f_modified__org_gwtproject_view_client_ListDataProvider_ListWrapper_ = true;
  this.m_flush___$p_org_gwtproject_view_client_ListDataProvider_ListWrapper();
  return toRet;
 }
 /** @override @return {boolean} */
 retainAll(/** Collection<?> */ c) {
  let toRet = this.f_list__org_gwtproject_view_client_ListDataProvider_ListWrapper_.retainAll(c);
  this.f_minModified__org_gwtproject_view_client_ListDataProvider_ListWrapper_ = 0;
  this.f_maxModified__org_gwtproject_view_client_ListDataProvider_ListWrapper_ = this.size();
  this.f_modified__org_gwtproject_view_client_ListDataProvider_ListWrapper_ = true;
  this.m_flush___$p_org_gwtproject_view_client_ListDataProvider_ListWrapper();
  return toRet;
 }
 /** @override @return {T} */
 setAtIndex(/** number */ index, /** T */ element) {
  let toRet = this.f_list__org_gwtproject_view_client_ListDataProvider_ListWrapper_.setAtIndex(index, element);
  this.f_minModified__org_gwtproject_view_client_ListDataProvider_ListWrapper_ = Math.min(this.f_minModified__org_gwtproject_view_client_ListDataProvider_ListWrapper_, index);
  this.f_maxModified__org_gwtproject_view_client_ListDataProvider_ListWrapper_ = Math.max(this.f_maxModified__org_gwtproject_view_client_ListDataProvider_ListWrapper_, index + 1);
  this.f_modified__org_gwtproject_view_client_ListDataProvider_ListWrapper_ = true;
  this.m_flush___$p_org_gwtproject_view_client_ListDataProvider_ListWrapper();
  return toRet;
 }
 /** @override @return {number} */
 size() {
  return this.f_list__org_gwtproject_view_client_ListDataProvider_ListWrapper_.size();
 }
 /** @override @return {List<T>} */
 subList(/** number */ fromIndex, /** number */ toIndex) {
  return /**@type {!ListWrapper<T>}*/ (ListWrapper.$create__org_gwtproject_view_client_ListDataProvider__java_util_List__org_gwtproject_view_client_ListDataProvider_ListWrapper__int(this.f_$outer_this__org_gwtproject_view_client_ListDataProvider_ListWrapper, this.f_list__org_gwtproject_view_client_ListDataProvider_ListWrapper_.subList(fromIndex, toIndex), this, fromIndex));
 }
 /** @override @return {Array<*>} */
 toArray() {
  return this.f_list__org_gwtproject_view_client_ListDataProvider_ListWrapper_.toArray();
 }
 /** @override @template C @return {Array<C>} */
 m_toArray__arrayOf_java_lang_Object(/** Array<C> */ a) {
  return this.f_list__org_gwtproject_view_client_ListDataProvider_ListWrapper_.m_toArray__arrayOf_java_lang_Object(a);
 }
 
 m_flush___$p_org_gwtproject_view_client_ListDataProvider_ListWrapper() {
  if (!$Equality.$same(this.f_delegate__org_gwtproject_view_client_ListDataProvider_ListWrapper_, null)) {
   this.f_delegate__org_gwtproject_view_client_ListDataProvider_ListWrapper_.f_minModified__org_gwtproject_view_client_ListDataProvider_ListWrapper_ = Math.min(this.f_minModified__org_gwtproject_view_client_ListDataProvider_ListWrapper_ + this.f_offset__org_gwtproject_view_client_ListDataProvider_ListWrapper_, this.f_delegate__org_gwtproject_view_client_ListDataProvider_ListWrapper_.f_minModified__org_gwtproject_view_client_ListDataProvider_ListWrapper_);
   this.f_delegate__org_gwtproject_view_client_ListDataProvider_ListWrapper_.f_maxModified__org_gwtproject_view_client_ListDataProvider_ListWrapper_ = Math.max(this.f_maxModified__org_gwtproject_view_client_ListDataProvider_ListWrapper_ + this.f_offset__org_gwtproject_view_client_ListDataProvider_ListWrapper_, this.f_delegate__org_gwtproject_view_client_ListDataProvider_ListWrapper_.f_maxModified__org_gwtproject_view_client_ListDataProvider_ListWrapper_);
   this.f_delegate__org_gwtproject_view_client_ListDataProvider_ListWrapper_.f_modified__org_gwtproject_view_client_ListDataProvider_ListWrapper_ = this.f_modified__org_gwtproject_view_client_ListDataProvider_ListWrapper_ || this.f_delegate__org_gwtproject_view_client_ListDataProvider_ListWrapper_.f_modified__org_gwtproject_view_client_ListDataProvider_ListWrapper_;
   this.f_delegate__org_gwtproject_view_client_ListDataProvider_ListWrapper_.m_flush___$p_org_gwtproject_view_client_ListDataProvider_ListWrapper();
   return;
  }
  this.f_flushCancelled__org_gwtproject_view_client_ListDataProvider_ListWrapper_ = false;
  if (!this.f_flushPending__org_gwtproject_view_client_ListDataProvider_ListWrapper_) {
   this.f_flushPending__org_gwtproject_view_client_ListDataProvider_ListWrapper_ = true;
   Scheduler.m_get__().m_scheduleFinally__org_gwtproject_core_client_Scheduler_ScheduledCommand(this.f_flushCommand__org_gwtproject_view_client_ListDataProvider_ListWrapper_);
  }
 }
 
 m_flushNow___$p_org_gwtproject_view_client_ListDataProvider_ListWrapper() {
  if (this.f_flushPending__org_gwtproject_view_client_ListDataProvider_ListWrapper_) {
   this.f_flushCancelled__org_gwtproject_view_client_ListDataProvider_ListWrapper_ = true;
  }
  if (!$Equality.$same(this.f_$outer_this__org_gwtproject_view_client_ListDataProvider_ListWrapper.f_listWrapper__org_gwtproject_view_client_ListDataProvider_, this)) {
   return;
  }
  let newSize = this.f_list__org_gwtproject_view_client_ListDataProvider_ListWrapper_.size();
  if (this.f_curSize__org_gwtproject_view_client_ListDataProvider_ListWrapper_ != newSize) {
   this.f_curSize__org_gwtproject_view_client_ListDataProvider_ListWrapper_ = newSize;
   this.f_$outer_this__org_gwtproject_view_client_ListDataProvider_ListWrapper.m_updateRowCount__int__boolean(this.f_curSize__org_gwtproject_view_client_ListDataProvider_ListWrapper_, true);
  }
  if (this.f_modified__org_gwtproject_view_client_ListDataProvider_ListWrapper_) {
   this.f_$outer_this__org_gwtproject_view_client_ListDataProvider_ListWrapper.m_updateRowData__int__java_util_List(this.f_minModified__org_gwtproject_view_client_ListDataProvider_ListWrapper_, this.f_list__org_gwtproject_view_client_ListDataProvider_ListWrapper_.subList(this.f_minModified__org_gwtproject_view_client_ListDataProvider_ListWrapper_, this.f_maxModified__org_gwtproject_view_client_ListDataProvider_ListWrapper_));
   this.f_modified__org_gwtproject_view_client_ListDataProvider_ListWrapper_ = false;
  }
  this.f_minModified__org_gwtproject_view_client_ListDataProvider_ListWrapper_ = Integer.f_MAX_VALUE__java_lang_Integer;
  this.f_maxModified__org_gwtproject_view_client_ListDataProvider_ListWrapper_ = Integer.f_MIN_VALUE__java_lang_Integer;
 }
 //Default method forwarding stub.
 /** @override */
 m_replaceAll__java_util_function_UnaryOperator(/** UnaryOperator<T> */ arg0) {
  List.m_replaceAll__$default__java_util_List__java_util_function_UnaryOperator(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_sort__java_util_Comparator(/** Comparator<?> */ arg0) {
  List.m_sort__$default__java_util_List__java_util_Comparator(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @return {Spliterator<T>} */
 m_spliterator__() {
  return /**@type {Spliterator<T>}*/ (List.m_spliterator__$default__java_util_List(this));
 }
 //Default method forwarding stub.
 /** @override @return {Stream<T>} */
 m_parallelStream__() {
  return /**@type {Stream<T>}*/ (Collection.m_parallelStream__$default__java_util_Collection(this));
 }
 //Default method forwarding stub.
 /** @override @return {boolean} */
 m_removeIf__java_util_function_Predicate(/** Predicate<?> */ arg0) {
  return Collection.m_removeIf__$default__java_util_Collection__java_util_function_Predicate(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @return {Stream<T>} */
 m_stream__() {
  return /**@type {Stream<T>}*/ (Collection.m_stream__$default__java_util_Collection(this));
 }
 //Default method forwarding stub.
 /** @override */
 m_forEach__java_util_function_Consumer(/** Consumer<?> */ arg0) {
  Iterable.m_forEach__$default__java_lang_Iterable__java_util_function_Consumer(this, arg0);
 }
 /** @private */
 $init___$p_org_gwtproject_view_client_ListDataProvider_ListWrapper() {
  this.f_curSize__org_gwtproject_view_client_ListDataProvider_ListWrapper_ = 0;
  this.f_flushCommand__org_gwtproject_view_client_ListDataProvider_ListWrapper_ = /**@type {!$1<T>}*/ ($1.$create__org_gwtproject_view_client_ListDataProvider_ListWrapper(this));
  this.f_maxModified__org_gwtproject_view_client_ListDataProvider_ListWrapper_ = Integer.f_MIN_VALUE__java_lang_Integer;
  this.f_minModified__org_gwtproject_view_client_ListDataProvider_ListWrapper_ = Integer.f_MAX_VALUE__java_lang_Integer;
 }
 
 static $clinit() {
  ListWrapper.$clinit = () =>{};
  ListWrapper.$loadModules();
  j_l_Object.$clinit();
  List.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ListWrapper;
 }
 
 static $loadModules() {
  IndexOutOfBoundsException = goog.module.get('java.lang.IndexOutOfBoundsException$impl');
  Integer = goog.module.get('java.lang.Integer$impl');
  Iterable = goog.module.get('java.lang.Iterable$impl');
  Collection = goog.module.get('java.util.Collection$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Scheduler = goog.module.get('org.gwtproject.core.client.Scheduler$impl');
  $1 = goog.module.get('org.gwtproject.view.client.ListDataProvider.ListWrapper.$1$impl');
  WrappedListIterator = goog.module.get('org.gwtproject.view.client.ListDataProvider.ListWrapper.WrappedListIterator$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
 
}
$Util.$setClassMetadata(ListWrapper, 'org.gwtproject.view.client.ListDataProvider$ListWrapper');

List.$markImplementor(ListWrapper);

exports = ListWrapper; 
//# sourceMappingURL=ListDataProvider$ListWrapper.js.map