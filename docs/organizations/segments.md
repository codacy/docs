Collect all info about Segments to reduce repetition and distraction - later we'll add more providers as well and need to comunicate intructions. 

# Segments
Segmets are dimentions that Codacy reads from your provider that organizes repositories into relevant groups for you. 

### How can segments be utilised?
- [Repositoy list](../faq/code-analysis/which-metrics-does-codacy-calculate.md#grade) 
- [Security & Management Risk](../faq/code-analysis/which-metrics-does-codacy-calculate.md#grade) 


### GitHub
##### GitHub Custom Properties
Create, use, and manage custom properties for your repositories directly in GitHub. Custom properties allow you to assign tags or metadata to repositories, making it easier to categorize and filter them.

#### Enable Segments
To enable **Segments**, an initial sync between GitHub and Codacy needs to happen, which ensures that the repository custom properties from GitHub are reflected in Codacy. Once completed, you can use your custom properties as a **Segments** filter to better locate and organize repositories within Codacy.
    
#### Keep Segments in sync
For changes to **Repository Custom Properties** in GitHub to be **automatically** reflected in Codacy, users need to [accept the new permission request made by the Codacy GitHub app](https://docs.github.com/en/apps/using-github-apps/approving-updated-permissions-for-a-github-app). Accepting this permission enables automatic synchronization of any future changes to the custom properties in GitHub.

!!! note
    If the permission is **not accepted**, users will still be able to use Repository Custom Properties as filters in Codacy, but will need to manually trigger a sync. This can be done using the **manual sync** button available in the filter dropdown, which allows users to synchronize changes from GitHub, though the process may take longer.


> ##### How to setup Custom Properties in GitHub
> For detailed steps on how to add, edit, and manage **Repository Custom Properties** in GitHub, refer to [GitHub's official documentation](https://docs.github.com/en/organizations/managing-organization-settings/managing-custom-properties-for-repositories-in-your-organization#adding-custom-properties).

***

#### Chekc out what's new and to come in Codacy
<div>
  <iframe id="inlineRoadmap"
      title="Codacy Roadmap"
      width="780"
      height="560"
    src="https://portal.productboard.com/2ng56ct2oir3adgbkvzfgqks" frameborder="0"  
  </iframe>
</div>
