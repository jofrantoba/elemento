goog.module('org.gwtproject.cell.client.Cell.Context$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class Context extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {number}*/
  this.f_column__org_gwtproject_cell_client_Cell_Context_ = 0;
  /**@type {number}*/
  this.f_index__org_gwtproject_cell_client_Cell_Context_ = 0;
  /**@type {*}*/
  this.f_key__org_gwtproject_cell_client_Cell_Context_;
  /**@type {number}*/
  this.f_subindex__org_gwtproject_cell_client_Cell_Context_ = 0;
 }
 //Factory method corresponding to constructor 'Context(int, int, Object)'.
 /** @return {!Context} */
 static $create__int__int__java_lang_Object(/** number */ index, /** number */ column, /** * */ key) {
  Context.$clinit();
  let $instance = new Context();
  $instance.$ctor__org_gwtproject_cell_client_Cell_Context__int__int__java_lang_Object(index, column, key);
  return $instance;
 }
 //Initialization from constructor 'Context(int, int, Object)'.
 
 $ctor__org_gwtproject_cell_client_Cell_Context__int__int__java_lang_Object(/** number */ index, /** number */ column, /** * */ key) {
  this.$ctor__org_gwtproject_cell_client_Cell_Context__int__int__java_lang_Object__int(index, column, key, 0);
 }
 //Factory method corresponding to constructor 'Context(int, int, Object, int)'.
 /** @return {!Context} */
 static $create__int__int__java_lang_Object__int(/** number */ index, /** number */ column, /** * */ key, /** number */ subindex) {
  Context.$clinit();
  let $instance = new Context();
  $instance.$ctor__org_gwtproject_cell_client_Cell_Context__int__int__java_lang_Object__int(index, column, key, subindex);
  return $instance;
 }
 //Initialization from constructor 'Context(int, int, Object, int)'.
 
 $ctor__org_gwtproject_cell_client_Cell_Context__int__int__java_lang_Object__int(/** number */ index, /** number */ column, /** * */ key, /** number */ subindex) {
  this.$ctor__java_lang_Object__();
  this.f_index__org_gwtproject_cell_client_Cell_Context_ = index;
  this.f_column__org_gwtproject_cell_client_Cell_Context_ = column;
  this.f_key__org_gwtproject_cell_client_Cell_Context_ = key;
  this.f_subindex__org_gwtproject_cell_client_Cell_Context_ = subindex;
 }
 /** @return {number} */
 m_getColumn__() {
  return this.f_column__org_gwtproject_cell_client_Cell_Context_;
 }
 /** @return {number} */
 m_getIndex__() {
  return this.f_index__org_gwtproject_cell_client_Cell_Context_;
 }
 /** @return {*} */
 m_getKey__() {
  return this.f_key__org_gwtproject_cell_client_Cell_Context_;
 }
 /** @return {number} */
 m_getSubIndex__() {
  return this.f_subindex__org_gwtproject_cell_client_Cell_Context_;
 }
 
 static $clinit() {
  Context.$clinit = () =>{};
  Context.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Context;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(Context, 'org.gwtproject.cell.client.Cell$Context');

exports = Context; 
//# sourceMappingURL=Cell$Context.js.map