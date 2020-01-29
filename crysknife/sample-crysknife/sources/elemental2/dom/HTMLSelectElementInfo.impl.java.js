goog.module('elemental2.dom.HTMLSelectElementInfo$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class HTMLSelectElementInfo extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!HTMLSelectElementInfo}
  * @public
  */
 static $create__() {
  HTMLSelectElementInfo.$clinit();
  let $instance = new HTMLSelectElementInfo();
  $instance.$ctor__elemental2_dom_HTMLSelectElementInfo__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__elemental2_dom_HTMLSelectElementInfo__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @public
  */
 static $clinit() {
  HTMLSelectElementInfo.$clinit = () =>{};
  HTMLSelectElementInfo.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof HTMLSelectElementInfo;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(HTMLSelectElementInfo, 'elemental2.dom.HTMLSelectElementInfo');

exports = HTMLSelectElementInfo; 
//# sourceMappingURL=HTMLSelectElementInfo.js.map