# What are the different Grades and how are they calculated?

## 1. Overall Grade

Codacy gives an overall grade to help you better understand the quality of your repository.
Grades range from **A** to **F**, **A** being the highest grade.

Note the grading is performed on a branch level, to give a better understanding of the code quality on a branch basis.

## 2. Category Grades

Issue classification is as follows:

- Code Style
- Compatibility
- Error Prone
- Performance
- Security
- Unused Code

Every issue impacts the grade of its category.
Category grading ranges from 0% - 100%, 100% being the highest grade.

## 3. File Grades

File grades range from **A** to **F**, **A** being the highest grade.

Grading every file occurs according to the weighted average of the following categories:

- issues
- clones
- complexity
- coverage (optional) 

## 4. Grade Calculation

Codacy grades based on the number of issues for every thousand lines of code (KLOC). Steve McConnell, in his book 'Code Complete,' wrote about average bugs per LOC:

\(a\) Industry Average: "about 15 - 50 errors per 1000 lines of delivered code." He further states this is usually representative of code that has some level of structured programming behind it but probably includes a mix of coding techniques.
