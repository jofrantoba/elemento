goog.module('org.gwtproject.cell.client.AbstractSafeHtmlCell$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractCell = goog.require('org.gwtproject.cell.client.AbstractCell$impl');

let IllegalArgumentException = goog.forwardDeclare('java.lang.IllegalArgumentException$impl');
let Set = goog.forwardDeclare('java.util.Set$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Context = goog.forwardDeclare('org.gwtproject.cell.client.Cell.Context$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let SafeHtmlBuilder = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlBuilder$impl');
let SafeHtmlRenderer = goog.forwardDeclare('org.gwtproject.text.shared.SafeHtmlRenderer$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @abstract
 * @template C
 * @extends {AbstractCell<C>}
  */
class AbstractSafeHtmlCell extends AbstractCell {
 /** @protected */
 constructor() {
  super();
  /**@type {SafeHtmlRenderer<C>}*/
  this.f_renderer__org_gwtproject_cell_client_AbstractSafeHtmlCell_;
 }
 //Initialization from constructor 'AbstractSafeHtmlCell(SafeHtmlRenderer, String...)'.
 
 $ctor__org_gwtproject_cell_client_AbstractSafeHtmlCell__org_gwtproject_text_shared_SafeHtmlRenderer__arrayOf_java_lang_String(/** SafeHtmlRenderer<C> */ renderer, /** Array<?string> */ consumedEvents) {
  this.$ctor__org_gwtproject_cell_client_AbstractCell__arrayOf_java_lang_String(consumedEvents);
  if ($Equality.$same(renderer, null)) {
   throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String("renderer == null"));
  }
  this.f_renderer__org_gwtproject_cell_client_AbstractSafeHtmlCell_ = renderer;
 }
 //Initialization from constructor 'AbstractSafeHtmlCell(SafeHtmlRenderer, Set)'.
 
 $ctor__org_gwtproject_cell_client_AbstractSafeHtmlCell__org_gwtproject_text_shared_SafeHtmlRenderer__java_util_Set(/** SafeHtmlRenderer<C> */ renderer, /** Set<?string> */ consumedEvents) {
  this.$ctor__org_gwtproject_cell_client_AbstractCell__java_util_Set(consumedEvents);
  if ($Equality.$same(renderer, null)) {
   throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String("renderer == null"));
  }
  this.f_renderer__org_gwtproject_cell_client_AbstractSafeHtmlCell_ = renderer;
 }
 /** @return {SafeHtmlRenderer<C>} */
 m_getRenderer__() {
  return this.f_renderer__org_gwtproject_cell_client_AbstractSafeHtmlCell_;
 }
 /** @override */
 m_render__org_gwtproject_cell_client_Cell_Context__java_lang_Object__org_gwtproject_safehtml_shared_SafeHtmlBuilder(/** Context */ context, /** C */ data, /** SafeHtmlBuilder */ sb) {
  if ($Equality.$same(data, null)) {
   this.m_render__org_gwtproject_cell_client_Cell_Context__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_safehtml_shared_SafeHtmlBuilder(context, /**@type {SafeHtml}*/ (null), sb);
  } else {
   this.m_render__org_gwtproject_cell_client_Cell_Context__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_safehtml_shared_SafeHtmlBuilder(context, this.f_renderer__org_gwtproject_cell_client_AbstractSafeHtmlCell_.m_render__java_lang_Object(data), sb);
  }
 }
 /** @abstract */
 m_render__org_gwtproject_cell_client_Cell_Context__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_safehtml_shared_SafeHtmlBuilder(/** Context */ context, /** SafeHtml */ data, /** SafeHtmlBuilder */ sb) {}
 
 static $clinit() {
  AbstractSafeHtmlCell.$clinit = () =>{};
  AbstractSafeHtmlCell.$loadModules();
  AbstractCell.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractSafeHtmlCell;
 }
 
 static $loadModules() {
  IllegalArgumentException = goog.module.get('java.lang.IllegalArgumentException$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(AbstractSafeHtmlCell, 'org.gwtproject.cell.client.AbstractSafeHtmlCell');

exports = AbstractSafeHtmlCell; 
//# sourceMappingURL=AbstractSafeHtmlCell.js.map