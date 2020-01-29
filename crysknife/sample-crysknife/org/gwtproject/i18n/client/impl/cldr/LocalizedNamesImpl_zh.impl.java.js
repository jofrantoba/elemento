goog.module('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_zh$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const LocalizedNamesImpl = goog.require('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class LocalizedNamesImpl__zh extends LocalizedNamesImpl {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!LocalizedNamesImpl__zh}
  * @public
  */
 static $create__() {
  LocalizedNamesImpl__zh.$clinit();
  let $instance = new LocalizedNamesImpl__zh();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_LocalizedNamesImpl_zh__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_i18n_client_impl_cldr_LocalizedNamesImpl_zh__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_LocalizedNamesImpl__();
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_loadLikelyRegionCodes__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["CN", "SG"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_loadSortedRegionCodes__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["XA", "XB", "AL", "DZ", "AF", "AR", "AE", "AW", "OM", "AZ", "AC", "EG", "ET", "IE", "EE", "AD", "AO", "AI", "AG", "AT", "AX", "AU", "BB", "PG", "BS", "PK", "PY", "PS", "BH", "PA", "BR", "BY", "BM", "BG", "MP", "BJ", "BE", "IS", "BO", "PR", "PL", "BA", "BW", "BZ", "BT", "BF", "BI", "BV", "KP", "GQ", "QO", "DK", "DE", "DG", "TL", "TG", "DO", "DM", "RU", "EC", "ER", "FR", "FO", "PF", "GF", "TF", "MF", "PH", "FI", "CV", "FK", "GM", "CG", "CD", "CO", "CR", "GD", "GL", "GE", "GG", "CU", "GP", "GU", "GY", "KZ", "HT", "KR", "NL", "BQ", "SX", "HM", "ME", "HN", "KI", "DJ", "KG", "GN", "GW", "CA", "GH", "IC", "GA", "KH", "CZ", "ZW", "CM", "QA", "KY", "CC", "KM", "XK", "CI", "KW", "CP", "HR", "KE", "CK", "CW", "LV", "LS", "LA", "LB", "LR", "LY", "LT", "UN", "LI", "RE", "LU", "RW", "RO", "MG", "IM", "MT", "MV", "MW", "MY", "ML", "MK", "MH", "MQ", "YT", "MU", "MR", "US", "UM", "AS", "VI", "MN", "MS", "BD", "PE", "FM", "MM", "MD", "MA", "MC", "MZ", "MX", "NA", "ZA", "AQ", "GS", "SS", "NP", "NI", "NE", "NG", "NU", "NO", "NF", "EU", "EZ", "PW", "PN", "PT", "JP", "SE", "CH", "SV", "WS", "RS", "SL", "SN", "CY", "SC", "SA", "BL", "CX", "ST", "SH", "KN", "LC", "SM", "PM", "VC", "LK", "SK", "SI", "SJ", "SZ", "SD", "SR", "SO", "SB", "TJ", "TW", "TH", "TZ", "TO", "TC", "TA", "TT", "TN", "TV", "TR", "TM", "TK", "WF", "VU", "GT", "VE", "BN", "UG", "UA", "UY", "UZ", "ES", "EH", "GR", "SG", "NC", "NZ", "HU", "EA", "SY", "JM", "AM", "YE", "IQ", "IR", "IL", "IT", "IN", "ID", "GB", "VG", "IO", "JO", "VN", "ZM", "JE", "TD", "GI", "CL", "CF", "CN", "MO", "HK", "NR", "VA", "FJ"], j_l_String));
 }
 /**
  * @override
  * @public
  */
 m_loadNameMap__() {
  super.m_loadNameMap__();
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("001", "\u4E16\u754C");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("002", "\u975E\u6D32");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("003", "\u5317\u7F8E\u6D32");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("005", "\u5357\u7F8E\u6D32");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("009", "\u5927\u6D0B\u6D32");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("011", "\u897F\u975E");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("013", "\u4E2D\u7F8E\u6D32");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("014", "\u4E1C\u975E");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("015", "\u5317\u975E");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("017", "\u4E2D\u975E");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("018", "\u5357\u90E8\u975E\u6D32");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("019", "\u7F8E\u6D32");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("021", "\u7F8E\u6D32\u5317\u90E8");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("029", "\u52A0\u52D2\u6BD4\u5730\u533A");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("030", "\u4E1C\u4E9A");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("034", "\u5357\u4E9A");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("035", "\u4E1C\u5357\u4E9A");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("039", "\u5357\u6B27");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("053", "\u6FB3\u5927\u62C9\u897F\u4E9A");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("054", "\u7F8E\u62C9\u5C3C\u897F\u4E9A");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("057", "\u5BC6\u514B\u7F57\u5C3C\u897F\u4E9A\u5730\u533A");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("061", "\u73BB\u5229\u5C3C\u897F\u4E9A");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("142", "\u4E9A\u6D32");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("143", "\u4E2D\u4E9A");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("145", "\u897F\u4E9A");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("150", "\u6B27\u6D32");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("151", "\u4E1C\u6B27");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("154", "\u5317\u6B27");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("155", "\u897F\u6B27");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("202", "\u6492\u54C8\u62C9\u4EE5\u5357\u975E\u6D32");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("419", "\u62C9\u4E01\u7F8E\u6D32");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AC", "\u963F\u68EE\u677E\u5C9B");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AD", "\u5B89\u9053\u5C14");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AE", "\u963F\u62C9\u4F2F\u8054\u5408\u914B\u957F\u56FD");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AF", "\u963F\u5BCC\u6C57");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AG", "\u5B89\u63D0\u74DC\u548C\u5DF4\u5E03\u8FBE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AI", "\u5B89\u572D\u62C9");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AL", "\u963F\u5C14\u5DF4\u5C3C\u4E9A");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AM", "\u4E9A\u7F8E\u5C3C\u4E9A");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AO", "\u5B89\u54E5\u62C9");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AQ", "\u5357\u6781\u6D32");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AR", "\u963F\u6839\u5EF7");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AS", "\u7F8E\u5C5E\u8428\u6469\u4E9A");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AT", "\u5965\u5730\u5229");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AU", "\u6FB3\u5927\u5229\u4E9A");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AW", "\u963F\u9C81\u5DF4");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AX", "\u5965\u5170\u7FA4\u5C9B");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AZ", "\u963F\u585E\u62DC\u7586");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BA", "\u6CE2\u65AF\u5C3C\u4E9A\u548C\u9ED1\u585E\u54E5\u7EF4\u90A3");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BB", "\u5DF4\u5DF4\u591A\u65AF");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BD", "\u5B5F\u52A0\u62C9\u56FD");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BE", "\u6BD4\u5229\u65F6");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BF", "\u5E03\u57FA\u7EB3\u6CD5\u7D22");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BG", "\u4FDD\u52A0\u5229\u4E9A");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BH", "\u5DF4\u6797");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BI", "\u5E03\u9686\u8FEA");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BJ", "\u8D1D\u5B81");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BL", "\u5723\u5DF4\u6CF0\u52D2\u7C73");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BM", "\u767E\u6155\u5927");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BN", "\u6587\u83B1");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BO", "\u73BB\u5229\u7EF4\u4E9A");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BQ", "\u8377\u5C5E\u52A0\u52D2\u6BD4\u533A");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BR", "\u5DF4\u897F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BS", "\u5DF4\u54C8\u9A6C");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BT", "\u4E0D\u4E39");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BV", "\u5E03\u97E6\u5C9B");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BW", "\u535A\u8328\u74E6\u7EB3");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BY", "\u767D\u4FC4\u7F57\u65AF");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BZ", "\u4F2F\u5229\u5179");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CA", "\u52A0\u62FF\u5927");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CC", "\u79D1\u79D1\u65AF\uFF08\u57FA\u6797\uFF09\u7FA4\u5C9B");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CD", "\u521A\u679C\uFF08\u91D1\uFF09");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CF", "\u4E2D\u975E\u5171\u548C\u56FD");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CG", "\u521A\u679C\uFF08\u5E03\uFF09");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CH", "\u745E\u58EB");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CI", "\u79D1\u7279\u8FEA\u74E6");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CK", "\u5E93\u514B\u7FA4\u5C9B");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CL", "\u667A\u5229");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CM", "\u5580\u9EA6\u9686");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CN", "\u4E2D\u56FD");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CO", "\u54E5\u4F26\u6BD4\u4E9A");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CP", "\u514B\u5229\u73C0\u987F\u5C9B");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CR", "\u54E5\u65AF\u8FBE\u9ECE\u52A0");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CU", "\u53E4\u5DF4");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CV", "\u4F5B\u5F97\u89D2");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CW", "\u5E93\u62C9\u7D22");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CX", "\u5723\u8BDE\u5C9B");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CY", "\u585E\u6D66\u8DEF\u65AF");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CZ", "\u6377\u514B");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("DE", "\u5FB7\u56FD");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("DG", "\u8FEA\u6208\u52A0\u897F\u4E9A\u5C9B");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("DJ", "\u5409\u5E03\u63D0");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("DK", "\u4E39\u9EA6");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("DM", "\u591A\u7C73\u5C3C\u514B");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("DO", "\u591A\u7C73\u5C3C\u52A0\u5171\u548C\u56FD");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("DZ", "\u963F\u5C14\u53CA\u5229\u4E9A");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("EA", "\u4F11\u8FBE\u53CA\u6885\u5229\u5229\u4E9A");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("EC", "\u5384\u74DC\u591A\u5C14");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("EE", "\u7231\u6C99\u5C3C\u4E9A");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("EG", "\u57C3\u53CA");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("EH", "\u897F\u6492\u54C8\u62C9");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ER", "\u5384\u7ACB\u7279\u91CC\u4E9A");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ES", "\u897F\u73ED\u7259");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ET", "\u57C3\u585E\u4FC4\u6BD4\u4E9A");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("EU", "\u6B27\u76DF");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("EZ", "\u6B27\u5143\u533A");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("FI", "\u82AC\u5170");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("FJ", "\u6590\u6D4E");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("FK", "\u798F\u514B\u5170\u7FA4\u5C9B");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("FM", "\u5BC6\u514B\u7F57\u5C3C\u897F\u4E9A");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("FO", "\u6CD5\u7F57\u7FA4\u5C9B");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("FR", "\u6CD5\u56FD");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GA", "\u52A0\u84EC");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GB", "\u82F1\u56FD");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GD", "\u683C\u6797\u7EB3\u8FBE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GE", "\u683C\u9C81\u5409\u4E9A");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GF", "\u6CD5\u5C5E\u572D\u4E9A\u90A3");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GG", "\u6839\u897F\u5C9B");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GH", "\u52A0\u7EB3");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GI", "\u76F4\u5E03\u7F57\u9640");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GL", "\u683C\u9675\u5170");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GM", "\u5188\u6BD4\u4E9A");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GN", "\u51E0\u5185\u4E9A");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GP", "\u74DC\u5FB7\u7F57\u666E");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GQ", "\u8D64\u9053\u51E0\u5185\u4E9A");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GR", "\u5E0C\u814A");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GS", "\u5357\u4E54\u6CBB\u4E9A\u548C\u5357\u6851\u5A01\u5947\u7FA4\u5C9B");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GT", "\u5371\u5730\u9A6C\u62C9");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GU", "\u5173\u5C9B");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GW", "\u51E0\u5185\u4E9A\u6BD4\u7ECD");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GY", "\u572D\u4E9A\u90A3");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("HK", "\u4E2D\u56FD\u9999\u6E2F\u7279\u522B\u884C\u653F\u533A");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("HM", "\u8D6B\u5FB7\u5C9B\u548C\u9EA6\u514B\u5510\u7EB3\u7FA4\u5C9B");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("HN", "\u6D2A\u90FD\u62C9\u65AF");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("HR", "\u514B\u7F57\u5730\u4E9A");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("HT", "\u6D77\u5730");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("HU", "\u5308\u7259\u5229");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IC", "\u52A0\u7EB3\u5229\u7FA4\u5C9B");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ID", "\u5370\u5EA6\u5C3C\u897F\u4E9A");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IE", "\u7231\u5C14\u5170");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IL", "\u4EE5\u8272\u5217");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IM", "\u9A6C\u6069\u5C9B");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IN", "\u5370\u5EA6");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IO", "\u82F1\u5C5E\u5370\u5EA6\u6D0B\u9886\u5730");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IQ", "\u4F0A\u62C9\u514B");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IR", "\u4F0A\u6717");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IS", "\u51B0\u5C9B");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IT", "\u610F\u5927\u5229");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("JE", "\u6CFD\u897F\u5C9B");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("JM", "\u7259\u4E70\u52A0");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("JO", "\u7EA6\u65E6");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("JP", "\u65E5\u672C");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KE", "\u80AF\u5C3C\u4E9A");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KG", "\u5409\u5C14\u5409\u65AF\u65AF\u5766");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KH", "\u67EC\u57D4\u5BE8");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KI", "\u57FA\u91CC\u5DF4\u65AF");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KM", "\u79D1\u6469\u7F57");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KN", "\u5723\u57FA\u8328\u548C\u5C3C\u7EF4\u65AF");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KP", "\u671D\u9C9C");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KR", "\u97E9\u56FD");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KW", "\u79D1\u5A01\u7279");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KY", "\u5F00\u66FC\u7FA4\u5C9B");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KZ", "\u54C8\u8428\u514B\u65AF\u5766");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LA", "\u8001\u631D");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LB", "\u9ECE\u5DF4\u5AE9");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LC", "\u5723\u5362\u897F\u4E9A");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LI", "\u5217\u652F\u6566\u58EB\u767B");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LK", "\u65AF\u91CC\u5170\u5361");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LR", "\u5229\u6BD4\u91CC\u4E9A");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LS", "\u83B1\u7D22\u6258");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LT", "\u7ACB\u9676\u5B9B");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LU", "\u5362\u68EE\u5821");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LV", "\u62C9\u8131\u7EF4\u4E9A");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LY", "\u5229\u6BD4\u4E9A");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MA", "\u6469\u6D1B\u54E5");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MC", "\u6469\u7EB3\u54E5");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MD", "\u6469\u5C14\u591A\u74E6");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ME", "\u9ED1\u5C71");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MF", "\u6CD5\u5C5E\u5723\u9A6C\u4E01");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MG", "\u9A6C\u8FBE\u52A0\u65AF\u52A0");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MH", "\u9A6C\u7ECD\u5C14\u7FA4\u5C9B");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MK", "\u9A6C\u5176\u987F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ML", "\u9A6C\u91CC");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MM", "\u7F05\u7538");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MN", "\u8499\u53E4");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MO", "\u4E2D\u56FD\u6FB3\u95E8\u7279\u522B\u884C\u653F\u533A");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MP", "\u5317\u9A6C\u91CC\u4E9A\u7EB3\u7FA4\u5C9B");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MQ", "\u9A6C\u63D0\u5C3C\u514B");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MR", "\u6BDB\u91CC\u5854\u5C3C\u4E9A");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MS", "\u8499\u7279\u585E\u62C9\u7279");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MT", "\u9A6C\u8033\u4ED6");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MU", "\u6BDB\u91CC\u6C42\u65AF");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MV", "\u9A6C\u5C14\u4EE3\u592B");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MW", "\u9A6C\u62C9\u7EF4");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MX", "\u58A8\u897F\u54E5");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MY", "\u9A6C\u6765\u897F\u4E9A");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MZ", "\u83AB\u6851\u6BD4\u514B");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NA", "\u7EB3\u7C73\u6BD4\u4E9A");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NC", "\u65B0\u5580\u91CC\u591A\u5C3C\u4E9A");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NE", "\u5C3C\u65E5\u5C14");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NF", "\u8BFA\u798F\u514B\u5C9B");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NG", "\u5C3C\u65E5\u5229\u4E9A");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NI", "\u5C3C\u52A0\u62C9\u74DC");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NL", "\u8377\u5170");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NO", "\u632A\u5A01");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NP", "\u5C3C\u6CCA\u5C14");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NR", "\u7459\u9C81");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NU", "\u7EBD\u57C3");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NZ", "\u65B0\u897F\u5170");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("OM", "\u963F\u66FC");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PA", "\u5DF4\u62FF\u9A6C");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PE", "\u79D8\u9C81");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PF", "\u6CD5\u5C5E\u6CE2\u5229\u5C3C\u897F\u4E9A");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PG", "\u5DF4\u5E03\u4E9A\u65B0\u51E0\u5185\u4E9A");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PH", "\u83F2\u5F8B\u5BBE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PK", "\u5DF4\u57FA\u65AF\u5766");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PL", "\u6CE2\u5170");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PM", "\u5723\u76AE\u57C3\u5C14\u548C\u5BC6\u514B\u9686\u7FA4\u5C9B");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PN", "\u76AE\u7279\u51EF\u6069\u7FA4\u5C9B");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PR", "\u6CE2\u591A\u9ECE\u5404");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PS", "\u5DF4\u52D2\u65AF\u5766\u9886\u571F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PT", "\u8461\u8404\u7259");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PW", "\u5E15\u52B3");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PY", "\u5DF4\u62C9\u572D");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("QA", "\u5361\u5854\u5C14");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("QO", "\u5927\u6D0B\u6D32\u8FB9\u8FDC\u7FA4\u5C9B");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("RE", "\u7559\u5C3C\u6C6A");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("RO", "\u7F57\u9A6C\u5C3C\u4E9A");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("RS", "\u585E\u5C14\u7EF4\u4E9A");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("RU", "\u4FC4\u7F57\u65AF");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("RW", "\u5362\u65FA\u8FBE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SA", "\u6C99\u7279\u963F\u62C9\u4F2F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SB", "\u6240\u7F57\u95E8\u7FA4\u5C9B");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SC", "\u585E\u820C\u5C14");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SD", "\u82CF\u4E39");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SE", "\u745E\u5178");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SG", "\u65B0\u52A0\u5761");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SH", "\u5723\u8D6B\u52D2\u62FF");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SI", "\u65AF\u6D1B\u6587\u5C3C\u4E9A");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SJ", "\u65AF\u74E6\u5C14\u5DF4\u548C\u626C\u9A6C\u5EF6");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SK", "\u65AF\u6D1B\u4F10\u514B");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SL", "\u585E\u62C9\u5229\u6602");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SM", "\u5723\u9A6C\u529B\u8BFA");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SN", "\u585E\u5185\u52A0\u5C14");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SO", "\u7D22\u9A6C\u91CC");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SR", "\u82CF\u91CC\u5357");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SS", "\u5357\u82CF\u4E39");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ST", "\u5723\u591A\u7F8E\u548C\u666E\u6797\u897F\u6BD4");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SV", "\u8428\u5C14\u74E6\u591A");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SX", "\u8377\u5C5E\u5723\u9A6C\u4E01");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SY", "\u53D9\u5229\u4E9A");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SZ", "\u65AF\u5A01\u58EB\u5170");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TA", "\u7279\u91CC\u65AF\u5766-\u8FBE\u5E93\u5C3C\u4E9A\u7FA4\u5C9B");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TC", "\u7279\u514B\u65AF\u548C\u51EF\u79D1\u65AF\u7FA4\u5C9B");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TD", "\u4E4D\u5F97");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TF", "\u6CD5\u5C5E\u5357\u90E8\u9886\u5730");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TG", "\u591A\u54E5");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TH", "\u6CF0\u56FD");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TJ", "\u5854\u5409\u514B\u65AF\u5766");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TK", "\u6258\u514B\u52B3");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TL", "\u4E1C\u5E1D\u6C76");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TM", "\u571F\u5E93\u66FC\u65AF\u5766");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TN", "\u7A81\u5C3C\u65AF");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TO", "\u6C64\u52A0");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TR", "\u571F\u8033\u5176");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TT", "\u7279\u7ACB\u5C3C\u8FBE\u548C\u591A\u5DF4\u54E5");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TV", "\u56FE\u74E6\u5362");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TW", "\u53F0\u6E7E");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TZ", "\u5766\u6851\u5C3C\u4E9A");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("UA", "\u4E4C\u514B\u5170");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("UG", "\u4E4C\u5E72\u8FBE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("UM", "\u7F8E\u56FD\u672C\u571F\u5916\u5C0F\u5C9B\u5C7F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("UN", "\u8054\u5408\u56FD");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("US", "\u7F8E\u56FD");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("UY", "\u4E4C\u62C9\u572D");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("UZ", "\u4E4C\u5179\u522B\u514B\u65AF\u5766");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("VA", "\u68B5\u8482\u5188");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("VC", "\u5723\u6587\u68EE\u7279\u548C\u683C\u6797\u7EB3\u4E01\u65AF");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("VE", "\u59D4\u5185\u745E\u62C9");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("VG", "\u82F1\u5C5E\u7EF4\u5C14\u4EAC\u7FA4\u5C9B");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("VI", "\u7F8E\u5C5E\u7EF4\u5C14\u4EAC\u7FA4\u5C9B");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("VN", "\u8D8A\u5357");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("VU", "\u74E6\u52AA\u963F\u56FE");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("WF", "\u74E6\u5229\u65AF\u548C\u5BCC\u56FE\u7EB3");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("WS", "\u8428\u6469\u4E9A");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("XK", "\u79D1\u7D22\u6C83");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("YE", "\u4E5F\u95E8");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("YT", "\u9A6C\u7EA6\u7279");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ZA", "\u5357\u975E");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ZM", "\u8D5E\u6BD4\u4E9A");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ZW", "\u6D25\u5DF4\u5E03\u97E6");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ZZ", "\u672A\u77E5\u5730\u533A");
 }
 /**
  * @public
  */
 static $clinit() {
  LocalizedNamesImpl__zh.$clinit = () =>{};
  LocalizedNamesImpl__zh.$loadModules();
  LocalizedNamesImpl.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof LocalizedNamesImpl__zh;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(LocalizedNamesImpl__zh, 'org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_zh');

exports = LocalizedNamesImpl__zh; 
//# sourceMappingURL=LocalizedNamesImpl_zh.js.map