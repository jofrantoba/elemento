goog.module('org.gwtproject.editor.client.impl.ErrorCollector$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EditorVisitor = goog.require('org.gwtproject.editor.client.EditorVisitor$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Stack = goog.forwardDeclare('java.util.Stack$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Editor = goog.forwardDeclare('org.gwtproject.editor.client.Editor$impl');
let EditorContext = goog.forwardDeclare('org.gwtproject.editor.client.EditorContext$impl');
let EditorError = goog.forwardDeclare('org.gwtproject.editor.client.EditorError$impl');
let AbstractEditorDelegate = goog.forwardDeclare('org.gwtproject.editor.client.impl.AbstractEditorDelegate$impl');
let SimpleError = goog.forwardDeclare('org.gwtproject.editor.client.impl.SimpleError$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class ErrorCollector extends EditorVisitor {
 /** @protected */
 constructor() {
  super();
  /**@type {Stack<List<EditorError>>}*/
  this.f_errorStack__org_gwtproject_editor_client_impl_ErrorCollector_;
  /**@type {?string}*/
  this.f_lastAddedPath__org_gwtproject_editor_client_impl_ErrorCollector_;
  /**@type {List<EditorError>}*/
  this.f_lastAdded__org_gwtproject_editor_client_impl_ErrorCollector_;
 }
 /** @return {!ErrorCollector} */
 static $create__java_util_List(/** List<EditorError> */ errors) {
  ErrorCollector.$clinit();
  let $instance = new ErrorCollector();
  $instance.$ctor__org_gwtproject_editor_client_impl_ErrorCollector__java_util_List(errors);
  return $instance;
 }
 
 $ctor__org_gwtproject_editor_client_impl_ErrorCollector__java_util_List(/** List<EditorError> */ errors) {
  this.$ctor__org_gwtproject_editor_client_EditorVisitor__();
  this.$init___$p_org_gwtproject_editor_client_impl_ErrorCollector();
  $Asserts.$assert(!$Equality.$same(errors, null));
  this.f_errorStack__org_gwtproject_editor_client_impl_ErrorCollector_.m_push__java_lang_Object(errors);
 }
 /** @override @template T */
 m_endVisit__org_gwtproject_editor_client_EditorContext(/** EditorContext<T> */ ctx) {
  let delegate = /**@type {AbstractEditorDelegate<*, Editor>}*/ ($Casts.$to(ctx.m_getEditorDelegate__(), AbstractEditorDelegate));
  if ($Equality.$same(delegate, null)) {
   return;
  }
  let errors = delegate.m_getErrors__();
  this.f_lastAdded__org_gwtproject_editor_client_impl_ErrorCollector_ = /**@type {!ArrayList<EditorError>}*/ (ArrayList.$create__java_util_Collection(errors));
  this.f_lastAddedPath__org_gwtproject_editor_client_impl_ErrorCollector_ = ctx.m_getAbsolutePath__();
  /**@type {List<EditorError>}*/ ($Casts.$to(this.f_errorStack__org_gwtproject_editor_client_impl_ErrorCollector_.m_peek__(), List)).addAll(errors);
  errors.clear();
  let asErrors = ctx.m_asHasEditorErrors__();
  if (!$Equality.$same(asErrors, null)) {
   let tryConsume = /**@type {List<EditorError>}*/ ($Casts.$to(this.f_errorStack__org_gwtproject_editor_client_impl_ErrorCollector_.m_pop__(), List));
   let prefixLength = j_l_String.m_length__java_lang_String(ctx.m_getAbsolutePath__());
   for (let $iterator = tryConsume.m_iterator__(); $iterator.m_hasNext__(); ) {
    let error = /**@type {EditorError}*/ ($Casts.$to($iterator.m_next__(), EditorError));
    if ((prefixLength > 0) && (prefixLength < j_l_String.m_length__java_lang_String(error.m_getAbsolutePath__()))) {
     /**@type {SimpleError}*/ ($Casts.$to(error, SimpleError)).m_setPathPrefixLength__int_$pp_org_gwtproject_editor_client_impl(prefixLength + 1);
    } else {
     $Asserts.$assert(prefixLength == 0 || j_l_String.m_equals__java_lang_String__java_lang_Object(error.m_getAbsolutePath__(), ctx.m_getAbsolutePath__()));
     /**@type {SimpleError}*/ ($Casts.$to(error, SimpleError)).m_setPathPrefixLength__int_$pp_org_gwtproject_editor_client_impl(prefixLength);
    }
   }
   asErrors.m_showErrors__java_util_List(tryConsume);
   if (!tryConsume.isEmpty()) {
    let accumulator = /**@type {List<EditorError>}*/ ($Casts.$to(this.f_errorStack__org_gwtproject_editor_client_impl_ErrorCollector_.m_peek__(), List));
    for (let $iterator_1 = tryConsume.m_iterator__(); $iterator_1.m_hasNext__(); ) {
     let e = /**@type {EditorError}*/ ($Casts.$to($iterator_1.m_next__(), EditorError));
     if (!e.m_isConsumed__()) {
      accumulator.add(e);
     }
    }
   }
  }
 }
 /** @override @template Q @return {boolean} */
 m_visit__org_gwtproject_editor_client_EditorContext(/** EditorContext<Q> */ ctx) {
  let asErrors = ctx.m_asHasEditorErrors__();
  if (!$Equality.$same(asErrors, null)) {
   if (j_l_String.m_equals__java_lang_String__java_lang_Object(ctx.m_getAbsolutePath__(), this.f_lastAddedPath__org_gwtproject_editor_client_impl_ErrorCollector_)) {
    /**@type {List<EditorError>}*/ ($Casts.$to(this.f_errorStack__org_gwtproject_editor_client_impl_ErrorCollector_.m_peek__(), List)).removeAll(this.f_lastAdded__org_gwtproject_editor_client_impl_ErrorCollector_);
    this.f_errorStack__org_gwtproject_editor_client_impl_ErrorCollector_.m_push__java_lang_Object(this.f_lastAdded__org_gwtproject_editor_client_impl_ErrorCollector_);
   } else {
    this.f_errorStack__org_gwtproject_editor_client_impl_ErrorCollector_.m_push__java_lang_Object(/**@type {!ArrayList<EditorError>}*/ (ArrayList.$create__()));
   }
  }
  return true;
 }
 /** @private */
 $init___$p_org_gwtproject_editor_client_impl_ErrorCollector() {
  this.f_errorStack__org_gwtproject_editor_client_impl_ErrorCollector_ = /**@type {!Stack<List<EditorError>>}*/ (Stack.$create__());
 }
 
 static $clinit() {
  ErrorCollector.$clinit = () =>{};
  ErrorCollector.$loadModules();
  EditorVisitor.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ErrorCollector;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  List = goog.module.get('java.util.List$impl');
  Stack = goog.module.get('java.util.Stack$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  EditorError = goog.module.get('org.gwtproject.editor.client.EditorError$impl');
  AbstractEditorDelegate = goog.module.get('org.gwtproject.editor.client.impl.AbstractEditorDelegate$impl');
  SimpleError = goog.module.get('org.gwtproject.editor.client.impl.SimpleError$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(ErrorCollector, 'org.gwtproject.editor.client.impl.ErrorCollector');

exports = ErrorCollector; 
//# sourceMappingURL=ErrorCollector.js.map