# part 1a
## var declaration
1) line 9 prints "values added: 20"
2) line 13 prints "values added: 20"

## let declaration
1) line 9 prints "value added: 20"
2) line 13 returns an error, because result hasn't been declared in the scope of this block.

## const declaration
1) an error is returned by the attempted  resssignment in line 7, line 9 doesn't print.
2) the same error returned by the attempted reassignment in line 7, prevents line 13 from printing.
   
# part 1b
1) line 12 prints "3", because that was the last value assigned to **i** at that point.
2) line 12 prints "150", becuase that was the last value assigned to **discountedPrice** at that point.
3) line 14 will print "150", because that was the last value assigned to **finalPrice** at that point.
4) This function will return an array "[50 ,100, 150]". It addresses each item in **prices**, applies a discount of **discount**, rounds it, and stores it in **finalPrice**, then pushes it to the array **discounted**. This array is then returned.
5) an error is returned because **i** wasn't declared within the scope of this block.
6) an error is returned because **discountedPrice** wasn't declared within the scope of this block.
7) line 14 will print "150" because that was the last value assigned to it, and **discounted** was declared in this block.
8) his function will return an array "[50 ,100, 150]". It addresses each item in **prices**, applies a discount of **discount**, rounds it, and stores it in **finalPrice**, then pushes it to the array **discounted**. This array is then returned.
9) line 11 produces an error, because **i** wasn't declared within the scope of this block.
10) line 12 prints "3" because that was the values assigned to it, when it was declared.
11) Similar to the previous 2, this function will return an array "[50 ,100, 150]". It addresses each item in **prices**, applies a discount of **discount**, then pushes it to the array **discounted**. This array is then returned. *NOTE 1*: const arrays are allowed to change, but not be reassigned. *NOTE 2*: each iteration of a for-loop is its own block.

## data types
12) Object
    - (A) student.name
    - (B) student["Grad Year"]
    - (C) student.greeting()
    - (D) student["Favorite Teacher"].name
    - (F) student.courseLoad[0]

## Basic Operators & Type Conversion
13) Arithemetic
    - (A) '32'
      - first item is a string, and so the plus sign concatenates the second item as a string.
    - (B) 1
      - minus sign is strictly a mathmatical operator, so both items are mapped as numbers.
    - (C) 3
      - first item is a number, and so the plus sign adds the second item as a number; null maps to 0.
    - (D) '3null'
      - first item is a string, and so the plus sign concatenates the second item as a string.
    - (E) 4
      - the plus sign is treated as mathematical operator when using it with a boolean. true is mapped to 0.
    - (F) 0
      - the plus sign is treated as mathematical operator when using it with a boolean. true is mapped to 0, null also maps to 0.
    - (G) '3undefined'
      - first item is a string, and so the plus sign concatenates the second item as a string.
    - (H) NaN
      - minus sign is strictly a mathmatical operator, so both items are mapped as numbers. undefined maps to NaN, so subtracting it from 3 is NaN (not a number).

14) Comparison
    - (A) true
      - different type comparison converts values to numbers. 2 is greater than 1.
    - (B) false
      - string comparison is performed. '2' is not lexographically less than "12"
    - (C) true
      - different type comparison converts values to numbers. 2 is equal to 2.
    - (D) false
      - strict equality operator does not convert types. By being different times boths items are already not equal.
    - (E) false
      - different type comparison converts values to numbers. 1 is not equal to 2.
    - (F) true
      - Boolean function converts a type to boolean. 2 maps to true, since it is non-zero. true is strictly equal to true.
  
15) The difference between == and ===, is that === does not attempt to convert the items being compared to the same type, before comparing.

## Loops

16) part1b-question16.js

## Functions

17) 

## setInterval(), setTimeout(), clearTimeout()

