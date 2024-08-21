import * as core from '@actions/core';

async function run() {
  try {
    const myInput = core.getInput('my-input');
    core.info(`Processing input: ${myInput}`);
    
    const myOutput = `Processed ${myInput}`;
    core.setOutput('my-output', myOutput);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
