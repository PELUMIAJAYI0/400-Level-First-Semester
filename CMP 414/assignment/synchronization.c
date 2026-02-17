#include <stdio.h>
#include <pthread.h>
#include <stdlib.h>

pthread_mutex_t myMutex;
static volatile int balance = 0;

void *deposit(void *parameter) {
    char *who = (char *)parameter;
    int i;
    
    printf("%s is ready to deposit money. Current Balance: %d\n", who, balance);
    
    for (i = 0; i < 10000; i++) {
        // LOCK: Only one person enters here at a time
        pthread_mutex_lock(&myMutex);
        
        balance = balance + 1;
        
        // UNLOCK: Release for the next person
        pthread_mutex_unlock(&myMutex);
    }
    
    printf("%s finished depositing. Balance is now: %d\n", who, balance);
    return NULL;
}

int main() {
    pthread_t P1, P2;

    // Initialize the lock
    pthread_mutex_init(&myMutex, NULL);

    // Create two threads (Bintu and Bello)
    pthread_create(&P1, NULL, deposit, (void*)"bintu");
    pthread_create(&P2, NULL, deposit, (void*)"bello");

    // Wait for both to finish
    pthread_join(P1, NULL);
    pthread_join(P2, NULL);

    // Destroy the lock
    pthread_mutex_destroy(&myMutex);

    printf("Final Total Deposit: %d\n", balance);

    return 0;
}