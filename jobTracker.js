var controller: {
  model: {},
  view: {},
  addNew: function(newJob) {
    model.jobs[model.currentKey] = newJob;
    model.currentKey++
  }
}