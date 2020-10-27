# Specifying language

Although our tools try to detect which language is used on each file, some false positives may occur.

To instruct which language you want Codacy to use, you can define the following in a [Codacy configuration file](codacy-configuration-file.md) - `.codacy.yml`:

```yaml
---
engines:
  cppcheck:
    enabled: true
    language: c++
```

Supported languages: C, C++

Supported tools: [codacy-cppcheck](https://github.com/codacy/codacy-cppcheck)
