goog.module('org.gwtproject.user.client.ui.MenuBar.$2$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const BlurHandler = goog.require('org.gwtproject.event.dom.client.BlurHandler$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let BlurEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.BlurEvent$impl');
let MenuBar = goog.forwardDeclare('org.gwtproject.user.client.ui.MenuBar$impl');

/**
 * @implements {BlurHandler}
  */
class $2 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {MenuBar}*/
  this.f_$outer_this__org_gwtproject_user_client_ui_MenuBar_2;
 }
 /** @return {!$2} */
 static $create__org_gwtproject_user_client_ui_MenuBar(/** MenuBar */ $outer_this) {
  $2.$clinit();
  let $instance = new $2();
  $instance.$ctor__org_gwtproject_user_client_ui_MenuBar_2__org_gwtproject_user_client_ui_MenuBar($outer_this);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_MenuBar_2__org_gwtproject_user_client_ui_MenuBar(/** MenuBar */ $outer_this) {
  this.f_$outer_this__org_gwtproject_user_client_ui_MenuBar_2 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override */
 m_onBlur__org_gwtproject_event_dom_client_BlurEvent(/** BlurEvent */ event) {
  if ($Equality.$same(this.f_$outer_this__org_gwtproject_user_client_ui_MenuBar_2.f_shownChildMenu__org_gwtproject_user_client_ui_MenuBar_, null)) {
   this.f_$outer_this__org_gwtproject_user_client_ui_MenuBar_2.m_selectItem__org_gwtproject_user_client_ui_MenuItem(null);
  }
 }
 
 static $clinit() {
  $2.$clinit = () =>{};
  $2.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $2;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
 }
 
}
$Util.$setClassMetadata($2, 'org.gwtproject.user.client.ui.MenuBar$2');

BlurHandler.$markImplementor($2);

exports = $2; 
//# sourceMappingURL=MenuBar$2.js.map