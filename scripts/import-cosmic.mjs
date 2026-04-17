#!/usr/bin/env node
// One-shot: converts cosmicjs.json export into Astro content-collection
// markdown files in src/content/projects/. Keeps HTML bodies verbatim.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, "..");
const src = resolve(root, "cosmicjs.json");
const outDir = resolve(root, "src/content/projects");
mkdirSync(outDir, { recursive: true });

const data = JSON.parse(readFileSync(src, "utf8"));
const projects = data.bucket.objects.filter((o) => o.type_slug === "projects");

const mfValue = (mfs, key) => mfs?.find((m) => m.key === key)?.value;
const mfRepeater = (mfs, key) => {
  const mf = mfs?.find((m) => m.key === key);
  if (!mf?.children) return [];
  return mf.children.map((child) =>
    Object.fromEntries(
      (child.children ?? []).map((f) => [f.key, f.value]),
    ),
  );
};

const yamlEscape = (s) => {
  if (s === undefined || s === null) return "";
  const str = String(s);
  if (/[:#\n"']/.test(str) || /^[\s-]/.test(str)) {
    return `"${str.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
  }
  return str;
};
const yamlArr = (arr) =>
  arr.length === 0 ? "[]" : "\n" + arr.map((v) => `  - ${yamlEscape(v)}`).join("\n");

for (const p of projects) {
  const mfs = p.metafields ?? [];
  const links = mfRepeater(mfs, "links").filter((l) => l.url);
  const fm = [
    `title: ${yamlEscape(p.title)}`,
    `featured: ${mfValue(mfs, "featured") === true}`,
    p.order !== undefined ? `order: ${p.order}` : null,
    mfValue(mfs, "start_date") ? `start_date: ${yamlEscape(mfValue(mfs, "start_date"))}` : null,
    mfValue(mfs, "end_date") ? `end_date: ${yamlEscape(mfValue(mfs, "end_date"))}` : null,
    `technologies:${yamlArr(mfValue(mfs, "technologies") ?? [])}`,
    `roles:${yamlArr(mfValue(mfs, "roles") ?? [])}`,
    `context:${yamlArr(mfValue(mfs, "context") ?? [])}`,
    links.length
      ? `links:\n${links
          .map(
            (l) =>
              `  - link_title: ${yamlEscape(l.link_title)}\n    url: ${yamlEscape(l.url)}`,
          )
          .join("\n")}`
      : `links: []`,
    mfValue(mfs, "video") ? `video: ${yamlEscape(mfValue(mfs, "video"))}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  const body = (p.content ?? "").trim();
  const out = `---\n${fm}\n---\n\n${body}\n`;
  writeFileSync(resolve(outDir, `${p.slug}.md`), out);
}

console.log(`Wrote ${projects.length} project files to ${outDir}`);
