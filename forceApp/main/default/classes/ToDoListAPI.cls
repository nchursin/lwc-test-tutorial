public with sharing class ToDoListAPI {

    @AuraEnabled
    public static List<ToDoListItem> getToDoList() {
     
        return new List<ToDoListItem> {
            new ToDoListItem('123', 'Homework', 1, true),
            new ToDoListItem('143', 'Go for a walk', 2, true),
            new ToDoListItem('163', 'Feed the dog', 3, false),
            new ToDoListItem('244', 'Watch a movie', 4, false),
            new ToDoListItem('876', 'Do nothing', 5, false)
        };
    }

    public class ToDoListItem {
        @AuraEnabled
        public String id;

        @AuraEnabled
        public String title;

        @AuraEnabled
        public Integer order;

        @AuraEnabled
        public Boolean completed;

        public ToDoListItem(String id, String title, Integer order, Boolean completed) {
            this.id = id;
            this.title = title;
            this.order = order;
            this.completed = completed;
        }
    }
}
