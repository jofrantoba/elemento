goog.module('org.jboss.elemento.sample.j2cl.Messages$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let SafeHtmlUtils = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');

/**
 * @interface
 */
class Messages {
 /**
  * @param {number} items
  * @return {SafeHtml}
  * @public
  */
 static m_items__int(items) {
  Messages.$clinit();
  let /** ?string */ message;
  switch (items) {
   case 0: 
    message = "<strong>no</strong> items left";
    break;
   case 1: 
    message = "<strong>one</strong> item left";
    break;
   default: 
    message = "<strong>" + items + "</strong> items left";
    break;
  }
  return SafeHtmlUtils.m_fromSafeConstant__java_lang_String(message);
 }
 /**
  * @public
  */
 static $clinit() {
  Messages.$clinit = () =>{};
  Messages.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_jboss_elemento_sample_j2cl_Messages = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_jboss_elemento_sample_j2cl_Messages;
 }
 /**
  * @public
  */
 static $loadModules() {
  SafeHtmlUtils = goog.module.get('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Messages, 'org.jboss.elemento.sample.j2cl.Messages');

Messages.$markImplementor(/** @type {Function} */ (Messages));

exports = Messages; 
//# sourceMappingURL=Messages.js.map