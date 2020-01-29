goog.module('org.treblereel.gwt.crysknife.client.BeanManagerInfo$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class BeanManagerInfo extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!BeanManagerInfo}
  * @public
  */
 static $create__() {
  BeanManagerInfo.$clinit();
  let $instance = new BeanManagerInfo();
  $instance.$ctor__org_treblereel_gwt_crysknife_client_BeanManagerInfo__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_treblereel_gwt_crysknife_client_BeanManagerInfo__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @public
  */
 static $clinit() {
  BeanManagerInfo.$clinit = () =>{};
  BeanManagerInfo.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof BeanManagerInfo;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(BeanManagerInfo, 'org.treblereel.gwt.crysknife.client.BeanManagerInfo');

exports = BeanManagerInfo; 
//# sourceMappingURL=BeanManagerInfo.js.map