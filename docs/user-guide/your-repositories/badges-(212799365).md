# Badges

Codacy supports badges you can integrate into your repositories to show your repository code quality level. 

You can add a badge directly to your repo by clicking the option "Badge" directly in your repository dashboard.


![Screenshot\_2019-01-07\_at\_14.16.15.png](/images/Screenshot_2019-01-07_at_14.16.15.png)

If you go to your Repository Settings -&gt; General tab you have the option to add the badge with your Codacy grade (same as above) and, if you set up Code Coverage, a badge for your coverage.

![](/hc/en-us/article_attachments/207480985/Screen_Shot_2016-10-11_at_10.33.01.png)


**Creating badges for different branches?**

You can do that if in the end of the badge URL, you add the query parameter "branch=BRANCH\_NAME". 

Example: `https://api.codacy.com/project/badge/Grade/72a7aaa0e3fd4a8db27607da159d3daa?branch=test`
