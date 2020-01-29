goog.module('elemental2.dom.HTMLEmbedElementInfo$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class HTMLEmbedElementInfo extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!HTMLEmbedElementInfo}
  * @public
  */
 static $create__() {
  HTMLEmbedElementInfo.$clinit();
  let $instance = new HTMLEmbedElementInfo();
  $instance.$ctor__elemental2_dom_HTMLEmbedElementInfo__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__elemental2_dom_HTMLEmbedElementInfo__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @public
  */
 static $clinit() {
  HTMLEmbedElementInfo.$clinit = () =>{};
  HTMLEmbedElementInfo.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof HTMLEmbedElementInfo;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(HTMLEmbedElementInfo, 'elemental2.dom.HTMLEmbedElementInfo');

exports = HTMLEmbedElementInfo; 
//# sourceMappingURL=HTMLEmbedElementInfo.js.map