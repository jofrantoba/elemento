goog.module('org.gwtproject.cell.client.SafeHtmlCell$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractCell = goog.require('org.gwtproject.cell.client.AbstractCell$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Context = goog.forwardDeclare('org.gwtproject.cell.client.Cell.Context$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let SafeHtmlBuilder = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlBuilder$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {AbstractCell<SafeHtml>}
  */
class SafeHtmlCell extends AbstractCell {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!SafeHtmlCell} */
 static $create__() {
  SafeHtmlCell.$clinit();
  let $instance = new SafeHtmlCell();
  $instance.$ctor__org_gwtproject_cell_client_SafeHtmlCell__();
  return $instance;
 }
 
 $ctor__org_gwtproject_cell_client_SafeHtmlCell__() {
  this.$ctor__org_gwtproject_cell_client_AbstractCell__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)));
 }
 
 m_render__org_gwtproject_cell_client_Cell_Context__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_safehtml_shared_SafeHtmlBuilder(/** Context */ context, /** SafeHtml */ value, /** SafeHtmlBuilder */ sb) {
  if (!$Equality.$same(value, null)) {
   sb.m_append__org_gwtproject_safehtml_shared_SafeHtml(value);
  }
 }
 //Bridge method.
 /** @override */
 m_render__org_gwtproject_cell_client_Cell_Context__java_lang_Object__org_gwtproject_safehtml_shared_SafeHtmlBuilder(/** Context */ arg0, /** * */ arg1, /** SafeHtmlBuilder */ arg2) {
  this.m_render__org_gwtproject_cell_client_Cell_Context__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_safehtml_shared_SafeHtmlBuilder(arg0, /**@type {SafeHtml}*/ ($Casts.$to(arg1, SafeHtml)), arg2);
 }
 
 static $clinit() {
  SafeHtmlCell.$clinit = () =>{};
  SafeHtmlCell.$loadModules();
  AbstractCell.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SafeHtmlCell;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  SafeHtml = goog.module.get('org.gwtproject.safehtml.shared.SafeHtml$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(SafeHtmlCell, 'org.gwtproject.cell.client.SafeHtmlCell');

exports = SafeHtmlCell; 
//# sourceMappingURL=SafeHtmlCell.js.map