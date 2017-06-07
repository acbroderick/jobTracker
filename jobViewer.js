var jobViewer = {

    displayJobs: function() {
      var jobsOL = document.getElementById('jobs');
      jobsOL.innerHTML = '';
      for (var key in jobsList.jobs) {
        var jobsUL = document.createElement('ul');
        jobsOL.appendChild(jobsUL);
        jobsOL.appendChild(this.createRemoveButton());
        jobsOL.appendChild(this.createToggleButton());
        jobsUL.id = key;
        for (var prop in jobsList.jobs[key]) {
          var jobsLI = document.createElement('li');
          jobsUL.appendChild(jobsLI).innerHTML = prop[0].toUpperCase() + prop.slice(1, prop.length) + ": " + jobsList.jobs[key][prop];
        }
      }

      //creates ul and populates it with jobs from jobList
    },

    createRemoveButton: function() {
      //create apply button
      var removeButton = document.createElement('button');
      removeButton.textContent = 'Remove Job';
      removeButton.className = 'removeButton';
      return removeButton;
    },

    createToggleButton: function() {
      var toggleButton = document.createElement('button');
      toggleButton.textContent = 'Toggle Applied';
      toggleButton.className = 'toggleButton';
      return toggleButton;
    },

    setUpEventListeners: function() {
      var jobsOL = document.getElementById('jobs');

      jobsOL.addEventListener('click', function(event) {
        var elementClicked = event.target;
        if (elementClicked.className === 'removeButton') {
          var position = elementClicked.parentNode.children[0].id;
            jobController.removeJob(position);
          }
      });

      jobsOL.addEventListener('click', function(event) {
        var elementClicked = event.target;
        console.log(elementClicked)
          if (elementClicked.className === 'toggleButton') {
            var position = elementClicked.parentNode.children[0].id;
            console.log(position);
            jobController.toggleApplied(position);
        }
      });
    }
}










