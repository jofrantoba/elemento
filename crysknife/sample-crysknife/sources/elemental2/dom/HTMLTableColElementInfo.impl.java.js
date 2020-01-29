goog.module('elemental2.dom.HTMLTableColElementInfo$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class HTMLTableColElementInfo extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!HTMLTableColElementInfo}
  * @public
  */
 static $create__() {
  HTMLTableColElementInfo.$clinit();
  let $instance = new HTMLTableColElementInfo();
  $instance.$ctor__elemental2_dom_HTMLTableColElementInfo__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__elemental2_dom_HTMLTableColElementInfo__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @public
  */
 static $clinit() {
  HTMLTableColElementInfo.$clinit = () =>{};
  HTMLTableColElementInfo.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof HTMLTableColElementInfo;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(HTMLTableColElementInfo, 'elemental2.dom.HTMLTableColElementInfo');

exports = HTMLTableColElementInfo; 
//# sourceMappingURL=HTMLTableColElementInfo.js.map