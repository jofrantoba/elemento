goog.module('org.gwtproject.user.client.impl.DOMImplWebkit$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DOMImplStandardBase = goog.require('org.gwtproject.user.client.impl.DOMImplStandardBase$impl');

class DOMImplWebkit extends DOMImplStandardBase {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!DOMImplWebkit}
  * @public
  */
 static $create__() {
  DOMImplWebkit.$clinit();
  let $instance = new DOMImplWebkit();
  $instance.$ctor__org_gwtproject_user_client_impl_DOMImplWebkit__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_client_impl_DOMImplWebkit__() {
  this.$ctor__org_gwtproject_user_client_impl_DOMImplStandardBase__();
 }
 /**
  * @public
  */
 static $clinit() {
  DOMImplWebkit.$clinit = () =>{};
  DOMImplWebkit.$loadModules();
  DOMImplStandardBase.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DOMImplWebkit;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DOMImplWebkit, 'org.gwtproject.user.client.impl.DOMImplWebkit');

exports = DOMImplWebkit; 
//# sourceMappingURL=DOMImplWebkit.js.map