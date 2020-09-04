# Monitoring Codacy Self-hosted

<table>
  <tbody>
    <tr>
      <td style="background-color: #ffc4ad;">
        <p>
          Codacy Self-hosted running on Docker is <strong>deprecated since April 2020</strong>. Codacy provides critical bug fixes and tool updates but no more feature enhancements for this version.
        </p>
        <p>
          <a href="/chart/" target="_self">Click here for updated documentation on how to install and configure Codacy Self-hosted on Kubernetes.</a>
        </p>
        <p>
          If you are a current customer and have any questions regarding the migration process, please reach out to your CSM or <a href="mailto:success@codacy.com" target="_blank">success@codacy.com</a> for more information.
        </p>
      </td>
    </tr>
  </tbody>
</table>

You can monitor your Codacy analysis here: This keeps track of the number of commits in the queue to be analyzed as well as repositories under analysis.  

![Screen_Shot_2017-07-26_at_7.32.04_AM.png](/images/Screen_Shot_2017-07-26_at_7.32.04_AM.png)

Codacy analysis usually starts within seconds. A high number of repositories queued for analysis may cause delays; you can check this in the Monitoring.

## How do I access the Monitoring tool?  

If you are a Codacy Administrator, you can access Crow, your Monitoring tool, directly from Codacy.

![Screen_Shot_2018-02-08_at_10.53.55.png](/images/Screen_Shot_2018-02-08_at_10.53.55.png)

Alternatively, you can go to port 16005. Your login details are the same as the ones used in the Codacy control panel.

If you want, you can also give access to other users in your organization by sharing the page URL, even if they are not Admins. You can do that by enabling the "Public monitoring" option in your control panel.  

![Screenshot_2019-04-12_at_09.30.04.png](/images/Screenshot_2019-04-12_at_09.30.04.png)
