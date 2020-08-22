({
    searchCharacter: function(component, event, helper) {
        const swformid = component.find('swformid').get("v.value");
        const action = component.get("c.makeAPICall");
        
        action.setParams({
            "swid": swformid
        });
        
        action.setCallback(this, function(response) {
			const res = response.getReturnValue();
            if(response.getState() === "SUCCESS") {
                console.log("response SUCCESS");
                console.log(res);
                component.set("v.newCharacter.Name__c",res.name);
                component.set("v.newCharacter.Height__c",res.height);
                component.set("v.newCharacter.Gender__c",res.gender);
                component.set("v.newCharacter.Hair_Color__c",res.hair_color);
                component.set("v.newCharacter.Eye_Color__c",res.eye_color);
                component.set("v.newCharacter.URL__c",res.url);
                component.set("v.newCharacter.Homeworld__c",res.homeworld);
                helper.activeButton(component,event);
            } else {
                console.log("response ERROR");
            }
        });
        $A.enqueueAction(action);
    },
    
    clickCreateCharacter: function(component, event, helper) {
        const validCharacter = component.find('swformid');
        if(validCharacter){
            // Create Starwars Character
            var newCharacter = component.get("v.newCharacter");
            console.log("Create Starwars Character: " + JSON.stringify(newCharacter));
            helper.createCharacter(component, newCharacter);
            component.set("v.newCharacter", {
                'sobjectType': 'SWCharacter__c',
                'Name__c': '',
                'Height__c': 0,
                'Gender__c': '',
                'Hair_Color__c': '',
                'Eye_Color__c': '',
                'URL__c': '',
                'Homeworld__c': ''
            });
        }
    },
    
    handleChange: function(component, event, helper) {
        const validgender = component.find('swformgender').get('v.value');
        const validhaircolor = component.find('swformhaircolor').get('v.value');
        const valideyecolor = component.find('swformeyecolor').get('v.value');
        
        if(validgender && validhaircolor && valideyecolor){
            component.set('v.isButtonActive',false);
        } else {
            component.set('v.isButtonActive',true);
        }
    }
})