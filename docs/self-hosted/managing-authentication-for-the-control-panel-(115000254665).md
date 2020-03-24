# Managing authentication for the Control Panel

If you are installing Codacy for the first time, it will prompt you if
you wish to have the Control Panel access protected by authentication:

`Create user? (y/n)`

If you create a user, it will prompt for a Username and Password:

`Username: <your-control-panel-user>Password:`

Now  access to the Control Panel is password-protected.

## <span class="wysiwyg-font-size-large">**I forgot my password**</span>

If you forget your password, you just need to run the installation
script, and you will get a prompt for a new username and password.

<span
class="ng-scope ng-binding">[bash](https://docs.codacy.com/docs/frequently-asked-questions)</span>

    bash -c "$(curl -fsSL https://getenterprise.codacy.com/get)" -s install

Note that for **legacy systems (Docker 1.9.1) ONLY**, you need to pass
the "legacy" version to the script:

<span
class="ng-scope ng-binding">[bash](https://docs.codacy.com/docs/frequently-asked-questions)</span>

    bash -c "$(curl -fsSL https://getenterprise.codacy.com/get)" -s install $HOME "legacy"

## <span class="wysiwyg-font-size-large"><span class="wysiwyg-font-size-medium">**<span class="wysiwyg-font-size-large">My current installation doesn't have authentication yet</span>** </span></span>

If your installation doesn't have authentication yet, you need to export
the variables to the host environment and run the update script
afterwards:``

<span
class="ng-scope ng-binding">[bash](https://docs.codacy.com/docs/frequently-asked-questions)</span>

 

``

    export DOPLICATED_USERNAME=myusername
    export DOPLICATED_PASSWORD=mypassword
    bash -c "$(curl -fsSL https://getenterprise.codacy.com/get)" -s update

Note that for **legacy systems (Docker 1.9.1) ONLY**, you need to pass
the "legacy" version to the script:

<span
class="ng-scope ng-binding">[bash](https://docs.codacy.com/docs/frequently-asked-questions)</span>

    export DOPLICATED_USERNAME=myusername
    export DOPLICATED_PASSWORD=mypassword
    bash -c "$(curl -fsSL https://getenterprise.codacy.com/get)" -s update $HOME "legacy"

``

 

## <span class="wysiwyg-font-size-large">**Will I lose any data if I install the Control Panel again?**</span>

No, you won't lose any data if you reinstall the Control Panel, **except
for the username and password**.

 

## <span class="wysiwyg-font-size-large">**Can I set up a username and password for Monitoring (Crow)? **</span>

Yes, after you set up the user for the control panel, Crow will have the
same credentials. Just go to: Configure -&gt; Save -&gt; And wait 10-15
seconds (for all the services to stop) -&gt; Reload
