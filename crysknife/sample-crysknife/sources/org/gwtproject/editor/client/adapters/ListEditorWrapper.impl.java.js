goog.module('org.gwtproject.editor.client.adapters.ListEditorWrapper$impl');

const AbstractList = goog.require('java.util.AbstractList$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let Collection = goog.forwardDeclare('java.util.Collection$impl');
let Comparator = goog.forwardDeclare('java.util.Comparator$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let Predicate = goog.forwardDeclare('java.util.function.Predicate$impl');
let UnaryOperator = goog.forwardDeclare('java.util.function.UnaryOperator$impl');
let Stream = goog.forwardDeclare('java.util.stream.Stream$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let EditorChain = goog.forwardDeclare('org.gwtproject.editor.client.CompositeEditor.EditorChain$impl');
let Editor = goog.forwardDeclare('org.gwtproject.editor.client.Editor$impl');
let EditorSource = goog.forwardDeclare('org.gwtproject.editor.client.adapters.EditorSource$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @template T, E
 * @extends {AbstractList<T>}
  */
class ListEditorWrapper extends AbstractList {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {List<T>} */
  this.f_backing__org_gwtproject_editor_client_adapters_ListEditorWrapper_;
  /** @public {EditorChain<T, E>} */
  this.f_chain__org_gwtproject_editor_client_adapters_ListEditorWrapper_;
  /** @public {List<E>} */
  this.f_editors__org_gwtproject_editor_client_adapters_ListEditorWrapper_;
  /** @public {EditorSource<E>} */
  this.f_editorSource__org_gwtproject_editor_client_adapters_ListEditorWrapper_;
  /** @public {List<T>} */
  this.f_workingCopy__org_gwtproject_editor_client_adapters_ListEditorWrapper_;
 }
 /**
  * @template T, E
  * @param {List<T>} backing
  * @param {EditorChain<T, E>} chain
  * @param {EditorSource<E>} editorSource
  * @return {!ListEditorWrapper<T, E>}
  * @public
  */
 static $create__java_util_List__org_gwtproject_editor_client_CompositeEditor_EditorChain__org_gwtproject_editor_client_adapters_EditorSource(backing, chain, editorSource) {
  ListEditorWrapper.$clinit();
  let $instance = new ListEditorWrapper();
  $instance.$ctor__org_gwtproject_editor_client_adapters_ListEditorWrapper__java_util_List__org_gwtproject_editor_client_CompositeEditor_EditorChain__org_gwtproject_editor_client_adapters_EditorSource(backing, chain, editorSource);
  return $instance;
 }
 /**
  * @param {List<T>} backing
  * @param {EditorChain<T, E>} chain
  * @param {EditorSource<E>} editorSource
  * @public
  */
 $ctor__org_gwtproject_editor_client_adapters_ListEditorWrapper__java_util_List__org_gwtproject_editor_client_CompositeEditor_EditorChain__org_gwtproject_editor_client_adapters_EditorSource(backing, chain, editorSource) {
  this.$ctor__java_util_AbstractList__();
  this.f_backing__org_gwtproject_editor_client_adapters_ListEditorWrapper_ = backing;
  this.f_chain__org_gwtproject_editor_client_adapters_ListEditorWrapper_ = chain;
  this.f_editorSource__org_gwtproject_editor_client_adapters_ListEditorWrapper_ = editorSource;
  this.f_editors__org_gwtproject_editor_client_adapters_ListEditorWrapper_ = /**@type {!ArrayList<E>} */ (ArrayList.$create__int(backing.size()));
  this.f_workingCopy__org_gwtproject_editor_client_adapters_ListEditorWrapper_ = /**@type {!ArrayList<T>} */ (ArrayList.$create__java_util_Collection(backing));
 }
 /**
  * @override
  * @param {number} index
  * @param {T} element
  * @public
  */
 addAtIndex(index, element) {
  this.f_workingCopy__org_gwtproject_editor_client_adapters_ListEditorWrapper_.addAtIndex(index, element);
  let subEditor = this.f_editorSource__org_gwtproject_editor_client_adapters_ListEditorWrapper_.m_create__int(index);
  this.f_editors__org_gwtproject_editor_client_adapters_ListEditorWrapper_.addAtIndex(index, subEditor);
  for (let i = index + 1, j = this.f_editors__org_gwtproject_editor_client_adapters_ListEditorWrapper_.size(); i < j; i++) {
   this.f_editorSource__org_gwtproject_editor_client_adapters_ListEditorWrapper_.m_setIndex__org_gwtproject_editor_client_Editor__int(/**@type {E} */ ($Casts.$to(this.f_editors__org_gwtproject_editor_client_adapters_ListEditorWrapper_.getAtIndex(i), Editor)), i);
  }
  this.f_chain__org_gwtproject_editor_client_adapters_ListEditorWrapper_.m_attach__java_lang_Object__org_gwtproject_editor_client_Editor(element, subEditor);
 }
 /**
  * @override
  * @param {number} index
  * @return {T}
  * @public
  */
 getAtIndex(index) {
  return this.f_workingCopy__org_gwtproject_editor_client_adapters_ListEditorWrapper_.getAtIndex(index);
 }
 /**
  * @override
  * @param {number} index
  * @return {T}
  * @public
  */
 removeAtIndex(index) {
  let toReturn = this.f_workingCopy__org_gwtproject_editor_client_adapters_ListEditorWrapper_.removeAtIndex(index);
  let subEditor = /**@type {E} */ ($Casts.$to(this.f_editors__org_gwtproject_editor_client_adapters_ListEditorWrapper_.removeAtIndex(index), Editor));
  this.f_editorSource__org_gwtproject_editor_client_adapters_ListEditorWrapper_.m_dispose__org_gwtproject_editor_client_Editor(subEditor);
  for (let i = index, j = this.f_editors__org_gwtproject_editor_client_adapters_ListEditorWrapper_.size(); i < j; i++) {
   this.f_editorSource__org_gwtproject_editor_client_adapters_ListEditorWrapper_.m_setIndex__org_gwtproject_editor_client_Editor__int(/**@type {E} */ ($Casts.$to(this.f_editors__org_gwtproject_editor_client_adapters_ListEditorWrapper_.getAtIndex(i), Editor)), i);
  }
  this.f_chain__org_gwtproject_editor_client_adapters_ListEditorWrapper_.m_detach__org_gwtproject_editor_client_Editor(subEditor);
  return toReturn;
 }
 /**
  * @override
  * @param {number} index
  * @param {T} element
  * @return {T}
  * @public
  */
 setAtIndex(index, element) {
  let toReturn = this.f_workingCopy__org_gwtproject_editor_client_adapters_ListEditorWrapper_.setAtIndex(index, element);
  this.f_chain__org_gwtproject_editor_client_adapters_ListEditorWrapper_.m_attach__java_lang_Object__org_gwtproject_editor_client_Editor(element, /**@type {E} */ ($Casts.$to(this.f_editors__org_gwtproject_editor_client_adapters_ListEditorWrapper_.getAtIndex(index), Editor)));
  return toReturn;
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 size() {
  return this.f_workingCopy__org_gwtproject_editor_client_adapters_ListEditorWrapper_.size();
 }
 /**
  * @public
  */
 m_attach___$pp_org_gwtproject_editor_client_adapters() {
  this.f_editors__org_gwtproject_editor_client_adapters_ListEditorWrapper_.addAll(this.f_editorSource__org_gwtproject_editor_client_adapters_ListEditorWrapper_.m_create__int__int(this.f_workingCopy__org_gwtproject_editor_client_adapters_ListEditorWrapper_.size(), 0));
  for (let i = 0, j = this.f_workingCopy__org_gwtproject_editor_client_adapters_ListEditorWrapper_.size(); i < j; i++) {
   this.f_chain__org_gwtproject_editor_client_adapters_ListEditorWrapper_.m_attach__java_lang_Object__org_gwtproject_editor_client_Editor(this.f_workingCopy__org_gwtproject_editor_client_adapters_ListEditorWrapper_.getAtIndex(i), /**@type {E} */ ($Casts.$to(this.f_editors__org_gwtproject_editor_client_adapters_ListEditorWrapper_.getAtIndex(i), Editor)));
  }
 }
 /**
  * @public
  */
 m_detach___$pp_org_gwtproject_editor_client_adapters() {
  for (let i = 0, j = this.f_editors__org_gwtproject_editor_client_adapters_ListEditorWrapper_.size(); i < j; i++) {
   this.f_chain__org_gwtproject_editor_client_adapters_ListEditorWrapper_.m_detach__org_gwtproject_editor_client_Editor(/**@type {E} */ ($Casts.$to(this.f_editors__org_gwtproject_editor_client_adapters_ListEditorWrapper_.getAtIndex(i), Editor)));
   this.f_editorSource__org_gwtproject_editor_client_adapters_ListEditorWrapper_.m_dispose__org_gwtproject_editor_client_Editor(/**@type {E} */ ($Casts.$to(this.f_editors__org_gwtproject_editor_client_adapters_ListEditorWrapper_.getAtIndex(i), Editor)));
  }
 }
 /**
  * @public
  */
 m_flush___$pp_org_gwtproject_editor_client_adapters() {
  for (let i = 0, j = this.f_workingCopy__org_gwtproject_editor_client_adapters_ListEditorWrapper_.size(); i < j; i++) {
   let subEditor = /**@type {E} */ ($Casts.$to(this.f_editors__org_gwtproject_editor_client_adapters_ListEditorWrapper_.getAtIndex(i), Editor));
   let value = this.f_chain__org_gwtproject_editor_client_adapters_ListEditorWrapper_.m_getValue__org_gwtproject_editor_client_Editor(subEditor);
   if (!$Equality.$same(this.f_workingCopy__org_gwtproject_editor_client_adapters_ListEditorWrapper_.getAtIndex(i), value)) {
    this.f_workingCopy__org_gwtproject_editor_client_adapters_ListEditorWrapper_.setAtIndex(i, value);
   }
  }
  this.f_backing__org_gwtproject_editor_client_adapters_ListEditorWrapper_.clear();
  this.f_backing__org_gwtproject_editor_client_adapters_ListEditorWrapper_.addAll(this.f_workingCopy__org_gwtproject_editor_client_adapters_ListEditorWrapper_);
 }
 /**
  * @return {List<?>}
  * @public
  */
 m_getEditors___$pp_org_gwtproject_editor_client_adapters() {
  return this.f_editors__org_gwtproject_editor_client_adapters_ListEditorWrapper_;
 }
 /**
  * @param {List<T>} value
  * @return {boolean}
  * @public
  */
 m_isSameValue__java_util_List_$pp_org_gwtproject_editor_client_adapters(value) {
  return $Equality.$same(this.f_backing__org_gwtproject_editor_client_adapters_ListEditorWrapper_, value);
 }
 /**
  * @public
  */
 m_refresh___$pp_org_gwtproject_editor_client_adapters() {
  let i = 0;
  for (let $iterator = this.f_backing__org_gwtproject_editor_client_adapters_ListEditorWrapper_.m_iterator__(); $iterator.m_hasNext__(); ) {
   let item = $iterator.m_next__();
   if (i < this.size()) {
    this.setAtIndex(i, item);
   } else {
    $Asserts.$assert(i == this.size());
    this.addAtIndex(i, item);
   }
   i++;
  }
  while (this.f_backing__org_gwtproject_editor_client_adapters_ListEditorWrapper_.size() < this.size()) {
   this.removeAtIndex(this.size() - 1);
  }
  $Asserts.$assert(this.f_backing__org_gwtproject_editor_client_adapters_ListEditorWrapper_.size() == this.size());
  $Asserts.$assert($Objects.m_equals__java_lang_Object__java_lang_Object(this.f_backing__org_gwtproject_editor_client_adapters_ListEditorWrapper_, this.f_workingCopy__org_gwtproject_editor_client_adapters_ListEditorWrapper_));
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
  * @public
  */
 static $clinit() {
  ListEditorWrapper.$clinit = () =>{};
  ListEditorWrapper.$loadModules();
  AbstractList.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof ListEditorWrapper;
 }
 /**
  * @public
  */
 static $loadModules() {
  Iterable = goog.module.get('java.lang.Iterable$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  Collection = goog.module.get('java.util.Collection$impl');
  List = goog.module.get('java.util.List$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Editor = goog.module.get('org.gwtproject.editor.client.Editor$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
 
}
$Util.$setClassMetadata(ListEditorWrapper, 'org.gwtproject.editor.client.adapters.ListEditorWrapper');

exports = ListEditorWrapper; 
//# sourceMappingURL=ListEditorWrapper.js.map