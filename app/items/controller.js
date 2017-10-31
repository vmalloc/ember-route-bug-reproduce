import Ember from 'ember';

export default Ember.Controller.extend({

  page: 1,
  search: "",


  clear_page: Ember.observer('search', function() {
    this.set('page', 1);
  }),

  actions: {
    increment() {
      this.incrementProperty('page');
    },
  },
});
