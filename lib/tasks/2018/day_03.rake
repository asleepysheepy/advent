# frozen_string_literal: true

require 'advent_2018/day_03'

namespace :'2018' do
  desc 'Run all day 03 challenges'
  task :day03 do
    result = Advent2018::Day03.all Advent2018::Day03.load_file
    puts "Day 03 Answers\n" \
      "\tpart 1: #{result[:part_1]}\n"\
      "\tpart 2: #{result[:part_2]}\n"
  end

  namespace :day03 do
    desc 'Run day 03 part 1'
    task :part1 do
      result = Advent2018::Day03.part_1 Advent2018::Day03.load_file
      puts "Day 03 part 1: #{result}"
    end

    desc 'Run day 03 part 2'
    task :part2 do
      result = Advent2018::Day03.part_2 Advent2018::Day03.load_file
      puts "Day 03 part 2: #{result}"
    end
  end
end

module Advent2018
  module Day03
    def self.load_file
      data = []
      File.foreach('data/2018/day_03.txt') { |line| data << line.chomp }
      data
    end
  end
end
