goog.module('elemental2.dom.HTMLAreaElementInfo$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class HTMLAreaElementInfo extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!HTMLAreaElementInfo}
  * @public
  */
 static $create__() {
  HTMLAreaElementInfo.$clinit();
  let $instance = new HTMLAreaElementInfo();
  $instance.$ctor__elemental2_dom_HTMLAreaElementInfo__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__elemental2_dom_HTMLAreaElementInfo__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @public
  */
 static $clinit() {
  HTMLAreaElementInfo.$clinit = () =>{};
  HTMLAreaElementInfo.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof HTMLAreaElementInfo;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(HTMLAreaElementInfo, 'elemental2.dom.HTMLAreaElementInfo');

exports = HTMLAreaElementInfo; 
//# sourceMappingURL=HTMLAreaElementInfo.js.map