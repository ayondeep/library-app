import Ember from 'ember';

export default Ember.Controller.extend({
	myMessage: '',

	  actions: {

    saveMessage() {
      alert(`Saving of the following message is in progress: ${this.get('myMessage')}`);
      this.set('responseMessage', `Thank you! We've just saved your message: ${this.get('myMessage')}`);
      this.set('myMessage', '');
    }
  }
});
