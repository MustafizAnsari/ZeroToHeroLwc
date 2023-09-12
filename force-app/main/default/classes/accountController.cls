public with sharing class accountController 
{
   @AuraEnabled(cacheable=true)
   public static List<Account> getAccountList()
   {
       return [Select id,Name,Rating,Type,Industry from Account LIMIT 5];
   }

   @AuraEnabled(cacheable=true)
   public static List<Account> filterAccountByType(String Type)
   {
        return [SELECT Id,Name,Type FROM Account where Type=:Type LIMIT 5];
   }

   @AuraEnabled(cacheable=true)
   public static List<Account> findAccounts(String searchByKey)
   {
      String key = '%'+ searchByKey + '%';
         return [SELECT Id,Name,Type,Industry FROM Account WHERE Name LIKE :key LIMIT 6];
   }
}