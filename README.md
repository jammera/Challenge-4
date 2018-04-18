# Challenge-4

# About
Challenge from the Advent of code 2015
Testing a few ways for lowest running time algorithm.

# Result
After I tested on Chrome iterating with loops with increment/decrement on each step, it didn't prove to be faster, so I left only 3 other with similar times.
The first one is obviously slower. The first algo additionally slows down - my guess is because it's the first call of "console.log" and "console.time". It adds another ~3ms.
The method of calculating the total length minus down floors time 2 (calculated using "input.split(')').length) seems the fastest, reaching as low as ~0.25ms.
