# Which version control systems does Codacy support?

Codacy supports repositories from the following Git providers:

<table>
  <thead>
    <td></td>
    <th>Version</th>
    <th>Name used on Codacy</th>
  </thead>
  <tbody>
    <!-- GitHub -->
    <tr>
      <th rowspan="2" style="vertical-align: middle;">
        <a target="_blank" style="color: white;" href="https://github.com">GitHub</a>
      </th>
      <td><p><strong>GitHub.com</strong></p></td>
      <td><p>GitHub Cloud</p></td>
    </tr>
    <tr>
      <td><p><strong>GitHub Enterprise Server</strong><br/>version 2.20.3 or later</p>
          <p>➡️ Requires <a target="_blank" href="https://www.codacy.com/self-hosted">Codacy Self-hosted</a></p></td>
      <td><p>GitHub Enterprise</p></td>
    </tr>
    <tr><td></td><td></td><td></td><tr>
    <!-- GitLab -->
    <tr>
      <th rowspan="2" style="vertical-align: middle;">
        <a target="_blank" style="color: white;" href="https://about.gitlab.com">GitLab</a>
      </th>
      <td><strong>GitLab SaaS</strong></td>
      <td><p>GitLab Cloud</p></td>
    </tr>
    <tr>
      <td><p><strong>GitLab Self-managed</strong><br/>version 12.6.2-ee or later</p>
          <p>➡️ Requires <a target="_blank" href="https://www.codacy.com/self-hosted">Codacy Self-hosted</a></p></td>
      <td><p>GitLab Enterprise</p></td>
    </tr>
    <tr><td></td><td></td><td></td><tr>
    <!-- Bitbucket -->
    <tr>
      <th rowspan="2" style="vertical-align: middle;">
        <a target="_blank" style="color: white;" href="https://bitbucket.org">Bitbucket</a>
      </th>
      <td><strong>Bitbucket Cloud</strong></td>
      <td><p>Bitbucket Cloud</p></td>
    </tr>
    <tr>
      <td><p><strong>Bitbucket Data Center</strong><br/>
             <strong>Bitbucket Server</strong><br/>version 6.6.0 or later</p>
          <p>➡️ Requires <a target="_blank" href="https://www.codacy.com/self-hosted">Codacy Self-hosted</a></p></td>
      <td><p>Bitbucket Server</p></td>
    </tr>
  </tbody>
</table>

!!! note
    Although older versions of the self-hosted Git providers may work with Codacy without loss of functionality, Codacy will only fix issues and ensure compatibility with the versions listed above.
