goog.module('elemental2.dom.HTMLParagraphElementInfo$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class HTMLParagraphElementInfo extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!HTMLParagraphElementInfo}
  * @public
  */
 static $create__() {
  HTMLParagraphElementInfo.$clinit();
  let $instance = new HTMLParagraphElementInfo();
  $instance.$ctor__elemental2_dom_HTMLParagraphElementInfo__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__elemental2_dom_HTMLParagraphElementInfo__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @public
  */
 static $clinit() {
  HTMLParagraphElementInfo.$clinit = () =>{};
  HTMLParagraphElementInfo.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof HTMLParagraphElementInfo;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(HTMLParagraphElementInfo, 'elemental2.dom.HTMLParagraphElementInfo');

exports = HTMLParagraphElementInfo; 
//# sourceMappingURL=HTMLParagraphElementInfo.js.map