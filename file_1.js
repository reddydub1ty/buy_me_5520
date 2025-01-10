
import random
from typing import List

def generate_random_data() -> List[int]:
    data = [random.randint(1, 100) for _ in range(10)]
    return data

def process_data(data: List[int]) -> List[int]:
    return [x * 2 for x in data if x > 50]

def main() -> None:
    data = generate_random_data()
    processed = process_data(data)
    print(f"Original data: {data}")
    print(f"Processed data: {processed}")

if __name__ == "__main__":
    main()

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

function generateRandomData() {
    return Array.from({ length: 10 }, () => 
        Math.floor(Math.random() * 100) + 1
    );
}

function processData(data) {
    return data
        .filter(x => x > 50)
        .map(x => x * 2);
}

function main() {
    const data = generateRandomData();
    const processed = processData(data);
    
    console.log("Original data:", data);
    console.log("Processed data:", processed);
}

main();

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
