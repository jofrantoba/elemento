goog.module('org.gwtproject.dom.client.Element.UserAgentHolder$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');

class UserAgentHolder extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!UserAgentHolder} */
 static $create__() {
  let $instance = new UserAgentHolder();
  $instance.$ctor__org_gwtproject_dom_client_Element_UserAgentHolder__();
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_client_Element_UserAgentHolder__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {boolean} */
 static get f_IS_SAFARI__org_gwtproject_dom_client_Element_UserAgentHolder_() {
  return (UserAgentHolder.$clinit(), UserAgentHolder.$f_IS_SAFARI__org_gwtproject_dom_client_Element_UserAgentHolder_);
 }
 
 static $clinit() {
  UserAgentHolder.$clinit = () =>{};
  UserAgentHolder.$loadModules();
  j_l_Object.$clinit();
  UserAgentHolder.$f_IS_SAFARI__org_gwtproject_dom_client_Element_UserAgentHolder_ = $Equality.$same("safari", $Util.$getDefine("user.agent"));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof UserAgentHolder;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
 }
 
}
$Util.$setClassMetadata(UserAgentHolder, 'org.gwtproject.dom.client.Element$UserAgentHolder');

/**@private {boolean}*/
UserAgentHolder.$f_IS_SAFARI__org_gwtproject_dom_client_Element_UserAgentHolder_ = false;

/* NATIVE.JS EPILOG */

const org_gwtproject_dom_client_Element_UserAgentHolder = UserAgentHolder;

// ensure that user.agent defines are included
/** @suppress {extraRequire} */
const useragent = goog.require('user');

exports = UserAgentHolder; 
//# sourceMappingURL=Element$UserAgentHolder.js.map