# How does Codacy measure complexity in my repository?

Codacy uses [cyclomatic complexity](https://en.wikipedia.org/wiki/Cyclomatic_complexity) to identify complex files in your repository. 

Cyclomatic Complexity is a software metric used to indicate the complexity of a program. It is a quantitative measure of the number of linearly independent paths through a program's source code. 

A complex file is a file with a complexity value bigger than the threshold defined on the [repository quality settings](/hc/en-us/articles/360009164573-Quality-Settings). 

Code complexity is calculated based on the maximum number of complex methods in a file.

In your [Repository dashboard](/hc/en-us/articles/360003890673-Project-Dashboard-How-does-it-work-), you can see how complexity is evolving for your repository. 
