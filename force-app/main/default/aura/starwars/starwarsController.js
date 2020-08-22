({
    doInit: function (component, event, helper) {
      // Create the action, instructions to call the Apex controller method getCharacter()
      var action = component.get('c.getCharacter');
  
      // Add callback behavior for when response is received; a property of 'action'
      action.setCallback(this, function (response) {
        var state = response.getState();
        if (component.isValid() && state === 'SUCCESS') {
          component.set('v.swcharacters', response.getReturnValue());
        } else {
          console.log('Failed with state: ' + state);
        }
      });
  
      // Send action off to be executed
      $A.enqueueAction(action);
    },
  
    handleCreateCharacter: function (component, event, helper) {
      var newCharacter = event.getParam('swcharacter');
      helper.createCharacter(component, newCharacter);
    },
  
    handleUpdateCharacter: function (component, event, helper) {
      var updatedCharacter = event.getParam('swcharacter');
      helper.updateCharacter(component, updatedCharacter);
    },
  });