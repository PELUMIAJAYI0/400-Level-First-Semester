#include<stdio.h>
#include<stdlib.h>
#include<pthread.h>
#include<semaphore.h>

#define SHARED 1
#define BUFFER_SIZE 5

int buffer[BUFFER_SIZE];
int count = 0;

sem_t mutex;

void * producer(void * arg){
	int item, i;
	for(i=0; i<20; i++){
		item = i;
		sem_wait(&mutex);
		buffer[count++] = item;
		sem_post(&mutex);
		printf("producer produces item for %d\n", item);
	
	}
	return NULL;
}

void * consumer(void*ar){
	int i, item;
	for(i=0; i<20; i++){
		sem_wait(&mutex);
		item = buffer[count--];
		sem_post(&mutex);
		printf("consumer consumes item of %d\n ", item);
	}
	return NULL;
}

int main()
{
	pthread_t prod, cons;
	
	sem_init(&mutex, SHARED, 1);
	
	pthread_create(&prod, NULL, producer, NULL);
	pthread_create(&cons, NULL, consumer, NULL);
	
	pthread_join(prod, NULL);
	pthread_join(cons, NULL);
	
	sem_destroy(&mutex);
}
