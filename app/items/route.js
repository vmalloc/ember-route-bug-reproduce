import Ember from 'ember';
import Route from '@ember/routing/route';

export default Route.extend({
  queryParams: {
    search: {
      refreshModel: true,
    },
    page: {
      refreshModel: true,
    }

  },
  model(params) {
    return Ember.Object.create({page: params.page, search: params.search});
  },
});
