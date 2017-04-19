import Ember from 'ember';

export default Ember.Controller.extend({
	myMessage: '',
	emailAddress: '',
	isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
	isNotValid: Ember.computed.not('isValid'),
	isMessageEmpty: Ember.computed.empty('myMessage'),
	isDisabled: Ember.computed.or('isNotValid', 'isMessageEmpty'),


    actions: {
      saveMessage() {

      	const email= this.get('emailAddress');
      	const message = this.get('myMessage');

      	const newContact = this.store.createRecord('contact', {emailAddress: email, myMessage: message} );
      	newContact.save();

      alert(`Saving of the following message is in progress: ${this.get('myMessage')}`);

      this.set('responseMessage', `Thank you! We've just saved your message: ${this.get('myMessage')}`);
      this.set('myMessage', '');
    }
  }
});
