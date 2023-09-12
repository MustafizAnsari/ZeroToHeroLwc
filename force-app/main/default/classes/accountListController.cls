public with sharing class accountListController 
{
    @AuraEnabled(cacheable=true)
    public Static List<Account> getRecentAccounts()
    {
        return [SELECT Id, Name FROM Account ORDER BY CreatedDate DESC LIMIT 10];
    }
    
}