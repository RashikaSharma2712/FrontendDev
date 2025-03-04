#include<stdio.h>
int main(){
    int arr[7] = {1,4,5,6,7,2,32};
    int max = -1;
    for (int i=0 ; i<=7;i++){
     if (max <= arr[i]){
    max = arr[i];
    }
    printf("%d" , max);
}
return 0;
}