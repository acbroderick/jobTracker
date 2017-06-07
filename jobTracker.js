//model

var jobsList = {

  jobs: {},
  jobID: 0,

   Job: function(position, company, source) {
    this.position = position;
    this.company = company;
    this.source = source;
    this.applied = false;
    this.applicationStatus = 'Not submitted';
  },

  addJob: function(position, company, source) {
    this.jobs[this.jobID] = new this.Job(position, company, source);
    this.jobID++
    //adds new job into jobList
    //applied and applicationStatus automatically set to false and not submitted respectively
  },

  toggleApplied: function(position, company) {
    for (var key in this.jobs) {
      if(this.jobs[key].position === position && this.jobs[key].company === company) {
        this.jobs[key].applied = !this.jobs[key].applied;
          if(this.jobs[key].applicationStatus === 'Not submitted') {
            this.jobs[key].applicationStatus = 'Pending';
          }  else {
            this.jobs[key].applicationStatus = 'Not Submitted';
          }
      }
    }
    //takes from jobList, sets applied to true, status to submitted and pushes to appliedJobs
    //takes from applied, sets applied to false, status to unsubmitted and assigns to jobsList
  },

  companyComms: function(position, company, comm) {
    for (var key in this.jobs) {
      if(this.jobs[key].position === position && this.jobs[key].company === company) {
        this.jobs[key].applicationStatus = comm
      }
    }
    //changes application status from submitted to rejected, interview extended, or offer received
  },

  toggleAll: function() {
     for (var key in this.jobs) {
      this.jobs[key].applied = !this.jobs[key].applied;
           if(this.jobs[key].applicationStatus === 'Not submitted') {
            this.jobs[key].applicationStatus = 'Pending';
          }  else {
            this.jobs[key].applicationStatus = 'Not Submitted';
          }
      }
    //sets all as applied or all as not applied
  },

  removeJob: function() {
    for (var key in this.jobs) {
      if(this.jobs[key].position === position && this.jobs[key].company === company) {
        delete this.jobs[key];
      }
    }
  //removes job from jobList
  };
}
//view

var jobViewer = {

    displayJobs: function() {
      console.log(this.jobs);
      //creates ul and populates it with jobs from jobList
    },

    strinfigyJob: function(position, company) {
      JSON.stringify()
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

// var initialize = function() {
//   handlers.setModel(model);
//   handlers.setView(view);
// }

// document.addEventListener('DOMContentLoaded', function() {
//   initialize();
// });

