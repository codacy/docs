# Configuring GitLab.com with Codacy Self-hosted

If you have admin permissions on your Codacy self-hosted instance, you
can set up or configure your GitLab.com integration by going to the
Admin panel on the top navigation bar.

![Kapture\_2020-03-04\_at\_14.49.15.gif](https://support.codacy.com/hc/article_attachments/360009583119/Kapture_2020-03-04_at_14.49.15.gif)

 

When you open the GitLab panel, if you haven't created an application
yet, this is the first step you need to take. Just follow the link.

<img src="https://support.codacy.com/hc/article_attachments/360009572600/Screenshot_2020-03-04_at_14.52.42.png" width="449" height="318" alt="Screenshot_2020-03-04_at_14.52.42.png" />

 

## Creating a GitLab Application

Follow the link to create an application on Gitlab.com

![](https://support.codacy.com/hc/article_attachments/360009567100/new-application-gl.png)

 

You need to ensure the "api", "read\_user" and "read\_repository" scopes
are checked. 

You'll also need to add the following 'Redirect URL's. Make sure to
update your protocol to use either HTTP or HTTPS and your domain name as
well. Keep in mind this field is case sensitive. 

https://codacy.example.com/login/GitLab  
https://codacy.example.com/add/addProvider/GitLab  
https://codacy.example.com/add/addService/GitLab  
https://codacy.example.com/add/addPermissions/GitLab

 

![](https://support.codacy.com/hc/article_attachments/360009579499/app-created-gl.png)

 

After this, copy the "application ID" and "secret" and paste those to
the GitLab integration panel on Codacy.  

<img src="https://support.codacy.com/hc/article_attachments/360009573060/Screenshot_2020-03-04_at_15.02.46.png" width="426" height="303" alt="Screenshot_2020-03-04_at_15.02.46.png" /> 

Hit "Test & Save" and you should be good to go! 👍
