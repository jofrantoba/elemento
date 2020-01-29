goog.module('org.gwtproject.user.client.impl.ElementMapperImpl.FreeNode$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class FreeNode extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {number} */
  this.f_index__org_gwtproject_user_client_impl_ElementMapperImpl_FreeNode = 0;
  /** @public {FreeNode} */
  this.f_next__org_gwtproject_user_client_impl_ElementMapperImpl_FreeNode;
 }
 /**
  * @param {number} index
  * @param {FreeNode} next
  * @return {!FreeNode}
  * @public
  */
 static $create__int__org_gwtproject_user_client_impl_ElementMapperImpl_FreeNode(index, next) {
  FreeNode.$clinit();
  let $instance = new FreeNode();
  $instance.$ctor__org_gwtproject_user_client_impl_ElementMapperImpl_FreeNode__int__org_gwtproject_user_client_impl_ElementMapperImpl_FreeNode(index, next);
  return $instance;
 }
 /**
  * @param {number} index
  * @param {FreeNode} next
  * @public
  */
 $ctor__org_gwtproject_user_client_impl_ElementMapperImpl_FreeNode__int__org_gwtproject_user_client_impl_ElementMapperImpl_FreeNode(index, next) {
  this.$ctor__java_lang_Object__();
  this.f_index__org_gwtproject_user_client_impl_ElementMapperImpl_FreeNode = index;
  this.f_next__org_gwtproject_user_client_impl_ElementMapperImpl_FreeNode = next;
 }
 /**
  * @public
  */
 static $clinit() {
  FreeNode.$clinit = () =>{};
  FreeNode.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof FreeNode;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(FreeNode, 'org.gwtproject.user.client.impl.ElementMapperImpl$FreeNode');

exports = FreeNode; 
//# sourceMappingURL=ElementMapperImpl$FreeNode.js.map