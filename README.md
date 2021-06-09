# Epicodus | Week 03 | Vowel Counter

> Write a Pig Latin translator or should we say an "igPay atinLay anslatorTray"?

Pig Latin Rules:
- For words beginning with a vowel, add "way" to the end
- For words beginning with one or more consonants, move all of the first consecutive consonants to the end and add "ay".
- If the first consonants include "qu", move the "q" and the "u."

## Live Site
[https://alyxmoon.github.io/epicodus-week03-pig-latin/](https://alyxmoon.github.io/epicodus-week03-pig-latin/)

## Instructions
1. Before writing any code, make a list of specs detailing each behavior your program will have. Start with the simplest possible behavior, and slowly move up in complexity.

2. Have at least two other pairs check your specs before you begin coding. Ensure that each possible behavior is represented by a spec, and that they are ordered from simplest to most complex.

3. Place your specs (and their example inputs and outputs) in your project's README.

## Tests

### Describe: convertToPigLatin();
```
Test: "Returns a blank string if a blank string is provided"
Code: convertToPigLatin('')
Expected Output: ''
```

```
Test: "It correctly works with 'a' at the beginning"
Code: convertToPigLatin('away')
Expected Output: 'awayway'
```

```
Test: "It correctly works with 'e' at the beginning"
Code: convertToPigLatin('energy')
Expected Output: 'energyway'
```

```
Test: "It correctly works with 'i' at the beginning"
Code: convertToPigLatin('in')
Expected Output: 'inway'
```

```
Test: "It correctly works with 'o' at the beginning"
Code: convertToPigLatin('out')
Expected Output: 'outway'
```

```
Test: "It correctly works with 'u' at the beginning"
Code: convertToPigLatin('under')
Expected Output: 'underway'
```