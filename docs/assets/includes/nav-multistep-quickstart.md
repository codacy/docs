<nav class="nav-multistep" aria-label="Getting started guide">
    <p>This page is part of the following guided path:</p>
    <ol>
        <li{% if page.meta.nav_step == 0 %} aria-current="step"{% endif %}>
            {% if page.meta.nav_step == 0 %}
                <span>
                    Adding your first repository
                </span>
            {% else %}
                <a href="/getting-started/codacy-quickstart#adding-your-first-repository">
                    Adding your first repository
                </a>
            {% endif %}
        </li>
        <li{% if page.meta.nav_step == 1 %} aria-current="step"{% endif %}>
            {% if page.meta.nav_step == 1 %}
                <span>
                    Configuring your repository
                </span>
            {% else %}
                <a href="/getting-started/configuring-your-repository#configuring-your-repository">
                    Configuring your repository
                </a>
            {% endif %}
        </li>
        <li{% if page.meta.nav_step == 2 %} aria-current="step"{% endif %}>
            {% if page.meta.nav_step == 2 %}
                <span>
                    Integrating Codacy with your Git workflow
                </span>
            {% else %}
                <a href="/getting-started/integrating-codacy-with-your-git-workflow#integrating-codacy-with-your-git-workflow">
                    Integrating Codacy with your Git workflow
                </a>
            {% endif %}
        </li>
    </ol>
</nav>
