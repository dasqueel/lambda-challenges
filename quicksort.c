#include <stdio.h>

void swap(int* i1, int* i2)
{
    int tmp = *i1;
    *i1 = *i2;
    *i2 = tmp;
}

int partition(int arr[], int low, int high)
{
    // set the last element in array to be the pivot value
    int pivot = arr[high];
    // set the partition index to the lowest index in arr
    int partitionIndex = low - 1;

    // iterate through each element in array (or sub array) and swap element in question
    // if it is less than the pivot value
    // the swap moves the element in quesiton moves it to one position to the right of
    // the partitionIndex (or parition wall you could call it)
    for (int i = low; i < high; i++)
    {
        if (arr[i] < pivot)
        {
            partitionIndex++;
            swap(&arr[i], &arr[partitionIndex]);
        }
    }
    // finalize the partition divde by swapping the pivot element to one right of the partitonIndex
    swap(&arr[partitionIndex + 1], &arr[high]);
    return (partitionIndex + 1);
}

void quick_sort(int arr[], int low, int high)
{
    // base case or exiting logic for recursion
    if (low < high)
    {
        int partitionIndex = partition(arr, low, high);
        quick_sort(arr, low, partitionIndex - 1);
        quick_sort(arr, partitionIndex + 1, high);
    }
}

void print_array(int arr[], int size)
{
    for (int i = 0; i < size; i++)
    {
        printf("%d\n", arr[i]);
    }
}

int main(int argc, char *argv[])
{
    int arr[] = {100, 55, 4, 98, 10, 18, 90, 95, 43, 11, 47, 67, 89, 42, 49, 79};
    int n = sizeof(arr) / sizeof(arr[0]);
    quick_sort(arr, 0, n - 1);
    print_array(arr, n);
    return 0;
}