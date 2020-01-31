goog.module('org.gwtproject.editor.client.adapters.EditorSource$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Editor = goog.forwardDeclare('org.gwtproject.editor.client.Editor$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');

/**
 * @abstract
 * @template E
  */
class EditorSource extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 
 $ctor__org_gwtproject_editor_client_adapters_EditorSource__() {
  this.$ctor__java_lang_Object__();
 }
 /** @abstract @return {E} */
 m_create__int(/** number */ index) {}
 /** @return {List<E>} */
 m_create__int__int(/** number */ count, /** number */ index) {
  $Asserts.$assert(index >= 0);
  let toReturn = /**@type {!ArrayList<E>}*/ (ArrayList.$create__int(count));
  for (let i = 0; i < count; i++) {
   toReturn.add(this.m_create__int(index + i));
  }
  return toReturn;
 }
 /** @return {E} */
 m_createEditorForTraversal__() {
  let toReturn = this.m_create__int(0);
  this.m_dispose__org_gwtproject_editor_client_Editor(toReturn);
  return toReturn;
 }
 
 m_dispose__org_gwtproject_editor_client_Editor(/** E */ subEditor) {}
 
 m_setIndex__org_gwtproject_editor_client_Editor__int(/** E */ editor, /** number */ index) {
  $Asserts.$assert(index >= 0);
 }
 
 static $clinit() {
  EditorSource.$clinit = () =>{};
  EditorSource.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof EditorSource;
 }
 
 static $loadModules() {
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
 }
 
}
$Util.$setClassMetadata(EditorSource, 'org.gwtproject.editor.client.adapters.EditorSource');

exports = EditorSource; 
//# sourceMappingURL=EditorSource.js.map