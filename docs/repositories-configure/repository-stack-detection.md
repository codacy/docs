# Repository stack detection

On every analysis of your repository's default branch, Codacy detects your repository's stack: its languages, frameworks, and libraries. Codacy uses this stack to make code pattern configuration relevant to what your repository actually contains, rather than to its languages alone.

## Where you'll see it

-   **Code patterns page:** a pattern whose framework isn't part of your repository's stack shows a warning icon next to its name. Hovering it explains why, for example: *"React wasn't detected in this repository. This pattern may report false positives."* A **Stack compatible** filter lets you show only patterns that match your stack.

-   **Issues page:** an issue raised by a pattern outside your stack shows a banner:

    > **React wasn't detected in this repository**
    >
    > This pattern only applies to React code, so its results here are likely false positives. **Disable pattern** or **Give us feedback**

-   **Coding standards:** when choosing which repositories a coding standard applies to, you can filter the repository list by **Stack**.

!!! note
    Stack detection is advisory. Codacy doesn't automatically enable or disable code patterns based on your repository's stack — you still apply changes yourself, [manually](configuring-code-patterns.md) or with [auto-configuration](configuring-code-patterns.md#auto-configuring-your-repository).

## See also

-   [Configuring code patterns](configuring-code-patterns.md)
-   [Using coding standards](../organizations/using-coding-standards.md)
-   [Auto-configuring your repository](configuring-code-patterns.md#auto-configuring-your-repository)
