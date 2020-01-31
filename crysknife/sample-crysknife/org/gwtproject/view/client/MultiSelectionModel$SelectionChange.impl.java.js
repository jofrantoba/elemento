goog.module('org.gwtproject.view.client.MultiSelectionModel.SelectionChange$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @template T
  */
class SelectionChange extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {T}*/
  this.f_item__org_gwtproject_view_client_MultiSelectionModel_SelectionChange_;
  /**@type {boolean}*/
  this.f_isSelected__org_gwtproject_view_client_MultiSelectionModel_SelectionChange_ = false;
 }
 /** @template T @return {!SelectionChange<T>} */
 static $create__java_lang_Object__boolean(/** T */ item, /** boolean */ isSelected) {
  SelectionChange.$clinit();
  let $instance = new SelectionChange();
  $instance.$ctor__org_gwtproject_view_client_MultiSelectionModel_SelectionChange__java_lang_Object__boolean(item, isSelected);
  return $instance;
 }
 
 $ctor__org_gwtproject_view_client_MultiSelectionModel_SelectionChange__java_lang_Object__boolean(/** T */ item, /** boolean */ isSelected) {
  this.$ctor__java_lang_Object__();
  this.f_item__org_gwtproject_view_client_MultiSelectionModel_SelectionChange_ = item;
  this.f_isSelected__org_gwtproject_view_client_MultiSelectionModel_SelectionChange_ = isSelected;
 }
 /** @return {T} */
 m_getItem__() {
  return this.f_item__org_gwtproject_view_client_MultiSelectionModel_SelectionChange_;
 }
 /** @return {boolean} */
 m_isSelected__() {
  return this.f_isSelected__org_gwtproject_view_client_MultiSelectionModel_SelectionChange_;
 }
 
 static $clinit() {
  SelectionChange.$clinit = () =>{};
  SelectionChange.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SelectionChange;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(SelectionChange, 'org.gwtproject.view.client.MultiSelectionModel$SelectionChange');

exports = SelectionChange; 
//# sourceMappingURL=MultiSelectionModel$SelectionChange.js.map