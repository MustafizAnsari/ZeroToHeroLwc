public with sharing class AccountController {
   public string accountId{get;set;}
   public Account actObj{get;set;}
    public AccountController() 
    {
          actObj = new Account();
    }
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts()
    {
        return[Select id,Name,type,phone,industry from account Limit 10];
    }

    @AuraEnabled
    public static List<Account> getAccountsRecordsList(){
        return[Select id,name,type,phone,industry from Account Limit 10];
    }
    public pageReference retriveAccountDetails()
    {
       if(accountId != null)
       {
        actObj = [select id,name,type,phone,industry from account where id=: accountId];
       }
       return null;
    }
}