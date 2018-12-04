# frozen_string_literal: true

require 'advent_2018/day_02'

RSpec.describe Advent2018::Day02 do
  let(:input) { %w[abcdef bababc abbcde abcccd aabcdd abcdee ababab abcgef] }

  describe '#part_1' do
    it 'return the summed value of the array' do
      expect(Advent2018::Day02.part_1(input)).to eq 12
    end
  end

  describe '#part_2' do
    it 'returns the first repeated value' do
      expect(Advent2018::Day02.part_2(input)).to eq 'abcef'
    end
  end

  describe '#all' do
    let(:expected) { { part_1: 12, part_2: 'abcef' } }
    it 'returns a hash with the answer to both parts' do
      expect(Advent2018::Day02.all(input)).to eq expected
    end
  end
end
