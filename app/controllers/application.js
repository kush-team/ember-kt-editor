import Ember from 'ember';

export default Ember.Controller.extend({
	isShowMenu: false,

  actions:{
		openModal: function(name) {
	      $('.ui.modal').modal('show');
	    },
	    toggleMenu: function () {
			this.toggleProperty('isShowMenu');
		},
	},
});
