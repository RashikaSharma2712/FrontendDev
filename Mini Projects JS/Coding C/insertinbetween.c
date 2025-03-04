#include<stdio.h>
#include<stdlib.h>
struct  Node {
int data;
struct Node*next;
};

void linkedlistTraversal(struct Node *ptr)
{
while (  ptr !=    NULL)
{
printf("Element : %d \n" , ptr->data);
ptr = ptr->next;
    }
} 
 //  function to insert in between
struct Node* insertInBetween(struct Node *head , int data , int index)
struct Node ptr* =(struct Node)malloc(sizeof(struct Node))
    struct Node *p = head;

int i = 0;
    while(i != index - 1 ){ 
    p -> next;
    i=++;
ptr -> data = data;
ptr ->next = ptr->next;
ptr ->next = ptr;
return head;


int main(){
struct Node *head;
struct Node *second;
struct Node *third;
struct Node *fourth;

    head = (struct Node *)malloc(sizeof(struct Node));
    second = (struct Node *)malloc(sizeof(struct Node));
    third =  (struct Node *)malloc(sizeof(struct Node));
    fourth = (struct Node *)malloc(sizeof(struct Node));

        head -> data = 7;
        head ->next = second;

        second -> data = 14;
        second->next = third;


        third -> data = 45;
        third ->next = fourth;


        fourth -> data = 90;
        fourth->next =  NULL;

    linkedlistTraversal(head);
    head = insertInBetween( head,56,2);
    linkedlistTraversal(head);

    return 0;
}