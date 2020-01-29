goog.module('org.gwtproject.user.client.ui.PrefixTree.Frame$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let PrefixTree = goog.forwardDeclare('org.gwtproject.user.client.ui.PrefixTree$impl');

class Frame extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {List<?string>} */
  this.f_suffixNames__org_gwtproject_user_client_ui_PrefixTree_Frame;
  /** @public {Map<?string, PrefixTree>} */
  this.f_subtrees__org_gwtproject_user_client_ui_PrefixTree_Frame;
  /** @public {?string} */
  this.f_prefix__org_gwtproject_user_client_ui_PrefixTree_Frame;
  /** @public {number} */
  this.f_index__org_gwtproject_user_client_ui_PrefixTree_Frame = 0;
 }
 /**
  * @param {List<?string>} suffixes
  * @param {Map<?string, PrefixTree>} subtrees
  * @param {?string} prefix
  * @param {number} index
  * @return {!Frame}
  * @public
  */
 static $create__java_util_List__java_util_Map__java_lang_String__int(suffixes, subtrees, prefix, index) {
  Frame.$clinit();
  let $instance = new Frame();
  $instance.$ctor__org_gwtproject_user_client_ui_PrefixTree_Frame__java_util_List__java_util_Map__java_lang_String__int(suffixes, subtrees, prefix, index);
  return $instance;
 }
 /**
  * @param {List<?string>} suffixes
  * @param {Map<?string, PrefixTree>} subtrees
  * @param {?string} prefix
  * @param {number} index
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_PrefixTree_Frame__java_util_List__java_util_Map__java_lang_String__int(suffixes, subtrees, prefix, index) {
  this.$ctor__java_lang_Object__();
  this.f_subtrees__org_gwtproject_user_client_ui_PrefixTree_Frame = subtrees;
  this.f_suffixNames__org_gwtproject_user_client_ui_PrefixTree_Frame = suffixes;
  this.f_prefix__org_gwtproject_user_client_ui_PrefixTree_Frame = prefix;
  this.f_index__org_gwtproject_user_client_ui_PrefixTree_Frame = index;
 }
 /**
  * @public
  */
 static $clinit() {
  Frame.$clinit = () =>{};
  Frame.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof Frame;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(Frame, 'org.gwtproject.user.client.ui.PrefixTree$Frame');

exports = Frame; 
//# sourceMappingURL=PrefixTree$Frame.js.map