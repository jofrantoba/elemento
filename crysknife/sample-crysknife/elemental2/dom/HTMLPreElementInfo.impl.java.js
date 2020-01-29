goog.module('elemental2.dom.HTMLPreElementInfo$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class HTMLPreElementInfo extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!HTMLPreElementInfo}
  * @public
  */
 static $create__() {
  HTMLPreElementInfo.$clinit();
  let $instance = new HTMLPreElementInfo();
  $instance.$ctor__elemental2_dom_HTMLPreElementInfo__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__elemental2_dom_HTMLPreElementInfo__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @public
  */
 static $clinit() {
  HTMLPreElementInfo.$clinit = () =>{};
  HTMLPreElementInfo.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof HTMLPreElementInfo;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(HTMLPreElementInfo, 'elemental2.dom.HTMLPreElementInfo');

exports = HTMLPreElementInfo; 
//# sourceMappingURL=HTMLPreElementInfo.js.map