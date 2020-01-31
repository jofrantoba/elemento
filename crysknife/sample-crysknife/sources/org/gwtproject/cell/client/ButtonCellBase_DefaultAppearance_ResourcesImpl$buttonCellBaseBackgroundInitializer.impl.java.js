goog.module('org.gwtproject.cell.client.ButtonCellBase_DefaultAppearance_ResourcesImpl.buttonCellBaseBackgroundInitializer$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let ButtonCellBase__DefaultAppearance__ResourcesImpl = goog.forwardDeclare('org.gwtproject.cell.client.ButtonCellBase_DefaultAppearance_ResourcesImpl$impl');
let ImageResource = goog.forwardDeclare('org.gwtproject.resources.client.ImageResource$impl');

class buttonCellBaseBackgroundInitializer extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!buttonCellBaseBackgroundInitializer} */
 static $create__() {
  let $instance = new buttonCellBaseBackgroundInitializer();
  $instance.$ctor__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_ResourcesImpl_buttonCellBaseBackgroundInitializer__();
  return $instance;
 }
 
 $ctor__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_ResourcesImpl_buttonCellBaseBackgroundInitializer__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {ImageResource} */
 static m_get__() {
  buttonCellBaseBackgroundInitializer.$clinit();
  return ButtonCellBase__DefaultAppearance__ResourcesImpl.f_buttonCellBaseBackground__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_ResourcesImpl_;
 }
 
 static $clinit() {
  buttonCellBaseBackgroundInitializer.$clinit = () =>{};
  buttonCellBaseBackgroundInitializer.$loadModules();
  j_l_Object.$clinit();
  ButtonCellBase__DefaultAppearance__ResourcesImpl.f__instance0__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_ResourcesImpl_.m_buttonCellBaseBackgroundInitializer___$p_org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_ResourcesImpl();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof buttonCellBaseBackgroundInitializer;
 }
 
 static $loadModules() {
  ButtonCellBase__DefaultAppearance__ResourcesImpl = goog.module.get('org.gwtproject.cell.client.ButtonCellBase_DefaultAppearance_ResourcesImpl$impl');
 }
 
}
$Util.$setClassMetadata(buttonCellBaseBackgroundInitializer, 'org.gwtproject.cell.client.ButtonCellBase_DefaultAppearance_ResourcesImpl$buttonCellBaseBackgroundInitializer');

exports = buttonCellBaseBackgroundInitializer; 
//# sourceMappingURL=ButtonCellBase_DefaultAppearance_ResourcesImpl$buttonCellBaseBackgroundInitializer.js.map