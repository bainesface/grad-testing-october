const stage04Concepts = require('../../stage-04/concepts.md');
const { App: Stage04ExampleStart } = require('../../stage-04/example/start');
const {
  App: Stage04ExampleCompleted,
} = require('../../stage-04/example/completed');

const stage04AcceptanceCriteria = require('../../stage-04/challenge/acceptance-criteria.md');
const { MarkdownLoader } = require('../MarkdownLoader');
const { Stage } = require('../Stage');
const { stages } = require('../wrapStages');

const stage04 = {
  name: 'Stage 04 - A more complete http mock',
  path: 'app/stage-04',
  component: Stage,
  items: [
    {
      name: 'Concepts',
      component: MarkdownLoader,
      path: 'app/stage-04/concepts',
      markdownUrl: stage04Concepts,
    },
    {
      name: 'Example Start',
      component: Stage04ExampleStart,
      type: 'example',
      path: 'app/stage-04/example/start',
    },
    {
      name: 'Example Completed',
      component: Stage04ExampleCompleted,
      type: 'example',
      path: 'app/stage-04/example/completed',
    },
    {
      name: 'Challenge Acceptance Critetia',
      component: MarkdownLoader,
      path: 'app/stage-04/challenge/acceptance-criteria',
      markdownUrl: stage04AcceptanceCriteria,
    },
    {
      name: 'Challenge Start',
      component: stages[4].start,
      path: 'app/stage-04/challenge/start',
    },
    {
      name: 'Challenge Completed',
      component: stages[4].completed,
      path: 'app/stage-04/challenge/completed',
    },
  ],
};

module.exports = stage04;
