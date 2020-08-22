({
  activeButton: function (component, event) {
    console.log("starwarsFormHelper.js activeButton");
    component.set("v.isButtonActive", false);

    if (
      component.get("v.newCharacter.Gender__c") == "n/a" ||
      component.get("v.newCharacter.Gender__c") == "none"
    ) {
      component.set("v.newCharacter.Gender__c", "");
      component.find("swformgender").set("v.disabled", false);
      component.set("v.isButtonActive", true);
    } else {
      component.find("swformgender").set("v.disabled", true);
    }

    if (
      component.get("v.newCharacter.Hair_Color__c") == "n/a" ||
      component.get("v.newCharacter.Hair_Color__c") == "none"
    ) {
      component.set("v.newCharacter.Hair_Color__c", "");
      component.find("swformhaircolor").set("v.disabled", false);
      component.set("v.isButtonActive", true);
    } else {
      component.find("swformhaircolor").set("v.disabled", true);
    }
    if (
      component.get("v.newCharacter.Eye_Color__c") == "n/a" ||
      component.get("v.newCharacter.Eye_Color__c") == "none"
    ) {
      component.set("v.newCharacter.Eye_Color__c", "");
      component.find("swformeyecolor").set("v.disabled", false);
      component.set("v.isButtonActive", true);
    } else {
      component.find("swformeyecolor").set("v.disabled", true);
    }
  },

  createCharacter: function (component, swcharacter) {
    console.log("starwarsFormHelper.js createCharacter");

    // Can't test Toast in App preview
    /*
      if (swcharacter) {
        const toastEvent = $A.get('e.force:showToast');
        toastEvent.setParams({
          title: 'Success!',
          type: 'success',
          message: 'Starwars character created successfully',
        });
      } else {
        const toastEvent = $A.get('e.force:showToast');
        toastEvent.setParams({
          title: 'Error',
          type: 'error',
          message: 'Starwars character could not be created',
        });
      }
      */
    var createEvent = component.getEvent("createCharacter");
    createEvent.setParams({ swcharacter: swcharacter });
    createEvent.fire();
  }
});
