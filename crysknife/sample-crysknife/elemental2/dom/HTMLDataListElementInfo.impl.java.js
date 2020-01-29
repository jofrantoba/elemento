goog.module('elemental2.dom.HTMLDataListElementInfo$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class HTMLDataListElementInfo extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!HTMLDataListElementInfo}
  * @public
  */
 static $create__() {
  HTMLDataListElementInfo.$clinit();
  let $instance = new HTMLDataListElementInfo();
  $instance.$ctor__elemental2_dom_HTMLDataListElementInfo__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__elemental2_dom_HTMLDataListElementInfo__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @public
  */
 static $clinit() {
  HTMLDataListElementInfo.$clinit = () =>{};
  HTMLDataListElementInfo.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof HTMLDataListElementInfo;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(HTMLDataListElementInfo, 'elemental2.dom.HTMLDataListElementInfo');

exports = HTMLDataListElementInfo; 
//# sourceMappingURL=HTMLDataListElementInfo.js.map