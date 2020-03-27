# Specifying language

Although our tools try to detect which language is used on each file,
some false positives may occur.

To instruct which language you want Codacy to use, you can define the
following in a [Codacy configuration
file](/hc/en-us/articles/115002130625-Codacy-Configuration-File) -
**.codacy.yml**:

    ---
    engines:
     cppcheck:
       enabled: true
       language: c++

 

Supported languages: c, c++

Supported engines:
[codacy-cppcheck](https://github.com/codacy/codacy-cppcheck)
