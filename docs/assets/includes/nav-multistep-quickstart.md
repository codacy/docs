<nav class="nav-multistep">
    <p>This page is part of the following guided path:</p>
    <ol>
        <li class="{% if page.meta.nav_step == 0 %}nav-multistep__step--active{% endif %}">
            {% if page.meta.nav_step == 0 %}
                <p>
                    Adding your first repository
                </p>
            {% else %}
                <a href="/getting-started/codacy-quality-quickstart#adding-your-first-repository">
                    Adding your first repository
                </a>
            {% endif %}
        </li>
        <li class="{% if page.meta.nav_step == 1 %}nav-multistep__step--active{% endif %}">
            {% if page.meta.nav_step == 1 %}
                <p>
                    Configuring your repository
                </p>
            {% else %}
                <a href="/getting-started/configuring-your-repository#configuring-your-repository">
                    Configuring your repository
                </a>
            {% endif %}
        </li>
        <li class="{% if page.meta.nav_step == 2 %}nav-multistep__step--active{% endif %}">
            {% if page.meta.nav_step == 2 %}
                <p>
                    Integrating Codacy with your Git workflow
                </p>
            {% else %}
                <a href="/getting-started/integrating-codacy-with-your-git-workflow#integrating-codacy-with-your-git-workflow">
                    Integrating Codacy with your Git workflow
                </a>
            {% endif %}
        </li>
    </ol>
</nav>
