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
    this.jobs.push(new this.Job(position, company, source));
    //adds new job into jobList
    //applied and applicationStatus automatically set to false and not submitted respectively
  },

  toggleApplied: function(position, company) {
    for (var i = 0; i < this.jobs.length; i++) {
      if (this.jobs[i].position === position && this.jobs[i].company === company) {
        if (this.jobs[i].applied === false) {
          this.jobs[i].applied = true;
          this.jobs[i].applicationStatus = 'Pending';
        } else {
          this.jobs[i].applied = false;
          this.jobs[i].applicationStatus = 'Not submitted';
        }
      }
    }
    //takes from jobs, sets applied to true, status to submitted and pushes to appliedJobs
    //takes from applied, sets applied to false, status to unsubmitted pushes to jobs
  },

  companyComms: function(position, company) {
    //changes application status from submitted to rejected, interview extended, or offer received
  },

  toggleAll: function() {
    for (var i = 0; i < this.jobs.length; i++) {
      if (this.jobs[i].applied === false) {
        this.jobs[i].applied = true;
        this.jobs[i].applicationStatus = 'Pending';
      } else {
        this.jobs[i].applied = false;
        this.jobs[i].applicationStatus = 'Not submitted';
      }
    }
    //sets all as applied or all as not applied, pending or not submitted
  },

  removeJob: function(position, company) {
    var index;
    for (var i = 0; i < this.jobs.length; i++) {
      if (this.jobs[i].position === position && this.jobs[i].company === company) {
          index = i;
      }
    }
    this.jobs.splice(index, 1);
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
    //sets model on page load
  },

  setView: function (view) {
    //sets view on page load
  },

  displayJobs: function() {
    //calls jobViewer.displayJobs();
  },

  addJob: function (position, company, source) {
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
  handlers.setModel(model);
  handlers.setView(view);
}

// document.addEventListener('DOMContentLoaded', function() {
//   initialize();
// });

