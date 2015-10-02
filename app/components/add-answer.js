import Ember from 'ember';

export default Ember.Component.extend({
addNewAnswer: false,
actions: {
  showAnswerForm() {
    this.set('addNewAnswer', true);
  },
  closeAnswerForm() {
    this.set('addNewAnswer', false);
  },

  saveAnswer() {
    var params = {
      content: this.get('content'),
      username: this.get('username'),
      question: this.get('question'),
      date_added: Date.now()
    };
  this.sendAction('saveAnswer', params);
  this.set('addNewAnswer', false);
    }
  }
});
