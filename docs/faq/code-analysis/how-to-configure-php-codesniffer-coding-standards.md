---
description: To enforce a specific PHP_CodeSniffer coding standard on Codacy you must create a configuration file on the root of your repository that references one or more coding standards.
---

# How to configure PHP_CodeSniffer coding standards?

By default, Codacy uses the PHP_CodeSniffer configuration on the [Code patterns](../../repositories-configure/configuring-code-patterns.md) page when analyzing your repositories.

To enforce a specific PHP_CodeSniffer coding standard you must [create a configuration file](https://github.com/squizlabs/PHP_CodeSniffer/wiki/Advanced-Usage#using-a-default-configuration-file) on the root of your repository that references one or more of the following coding standards:

-   Default coding standards packaged together with PHP_CodeSniffer:

    <https://github.com/squizlabs/PHP_CodeSniffer/tree/master/src/Standards>

-   Additional coding standards that Codacy packages on the PHP_CodeSniffer tool plugin. Check the repository the additional coding standards to learn how you can reference them in your configuration files:

    <https://github.com/codacy/codacy-codesniffer/blob/master/composer.json>

For example, create a text file with the name `.phpcs.xml` to use the PSR12 coding standard but excluding the sniffs `Generic.WhiteSpace.DisallowTabIndent` and `PSR12.Operators.OperatorSpacing`:

```xml
<?xml version="1.0"?>
<ruleset name="PHP_CodeSniffer">
  <description>PHP_CodeSniffer configuration</description>
  <rule ref="PSR12">
    <exclude name="Generic.WhiteSpace.DisallowTabIndent"/>
    <exclude name="PSR12.Operators.OperatorSpacing"/>
  </rule>
</ruleset>
```

## See also

Check these external resources for more help on customizing your PHP_CodeSniffer configuration:

-   [PHP_CodeSniffer configuration file syntax](https://github.com/squizlabs/PHP_CodeSniffer/wiki/Annotated-Ruleset)
-   [PHP Coding Standard Generator](https://edorian.github.io/php-coding-standard-generator/#phpcs)
