#include <stdio.h>
#include <stdlib.h>

typedef struct node
{
    int val;
    struct node *left;
    struct node *right;
} node;

node *newNode(int item)
{
    struct node *tmp = (struct node *)malloc(sizeof(struct node)); //malloc returns void pointer, need to cast it
    tmp->val = item;
    tmp->left = NULL;
    tmp->right = NULL;
    return tmp;
}

void printInOrder(node *root)
{
    if (root != NULL) {
        printInOrder(root->left);
        printf("%d\n", root->val);
        printInOrder(root->right);
    }
}

node *insert(node *node, int item)
{
    if (node == NULL) return newNode(item);

    if (item < node->val) {
        node->left = insert(node->left, item);
    }
    else if (item > node->val) {
        node->right = insert(node->right, item);
    }
}

int main(int argc, char *argv[])
{
    node *root = NULL;
    root = insert(root, 50);
    insert(root, 30);
    insert(root, 20);
    insert(root, 40);
    insert(root, 70);
    insert(root, 60);
    insert(root, 80);

    printInOrder(root);

    return 0;
}