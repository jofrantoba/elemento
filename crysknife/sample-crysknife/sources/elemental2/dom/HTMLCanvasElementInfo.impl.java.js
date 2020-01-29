goog.module('elemental2.dom.HTMLCanvasElementInfo$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class HTMLCanvasElementInfo extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!HTMLCanvasElementInfo}
  * @public
  */
 static $create__() {
  HTMLCanvasElementInfo.$clinit();
  let $instance = new HTMLCanvasElementInfo();
  $instance.$ctor__elemental2_dom_HTMLCanvasElementInfo__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__elemental2_dom_HTMLCanvasElementInfo__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @public
  */
 static $clinit() {
  HTMLCanvasElementInfo.$clinit = () =>{};
  HTMLCanvasElementInfo.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof HTMLCanvasElementInfo;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(HTMLCanvasElementInfo, 'elemental2.dom.HTMLCanvasElementInfo');

exports = HTMLCanvasElementInfo; 
//# sourceMappingURL=HTMLCanvasElementInfo.js.map