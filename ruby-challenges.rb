# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'
def odd_verify(num)
    if num % 2 == 1
        "#{num} is odd"

    elsif num % 2 == 0
        "#{num} is even"
    end
end
#  p odd_verify(num1)
# output: "7 is odd"



# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

# psuedo code:
# input: "string"
# output:"strng" (removes vowles)
# view resource given 
# use .delete aeiou
# create method
# run variables through method


def vowels_eater(word)
    word.delete "aeiou"
end
# p vowels_eater(beatles_album1)









# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

#psuedo code
# input: racecar
#output: racecar
# use .reverse accessor to reverse string 
# use if reverse is same as original than return original. 

def palindrome_test_machine(tested)
    if tested.reverse.downcase == tested.downcase
        tested
    else
        'this is not a palindronski yo'
    end
end

p palindrome_test_machine(palindrome_tester2)