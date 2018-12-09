# frozen_string_literal: true

require 'advent_2017/day_01'

namespace :'2017' do
  desc 'Run all day 01 challenges'
  task :day01 do
    result = Advent2017::Day01.all Advent2017::Day01.load_file
    puts "Day 01 Answers\n" \
      "\tpart 1: #{result[:part_1]}\n"\
      "\tpart 2: #{result[:part_2]}\n"
  end

  namespace :day01 do
    desc 'Run day 01 part 1'
    task :part1 do
      result = Advent2017::Day01.part_1 Advent2017::Day01.load_file
      puts "Day 01 part 1: #{result}"
    end

    desc 'Run day 01 part 2'
    task :part2 do
      result = Advent2017::Day01.part_2 Advent2017::Day01.load_file
      puts "Day 01 part 2: #{result}"
    end
  end
end

module Advent2017
  module Day01
    def self.load_file
      data = nil
      File.foreach('data/2017/day_01.txt') { |line| data = line.to_i }
      data
    end
  end
end
