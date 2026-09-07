# Repository stack detection

On every analysis of your repository's default branch, Codacy detects your repository's stack: its languages, frameworks, and libraries. Codacy uses this stack to make code pattern configuration relevant to what your repository actually contains, rather than to its languages alone.

## How Codacy uses your stack

-   **Code patterns page:** Codacy flags enabled patterns whose framework isn't part of your repository's stack, so you can find and disable patterns that don't apply to your code.

    <!-- TODO: verify the exact UI copy and location of this flag on the Code patterns page -->

-   **Issues page:** Codacy highlights issues raised by patterns whose framework isn't part of your repository's stack.

    <!-- TODO: verify the exact UI copy and location of this indicator on the Issues page -->

-   **Coding standards:** When selecting repositories to apply a coding standard to, you can filter repositories by stack.

    <!-- TODO: verify the exact UI copy and location of this filter on the repository selection page -->

!!! note
    Stack detection is advisory. Codacy doesn't automatically enable or disable code patterns based on your repository's stack — you still apply changes yourself, [manually](configuring-code-patterns.md) or with [auto-configuration](configuring-code-patterns.md#auto-configuring-your-repository).

## See also

-   [Configuring code patterns](configuring-code-patterns.md)
-   [Using coding standards](../organizations/using-coding-standards.md)
-   [Auto-configuring your repository](configuring-code-patterns.md#auto-configuring-your-repository)
