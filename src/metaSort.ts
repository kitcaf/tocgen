import { DocNode } from './type/docNode.js';

/**
 * Get effective display name with priority:
 * 1. mappingName (from user config)
 * 2. displayName (from enrichTree/frontmatter)
 * 3. name (original filename)
 */
export function getEffectiveDisplayName(node: DocNode): string {
    return node.meta?.mappingName ?? node.displayName ?? node.name;
}