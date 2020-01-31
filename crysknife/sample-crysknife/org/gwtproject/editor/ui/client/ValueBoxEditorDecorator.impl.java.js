goog.module('org.gwtproject.editor.ui.client.ValueBoxEditorDecorator$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasEditorErrors = goog.require('org.gwtproject.editor.client.HasEditorErrors$impl');
const IsEditor = goog.require('org.gwtproject.editor.client.IsEditor$impl');
const Composite = goog.require('org.gwtproject.user.client.ui.Composite$impl');

let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let DivElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.DivElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let Style_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Style.$Overlay$impl');
let Display = goog.forwardDeclare('org.gwtproject.dom.style.shared.Display$impl');
let EditorError = goog.forwardDeclare('org.gwtproject.editor.client.EditorError$impl');
let Binder = goog.forwardDeclare('org.gwtproject.editor.ui.client.ValueBoxEditorDecorator.Binder$impl');
let ValueBoxEditor = goog.forwardDeclare('org.gwtproject.editor.ui.client.adapters.ValueBoxEditor$impl');
let SimplePanel = goog.forwardDeclare('org.gwtproject.user.client.ui.SimplePanel$impl');
let ValueBoxBase = goog.forwardDeclare('org.gwtproject.user.client.ui.ValueBoxBase$impl');
let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @template T
 * @implements {HasEditorErrors<T>}
 * @implements {IsEditor<ValueBoxEditor<T>>}
  */
class ValueBoxEditorDecorator extends Composite {
 /** @protected */
 constructor() {
  super();
  /**@type {SimplePanel}*/
  this.f_contents__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator;
  /**@type {Object}*/
  this.f_errorLabel__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator;
  /**@type {ValueBoxEditor<T>}*/
  this.f_editor__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_;
 }
 //Factory method corresponding to constructor 'ValueBoxEditorDecorator()'.
 /** @template T @return {!ValueBoxEditorDecorator<T>} */
 static $create__() {
  ValueBoxEditorDecorator.$clinit();
  let $instance = new ValueBoxEditorDecorator();
  $instance.$ctor__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator__();
  return $instance;
 }
 //Initialization from constructor 'ValueBoxEditorDecorator()'.
 
 $ctor__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator__() {
  this.$ctor__org_gwtproject_user_client_ui_Composite__();
  this.m_initWidget__org_gwtproject_user_client_ui_Widget(/**@type {Widget}*/ ($Casts.$to(Binder.f_INSTANCE__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_Binder.m_createAndBindUi__java_lang_Object(this), Widget)));
 }
 //Factory method corresponding to constructor 'ValueBoxEditorDecorator(ValueBoxBase, ValueBoxEditor)'.
 /** @template T @return {!ValueBoxEditorDecorator<T>} */
 static $create__org_gwtproject_user_client_ui_ValueBoxBase__org_gwtproject_editor_ui_client_adapters_ValueBoxEditor(/** ValueBoxBase<T> */ widget, /** ValueBoxEditor<T> */ editor) {
  ValueBoxEditorDecorator.$clinit();
  let $instance = new ValueBoxEditorDecorator();
  $instance.$ctor__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator__org_gwtproject_user_client_ui_ValueBoxBase__org_gwtproject_editor_ui_client_adapters_ValueBoxEditor(widget, editor);
  return $instance;
 }
 //Initialization from constructor 'ValueBoxEditorDecorator(ValueBoxBase, ValueBoxEditor)'.
 
 $ctor__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator__org_gwtproject_user_client_ui_ValueBoxBase__org_gwtproject_editor_ui_client_adapters_ValueBoxEditor(/** ValueBoxBase<T> */ widget, /** ValueBoxEditor<T> */ editor) {
  this.$ctor__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator__();
  this.f_contents__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator.m_add__org_gwtproject_user_client_ui_Widget(widget);
  this.f_editor__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_ = editor;
 }
 /** @override @return {ValueBoxEditor<T>} */
 m_asEditor__() {
  return this.f_editor__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_;
 }
 
 m_setEditor__org_gwtproject_editor_ui_client_adapters_ValueBoxEditor(/** ValueBoxEditor<T> */ editor) {
  this.f_editor__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_ = editor;
 }
 
 m_setValueBox__org_gwtproject_user_client_ui_ValueBoxBase(/** ValueBoxBase<T> */ widget) {
  this.f_contents__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator.m_add__org_gwtproject_user_client_ui_Widget(widget);
  this.m_setEditor__org_gwtproject_editor_ui_client_adapters_ValueBoxEditor(widget.m_asEditor__());
 }
 /** @override */
 m_showErrors__java_util_List(/** List<EditorError> */ errors) {
  let sb = StringBuilder.$create__();
  for (let $iterator = errors.m_iterator__(); $iterator.m_hasNext__(); ) {
   let error = /**@type {EditorError}*/ ($Casts.$to($iterator.m_next__(), EditorError));
   if ($Objects.m_equals__java_lang_Object__java_lang_Object(error.m_getEditor__(), this.f_editor__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_)) {
    sb.m_append__java_lang_String("\n").m_append__java_lang_String(error.m_getMessage__());
   }
  }
  if (sb.m_length__() == 0) {
   $Overlay.m_setInnerText__$devirt__org_gwtproject_dom_client_Element__java_lang_String(this.f_errorLabel__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator, "");
   Style_$Overlay.m_setDisplay__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_Display(this.f_errorLabel__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator.style, Display.f_NONE__org_gwtproject_dom_style_shared_Display);
   return;
  }
  $Overlay.m_setInnerText__$devirt__org_gwtproject_dom_client_Element__java_lang_String(this.f_errorLabel__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator, sb.m_substring__int(1));
  Style_$Overlay.m_setDisplay__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_Display(this.f_errorLabel__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator.style, Display.f_INLINE_BLOCK__org_gwtproject_dom_style_shared_Display);
 }
 
 static $clinit() {
  ValueBoxEditorDecorator.$clinit = () =>{};
  ValueBoxEditorDecorator.$loadModules();
  Composite.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ValueBoxEditorDecorator;
 }
 
 static $loadModules() {
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  Style_$Overlay = goog.module.get('org.gwtproject.dom.client.Style.$Overlay$impl');
  Display = goog.module.get('org.gwtproject.dom.style.shared.Display$impl');
  EditorError = goog.module.get('org.gwtproject.editor.client.EditorError$impl');
  Binder = goog.module.get('org.gwtproject.editor.ui.client.ValueBoxEditorDecorator.Binder$impl');
  Widget = goog.module.get('org.gwtproject.user.client.ui.Widget$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
 
}
$Util.$setClassMetadata(ValueBoxEditorDecorator, 'org.gwtproject.editor.ui.client.ValueBoxEditorDecorator');

HasEditorErrors.$markImplementor(ValueBoxEditorDecorator);
IsEditor.$markImplementor(ValueBoxEditorDecorator);

exports = ValueBoxEditorDecorator; 
//# sourceMappingURL=ValueBoxEditorDecorator.js.map