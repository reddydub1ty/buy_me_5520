
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

#define ARRAY_SIZE 10

void generate_random_data(int data[], int size) {
    for(int i = 0; i < size; i++) {
        data[i] = rand() % 100 + 1;
    }
}

void process_data(int input[], int output[], int size, int* output_size) {
    *output_size = 0;
    for(int i = 0; i < size; i++) {
        if(input[i] > 50) {
            output[*output_size] = input[i] * 2;
            (*output_size)++;
        }
    }
}

int main() {
    srand(time(NULL));
    
    int data[ARRAY_SIZE];
    int processed[ARRAY_SIZE];
    int processed_size;

    generate_random_data(data, ARRAY_SIZE);
    process_data(data, processed, ARRAY_SIZE, &processed_size);

    printf("Original data: ");
    for(int i = 0; i < ARRAY_SIZE; i++) {
        printf("%d ", data[i]);
    }
    
    printf("\nProcessed data: ");
    for(int i = 0; i < processed_size; i++) {
        printf("%d ", processed[i]);
    }
    
    return 0;
}

class DataProcessor
  def self.generate_random_data
    Array.new(10) { rand(1..100) }
  end

  def self.process_data(data)
    data.select { |x| x > 50 }.map { |x| x * 2 }
  end
end

data = DataProcessor.generate_random_data
processed = DataProcessor.process_data(data)

puts "Original data: #{data}"
puts "Processed data: #{processed}"
