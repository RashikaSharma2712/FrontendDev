# include <stdio.h>
// DEFINNG FUNCTION OF BUUBBLE SORT
void bubble_sort( int arr[] , int n ){
    int i, j;
    // FOR NUMBER OF PASSES
    for( int i = 0 ; i < n-1 ; i++){
        //FOR  NUMBER OF SwaPS
        for( int j = 0 ;  j<=n-i-1 ; j++){
            //CONDITION
            if (arr[j] > arr[j+1]){






                //SWAP CASE
                int temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1]= temp;
            }
        }
     }
}

// DRIVER CODE 
int main(){
     int arr[] = {6,9,0,3,4};
     int n = sizeof(arr)/sizeof(arr[0]);
    bubble_sort(arr,n);
    printf("sorted Array:");
    printf("\n");
    for (int i = 0 ; i < n ;i++){
    printf("%d"  ,arr[i]);
    printf("\n");
    }
    return 0;
}

    