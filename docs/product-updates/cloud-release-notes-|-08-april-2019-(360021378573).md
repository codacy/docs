# Cloud Release Notes | 08 April 2019

**Bug fixes**

-   <span style="font-weight: 400;">Fixed a bug where some users weren’t
    able to login to Codacy when using GitHub. This was related with
    "Email permission" that was missing. With the fix, if that
    permission is missing users will now get redirected to Github to
    request for the missing permissions ("read email"), and upon
    authorizing they will be able to log in.</span>
-   <span style="font-weight: 400;">Fixed a bug that was causing TSLint
    analysis to fail due to an invalid configuration syntax</span>
