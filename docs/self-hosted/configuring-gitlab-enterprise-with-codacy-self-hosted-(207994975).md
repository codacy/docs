# Configuring GitLab Enterprise with Codacy Self-hosted

Codacy only supports Gitlab version 9.5 or later. 

![](/hc/en-us/article_attachments/115004382929/a266513d752d2a479f3eb047d4badda079abeff428f931394c516c80d9903eef.png)

##  

## Location

------------------------------------------------------------------------

### ***Endpoint \[required\]***

The URL where the GitLab application is deployed.

This should contain:

-   Protocol (ex: http, https)
-   Port (if other than 80) (ex: 9000)

##### Correct:

-   `http://my.gitlab.url:7990`

##### Incorrect:

-   `my.gitlab.example.com`
-   `my.gitlab.example.com/`
-   `my.gitlab.example.com:7990`
-   `my.gitlab.example.com:7990/`

 

## GitLab Application

------------------------------------------------------------------------

Follow the link to create an application on Gitlab Enterprise.

 

![](/images/Screen_Shot_2017-05-17_at_13.16.37.png)

 

Then paste the application ID and secret in Codacy Self-hosted.

You'll also need to add the following 'Redirect URI'. Make sure to
update your protocol to use either http or https and your domain name as
well. Keep in mind this field is case sensitive. 

```text
https://codacy.example.com/login/GitLabEnterprise
https://codacy.example.com/add/addProvider/GitLabEnterprise
https://codacy.example.com/add/addService/GitLabEnterprise
https://codacy.example.com/add/addPermissions/GitLabEnterprise
```
 
![](/images/screen_shot_2017-09-06_at_15.34.15_720.png)

 
