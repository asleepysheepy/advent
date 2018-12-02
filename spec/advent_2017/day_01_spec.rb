# frozen_string_literal: true

require 'advent_2017/day_01'

RSpec.describe Advent2017::Day01 do
  let(:input) { 12_111_415 }

  describe '#part_1' do
    it 'return the summed value of the array' do
      expect(Advent2017::Day01.part_1(input)).to eq 2
    end
  end

  describe '#part_2' do
    it 'returns the first repeated value' do
      expect(Advent2017::Day01.part_2(input)).to eq 3
    end
  end

  describe '#all' do
    let(:expected) { { part_1: 2, part_2: 3 } }
    it 'returns a hash with the answer to both parts' do
      expect(Advent2017::Day01.all(input)).to eq expected
    end
  end
end
