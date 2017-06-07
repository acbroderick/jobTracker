var jobViewer = {

    displayJobs: function() {
      var jobsOL = document.getElementById('jobs');
      jobsOL.innerHTML = '';
      for (var key in jobsList.jobs) {
        var jobsUL = document.createElement('ul');
        jobsOL.appendChild(jobsUL);
        jobsOL.appendChild(this.createRemoveButton());
          for (var prop in jobsList.jobs[key]) {
            var jobsLI = document.createElement('li');
            jobsUL.appendChild(jobsLI).innerHTML = prop + ": " + jobsList.jobs[key][prop];
        }
      }
      console.log(jobsList.jobs);
      //creates ul and populates it with jobs from jobList
    },

    strinfigyJob: function(position, company) {
      JSON.stringify()
      //returns stringified version of job
    },

    createRemoveButton: function() {
      //create apply button
      var removeButton = document.createElement('button');
        removeButton.addEventListener('click', function () {
          jobsList.removeJob();
        })
      removeButton.innerHTML = 'Remove Job';
      return removeButton;
    },

    createCompanyCommsButton: function() {
      //create company comms button
    },

    setUpEventListeners: function() {
      //connects onclick events to buttons according to their class.
    }

};