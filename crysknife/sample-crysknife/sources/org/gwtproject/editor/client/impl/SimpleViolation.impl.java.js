goog.module('org.gwtproject.editor.client.impl.SimpleViolation$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let IllegalStateException = goog.forwardDeclare('java.lang.IllegalStateException$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ConstraintViolation = goog.forwardDeclare('javax.validation.ConstraintViolation$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Editor = goog.forwardDeclare('org.gwtproject.editor.client.Editor$impl');
let EditorDriver = goog.forwardDeclare('org.gwtproject.editor.client.EditorDriver$impl');
let AbstractEditorDelegate = goog.forwardDeclare('org.gwtproject.editor.client.impl.AbstractEditorDelegate$impl');
let DelegateMap = goog.forwardDeclare('org.gwtproject.editor.client.impl.DelegateMap$impl');
let KeyMethod = goog.forwardDeclare('org.gwtproject.editor.client.impl.DelegateMap.KeyMethod$impl');
let ConstraintViolationIterable = goog.forwardDeclare('org.gwtproject.editor.client.impl.SimpleViolation.ConstraintViolationIterable$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @abstract
  */
class SimpleViolation extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {Iterable<SimpleViolation>} */
 static m_iterableFromConstrantViolations__java_lang_Iterable(/** Iterable<ConstraintViolation<?>> */ violations) {
  SimpleViolation.$clinit();
  return ConstraintViolationIterable.$create__java_lang_Iterable(violations);
 }
 
 static m_pushViolations__java_lang_Iterable__org_gwtproject_editor_client_EditorDriver__org_gwtproject_editor_client_impl_DelegateMap_KeyMethod(/** Iterable<SimpleViolation> */ violations, /** EditorDriver<?> */ driver, /** KeyMethod */ keyMethod) {
  SimpleViolation.$clinit();
  if ($Equality.$same(violations, null)) {
   return;
  }
  let delegateMap = DelegateMap.m_of__org_gwtproject_editor_client_EditorDriver__org_gwtproject_editor_client_impl_DelegateMap_KeyMethod(driver, keyMethod);
  for (let $iterator = violations.m_iterator__(); $iterator.m_hasNext__(); ) {
   let error = /**@type {SimpleViolation}*/ ($Casts.$to($iterator.m_next__(), SimpleViolation));
   let key = error.m_getKey__();
   let delegateList = delegateMap.m_get__java_lang_Object(key);
   if (!$Equality.$same(delegateList, null)) {
    for (let $iterator_1 = delegateList.m_iterator__(); $iterator_1.m_hasNext__(); ) {
     let baseDelegate = /**@type {AbstractEditorDelegate<*, Editor>}*/ ($Casts.$to($iterator_1.m_next__(), AbstractEditorDelegate));
     let basePath = baseDelegate.m_getPath__();
     let absolutePath = j_l_String.m_valueOf__java_lang_Object((j_l_String.m_length__java_lang_String(basePath) > 0 ? j_l_String.m_valueOf__java_lang_Object(basePath) + "." : "")) + j_l_String.m_valueOf__java_lang_Object(error.m_getPath__());
     let originalAbsolutePath = absolutePath;
     while (true) {
      if (SimpleViolation.m_processLeafDelegates__org_gwtproject_editor_client_impl_DelegateMap__java_lang_String__java_lang_String__org_gwtproject_editor_client_impl_SimpleViolation(delegateMap, originalAbsolutePath, absolutePath, error)) {
       break;
      } else if (SimpleViolation.m_processEditors__org_gwtproject_editor_client_impl_DelegateMap__org_gwtproject_editor_client_impl_AbstractEditorDelegate__java_lang_String__org_gwtproject_editor_client_impl_SimpleViolation(delegateMap, baseDelegate, absolutePath, error)) {
       break;
      } else {
       if (j_l_String.m_isEmpty__java_lang_String(absolutePath)) {
        throw $Exceptions.toJs(IllegalStateException.$create__java_lang_String("No editor: " + j_l_String.m_valueOf__java_lang_Object(originalAbsolutePath)));
       }
       absolutePath = SimpleViolation.m_getParentPath__java_lang_String(absolutePath);
      }
     }
    }
   }
  }
 }
 /** @return {?string} */
 static m_getParentPath__java_lang_String(/** ?string */ absolutePath) {
  let dotIdx = j_l_String.m_lastIndexOf__java_lang_String__int(absolutePath, 46 /* '.' */);
  if (dotIdx > 0) {
   return j_l_String.m_substring__java_lang_String__int__int(absolutePath, 0, dotIdx);
  }
  return "";
 }
 /** @return {boolean} */
 static m_processEditors__org_gwtproject_editor_client_impl_DelegateMap__org_gwtproject_editor_client_impl_AbstractEditorDelegate__java_lang_String__org_gwtproject_editor_client_impl_SimpleViolation(/** DelegateMap */ delegateMap, /** AbstractEditorDelegate<?, ?> */ baseDelegate, /** ?string */ absolutePath, /** SimpleViolation */ error) {
  let editors = delegateMap.m_getEditorByPath__java_lang_String(absolutePath);
  if ($Equality.$same(editors, null)) {
   return false;
  }
  for (let $iterator = editors.m_iterator__(); $iterator.m_hasNext__(); ) {
   let editor = /**@type {Editor<*>}*/ ($Casts.$to($iterator.m_next__(), Editor));
   baseDelegate.m_recordError__java_lang_String__java_lang_Object__java_lang_Object__java_lang_String__org_gwtproject_editor_client_Editor(error.m_getMessage__(), null, error.m_getUserDataObject__(), error.m_getPath__(), editor);
  }
  return true;
 }
 /** @return {boolean} */
 static m_processLeafDelegates__org_gwtproject_editor_client_impl_DelegateMap__java_lang_String__java_lang_String__org_gwtproject_editor_client_impl_SimpleViolation(/** DelegateMap */ delegateMap, /** ?string */ originalAbsolutePath, /** ?string */ absolutePath, /** SimpleViolation */ error) {
  let leafDelegates = delegateMap.m_getDelegatesByPath__java_lang_String(absolutePath);
  if ($Equality.$same(leafDelegates, null)) {
   return false;
  }
  let addlPath = j_l_String.m_substring__java_lang_String__int(originalAbsolutePath, j_l_String.m_length__java_lang_String(absolutePath));
  for (let $iterator = leafDelegates.m_iterator__(); $iterator.m_hasNext__(); ) {
   let delegate = /**@type {AbstractEditorDelegate<*, Editor>}*/ ($Casts.$to($iterator.m_next__(), AbstractEditorDelegate));
   if (j_l_String.m_isEmpty__java_lang_String(addlPath)) {
    delegate.m_recordError__java_lang_String__java_lang_Object__java_lang_Object(error.m_getMessage__(), null, error.m_getUserDataObject__());
   } else {
    delegate.m_recordError__java_lang_String__java_lang_Object__java_lang_Object__java_lang_String__org_gwtproject_editor_client_Editor(error.m_getMessage__(), null, error.m_getUserDataObject__(), addlPath, delegate.m_getEditor__());
   }
  }
  return true;
 }
 
 $ctor__org_gwtproject_editor_client_impl_SimpleViolation__() {
  this.$ctor__java_lang_Object__();
 }
 /** @abstract @return {*} */
 m_getKey__() {}
 /** @abstract @return {?string} */
 m_getMessage__() {}
 /** @abstract @return {?string} */
 m_getPath__() {}
 /** @abstract @return {*} */
 m_getUserDataObject__() {}
 
 static $clinit() {
  SimpleViolation.$clinit = () =>{};
  SimpleViolation.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SimpleViolation;
 }
 
 static $loadModules() {
  IllegalStateException = goog.module.get('java.lang.IllegalStateException$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Editor = goog.module.get('org.gwtproject.editor.client.Editor$impl');
  AbstractEditorDelegate = goog.module.get('org.gwtproject.editor.client.impl.AbstractEditorDelegate$impl');
  DelegateMap = goog.module.get('org.gwtproject.editor.client.impl.DelegateMap$impl');
  ConstraintViolationIterable = goog.module.get('org.gwtproject.editor.client.impl.SimpleViolation.ConstraintViolationIterable$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(SimpleViolation, 'org.gwtproject.editor.client.impl.SimpleViolation');

exports = SimpleViolation; 
//# sourceMappingURL=SimpleViolation.js.map