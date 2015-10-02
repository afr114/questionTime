import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      questions: this.store.findAll('question'),
      answers: this.store.findAll('answer')
    });
   },

  actions:{
    saveQuestion(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    },

    destroyQuestion(question) {
      if (confirm('Are you sure you want to delete this vendor')) {
      question.get('answers').forEach(function(answer) {
        answer.destroyRecord();
      });
      question.destroyRecord();
      this.transitionTo('index');
      }
    }
  }
});
