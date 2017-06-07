var jobController = {

  model: {},

  view: {},

  setModel: function (model) {
    this.model = model;
    //sets model on page load
  },

  setView: function (view) {
    this.view = view;
    //sets view on page load
  },

  displayJobs: function() {
    jobViewer.displayJobs();
    //calls jobViewer.displayJobs();
  },

  addJob: function () {
    var addNewButton = document.getElementById('add');
    var addForm = document.getElementById('addForm')
    var positionInput = addForm.elements[0].value;
    var companyInput = addForm.elements[1].value;
    var sourceInput = addForm.elements[2].value;

      jobsList.addJob(positionInput, companyInput, sourceInput);


      positionInput = addForm.elements[0].value = '';
      companyInput = addForm.elements[1].value = '';
      sourceInput = addForm.elements[2].value = '';

      jobViewer.displayJobs();

    //calls JobList.addJob();
    //calls jobViewer.disaplyJob();
  },

  toggleApplied: function(position, company) {
    var toggleButton = document.getElementById('toggle');
    var toggleForm = document.getElementById('toggleForm');
    var positionInput = toggleForm.elements[0].value;
    var companyInput = toggleForm.elements[1].value;

    jobsList.toggleApplied(positionInput, companyInput);

    positionInput = toggleForm.elements[0].value = '';
    companyInput = toggleForm.elements[1].value = '';

    jobViewer.displayJobs();
    //calls JobList.toggleApplied();
  },

  toggleAll: function() {
    jobsList.toggleAll();
    jobViewer.displayJobs();
    //valls JobsList.toggleAll();
  },

  companyComms: function (position, company, comm){
    var companyCommsButton = document.getElementById('addComm');
    var companyForm = document.getElementById('companyCommsForm');
    var positionInput = companyForm.elements[0].value;
    var companyInput = companyForm.elements[1].value;
    var commsInput = companyForm.elements[2].value;


    jobsList.companyComms(positionInput, companyInput, commsInput);

    positionInput = companyForm.elements[0].value = '';
    companyInput = companyForm.elements[1].value = '';
    commsInput = companyForm.elements[2].value = '';

    jobViewer.displayJobs();


    //calls JobList.companyComms();
  },

  removeJob: function () {
    jobsList.removeJob();
    jobsViewer.displayJobs();
  }

    // var removeButton = document.getElementById('remove');
    // var removeForm = document.getElementById('removeForm')
    // var positionInput = removeForm.elements[0].value;
    // var companyInput = removeForm.elements[1].value;

    //   jobsList.removeJob(positionInput, companyInput);

    //   positionInput = removeForm.elements[0].value = '';
    //   companyInput = removeForm.elements[1].value = '';

    //   jobViewer.displayJobs();
    //calls jobList.removeJob();
    //calls jobViewer.displayJob();



};
