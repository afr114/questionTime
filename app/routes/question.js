import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
    return this.store.findRecord('answer', params.answer_id);
  },

  actions: {
    update(question, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          question.set(key,params[key]);
        }
      });
      question.save();
      this.transitionTo('question');
    },

      saveAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        return question.save();
      });
      this.transitionTo('question', params.question);
    },

    destroyAnswer(answer) {
    if (confirm('Are you sure you want to delete this Answer?')) {
    answer.destroyRecord();
    this.transitionTo('question');
    }
  },

    updateAnswer(answer, params) {
    Object.keys(params).forEach(function(key) {
      if(params[key]!==undefined) {
        answer.set(key,params[key]);
      }
    });
    answer.save();
    this.transitionTo('question');
  },


  }
});
