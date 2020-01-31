goog.module('org.gwtproject.user.client.ui.ValuePicker.DefaultCell$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractCell = goog.require('org.gwtproject.cell.client.AbstractCell$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Context = goog.forwardDeclare('org.gwtproject.cell.client.Cell.Context$impl');
let SafeHtmlBuilder = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlBuilder$impl');
let Renderer = goog.forwardDeclare('org.gwtproject.text.shared.Renderer$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @template T
 * @extends {AbstractCell<T>}
  */
class DefaultCell extends AbstractCell {
 /** @protected */
 constructor() {
  super();
  /**@type {Renderer<?>}*/
  this.f_renderer__org_gwtproject_user_client_ui_ValuePicker_DefaultCell_;
 }
 /** @template T @return {!DefaultCell<T>} */
 static $create__org_gwtproject_text_shared_Renderer(/** Renderer<?> */ renderer) {
  DefaultCell.$clinit();
  let $instance = new DefaultCell();
  $instance.$ctor__org_gwtproject_user_client_ui_ValuePicker_DefaultCell__org_gwtproject_text_shared_Renderer(renderer);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_ValuePicker_DefaultCell__org_gwtproject_text_shared_Renderer(/** Renderer<?> */ renderer) {
  this.$ctor__org_gwtproject_cell_client_AbstractCell__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)));
  this.f_renderer__org_gwtproject_user_client_ui_ValuePicker_DefaultCell_ = renderer;
 }
 /** @override */
 m_render__org_gwtproject_cell_client_Cell_Context__java_lang_Object__org_gwtproject_safehtml_shared_SafeHtmlBuilder(/** Context */ context, /** T */ value, /** SafeHtmlBuilder */ sb) {
  sb.m_appendEscaped__java_lang_String(this.f_renderer__org_gwtproject_user_client_ui_ValuePicker_DefaultCell_.m_render__java_lang_Object(value));
 }
 
 static $clinit() {
  DefaultCell.$clinit = () =>{};
  DefaultCell.$loadModules();
  AbstractCell.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultCell;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DefaultCell, 'org.gwtproject.user.client.ui.ValuePicker$DefaultCell');

exports = DefaultCell; 
//# sourceMappingURL=ValuePicker$DefaultCell.js.map