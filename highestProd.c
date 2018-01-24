#include <stdio.h>
#include <stdlib.h>
#include <assert.h>

#define MAX(a, b) (((a) > (b)) ? (a) : (b))
#define MIN(a, b) (((a) < (b)) ? (a) : (b))
#define SIZE(arr) (sizeof(arr) / sizeof(arr[0]))

int highestProductOf3(int arr[], int length)
{
	// break arr into negatives and positives
	// int sortedArrNeg[length];
	// int sortedArrPos[length];
	// int negArrIdx = 0;
	// int posArrIdx = 0;

	// for(int i = 0; i < length; i++) {
	// 	// printf("%d\n", arr[i]);
	// 	if (arr[i] < 0) {
	// 		sortedArrNeg[negArrIdx] = abs(arr[i]);
	// 		negArrIdx++;
	// 	}
	// 	else {
	// 		sortedArrPos[posArrIdx] = arr[i];
	// 		posArrIdx++;
	// 	}
	// }

	// printf("%d\n", sortedArrNeg[0]);
	// // printf("%d\n", sortedArrPos[0]);

	// return 0;

	int highest, lowest;
	int highestProductOf2, lowestProductOf2;
	int highestProductOf3;

	assert(length >= 3);

	highest = MAX(arr[0], arr[1]);
	lowest = MIN(arr[0], arr[1]);

	highestProductOf2 = arr[0] * arr[1];
	lowestProductOf2 = arr[0] * arr[1];

	highestProductOf3 = highestProductOf2 * arr[2];

	for (int i = 2; i < length; i++) {
		int temp;
		int current = arr[i];

		temp = MAX(highestProductOf3, current * highestProductOf2);
		highestProductOf3 = MAX(temp, current * lowestProductOf2);

		temp = MAX(highestProductOf2, current * highest);
		highestProductOf2 = MAX(temp, current * lowest);

		temp = MIN(lowestProductOf2, current * highest);
		lowestProductOf2 = MIN(temp, current * lowest);

		highest = MAX(highest, current);

		lowest = MIN(highest, current);
	}

	return highestProductOf3;

}

int main()
{
  int arr1[] = {-10, -10, 1, 3, 2};
  int arr2[] = {1, 10, -5, 1, -100};
  int arr3[] = {5, -20, 19, 16, 4};

  printf("Highest product of arr1 is: %d\n", highestProductOf3(arr1, SIZE(arr1)));
  printf("Highest product of arr2 is: %d\n", highestProductOf3(arr2, SIZE(arr2)));
  printf("Highest product of arr3 is: %d\n", highestProductOf3(arr3, SIZE(arr3)));

  return 0;
}