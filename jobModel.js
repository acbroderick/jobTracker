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
            this.jobs[key].applicationStatus = 'Not submitted';
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
            this.jobs[key].applicationStatus = 'Not submitted';
          }
      }
    //sets all as applied or all as not applied
  },

  removeJob: function() {
    for (var key in this.jobs) {
      delete this.jobs[key];
    }
  //removes job from jobList
  }

}