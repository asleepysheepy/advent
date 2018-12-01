# frozen_string_literal: true

APP_ROOT = File.dirname __FILE__
$LOAD_PATH.unshift File.join(APP_ROOT, 'lib')
Dir.glob('lib/tasks/**/*.rake').each { |r| load r }

desc 'runs all 2018 challenges'
task :'2018' do
  Rake::Task['2018:day01'].invoke
end

desc 'runs all challenges'
task :all do
  Rake::Task['2018'].invoke
end

task default: %w[all]
