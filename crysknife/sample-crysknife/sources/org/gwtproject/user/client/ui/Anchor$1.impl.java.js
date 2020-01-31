goog.module('org.gwtproject.user.client.ui.Anchor.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ClickHandler = goog.require('org.gwtproject.event.dom.client.ClickHandler$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ClickEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.ClickEvent$impl');
let Anchor = goog.forwardDeclare('org.gwtproject.user.client.ui.Anchor$impl');

/**
 * @implements {ClickHandler}
  */
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {Anchor}*/
  this.f_$outer_this__org_gwtproject_user_client_ui_Anchor_1;
 }
 /** @return {!$1} */
 static $create__org_gwtproject_user_client_ui_Anchor(/** Anchor */ $outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_user_client_ui_Anchor_1__org_gwtproject_user_client_ui_Anchor($outer_this);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_Anchor_1__org_gwtproject_user_client_ui_Anchor(/** Anchor */ $outer_this) {
  this.f_$outer_this__org_gwtproject_user_client_ui_Anchor_1 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override */
 m_onClick__org_gwtproject_event_dom_client_ClickEvent(/** ClickEvent */ event) {
  if (j_l_String.m_equals__java_lang_String__java_lang_Object(Anchor.f_DEFAULT_HREF__org_gwtproject_user_client_ui_Anchor_, this.f_$outer_this__org_gwtproject_user_client_ui_Anchor_1.m_getAnchorElement___$p_org_gwtproject_user_client_ui_Anchor().href)) {
   event.m_preventDefault__();
  }
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
  Anchor = goog.module.get('org.gwtproject.user.client.ui.Anchor$impl');
 }
 
}
$Util.$setClassMetadata($1, 'org.gwtproject.user.client.ui.Anchor$1');

ClickHandler.$markImplementor($1);

exports = $1; 
//# sourceMappingURL=Anchor$1.js.map