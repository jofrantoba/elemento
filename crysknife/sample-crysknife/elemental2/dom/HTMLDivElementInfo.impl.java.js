goog.module('elemental2.dom.HTMLDivElementInfo$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class HTMLDivElementInfo extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!HTMLDivElementInfo}
  * @public
  */
 static $create__() {
  HTMLDivElementInfo.$clinit();
  let $instance = new HTMLDivElementInfo();
  $instance.$ctor__elemental2_dom_HTMLDivElementInfo__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__elemental2_dom_HTMLDivElementInfo__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @public
  */
 static $clinit() {
  HTMLDivElementInfo.$clinit = () =>{};
  HTMLDivElementInfo.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof HTMLDivElementInfo;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(HTMLDivElementInfo, 'elemental2.dom.HTMLDivElementInfo');

exports = HTMLDivElementInfo; 
//# sourceMappingURL=HTMLDivElementInfo.js.map