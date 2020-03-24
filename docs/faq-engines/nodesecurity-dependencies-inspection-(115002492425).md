# NodeSecurity Dependencies Inspection

Codacy supports nodesecurity/nsp and uses it to check your repository
for insecure/vulnerable dependencies.

For security reasons Codacy Cloud only runs offline tools.

It will run the nsp checks if your repositories contains a
[npm-shrinkwrap.json](https://docs.npmjs.com/cli/shrinkwrap) in the
root.

This file will contain the tree of dependencies of your repository and
will allow the tool to look for vulnerable versions.
