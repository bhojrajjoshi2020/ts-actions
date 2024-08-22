import * as core from '@actions/core';

async function run() {
  try {
    const myInput = core.getInput('my-input');
    core.info(`Processing input: ${myInput}`);
    
    const myOutput = `Processed ${myInput}`;
    core.setOutput('my-output', myOutput);
  } catch (error) {
    if (error instanceof Error) {
      core.setFailed(error.message);
    } else {
      core.setFailed('An unknown error occurred.');
    }
  }
}

run();
