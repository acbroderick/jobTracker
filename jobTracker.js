//model

var jobsList = {

  jobs: [],

   Job: function(position, company, source) {
    this.position = position;
    this.company = company;
    this.source = source;
    this.applied = false;
    this.applicationStatus = 'Not submitted';
  },

  addJob: function(position, company, source) {
    //adds new job into jobList
    //applied and applicationStatus automatically set to false and not submitted respectively
  },

  toggleApplied: function(job) {
    //takes from jobList, sets applied to true, status to submitted and pushes to appliedJobs
    //takes from applied, sets applied to false, status to unsubmitted and assigns to jobsList
  },

  companyComms: function(job) {
    //changes application status from submitted to rejected, interview extended, or offer received
  },

  toggleAll: function() {
    //sets all as applied or all as not applied
  },

  removeJob: function() {
    //removes job from jobList
  }

};

//view

var jobViewer = {

    displayJobs: function() {
      //creates ul and populates it with jobs from jobList
    },

    strinfigyJob: function(job) {
      //returns stringified version of job
    },

    createApplyButton: function() {
      //create apply button
    },

    createCompanyCommsButton: function() {
      //create company comms button
    },

    setUpEventListeners: function() {
      //connects onclick events to buttons according to their class.
    }

};

//controller

var handlers = {

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

  addJob: function (position, company, source) {
    jobsList.addJob(position, company, source);
    jobsViewer.displayJobs();
    //calls JobList.addJob();
    //calls jobViewer.disaplyJob();
  },

  toggleApplied: function(position, company) {
    jobsList.toggleApplied(position, company);
    //calls JobList.toggleApplied();
  },

  companyComms: function (position, company){
    //calls JobList.companyComms();
    jobsList.companyComms(position, company);
  },

  removeJob: function (position, company) {
    jobsList.removeJob(position, company);
    jobViewer.displayJobs();
    //calls jobList.removeJob();
    //calls jobViewer.displayJob();
  }


};

//

var initialize = function() {
  handlers.setModel(jobsList);
  handlers.setView(jobViewer);
}

initialize();
console.log(handlers);

// document.addEventListener('DOMContentLoaded', function() {
//   initialize();
// });

