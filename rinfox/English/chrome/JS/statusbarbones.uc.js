var appversion = parseInt(Services.appinfo.version);

var compact_buttons = false; // reduced toolbar height and smaller buttons

var AddAddonbar = {
  init: function() {

	if (location != 'chrome://browser/content/browser.xhtml')
      return;
	  
	/* blank tab workaround */
	try {
	  if(gBrowser.selectedBrowser.getAttribute('blank')) gBrowser.selectedBrowser.removeAttribute('blank');
	} catch(e) {}
	
	try {
	  Services.prefs.getDefaultBranch('browser.addonbar.').setBoolPref('enabled',true);
	} catch(e) {}

	var addonbar_label = 'Add-on Bar';
	var compact_buttons_code = '';
	
	if(compact_buttons)
	  compact_buttons_code = `
		#addonbar toolbarbutton .toolbarbutton-icon {
		  padding: 0 !important;
		  width: 16px !important;
		  height: 16px !important;
		}
		#addonbar .toolbarbutton-badge-stack {
		  padding: 0 !important;
		  margin: 0 !important;
		  width: 16px !important;
		  min-width: 16px !important;
		  height: 16px !important;
		  min-height: 16px !important;
		}
		#addonbar toolbarbutton .toolbarbutton-badge {
		  margin-top: 0px !important;
		  font-size: 5pt !important;
		  min-width: unset !important;
		  min-height: unset !important;
		  margin-inline-start: 0px !important;
		  margin-inline-end: 0px !important;
		}
		#addonbar .toolbaritem-combined-buttons {
		  margin-inline: 0px !important;
		}
		#addonbar toolbarbutton {
		  padding: 0 !important;
		}
	  `;

	// style sheet
	Components.classes['@mozilla.org/content/style-sheet-service;1'].getService(Components.interfaces.nsIStyleSheetService).loadAndRegisterSheet(
	  Services.io.newURI('data:text/css;charset=utf-8,' + encodeURIComponent(`
		  }*/
		  `+compact_buttons_code+`
	  `), null, null),
	  Components.classes['@mozilla.org/content/style-sheet-service;1'].getService(Components.interfaces.nsIStyleSheetService).AGENT_SHEET
	);


	// toolbar
	try {
	  if(document.getElementById('addonbar') == null) {
		var tb_addonbar = document.createXULElement('toolbar');
		tb_addonbar.setAttribute('id','addonbar');
		tb_addonbar.setAttribute('collapsed', 'false');
		tb_addonbar.setAttribute('toolbarname', addonbar_label);
		tb_addonbar.setAttribute('defaultset','spring,spring'); 
		tb_addonbar.setAttribute('customizable','true');
		tb_addonbar.setAttribute('mode','icons');
		tb_addonbar.setAttribute('iconsize','small');
		tb_addonbar.setAttribute('context','toolbar-context-menu');
		tb_addonbar.setAttribute('lockiconsize','true');
		tb_addonbar.setAttribute('class','toolbar-primary chromeclass-toolbar browser-toolbar customization-target');

		document.getElementById('browser').parentNode.appendChild(tb_addonbar);
		
		CustomizableUI.registerArea('addonbar', {legacy: true});
	  
		CustomizableUI.registerToolbarNode(tb_addonbar);
		
		// 'Ctr + /' on Windows/Linux or 'Cmd + /' on macOS to toggle add-on bar
		var key = document.createXULElement('key');
		key.id = 'key_toggleAddonBar';
		key.setAttribute('key', '/');
		key.setAttribute('modifiers', 'accel');
		key.setAttribute('oncommand',`
			var newAddonBar = document.getElementById('addonbar');
			setToolbarVisibility(newAddonBar, newAddonBar.collapsed);
			Services.prefs.getBranch('browser.addonbar.').setBoolPref('enabled',!newAddonBar.collapsed);
		  `);
		document.getElementById('mainKeyset').appendChild(key);
		
		
		try {
		  setToolbarVisibility(document.getElementById('addonbar'), Services.prefs.getBranch('browser.addonbar.').getBoolPref('enabled'));
		} catch(e) {}
	  
	  }
	} catch(e) {}

  }

}

/* initialization delay workaround */
document.addEventListener('DOMContentLoaded', AddAddonbar.init(), false);
