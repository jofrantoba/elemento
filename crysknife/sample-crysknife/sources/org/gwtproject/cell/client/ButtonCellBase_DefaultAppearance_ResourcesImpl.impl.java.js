goog.module('org.gwtproject.cell.client.ButtonCellBase_DefaultAppearance_ResourcesImpl$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Resources = goog.require('org.gwtproject.cell.client.ButtonCellBase.DefaultAppearance.Resources$impl');

let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Style = goog.forwardDeclare('org.gwtproject.cell.client.ButtonCellBase.DefaultAppearance.Style$impl');
let $1 = goog.forwardDeclare('org.gwtproject.cell.client.ButtonCellBase_DefaultAppearance_ResourcesImpl.$1$impl');
let buttonCellBaseBackgroundInitializer = goog.forwardDeclare('org.gwtproject.cell.client.ButtonCellBase_DefaultAppearance_ResourcesImpl.buttonCellBaseBackgroundInitializer$impl');
let buttonCellBaseStyleInitializer = goog.forwardDeclare('org.gwtproject.cell.client.ButtonCellBase_DefaultAppearance_ResourcesImpl.buttonCellBaseStyleInitializer$impl');
let ImageResource = goog.forwardDeclare('org.gwtproject.resources.client.ImageResource$impl');
let ResourcePrototype = goog.forwardDeclare('org.gwtproject.resources.client.ResourcePrototype$impl');
let ImageResourcePrototype = goog.forwardDeclare('org.gwtproject.resources.client.impl.ImageResourcePrototype$impl');
let UriUtils = goog.forwardDeclare('org.gwtproject.safehtml.shared.UriUtils$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {Resources}
  */
class ButtonCellBase__DefaultAppearance__ResourcesImpl extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!ButtonCellBase__DefaultAppearance__ResourcesImpl} */
 static $create__() {
  ButtonCellBase__DefaultAppearance__ResourcesImpl.$clinit();
  let $instance = new ButtonCellBase__DefaultAppearance__ResourcesImpl();
  $instance.$ctor__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_ResourcesImpl__();
  return $instance;
 }
 
 $ctor__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_ResourcesImpl__() {
  this.$ctor__java_lang_Object__();
 }
 
 m_buttonCellBaseBackgroundInitializer___$p_org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_ResourcesImpl() {
  ButtonCellBase__DefaultAppearance__ResourcesImpl.$f_buttonCellBaseBackground__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_ResourcesImpl_ = ImageResourcePrototype.$create__java_lang_String__org_gwtproject_safehtml_shared_SafeUri__int__int__int__int__boolean__boolean("buttonCellBaseBackground", UriUtils.m_fromTrustedString__java_lang_String(ButtonCellBase__DefaultAppearance__ResourcesImpl.f_externalImage__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_ResourcesImpl_), 0, 0, 32, 31, false, false);
 }
 /** @override @return {ImageResource} */
 m_buttonCellBaseBackground__() {
  return buttonCellBaseBackgroundInitializer.m_get__();
 }
 
 m_buttonCellBaseStyleInitializer___$p_org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_ResourcesImpl() {
  ButtonCellBase__DefaultAppearance__ResourcesImpl.$f_buttonCellBaseStyle__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_ResourcesImpl_ = $1.$create__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_ResourcesImpl(this);
 }
 /** @override @return {Style} */
 m_buttonCellBaseStyle__() {
  return buttonCellBaseStyleInitializer.m_get__();
 }
 /** @return {Array<ResourcePrototype>} */
 m_getResources__() {
  return /**@type {!Array<ResourcePrototype>}*/ ($Arrays.$init([this.m_buttonCellBaseBackground__(), this.m_buttonCellBaseStyle__()], ResourcePrototype));
 }
 /** @return {ResourcePrototype} */
 m_getResource__java_lang_String(/** ?string */ name) {
  if ($Equality.$same(ButtonCellBase__DefaultAppearance__ResourcesImpl.f_resourceMap__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_ResourcesImpl_, null)) {
   ButtonCellBase__DefaultAppearance__ResourcesImpl.f_resourceMap__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_ResourcesImpl_ = /**@type {!HashMap<?string, ResourcePrototype>}*/ (HashMap.$create__());
   ButtonCellBase__DefaultAppearance__ResourcesImpl.f_resourceMap__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_ResourcesImpl_.put("buttonCellBaseBackground", this.m_buttonCellBaseBackground__());
   ButtonCellBase__DefaultAppearance__ResourcesImpl.f_resourceMap__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_ResourcesImpl_.put("buttonCellBaseStyle", this.m_buttonCellBaseStyle__());
  }
  return /**@type {ResourcePrototype}*/ ($Casts.$to(ButtonCellBase__DefaultAppearance__ResourcesImpl.f_resourceMap__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_ResourcesImpl_.get(name), ResourcePrototype));
 }
 /** @return {ButtonCellBase__DefaultAppearance__ResourcesImpl} */
 static get f__instance0__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_ResourcesImpl_() {
  return (ButtonCellBase__DefaultAppearance__ResourcesImpl.$clinit(), ButtonCellBase__DefaultAppearance__ResourcesImpl.$f__instance0__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_ResourcesImpl_);
 }
 
 static set f__instance0__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_ResourcesImpl_(/** ButtonCellBase__DefaultAppearance__ResourcesImpl */ value) {
  (ButtonCellBase__DefaultAppearance__ResourcesImpl.$clinit(), ButtonCellBase__DefaultAppearance__ResourcesImpl.$f__instance0__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_ResourcesImpl_ = value);
 }
 /** @return {ImageResource} */
 static get f_buttonCellBaseBackground__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_ResourcesImpl_() {
  return (ButtonCellBase__DefaultAppearance__ResourcesImpl.$clinit(), ButtonCellBase__DefaultAppearance__ResourcesImpl.$f_buttonCellBaseBackground__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_ResourcesImpl_);
 }
 
 static set f_buttonCellBaseBackground__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_ResourcesImpl_(/** ImageResource */ value) {
  (ButtonCellBase__DefaultAppearance__ResourcesImpl.$clinit(), ButtonCellBase__DefaultAppearance__ResourcesImpl.$f_buttonCellBaseBackground__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_ResourcesImpl_ = value);
 }
 /** @return {Style} */
 static get f_buttonCellBaseStyle__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_ResourcesImpl_() {
  return (ButtonCellBase__DefaultAppearance__ResourcesImpl.$clinit(), ButtonCellBase__DefaultAppearance__ResourcesImpl.$f_buttonCellBaseStyle__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_ResourcesImpl_);
 }
 
 static set f_buttonCellBaseStyle__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_ResourcesImpl_(/** Style */ value) {
  (ButtonCellBase__DefaultAppearance__ResourcesImpl.$clinit(), ButtonCellBase__DefaultAppearance__ResourcesImpl.$f_buttonCellBaseStyle__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_ResourcesImpl_ = value);
 }
 
 static $clinit() {
  ButtonCellBase__DefaultAppearance__ResourcesImpl.$clinit = () =>{};
  ButtonCellBase__DefaultAppearance__ResourcesImpl.$loadModules();
  j_l_Object.$clinit();
  ButtonCellBase__DefaultAppearance__ResourcesImpl.$f__instance0__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_ResourcesImpl_ = ButtonCellBase__DefaultAppearance__ResourcesImpl.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ButtonCellBase__DefaultAppearance__ResourcesImpl;
 }
 
 static $loadModules() {
  HashMap = goog.module.get('java.util.HashMap$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $1 = goog.module.get('org.gwtproject.cell.client.ButtonCellBase_DefaultAppearance_ResourcesImpl.$1$impl');
  buttonCellBaseBackgroundInitializer = goog.module.get('org.gwtproject.cell.client.ButtonCellBase_DefaultAppearance_ResourcesImpl.buttonCellBaseBackgroundInitializer$impl');
  buttonCellBaseStyleInitializer = goog.module.get('org.gwtproject.cell.client.ButtonCellBase_DefaultAppearance_ResourcesImpl.buttonCellBaseStyleInitializer$impl');
  ResourcePrototype = goog.module.get('org.gwtproject.resources.client.ResourcePrototype$impl');
  ImageResourcePrototype = goog.module.get('org.gwtproject.resources.client.impl.ImageResourcePrototype$impl');
  UriUtils = goog.module.get('org.gwtproject.safehtml.shared.UriUtils$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(ButtonCellBase__DefaultAppearance__ResourcesImpl, 'org.gwtproject.cell.client.ButtonCellBase_DefaultAppearance_ResourcesImpl');

Resources.$markImplementor(ButtonCellBase__DefaultAppearance__ResourcesImpl);

/**@private {ButtonCellBase__DefaultAppearance__ResourcesImpl}*/
ButtonCellBase__DefaultAppearance__ResourcesImpl.$f__instance0__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_ResourcesImpl_;
/**@type {HashMap<?string, ResourcePrototype>}*/
ButtonCellBase__DefaultAppearance__ResourcesImpl.f_resourceMap__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_ResourcesImpl_;
/**@const {?string}*/
ButtonCellBase__DefaultAppearance__ResourcesImpl.f_externalImage__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_ResourcesImpl_ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAfCAYAAACGVs+MAAAAL0lEQVR4Xu3OMQ0AAAzDsPJnWwQbjD6OlN+5cWl7ywEAAAAAAAAAAAAAAAAA5oAHQZjT07gbmRUAAAAASUVORK5CYII=";
/**@private {ImageResource}*/
ButtonCellBase__DefaultAppearance__ResourcesImpl.$f_buttonCellBaseBackground__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_ResourcesImpl_;
/**@private {Style}*/
ButtonCellBase__DefaultAppearance__ResourcesImpl.$f_buttonCellBaseStyle__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_ResourcesImpl_;

exports = ButtonCellBase__DefaultAppearance__ResourcesImpl; 
//# sourceMappingURL=ButtonCellBase_DefaultAppearance_ResourcesImpl.js.map