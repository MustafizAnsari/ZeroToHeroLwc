public with sharing class FieldSetController 
{
    @AuraEnabled(Cacheable=true)
    public static String getFieldSet(String fieldSetName, String objectName)
    {
        List<Map<String,Object>> fields = New List<Map<String,Object>>();
       for(Schema.FieldSetMember field :
                        Schema.getGlobalDescribe().get(objectName).getDescribe().fieldSets.getMap().get(fieldSetName).getFields())
       {
            Map<String,Object> fieldData = New Map<String,Object>();
            fieldData.put('APIName',field.getFieldPath());
            fieldData.put('Label', field.getLabel());
            fields.Add(fieldData);
       }
       return JSON.serialize(fields);
    }
}