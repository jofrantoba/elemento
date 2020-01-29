goog.module('org.gwtproject.cell.client.SafeImageCell$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractCell = goog.require('org.gwtproject.cell.client.AbstractCell$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Context = goog.forwardDeclare('org.gwtproject.cell.client.Cell.Context$impl');
let Template = goog.forwardDeclare('org.gwtproject.cell.client.SafeImageCell.Template$impl');
let SafeHtmlBuilder = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlBuilder$impl');
let SafeUri = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeUri$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {AbstractCell<SafeUri>}
  */
class SafeImageCell extends AbstractCell {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!SafeImageCell}
  * @public
  */
 static $create__() {
  SafeImageCell.$clinit();
  let $instance = new SafeImageCell();
  $instance.$ctor__org_gwtproject_cell_client_SafeImageCell__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_cell_client_SafeImageCell__() {
  this.$ctor__org_gwtproject_cell_client_AbstractCell__arrayOf_java_lang_String(/**@type {!Array<?string>} */ ($Arrays.$init([], j_l_String)));
 }
 /**
  * @param {Context} context
  * @param {SafeUri} value
  * @param {SafeHtmlBuilder} sb
  * @public
  */
 m_render__org_gwtproject_cell_client_Cell_Context__org_gwtproject_safehtml_shared_SafeUri__org_gwtproject_safehtml_shared_SafeHtmlBuilder(context, value, sb) {
  if (!$Equality.$same(value, null)) {
   sb.m_append__org_gwtproject_safehtml_shared_SafeHtml(Template.f_INSTANCE__org_gwtproject_cell_client_SafeImageCell_Template.m_img__org_gwtproject_safehtml_shared_SafeUri(value));
  }
 }
 /**
  * Bridge method.
  * @override
  * @param {Context} arg0
  * @param {*} arg1
  * @param {SafeHtmlBuilder} arg2
  * @public
  */
 m_render__org_gwtproject_cell_client_Cell_Context__java_lang_Object__org_gwtproject_safehtml_shared_SafeHtmlBuilder(arg0, arg1, arg2) {
  this.m_render__org_gwtproject_cell_client_Cell_Context__org_gwtproject_safehtml_shared_SafeUri__org_gwtproject_safehtml_shared_SafeHtmlBuilder(arg0, /**@type {SafeUri} */ ($Casts.$to(arg1, SafeUri)), arg2);
 }
 /**
  * @public
  */
 static $clinit() {
  SafeImageCell.$clinit = () =>{};
  SafeImageCell.$loadModules();
  AbstractCell.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof SafeImageCell;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Template = goog.module.get('org.gwtproject.cell.client.SafeImageCell.Template$impl');
  SafeUri = goog.module.get('org.gwtproject.safehtml.shared.SafeUri$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(SafeImageCell, 'org.gwtproject.cell.client.SafeImageCell');

exports = SafeImageCell; 
//# sourceMappingURL=SafeImageCell.js.map