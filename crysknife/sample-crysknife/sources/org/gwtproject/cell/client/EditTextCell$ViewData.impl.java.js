goog.module('org.gwtproject.cell.client.EditTextCell.ViewData$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Boolean = goog.forwardDeclare('java.lang.Boolean$impl');
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
  /** @public {boolean} */
  this.f_isEditing__org_gwtproject_cell_client_EditTextCell_ViewData_ = false;
  /** @public {boolean} */
  this.f_isEditingAgain__org_gwtproject_cell_client_EditTextCell_ViewData_ = false;
  /** @public {?string} */
  this.f_original__org_gwtproject_cell_client_EditTextCell_ViewData_;
  /** @public {?string} */
  this.f_text__org_gwtproject_cell_client_EditTextCell_ViewData_;
 }
 /**
  * @param {?string} text
  * @return {!ViewData}
  * @public
  */
 static $create__java_lang_String(text) {
  ViewData.$clinit();
  let $instance = new ViewData();
  $instance.$ctor__org_gwtproject_cell_client_EditTextCell_ViewData__java_lang_String(text);
  return $instance;
 }
 /**
  * @param {?string} text
  * @public
  */
 $ctor__org_gwtproject_cell_client_EditTextCell_ViewData__java_lang_String(text) {
  this.$ctor__java_lang_Object__();
  this.f_original__org_gwtproject_cell_client_EditTextCell_ViewData_ = text;
  this.f_text__org_gwtproject_cell_client_EditTextCell_ViewData_ = text;
  this.f_isEditing__org_gwtproject_cell_client_EditTextCell_ViewData_ = true;
  this.f_isEditingAgain__org_gwtproject_cell_client_EditTextCell_ViewData_ = false;
 }
 /**
  * @override
  * @param {*} o
  * @return {boolean}
  * @public
  */
 equals(o) {
  if ($Equality.$same(o, null)) {
   return false;
  }
  let vd = /**@type {ViewData} */ ($Casts.$to(o, ViewData));
  return this.m_equalsOrBothNull__java_lang_Object__java_lang_Object_$p_org_gwtproject_cell_client_EditTextCell_ViewData(this.f_original__org_gwtproject_cell_client_EditTextCell_ViewData_, vd.f_original__org_gwtproject_cell_client_EditTextCell_ViewData_) && this.m_equalsOrBothNull__java_lang_Object__java_lang_Object_$p_org_gwtproject_cell_client_EditTextCell_ViewData(this.f_text__org_gwtproject_cell_client_EditTextCell_ViewData_, vd.f_text__org_gwtproject_cell_client_EditTextCell_ViewData_) && this.f_isEditing__org_gwtproject_cell_client_EditTextCell_ViewData_ == vd.f_isEditing__org_gwtproject_cell_client_EditTextCell_ViewData_ && this.f_isEditingAgain__org_gwtproject_cell_client_EditTextCell_ViewData_ == vd.f_isEditingAgain__org_gwtproject_cell_client_EditTextCell_ViewData_;
 }
 /**
  * @return {?string}
  * @public
  */
 m_getOriginal__() {
  return this.f_original__org_gwtproject_cell_client_EditTextCell_ViewData_;
 }
 /**
  * @return {?string}
  * @public
  */
 m_getText__() {
  return this.f_text__org_gwtproject_cell_client_EditTextCell_ViewData_;
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 hashCode() {
  return j_l_String.m_hashCode__java_lang_String(this.f_original__org_gwtproject_cell_client_EditTextCell_ViewData_) + j_l_String.m_hashCode__java_lang_String(this.f_text__org_gwtproject_cell_client_EditTextCell_ViewData_) + Boolean.m_hashCode__java_lang_Boolean(Boolean.m_valueOf__boolean(this.f_isEditing__org_gwtproject_cell_client_EditTextCell_ViewData_)) * 29 + Boolean.m_hashCode__java_lang_Boolean(Boolean.m_valueOf__boolean(this.f_isEditingAgain__org_gwtproject_cell_client_EditTextCell_ViewData_));
 }
 /**
  * @return {boolean}
  * @public
  */
 m_isEditing__() {
  return this.f_isEditing__org_gwtproject_cell_client_EditTextCell_ViewData_;
 }
 /**
  * @return {boolean}
  * @public
  */
 m_isEditingAgain__() {
  return this.f_isEditingAgain__org_gwtproject_cell_client_EditTextCell_ViewData_;
 }
 /**
  * @param {boolean} isEditing
  * @public
  */
 m_setEditing__boolean(isEditing) {
  let wasEditing = this.f_isEditing__org_gwtproject_cell_client_EditTextCell_ViewData_;
  this.f_isEditing__org_gwtproject_cell_client_EditTextCell_ViewData_ = isEditing;
  if (!wasEditing && isEditing) {
   this.f_isEditingAgain__org_gwtproject_cell_client_EditTextCell_ViewData_ = true;
   this.f_original__org_gwtproject_cell_client_EditTextCell_ViewData_ = this.f_text__org_gwtproject_cell_client_EditTextCell_ViewData_;
  }
 }
 /**
  * @param {?string} text
  * @public
  */
 m_setText__java_lang_String(text) {
  this.f_text__org_gwtproject_cell_client_EditTextCell_ViewData_ = text;
 }
 /**
  * @param {*} o1
  * @param {*} o2
  * @return {boolean}
  * @public
  */
 m_equalsOrBothNull__java_lang_Object__java_lang_Object_$p_org_gwtproject_cell_client_EditTextCell_ViewData(o1, o2) {
  return $Equality.$same(o1, null) ? $Equality.$same(o2, null) : $Objects.m_equals__java_lang_Object__java_lang_Object(o1, o2);
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
  Boolean = goog.module.get('java.lang.Boolean$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
 
}
$Util.$setClassMetadata(ViewData, 'org.gwtproject.cell.client.EditTextCell$ViewData');

exports = ViewData; 
//# sourceMappingURL=EditTextCell$ViewData.js.map