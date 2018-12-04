# frozen_string_literal: true

require 'advent_2018/day_02'

namespace :'2018' do
  desc 'Run all day 02 challenges'
  task :day02 do
    result = Advent2018::Day02.all Advent2018::Day02.load_file
    puts "Day 02 Answers\n" \
      "\tpart 1: #{result[:part_1]}\n"\
      "\tpart 2: #{result[:part_2]}\n"
  end

  namespace :day02 do
    desc 'Run day 02 part 1'
    task :part1 do
      result = Advent2018::Day02.part_1 Advent2018::Day02.load_file
      puts "Day 02 part 1: #{result}"
    end

    desc 'Run day 02 part 2'
    task :part2 do
      result = Advent2018::Day02.part_2 Advent2018::Day02.load_file
      puts "Day 02 part 2: #{result}"
    end
  end
end

module Advent2018
  module Day02
    def self.load_file
      data = []
      File.foreach('data/2018/day_02.txt') { |line| data << line.chomp }
      data
    end
  end
end
