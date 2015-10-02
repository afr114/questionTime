import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,

  actions: {
    showQuestionForm() {
      this.set('addNewQuestion', true);
    },
    closeQuestionForm() {
      this.set('addNewQuestion', false);
    },

    saveQuestion() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        note: this.get('note'),
      };
      if(params.title == undefined || params.title == "") {
        alert ("Please input a valid question");
        this.transitionTo('index');
      }
      if (params.author == undefined) {
        params.author = "Anonymous"
      }
      if (params.note == undefined) {
        params.note = ""
      }
    this.sendAction('saveQuestion', params);
    this.set('addNewQuestion', false);
    }
  }
});
