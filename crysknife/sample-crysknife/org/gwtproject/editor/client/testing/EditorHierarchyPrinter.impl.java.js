goog.module('org.gwtproject.editor.client.testing.EditorHierarchyPrinter$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EditorVisitor = goog.require('org.gwtproject.editor.client.EditorVisitor$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let EditorContext = goog.forwardDeclare('org.gwtproject.editor.client.EditorContext$impl');
let EditorDriver = goog.forwardDeclare('org.gwtproject.editor.client.EditorDriver$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

class EditorHierarchyPrinter extends EditorVisitor {
 /** @protected */
 constructor() {
  super();
  /**@type {number}*/
  this.f_level__org_gwtproject_editor_client_testing_EditorHierarchyPrinter_ = 0;
  /**@type {StringBuilder}*/
  this.f_sb__org_gwtproject_editor_client_testing_EditorHierarchyPrinter_;
 }
 /** @return {?string} */
 static m_toString__org_gwtproject_editor_client_EditorDriver(/** EditorDriver<?> */ driver) {
  EditorHierarchyPrinter.$clinit();
  let sb = StringBuilder.$create__();
  driver.m_accept__org_gwtproject_editor_client_EditorVisitor(EditorHierarchyPrinter.$create__java_lang_StringBuilder(sb));
  return sb.toString();
 }
 /** @return {!EditorHierarchyPrinter} */
 static $create__java_lang_StringBuilder(/** StringBuilder */ out) {
  let $instance = new EditorHierarchyPrinter();
  $instance.$ctor__org_gwtproject_editor_client_testing_EditorHierarchyPrinter__java_lang_StringBuilder(out);
  return $instance;
 }
 
 $ctor__org_gwtproject_editor_client_testing_EditorHierarchyPrinter__java_lang_StringBuilder(/** StringBuilder */ out) {
  this.$ctor__org_gwtproject_editor_client_EditorVisitor__();
  this.$init___$p_org_gwtproject_editor_client_testing_EditorHierarchyPrinter();
  this.f_sb__org_gwtproject_editor_client_testing_EditorHierarchyPrinter_ = out;
 }
 /** @override @template T */
 m_endVisit__org_gwtproject_editor_client_EditorContext(/** EditorContext<T> */ ctx) {
  this.f_level__org_gwtproject_editor_client_testing_EditorHierarchyPrinter_--;
 }
 /** @override @template T @return {boolean} */
 m_visit__org_gwtproject_editor_client_EditorContext(/** EditorContext<T> */ ctx) {
  this.m_println__java_lang_String_$p_org_gwtproject_editor_client_testing_EditorHierarchyPrinter(ctx.m_getAbsolutePath__());
  this.m_data__java_lang_String_$p_org_gwtproject_editor_client_testing_EditorHierarchyPrinter(ctx.m_getEditedType__().m_getName__());
  this.m_data__java_lang_String_$p_org_gwtproject_editor_client_testing_EditorHierarchyPrinter($Objects.m_getClass__java_lang_Object(ctx.m_getEditor__()).m_getName__());
  this.m_data__java_lang_String_$p_org_gwtproject_editor_client_testing_EditorHierarchyPrinter($Equality.$same("Implements: " + j_l_String.m_valueOf__java_lang_Object(ctx.m_asCompositeEditor__()), null) ? "" : $Equality.$same("CompositeEditor " + j_l_String.m_valueOf__java_lang_Object(ctx.m_asHasEditorDelegate__()), null) ? "" : $Equality.$same("HasEditorDelegate " + j_l_String.m_valueOf__java_lang_Object(ctx.m_asHasEditorErrors__()), null) ? "" : $Equality.$same("HasEditorErrors " + j_l_String.m_valueOf__java_lang_Object(ctx.m_asLeafValueEditor__()), null) ? "" : $Equality.$same("LeafValueEditor " + j_l_String.m_valueOf__java_lang_Object(ctx.m_asValueAwareEditor__()), null) ? "" : "ValueAwareEditor ");
  this.f_level__org_gwtproject_editor_client_testing_EditorHierarchyPrinter_++;
  return true;
 }
 
 m_data__java_lang_String_$p_org_gwtproject_editor_client_testing_EditorHierarchyPrinter(/** ?string */ msg) {
  this.m_println__java_lang_String_$p_org_gwtproject_editor_client_testing_EditorHierarchyPrinter(j_l_String.m_valueOf__java_lang_Object(EditorHierarchyPrinter.f_SPACE__org_gwtproject_editor_client_testing_EditorHierarchyPrinter_) + j_l_String.m_valueOf__java_lang_Object(msg));
 }
 
 m_println__java_lang_String_$p_org_gwtproject_editor_client_testing_EditorHierarchyPrinter(/** ?string */ msg) {
  for (let i = 0; i < this.f_level__org_gwtproject_editor_client_testing_EditorHierarchyPrinter_; i++) {
   this.f_sb__org_gwtproject_editor_client_testing_EditorHierarchyPrinter_.m_append__java_lang_String(EditorHierarchyPrinter.f_INDENT__org_gwtproject_editor_client_testing_EditorHierarchyPrinter_);
  }
  this.f_sb__org_gwtproject_editor_client_testing_EditorHierarchyPrinter_.m_append__java_lang_String(msg);
  this.f_sb__org_gwtproject_editor_client_testing_EditorHierarchyPrinter_.m_append__java_lang_String("\n");
 }
 /** @private */
 $init___$p_org_gwtproject_editor_client_testing_EditorHierarchyPrinter() {
  this.f_level__org_gwtproject_editor_client_testing_EditorHierarchyPrinter_ = 0;
 }
 
 static $clinit() {
  EditorHierarchyPrinter.$clinit = () =>{};
  EditorHierarchyPrinter.$loadModules();
  EditorVisitor.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof EditorHierarchyPrinter;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
 
}
$Util.$setClassMetadata(EditorHierarchyPrinter, 'org.gwtproject.editor.client.testing.EditorHierarchyPrinter');

/**@const {?string}*/
EditorHierarchyPrinter.f_INDENT__org_gwtproject_editor_client_testing_EditorHierarchyPrinter_ = "  ";
/**@const {?string}*/
EditorHierarchyPrinter.f_SPACE__org_gwtproject_editor_client_testing_EditorHierarchyPrinter_ = " ";

exports = EditorHierarchyPrinter; 
//# sourceMappingURL=EditorHierarchyPrinter.js.map