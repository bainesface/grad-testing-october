const stage02Concepts = require('../../stage-02/concepts.md');
const stage02AcceptanceCriteria = require('../../stage-02/challenge/acceptance-criteria.md');

const { App: Stage02ExampleStart } = require('../../stage-02/example/start');

const {
  App: Stage02ExampleCompleted,
} = require('../../stage-02/example/completed');
const { MarkdownLoader } = require('../MarkdownLoader');
const { Stage } = require('../Stage');
const { stages } = require('../wrapStages');

const stage02 = {
  name: 'Stage 02 - Asserting against the DOM',
  path: 'app/stage-02',
  component: Stage,
  items: [
    {
      name: 'Concepts',
      component: MarkdownLoader,
      path: 'app/stage-02/concepts',
      markdownUrl: stage02Concepts,
    },
    {
      name: 'Example Start',
      component: Stage02ExampleStart,
      type: 'example',
      path: 'app/stage-02/example/start',
    },
    {
      name: 'Example Completed',
      component: Stage02ExampleCompleted,
      type: 'example',
      path: 'app/stage-02/example/completed',
    },
    {
      name: 'Challenge Acceptance Criteria',
      component: MarkdownLoader,
      path: 'app/stage-02/challenge/acceptance-criteria',
      markdownUrl: stage02AcceptanceCriteria,
    },
    {
      name: 'Challenge Start',
      component: stages[2].completed,
      path: 'app/stage-02/challenge/start',
    },
    {
      name: 'Challenge Completed',
      component: stages[2].completed,
      path: 'app/stage-02/challenge/completed',
    },
  ],
};

module.exports = stage02;
