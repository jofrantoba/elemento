goog.module('elemental2.dom.HTMLUListElementInfo$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class HTMLUListElementInfo extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!HTMLUListElementInfo}
  * @public
  */
 static $create__() {
  HTMLUListElementInfo.$clinit();
  let $instance = new HTMLUListElementInfo();
  $instance.$ctor__elemental2_dom_HTMLUListElementInfo__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__elemental2_dom_HTMLUListElementInfo__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @public
  */
 static $clinit() {
  HTMLUListElementInfo.$clinit = () =>{};
  HTMLUListElementInfo.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof HTMLUListElementInfo;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(HTMLUListElementInfo, 'elemental2.dom.HTMLUListElementInfo');

exports = HTMLUListElementInfo; 
//# sourceMappingURL=HTMLUListElementInfo.js.map