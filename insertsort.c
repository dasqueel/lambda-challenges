#include <stdio.h>

void insertionSort(int arr[], int n)
{
    // iterate through each element in arr
    // start at index 1
    for(int i = 1; i < n; i++) {
        // create temp var to store current iteratations val
        int tmp = arr[i];
        // get the current iterations, previous's index
        int prevI = i - 1;

        // while the previous index is > 0 and
        // its value at previous index is > than currents value
        // swap the values

        while(arr[prevI] > tmp) {
            // swap
            arr[prevI + 1] = arr[prevI];
            // go one step to the left
            prevI--;
        }
        // set final iteration to the current tmp val
        arr[prevI + 1] = tmp;
    }
}

void printArray(int arr[], int n)
{
    for (int i = 0; i < n; i++)
    {
        printf("%d\n", arr[i]);
    }
}

int main(int argc, char *argv[])
{
    int arr[] = {100, 55, 4, 98, 10, 18, 90, 95, 43, 11, 47, 67, 89, 42, 49, 79};
    int n = sizeof(arr) / sizeof(arr[0]);

    insertionSort(arr, n);
    printArray(arr, n);

    return 0;
}