({
    saveCharacter: function (component, character, callback) {
      console.log('starwarsHelper.js saveCharacter');
      var action = component.get('c.saveCharacter');
      action.setParams({
        character: character,
      });
      if (callback) {
        action.setCallback(this, callback);
      }
      $A.enqueueAction(action);
    },
  
    createCharacter: function (component, character) {
      console.log('starwarsHelper.js createCharacter');
      this.saveCharacter(component, character, function (response) {
        var state = response.getState();
        if (component.isValid() && state === 'SUCCESS') {
          var swcharacters = component.get('v.swcharacters');
          swcharacters.push(response.getReturnValue());
          component.set('v.swcharacters', swcharacters);
        }
      });
    },
  });