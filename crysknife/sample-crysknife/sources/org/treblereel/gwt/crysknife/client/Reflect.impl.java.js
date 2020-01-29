goog.module('org.treblereel.gwt.crysknife.client.Reflect$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let reflect = goog.forwardDeclare('goog.reflect');

class Reflect extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!Reflect}
  * @public
  */
 static $create__() {
  Reflect.$clinit();
  let $instance = new Reflect();
  $instance.$ctor__org_treblereel_gwt_crysknife_client_Reflect__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_treblereel_gwt_crysknife_client_Reflect__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @public
  */
 static $clinit() {
  Reflect.$clinit = () =>{};
  Reflect.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof Reflect;
 }
 /**
  * @public
  */
 static $loadModules() {
  reflect = goog.module.get('goog.reflect');
 }
 
}
$Util.$setClassMetadata(Reflect, 'org.treblereel.gwt.crysknife.client.Reflect');

exports = Reflect; 
//# sourceMappingURL=Reflect.js.map