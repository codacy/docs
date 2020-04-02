# PHP_CodeSniffer - Specifying your PHP version

If you are using the PHP Compatibility Coding Standard for PHP CodeSniffer, you can specify the PHP version you'd like to use from the [supported versions](https://github.com/wimg/PHPCompatibility#sniffing-your-code-for-compatibility-with-specific-php-versions).

To instruct which PHP version you want Codacy to use, you can define the following in a [Codacy configuration file](/hc/en-us/articles/115002130625-Codacy-Configuration-File) -

```yaml
---
engines:
  phpcs:
    enabled: true
    php_version: 5.5
```
