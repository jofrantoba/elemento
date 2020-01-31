goog.module('org.gwtproject.user.client.ui.SuggestOracle.Request$impl');

const Serializable = goog.require('java.io.Serializable$impl');
const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @implements {Serializable}
  */
class Request extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {number}*/
  this.f_limit__org_gwtproject_user_client_ui_SuggestOracle_Request_ = 0;
  /**@type {?string}*/
  this.f_query__org_gwtproject_user_client_ui_SuggestOracle_Request_;
 }
 //Factory method corresponding to constructor 'Request()'.
 /** @return {!Request} */
 static $create__() {
  Request.$clinit();
  let $instance = new Request();
  $instance.$ctor__org_gwtproject_user_client_ui_SuggestOracle_Request__();
  return $instance;
 }
 //Initialization from constructor 'Request()'.
 
 $ctor__org_gwtproject_user_client_ui_SuggestOracle_Request__() {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_gwtproject_user_client_ui_SuggestOracle_Request();
 }
 //Factory method corresponding to constructor 'Request(String)'.
 /** @return {!Request} */
 static $create__java_lang_String(/** ?string */ query) {
  Request.$clinit();
  let $instance = new Request();
  $instance.$ctor__org_gwtproject_user_client_ui_SuggestOracle_Request__java_lang_String(query);
  return $instance;
 }
 //Initialization from constructor 'Request(String)'.
 
 $ctor__org_gwtproject_user_client_ui_SuggestOracle_Request__java_lang_String(/** ?string */ query) {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_gwtproject_user_client_ui_SuggestOracle_Request();
  this.m_setQuery__java_lang_String(query);
 }
 //Factory method corresponding to constructor 'Request(String, int)'.
 /** @return {!Request} */
 static $create__java_lang_String__int(/** ?string */ query, /** number */ limit) {
  Request.$clinit();
  let $instance = new Request();
  $instance.$ctor__org_gwtproject_user_client_ui_SuggestOracle_Request__java_lang_String__int(query, limit);
  return $instance;
 }
 //Initialization from constructor 'Request(String, int)'.
 
 $ctor__org_gwtproject_user_client_ui_SuggestOracle_Request__java_lang_String__int(/** ?string */ query, /** number */ limit) {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_gwtproject_user_client_ui_SuggestOracle_Request();
  this.m_setQuery__java_lang_String(query);
  this.m_setLimit__int(limit);
 }
 /** @return {number} */
 m_getLimit__() {
  return this.f_limit__org_gwtproject_user_client_ui_SuggestOracle_Request_;
 }
 /** @return {?string} */
 m_getQuery__() {
  return this.f_query__org_gwtproject_user_client_ui_SuggestOracle_Request_;
 }
 
 m_setLimit__int(/** number */ limit) {
  this.f_limit__org_gwtproject_user_client_ui_SuggestOracle_Request_ = limit;
 }
 
 m_setQuery__java_lang_String(/** ?string */ query) {
  this.f_query__org_gwtproject_user_client_ui_SuggestOracle_Request_ = query;
 }
 /** @private */
 $init___$p_org_gwtproject_user_client_ui_SuggestOracle_Request() {
  this.f_limit__org_gwtproject_user_client_ui_SuggestOracle_Request_ = 20;
 }
 
 static $clinit() {
  Request.$clinit = () =>{};
  Request.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Request;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(Request, 'org.gwtproject.user.client.ui.SuggestOracle$Request');

Serializable.$markImplementor(Request);

exports = Request; 
//# sourceMappingURL=SuggestOracle$Request.js.map