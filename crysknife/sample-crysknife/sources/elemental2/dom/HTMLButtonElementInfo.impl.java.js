goog.module('elemental2.dom.HTMLButtonElementInfo$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class HTMLButtonElementInfo extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!HTMLButtonElementInfo}
  * @public
  */
 static $create__() {
  HTMLButtonElementInfo.$clinit();
  let $instance = new HTMLButtonElementInfo();
  $instance.$ctor__elemental2_dom_HTMLButtonElementInfo__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__elemental2_dom_HTMLButtonElementInfo__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @public
  */
 static $clinit() {
  HTMLButtonElementInfo.$clinit = () =>{};
  HTMLButtonElementInfo.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof HTMLButtonElementInfo;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(HTMLButtonElementInfo, 'elemental2.dom.HTMLButtonElementInfo');

exports = HTMLButtonElementInfo; 
//# sourceMappingURL=HTMLButtonElementInfo.js.map