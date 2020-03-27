# Hotspots - How does it work?

On the Organization Dashboard, Repository Dashboard and Personal Dashboard you have a section called **Hotspots** where you can see a set of attention points you can click on or dismiss, in case you don't feel they are relevant. See below a full description of this feature and all the functionalities behind it! 


## How does it look like?

Each hotspot, depending on the Dashboard, should apply to you on the environment you are in: if you are on the Organization Dashboard (where you can see all the repositories of a specific Organization) you will see Hotspots (attention points) related with the Organization, if you are on the Repository Dashboard you will see Hotspots related with the repository, and if you are on a Personal Dashboard for a specific Organization, you will see Hotspots related with your work for a specific Organization. 

<img src="https://support.codacy.com/hc/article_attachments/360004658034/Screen_Shot_2018-05-03_at_23.38.47.png" width="290" height="292" alt="Screen_Shot_2018-05-03_at_23.38.47.png" /> 

**Hotspots can be dismissed** by clicking on "x" on the top right corner. If you dismiss an Hotspot and the situation that generate that Hotspot it not fixed it will show up again 7 days after. 

You can also click on specific content of each Hotspot - which will take you to a specific pull request or repository, depending on Hotspot, so you can follow up closely what went wrong. 


## What types of Hotspots are there?

We have started with a short-list of hotspots and the idea is to iterate this feature, as we see valuable for our customers. In case you have feedback feel free to share it, we really appreciate real feedback, to ensure that we gather the right attention points.

For now, we have implemented:

| Type of Hotspot                                                 | Description of Hotspot                                                                                               | Where can you find it?                                                                                                                                               |
| --------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Open Pull Requests Breaking standards                           | On this Hotspot we let you know a specific repository has X open pull requests not up to standards.                  | You can see this Hotspot at Organization, Repository and Personal levels. However, on the Personal Dashboard you will only see open pull requests by you.            |
| Drop in quality of a specific repository                        | On this Hotspot we let you know a specific repository had a drop in quality over the last 7 days.                    | You will see this Hotspot at Organization, Repository and Personal Dashboards. However, on the Personal Dashboard you will only see repositories you have access to. |
| A security pattern is reported X times in a specific repository | On this Hotspot we let you know a specific security pattern is being reported over 1 time for a specific repository. | You will see this Hotspot at Repository and Personal Dashboards. This way you can see if there is any specific pattern breaking too often.                           |
| Total X reports of security patterns in a specific repository   | On this Hotspot we let you know a specific repository has more than X issues related with security.                  | You will see this Hotspot at Organization level, to give you an overview on overall security issues your organization might be facing.                               |
 

We would love your feedback, in case you want to let us know what you think about the Repository Dashboard, how it could be improved, etc feel free to reach out!
