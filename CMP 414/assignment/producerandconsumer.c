#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>
#include <semaphore.h>

#define BUFFER_SIZE 5

int buffer[BUFFER_SIZE];
int in = 0;
int out = 0;

sem_t mutex;
sem_t empty;
sem_t full;

void *producer(void *arg) {
    int item, i;
    for(i = 0; i < 20; i++) {
        item = i; // Produce an item (number 0 to 19)
        
        sem_wait(&empty); // Wait if buffer is full
        sem_wait(&mutex); // Lock critical section
        
        buffer[in] = item;
        printf("Producer produces item: %d at index %d\n", item, in);
        in = (in + 1) % BUFFER_SIZE;
        
        sem_post(&mutex); // Unlock
        sem_post(&full);  // Signal that there is new data
    }
    return NULL;
}

void *consumer(void *arg) {
    int item, i;
    for(i = 0; i < 20; i++) {
        
        sem_wait(&full);  // Wait if buffer is empty
        sem_wait(&mutex); // Lock critical section
        
        item = buffer[out];
        printf("Consumer consumes item: %d from index %d\n", item, out);
        out = (out + 1) % BUFFER_SIZE;
        
        sem_post(&mutex); // Unlock
        sem_post(&empty); // Signal that there is empty space
    }
    return NULL;
}

int main() {
    pthread_t prod, cons;
    
    // Initialize semaphores
    sem_init(&mutex, 0, 1);
    sem_init(&full, 0, 0);            // Initially 0 items are full
    sem_init(&empty, 0, BUFFER_SIZE); // Initially all slots are empty
    
    pthread_create(&prod, NULL, producer, NULL);
    pthread_create(&cons, NULL, consumer, NULL);
    
    pthread_join(prod, NULL);
    pthread_join(cons, NULL);
    
    sem_destroy(&mutex);
    sem_destroy(&full);
    sem_destroy(&empty);
    
    return 0;
}