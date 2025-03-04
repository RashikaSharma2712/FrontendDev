#include <stdio.h> 
  void swap(int *i, int *j) // 64  25 12 22 11
{                           // 00 01 02 03 04 index numbers
  int temp = *i;             //11 25 12 22 64
 *i = *j;                    // 11 22 12 25 64 
  *j = temp;                 // 11 12 22 25 64
} 

void selectionSort(int arr[], int n) 
{ 
  int i, j, min_idx; 
for (i = 0; i < n-1; i++) 
  { 
   min_idx = i; 
    for (j = i+1; j < n; j++) 
    if (arr[j] < arr[min_idx]) 
      min_idx = j; 
    if(min_idx != i) 
      swap(&arr[min_idx], &arr[i]); 
  } 
} 
void printArray(int arr[], int size) 
{ 
  int i; 
  for (i=0; i < size; i++) 
    printf("%d ", arr[i]); 
  printf("\n"); 
} 
int main() 
{ 
  int arr[] = {64, 25, 12, 22, 11}; 
  int n = sizeof(arr)/sizeof(arr[0]); 
  selectionSort(arr, n); 
  printf("Sorted array: \n"); 
  printArray(arr, n); 
  return 0; 
} 

    