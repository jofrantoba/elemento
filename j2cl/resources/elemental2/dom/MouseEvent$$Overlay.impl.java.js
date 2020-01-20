goog.module('elemental2.dom.MouseEvent.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

class $Overlay {
 /**
  * @public
  */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof MouseEvent;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata($Overlay, 'MouseEvent');

exports = $Overlay; 
//# sourceMappingURL=MouseEvent$$Overlay.js.map