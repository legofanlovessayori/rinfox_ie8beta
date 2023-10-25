// Rinfox Status Bar by florin

window.addEventListener("load", function() {
  const statusBar = document.createElement('div');
  statusBar.id = 'status-bar';

  const newElementDiv = document.createElement('div');
  const newElementButton = document.createElement('toolbarbutton');

  newElementDiv.classList.add('internet-options');
  newElementDiv.title = "Double-click to see page security settings";
  newElementButton.classList.add('zoom-button');
  newElementButton.title = "Change zoom level";

// Make Internet Options open Page Info
  newElementDiv.addEventListener('dblclick', function() {
  BrowserPageInfo();
});

 
  const securityButton = document.createElement('toolbarbutton');
  securityButton.classList.add('security-button');
  securityButton.title = "InPrivate Filtering";
  securityButton.style.filter = 'saturate(0)'; // Security is B/W initially

  // When clicked it turns back into color and back to B/W when clicked again
  securityButton.addEventListener('click', function() {
    if (securityButton.style.filter === 'none') {
      securityButton.style.filter = 'saturate(0)';
    } else {
      securityButton.style.filter = 'none';
    }
  });

  const securitySeparator = document.createElement('div');
  securitySeparator.classList.add('security-separator');

  let currentZoomLevel = 100;

  // Zoom-in function for zoom-button
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

  const cornerIcon = document.createElement('div');
  cornerIcon.classList.add('corner-icon');
  statusBar.insertBefore(cornerIcon, newElementButton.nextSibling);

  for (let i = 0; i < 7; i++) {
    const separators = document.createElement('div');
    separators.classList.add(`separator-${i + 1}`);
    statusBar.insertBefore(separators, newElementDiv);
  }

  const doneText = document.createElement('div');
  doneText.classList.add('doneText');
  doneText.textContent = 'Done';
  statusBar.appendChild(doneText);

  document.body.appendChild(statusBar);

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
