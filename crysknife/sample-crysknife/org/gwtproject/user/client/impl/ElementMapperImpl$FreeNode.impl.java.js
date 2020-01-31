goog.module('org.gwtproject.user.client.impl.ElementMapperImpl.FreeNode$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class FreeNode extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {number}*/
  this.f_index__org_gwtproject_user_client_impl_ElementMapperImpl_FreeNode = 0;
  /**@type {FreeNode}*/
  this.f_next__org_gwtproject_user_client_impl_ElementMapperImpl_FreeNode;
 }
 /** @return {!FreeNode} */
 static $create__int__org_gwtproject_user_client_impl_ElementMapperImpl_FreeNode(/** number */ index, /** FreeNode */ next) {
  FreeNode.$clinit();
  let $instance = new FreeNode();
  $instance.$ctor__org_gwtproject_user_client_impl_ElementMapperImpl_FreeNode__int__org_gwtproject_user_client_impl_ElementMapperImpl_FreeNode(index, next);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_impl_ElementMapperImpl_FreeNode__int__org_gwtproject_user_client_impl_ElementMapperImpl_FreeNode(/** number */ index, /** FreeNode */ next) {
  this.$ctor__java_lang_Object__();
  this.f_index__org_gwtproject_user_client_impl_ElementMapperImpl_FreeNode = index;
  this.f_next__org_gwtproject_user_client_impl_ElementMapperImpl_FreeNode = next;
 }
 
 static $clinit() {
  FreeNode.$clinit = () =>{};
  FreeNode.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof FreeNode;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(FreeNode, 'org.gwtproject.user.client.impl.ElementMapperImpl$FreeNode');

exports = FreeNode; 
//# sourceMappingURL=ElementMapperImpl$FreeNode.js.map