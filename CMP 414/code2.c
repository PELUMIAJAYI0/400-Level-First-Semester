#include<stdio.h>
#include<pthread.h>

pthread_mutex_t myMutex;

static volatile int balance = 0;

void * deposit(void * parameter){
    char * who = (char *) parameter;
    int i;
    printf("%s deposit money %d\n", who, balance);
    for (i=0; i < 10000; i++){
        pthread_mutex_lock(&myMutex);
        balance = balance + 1;
        pthread_mutex_unlock(&myMutex);
        printf("%s saved money %d\n", who, balance);
    }
    printf("%s saved money %d\n", who, balance);
    return NULL;
}

int main() {
    pthread_t P1, P2;

    pthread_mutex_init(&myMutex, 0);

    pthread_create(&P1, NULL, deposit, "bintu");
    pthread_create(&P2, NULL, deposit, "bello");


    pthread_join(P1, NULL);
    pthread_join(P2, NULL);

    pthread_mutex_destroy(&myMutex);

    printf("total deposit for both Threads %d\n", balance);


    return 0;
}

