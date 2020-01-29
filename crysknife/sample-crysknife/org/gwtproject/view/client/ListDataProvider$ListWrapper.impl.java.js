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
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {ListDataProvider<T>} */
  this.f_$outer_this__org_gwtproject_view_client_ListDataProvider_ListWrapper;
  /** @public {number} */
  this.f_curSize__org_gwtproject_view_client_ListDataProvider_ListWrapper_ = 0;
  /** @public {ListWrapper<T>} */
  this.f_delegate__org_gwtproject_view_client_ListDataProvider_ListWrapper_;
  /** @public {boolean} */
  this.f_flushCancelled__org_gwtproject_view_client_ListDataProvider_ListWrapper_ = false;
  /** @public {ScheduledCommand} */
  this.f_flushCommand__org_gwtproject_view_client_ListDataProvider_ListWrapper_;
  /** @public {boolean} */
  this.f_flushPending__org_gwtproject_view_client_ListDataProvider_ListWrapper_ = false;
  /** @public {List<T>} */
  this.f_list__org_gwtproject_view_client_ListDataProvider_ListWrapper_;
  /** @public {number} */
  this.f_offset__org_gwtproject_view_client_ListDataProvider_ListWrapper_ = 0;
  /** @public {number} */
  this.f_maxModified__org_gwtproject_view_client_ListDataProvider_ListWrapper_ = 0;
  /** @public {number} */
  this.f_minModified__org_gwtproject_view_client_ListDataProvider_ListWrapper_ = 0;
  /** @public {boolean} */
  this.f_modified__org_gwtproject_view_client_ListDataProvider_ListWrapper_ = false;
 }
 /**
  * Factory method corresponding to constructor 'ListWrapper(ListDataProvider, List)'.
  * @template T
  * @param {ListDataProvider<T>} $outer_this
  * @param {List<T>} list
  * @return {!ListWrapper<T>}
  * @public
  */
 static $create__org_gwtproject_view_client_ListDataProvider__java_util_List($outer_this, list) {
  ListWrapper.$clinit();
  let $instance = new ListWrapper();
  $instance.$ctor__org_gwtproject_view_client_ListDataProvider_ListWrapper__org_gwtproject_view_client_ListDataProvider__java_util_List($outer_this, list);
  return $instance;
 }
 /**
  * Initialization from constructor 'ListWrapper(ListDataProvider, List)'.
  * @param {ListDataProvider<T>} $outer_this
  * @param {List<T>} list
  * @public
  */
 $ctor__org_gwtproject_view_client_ListDataProvider_ListWrapper__org_gwtproject_view_client_ListDataProvider__java_util_List($outer_this, list) {
  this.$ctor__org_gwtproject_view_client_ListDataProvider_ListWrapper__org_gwtproject_view_client_ListDataProvider__java_util_List__org_gwtproject_view_client_ListDataProvider_ListWrapper__int($outer_this, list, null, 0);
  $outer_this.m_updateRowCount__int__boolean(list.size(), true);
 }
 /**
  * Factory method corresponding to constructor 'ListWrapper(ListDataProvider, List, ListWrapper, int)'.
  * @template T
  * @param {ListDataProvider<T>} $outer_this
  * @param {List<T>} list
  * @param {ListWrapper<T>} delegate
  * @param {number} offset
  * @return {!ListWrapper<T>}
  * @public
  */
 static $create__org_gwtproject_view_client_ListDataProvider__java_util_List__org_gwtproject_view_client_ListDataProvider_ListWrapper__int($outer_this, list, delegate, offset) {
  let $instance = new ListWrapper();
  $instance.$ctor__org_gwtproject_view_client_ListDataProvider_ListWrapper__org_gwtproject_view_client_ListDataProvider__java_util_List__org_gwtproject_view_client_ListDataProvider_ListWrapper__int($outer_this, list, delegate, offset);
  return $instance;
 }
 /**
  * Initialization from constructor 'ListWrapper(ListDataProvider, List, ListWrapper, int)'.
  * @param {ListDataProvider<T>} $outer_this
  * @param {List<T>} list
  * @param {ListWrapper<T>} delegate
  * @param {number} offset
  * @public
  */
 $ctor__org_gwtproject_view_client_ListDataProvider_ListWrapper__org_gwtproject_view_client_ListDataProvider__java_util_List__org_gwtproject_view_client_ListDataProvider_ListWrapper__int($outer_this, list, delegate, offset) {
  this.f_$outer_this__org_gwtproject_view_client_ListDataProvider_ListWrapper = $outer_this;
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_gwtproject_view_client_ListDataProvider_ListWrapper();
  this.f_list__org_gwtproject_view_client_ListDataProvider_ListWrapper_ = list;
  this.f_delegate__org_gwtproject_view_client_ListDataProvider_ListWrapper_ = delegate;
  this.f_offset__org_gwtproject_view_client_ListDataProvider_ListWrapper_ = offset;
 }
 /**
  * @override
  * @param {number} index
  * @param {T} element
  * @public
  */
 addAtIndex(index, element) {
  try {
   this.f_list__org_gwtproject_view_client_ListDataProvider_ListWrapper_.addAtIndex(index, element);
   this.f_minModified__org_gwtproject_view_client_ListDataProvider_ListWrapper_ = Math.min(this.f_minModified__org_gwtproject_view_client_ListDataProvider_ListWrapper_, index);
   this.f_maxModified__org_gwtproject_view_client_ListDataProvider_ListWrapper_ = this.size();
   this.f_modified__org_gwtproject_view_client_ListDataProvider_ListWrapper_ = true;
   this.m_flush___$p_org_gwtproject_view_client_ListDataProvider_ListWrapper();
  } catch (__$exc) {
   __$exc = $Exceptions.toJava(__$exc);
   if (IndexOutOfBoundsException.$isInstance(__$exc)) {
    let e = /**@type {IndexOutOfBoundsException} */ (__$exc);
    throw $Exceptions.toJs(IndexOutOfBoundsException.$create__java_lang_String(e.m_getMessage__()));
   } else {
    throw $Exceptions.toJs(__$exc);
   }
  }
 }
 /**
  * @override
  * @param {T} e
  * @return {boolean}
  * @public
  */
 add(e) {
  let toRet = this.f_list__org_gwtproject_view_client_ListDataProvider_ListWrapper_.add(e);
  this.f_minModified__org_gwtproject_view_client_ListDataProvider_ListWrapper_ = Math.min(this.f_minModified__org_gwtproject_view_client_ListDataProvider_ListWrapper_, this.size() - 1);
  this.f_maxModified__org_gwtproject_view_client_ListDataProvider_ListWrapper_ = this.size();
  this.f_modified__org_gwtproject_view_client_ListDataProvider_ListWrapper_ = true;
  this.m_flush___$p_org_gwtproject_view_client_ListDataProvider_ListWrapper();
  return toRet;
 }
 /**
  * @override
  * @param {Collection<?>} c
  * @return {boolean}
  * @public
  */
 addAll(c) {
  this.f_minModified__org_gwtproject_view_client_ListDataProvider_ListWrapper_ = Math.min(this.f_minModified__org_gwtproject_view_client_ListDataProvider_ListWrapper_, this.size());
  let toRet = this.f_list__org_gwtproject_view_client_ListDataProvider_ListWrapper_.addAll(c);
  this.f_maxModified__org_gwtproject_view_client_ListDataProvider_ListWrapper_ = this.size();
  this.f_modified__org_gwtproject_view_client_ListDataProvider_ListWrapper_ = true;
  this.m_flush___$p_org_gwtproject_view_client_ListDataProvider_ListWrapper();
  return toRet;
 }
 /**
  * @override
  * @param {number} index
  * @param {Collection<?>} c
  * @return {boolean}
  * @public
  */
 addAllAtIndex(index, c) {
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
    let e = /**@type {IndexOutOfBoundsException} */ (__$exc);
    throw $Exceptions.toJs(IndexOutOfBoundsException.$create__java_lang_String(e.m_getMessage__()));
   } else {
    throw $Exceptions.toJs(__$exc);
   }
  }
 }
 /**
  * @override
  * @public
  */
 clear() {
  this.f_list__org_gwtproject_view_client_ListDataProvider_ListWrapper_.clear();
  this.f_minModified__org_gwtproject_view_client_ListDataProvider_ListWrapper_ = this.f_maxModified__org_gwtproject_view_client_ListDataProvider_ListWrapper_ = 0;
  this.f_modified__org_gwtproject_view_client_ListDataProvider_ListWrapper_ = true;
  this.m_flush___$p_org_gwtproject_view_client_ListDataProvider_ListWrapper();
 }
 /**
  * @override
  * @param {*} o
  * @return {boolean}
  * @public
  */
 contains(o) {
  return this.f_list__org_gwtproject_view_client_ListDataProvider_ListWrapper_.contains(o);
 }
 /**
  * @override
  * @param {Collection<?>} c
  * @return {boolean}
  * @public
  */
 containsAll(c) {
  return this.f_list__org_gwtproject_view_client_ListDataProvider_ListWrapper_.containsAll(c);
 }
 /**
  * @override
  * @param {*} o
  * @return {boolean}
  * @public
  */
 equals(o) {
  return $Objects.m_equals__java_lang_Object__java_lang_Object(this.f_list__org_gwtproject_view_client_ListDataProvider_ListWrapper_, o);
 }
 /**
  * @override
  * @param {number} index
  * @return {T}
  * @public
  */
 getAtIndex(index) {
  return this.f_list__org_gwtproject_view_client_ListDataProvider_ListWrapper_.getAtIndex(index);
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 hashCode() {
  return $Objects.m_hashCode__java_lang_Object(this.f_list__org_gwtproject_view_client_ListDataProvider_ListWrapper_);
 }
 /**
  * @override
  * @param {*} o
  * @return {number}
  * @public
  */
 indexOf(o) {
  return this.f_list__org_gwtproject_view_client_ListDataProvider_ListWrapper_.indexOf(o);
 }
 /**
  * @override
  * @return {boolean}
  * @public
  */
 isEmpty() {
  return this.f_list__org_gwtproject_view_client_ListDataProvider_ListWrapper_.isEmpty();
 }
 /**
  * @override
  * @return {Iterator<T>}
  * @public
  */
 m_iterator__() {
  return this.m_listIterator__();
 }
 /**
  * @override
  * @param {*} o
  * @return {number}
  * @public
  */
 lastIndexOf(o) {
  return this.f_list__org_gwtproject_view_client_ListDataProvider_ListWrapper_.lastIndexOf(o);
 }
 /**
  * @override
  * @return {ListIterator<T>}
  * @public
  */
 m_listIterator__() {
  return /**@type {!WrappedListIterator<T>} */ (WrappedListIterator.$create__org_gwtproject_view_client_ListDataProvider_ListWrapper(this));
 }
 /**
  * @override
  * @param {number} index
  * @return {ListIterator<T>}
  * @public
  */
 m_listIterator__int(index) {
  return /**@type {!WrappedListIterator<T>} */ (WrappedListIterator.$create__org_gwtproject_view_client_ListDataProvider_ListWrapper__int(this, index));
 }
 /**
  * @override
  * @param {number} index
  * @return {T}
  * @public
  */
 removeAtIndex(index) {
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
    let e = /**@type {IndexOutOfBoundsException} */ (__$exc);
    throw $Exceptions.toJs(IndexOutOfBoundsException.$create__java_lang_String(e.m_getMessage__()));
   } else {
    throw $Exceptions.toJs(__$exc);
   }
  }
 }
 /**
  * @override
  * @param {*} o
  * @return {boolean}
  * @public
  */
 remove(o) {
  let index = this.indexOf(o);
  if (index == -1) {
   return false;
  }
  this.removeAtIndex(index);
  return true;
 }
 /**
  * @override
  * @param {Collection<?>} c
  * @return {boolean}
  * @public
  */
 removeAll(c) {
  let toRet = this.f_list__org_gwtproject_view_client_ListDataProvider_ListWrapper_.removeAll(c);
  this.f_minModified__org_gwtproject_view_client_ListDataProvider_ListWrapper_ = 0;
  this.f_maxModified__org_gwtproject_view_client_ListDataProvider_ListWrapper_ = this.size();
  this.f_modified__org_gwtproject_view_client_ListDataProvider_ListWrapper_ = true;
  this.m_flush___$p_org_gwtproject_view_client_ListDataProvider_ListWrapper();
  return toRet;
 }
 /**
  * @override
  * @param {Collection<?>} c
  * @return {boolean}
  * @public
  */
 retainAll(c) {
  let toRet = this.f_list__org_gwtproject_view_client_ListDataProvider_ListWrapper_.retainAll(c);
  this.f_minModified__org_gwtproject_view_client_ListDataProvider_ListWrapper_ = 0;
  this.f_maxModified__org_gwtproject_view_client_ListDataProvider_ListWrapper_ = this.size();
  this.f_modified__org_gwtproject_view_client_ListDataProvider_ListWrapper_ = true;
  this.m_flush___$p_org_gwtproject_view_client_ListDataProvider_ListWrapper();
  return toRet;
 }
 /**
  * @override
  * @param {number} index
  * @param {T} element
  * @return {T}
  * @public
  */
 setAtIndex(index, element) {
  let toRet = this.f_list__org_gwtproject_view_client_ListDataProvider_ListWrapper_.setAtIndex(index, element);
  this.f_minModified__org_gwtproject_view_client_ListDataProvider_ListWrapper_ = Math.min(this.f_minModified__org_gwtproject_view_client_ListDataProvider_ListWrapper_, index);
  this.f_maxModified__org_gwtproject_view_client_ListDataProvider_ListWrapper_ = Math.max(this.f_maxModified__org_gwtproject_view_client_ListDataProvider_ListWrapper_, index + 1);
  this.f_modified__org_gwtproject_view_client_ListDataProvider_ListWrapper_ = true;
  this.m_flush___$p_org_gwtproject_view_client_ListDataProvider_ListWrapper();
  return toRet;
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 size() {
  return this.f_list__org_gwtproject_view_client_ListDataProvider_ListWrapper_.size();
 }
 /**
  * @override
  * @param {number} fromIndex
  * @param {number} toIndex
  * @return {List<T>}
  * @public
  */
 subList(fromIndex, toIndex) {
  return /**@type {!ListWrapper<T>} */ (ListWrapper.$create__org_gwtproject_view_client_ListDataProvider__java_util_List__org_gwtproject_view_client_ListDataProvider_ListWrapper__int(this.f_$outer_this__org_gwtproject_view_client_ListDataProvider_ListWrapper, this.f_list__org_gwtproject_view_client_ListDataProvider_ListWrapper_.subList(fromIndex, toIndex), this, fromIndex));
 }
 /**
  * @override
  * @return {Array<*>}
  * @public
  */
 toArray() {
  return this.f_list__org_gwtproject_view_client_ListDataProvider_ListWrapper_.toArray();
 }
 /**
  * @override
  * @template C
  * @param {Array<C>} a
  * @return {Array<C>}
  * @public
  */
 m_toArray__arrayOf_java_lang_Object(a) {
  return this.f_list__org_gwtproject_view_client_ListDataProvider_ListWrapper_.m_toArray__arrayOf_java_lang_Object(a);
 }
 /**
  * @public
  */
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
 /**
  * @public
  */
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
 /**
  * Default method forwarding stub.
  * @override
  * @param {UnaryOperator<T>} arg0
  * @public
  */
 m_replaceAll__java_util_function_UnaryOperator(arg0) {
  List.m_replaceAll__$default__java_util_List__java_util_function_UnaryOperator(this, arg0);
 }
 /**
  * Default method forwarding stub.
  * @override
  * @param {Comparator<?>} arg0
  * @public
  */
 m_sort__java_util_Comparator(arg0) {
  List.m_sort__$default__java_util_List__java_util_Comparator(this, arg0);
 }
 /**
  * Default method forwarding stub.
  * @override
  * @return {Spliterator<T>}
  * @public
  */
 m_spliterator__() {
  return /**@type {Spliterator<T>} */ (List.m_spliterator__$default__java_util_List(this));
 }
 /**
  * Default method forwarding stub.
  * @override
  * @return {Stream<T>}
  * @public
  */
 m_parallelStream__() {
  return /**@type {Stream<T>} */ (Collection.m_parallelStream__$default__java_util_Collection(this));
 }
 /**
  * Default method forwarding stub.
  * @override
  * @param {Predicate<?>} arg0
  * @return {boolean}
  * @public
  */
 m_removeIf__java_util_function_Predicate(arg0) {
  return Collection.m_removeIf__$default__java_util_Collection__java_util_function_Predicate(this, arg0);
 }
 /**
  * Default method forwarding stub.
  * @override
  * @return {Stream<T>}
  * @public
  */
 m_stream__() {
  return /**@type {Stream<T>} */ (Collection.m_stream__$default__java_util_Collection(this));
 }
 /**
  * Default method forwarding stub.
  * @override
  * @param {Consumer<?>} arg0
  * @public
  */
 m_forEach__java_util_function_Consumer(arg0) {
  Iterable.m_forEach__$default__java_lang_Iterable__java_util_function_Consumer(this, arg0);
 }
 /**
  * @private
  */
 $init___$p_org_gwtproject_view_client_ListDataProvider_ListWrapper() {
  this.f_curSize__org_gwtproject_view_client_ListDataProvider_ListWrapper_ = 0;
  this.f_flushCommand__org_gwtproject_view_client_ListDataProvider_ListWrapper_ = /**@type {!$1<T>} */ ($1.$create__org_gwtproject_view_client_ListDataProvider_ListWrapper(this));
  this.f_maxModified__org_gwtproject_view_client_ListDataProvider_ListWrapper_ = Integer.f_MIN_VALUE__java_lang_Integer;
  this.f_minModified__org_gwtproject_view_client_ListDataProvider_ListWrapper_ = Integer.f_MAX_VALUE__java_lang_Integer;
 }
 /**
  * @public
  */
 static $clinit() {
  ListWrapper.$clinit = () =>{};
  ListWrapper.$loadModules();
  j_l_Object.$clinit();
  List.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof ListWrapper;
 }
 /**
  * @public
  */
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