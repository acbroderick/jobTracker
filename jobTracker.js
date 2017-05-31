var model = {

  jobRecord: {
    position: '';
    company: '';
    source: '';
    applied: false,
    applicationStatus: 'not submitted'
  },

  jobsList: {},

  appliedJobs: {},

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
  }

  removeJob: function() {
    //removes job from jobList
  }

};

var view = {

  jobViewer: {

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
  }

};

var controller = {

  model: {},

  view: {},

  setModel: function (model) {
    //sets model on page load
  },

  setView: function (view) {
    //sets view on page load
  },

  displayJobs: function() {
    //calls jobViewer.displayJobs();
  },

  addJob: function () {
    //calls JobList.addJob();
   //calls jobViewer.disaplyJob();
  },

  toggleApplied: function(job) {
    //calls JobList.toggleApplied();
  },
  companyComms: function (job){
    //calls JobList.companyComms();
  },

  removeJob: function (job) {
    //calls jobList.removeJob();
    //calls jobViewer.displayJob();
  }


};

//

var initialize = function() {
  controller.setModel(model);
  controlled.setView(view);
}

document.addEventListener('DOMContentLoaded', function() {
  initialize();
});

