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

// The post must be from the entrant's own public account, and the quote
// target must be make.fun's own post: a URL from any other account, or a
// quote of the wrong post, is not this entry.
const handle = url.split('/')[3];
if (handle !== 'creepin_eth') {
  console.error(`POST.json names a post from @${handle}, not the entrant @creepin_eth`);
  process.exit(1);
}
if (!/^https:\/\/(x\.com|twitter\.com)\/makefunai\/status\/\d+$/.test(SOURCE_POST)) {
  console.error(`quote target is not make.fun's post (got: ${SOURCE_POST})`);
  process.exit(1);
}
if (!/^[a-z]+(-[a-z]+)*$/.test(PLAY_CODE)) {
  console.error(`play code is not well formed (got: ${PLAY_CODE})`);
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'POST.json'), `${JSON.stringify({ url })}\n`, 'utf8');

console.log(`competition: ${SLUG}`);
console.log(`post:        ${url}`);
console.log(`quotes:      ${SOURCE_POST}`);
console.log(`play code:   ${PLAY_CODE}`);
console.log(`written:     ${join(outDir, 'POST.json')}`);
