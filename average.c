#include <stdio.h>

int main()
{
	float f1, f2, f3, f4, f5, total, average;

	printf("Enter 5 floats: ");
	scanf("%f %f %f %f %f", &f1, &f2, &f3, &f4, &f5);

	total = f1 + f2 + f3 + f4 + f5;
	average = total / 5;
	percentage = (total / 500.0) * 100;
	// percent = "%f %"

	// printf("%f %f %f %f %f", f1, f2, f3, f4, f5);
	printf("Total = %0.2f\n", total);
	printf("Average = %0.2f\n", average);
	printf("Percentage = %0.2f %%\n", percentage);

  return 0;
}