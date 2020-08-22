public with sharing class StarwarsController {
    
    @AuraEnabled
    public static Map<String, Object> makeAPICall(String swid) {
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint('https://swapi.dev/api/people/' + swid + '/');
        request.setMethod('GET');
		request.setHeader('Accept', 'application/json');
        HttpResponse response = http.send(request);
        String responseBody = response.getBody();
        
        System.debug('Status code -->' + response.getStatusCode());
        System.debug('Body -->' + responseBody);
        System.debug('Header -->' + response.getHeader('Content-Type'));

        Map<String, Object> swResults = (Map<String, Object>) JSON.deserializeUntyped(responseBody);
                
        System.debug('swResults -->' + swResults);
        
        return swResults;
    }
    
    @AuraEnabled
    public static List<SWCharacter__c> getCharacter() {
        return [SELECT ID__c, Name__c, Height__c, Gender__c, Hair_Color__c, Eye_Color__c, URL__c, Homeworld__c FROM SWCharacter__c];
    }
    
    @AuraEnabled
    public static SWCharacter__c saveCharacter(SWCharacter__c character) {
        upsert character;
        return character;
    }

}