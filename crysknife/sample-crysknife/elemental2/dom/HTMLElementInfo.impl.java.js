goog.module('elemental2.dom.HTMLElementInfo$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class HTMLElementInfo extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!HTMLElementInfo}
  * @public
  */
 static $create__() {
  HTMLElementInfo.$clinit();
  let $instance = new HTMLElementInfo();
  $instance.$ctor__elemental2_dom_HTMLElementInfo__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__elemental2_dom_HTMLElementInfo__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @public
  */
 static $clinit() {
  HTMLElementInfo.$clinit = () =>{};
  HTMLElementInfo.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof HTMLElementInfo;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(HTMLElementInfo, 'elemental2.dom.HTMLElementInfo');

exports = HTMLElementInfo; 
//# sourceMappingURL=HTMLElementInfo.js.map