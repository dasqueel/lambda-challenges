#include <stdio.h>
#include <assert.h>

// recursive method
// inefficient as it doenst remember work/calculations done
// int fib(int n)
// {
// 	if (n == 0) {
// 		return 0;
// 	}
// 	else if (n == 1) {
// 		return 1;
// 	}
// 	else {
// 		return (fib(n - 1) + fib(n - 2));
// 	}
// }

// iterative method
// more efficient as it remembers work done
int fib(int n)
{
	// use an array to remember calculations
	int f[n+1];
	int i;

	// first two numbers are 0, and 1
	f[0] = 0;
	f[1] = 1;

	// do the calculations until you reach your target number
	for (i = 2; i <= n; i++)
	{
		f[i] = f[i-1] + f[i-2];
	}

	// return the last calculated number
	return f[n];
}

int main(int argc, char* argv[])
{
	int input, output;

	printf("Enter an integer: ");
	scanf("%d", &input);

	output = fib(input);

	printf("Nth Fibonacci number is  %d\n", output);

	return 0;
}