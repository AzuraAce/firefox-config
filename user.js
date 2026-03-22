// dont show search engine icon in address bar
user_pref("browser.urlbar.scotchBonnet.enableOverride", false);
// make scrolling faster
user_pref("mousewheel.default.delta_multiplier_y", 500);
// disable mozilla's smooth scrolling
user_pref("general.smoothScroll", false);
// dont show boomarks unless invoked (Ctrl-b)
user_pref("browser.toolbars.bookmarks.visibility", "never");
// disable website translation
user_pref("browser.translations.enable", false);
// block AI features
user_pref("browser.ai.control.default", "blocked");
// disable search suggestions
user_pref("browser.urlbar.suggest.bookmark", false);
user_pref("browser.urlbar.suggest.engines", false);
user_pref("browser.urlbar.suggest.history", false);
user_pref("browser.urlbar.suggest.openpage", false);
user_pref("browser.urlbar.suggest.quickactions", false);
user_pref("browser.urlbar.suggest.recentsearches", false);
user_pref("browser.urlbar.suggest.topsites", false);
// disable reader mode
user_pref("reader.parse-on-load.enabled", false);
// disable firefox screenshots
user_pref("extensions.screenshots.disabled", true);
// disable auto-fills
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.creditCards.enabled", false);
// ask before closing
user_pref("browser.tabs.warnOnClose", true);
// compact mode
user_pref("browser.compactmode.show", true);
user_pref("browser.uidensity", 1);
// mac os style scrollbar
user_pref("widget.non-native-theme.scrollbar.style", 1);
// disable bouncy animation when scrolling to top of website
user_pref("apz.overscroll.enabled", false);
// dont close firefox when closing last tab
user_pref("browser.tabs.closeWindowWithLastTab", false);
