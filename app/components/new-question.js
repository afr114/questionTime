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
    this.sendAction('saveQuestion', params);
    this.set('addNewQuestion', false);
    }
  }
});
