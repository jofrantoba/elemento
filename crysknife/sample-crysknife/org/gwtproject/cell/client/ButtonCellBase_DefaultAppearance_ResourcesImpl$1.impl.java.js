goog.module('org.gwtproject.cell.client.ButtonCellBase_DefaultAppearance_ResourcesImpl.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Style = goog.require('org.gwtproject.cell.client.ButtonCellBase.DefaultAppearance.Style$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ButtonCellBase__DefaultAppearance__ResourcesImpl = goog.forwardDeclare('org.gwtproject.cell.client.ButtonCellBase_DefaultAppearance_ResourcesImpl$impl');
let StyleInjector = goog.forwardDeclare('org.gwtproject.dom.client.StyleInjector$impl');
let LocaleInfo = goog.forwardDeclare('org.gwtproject.i18n.client.LocaleInfo$impl');

/**
 * @implements {Style}
  */
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {ButtonCellBase__DefaultAppearance__ResourcesImpl}*/
  this.f_$outer_this__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_ResourcesImpl_1;
  /**@type {boolean}*/
  this.f_injected__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_ResourcesImpl_1_ = false;
 }
 /** @return {!$1} */
 static $create__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_ResourcesImpl(/** ButtonCellBase__DefaultAppearance__ResourcesImpl */ $outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_ResourcesImpl_1__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_ResourcesImpl($outer_this);
  return $instance;
 }
 
 $ctor__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_ResourcesImpl_1__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_ResourcesImpl(/** ButtonCellBase__DefaultAppearance__ResourcesImpl */ $outer_this) {
  this.f_$outer_this__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_ResourcesImpl_1 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {?string} */
 m_getName__() {
  return "buttonCellBaseStyle";
 }
 /** @override @return {boolean} */
 m_ensureInjected__() {
  if (!this.f_injected__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_ResourcesImpl_1_) {
   this.f_injected__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_ResourcesImpl_1_ = true;
   StyleInjector.m_inject__java_lang_String(this.m_getText__());
   return true;
  }
  return false;
 }
 /** @override @return {?string} */
 m_getText__() {
  return LocaleInfo.m_getCurrentLocale__().m_isRTL__() ? (".MU1SOAB-m-a{overflow:hidden;background:url(" + j_l_String.m_valueOf__java_lang_Object(this.f_$outer_this__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_ResourcesImpl_1.m_buttonCellBaseBackground__().m_getSafeUri__().m_asString__()) + ") " + j_l_String.m_valueOf__java_lang_Object(("-" + this.f_$outer_this__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_ResourcesImpl_1.m_buttonCellBaseBackground__().m_getLeft__() + "px")) + " " + j_l_String.m_valueOf__java_lang_Object(("-" + this.f_$outer_this__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_ResourcesImpl_1.m_buttonCellBaseBackground__().m_getTop__() + "px")) + "  repeat-x;height:auto;background-color:#f1f1f1;margin:0;padding:5px 7px;text-decoration:none;cursor:pointer;cursor:hand;font-size:small;border:1px solid #bbb;border-bottom:1px solid #a0a0a0;border-radius:5px;-moz-border-radius:5px}.MU1SOAB-m-f{background:#666;color:white}.MU1SOAB-m-e{background:#940000;color:white}.MU1SOAB-m-a:hover{border-color:#939393}.MU1SOAB-m-a[disabled]{cursor:default;color:#888}.MU1SOAB-m-a[disabled]:hover{border-color:#bbb #bbb #a0a0a0}.MU1SOAB-m-g{border:1px inset #ccc}.MU1SOAB-m-b{border-top-right-radius:0;border-bottom-right-radius:0;-moz-border-radius-topright:0;-moz-border-radius-bottomright:0}.MU1SOAB-m-c{border-left:none;border-top-left-radius:0;border-bottom-left-radius:0;-moz-border-radius-topleft:0;-moz-border-radius-bottomleft:0}") : (".MU1SOAB-m-a{overflow:hidden;background:url(" + j_l_String.m_valueOf__java_lang_Object(this.f_$outer_this__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_ResourcesImpl_1.m_buttonCellBaseBackground__().m_getSafeUri__().m_asString__()) + ") " + j_l_String.m_valueOf__java_lang_Object(("-" + this.f_$outer_this__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_ResourcesImpl_1.m_buttonCellBaseBackground__().m_getLeft__() + "px")) + " " + j_l_String.m_valueOf__java_lang_Object(("-" + this.f_$outer_this__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_ResourcesImpl_1.m_buttonCellBaseBackground__().m_getTop__() + "px")) + "  repeat-x;height:auto;background-color:#f1f1f1;margin:0;padding:5px 7px;text-decoration:none;cursor:pointer;cursor:hand;font-size:small;border:1px solid #bbb;border-bottom:1px solid #a0a0a0;border-radius:5px;-moz-border-radius:5px}.MU1SOAB-m-f{background:#666;color:white}.MU1SOAB-m-e{background:#940000;color:white}.MU1SOAB-m-a:hover{border-color:#939393}.MU1SOAB-m-a[disabled]{cursor:default;color:#888}.MU1SOAB-m-a[disabled]:hover{border-color:#bbb #bbb #a0a0a0}.MU1SOAB-m-g{border:1px inset #ccc}.MU1SOAB-m-b{border-top-left-radius:0;border-bottom-left-radius:0;-moz-border-radius-topleft:0;-moz-border-radius-bottomleft:0}.MU1SOAB-m-c{border-right:none;border-top-right-radius:0;border-bottom-right-radius:0;-moz-border-radius-topright:0;-moz-border-radius-bottomright:0}");
 }
 /** @override @return {?string} */
 m_buttonCellBase__() {
  return "MU1SOAB-m-a";
 }
 /** @override @return {?string} */
 m_buttonCellBaseCollapseLeft__() {
  return "MU1SOAB-m-b";
 }
 /** @override @return {?string} */
 m_buttonCellBaseCollapseRight__() {
  return "MU1SOAB-m-c";
 }
 /** @override @return {?string} */
 m_buttonCellBaseDefault__() {
  return "MU1SOAB-m-d";
 }
 /** @override @return {?string} */
 m_buttonCellBaseNegative__() {
  return "MU1SOAB-m-e";
 }
 /** @override @return {?string} */
 m_buttonCellBasePrimary__() {
  return "MU1SOAB-m-f";
 }
 /** @override @return {?string} */
 m_buttonCellBasePushing__() {
  return "MU1SOAB-m-g";
 }
 
 static $clinit() {
  $1.$clinit = () =>{};
  $1.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $1;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  StyleInjector = goog.module.get('org.gwtproject.dom.client.StyleInjector$impl');
  LocaleInfo = goog.module.get('org.gwtproject.i18n.client.LocaleInfo$impl');
 }
 
}
$Util.$setClassMetadata($1, 'org.gwtproject.cell.client.ButtonCellBase_DefaultAppearance_ResourcesImpl$1');

Style.$markImplementor($1);

exports = $1; 
//# sourceMappingURL=ButtonCellBase_DefaultAppearance_ResourcesImpl$1.js.map