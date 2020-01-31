goog.module('org.gwtproject.user.client.ui.DockLayoutPanel.LayoutData$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Layer = goog.forwardDeclare('org.gwtproject.layout.client.Layout.Layer$impl');
let Direction = goog.forwardDeclare('org.gwtproject.user.client.ui.DockLayoutPanel.Direction$impl');

class LayoutData extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {Direction}*/
  this.f_direction__org_gwtproject_user_client_ui_DockLayoutPanel_LayoutData;
  /**@type {number}*/
  this.f_oldSize__org_gwtproject_user_client_ui_DockLayoutPanel_LayoutData = 0.0;
  /**@type {number}*/
  this.f_size__org_gwtproject_user_client_ui_DockLayoutPanel_LayoutData = 0.0;
  /**@type {number}*/
  this.f_originalSize__org_gwtproject_user_client_ui_DockLayoutPanel_LayoutData = 0.0;
  /**@type {boolean}*/
  this.f_hidden__org_gwtproject_user_client_ui_DockLayoutPanel_LayoutData = false;
  /**@type {Layer}*/
  this.f_layer__org_gwtproject_user_client_ui_DockLayoutPanel_LayoutData;
 }
 /** @return {!LayoutData} */
 static $create__org_gwtproject_user_client_ui_DockLayoutPanel_Direction__double__org_gwtproject_layout_client_Layout_Layer(/** Direction */ direction, /** number */ size, /** Layer */ layer) {
  LayoutData.$clinit();
  let $instance = new LayoutData();
  $instance.$ctor__org_gwtproject_user_client_ui_DockLayoutPanel_LayoutData__org_gwtproject_user_client_ui_DockLayoutPanel_Direction__double__org_gwtproject_layout_client_Layout_Layer(direction, size, layer);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_DockLayoutPanel_LayoutData__org_gwtproject_user_client_ui_DockLayoutPanel_Direction__double__org_gwtproject_layout_client_Layout_Layer(/** Direction */ direction, /** number */ size, /** Layer */ layer) {
  this.$ctor__java_lang_Object__();
  this.f_direction__org_gwtproject_user_client_ui_DockLayoutPanel_LayoutData = direction;
  this.f_size__org_gwtproject_user_client_ui_DockLayoutPanel_LayoutData = size;
  this.f_layer__org_gwtproject_user_client_ui_DockLayoutPanel_LayoutData = layer;
 }
 
 static $clinit() {
  LayoutData.$clinit = () =>{};
  LayoutData.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LayoutData;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(LayoutData, 'org.gwtproject.user.client.ui.DockLayoutPanel$LayoutData');

exports = LayoutData; 
//# sourceMappingURL=DockLayoutPanel$LayoutData.js.map