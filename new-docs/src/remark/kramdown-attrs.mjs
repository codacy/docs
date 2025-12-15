/**
 * Converts kramdown-style attribute list blocks (`{: #id .class key=value}`)
 * into the brace syntax expected by `remark-attrs` (`{#id .class key=value}`).
 *
 * This enables writing:
 *   ## Heading
 *   {: #my-id}
 *
 * And list items like:
 *   1. Item
 *      {: #item-id}
 */
export default function remarkKramdownAttrs() {
	return (tree) => {
		transformKramdownAttrParagraphs(tree);
	};
}

function transformKramdownAttrParagraphs(node) {
	if (!node || typeof node !== 'object') return;

	const children = node.children;
	if (Array.isArray(children)) {
		for (let index = 0; index < children.length; index++) {
			const child = children[index];

			if (isKramdownAttrParagraph(child)) {
				const attrs = extractKramdownAttrs(child);
				if (!attrs) continue;

				const transformed = `{${attrs}}`;
				const previous = children[index - 1];

				if (previous && previous.type === 'list') {
					setParagraphText(child, transformed);
					continue;
				}

				if (previous && (previous.type === 'heading' || previous.type === 'paragraph')) {
					appendText(previous, ` ${transformed}`);
					children.splice(index, 1);
					index--;
					continue;
				}

				// Fallback: keep the paragraph, but convert syntax so remark-attrs can still use it
				// where applicable (e.g., for lists when AST shape differs).
				setParagraphText(child, transformed);
				continue;
			}

			transformKramdownAttrParagraphs(child);
		}
	}
}

function isKramdownAttrParagraph(node) {
	if (!node || node.type !== 'paragraph') return false;
	if (!Array.isArray(node.children) || node.children.length !== 1) return false;
	const only = node.children[0];
	return only?.type === 'text' && typeof only.value === 'string' && only.value.trim().startsWith('{:');
}

function extractKramdownAttrs(paragraphNode) {
	const raw = paragraphNode.children[0].value.trim();
	// Match "{: ...}" where "..." doesn't contain "}".
	const match = raw.match(/^\{\:\s*([^}]+)\}\s*$/);
	if (!match) return null;
	return match[1].trim();
}

function setParagraphText(paragraphNode, value) {
	paragraphNode.children = [{ type: 'text', value }];
}

function appendText(node, suffix) {
	if (!Array.isArray(node.children) || node.children.length === 0) {
		node.children = [{ type: 'text', value: suffix.trimStart() }];
		return;
	}
	const last = node.children[node.children.length - 1];
	if (last.type === 'text' && typeof last.value === 'string') {
		last.value += suffix;
	} else {
		node.children.push({ type: 'text', value: suffix });
	}
}

