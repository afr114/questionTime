import Ember from 'ember';

export default Ember.Component.extend({
updateAnswerForm: false,

actions: {
  showUpdateAnswerForm() {
    this.set('updateAnswerForm', true);
  },
  closeUpdateAnswerForm() {
    this.set('updateAnswerForm', false);
  },

  updateAnswer(answer) {
    var params = {
      content: this.get('content'),
      username: this.get('username'),
    };
  this.sendAction('updateAnswer', answer, params);
  this.set('updateAnswerForm', false);
    }
  }
});
