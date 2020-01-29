goog.module('elemental2.dom.HTMLMenuElementInfo$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class HTMLMenuElementInfo extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!HTMLMenuElementInfo}
  * @public
  */
 static $create__() {
  HTMLMenuElementInfo.$clinit();
  let $instance = new HTMLMenuElementInfo();
  $instance.$ctor__elemental2_dom_HTMLMenuElementInfo__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__elemental2_dom_HTMLMenuElementInfo__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @public
  */
 static $clinit() {
  HTMLMenuElementInfo.$clinit = () =>{};
  HTMLMenuElementInfo.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof HTMLMenuElementInfo;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(HTMLMenuElementInfo, 'elemental2.dom.HTMLMenuElementInfo');

exports = HTMLMenuElementInfo; 
//# sourceMappingURL=HTMLMenuElementInfo.js.map