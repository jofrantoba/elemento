goog.module('org.gwtproject.user.client.ui.PrefixTree.Frame$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let PrefixTree = goog.forwardDeclare('org.gwtproject.user.client.ui.PrefixTree$impl');

class Frame extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {List<?string>}*/
  this.f_suffixNames__org_gwtproject_user_client_ui_PrefixTree_Frame;
  /**@type {Map<?string, PrefixTree>}*/
  this.f_subtrees__org_gwtproject_user_client_ui_PrefixTree_Frame;
  /**@type {?string}*/
  this.f_prefix__org_gwtproject_user_client_ui_PrefixTree_Frame;
  /**@type {number}*/
  this.f_index__org_gwtproject_user_client_ui_PrefixTree_Frame = 0;
 }
 /** @return {!Frame} */
 static $create__java_util_List__java_util_Map__java_lang_String__int(/** List<?string> */ suffixes, /** Map<?string, PrefixTree> */ subtrees, /** ?string */ prefix, /** number */ index) {
  Frame.$clinit();
  let $instance = new Frame();
  $instance.$ctor__org_gwtproject_user_client_ui_PrefixTree_Frame__java_util_List__java_util_Map__java_lang_String__int(suffixes, subtrees, prefix, index);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_PrefixTree_Frame__java_util_List__java_util_Map__java_lang_String__int(/** List<?string> */ suffixes, /** Map<?string, PrefixTree> */ subtrees, /** ?string */ prefix, /** number */ index) {
  this.$ctor__java_lang_Object__();
  this.f_subtrees__org_gwtproject_user_client_ui_PrefixTree_Frame = subtrees;
  this.f_suffixNames__org_gwtproject_user_client_ui_PrefixTree_Frame = suffixes;
  this.f_prefix__org_gwtproject_user_client_ui_PrefixTree_Frame = prefix;
  this.f_index__org_gwtproject_user_client_ui_PrefixTree_Frame = index;
 }
 
 static $clinit() {
  Frame.$clinit = () =>{};
  Frame.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Frame;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(Frame, 'org.gwtproject.user.client.ui.PrefixTree$Frame');

exports = Frame; 
//# sourceMappingURL=PrefixTree$Frame.js.map