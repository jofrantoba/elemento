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
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {MenuBar} */
  this.f_$outer_this__org_gwtproject_user_client_ui_MenuBar_2;
 }
 /**
  * @param {MenuBar} $outer_this
  * @return {!$2}
  * @public
  */
 static $create__org_gwtproject_user_client_ui_MenuBar($outer_this) {
  $2.$clinit();
  let $instance = new $2();
  $instance.$ctor__org_gwtproject_user_client_ui_MenuBar_2__org_gwtproject_user_client_ui_MenuBar($outer_this);
  return $instance;
 }
 /**
  * @param {MenuBar} $outer_this
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_MenuBar_2__org_gwtproject_user_client_ui_MenuBar($outer_this) {
  this.f_$outer_this__org_gwtproject_user_client_ui_MenuBar_2 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /**
  * @override
  * @param {BlurEvent} event
  * @public
  */
 m_onBlur__org_gwtproject_event_dom_client_BlurEvent(event) {
  if ($Equality.$same(this.f_$outer_this__org_gwtproject_user_client_ui_MenuBar_2.f_shownChildMenu__org_gwtproject_user_client_ui_MenuBar_, null)) {
   this.f_$outer_this__org_gwtproject_user_client_ui_MenuBar_2.m_selectItem__org_gwtproject_user_client_ui_MenuItem(null);
  }
 }
 /**
  * @public
  */
 static $clinit() {
  $2.$clinit = () =>{};
  $2.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof $2;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
 }
 
}
$Util.$setClassMetadata($2, 'org.gwtproject.user.client.ui.MenuBar$2');

BlurHandler.$markImplementor($2);

exports = $2; 
//# sourceMappingURL=MenuBar$2.js.map