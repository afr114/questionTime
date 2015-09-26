import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionInfo: false,

  actions: {
    showUpdateQuestionForm() {
      this.set('updateQuestionInfo', true);
    },
    closeUpdateQuestionForm() {
      this.set('updateQuestionInfo', false);
    },

    update(question) {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        note: this.get('note'),
      };
      this.set('updateQuestionInfo', false);
      this.sendAction('update', question, params)
    }
  }
});
