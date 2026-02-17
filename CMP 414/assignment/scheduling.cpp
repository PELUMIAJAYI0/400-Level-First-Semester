#include <stdio.h>

int main() {
    int n, i;
    int bt[10], at[10], ct[10], wt[10], tat[10], iat[10];
    float avg_ct = 0, avg_iat = 0, avg_wt = 0, avg_tat = 0;

    printf("CMP 414 Assignment Solver\n");
    printf("Enter number of processes: ");
    scanf("%d", &n);

    // Input Phase
    for (i = 0; i < n; i++) {
        printf("\nProcess P[%d]\n", i + 1);
        printf("Enter Arrival Time: ");
        scanf("%d", &at[i]);
        printf("Enter Burst Time: ");
        scanf("%d", &bt[i]);
    }

    // Calculation Phase
    int current_time = 0;
    
    for (i = 0; i < n; i++) {
        // Calculate Inter-arrival time (Gap between this arrival and previous)
        if (i == 0) {
            iat[i] = 0; // First process has no previous arrival
        } else {
            iat[i] = at[i] - at[i-1];
        }

        // Logic: CPU waits if process hasn't arrived yet
        if (current_time < at[i]) {
            current_time = at[i];
        }

        // Completion Time = Start Time + Burst Time
        ct[i] = current_time + bt[i];
        
        // Update current time for next process
        current_time = ct[i];

        // Turn Around Time = Completion Time - Arrival Time
        tat[i] = ct[i] - at[i];

        // Waiting Time = Turn Around Time - Burst Time
        wt[i] = tat[i] - bt[i];

        // Accumulate for averages
        avg_ct += ct[i];
        avg_iat += iat[i];
        avg_wt += wt[i];
        avg_tat += tat[i];
    }

    // Averages
    avg_ct /= n;
    avg_iat /= (n - 1); // Usually averaged over n-1 gaps, but can be n depending on professor
    avg_wt /= n;
    avg_tat /= n;

    // Output Result
    printf("\n\n--- Results ---\n");
    printf("P\tArr\tBurst\tInterArr\tComp\tWait\tTurnAr\n");
    for (i = 0; i < n; i++) {
        printf("P[%d]\t%d\t%d\t%d\t\t%d\t%d\t%d\n", 
               i+1, at[i], bt[i], iat[i], ct[i], wt[i], tat[i]);
    }

    printf("\nAverage Completion Time: %.2f", avg_ct);
    printf("\nAverage Inter-Arrival Time: %.2f", avg_iat); // (Note: First process gap is usually ignored)
    printf("\nAverage Waiting Time: %.2f\n", avg_wt);

    return 0;
}