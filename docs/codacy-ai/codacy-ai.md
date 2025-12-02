# Codacy AI

## What is Codacy AI?

Codacy AI is a set of optional features integrated into the Software designed to optimise development workflows and elevate code quality standards through automated issue descriptions, actionable recommendations and false-positive detection, is available for the Customer.

Codacy AI utilizes only enterprise-grade instances of OpenAI and Google Gemini services with enhanced security, privacy, and data protection features. Customer Code processed through Codacy AI will not be used by Codacy, OpenAI, or any third-party AI provider for training, improving, or developing artificial intelligence models, machine learning algorithms, or any other automated systems.

## AI Features

### AI-enhanced comments

AI-enhanced comments are optional, machine-generated suggestions that appear directly in pull requests and review threads. They use Codacy's AI to provide concise issue summaries, remediation suggestions, and links to relevant documentation — helping reviewers and authors quickly understand and fix problems. 

This feature leverages openAI models, and is strictly opt-in: it will only run on repositories or projects where a repository admin has enabled it.

How to turn it on

1. Go to your organization or repository settings in Codacy.
2. Navigate to the "Integrations" or "AI features" section (depending on your Codacy plan and UI version).
3. Find "AI-enhanced comments" and toggle the feature to "On" for the repository or organization scope you want to enable.
4. Optionally configure which repositories, branches, or severity levels should receive AI comments to reduce noise.
5. Save your changes. Once enabled, Codacy will start adding AI-enhanced comments to new pull requests and code reviews according to the configured scope.

Notes

- Administrators can enable or disable the feature at organization or repository level.
- Enabling the feature may be subject to plan limitations and governance controls; check your Codacy subscription and admin permissions.
- Users can still ignore or dismiss individual AI comments during code review.

- Data usage and privacy

- To generate an AI-enhanced comment, Codacy only processes the specific issue context: the issue line plus up to ten lines before and ten lines after that line. No additional repository data is sent or used.
- Codacy does not use your code, repository contents, or comments to train external AI models. No customer code or review text is incorporated into model training.

### Smart False Positive Triage

This feature leverages openAI models, and is strictly opt-in: you need to get in touch with us in order to enable it.

How to turn it on

1. Get in touch with your Customer Success Manager or with <support@codacy.com>

Notes

- Codacy does not use your code, repository contents, or comments to train external AI models. No customer code or review text is incorporated into model training.
- To detect a Possible False Positive, Codacy only processes the specific issue context: one request per file with issues. No additional repository data is sent or used.
- Prompts are neither stored nor visible by anyone

### PR Reviewer

This feature leverages Google Gemini models, and is strictly opt-in: it will only run on repositories or projects where a repository admin has enabled it.

How to turn it on

1. Go to your organization or repository settings in Codacy.
2. Navigate to the "Integrations" or "AI features" section (depending on your Codacy plan and UI version).
3. Find "AI Reviewer", under "Status checks", and toggle the feature to "On" for the repository or organization scope you want to enable.
5. Save your changes. Once enabled, Codacy will start adding a Summary to your pull requests with of the information used to proved the AI-enriched reviews.
6. To request a PR Review from codacy, add a "codacy-review" label to you Pull Request. Codacy listens to the event and will publish the review as soon as it's ready.

Notes

- Codacy does not use your code, repository contents, or comments to train external AI models. No customer code or review text is incorporated into model training.
- To enrich the review, the git diff of the Pull Request as well as some ralted files' contents can be sent as context. No data is stored on our side, or used to train any models.
- Prompts are neither stored nor visible by anyone 
