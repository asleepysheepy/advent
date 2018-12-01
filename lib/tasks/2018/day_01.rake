# frozen_string_literal: true

require 'advent_2018/day_01'

namespace :'2018' do
  desc 'Run all day 01 challenges'
  task :day01 do
    result = Advent2018::Day01.all load_file
    puts "Day 01 Answers\n" \
      "\tpart 1: #{result[:part_1]}\n"\
      "\tpart 2: #{result[:part_2]}\n"
  end

  namespace :day01 do
    desc 'Run day 01 part 1'
    task :part1 do
      result = Advent2018::Day01.part_1 load_file
      puts "Day 01 part 1: #{result}"
    end

    desc 'Run day 01 part 2'
    task :part2 do
      result = Advent2018::Day01.part_2 load_file
      puts "Day 01 part 2: #{result}"
    end
  end
end

def load_file
  data = []
  File.foreach('data/2018/day_01.txt') { |line| data << line.to_i }
  data
end
