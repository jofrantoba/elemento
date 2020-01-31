goog.module('org.gwtproject.cell.client.TextCell$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractSafeHtmlCell = goog.require('org.gwtproject.cell.client.AbstractSafeHtmlCell$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Context = goog.forwardDeclare('org.gwtproject.cell.client.Cell.Context$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let SafeHtmlBuilder = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlBuilder$impl');
let SafeHtmlRenderer = goog.forwardDeclare('org.gwtproject.text.shared.SafeHtmlRenderer$impl');
let SimpleSafeHtmlRenderer = goog.forwardDeclare('org.gwtproject.text.shared.SimpleSafeHtmlRenderer$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @extends {AbstractSafeHtmlCell<?string>}
  */
class TextCell extends AbstractSafeHtmlCell {
 /** @protected */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'TextCell()'.
 /** @return {!TextCell} */
 static $create__() {
  TextCell.$clinit();
  let $instance = new TextCell();
  $instance.$ctor__org_gwtproject_cell_client_TextCell__();
  return $instance;
 }
 //Initialization from constructor 'TextCell()'.
 
 $ctor__org_gwtproject_cell_client_TextCell__() {
  this.$ctor__org_gwtproject_cell_client_AbstractSafeHtmlCell__org_gwtproject_text_shared_SafeHtmlRenderer__arrayOf_java_lang_String(SimpleSafeHtmlRenderer.m_getInstance__(), /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)));
 }
 //Factory method corresponding to constructor 'TextCell(SafeHtmlRenderer)'.
 /** @return {!TextCell} */
 static $create__org_gwtproject_text_shared_SafeHtmlRenderer(/** SafeHtmlRenderer<?string> */ renderer) {
  TextCell.$clinit();
  let $instance = new TextCell();
  $instance.$ctor__org_gwtproject_cell_client_TextCell__org_gwtproject_text_shared_SafeHtmlRenderer(renderer);
  return $instance;
 }
 //Initialization from constructor 'TextCell(SafeHtmlRenderer)'.
 
 $ctor__org_gwtproject_cell_client_TextCell__org_gwtproject_text_shared_SafeHtmlRenderer(/** SafeHtmlRenderer<?string> */ renderer) {
  this.$ctor__org_gwtproject_cell_client_AbstractSafeHtmlCell__org_gwtproject_text_shared_SafeHtmlRenderer__arrayOf_java_lang_String(renderer, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)));
 }
 /** @override */
 m_render__org_gwtproject_cell_client_Cell_Context__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_safehtml_shared_SafeHtmlBuilder(/** Context */ context, /** SafeHtml */ value, /** SafeHtmlBuilder */ sb) {
  if (!$Equality.$same(value, null)) {
   sb.m_append__org_gwtproject_safehtml_shared_SafeHtml(value);
  }
 }
 
 static $clinit() {
  TextCell.$clinit = () =>{};
  TextCell.$loadModules();
  AbstractSafeHtmlCell.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TextCell;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  SimpleSafeHtmlRenderer = goog.module.get('org.gwtproject.text.shared.SimpleSafeHtmlRenderer$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(TextCell, 'org.gwtproject.cell.client.TextCell');

exports = TextCell; 
//# sourceMappingURL=TextCell.js.map