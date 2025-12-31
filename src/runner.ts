import path from 'node:path';
import { scanDocs } from './scanner.js';
import { buildTreeFromPaths } from './tree.js';
import { enrichTree } from './parser.js';
import { sortTree, renderToMarkdown } from './generator.js';
import { updateReadme } from './injector.js';
import { TocConfig } from './type/index.js';

export async function runCli(options: TocConfig) {
    const { scanPath } = options;

    const paths = await scanDocs({ cwd: scanPath });
    if (!paths.length) {
        throw new Error('No Markdown files found in the target directory.');
    }

    let tree = buildTreeFromPaths(paths);

    tree = await enrichTree(tree, scanPath);
    tree = sortTree(tree);

    const markdown = renderToMarkdown(tree);

    const readmePath = path.join('.', 'README.md');
    await updateReadme(readmePath, markdown);

    return { success: true, readmePath };
}