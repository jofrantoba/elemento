goog.module('elemental2.dom.HTMLOutputElementInfo$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class HTMLOutputElementInfo extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!HTMLOutputElementInfo}
  * @public
  */
 static $create__() {
  HTMLOutputElementInfo.$clinit();
  let $instance = new HTMLOutputElementInfo();
  $instance.$ctor__elemental2_dom_HTMLOutputElementInfo__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__elemental2_dom_HTMLOutputElementInfo__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @public
  */
 static $clinit() {
  HTMLOutputElementInfo.$clinit = () =>{};
  HTMLOutputElementInfo.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof HTMLOutputElementInfo;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(HTMLOutputElementInfo, 'elemental2.dom.HTMLOutputElementInfo');

exports = HTMLOutputElementInfo; 
//# sourceMappingURL=HTMLOutputElementInfo.js.map