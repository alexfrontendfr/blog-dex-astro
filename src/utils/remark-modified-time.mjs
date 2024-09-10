import fs from 'fs';

export function remarkModifiedTime() {
    return function (tree, file) {
        const filepath = file.history[0];
        const stats = fs.statSync(filepath);
        file.data.astro.frontmatter.lastModified = stats.mtime.toISOString();
    };
}