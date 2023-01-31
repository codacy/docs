<nav class="nav-multistep">
    <ol>
        <li class="{% if page.meta.onboarding_step == 0 %}nav-multistep__step--active{% endif %}">
            <a href="/getting-started/codacy-quickstart#adding-your-first-repository">
                Adding your first repository
            </a>
        </li>
        <li class="{% if page.meta.onboarding_step == 1 %}nav-multistep__step--active{% endif %}">
            <a href="/getting-started/configuring-your-repository#configuring-your-repository">
                Configuring your repository
            </a>
        </li>
        <li class="{% if page.meta.onboarding_step == 2 %}nav-multistep__step--active{% endif %}">
            <a href="/getting-started/integrating-codacy-with-your-git-workflow#integrating-codacy-with-your-git-workflow">
                Integrating Codacy with your Git workflow
            </a>
        </li>
    </ol>
</nav>

