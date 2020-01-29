goog.module('org.gwtproject.cell.client.AbstractEditableCell$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractCell = goog.require('org.gwtproject.cell.client.AbstractCell$impl');

let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let Set = goog.forwardDeclare('java.util.Set$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Context = goog.forwardDeclare('org.gwtproject.cell.client.Cell.Context$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');

/**
 * @abstract
 * @template C, V
 * @extends {AbstractCell<C>}
  */
class AbstractEditableCell extends AbstractCell {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {Map<*, V>} */
  this.f_viewDataMap__org_gwtproject_cell_client_AbstractEditableCell_;
 }
 /**
  * Initialization from constructor 'AbstractEditableCell(String...)'.
  * @param {Array<?string>} consumedEvents
  * @public
  */
 $ctor__org_gwtproject_cell_client_AbstractEditableCell__arrayOf_java_lang_String(consumedEvents) {
  this.$ctor__org_gwtproject_cell_client_AbstractCell__arrayOf_java_lang_String(consumedEvents);
  this.$init___$p_org_gwtproject_cell_client_AbstractEditableCell();
 }
 /**
  * Initialization from constructor 'AbstractEditableCell(Set)'.
  * @param {Set<?string>} consumedEvents
  * @public
  */
 $ctor__org_gwtproject_cell_client_AbstractEditableCell__java_util_Set(consumedEvents) {
  this.$ctor__org_gwtproject_cell_client_AbstractCell__java_util_Set(consumedEvents);
  this.$init___$p_org_gwtproject_cell_client_AbstractEditableCell();
 }
 /**
  * @param {*} key
  * @public
  */
 m_clearViewData__java_lang_Object(key) {
  if (!$Equality.$same(key, null)) {
   this.f_viewDataMap__org_gwtproject_cell_client_AbstractEditableCell_.remove(key);
  }
 }
 /**
  * @param {*} key
  * @return {V}
  * @public
  */
 m_getViewData__java_lang_Object(key) {
  return $Equality.$same(key, null) ? null : this.f_viewDataMap__org_gwtproject_cell_client_AbstractEditableCell_.get(key);
 }
 /**
  * @abstract
  * @override
  * @param {Context} context
  * @param {Object} parent
  * @param {C} value
  * @return {boolean}
  * @public
  */
 m_isEditing__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_Object(context, parent, value) {}
 /**
  * @param {*} key
  * @param {V} viewData
  * @public
  */
 m_setViewData__java_lang_Object__java_lang_Object(key, viewData) {
  if ($Equality.$same(key, null)) {
   return;
  }
  if ($Equality.$same(viewData, null)) {
   this.m_clearViewData__java_lang_Object(key);
  } else {
   this.f_viewDataMap__org_gwtproject_cell_client_AbstractEditableCell_.put(key, viewData);
  }
 }
 /**
  * @private
  */
 $init___$p_org_gwtproject_cell_client_AbstractEditableCell() {
  this.f_viewDataMap__org_gwtproject_cell_client_AbstractEditableCell_ = /**@type {!HashMap<*, V>} */ (HashMap.$create__());
 }
 /**
  * @public
  */
 static $clinit() {
  AbstractEditableCell.$clinit = () =>{};
  AbstractEditableCell.$loadModules();
  AbstractCell.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof AbstractEditableCell;
 }
 /**
  * @public
  */
 static $loadModules() {
  HashMap = goog.module.get('java.util.HashMap$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
 }
 
}
$Util.$setClassMetadata(AbstractEditableCell, 'org.gwtproject.cell.client.AbstractEditableCell');

exports = AbstractEditableCell; 
//# sourceMappingURL=AbstractEditableCell.js.map