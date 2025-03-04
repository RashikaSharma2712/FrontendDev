#include <stdio.h>  
#include <stdlib.h> // for  memory allocation
 
struct stack
{
    int size;// integer  to hold the siz of the array
    int top; // integer variable to hold the index of the  topmost element
    int *arr; // integer pointerto hold the addrress  of the array
};
  //functions to check whether these stacks are empty or full



int isEmpty(struct stack *ptr) // complexity -  O(1)
{
    if (ptr->top == -1) //  top = -1
    {
        return 1;// if it is empty
    }
    else
    {
        return 0;// if  it not empty
    }
}

 
int isFull(struct stack *ptr) //complexity -  O(1)
{
    if (ptr->top == ptr->size - 1) // top = size -1
    {
        return 1; // if it is full
    }
    else
    {
        return 0; // if it is not full
    }
}

  // Check if stack is empty
    if(isEmpty(s)){
        printf("The stack is empty");
    }
    else{
        printf("The stack is not empty");
    }

    // Pushing an element manually
    s->arr[0] = 7;
    s->top++;
    
    if(isEmpty(s)){ 
        printf("The stack is empty");
    }
    else{
        printf("The stack is not empty");
    }
    
//pushing an element into a stack needs you to first check if the stack is not full
//and then insert the element at the incremented value of the top
// popping  the stack needs to check  if the sack  is not empty
//and then insert the element at the incremented value of the top by 1
//complexity -  O(1)
    void push(struct stack* ptr, int val){
    if(isFull(ptr)){
        printf("Stack Overflow! Cannot push %d to the stack\n", val);
    }
    else{
        ptr->top++;
        ptr->arr[ptr->top] = val;
    }
}
//complexity -  O(1)
int pop(struct stack* ptr){
    if(isEmpty(ptr)){
         printf("Stack Underflow! Cannot pop from the stack\n");
            return -1;
    }
    else{
        int val = ptr->arr[ptr->top];
            ptr->top--;
             return val;
    }

}
//complexity -  O(1)
int peek(struct stack* sp, int i){
    int arrayInd = sp->top -i + 1;
    if(arrayInd < 0){
        printf("Not a valid position for the stack\n");
        return -1;
    }
    else{
        return sp->arr[arrayInd];
    }
}

    // Printing values from the stack
    for (int j = 1; j <= sp->top + 1; j++)
    {
        printf("The value at position %d is %d\n", j, peek(sp, j));
    }
    int stackTop(struct stack* sp){
    return sp->arr[sp->top];
    
    }
    
    int stackBottom(struct stack* sp){
    return sp->arr[0];
}



int main()
{
 struct stack *s;
    s->size = 80;
    s->top = -1; // set its top element -1 
    s->arr = (int *)malloc(s->size * sizeof(int)); // allocating memory in the heap
    printf("Stack has been created successfully\n");
 
    printf("Before pushing, Full: %d\n", isFull(sp));
    printf("Before pushing, Empty: %d\n", isEmpty(sp));
         return 0;
}
