goog.module('org.gwtproject.user.client.ui.SuggestOracle.Request$impl');

const Serializable = goog.require('java.io.Serializable$impl');
const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @implements {Serializable}
  */
class Request extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {number} */
  this.f_limit__org_gwtproject_user_client_ui_SuggestOracle_Request_ = 0;
  /** @public {?string} */
  this.f_query__org_gwtproject_user_client_ui_SuggestOracle_Request_;
 }
 /**
  * Factory method corresponding to constructor 'Request()'.
  * @return {!Request}
  * @public
  */
 static $create__() {
  Request.$clinit();
  let $instance = new Request();
  $instance.$ctor__org_gwtproject_user_client_ui_SuggestOracle_Request__();
  return $instance;
 }
 /**
  * Initialization from constructor 'Request()'.
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_SuggestOracle_Request__() {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_gwtproject_user_client_ui_SuggestOracle_Request();
 }
 /**
  * Factory method corresponding to constructor 'Request(String)'.
  * @param {?string} query
  * @return {!Request}
  * @public
  */
 static $create__java_lang_String(query) {
  Request.$clinit();
  let $instance = new Request();
  $instance.$ctor__org_gwtproject_user_client_ui_SuggestOracle_Request__java_lang_String(query);
  return $instance;
 }
 /**
  * Initialization from constructor 'Request(String)'.
  * @param {?string} query
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_SuggestOracle_Request__java_lang_String(query) {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_gwtproject_user_client_ui_SuggestOracle_Request();
  this.m_setQuery__java_lang_String(query);
 }
 /**
  * Factory method corresponding to constructor 'Request(String, int)'.
  * @param {?string} query
  * @param {number} limit
  * @return {!Request}
  * @public
  */
 static $create__java_lang_String__int(query, limit) {
  Request.$clinit();
  let $instance = new Request();
  $instance.$ctor__org_gwtproject_user_client_ui_SuggestOracle_Request__java_lang_String__int(query, limit);
  return $instance;
 }
 /**
  * Initialization from constructor 'Request(String, int)'.
  * @param {?string} query
  * @param {number} limit
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_SuggestOracle_Request__java_lang_String__int(query, limit) {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_gwtproject_user_client_ui_SuggestOracle_Request();
  this.m_setQuery__java_lang_String(query);
  this.m_setLimit__int(limit);
 }
 /**
  * @return {number}
  * @public
  */
 m_getLimit__() {
  return this.f_limit__org_gwtproject_user_client_ui_SuggestOracle_Request_;
 }
 /**
  * @return {?string}
  * @public
  */
 m_getQuery__() {
  return this.f_query__org_gwtproject_user_client_ui_SuggestOracle_Request_;
 }
 /**
  * @param {number} limit
  * @public
  */
 m_setLimit__int(limit) {
  this.f_limit__org_gwtproject_user_client_ui_SuggestOracle_Request_ = limit;
 }
 /**
  * @param {?string} query
  * @public
  */
 m_setQuery__java_lang_String(query) {
  this.f_query__org_gwtproject_user_client_ui_SuggestOracle_Request_ = query;
 }
 /**
  * @private
  */
 $init___$p_org_gwtproject_user_client_ui_SuggestOracle_Request() {
  this.f_limit__org_gwtproject_user_client_ui_SuggestOracle_Request_ = 20;
 }
 /**
  * @public
  */
 static $clinit() {
  Request.$clinit = () =>{};
  Request.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof Request;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(Request, 'org.gwtproject.user.client.ui.SuggestOracle$Request');

Serializable.$markImplementor(Request);

exports = Request; 
//# sourceMappingURL=SuggestOracle$Request.js.map