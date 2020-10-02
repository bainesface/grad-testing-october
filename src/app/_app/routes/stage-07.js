const stage07Concepts = require('../../stage-07/concepts.md');
const { App: Stage07ExampleStart } = require('../../stage-07/example/start');
const {
  App: Stage07ExampleCompleted,
} = require('../../stage-07/example/completed');
const stage07AcceptanceCriteria = require('../../stage-07/challenge/acceptance-criteria.md');

const { MarkdownLoader } = require('../MarkdownLoader');
const { Stage } = require('../Stage');
const { stages } = require('../wrapStages');

const stage07 = {
  name: 'Stage 07 - Integrating new component with the app',
  path: 'app/stage-07',
  component: Stage,
  items: [
    {
      name: 'Concepts',
      component: MarkdownLoader,
      path: 'app/stage-07/concepts',
      markdownUrl: stage07Concepts,
    },
    {
      name: 'Example Start',
      component: Stage07ExampleStart,
      type: 'example',
      path: 'app/stage-07/example/start',
    },
    {
      name: 'Example Completed',
      component: Stage07ExampleCompleted,
      type: 'example',
      path: 'app/stage-07/example/completed',
    },
    {
      name: 'Challenge Acceptance Critetia',
      component: MarkdownLoader,
      path: 'app/stage-07/challenge/acceptance-criteria',
      markdownUrl: stage07AcceptanceCriteria,
    },
    {
      name: 'Challenge Start',
      component: stages[7].start,
      path: 'app/stage-07/challenge/start',
    },
    {
      name: 'Challenge Completed',
      component: stages[7].completed,
      path: 'app/stage-07/challenge/completed',
    },
  ],
};

module.exports = stage07;
