# dataset-study-app

A Node.js script that generates a set of fake study records and downloads a matching avatar image for each one.

**Status:** Stub. The repo is a single 37-line script with no tests and no output folder in version control, so it is a one-off spike rather than an app.

## The problem

The code suggests a dataset for practising study or labelling exercises: each record has a person's name, a difficulty level and a subject, plus a picture. The script builds that dataset without needing real data.

## What it does

- Generates 500 records with `@faker-js/faker`: a full name, a difficulty (Easy, Medium or Hard), a category (Math, Science, History or English) and an avatar URL.
- Downloads each avatar with `axios` as binary data.
- Saves each image into `./data` with a file name that encodes the name and the indexes of the difficulty and category, for example `jane-doe_1_2.png`.

## How it's built

- Node.js ES modules, `axios` for HTTP, and `@faker-js/faker` (a dev dependency) for the sample data.
- A single `main()` function runs the downloads one at a time with `await` inside a `for` loop.
- Difficulty and category are picked by sorting arrays with a random comparator, which is a rough way to pick a random item.

## Running it locally

```bash
npm install
mkdir data          # the script writes into ./data but does not create it
npm run dev         # runs: node index.js
```

## What's left

- The script does not create `./data`, so it fails on a clean checkout unless the folder is made first.
- Downloads run one after another with no error handling, so one failed request stops the run.
- Picking a random item with `sort(() => 0.5 - Math.random())` is not a uniform choice. `faker` can pick these values directly.
- The output is image files only. There is no index or CSV that links each image to its record.
- The 500 record count and the label lists are hard-coded.
- There are no tests.
