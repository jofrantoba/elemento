goog.module('elemental2.dom.TrustedURL.$Overlay$impl');

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
  return instance instanceof TrustedURL;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata($Overlay, 'TrustedURL');

exports = $Overlay; 
//# sourceMappingURL=TrustedURL$$Overlay.js.map