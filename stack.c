#include <stdio.h>
#include <stdlib.h>

// Struct representing a Stack that holds an integer representing the
// the index of the top of the stack, the total capacity that the stack
// can hold, and a pointer to an array of integers
typedef struct Stack {
    int top;
    unsigned capacity;
    int* array;
} Stack;

// Function to create a stack of given capacity. It initializes size of
// stack as 0
Stack* createStack(unsigned capacity)
{
    Stack* stack = (struct Stack*) malloc(sizeof(struct Stack));
    stack->capacity = capacity;
    stack->top = -1;
    stack->array = (int*) malloc(stack->capacity * sizeof(int));
    return stack;
}

// Stack is full when top is equal to the last index
int isFull(Stack* stack)
{
    // return stack->capacity == stack->top;
    if (stack->capacity - 1 == stack->top) {
        return 1;
    }
    else {
        return 0;
    }
}

// Stack is empty when top is equal to -1
int isEmpty(Stack* stack)
{
    return stack->top == -1;
}

// Function to add an item to stack. It increases top by 1
void push(Stack* stack, int item)
{
    // check if array is at capatcity
    if (stack->capacity != stack->top) {
        // add to array
        stack->array[stack->top + 1] = item;
        stack->top += 1;
    }
}

// Function to remove an item from stack. It decreases top by 1
int pop(Stack* stack)
{
    if (stack->top >= 0) {
        return stack->array[stack->top--];
    }
    else {
        return 0;
    }
}

// Program to test above functions
int main()
{
    Stack* stack = createStack(100);

    push(stack, 10);
    push(stack, 20);
    push(stack, 30);

    printf("%d popped from stack\n", pop(stack));
    printf("The stack is full: %d\n", isFull(stack));

    printf("%d popped from stack\n", pop(stack));
    printf("%d popped from stack\n", pop(stack));
    printf("The stack is empty: %d\n", isEmpty(stack));

    return 0;
}