goog.module('org.gwtproject.user.cellview.client.SimplePager_ImageButtonsConstants_en_US$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ImageButtonsConstants = goog.require('org.gwtproject.user.cellview.client.SimplePager.ImageButtonsConstants$impl');

/**
 * @implements {ImageButtonsConstants}
  */
class SimplePager__ImageButtonsConstants__en__US extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!SimplePager__ImageButtonsConstants__en__US} */
 static $create__() {
  SimplePager__ImageButtonsConstants__en__US.$clinit();
  let $instance = new SimplePager__ImageButtonsConstants__en__US();
  $instance.$ctor__org_gwtproject_user_cellview_client_SimplePager_ImageButtonsConstants_en_US__();
  return $instance;
 }
 
 $ctor__org_gwtproject_user_cellview_client_SimplePager_ImageButtonsConstants_en_US__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {?string} */
 m_fastForward__() {
  return "Fast forward";
 }
 /** @override @return {?string} */
 m_firstPage__() {
  return "First page";
 }
 /** @override @return {?string} */
 m_lastPage__() {
  return "Last page";
 }
 /** @override @return {?string} */
 m_nextPage__() {
  return "Next page";
 }
 /** @override @return {?string} */
 m_prevPage__() {
  return "Previous page";
 }
 
 static $clinit() {
  SimplePager__ImageButtonsConstants__en__US.$clinit = () =>{};
  SimplePager__ImageButtonsConstants__en__US.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SimplePager__ImageButtonsConstants__en__US;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(SimplePager__ImageButtonsConstants__en__US, 'org.gwtproject.user.cellview.client.SimplePager_ImageButtonsConstants_en_US');

ImageButtonsConstants.$markImplementor(SimplePager__ImageButtonsConstants__en__US);

exports = SimplePager__ImageButtonsConstants__en__US; 
//# sourceMappingURL=SimplePager_ImageButtonsConstants_en_US.js.map