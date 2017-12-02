var initialize = function() {
  jobController.setModel(jobsList);
  jobController.setView(jobViewer);
  jobViewer.setUpEventListeners();
  console.log('initialization complete');
}

//test