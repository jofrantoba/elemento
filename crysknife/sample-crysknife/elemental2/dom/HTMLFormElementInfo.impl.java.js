goog.module('elemental2.dom.HTMLFormElementInfo$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class HTMLFormElementInfo extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!HTMLFormElementInfo}
  * @public
  */
 static $create__() {
  HTMLFormElementInfo.$clinit();
  let $instance = new HTMLFormElementInfo();
  $instance.$ctor__elemental2_dom_HTMLFormElementInfo__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__elemental2_dom_HTMLFormElementInfo__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @public
  */
 static $clinit() {
  HTMLFormElementInfo.$clinit = () =>{};
  HTMLFormElementInfo.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof HTMLFormElementInfo;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(HTMLFormElementInfo, 'elemental2.dom.HTMLFormElementInfo');

exports = HTMLFormElementInfo; 
//# sourceMappingURL=HTMLFormElementInfo.js.map