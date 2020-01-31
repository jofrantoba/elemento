goog.module('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_tr$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const LocalizedNamesImpl = goog.require('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class LocalizedNamesImpl__tr extends LocalizedNamesImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!LocalizedNamesImpl__tr} */
 static $create__() {
  LocalizedNamesImpl__tr.$clinit();
  let $instance = new LocalizedNamesImpl__tr();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_LocalizedNamesImpl_tr__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_LocalizedNamesImpl_tr__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_LocalizedNamesImpl__();
 }
 /** @override @return {Array<?string>} */
 m_loadLikelyRegionCodes__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["TR"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_loadSortedRegionCodes__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["UM", "VI", "AF", "AX", "DE", "US", "AS", "AD", "AO", "AI", "AQ", "AG", "AR", "AL", "AW", "AC", "EU", "AU", "AT", "AZ", "BS", "BH", "BD", "BB", "EH", "BY", "BE", "BZ", "BJ", "BM", "AE", "GB", "UN", "BO", "BA", "BW", "BV", "BR", "IO", "VG", "BN", "BG", "BF", "BI", "BT", "CV", "KY", "GI", "EA", "DZ", "CX", "DJ", "CP", "CC", "CK", "CW", "TD", "CZ", "CN", "HK", "MO", "DK", "DG", "DM", "DO", "EC", "GQ", "SV", "ID", "ER", "AM", "EE", "ET", "EZ", "FK", "FO", "MA", "FJ", "CI", "PH", "PS", "FI", "FR", "GF", "TF", "PF", "GA", "GM", "GH", "GN", "GW", "GD", "GL", "GP", "GU", "GT", "GG", "GY", "ZA", "GS", "KR", "SS", "GE", "HT", "HM", "HR", "IN", "NL", "HN", "IQ", "IR", "IE", "ES", "IL", "SE", "CH", "IT", "IS", "JM", "JP", "JE", "KH", "CM", "CA", "IC", "ME", "BQ", "QA", "KZ", "KE", "CY", "KG", "KI", "CO", "KM", "CG", "CD", "XK", "CR", "KW", "KP", "MP", "CU", "LA", "LS", "LV", "LR", "LY", "LI", "LT", "LB", "LU", "HU", "MG", "MK", "MW", "MV", "MY", "ML", "MT", "IM", "MH", "MQ", "MU", "YT", "MX", "EG", "FM", "MN", "MD", "MC", "MS", "MR", "MZ", "MM", "NA", "NR", "NP", "NE", "NG", "NI", "NU", "NF", "NO", "CF", "UZ", "PK", "PW", "PA", "PG", "PY", "PE", "PN", "PL", "PT", "PR", "RE", "RO", "RW", "RU", "BL", "SH", "KN", "LC", "MF", "PM", "VC", "WS", "SM", "ST", "SN", "SC", "RS", "SL", "SG", "SX", "SK", "SI", "SB", "SO", "LK", "SD", "SR", "SY", "SA", "SJ", "SZ", "CL", "TJ", "TZ", "TH", "TW", "TL", "TG", "TK", "TO", "TT", "TA", "TN", "TC", "TV", "TR", "TM", "UG", "UA", "OM", "UY", "QO", "JO", "VU", "VA", "VE", "VN", "WF", "XA", "XB", "YE", "NC", "NZ", "GR", "ZM", "ZW"], j_l_String));
 }
 /** @override */
 m_loadNameMap__() {
  super.m_loadNameMap__();
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("001", "D\u00FCnya");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("002", "Afrika");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("003", "Kuzey Amerika");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("005", "G\u00FCney Amerika");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("009", "Okyanusya");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("011", "Bat\u0131 Afrika");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("013", "Orta Amerika");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("014", "Do\u011Fu Afrika");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("015", "Kuzey Afrika");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("017", "Orta Afrika");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("018", "Afrika\u2019n\u0131n G\u00FCneyi");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("019", "Amerika");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("021", "Amerika\u2019n\u0131n Kuzeyi");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("029", "Karayipler");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("030", "Do\u011Fu Asya");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("034", "G\u00FCney Asya");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("035", "G\u00FCneydo\u011Fu Asya");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("039", "G\u00FCney Avrupa");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("053", "Avustralasya");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("054", "Melanezya");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("057", "Mikronezya B\u00F6lgesi");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("061", "Polinezya");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("142", "Asya");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("143", "Orta Asya");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("145", "Bat\u0131 Asya");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("150", "Avrupa");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("151", "Do\u011Fu Avrupa");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("154", "Kuzey Avrupa");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("155", "Bat\u0131 Avrupa");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("202", "Sahra Alt\u0131 Afrika");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("419", "Latin Amerika");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AC", "Ascension Adas\u0131");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AE", "Birle\u015Fik Arap Emirlikleri");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AF", "Afganistan");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AG", "Antigua ve Barbuda");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AL", "Arnavutluk");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AM", "Ermenistan");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AQ", "Antarktika");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AR", "Arjantin");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AS", "Amerikan Samoas\u0131");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AT", "Avusturya");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AU", "Avustralya");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AX", "\u00C5land Adalar\u0131");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AZ", "Azerbaycan");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BA", "Bosna-Hersek");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BD", "Banglade\u015F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BE", "Bel\u00E7ika");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BG", "Bulgaristan");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BH", "Bahreyn");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BL", "Saint Barthelemy");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BO", "Bolivya");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BQ", "Karayip Hollandas\u0131");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BR", "Brezilya");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BS", "Bahamalar");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BT", "Butan");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BV", "Bouvet Adas\u0131");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BW", "Botsvana");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CA", "Kanada");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CC", "Cocos (Keeling) Adalar\u0131");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CD", "Kongo - Kin\u015Fasa");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CF", "Orta Afrika Cumhuriyeti");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CG", "Kongo - Brazavil");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CH", "\u0130svi\u00E7re");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CI", "Fildi\u015Fi Sahili");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CK", "Cook Adalar\u0131");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CL", "\u015Eili");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CM", "Kamerun");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CN", "\u00C7in");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CO", "Kolombiya");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CP", "Clipperton Adas\u0131");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CR", "Kosta Rika");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CU", "K\u00FCba");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CX", "Christmas Adas\u0131");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CY", "K\u0131br\u0131s");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CZ", "\u00C7ekya");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("DE", "Almanya");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("DJ", "Cibuti");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("DK", "Danimarka");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("DM", "Dominika");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("DO", "Dominik Cumhuriyeti");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("DZ", "Cezayir");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("EA", "Ceuta ve Melilla");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("EC", "Ekvador");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("EE", "Estonya");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("EG", "M\u0131s\u0131r");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("EH", "Bat\u0131 Sahra");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ER", "Eritre");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ES", "\u0130spanya");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ET", "Etiyopya");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("EU", "Avrupa Birli\u011Fi");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("EZ", "Euro B\u00F6lgesi");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("FI", "Finlandiya");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("FK", "Falkland Adalar\u0131");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("FM", "Mikronezya");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("FO", "Faroe Adalar\u0131");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("FR", "Fransa");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GB", "Birle\u015Fik Krall\u0131k");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GE", "G\u00FCrcistan");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GF", "Frans\u0131z Guyanas\u0131");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GH", "Gana");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GI", "Cebelitar\u0131k");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GL", "Gr\u00F6nland");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GM", "Gambiya");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GN", "Gine");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GQ", "Ekvator Ginesi");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GR", "Yunanistan");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GS", "G\u00FCney Georgia ve G\u00FCney Sandwich Adalar\u0131");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GW", "Gine-Bissau");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("HK", "\u00C7in Hong Kong \u00D6\u0130B");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("HM", "Heard Adas\u0131 ve McDonald Adalar\u0131");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("HR", "H\u0131rvatistan");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("HU", "Macaristan");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IC", "Kanarya Adalar\u0131");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ID", "Endonezya");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IE", "\u0130rlanda");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IL", "\u0130srail");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IM", "Man Adas\u0131");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IN", "Hindistan");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IO", "Britanya Hint Okyanusu Topraklar\u0131");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IQ", "Irak");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IR", "\u0130ran");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IS", "\u0130zlanda");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IT", "\u0130talya");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("JM", "Jamaika");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("JO", "\u00DCrd\u00FCn");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("JP", "Japonya");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KG", "K\u0131rg\u0131zistan");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KH", "Kambo\u00E7ya");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KM", "Komorlar");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KN", "Saint Kitts ve Nevis");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KP", "Kuzey Kore");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KR", "G\u00FCney Kore");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KW", "Kuveyt");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KY", "Cayman Adalar\u0131");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KZ", "Kazakistan");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LB", "L\u00FCbnan");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LC", "Saint Lucia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LR", "Liberya");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LT", "Litvanya");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LU", "L\u00FCksemburg");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LV", "Letonya");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MA", "Fas");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MC", "Monako");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ME", "Karada\u011F");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MF", "Saint Martin");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MG", "Madagaskar");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MH", "Marshall Adalar\u0131");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MK", "Makedonya");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MN", "Mo\u011Folistan");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MO", "\u00C7in Makao \u00D6\u0130B");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MP", "Kuzey Mariana Adalar\u0131");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MQ", "Martinik");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MR", "Moritanya");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MV", "Maldivler");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MW", "Malavi");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MX", "Meksika");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MY", "Malezya");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MZ", "Mozambik");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NA", "Namibya");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NC", "Yeni Kaledonya");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NE", "Nijer");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NF", "Norfolk Adas\u0131");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NG", "Nijerya");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NI", "Nikaragua");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NL", "Hollanda");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NO", "Norve\u00E7");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NZ", "Yeni Zelanda");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("OM", "Umman");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PF", "Frans\u0131z Polinezyas\u0131");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PG", "Papua Yeni Gine");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PH", "Filipinler");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PL", "Polonya");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PM", "Saint Pierre ve Miquelon");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PN", "Pitcairn Adalar\u0131");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PR", "Porto Riko");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PS", "Filistin B\u00F6lgeleri");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PT", "Portekiz");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("QA", "Katar");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("QO", "Uzak Okyanusya");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("RO", "Romanya");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("RS", "S\u0131rbistan");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("RU", "Rusya");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("RW", "Ruanda");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SA", "Suudi Arabistan");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SB", "Solomon Adalar\u0131");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SC", "Sey\u015Feller");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SE", "\u0130sve\u00E7");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SG", "Singapur");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SH", "Saint Helena");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SI", "Slovenya");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SJ", "Svalbard ve Jan Mayen");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SK", "Slovakya");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SO", "Somali");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SR", "Surinam");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SS", "G\u00FCney Sudan");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ST", "S\u00E3o Tom\u00E9 ve Pr\u00EDncipe");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SY", "Suriye");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SZ", "Svaziland");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TC", "Turks ve Caicos Adalar\u0131");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TD", "\u00C7ad");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TF", "Frans\u0131z G\u00FCney Topraklar\u0131");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TH", "Tayland");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TJ", "Tacikistan");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TM", "T\u00FCrkmenistan");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TN", "Tunus");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TR", "T\u00FCrkiye");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TT", "Trinidad ve Tobago");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TW", "Tayvan");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TZ", "Tanzanya");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("UA", "Ukrayna");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("UM", "ABD K\u00FC\u00E7\u00FCk Harici Adalar\u0131");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("UN", "Birle\u015Fmi\u015F Milletler");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("US", "Amerika Birle\u015Fik Devletleri");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("UZ", "\u00D6zbekistan");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("VA", "Vatikan");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("VC", "Saint Vincent ve Grenadinler");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("VG", "Britanya Virjin Adalar\u0131");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("VI", "ABD Virjin Adalar\u0131");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("WF", "Wallis ve Futuna");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("XK", "Kosova");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ZA", "G\u00FCney Afrika");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ZM", "Zambiya");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ZW", "Zimbabve");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ZZ", "Bilinmeyen B\u00F6lge");
 }
 
 static $clinit() {
  LocalizedNamesImpl__tr.$clinit = () =>{};
  LocalizedNamesImpl__tr.$loadModules();
  LocalizedNamesImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LocalizedNamesImpl__tr;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(LocalizedNamesImpl__tr, 'org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_tr');

exports = LocalizedNamesImpl__tr; 
//# sourceMappingURL=LocalizedNamesImpl_tr.js.map