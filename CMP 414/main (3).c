/******************************************************************************

                            Online C Compiler.
                Code, Compile, Run and Debug C program online.
Write your code in this editor and press "Run" button to compile and execute it.

*******************************************************************************/

#include <stdio.h>
#include<sys/types.h>
#include<unistd.h>

int main()
{
    
    int n,i,j, bt[10], wt[10], tat[10];
    
    float atat = 0, awt = 0;
    
    // to get the process ID of this program
    
    pid_t id;
    id = getpid();
    
    printf("the process id number for this program is %d: \n", (int)id);
    
    printf("Enter number of process: ");
    
    scanf("%d", &n);
    
    printf("Enter burst time:  \n");
    
    // burst time
    for (i=0; i<n; i++){
        
        printf("p[%d]: ", i+1);
        
        scanf("%d", &bt[i]);
    }
    
    
    //waiting time
    wt[0] = 0;
    
    for(i=1; i<n; i++){
        
        wt[i] = 0;
        
        for(j=0; j<i; j++){
            
            wt[i] = wt[i] +bt[j];
        }
        
    }
    
    //turn around time
    for (i=0; i<n; i++){
        
        tat[i] = bt[i] + wt[i];
        
        atat = atat + tat[i];
        
        }
        
        // average turn around time
        atat = atat / n;
    
    
    for(i=0; i<n; i++){
        
        awt = awt + wt[i]; 
        
    }
        //average waiting time
        awt = awt / n;
        
    //print result
    printf("process bustTime waiting time  turn around time\n ");
    
    for(i=0; i<n; i++){
        
        printf("p[%d]\t %d \t \t  %d \t\t %d \n \n", i+1, bt[i],wt[i], tat[i]);
        
    }
    
    printf("average turn around time is: %.3f \n", atat);
    
    printf("average waiting time is: %.3f \n", awt);
    

    return 0;
}