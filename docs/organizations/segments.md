Collect all info about Segments to reduce repetition and distraction - later we'll add more providers as well and need to comunicate intructions. 

# Segments

Segmets are...

### Ho can segments be utilised?
- [Grade](../faq/code-analysis/which-metrics-does-codacy-calculate.md#grade)
- Repo list > link
- SRM > link

!!! note
    To enable **Segments**, an initial sync between GitHub and Codacy needs to happen, which ensures that the repository custom properties from GitHub are reflected in Codacy. Once completed, you can use your custom properties as a **Segments** filter to better locate and organize repositories within Codacy.
    
    For detailed steps on how to add, edit, and manage **Repository Custom Properties** in GitHub, refer to [GitHub's official documentation](https://docs.github.com/en/organizations/managing-organization-settings/managing-custom-properties-for-repositories-in-your-organization#adding-custom-properties).

!!! important
    For changes to **Repository Custom Properties** in GitHub to be **automatically** reflected in Codacy, users need to [accept the new permission request made by the Codacy GitHub app](https://docs.github.com/en/apps/using-github-apps/approving-updated-permissions-for-a-github-app). Accepting this permission enables automatic synchronization of any future changes to the custom properties in GitHub.

    If the permission is **not accepted**, users will still be able to use Repository Custom Properties as filters in Codacy, but will need to manually trigger a sync. This can be done using the **manual sync** button available in the filter dropdown, which allows users to synchronize changes from GitHub, though the process may take longer.


<div>
  <iframe id="inlineRoadmap"
      title="Codacy Roadmap"
      width="300"
      height="200"
    src="https://portal.productboard.com/2ng56ct2oir3adgbkvzfgqks" frameborder="0"  
  </iframe>
</div>
