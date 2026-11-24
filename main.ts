// Entry program for the make.fun bounty post-x-promote-make-your-own-bounty-01
// (Node 22, standard library only).
//
// The entry itself is the X post: a quote of make.fun's make-your-own-bounty
// post (https://x.com/makefunai/status/2124915864336236646) from @creepin_eth,
// with a photo of its own attached, make.fun in its text, and the entrant's
// play code. This program's only job is to hand the gate the post's address:
// it reads POST.json from the repository, checks that it names a real X post
// URL, writes it out to the output directory, and prints a short summary of
// the entry. Nothing here is scored; the house scores the post's replies,
// reposts and quotes through FxTwitter.
//
// Run locally:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

const SLUG = 'post-x-promote-make-your-own-bounty-01';
const PLAY_CODE = 'makefun-popcorn-parsley-blossom';
const SOURCE_POST = 'https://x.com/makefunai/status/2124915864336236646';

const repoDir = resolve(process.env.MAKEFUN_BOT_DIR ?? '/bot');
const outDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? '/output');
const postFile = join(repoDir, 'POST.json');

if (!existsSync(postFile)) {
  console.error(`no POST.json found in ${repoDir}`);
  process.exit(1);
}

let entry: unknown;
try {
  entry = JSON.parse(readFileSync(postFile, 'utf8'));
} catch (err) {
  console.error(`POST.json is not valid JSON: ${(err as Error).message}`);
  process.exit(1);
}

const url = (entry as { url?: unknown }).url;
if (typeof url !== 'string' || !/^https:\/\/(x\.com|twitter\.com)\/[^/]+\/status\/\d+$/.test(url)) {
  console.error(`POST.json does not name a post URL (got: ${JSON.stringify(url)})`);
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'POST.json'), `${JSON.stringify({ url })}\n`, 'utf8');

console.log(`competition: ${SLUG}`);
console.log(`post:        ${url}`);
console.log(`quotes:      ${SOURCE_POST}`);
console.log(`play code:   ${PLAY_CODE}`);
console.log(`written:     ${join(outDir, 'POST.json')}`);
