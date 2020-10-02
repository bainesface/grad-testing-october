const stage01Concepts = require('../../stage-01/concepts.md');
const stage01AcceptanceCriteria = require('../../stage-01/challenge/acceptance-criteria.md');
const { App: Stage01ExampleStart } = require('../../stage-01/example/start');
const {
  App: Stage01ExampleCompleted,
} = require('../../stage-01/example/completed');
const { MarkdownLoader } = require('../MarkdownLoader');
const { Stage } = require('../Stage');
const { stages } = require('../wrapStages');

const stage01 = {
  name: 'Stage 01 - Handling user input',
  path: 'app/stage-01',
  component: Stage,
  items: [
    {
      name: 'Concepts',
      component: MarkdownLoader,
      path: 'app/stage-01/concepts',
      markdownUrl: stage01Concepts,
    },
    {
      name: 'Example Start',
      component: Stage01ExampleStart,
      type: 'example',
      path: 'app/stage-01/example/start',
    },
    {
      name: 'Example Completed',
      component: Stage01ExampleCompleted,
      type: 'example',
      path: 'app/stage-01/example/completed',
    },
    {
      name: 'Challenge Acceptance Criteria',
      component: MarkdownLoader,
      path: 'app/stage-01/challenge/acceptance-criteria',
      markdownUrl: stage01AcceptanceCriteria,
    },
    {
      name: 'Challenge Start',
      component: stages[1].start,
      path: 'app/stage-01/challenge/start',
    },
    {
      name: 'Challenge Completed',
      component: stages[1].completed,
      path: 'app/stage-01/challenge/completed',
    },
  ],
};

module.exports = stage01;
