// Rinfox Status Bar by florin

window.addEventListener("load", function() {
  var statusBar = document.getElementById('addonbar');
  statusBar.id = 'status-bar';

  const newElementDiv = document.createXULElement('div');
  const newElementButton = document.createXULElement('customtoolbarbutton');

  newElementDiv.classList.add('internet-options');
  newElementDiv.setAttribute('tooltiptext', 'Double-click to see page security settings');
  newElementButton.classList.add('zoom-button');
  newElementButton.setAttribute('tooltiptext', 'Change zoom level');

  newElementDiv.addEventListener('dblclick', function() {
    BrowserPageInfo();
  });

  const securityButton = document.createXULElement('customtoolbarbutton');
  securityButton.classList.add('security-button');
  securityButton.setAttribute('tooltiptext', 'InPrivate Filtering');
  securityButton.style.filter = 'saturate(0)';

  securityButton.addEventListener('click', function() {
    if (securityButton.style.filter === 'none') {
      securityButton.style.filter = 'saturate(0)';
    } else {
      securityButton.style.filter = 'none';
    }
  });

  const securitySeparator = document.createXULElement('div');
  securitySeparator.classList.add('security-separator');

  let currentZoomLevel = 100;

  function updateButtonText() {
    newElementButton.textContent = `${currentZoomLevel}%`;
  }

  FullZoom.reduce();
  updateButtonText();

  newElementButton.addEventListener('click', function() {
    if (currentZoomLevel === 100) {
      FullZoom.enlarge();
      currentZoomLevel = 125;
    } else if (currentZoomLevel === 125) {
      FullZoom.enlarge();
      currentZoomLevel = 150;
    } else {
      FullZoom.reduce();
      FullZoom.reduce();
      currentZoomLevel = 100;
    }
    updateButtonText();
  });

  statusBar.appendChild(newElementDiv);
  statusBar.appendChild(securityButton);
  statusBar.appendChild(securitySeparator);
  statusBar.appendChild(newElementButton);

  const cornerIcon = document.createXULElement('div');
  cornerIcon.classList.add('corner-icon');
  statusBar.insertBefore(cornerIcon, newElementButton.nextSibling);

  for (let i = 0; i < 7; i++) {
    const separators = document.createXULElement('div');
    separators.classList.add(`separator-${i + 1}`);
    statusBar.insertBefore(separators, newElementDiv);
  }

  const doneText = document.createXULElement('div');
  doneText.classList.add('doneText');
  doneText.textContent = 'Done';

  statusBar.appendChild(doneText);

  // Add Done after all Status Panels have shown when loading the page
  function updateDoneTextVisibility() {
    const statusPanel = document.querySelector('#statuspanel[type="defaultStatus"][previoustype="status"]');

    if (statusPanel && statusPanel.hasAttribute('inactive')) {
      doneText.style.display = 'block';
    } else {
      doneText.style.display = 'none';
    }
  }

  updateDoneTextVisibility();

  // Event listener for changes in the statuspanel elements
  document.body.addEventListener('DOMSubtreeModified', updateDoneTextVisibility);


});
