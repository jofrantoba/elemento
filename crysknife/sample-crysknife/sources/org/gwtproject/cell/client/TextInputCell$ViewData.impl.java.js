goog.module('org.gwtproject.cell.client.TextInputCell.ViewData$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

class ViewData extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {?string} */
  this.f_lastValue__org_gwtproject_cell_client_TextInputCell_ViewData_;
  /** @public {?string} */
  this.f_curValue__org_gwtproject_cell_client_TextInputCell_ViewData_;
 }
 /**
  * @param {?string} value
  * @return {!ViewData}
  * @public
  */
 static $create__java_lang_String(value) {
  ViewData.$clinit();
  let $instance = new ViewData();
  $instance.$ctor__org_gwtproject_cell_client_TextInputCell_ViewData__java_lang_String(value);
  return $instance;
 }
 /**
  * @param {?string} value
  * @public
  */
 $ctor__org_gwtproject_cell_client_TextInputCell_ViewData__java_lang_String(value) {
  this.$ctor__java_lang_Object__();
  this.f_lastValue__org_gwtproject_cell_client_TextInputCell_ViewData_ = value;
  this.f_curValue__org_gwtproject_cell_client_TextInputCell_ViewData_ = value;
 }
 /**
  * @override
  * @param {*} other
  * @return {boolean}
  * @public
  */
 equals(other) {
  if (!ViewData.$isInstance(other)) {
   return false;
  }
  let vd = /**@type {ViewData} */ ($Casts.$to(other, ViewData));
  return this.m_equalsOrNull__java_lang_Object__java_lang_Object_$p_org_gwtproject_cell_client_TextInputCell_ViewData(this.f_lastValue__org_gwtproject_cell_client_TextInputCell_ViewData_, vd.f_lastValue__org_gwtproject_cell_client_TextInputCell_ViewData_) && this.m_equalsOrNull__java_lang_Object__java_lang_Object_$p_org_gwtproject_cell_client_TextInputCell_ViewData(this.f_curValue__org_gwtproject_cell_client_TextInputCell_ViewData_, vd.f_curValue__org_gwtproject_cell_client_TextInputCell_ViewData_);
 }
 /**
  * @return {?string}
  * @public
  */
 m_getCurrentValue__() {
  return this.f_curValue__org_gwtproject_cell_client_TextInputCell_ViewData_;
 }
 /**
  * @return {?string}
  * @public
  */
 m_getLastValue__() {
  return this.f_lastValue__org_gwtproject_cell_client_TextInputCell_ViewData_;
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 hashCode() {
  return j_l_String.m_hashCode__java_lang_String((j_l_String.m_valueOf__java_lang_Object(this.f_lastValue__org_gwtproject_cell_client_TextInputCell_ViewData_) + "_*!@HASH_SEPARATOR@!*_" + j_l_String.m_valueOf__java_lang_Object(this.f_curValue__org_gwtproject_cell_client_TextInputCell_ViewData_)));
 }
 /**
  * @param {?string} curValue
  * @public
  */
 m_setCurrentValue__java_lang_String(curValue) {
  this.f_curValue__org_gwtproject_cell_client_TextInputCell_ViewData_ = curValue;
 }
 /**
  * @param {?string} lastValue
  * @public
  */
 m_setLastValue__java_lang_String(lastValue) {
  this.f_lastValue__org_gwtproject_cell_client_TextInputCell_ViewData_ = lastValue;
 }
 /**
  * @param {*} a
  * @param {*} b
  * @return {boolean}
  * @public
  */
 m_equalsOrNull__java_lang_Object__java_lang_Object_$p_org_gwtproject_cell_client_TextInputCell_ViewData(a, b) {
  return (!$Equality.$same(a, null)) ? $Objects.m_equals__java_lang_Object__java_lang_Object(a, b) : ($Equality.$same(b, null) ? true : false);
 }
 /**
  * @public
  */
 static $clinit() {
  ViewData.$clinit = () =>{};
  ViewData.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof ViewData;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
 
}
$Util.$setClassMetadata(ViewData, 'org.gwtproject.cell.client.TextInputCell$ViewData');

exports = ViewData; 
//# sourceMappingURL=TextInputCell$ViewData.js.map