goog.module('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_nl$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const LocalizedNamesImpl = goog.require('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class LocalizedNamesImpl__nl extends LocalizedNamesImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!LocalizedNamesImpl__nl} */
 static $create__() {
  LocalizedNamesImpl__nl.$clinit();
  let $instance = new LocalizedNamesImpl__nl();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_LocalizedNamesImpl_nl__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_LocalizedNamesImpl_nl__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_LocalizedNamesImpl__();
 }
 /** @override @return {Array<?string>} */
 m_loadLikelyRegionCodes__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["NL", "DE", "BE"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_loadSortedRegionCodes__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["AF", "AX", "AL", "DZ", "VI", "AS", "AD", "AO", "AI", "AQ", "AG", "AR", "AM", "AW", "AC", "AU", "AZ", "BS", "BH", "BD", "BB", "BY", "BE", "BZ", "BJ", "BM", "BT", "BO", "BA", "BW", "BV", "BR", "VG", "IO", "BN", "BG", "BF", "BI", "KH", "CA", "IC", "BQ", "CF", "EA", "CL", "CN", "CX", "CP", "CC", "CO", "KM", "CG", "CD", "CK", "CR", "CU", "CW", "CY", "DK", "DG", "DJ", "DM", "DO", "DE", "EC", "EG", "SV", "GQ", "ER", "EE", "ET", "EU", "EZ", "FO", "FK", "FJ", "PH", "FI", "FR", "TF", "GF", "PF", "GA", "GM", "GE", "GH", "GI", "GD", "GR", "GL", "GP", "GU", "GT", "GG", "GN", "GW", "GY", "HT", "HM", "HN", "HU", "HK", "IE", "IS", "IN", "ID", "IQ", "IR", "IM", "IL", "IT", "CI", "JM", "JP", "YE", "JE", "JO", "KY", "CV", "CM", "KZ", "KE", "KG", "KI", "UM", "KW", "XK", "HR", "LA", "LS", "LV", "LB", "LR", "LY", "LI", "LT", "LU", "MO", "MK", "MG", "MW", "MV", "MY", "ML", "MT", "MA", "MH", "MQ", "MR", "MU", "YT", "MX", "FM", "MD", "MC", "MN", "ME", "MS", "MZ", "MM", "NA", "NR", "NL", "NP", "NI", "NC", "NZ", "NE", "NG", "NU", "MP", "KP", "NO", "NF", "UG", "UA", "UZ", "OM", "AT", "TL", "QO", "PK", "PW", "PS", "PA", "PG", "PY", "PE", "PN", "PL", "PT", "PR", "QA", "RE", "RO", "RU", "RW", "BL", "KN", "LC", "MF", "PM", "VC", "SB", "WS", "SM", "SA", "ST", "SN", "RS", "SC", "SL", "SG", "SH", "SX", "SI", "SK", "SD", "SO", "ES", "SJ", "LK", "SR", "SZ", "SY", "TJ", "TW", "TZ", "TH", "TG", "TK", "TO", "TT", "TA", "TD", "CZ", "TN", "TR", "TM", "TC", "TV", "UY", "VU", "VA", "VE", "AE", "UN", "US", "GB", "VN", "WF", "EH", "XA", "XB", "ZM", "ZW", "ZA", "GS", "KR", "SS", "SE", "CH"], j_l_String));
 }
 /** @override */
 m_loadNameMap__() {
  super.m_loadNameMap__();
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("001", "wereld");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("002", "Afrika");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("003", "Noord-Amerika");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("005", "Zuid-Amerika");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("009", "Oceani\u00EB");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("011", "West-Afrika");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("013", "Midden-Amerika");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("014", "Oost-Afrika");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("015", "Noord-Afrika");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("017", "Centraal-Afrika");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("018", "Zuidelijk Afrika");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("019", "Amerika");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("021", "Noordelijk Amerika");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("029", "Caribisch gebied");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("030", "Oost-Azi\u00EB");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("034", "Zuid-Azi\u00EB");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("035", "Zuidoost-Azi\u00EB");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("039", "Zuid-Europa");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("053", "Australazi\u00EB");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("054", "Melanesi\u00EB");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("057", "Micronesische regio");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("061", "Polynesi\u00EB");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("142", "Azi\u00EB");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("143", "Centraal-Azi\u00EB");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("145", "West-Azi\u00EB");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("150", "Europa");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("151", "Oost-Europa");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("154", "Noord-Europa");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("155", "West-Europa");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("202", "Sub-Saharaans Afrika");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("419", "Latijns-Amerika");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AC", "Ascension");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AE", "Verenigde Arabische Emiraten");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AG", "Antigua en Barbuda");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AL", "Albani\u00EB");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AM", "Armeni\u00EB");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AR", "Argentini\u00EB");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AS", "Amerikaans-Samoa");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AT", "Oostenrijk");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AU", "Australi\u00EB");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AX", "\u00C5land");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AZ", "Azerbeidzjan");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BA", "Bosni\u00EB en Herzegovina");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BE", "Belgi\u00EB");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BG", "Bulgarije");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BH", "Bahrein");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BL", "Saint-Barth\u00E9lemy");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BQ", "Caribisch Nederland");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BR", "Brazili\u00EB");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BS", "Bahama\u2019s");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BV", "Bouveteiland");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CC", "Cocoseilanden");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CD", "Congo-Kinshasa");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CF", "Centraal-Afrikaanse Republiek");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CG", "Congo-Brazzaville");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CH", "Zwitserland");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CI", "Ivoorkust");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CK", "Cookeilanden");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CL", "Chili");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CM", "Kameroen");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CP", "Clipperton");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CV", "Kaapverdi\u00EB");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CX", "Christmaseiland");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CZ", "Tsjechi\u00EB");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("DE", "Duitsland");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("DK", "Denemarken");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("DO", "Dominicaanse Republiek");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("DZ", "Algerije");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("EA", "Ceuta en Melilla");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("EE", "Estland");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("EG", "Egypte");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("EH", "Westelijke Sahara");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ES", "Spanje");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ET", "Ethiopi\u00EB");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("EU", "Europese Unie");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("EZ", "eurozone");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("FK", "Falklandeilanden");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("FO", "Faer\u00F6er");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("FR", "Frankrijk");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GB", "Verenigd Koninkrijk");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GE", "Georgi\u00EB");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GF", "Frans-Guyana");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GL", "Groenland");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GN", "Guinee");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GQ", "Equatoriaal-Guinea");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GR", "Griekenland");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GS", "Zuid-Georgia en Zuidelijke Sandwicheilanden");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GW", "Guinee-Bissau");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("HK", "Hongkong SAR van China");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("HM", "Heard en McDonaldeilanden");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("HR", "Kroati\u00EB");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("HT", "Ha\u00EFti");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("HU", "Hongarije");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IC", "Canarische Eilanden");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ID", "Indonesi\u00EB");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IE", "Ierland");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IL", "Isra\u00EBl");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IO", "Brits Indische Oceaanterritorium");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IQ", "Irak");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IS", "IJsland");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IT", "Itali\u00EB");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("JO", "Jordani\u00EB");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KE", "Kenia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KG", "Kirgizi\u00EB");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KH", "Cambodja");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KM", "Comoren");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KN", "Saint Kitts en Nevis");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KP", "Noord-Korea");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KR", "Zuid-Korea");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KW", "Koeweit");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KY", "Kaaimaneilanden");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KZ", "Kazachstan");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LB", "Libanon");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LC", "Saint Lucia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LT", "Litouwen");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LU", "Luxemburg");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LV", "Letland");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LY", "Libi\u00EB");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MA", "Marokko");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MD", "Moldavi\u00EB");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MF", "Saint-Martin");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MG", "Madagaskar");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MH", "Marshalleilanden");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MK", "Macedoni\u00EB");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MM", "Myanmar (Birma)");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MN", "Mongoli\u00EB");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MO", "Macau SAR van China");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MP", "Noordelijke Marianen");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MR", "Mauritani\u00EB");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MV", "Maldiven");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MY", "Maleisi\u00EB");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NA", "Namibi\u00EB");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NC", "Nieuw-Caledoni\u00EB");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NF", "Norfolk");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NL", "Nederland");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NO", "Noorwegen");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NZ", "Nieuw-Zeeland");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PF", "Frans-Polynesi\u00EB");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PG", "Papoea-Nieuw-Guinea");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PH", "Filipijnen");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PL", "Polen");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PM", "Saint-Pierre en Miquelon");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PN", "Pitcairneilanden");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PS", "Palestijnse gebieden");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("QO", "overig Oceani\u00EB");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("RO", "Roemeni\u00EB");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("RS", "Servi\u00EB");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("RU", "Rusland");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SA", "Saoedi-Arabi\u00EB");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SB", "Salomonseilanden");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SC", "Seychellen");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SD", "Soedan");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SE", "Zweden");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SH", "Sint-Helena");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SI", "Sloveni\u00EB");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SJ", "Spitsbergen en Jan Mayen");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SK", "Slowakije");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SO", "Somali\u00EB");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SS", "Zuid-Soedan");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ST", "Sao Tom\u00E9 en Principe");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SX", "Sint-Maarten");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SY", "Syri\u00EB");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TC", "Turks- en Caicoseilanden");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TD", "Tsjaad");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TF", "Franse Gebieden in de zuidelijke Indische Oceaan");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TJ", "Tadzjikistan");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TL", "Oost-Timor");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TN", "Tunesi\u00EB");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TR", "Turkije");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TT", "Trinidad en Tobago");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("UA", "Oekra\u00EFne");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("UG", "Oeganda");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("UM", "Kleine afgelegen eilanden van de Verenigde Staten");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("UN", "Verenigde Naties");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("US", "Verenigde Staten");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("UZ", "Oezbekistan");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("VA", "Vaticaanstad");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("VC", "Saint Vincent en de Grenadines");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("VG", "Britse Maagdeneilanden");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("VI", "Amerikaanse Maagdeneilanden");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("WF", "Wallis en Futuna");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("YE", "Jemen");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ZA", "Zuid-Afrika");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ZZ", "onbekend gebied");
 }
 
 static $clinit() {
  LocalizedNamesImpl__nl.$clinit = () =>{};
  LocalizedNamesImpl__nl.$loadModules();
  LocalizedNamesImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LocalizedNamesImpl__nl;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(LocalizedNamesImpl__nl, 'org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_nl');

exports = LocalizedNamesImpl__nl; 
//# sourceMappingURL=LocalizedNamesImpl_nl.js.map