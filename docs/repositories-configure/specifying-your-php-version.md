# Specifying your PHP version

If you are using the PHP Compatibility Coding Standard for PHP_CodeSniffer, you can specify the PHP version you'd like to use from the [supported versions](https://github.com/PHPCompatibility/PHPCompatibility#sniffing-your-code-for-compatibility-with-specific-php-versions).

To instruct which PHP version you want Codacy to use, you can define the following in a [Codacy configuration file](codacy-configuration-file.md) - ```.codacy.yml```:

```yaml
---
engines:
  phpcs:
    enabled: true
    php_version: 5.5
```
