goog.module('org.gwtproject.cell.client.ButtonCellBase_DefaultAppearance_ResourcesImpl.buttonCellBaseStyleInitializer$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Style = goog.forwardDeclare('org.gwtproject.cell.client.ButtonCellBase.DefaultAppearance.Style$impl');
let ButtonCellBase__DefaultAppearance__ResourcesImpl = goog.forwardDeclare('org.gwtproject.cell.client.ButtonCellBase_DefaultAppearance_ResourcesImpl$impl');

class buttonCellBaseStyleInitializer extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!buttonCellBaseStyleInitializer}
  * @public
  */
 static $create__() {
  let $instance = new buttonCellBaseStyleInitializer();
  $instance.$ctor__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_ResourcesImpl_buttonCellBaseStyleInitializer__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_ResourcesImpl_buttonCellBaseStyleInitializer__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @return {Style}
  * @public
  */
 static m_get__() {
  buttonCellBaseStyleInitializer.$clinit();
  return ButtonCellBase__DefaultAppearance__ResourcesImpl.f_buttonCellBaseStyle__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_ResourcesImpl_;
 }
 /**
  * @public
  */
 static $clinit() {
  buttonCellBaseStyleInitializer.$clinit = () =>{};
  buttonCellBaseStyleInitializer.$loadModules();
  j_l_Object.$clinit();
  ButtonCellBase__DefaultAppearance__ResourcesImpl.f__instance0__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_ResourcesImpl_.m_buttonCellBaseStyleInitializer___$p_org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_ResourcesImpl();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof buttonCellBaseStyleInitializer;
 }
 /**
  * @public
  */
 static $loadModules() {
  ButtonCellBase__DefaultAppearance__ResourcesImpl = goog.module.get('org.gwtproject.cell.client.ButtonCellBase_DefaultAppearance_ResourcesImpl$impl');
 }
 
}
$Util.$setClassMetadata(buttonCellBaseStyleInitializer, 'org.gwtproject.cell.client.ButtonCellBase_DefaultAppearance_ResourcesImpl$buttonCellBaseStyleInitializer');

exports = buttonCellBaseStyleInitializer; 
//# sourceMappingURL=ButtonCellBase_DefaultAppearance_ResourcesImpl$buttonCellBaseStyleInitializer.js.map