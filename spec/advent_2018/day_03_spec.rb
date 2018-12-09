# frozen_string_literal: true

require 'advent_2018/day_03'

RSpec.describe Advent2018::Day03 do
  let(:input) do
    ['#1 @ 1,3: 4x4',
     '#2 @ 3,1: 4x4',
     '#3 @ 5,5: 2x2']
  end

  describe '#part_1' do
    it 'return the number of cells in two or more claims' do
      expect(Advent2018::Day03.part_1(input)).to eq 4
    end
  end

  describe '#part_2' do
    it 'returns the first repeated value' do
      expect(Advent2018::Day03.part_2(input)).to eq 3
    end
  end

  describe '#all' do
    let(:expected) { { part_1: 4, part_2: 3 } }
    it 'returns a hash with the answer to both parts' do
      expect(Advent2018::Day03.all(input)).to eq expected
    end
  end
end
