import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr(),
  username: DS.attr(),
  question: DS.belongsTo('question', {async:true}),
});
