# Managing authentication for the Control Panel

<table>
  <tbody>
    <tr>
      <td style="background-color: #ffc4ad;">
        <p>
          Codacy Self-hosted running on Docker is deprecated since April 2020 and will <strong>stop being supported on February 16, 2021</strong>.<br/>
          Codacy will continue to provide critical bug fixes and tool updates for this version (but no more feature enhancements) until the end of support.
        </p>
        <p>
          <a href="/chart/" target="_self">Click here for updated documentation on how to install and configure Codacy Self-hosted on Kubernetes or MicroK8s.</a>
        </p>
        <p>
          If you are a current customer and have any questions regarding the migration process, please reach out to your CSM or <a href="mailto:success@codacy.com" target="_blank">success@codacy.com</a> for more information.
        </p>
      </td>
    </tr>
  </tbody>
</table>

If you are installing Codacy for the first time, it will prompt you if you wish to have the Control Panel access protected by authentication:

`Create user? (y/n)`

If you create a user, it will prompt for a Username and Password:

`Username: <your-control-panel-user>Password:`

Now  access to the Control Panel is password-protected.

## I forgot my password

If you forget your password, you just need to run the installation script, and you will get a prompt for a new username and password.

```sh
bash -c "$(curl -fsSL https://getenterprise.codacy.com/get)" -s install
```

Note that for **legacy systems (Docker 1.9.1) ONLY**, you need to pass the "legacy" version to the script:

```sh
bash -c "$(curl -fsSL https://getenterprise.codacy.com/get)" -s install $HOME "legacy"
```

## My current installation doesn't have authentication yet

If your installation doesn't have authentication yet, you need to export the variables to the host environment and run the update script afterwards:

```sh
export DOPLICATED_USERNAME=myusername
export DOPLICATED_PASSWORD=mypassword
bash -c "$(curl -fsSL https://getenterprise.codacy.com/get)" -s update
```

Note that for **legacy systems (Docker 1.9.1) ONLY**, you need to pass the "legacy" version to the script:

```sh
export DOPLICATED_USERNAME=myusername
export DOPLICATED_PASSWORD=mypassword
bash -c "$(curl -fsSL https://getenterprise.codacy.com/get)" -s update $HOME "legacy"
```

## Will I lose any data if I install the Control Panel again?

No, you won't lose any data if you reinstall the Control Panel, **except for the username and password**.

## Can I set up a username and password for Monitoring (Crow)?

Yes, after you set up the user for the control panel, Crow will have the same credentials. Open Configure, click Save, and wait 10-15 seconds for all the services to stop. Aftertwards, click Reload.
