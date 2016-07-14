class Comment < ApplicationRecord
  validates_presence_of :author
  validates_presence_of :text
end
